# Deployment Topology v1 (Ops Control Tower)

**Last updated:** 2026-03-08

## Purpose
Define a concrete, runnable deployment topology for the Ops Control Tower as it exists today (file-first, static surfaces), while making the next migration steps explicit (event log ingestion, DB, and service boundaries).

This increment focuses on:
- components and their responsibilities,
- data flows between components,
- environment boundaries (local workspace vs published site),
- migration path to DB/outbox + background worker,
- key risks.

---

## Topology summary (v1)

### Environments
1) **Authoring / Ops Runtime (local OpenClaw host)**
- Location: `/home/kain/.openclaw/workspace`
- Owned by: OpenClaw runtime (agents + scripts)
- Contains:
  - source-of-truth operational artefacts (`/ops/*.md|html|csv`)
  - architecture contracts (`/ops/architecture/*`)
  - generated pipeline outputs (`/outputs/cv/*`)

2) **Published Ops Site (static)**
- Location: `tmp_crabbie_repo` (a separate git repo used as publish target)
- Publishing mechanism: `ops/publish_ops.sh` copies a curated subset of files into the publish repo and pushes to `main`.
- Hosting assumption (v1): GitHub Pages or equivalent static hosting behind `ops-mattkain.com` (see `ops-mattkain-com-links.txt`).


### Components
A) **OpenClaw Agents (producers)**
- Role: create/update operational artefacts (CSV/MD/HTML) and, where implemented, emit domain events.
- Examples of outputs:
  - `ops/agent-tasks.csv`, `ops/job-pipeline.csv`
  - `ops/CONTROL_TOWER.md`, `ops/UPDATE_CAPTURE.md`
  - `outputs/cv/**` (manifests + QA, see T-0205)

B) **Control Tower Static UI (read model)**
- Role: human-readable dashboards.
- Files:
  - `ops/status.html`, `ops/kanban.html`, `ops/agent-queue.html`, `ops/api-usage.html`, `ops/cv-preview.html`
  - `/ops/ui/*` for CSS/JS.
- Data sources in v1:
  - CSV/MD files directly (client-side fetch or pre-rendered embedding depending on the page)
  - (soon) `ops/events/events-YYYY-MM.jsonl` as an additional, append-only feed.

C) **Publisher (deployment step)**
- Role: copy artefacts from authoring workspace into publish repo and push.
- Implementation: `ops/publish_ops.sh`.
- Key behaviour:
  - pushes static surfaces + curated supporting files
  - includes `outputs/cv` markdown/json for preview
  - does NOT publish the full workspace

D) **Static Host (serving layer)**
- Role: serve the published repo over HTTPS.
- No server-side execution in v1.

---

## Data flow (v1)

### Flow 1: Operational updates → dashboards
1. Agent updates a source artefact in workspace, e.g. `ops/agent-tasks.csv`.
2. Dashboard pages in the workspace reflect the change locally.
3. `publish_ops.sh` copies updated artefacts into publish repo.
4. Static host serves updated pages.

### Flow 2: CV pipeline outputs → preview
1. Pipeline produces `outputs/cv/<role_id>/<run_id>/*` (md/json/txt) in workspace.
2. `publish_ops.sh` selectively copies these to the publish repo under `outputs/cv/...`.
3. `ops/cv-preview.html` renders a selected draft from the published outputs.

### Flow 3 (optional/next): Domain events → derived views
1. Producer emits an event into `ops/events/events-YYYY-MM.jsonl` (file-first event log).
2. A worker (local script or agent) reads JSONL and derives:
   - aggregated metrics,
   - alerts,
   - denormalised read models for UI.

Note: Event model and schemas exist in `ops/architecture/EVENT_MODEL_V1.md` and `ops/architecture/schemas/*`.

---

## Deployment boundaries and trust

### What gets published (current contract)
`publish_ops.sh` is the explicit allow-list. It publishes:
- selected HTML pages
- select markdown artefacts
- `/ops/ui/*` assets
- select CSVs (`agent-tasks.csv`, `job-pipeline.csv`)
- `/ops/downloads/*.pdf`
- `/outputs/cv/**/*.(md|json|txt)`

### What must NOT be published
- secrets, tokens, credentials
- full raw logs, local caches
- any personal data not required for the operational view

Recommendation (guardrail): add a pre-publish check that fails if the publish repo contains patterns like `.env`, `*.pem`, `id_rsa`, `token`, etc.

---

## Migration notes (how v1 evolves without rework)

### Step 1: Add an explicit “Control Tower Worker” (still local)
Goal: move computation off ad-hoc page logic and into a deterministic build step.
- Create `ops/worker/` with:
  - `ingest_events.js` (JSONL → derived JSON)
  - `build_read_models.js` (CSV/MD + events → `ops/usage/*.json`, `ops/events/summary.json`, etc.)
- UI pages switch to loading derived JSON rather than scraping CSV.

Why this helps:
- stable UI contracts
- faster pages
- fewer client-side parsing bugs

### Step 2: Introduce a DB for CRM (SQLite first)
Goal: stop treating CSV as a database.
- Adopt SQLite in workspace (`ops/crm.sqlite` or `data/crm.sqlite`).
- Keep emitting events (file-first) from the DB write path.
- Keep publishing derived read models (JSON) so the static site stays static.

### Step 3: Outbox pattern + asynchronous publishing
Goal: transactional consistency and eventual transport upgrade.
- Add `event_outbox` table in DB.
- Add a worker process that:
  - reads and publishes outbox rows to JSONL (or to a message bus later)
  - marks rows as published.

### Step 4: Optional message bus (only if needed)
If/when multiple consumers appear (alerting, BI, external integrations), introduce:
- NATS / Redis Streams / SNS+SQS / PubSub,
while keeping the event envelope unchanged.

---

## Risks and mitigations

1) **Accidental publication of sensitive data**
- Risk: publish script copies too much, or outputs contain secrets.
- Mitigation:
  - keep strict allow-list (current approach)
  - add pre-push scanning (regex + deny-list)
  - ensure generated pipeline artefacts never embed credentials.

2) **Tight coupling to workspace pathing**
- Risk: hard-coded absolute paths break portability.
- Mitigation:
  - standardise relative paths in manifests and links
  - reserve absolute paths for local-only scripts.

3) **Static-site constraints limit interactivity**
- Risk: dashboards become JS-heavy, brittle.
- Mitigation:
  - push complexity into derived read models (build-time)
  - keep UI as simple rendering.

4) **Multiple sources of truth (CSV + DB + events)**
- Risk: drift and inconsistent dashboards.
- Mitigation:
  - declare a system of record per domain per phase
  - add reconciliation checks in the worker.

5) **No clear promotion path (dev → prod)**
- Risk: changes are shipped straight from local edits.
- Mitigation:
  - require PRs in the publish repo for non-trivial changes
  - add a staging branch/site if required.

---

## Concrete next increment hooks
If we proceed, the next architecture increment that fits this topology is:
- a **Read Model Contract**: define JSON shapes produced by the worker for `status.html` and `kanban.html` (versioned, schema’d), so UI decouples from CSV parsing.
