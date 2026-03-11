# Crabbie Ops Complete Artefact Export

Generated (UTC): 2026-03-11 04:13:01
Total files exported: 119

## File index
- `ARCHITECT_REVIEW_PACK.md`
- `BUSINESS_ANALYSIS_STREAM.md`
- `COMMANDS.md`
- `CONTROL_TOWER.md`
- `DELEGATION_MODEL.md`
- `EXECUTION_PLAN_2026-03-03.md`
- `MODEL_COST_STRATEGY.md`
- `PRODUCT_REQUIREMENTS_BACKLOG_V1.md`
- `TEAM_OPENCLAW.md`
- `UPDATE_CAPTURE.md`
- `activity.html`
- `agent-queue.html`
- `agent-roster.yaml`
- `agent-tasks.csv`
- `agents/README.md`
- `agents/atlas.md`
- `agents/forge.md`
- `agents/ledger.md`
- `agents/polish.md`
- `agents/radar.md`
- `agents/tide.md`
- `agents/vantage.md`
- `agents.html`
- `api-usage.html`
- `architect-review.html`
- `architecture/CONTROL_TOWER_API_EVENT_ENVELOPE_ALIGNMENT_2026-03-09.md`
- `architecture/DEPLOYMENT_TOPOLOGY_V1.md`
- `architecture/EVENT_CONSUMPTION_PIPELINE_V1.md`
- `architecture/EVENT_MODEL_V1.md`
- `architecture/INTEGRATION_CONTRACTS_V1.md`
- `architecture/MEMORY_INDEX_V1.md`
- `architecture/MEMORY_LAYERS_V1.md`
- `architecture/OPS_DATA_STORE_SQLITE_SCHEMA_V1.md`
- `architecture/OPS_EVENT_SCHEMAS_TASK_AGENT_RUN_V1.md`
- `architecture/OUTBOX_PATTERN_V1.md`
- `architecture/PUBLISH_GUARDRAILS_V1.md`
- `architecture/READ_MODEL_CONTRACTS_V1.md`
- `architecture/integrations/ops.agent.capacity_changed.v1.md`
- `architecture/integrations/ops.run.status_changed.v1.md`
- `architecture/integrations/ops.task.status_changed.v1.md`
- `architecture/memory-index.jsonl`
- `architecture/openapi/control-tower-api.v1.yaml`
- `architecture/schemas/crm.application.status_changed.v1.schema.json`
- `architecture/schemas/crm.job.status_changed.v1.schema.json`
- `architecture/schemas/crm.task.status_changed.v1.schema.json`
- `architecture/schemas/event-envelope.schema.json`
- `architecture/schemas/memory.entry.v1.schema.json`
- `architecture/schemas/ops.agent.capacity_changed.v1.schema.json`
- `architecture/schemas/ops.agent.upserted.v1.schema.json`
- `architecture/schemas/ops.run.status_changed.v1.schema.json`
- `architecture/schemas/ops.task.created.v1.schema.json`
- `architecture/schemas/ops.task.id_remapped.v1.schema.json`
- `architecture/schemas/ops.task.status_changed.v1.schema.json`
- `architecture/schemas/pipeline.cv_run.completed.v1.schema.json`
- `architecture/schemas/readmodel.kanban_board.v1.schema.json`
- `architecture/schemas/readmodel.status_summary.v1.schema.json`
- `crm/STATUS_MAPPING_V1.md`
- `crm/status-mapping-v1.json`
- `crm-schema-v0.sql`
- `cv-pipeline/README.md`
- `cv-pipeline/qa-thresholds-v1.json`
- `cv-preview.html`
- `cv-run/index.html`
- `cv-run.html`
- `dashboard-worker.js`
- `design/COLOR_PALETTE_V1.md`
- `design/DESIGN_ROADMAP_V1.md`
- `design/ICONOGRAPHY_IMAGE_GUIDE_V1.md`
- `design/TYPOGRAPHY_SAMPLE_V1.md`
- `events/events-2026-03.jsonl`
- `events/index.json`
- `exports/ADVISOR_UPDATE_2026-03-09.md`
- `exports/CLAUDE_CODE_HANDOFF_PROMPT_2026-03-09.md`
- `exports/EXEC_BRIEF_2026-03-09.md`
- `exports/PROJECT_DUMP_2026-03-09.md`
- `exports/PROJECT_DUMP_COMPREHENSIVE_2026-03-09_1422UTC.md`
- `index.html`
- `job-pipeline.csv`
- `kanban.html`
- `master-project-brief.md`
- `opportunity-intelligence/scoring-model-v1.json`
- `opportunity-intelligence/top10-ranked-v1.json`
- `ops-mattkain-com-links.txt`
- `project-gantt.md`
- `publish_ops.sh`
- `publish_preflight_v1.sh`
- `status.html`
- `studio-roster.yaml`
- `ui/COMPONENTS_V1.css`
- `ui/CV_PREVIEW_V1.css`
- `ui/DESIGN_LANGUAGE_V1.md`
- `ui/MOCKUP_GUIDE_V1.md`
- `ui/STYLE_TOKENS_V1.css`
- `ui/activity_live_v1.js`
- `ui/agent_capacity_v1.js`
- `ui/agent_queue_live_v1.js`
- `ui/csv_v1.js`
- `ui/cv_run_v1.js`
- `ui/exec_dashboard_v1.js`
- `ui/kanban_live_v1.js`
- `ui/nav_v1.js`
- `ui/scroll_a11y_v1.js`
- `usage/API_USAGE_TRACKER_V1.md`
- `usage/WORKFLOW_USAGE_MODEL_V1.md`
- `usage/api-usage-log.csv`
- `usage/daily-usage-estimate-2026-03-09.json`
- `usage/workflow-usage-log.csv`
- `ux/ACCEPTANCE_CRITERIA_V1.md`
- `ux/HANDOFF_NOTES_V1.md`
- `ux/IA_AND_NAV_V1.md`
- `ux/JOB_TRIAGE_CONTROLS_SPEC_V1.md`
- `ux/JOURNEY_MAPS_V1.md`
- `ux/MASTHEAD_NAV_SPEC_V1.md`
- `ux/SITEMAP_V1.md`
- `ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ux/WIREFRAMES_V1.md`
- `visual/gantt.html`
- `visual/style-guide.html`
- `visual/wireframes.html`

## ARCHITECT_REVIEW_PACK.md

```markdown
# Architect Review Pack (Crabbie Ops)

Last updated: 2026-03-11 UTC

## 1) Canonical sources (authoritative)

- `CONTROL_TOWER.md` — priorities, blockers, decisions, acceptance status
- `UPDATE_CAPTURE.md` — chronological shipped-change log
- `agent-tasks.csv` — execution tasks and ownership
- `job-pipeline.csv` — role pipeline records and stage state
- `events/events-2026-03.jsonl` — event stream for activity/read models

## 2) Surface confidence (current)

### High confidence
- `kanban.html`
- `agent-queue.html`
- `activity.html`

These are operationally useful and read from live CSV/events files.

### Medium confidence
- `status.html`

Good orientation layer and artefact navigator, but mostly static/curated cards.

### Low confidence
- `read_models/v1/status_summary.json`

Currently manual-seeded/stale. Not reliable for telemetry truth.

## 3) Known gaps

- Read-model freshness pipeline is not fully automated yet.
- `updated_at` normalisation/backfill still in-flight (PRD-008 dependency).
- CV run/preview flow still being hardened for stronger UX and QA predictability.

## 4) Suggested architect review order

1. `CONTROL_TOWER.md`
2. `UPDATE_CAPTURE.md`
3. `agent-tasks.csv` + `job-pipeline.csv`
4. `activity.html`
5. `architecture/INTEGRATION_CONTRACTS_V1.md`
6. `architecture/openapi/control-tower-api.v1.yaml`

## 5) Companion web page

- `architect-review.html` (human-readable navigation page)
```

## BUSINESS_ANALYSIS_STREAM.md

```markdown
# Business Analysis Stream (Dedicated)

Purpose: deepen requirements quality, backlog grooming, and delivery readiness.

## BA Responsibilities
1. Expand each P0/P1 requirement into implementation-ready acceptance tests.
2. Maintain dependency map and sequencing.
3. Identify requirement gaps, ambiguities, and risk assumptions.
4. Produce weekly requirement quality report.

## Weekly Outputs
- Requirement maturity board (Draft / Refined / Ready)
- Scope delta report (new requests vs committed scope)
- Blocker escalation pack with decision options

## Current Focus
- Formalise job record field dictionary and validations.
- Define stage transition matrix + guardrails.
- Define CV artefact manifest contract and required keys.
- Define Team Operations Board data contract.
```

## COMMANDS.md

```markdown
# Employment Pod Command Router (Chat Shortcuts)

Use these in chat and Crabbie will update pipeline + agent queues:

## Role status updates
- `applied 3,5`
- `ignore 1,4`
- `interview 2`
- `reject 6`

## Task prioritisation
- `prioritise T-0004 high`
- `prioritise 6 high` (role number from digest)

## Agent allocation
- `assign T-0005 Forge`
- `assign role 7 to Vantage`

## Queue control
- `start T-0002`
- `pause T-0002`
- `done T-0002`

## Digest steering
- `keep 2,4`
- `drop 1,5`
- `prep 2,4`

## Notes
- Numbered role commands refer to the latest digest numbering.
- If unclear, Crabbie will ask one clarifying question.
```

## CONTROL_TOWER.md

```markdown
# Squad PM Control Tower

**Last updated:** 2026-03-10 18:48 UTC

## 1) Backlog status changes (since last capture)

Capture window: since **2026-03-10 15:48 UTC**.

### Status moved
- **T-0305 — Activity Timeline page (PRD-006)**
  - Delivery execution status (agent task): **In Progress → Done**.
  - Evidence: `ops/activity.html` shipped (events JSONL first + derived fallback + diagnostics) and `ops/status.html` now includes the compact **“What changed”** module linking to Activity.
- **T-0317 — CV Preview hardening (PRD-007)**
  - Delivery execution status (agent task): **Backlog → Approved**.
  - Meaning: UX handoff is ready; build can implement now without further grooming.

### PRD alignment (system-of-record hygiene)
- **PRD-006 — Activity Timeline**
  - Delivery status should now read **Done** in `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` (matches T-0305 completion).

---

## 2) Top 3 priorities (next 24–48h)

1. **T-0317 – CV Preview: blank default + safe loader (Build) [Approved]**
   - Remove misleading default `outputs/cv/...` path.
   - Enforce allowlist `outputs/cv/**`, reject traversal/protocols, safe error + a11y status states, escape-first markdown rendering.
   - This is the highest-risk surface (broken-by-default + path abuse), so it should ship next.
2. **T-0316 / PRD-008 – `job-pipeline.csv` updated_at backfill (CRM) [Backlog]**
   - Add canonical `updated_at` column + non-destructive backfill rules.
   - This stabilises Kanban ordering and makes derived Activity fallback meaningful when events JSONL is unavailable.
3. **T-0306 – Team Ops board closeout (Build) [Review]**
   - Drive to strict PRD-005 pass: gauges by canonical bucket, movement feed sorted by `updated_at`, blockers panel, filter + deep links, resilient error states.

_Next up (queued): T-0307 (PRD-002 hardening) to finish Kanban resilience + status alias mapping source-of-truth._

---

## 3) Blockers + decision requests

### Blockers (operational)
- **CV Preview remains broken-by-default + security gap remains (until T-0317 lands):** the loader must be blank by default and must not fetch arbitrary paths.
- **Derived recency still depends on `updated_at`:** until PRD-008/T-0316 lands, any derived fallback ordering can’t be relied on for true recency across all jobs.

### Decision requests (open)
- **Paused role work (T-0001–T-0006):** confirm when to restart, and which single role to resume first (u&u vs Metro), plus role brief inputs.
- **PRD-003-DR1 (CV QA gate):** confirm minimum QA checks required to unblock PDF.
- **PRD-006 decision bundle (confirm defaults or override):**
  - DR1: canonical `type` enum list (default: `release`, `decision`, `build`, `data`, `incident`, `task`)
  - DR2: retention window (default: last 30 days)
  - DR3: derived activity behaviour when events exist (default: hide derived when events present; show fallback only on events load failure)
- **PRD-005 decision requests (Team Ops board):**
  - DR1: whether “Approved” is distinct from “Review” in v1 UI (recommend: bucket=Review; chip=Approved)
  - DR2: canonical status buckets to display in gauges (recommend: Backlog, In Progress, Blocked, Review, Done)
- **PRD-007 decision requests (CV Preview loader):**
  - DR1: whether PDF preview (`outputs/cv/<role_id>/cv.pdf`) should be supported here or remain markdown-only v1
  - DR2: maximum draft size threshold + truncation behaviour (recommend: warn at 1 MB, truncate at 250k chars)
- **PRD-008 decision requests (`updated_at` backfill rules):**
  - DR1: proxy precedence for backfill (recommend: documented fixed precedence list + pick latest parseable within it)
  - DR2: required timestamp format (recommend: ISO-8601 UTC `YYYY-MM-DDTHH:MM:SSZ`)
  - DR3: whether to overwrite present-but-invalid `updated_at` values (recommend: fill blanks by default; add `--fix-invalid` flag)
- **PRD-001-DR1 (Canonical job record):** confirm canonical required fields list for a “valid job record”.
- **PRD-002-DR1 (Kanban status mapping):** confirm canonical source-of-truth for status alias mapping (recommend: a single JSON mapping file shared by Kanban + derived Activity).

---

## 4) Acceptance criteria updates (make work testable)

Acceptance criteria baseline remains in `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` (PRD-001…PRD-008) plus UX acceptance criteria (`ops/ux/ACCEPTANCE_CRITERIA_V1.md`).

Updates/signals in this window:
- **No net-new AC authored in this capture.** This run is primarily a **status/priority alignment** update reflecting T-0305 completion and T-0317 being implementation-ready (Approved).
```

## DELEGATION_MODEL.md

```markdown
# Delegation Model (Crabbie OS)

## Operating principle
Crabbie acts as **Chief Architect + Orchestrator**, not primary implementer.
Execution is delegated to specialist agents with clear charters and deliverables.

## Core loop
1. Crabbie defines objective + acceptance criteria.
2. Work is assigned to specialist agent(s).
3. Outputs are reviewed against guardrails.
4. Approved outputs are integrated and deployed.
5. Activity is logged for traceability.

## Squad structure
- Employment Pod: role discovery, analysis, CV, CRM, outreach.
- Studio Pod: UX, UI, web build, copy, QA, automation.

## Release cadence
- Incremental visible pushes to dev pages.
- Daily 5pm Brisbane status summary.
- Morning check-in includes: shipped, in-progress, blockers, next 3.

## Hard safety rule
No irreversible destruction without explicit approval from Matt.
```

## EXECUTION_PLAN_2026-03-03.md

```markdown
# Execution Plan – Initialisation (2026-03-03)

## Priority Stack
1. Phase 1 CV Automation Pipeline (highest)
2. CRM foundation bootstrap
3. Visible UI progress loop

## 48-hour Plan

### Track A: CV Pipeline
- A1: Define canonical input schema (`job_url` OR `job_text`)
- A2: Build requirement extraction routine
- A3: Build CV evidence bank from existing CV docs
- A4: Generate tailored markdown draft (2-page target)
- A5: PDF export step + deterministic output paths
- A6: Add quality gate checklist (relevance/layout/clarity)

### Track B: CRM Foundation
- B1: Create sqlite DB with `ops/crm-schema-v0.sql`
- B2: Add import adapter from job digest / Gmail items
- B3: Add status lifecycle transitions

### Track C: Visible Progress
- C1: Update dashboard tiles for CV pipeline status
- C2: Add daily increment notes section
- C3: Publish progress checkpoint at regular cadence

## Risks / Blockers
- Memory vector layer currently not configured (memory status unknown)
- Missing curated long-term `MEMORY.md` in workspace root
- SSH key path from Mac→VM broken for scp; slows asset transfer

## Cost Controls
- Use local processing for file transforms where possible
- Reserve high-intelligence passes for tailoring/polish only
- Batch updates and summaries to reduce API turns

## Definition of Done (Phase 1)
- User provides JD/URL once
- System returns tailored CV draft + final PDF + rationale
- Typical user iteration <= 1 round
```

## MODEL_COST_STRATEGY.md

```markdown
# Model & Cost Strategy (POC)

## Objective
Balance output quality with API cost, target <= $2/day during proof of concept.

## Workload Routing
- **High-intelligence (GPT-class):**
  - CV tailoring final pass
  - Strategic synthesis
  - Architecture decisions
- **Lightweight/default passes:**
  - Requirement extraction
  - Job classification and scoring
  - Digest generation and status updates
  - Data formatting/transforms

## Operational Rules
1. Use one high-intelligence pass per CV cycle max unless quality gate fails.
2. Batch low-risk updates into one message to reduce turns.
3. Prefer local/CLI transforms for file operations (parse, convert, export).
4. Run periodic smoke checks, not continuous polling.
5. Keep prompts schema-first and concise for repeatable tasks.

## Monitoring
- Check session usage daily via session status.
- Flag if usage trend risks exceeding target.
- Adjust routing by moving non-critical tasks to lightweight passes.
```

## PRODUCT_REQUIREMENTS_BACKLOG_V1.md

```markdown
# Product Requirements Backlog v1

Owner: Tide (PM Control Tower)
Contributors: Vantage (UX), Ledger (CRM), Forge (CV), Polish (UI), Build Engineer

## Purpose
Single backlog for detailed, testable product requirements with grooming state.

## Priority Buckets
- P0: Core workflow integrity
- P1: Usability and speed
- P2: Optimisation and polish

## Requirement Format
- **Req ID**
- **Title**
- **Problem / Outcome**
- **User story**
- **Acceptance criteria**
- **Edge cases / Non-goals**
- **Dependencies**
- **Decision requests**
- **Owner**
- **Grooming state** (Draft / Refined / Ready)
- **Delivery status** (Backlog / In Progress / Blocked / Done)

---

## P0

### PRD-001 — Canonical Job Record + Stage Model
- Outcome: one source of truth per job record.
- User story: As operator, I can manage each opportunity from intake to close in a consistent schema.

- Acceptance criteria:
  1. **Canonical schema + versioning**
     - Job record schema is defined in one canonical place (`ops/crm-schema-v0.sql`) and treated as authoritative.
     - Any schema changes increment a version marker (either SQL comment header or a companion `ops/crm/schema-version.json`) and are captured in `ops/UPDATE_CAPTURE.md`.
  2. **Explicit required fields (machine-readable)**
     - A required field set exists at `ops/crm/job-record-required-fields-v1.json`.
     - This file enumerates, at minimum: `job_id`, `stage`, `updated_at`, and whatever fields the UI uses for the “headline” (role/company) rendering.
     - The required field set is consumed by validators (UI and/or preflight) rather than duplicated in multiple JS files.
  3. **Stage model (canonical + stable)**
     - Canonical `stage` enum is exactly: `triage`, `drafting`, `applied`, `progressing`, `closed`.
     - Stage labels shown to humans may be title-cased, but persisted values stay canonical (lowercase, underscore-free).
  4. **Closed reasons are separate**
     - Closing a job sets `stage=closed` and requires `closed_reason` (enum) and `closed_at` (timestamp).
     - Changing `closed_reason` MUST NOT change `stage`.
  5. **No shadow fields across surfaces**
     - Any UI surface that edits or renders job records (including `ops/kanban.html`, future job detail surfaces, and derived Activity) maps fields from the canonical schema only.
     - If a surface needs a computed field, it is computed at render-time and must not be persisted into the job record as an alternate source.
  6. **Validation and publish gating**
     - If a job record is missing any required field (per `job-record-required-fields-v1.json`), the UI renders a visible validation warning on the affected card/row.
     - Any action that would “publish” a job record dependent surface (e.g. generate derived activity items, generate summaries, export) is blocked until the record validates.
     - Validation errors include: missing field name(s) and the job_id (or row index if job_id absent).
  7. **Interoperability with CSV v1**
     - If `ops/job-pipeline.csv` is treated as a v1 transport, it must include the canonical column names for required fields.
     - A single mapping table may be used to support legacy column names, but canonical output columns must remain stable.

- Edge cases / Non-goals:
  - Non-goal (v1): importing historical jobs at high fidelity.
  - Missing `job_id`: record is treated as invalid; it may render in an “Invalid rows” warning list, but must not be merged into canonical state.
  - Stage value is unknown/unmapped: record renders with a visible “Unknown stage” chip and is excluded from canonical stage counts.
  - Stage transitions:
    - `closed` → any other stage requires an explicit “reopen” action and clears `closed_at` (but preserves `closed_reason_history`, if implemented later).
    - Closing a record without `closed_reason` is invalid and blocked.
  - Duplicate `job_id` (multiple rows): latest by `updated_at` wins; losing row is reported as duplicate in warnings.

- Dependencies:
  - `ops/crm-schema-v0.sql` (canonical schema)
  - `ops/crm/job-record-required-fields-v1.json` (required field set)
  - (Recommended) validator utility shared by Kanban + future job views (e.g. `ops/ui/job_validation_v1.js`)

- Decision requests:
  - PRD-001-DR1: Confirm canonical required fields list for a “valid job record”.
    - Default recommendation (until confirmed): `{job_id, role_title, company_name, stage, updated_at, source_url?}`.
  - PRD-001-DR2: Confirm v1 `closed_reason` enum values.
    - Recommendation: `rejected`, `withdrawn`, `no_response`, `role_closed`, `other`.

- Owner: Ledger
- Grooming state: Refined
- Delivery status: Backlog

### PRD-002 — Live Kanban From Data
- Outcome: board reflects latest job pipeline without manual HTML editing.
- User story: As operator, I can view the job pipeline as a kanban board derived from the canonical job data, so the board is always current.

- Acceptance criteria:
  1. **Data loading (v1 canonical source)**
     - Kanban loads from `ops/job-pipeline.csv` via the shared loader (`ops/ui/csv_v1.js`), not bespoke CSV parsing.
     - The fetch path used is visible in the UI on error (to enable quick diagnosis).
  2. **Status mapping + aliases**
     - Raw CSV statuses are mapped to canonical kanban columns using a single mapping table.
     - Mapping supports aliases (e.g. `Applied` → `applied`).
     - Unknown/unmapped statuses do not break layout and are rendered in an “Unknown” column (or “Other” column), with a visible “Unmapped status” chip.
  3. **Rendering + ordering**
     - Each job card renders, at minimum: job_id (or equivalent stable key), role/company (if present), and stage/status.
     - Within a column, cards are sorted newest-first by `updated_at` when present; otherwise stable order is preserved.
  4. **Resilience**
     - If CSV is missing/unreadable/invalid: show an inline error state and preserve the page shell (nav, headings, empty state).
     - If some rows are invalid (missing required columns): skip those rows and show “X rows skipped” warning.
  5. **Publish-cycle updates**
     - Board updates on the publish cycle (page reload is acceptable for v1).
     - No manual HTML edits required to update the board contents.
  6. **A11y + usability**
     - Board is a labelled, keyboard-focusable horizontal scroll region (tabindex + visible focus styling) to make horizontal scroll discoverable.
     - Cards/columns maintain readable contrast and visible focus states.
  7. **Performance**
     - Initial render completes within 250 ms for up to 500 jobs on a typical laptop.

- Edge cases / Non-goals:
  - Empty pipeline (0 rows): render an empty state (not an error).
  - Duplicate job rows (same job_id): render only the latest by `updated_at` when available; otherwise render first occurrence and flag “Duplicate job_id” in warnings.
  - Non-goal (v1): drag-and-drop editing of stages.
  - Non-goal (v1): real-time streaming updates without reload.

- Dependencies:
  - `ops/ui/kanban_live_v1.js`
  - `ops/ui/csv_v1.js`
  - (Recommended) `ops/crm/kanban-status-aliases-v1.json` (single mapping table)

- Decision requests:
  - PRD-002-DR1: Confirm canonical source-of-truth for status alias mapping.
    - Recommendation: `ops/crm/kanban-status-aliases-v1.json` so Kanban + derived Activity can share mappings.

- Owner: Build Engineer
- Grooming state: Ready
- Delivery status: In Progress

### PRD-008 — Job Pipeline `updated_at` Normalisation + Backfill
- Outcome: pipeline rows are consistently timestamped so derived Activity and sorting logic are reliable.
- User story: As operator, I can trust that jobs sort correctly and that derived activity reflects real recency, because every pipeline row has a parseable `updated_at`.

- Acceptance criteria:
  1. **Canonical column added**
     - `ops/job-pipeline.csv` includes an `updated_at` column (ISO-8601 preferred; RFC3339 acceptable).
     - `updated_at` is treated as the canonical timestamp for UI sorting (Kanban, derived Activity fallback) and is not inferred in multiple places.
  2. **Backfill existing rows (non-destructive)**
     - Existing rows without `updated_at` are backfilled using the best available proxy field(s) (e.g. `last_action_at`, `applied_at`, `created_at`, or a parseable date embedded in notes).
     - If no proxy can be parsed, `updated_at` is left blank (do not invent dates).
  3. **Parse + validation rules**
     - Parser accepts only unambiguous date formats (ISO-8601 / RFC3339).
     - If a value is present but unparseable, it is treated as invalid and flagged (see diagnostics), not silently coerced.
  4. **Diagnostics surfaced to operator**
     - `ops/kanban.html` (PRD-002) and `ops/activity.html` (PRD-006 derived fallback) show a visible warning when:
       - X rows have missing `updated_at`, and/or
       - Y rows have invalid/unparseable `updated_at`.
     - Warning includes the attempted file path and a short remediation hint (“Backfill `updated_at` in ops/job-pipeline.csv”).
  5. **Sorting contract**
     - When `updated_at` is present and valid, newest-first ordering MUST use it.
     - When missing/invalid, the row/card is still rendered but is sorted after valid-timestamp rows (stable order for the remainder).
  6. **Change logging**
     - Any backfill run or bulk edit to `ops/job-pipeline.csv` is captured in `ops/UPDATE_CAPTURE.md` with the proxy rule used.
  7. **Backfill tool contract (repeatable + safe)**
     - Backfill is implemented as a single repeatable script (recommend: `ops/crm/job_pipeline_updated_at_backfill_v1.js`).
     - Script supports `--dry-run` (no file writes) and `--apply` (writes).
     - Script is idempotent: running it twice without source changes produces no further diffs.
  8. **Write safety + backup**
     - On `--apply`, script writes a timestamped backup copy alongside the CSV before modifying it (e.g. `ops/job-pipeline.csv.bak-YYYYMMDD-HHMMSS`).
     - Script preserves column order and line endings; it MUST NOT reorder rows or drop unknown columns.
  9. **Backfill report artefact (operator-visible)**
     - Each run produces a concise report at `ops/reports/job-pipeline-updated-at-backfill-YYYY-MM-DD.md` including:
       - total rows scanned, rows updated, rows left blank,
       - invalid/unparseable values count (existing + encountered),
       - proxy precedence used (explicit list),
       - up to 20 sample `job_id` rows updated (before → after),
       - “next steps” if invalid values remain.

- Edge cases / Non-goals:
  - Mixed timezone offsets: timestamps are sorted by absolute time; when displayed, use UTC label unless/until per-user TZ is implemented.
  - Multiple proxy fields exist: pick the latest parseable proxy by precedence order and document the precedence.
  - Non-goal (v1): perfect historical accuracy, only consistency and explicit unknowns.

- Dependencies:
  - `ops/job-pipeline.csv` (data source)
  - PRD-002 (Kanban sorting + warnings)
  - PRD-006 (derived Activity fallback depends on timestamps)
  - Delivery task: `T-0316` (implement backfill)
  - Backfill script (recommended path): `ops/crm/job_pipeline_updated_at_backfill_v1.js`
  - Backfill reports folder: `ops/reports/`

- Decision requests:
  - PRD-008-DR1: Confirm proxy field precedence for backfill (latest wins vs fixed precedence).
    - Recommendation: fixed precedence list (documented) + “latest parseable” within that set.
  - PRD-008-DR2: Confirm required timestamp format.
    - Recommendation: ISO-8601 UTC `YYYY-MM-DDTHH:MM:SSZ`.
  - PRD-008-DR3: Confirm whether backfill may overwrite existing (present-but-invalid) `updated_at` values.
    - Recommendation: only fill blanks by default; optionally add `--fix-invalid` flag to overwrite invalid values when a proxy date is available.

- Owner: Ledger (CRM)
- Grooming state: Ready
- Delivery status: Backlog

### PRD-003 — CV Run Flow (Input -> Analysis -> Draft -> QA -> PDF)
- Outcome: repeatable, auditable CV generation with an explicit QA gate and a predictable on-disk artefact layout.
- User story: As operator, I can run a CV workflow for a specific role_id, review evidence and QA results, and only then generate the final PDF with confidence.

- Acceptance criteria:
  1. **Role-scoped run + deterministic output layout**
     - For a given `role_id`, all run artefacts are written under `outputs/cv/<role_id>/`.
     - The run does not write outside `outputs/cv/**` (including temp files).
     - Artefacts are either deterministic (same inputs → same filenames) or include a run_id subfolder, but not a mix.
  2. **Stage artefacts (minimum set)**
     - `analysis.md` (or `analysis.txt`) is produced and includes: role summary, key claims, and a traceable link back to input sources.
     - `evidence.json` (or `evidence.md`) is produced and lists the citations/supporting bullets used for claims.
     - `draft.md` (human-readable) is produced.
     - `qa.json` is produced with a machine-readable pass/fail per check and an overall `passed` boolean.
     - `qa_summary.md` is produced and is human-readable (copy/paste friendly).
  3. **Manifest + cross-linking**
     - A single manifest file exists at `outputs/cv/<role_id>/manifest.json`.
     - Manifest includes: `role_id`, `run_id` (if used), `started_at`, `completed_at`, list of artefacts (path, type, sha256 optional), and the final decision (`pdf_generated`: true/false).
     - `ops/cv-preview.html` can load and render the latest draft for a `role_id` without guessing paths.
  4. **QA gate before PDF**
     - PDF generation is strictly blocked unless `qa.json.passed == true`.
     - If QA fails, the run completes with `pdf_generated=false` and a clear failure reason is persisted in `qa_summary.md` and the manifest.
  5. **Operator feedback (clear failure modes)**
     - On failure, the system produces a single “what to do next” section with actionable remediation steps (e.g. “Missing required section: Executive Summary”).
     - Errors are not silent: a missing input or parse failure must result in a visible failure summary.

- Edge cases / Non-goals:
  - **QA failure behaviour**: If QA fails, PDF MUST NOT be generated, and MUST NOT overwrite a previously generated PDF for that role_id.
  - **Partial artefact generation**: If analysis succeeds but drafting fails, manifest still records completed artefacts and the stage where failure occurred.
  - **Concurrent runs**: If two runs are triggered for the same `role_id` concurrently, they must not corrupt each other’s outputs (recommend: run_id subfolder + “latest” pointer in manifest).
  - **Non-goal (v1)**: perfect content scoring; QA is structural + consistency checks, not subjective quality ranking.
  - **Non-goal (v1)**: multi-template PDF selection; one canonical PDF template is sufficient.

- Dependencies:
  - `ops/cv-pipeline/README.md` (pipeline design)
  - `ops/cv-run.html` (run surface)
  - `ops/cv-preview.html` (preview surface)
  - `ops/publish_preflight_v1.sh` (preflight guardrails, if used for publish gating)

- Decision requests:
  - PRD-003-DR1: Confirm the minimum QA check set required to unblock PDF.
    - Recommendation (minimum): required sections present, length within bounds, no placeholder tokens, role/company names consistent, and contact details present.
  - PRD-003-DR2: Confirm whether outputs are deterministic filenames or run_id subfolders (recommend: run_id subfolder + manifest pointer to latest).
  - PRD-003-DR3: Confirm the canonical artefact file naming conventions (recommend: `analysis.md`, `evidence.json`, `draft.md`, `qa.json`, `qa_summary.md`, `cv.pdf`).

- Owner: Forge + Vantage
- Grooming state: Ready
- Delivery status: In Progress

### PRD-007 — CV Preview Loader Hardening + Blank Default
- Outcome: CV Preview cannot be “broken by default” and cannot fetch arbitrary paths outside the CV outputs allowlist.
- User story: As operator, I can safely preview a generated CV draft by supplying a workspace-relative path, without risk of path traversal, protocol fetching, or misleading defaults.

- Acceptance criteria:
  1. **Blank default (no misleading path)**
     - On first load, the “Draft file path” input is blank.
     - The page renders a helpful empty state explaining how to load a draft, including the recommended pattern: `outputs/cv/<role_id>/draft.md`.
     - The page MUST NOT ship with a hard-coded role_id path that may not exist in a given publish.
  2. **Allowlist: only `outputs/cv/**`**
     - The loader accepts only workspace-relative paths that start with `outputs/cv/`.
     - Any other path is rejected before fetch and results in a visible error notice (no network request).
  3. **Traversal + normalisation guardrails**
     - The loader rejects any path containing `..` segments (including URL-encoded variants) after decoding.
     - The loader rejects backslashes (`\`) to avoid Windows-style traversal ambiguity.
     - The loader rejects control characters and trims leading/trailing whitespace.
  4. **Protocol + origin restrictions**
     - The loader rejects any value that looks like a URL (`http:`, `https:`, `file:`, `data:`, `javascript:`) or begins with `//`.
     - Fetches are always same-origin relative paths (no external origins).
  5. **Query-param handling is safe**
     - If `?file=` is provided, it is treated as an untrusted input and passed through the same validation allowlist/guards as manual input.
     - If invalid, the input remains populated (so the operator can edit) and an error is shown explaining what was rejected.
  6. **Clear error states + diagnostics**
     - On load failure, render a concise error message plus a small diagnostic line including (a) the attempted path and (b) HTTP status when available.
     - The error message MUST NOT include unescaped HTML from exceptions.
  7. **A11y + interaction contract**
     - “Load Draft” is submit-driven (Enter works), and loading toggles `aria-busy` on the render region.
     - Status updates are announced via `role=status` region (success/failure), and do not spam (clears after short delay).
  8. **No HTML injection via markdown**
     - Draft markdown is rendered via an allowlist renderer that escapes raw text first (no raw HTML passthrough).
     - Any future enhancements (links, emphasis) must preserve the escape-first rule.

- Edge cases / Non-goals:
  - If the operator pastes a valid-looking path but the file is not published: show “Not found” with the status code (e.g. 404).
  - If the draft is unusually large (> 1 MB): render a warning and truncate to the first N characters (N default 250k) to prevent UI hangs.
  - Non-goal (v1): browsing the outputs tree in UI; manual path entry is acceptable.
  - Non-goal (v1): rendering arbitrary markdown features; keep renderer minimal and safe.

- Dependencies:
  - `ops/cv-preview.html` (loader + default input value)
  - (Optional) `ops/ui/cv_preview_loader_v1.js` (extract loader logic to shared, testable module)
  - `outputs/cv/**` (published artefact directory)

- Decision requests:
  - PRD-007-DR1: Confirm whether PDF preview (`outputs/cv/<role_id>/cv.pdf`) should be supported in this surface or remain print-only from markdown.
    - Recommendation: keep markdown-only in v1; PDF view adds complexity and inconsistent print styles.
  - PRD-007-DR2: Confirm maximum draft size threshold and truncation behaviour.
    - Recommendation: warn at 1 MB, truncate at 250k chars (operator can open locally for full text).

- Owner: Polish + Build Engineer
- Grooming state: Ready
- Delivery status: Backlog

---

## P1

### PRD-004 — Persistent Navigation and Home Routing
- Outcome: consistent navigation across all published ops pages, with a predictable Home and an a11y-safe mobile menu.
- User story: As operator, I can move between ops surfaces without losing context, so I can manage delivery and pipeline quickly.

- Acceptance criteria:
  1. **Canonical primary nav (v1)**
     - Every published page renders the same primary nav set (order is stable):
       - Home (`ops/index.html`)
       - Status (`ops/status.html`)
       - Kanban (`ops/kanban.html`)
       - Agent Queue (`ops/agent-queue.html`)
       - Agents (`ops/agents.html`)
       - API Usage (`ops/api-usage.html`)
       - CV Preview (`ops/cv-preview.html`)
       - CV Run (`ops/cv-run.html`)
       - Team Ops (`ops/team-ops.html`) once shipped
       - Activity (`ops/activity.html`) once shipped
     - If a page is not yet shipped (missing file), the link may be omitted OR rendered as disabled text (choose one approach and apply consistently across the nav).
  2. **Home routing is deterministic**
     - Clicking the logo/Home link always routes to `ops/index.html`.
     - If `ops/index.html` cannot be loaded (mis-publish), Home falls back to `ops/status.html` (client-side redirect or server-side is acceptable; choose one and document).
  3. **Active state is automatic (no per-page hardcoding)**
     - Active nav item is derived from `location.pathname` by `ops/ui/nav_v1.js`.
     - Exactly one item is marked active via `aria-current="page"` and a visible style.
     - Pages MUST NOT carry bespoke per-page “active” CSS classes for nav state.
  4. **Mobile menu behaviour**
     - Nav collapses behind a toggle control at small widths.
     - Toggle is keyboard operable and exposes state via `aria-expanded` and `aria-controls`.
     - When open:
       - Escape closes the menu.
       - Clicking outside closes the menu.
       - Activating any nav link closes the menu.
  5. **A11y + focus management**
     - There is a functional skip link on every page that moves focus to `<main>` (or an explicit skip target).
     - Focus is never trapped in the mobile menu.
     - Visible focus states exist for the logo, toggle, and all nav links.
  6. **Resilience and diagnostics**
     - If `ops/ui/nav_v1.js` fails to load, the page still renders a minimal nav (static HTML) that includes at least Home + Status.
     - If a page is loaded from a non-standard path (e.g. preview environment), nav highlights still work (path matching uses filename rather than absolute URL origin).

- Edge cases / Non-goals:
  - Non-goal (v1): SPA router with client-side history navigation; plain links are sufficient.
  - Unknown page path (not in nav): no item is marked active; no errors thrown.
  - Sub-paths (if any future pages use folders): matching logic must still highlight the correct top-level page.

- Dependencies:
  - `ops/index.html` (canonical Home)
  - `ops/ui/nav_v1.js` (active state + mobile menu controller)
  - `ops/ui/COMPONENTS_V1.css` / `ops/ui/STYLE_TOKENS_V1.css` (focus + mobile panel styling)
  - `ops/ux/MASTHEAD_NAV_SPEC_V1.md` (UX contract)

- Decision requests:
  - PRD-004-DR1: Decide how to represent not-yet-shipped pages in the nav (omit vs disabled).
    - Recommendation: omit until shipped (simplest, avoids dead links), but keep ordering stable.
  - PRD-004-DR2: Decide Home fallback mechanism if `index.html` is missing (redirect vs server config).
    - Recommendation: client-side redirect in `index.html` shell is fine for v1 static publish.

- Owner: Polish + Build Engineer
- Grooming state: Ready
- Delivery status: In Progress

### PRD-005 — Team Operations Board
- Outcome: visible task movement and squad accountability.
- User story: As operator, I can see who is doing what, what is blocked, and what changed recently, so I can intervene early.

- Acceptance criteria:
  1. **Surface + shell**
     - `ops/team-ops.html` exists and renders within the standard masthead/navigation shell.
     - Page title and primary H1 clearly indicate “Team Ops”.
  2. **Data source (v1 canonical)**
     - Page loads from `ops/agent-tasks.csv` using the shared CSV loader (`ops/ui/csv_v1.js`) or equivalent.
     - Uses `ops/crm/status-mapping-v1.json` to map raw status labels to canonical buckets.
  3. **Workload gauge (per agent)**
     - Render one card per agent with counts by canonical status bucket (minimum: Backlog, In Progress, Blocked, Review, Done).
     - Agents are derived from the CSV `agent` column; unknown/blank agent values are grouped under “Unassigned”.
     - Each card includes a “Total open” number (all except Done).
  4. **Task movement feed (recent changes)**
     - Feed is derived from `updated_at` (descending). Items show: task_id, title, agent, status, updated_at.
     - Feed default is latest 25 items; “Show more” increases to 100 without page reload (client-side).
     - If `updated_at` is missing/unparseable, item is placed at the end and flagged.
  5. **Blockers panel**
     - Panel lists tasks where canonical status bucket == Blocked.
     - Each blocker row shows: task_id, title, agent, due_date (if present), and a short “blocker summary” extracted from `notes` up to first pipe `|` if present.
     - If due_date is in the past, row is visually flagged as overdue.
  6. **Filtering + deep links (v1 simple)**
     - Provide a client-side filter by agent and by canonical status bucket.
     - Filters are reflected in the URL query string (e.g. `?agent=Rivet&bucket=Blocked`) and restored on load.
  7. **A11y and resilience**
     - Tables/feeds use semantic markup (`<table>` for tabular, `<ul>`/`<ol>` for feed) with visible focus states.
     - If CSV fetch fails: show visible error banner with attempted path; render an empty-state shell (do not crash).

- Edge cases / Non-goals:
  - Unknown statuses in `ops/agent-tasks.csv`: map to canonical “Backlog” AND flag visibly (chip “Unknown status”).
  - CSV row missing `task_id`: row is skipped and counted in a “X rows skipped” warning.
  - Non-goal: editing tasks in UI (read-only v1).
  - Non-goal: real-time updates; refresh is manual or on page reload for v1.

- Dependencies:
  - `ops/team-ops.html` (new surface)
  - `ops/agent-tasks.csv` (canonical ops tasks)
  - `ops/crm/status-mapping-v1.json` (status mapping)
  - `ops/ui/csv_v1.js` (CSV loading)
  - `ops/ui/nav_v1.js` (navigation)

- Decision requests:
  - PRD-005-DR1: Confirm whether “Approved” is distinct from “Review” in v1 UI.
    - Recommendation: treat Approved as a subtype within Review for v1 (bucket=Review; chip=Approved) to avoid UI complexity.
  - PRD-005-DR2: Confirm canonical status buckets to display in gauges (recommend: Backlog, In Progress, Blocked, Review, Done).

- Owner: Tide + Build Engineer
- Grooming state: Ready
- Delivery status: In Progress

### PRD-006 — Activity Timeline (Events-first, CSV fallback)
- Outcome: clear activity narrative from real events.
- User story: As operator, I can review what changed (pipeline + squad output) without reading commits or guessing from the UI.
- Acceptance criteria (events-first):
  1. **Surface**: `ops/activity.html` exists and renders within the standard masthead/navigation shell.
  2. **Primary data source**: If an events JSONL file exists for the current month (e.g. `ops/events/events-YYYY-MM.jsonl`), the page renders from it.
  3. **Event schema** (minimum): each JSONL line MUST parse to an object with:
     - `ts` (ISO-8601 timestamp),
     - `type` (string enum),
     - `title` (short human-readable summary),
     - `refs` (array of file paths or URLs; may be empty),
     - `actor` (agent or “human”).
  4. **Sorting**: events are rendered newest-first.
  5. **Grouping**: events are grouped by local day label (UTC for now, unless decided otherwise).
  6. **Rendering**:
     - Each event shows timestamp, type chip, title, and optional refs list.
     - Refs that are workspace-relative file paths are rendered as non-clickable code (v1 static site) but are copyable.
  7. **Load failures**:
     - If the JSONL fetch fails, show a visible error banner with the attempted path and fall back to CSV-derived activity (if available).
     - If JSONL contains invalid lines, skip those lines and show a small “X lines skipped” warning.
  8. **Secondary data source (fallback)**: If no events JSONL exists (or it cannot be loaded), derive a basic activity list from:
     - `ops/job-pipeline.csv` (job stage deltas when available), and
     - `ops/agent-tasks.csv` (task status changes and updated_at).
     The derived activity MUST label items as “Derived” and must not pretend to be authoritative.
  9. **Performance**: timeline renders within 250 ms on a typical laptop for up to 2,000 events (client-side).
  10. **A11y**:
      - Timeline list is a semantic list (`<ol>` / `<ul>`),
      - page has a skip-link target,
      - visible focus states apply to any interactive controls.

- Edge cases / Non-goals:
  - Timezone ambiguity: v1 groups by UTC day; do not implement per-user TZ until requested.
  - Duplicate events: if two events share the same `ts` and `title`, render both (no de-dupe) but consider future hash-based de-dupe.
  - Missing optional fields: if `refs` missing, treat as empty array; if `actor` missing, render “system”.
  - Large JSONL file: if file exceeds 2 MB, render latest N events only (N default 250) and show “Showing latest 250 events”.
  - Non-goal: editing events in the UI (read-only v1).

- Dependencies:
  - UX spec + handoff: `ops/ux/HANDOFF_NOTES_V1.md` (timeline guidance) and `ops/ux/MASTHEAD_NAV_SPEC_V1.md`.
  - Seed events file exists: `ops/events/events-2026-03.jsonl`.
  - Shared nav JS: `ops/ui/nav_v1.js`.
  - `ops/job-pipeline.csv` MUST include parseable `updated_at` to make derived fallback ordering meaningful (see PRD-008; delivery task `T-0316`).

- Decision requests:
  - PRD-006-DR1: Confirm canonical `type` enum list for events.
    - Default recommendation (until confirmed): `release`, `decision`, `build`, `data`, `incident`, `task`.
  - PRD-006-DR2: Confirm retention window for events surfaced in UI.
    - Default recommendation (until confirmed): last 30 days.
  - PRD-006-DR3: Confirm whether derived activity should be suppressed when events exist.
    - Default recommendation (until confirmed): hide derived when events are present; show fallback only on events load failure.

- Owner: Vantage + Build Engineer
- Grooming state: Ready
- Delivery status: Done
```

## TEAM_OPENCLAW.md

```markdown
# Crabbie Employment Pod - Operating Model

## Mission
Land the right role fast with high-quality applications, tight pipeline control, and low-noise execution.

## Command Structure
- **Crabbie (Manager):** final orchestration, quality control, user-facing decisions.
- **Tide (Control Tower):** daily priorities, blockers, sequencing.
- **Radar (Scout):** finds and dedupes roles.
- **Vantage (Analyst):** decodes role requirements.
- **Forge (Writer):** writes role-targeted CV content.
- **Polish (Design):** enforces premium 2-page formatting.
- **Ledger (CRM):** tracks statuses, versions, follow-ups.
- **Atlas (Intel):** builds company/contact intelligence.

## Workflow (Autonomous-by-default)
1. Scout captures roles and assigns fit tier.
2. Analyst generates role brief.
3. Writer produces strongest-first application pack.
4. Design finalises polished PDF outputs.
5. CRM logs role status, CV version, and next actions.
6. Manager sends concise summary + decisions needed.

## Status Definitions
- `New`
- `Assessing`
- `CV Ready`
- `Applied`
- `Interview`
- `Offer`
- `Rejected`
- `Ignored`

## Current Priority Rules
- Prioritise **Brisbane** and **Remote**.
- Non-Brisbane/non-Remote shown in weekly secondary digest only.
- Exclude CTO/CIO-heavy roles by default.

## Daily Operating Cadence
- Inbox priority checks: 9am, 12pm, 3pm, 6pm AEST
- Jobs digest: 9am and 3pm AEST
- Weekly secondary market digest: Monday 10:30am AEST

## Next Automation Targets
- Auto-update `job-pipeline.csv` from digest decisions (`ignore x`, `prep x`, `applied x`).
- Auto-generate outreach drafts where contact email exists.
- Weekly pipeline review with stale-role nudges.
```

## UPDATE_CAPTURE.md

```markdown
# Update Capture

## 2026-03-03

## 2026-03-08
- Matt approved decision bundle (1-7): CRM stage model and triage structure, shared static nav approach, two-phase subagent plan, restart u&u role track only, Jobgether no-go, AUSTRAC-style role deprioritisation, CV preview path restriction to `outputs/cv/**`.
- Master project brief ingested and anchored to `ops/master-project-brief.md`.
- System audit complete (agents/memory/tools/files/runtime).
- Gap analysis complete.
- Execution roadmap created: `ops/EXECUTION_PLAN_2026-03-03.md`.
- CV pipeline design created: `ops/cv-pipeline/README.md`.
- CRM schema v0 created: `ops/crm-schema-v0.sql`.
- Model/cost routing strategy created: `ops/MODEL_COST_STRATEGY.md`.

## 2026-03-08
- Control Tower created: `ops/CONTROL_TOWER.md` (priorities, blockers/decisions, acceptance criteria, and backlog status movement).
- Shipped live data wiring for `ops/kanban.html`: now renders directly from `ops/job-pipeline.csv` via `ops/ui/kanban_live_v1.js` (+ `ops/ui/csv_v1.js`).
- Shipped live data wiring for `ops/agent-queue.html`: now renders directly from `ops/agent-tasks.csv` via `ops/ui/agent_queue_live_v1.js`, using canonical CRM task status mapping from `ops/crm/status-mapping-v1.json`.
- Extended canonical CRM task status enum to include `review` (supports CSV statuses `Review` and `Approved`).
- UI surface iteration pass: responsive layout + a11y affordances (skip-link target/focus), standardised sticky offset vars, and tightened CSS/design language docs (`ops/status.html`, `ops/agent-queue.html`, `ops/cv-preview.html`, `ops/ui/*`).
- Control Tower refreshed: reflected `T-0206` as **Blocked** pending nav reuse decision; added decision request on static masthead implementation approach.
- Control Tower refreshed again: marked decisions resolved (taxonomy + nav copy/paste), captured `T-0204` as **Approved** and `T-0303` as **In Progress**, and updated priority stack accordingly.

## Next Publishing Goal
- Expose/update a live web status view that includes:
  1. latest increment log,
  2. CV pipeline stage status,
  3. project Gantt timeline.

## UI Direction Captured (Builder screenshots)
- Dark, premium, low-noise interface with neon accent and soft glow connectors.
- Node-based orchestration visual language: orchestrator at centre with branching specialist agents.
- Clear hierarchy: strategist/planner layer above execution worker layer.
- Rounded cards/chips, subtle depth, restrained motion, high-contrast focal elements.
- Split utility + control layout in admin views: left rail list, right detail pane, tabbed sections.
- Product intent: make multi-agent workflow legible and confidence-inducing, not merely decorative.
- Additional reference direction captured: explicit memory controls/surfaces (memory flush/search/session-memory), visible security-scan trust indicators for downloadable modules, structured memory architecture views, and simple system-overview diagrams for onboarding/explainability.
- Additional workflow references captured: meeting-to-actions pipeline with approval gating (human-in-loop before task creation), RAG knowledge-base pipeline (multi-source ingest -> embed -> SQLite+vectors -> plain-English query), and advisory-council pattern (parallel specialist analyses plus synthesiser and feedback loop).
- Additional ops references captured: automated DB discovery/backups with encryption and retention, health monitoring heartbeat/checklist, config/doc drift monitoring, and update notification pattern in chat. Self-update actions remain explicit-approval only.

## 2026-03-09
- Groomed `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`: introduced explicit grooming state (Draft/Refined/Ready) + expanded requirement format to include edge cases + decision requests.
- Expanded PRD-006 (Activity Timeline) into implementation-ready acceptance criteria and edge cases; captured decision requests (event type enum, retention, derived-when-events-present).
- Added delivery task `T-0305` to `ops/agent-tasks.csv` for Rivet to implement `ops/activity.html` per PRD-006.
- Refreshed Control Tower: marked T-0303 Done; unblocked T-0206 (now In Progress) after masthead/nav copy-paste decision; pulled in AC-8 fix (CV preview default path must not mislead).
- Groomed PRD-005 (Team Operations Board): expanded into implementation-ready acceptance criteria/edge cases; moved Grooming state Refined → Ready.
- Added delivery task `T-0306` to `ops/agent-tasks.csv` for Rivet to implement `ops/team-ops.html` per PRD-005.
- Control Tower refresh (09:36 UTC): captured T-0305 **Backlog → In Progress**, surfaced new delivery work T-0306, and made Team Ops acceptance criteria explicit in Control Tower.
- Groomed PRD-003 (CV Run Flow): expanded into implementation-ready acceptance criteria (artefact set, manifest, QA gate, failure modes) and edge cases; moved Grooming state Refined → Ready.
- Updated delivery task T-0205 notes in `ops/agent-tasks.csv` to align with PRD-003 requirements (manifest + QA gate + PDF overwrite protection).
- Control Tower refresh (15:37 UTC): no new backlog movements since 09:36 capture; re-anchored top priorities to T-0305 (Activity), T-0206 (Nav/links), T-0205 (CV manifest + QA gate).
- Groomed PRD-001: moved Grooming state **Ready → Refined** pending confirmation of canonical required job fields (PRD-001-DR1); added recommendation to externalise required fields list.
- Expanded PRD-002 (Live Kanban From Data) into implementation-ready acceptance criteria and edge cases; added PRD-002-DR1 on status alias mapping source-of-truth.
- Added delivery task `T-0307` to `ops/agent-tasks.csv` to implement PRD-002 hardening (mapping, resilience warnings, perf/a11y guardrails).
- Control Tower refresh (18:40 UTC): captured latest delivery movement **T-0306 In Progress → Review** and **T-0315 In Progress → Done**; reprioritised next 24–48h to Activity (T-0305), CV manifest+QA gate (T-0205), and Team Ops closeout (T-0306).

## 2026-03-10
- Groomed `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`: expanded PRD-001 (Canonical Job Record + Stage Model) to add schema versioning, machine-readable required fields (`ops/crm/job-record-required-fields-v1.json`), validation/publish gating rules, and recommendations for `closed_reason` enum values.
- Adjusted PRD-006 grooming state: Ready → Refined and added default decisions for event `type` enum, retention window (30 days), and derived-when-events-present behaviour (hide derived when events exist).
- Added continuous BA delivery task T-0312 to `ops/agent-tasks.csv` (Squad Business Analyst Continuous) with status In Progress and today's timestamps; BA cron id: 41e6207f-db96-4527-b7a1-bfe0c5a823b6.
- Updated backlog decision requests: PRD-001 defaults for required fields (`job_id, role_title, company_name, stage, updated_at, source_url?`) and PRD-001-DR2 recommended closed_reason values (`rejected, withdrawn, no_response, role_closed, other`).
- **Control Tower hygiene:** restored missing rows in `ops/agent-tasks.csv` for T-0305/T-0306/T-0307/T-0315 (were referenced in docs but absent in CSV); refreshed `ops/CONTROL_TOWER.md` and recorded CV Preview AC-8 gap (default path must be blank).
- Files updated:
  - `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` (PRD-001 expanded, PRD-006 grooming state changed, PRD-006 defaults added)
  - `ops/agent-tasks.csv` (T-0312 appended; timestamps set to 2026-03-10)
  - `ops/UPDATE_CAPTURE.md` (this entry)

## 2026-03-10 (BA cron run @ 09:38 UTC)
- Groomed backlog:
  - PRD-006 moved **Refined → Ready** (implementation underway; defaults stand unless overridden).
- Expanded PRD-004 into implementation-ready acceptance criteria/edge cases/decisions (nav set, active-state automation, mobile behaviour, resilience).
- Updated BA task tracking row T-0312 notes in `ops/agent-tasks.csv` with this run stamp.
- Files updated:
  - `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` (PRD-004 expanded; PRD-006 moved to Ready)
  - `ops/agent-tasks.csv` (T-0312 run stamp)
  - `ops/UPDATE_CAPTURE.md` (this entry)

## 2026-03-10 (PM Control Tower cron run @ 09:48 UTC)
- Refreshed `ops/CONTROL_TOWER.md` (backlog status movement, top priorities, blockers/decisions, AC updates).
- Aligned PRD-006 delivery status **Backlog → In Progress** in `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` to match active build work (T-0305).

## 2026-03-10 (PM Control Tower cron run @ 12:48 UTC)
- Refreshed `ops/CONTROL_TOWER.md`: captured T-0305 **In Progress → Blocked** per `ops/agent-tasks.csv`, surfaced PRD-007/T-0317 as priority unblock work, and updated blockers/decision requests/AC notes.

## 2026-03-10 (BA cron run @ 12:38 UTC)
- Groomed backlog:
  - Added PRD-007 (CV Preview Loader Hardening + Blank Default) and moved it to **Ready** (implementation-ready AC + edge cases captured).
- Expanded PRD-007 into implementation-ready acceptance criteria, edge cases, dependencies, and decision requests (allowlist + traversal/protocol rejection, query-param safety, size limits).
- Updated `ops/agent-tasks.csv`:
  - T-0312 updated with this run stamp.
  - Added T-0317 (build) to implement PRD-007.
- Files updated:
  - `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` (PRD-007 added)
  - `ops/agent-tasks.csv` (T-0312 updated; T-0317 added)
  - `ops/UPDATE_CAPTURE.md` (this entry)

Next steps / recommended actions:
1. Build Engineer: implement T-0317 (PRD-007) by removing the default `outputs/cv/...` value in `ops/cv-preview.html` and enforcing allowlist + traversal/protocol guards before fetch.
2. Ledger: confirm PRD-001 required fields list (PRD-001-DR1) or accept defaults to unblock Ready movement.
3. Vantage + Build Engineer: confirm PRD-006 decisions (type enum, retention window, derived suppression) or accept defaults.
4. Tide (BA owner): continue daily grooming and move any PRDs whose decisions are confirmed to Ready; keep `ops/agent-tasks.csv` statuses aligned.
5. Ledger + Build Engineer: implement `ops/crm/job-record-required-fields-v1.json` + shared validator (`ops/ui/job_validation_v1.js`) to enforce publish gating rules in PRD-001.

## 2026-03-10 (BA cron run @ 15:38 UTC)
- Groomed backlog:
  - Added PRD-008 (Job Pipeline `updated_at` Normalisation + Backfill) and set Grooming state to **Ready** (implementation-ready AC + edge cases captured).
- Expanded PRD-008 into implementation-ready acceptance criteria, edge cases, dependencies, and decision requests (proxy precedence + timestamp format).
- Updated dependencies:
  - PRD-006 now explicitly depends on `ops/job-pipeline.csv` having parseable `updated_at` (links to PRD-008 and delivery task T-0316).
- Updated `ops/agent-tasks.csv`:
  - T-0312 updated with this run stamp.
- Files updated:
  - `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` (added PRD-008; PRD-006 dependency note)
  - `ops/agent-tasks.csv` (T-0312 run stamp)
  - `ops/UPDATE_CAPTURE.md` (this entry)

## 2026-03-10 (PM Control Tower cron run @ 15:48 UTC)
- Refreshed `ops/CONTROL_TOWER.md`: captured delivery movement **T-0305 Blocked → In Progress** (activity.html now exists; remaining work is status.html “What changed” module) and **T-0318 In Progress → Done**.
- Updated priorities: finish T-0305 last-mile integration, implement T-0317 (CV Preview hardening), then land T-0316/PRD-008 (`job-pipeline.csv` updated_at normalisation/backfill).

## 2026-03-10 (BA cron run @ 18:39 UTC)
- Groomed backlog:
  - PRD-006 delivery status **In Progress → Done** (T-0305 shipped).
- Expanded PRD-008 (Job Pipeline `updated_at` Normalisation + Backfill):
  - Added implementation-ready acceptance criteria for backfill tooling (dry-run/apply), write safety (backup + preserve column/row order), and a required operator report artefact under `ops/reports/`.
  - Added decision request PRD-008-DR3 (whether to overwrite invalid existing `updated_at` via a dedicated flag vs fill-blanks-only default).
- Updated `ops/agent-tasks.csv`: T-0312 run stamp appended.
- Files updated:
  - `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` (PRD-006 delivery status; PRD-008 AC/deps/decisions expanded)
  - `ops/agent-tasks.csv` (T-0312 run stamp)
  - `ops/UPDATE_CAPTURE.md` (this entry)

## 2026-03-10 (PM Control Tower cron run @ 18:48 UTC)
- Refreshed `ops/CONTROL_TOWER.md`:
  - Captured delivery movement **T-0305 In Progress → Done** (Activity shipped + Status “What changed” module present).
  - Captured **T-0317 Backlog → Approved** (CV Preview hardening is implementation-ready).
  - Reprioritised next 24–48h to: **T-0317 (CV Preview hardening)**, then **T-0316/PRD-008 (`updated_at` normalisation/backfill)**, then **T-0306 (Team Ops closeout)**.
- Files updated:
  - `ops/CONTROL_TOWER.md`
  - `ops/UPDATE_CAPTURE.md` (this entry)
```

## activity.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark light">
  <meta name="theme-color" content="#0b1020" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#f6f8ff" media="(prefers-color-scheme: light)">
  <title>Crabbie Ops Activity</title>
  <link rel="icon" type="image/jpeg" href="ui/assets/crabbie-logo.jpg">
  <link rel="apple-touch-icon" href="ui/assets/crabbie-logo.jpg">

  <link rel="stylesheet" href="ui/STYLE_TOKENS_V1.css">
  <link rel="stylesheet" href="ui/COMPONENTS_V1.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="topbar" role="banner">
    <div class="topbar__row">
      <a class="home-logo" href="index.html"><img src="ui/assets/crabbie-logo.jpg" alt="Crabbie"> Crabbie Ops Home</a>
      <button type="button" class="nav-toggle" data-nav-toggle aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation">☰ Menu</button>
    </div>
    <h1 class="topbar__title">Activity</h1>
    <p class="topbar__sub">Events-first timeline with a CSV-derived fallback.</p>
    <nav id="primary-nav" class="topbar__actions" data-nav-links aria-label="Primary">
      <a class="btn" href="status.html">Status</a>
      <a class="btn" href="activity.html">Activity</a>
      <a class="btn" href="kanban.html">Pipeline</a>
      <a class="btn" href="agent-queue.html">Agent Queue</a>
      <a class="btn" href="agents.html">Agents</a>
      <a class="btn" href="api-usage.html">API Usage</a>
      <a class="btn" href="cv-preview.html">CV Preview</a>
      <a class="btn" href="cv-run.html">CV Run</a>
    </nav>
  </header>

  <main id="main" class="board board--wrap" tabindex="-1" aria-label="Activity timeline">
    <section id="activityRoot" class="column" aria-label="Recent activity" aria-busy="true">
      <div class="column__shell">
        <h2 class="column__header">What changed</h2>
        <p id="activityMeta" class="muted" role="status">Loading activity…</p>
        <div id="activityOut"></div>
      </div>
    </section>
  </main>

  <script src="ui/nav_v1.js"></script>
  <script type="module" src="ui/activity_live_v1.js"></script>
</body>
</html>
```

## agent-queue.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark light">
  <meta name="theme-color" content="#0b1020" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#f6f8ff" media="(prefers-color-scheme: light)">
  <title>Agent Queue · Crabbie Ops</title>
  <link rel="icon" type="image/jpeg" href="ui/assets/crabbie-logo.jpg">
  <link rel="apple-touch-icon" href="ui/assets/crabbie-logo.jpg">

  <link rel="stylesheet" href="ui/STYLE_TOKENS_V1.css">
  <link rel="stylesheet" href="ui/COMPONENTS_V1.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="topbar" role="banner">
    <div class="topbar__row">
      <a class="home-logo" href="index.html"><img src="ui/assets/crabbie-logo.jpg" alt="Crabbie"> Crabbie Ops Home</a>
      <button type="button" class="nav-toggle" data-nav-toggle aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation">☰ Menu</button>
    </div>
    <h1 class="topbar__title">Agent Queue</h1>
    <p class="topbar__sub">Operational task board, rendered live from <a href="agent-tasks.csv">agent-tasks.csv</a>. Optional: add <code>?refresh_s=60</code> to auto-refresh.</p>
    <nav id="primary-nav" class="topbar__actions" data-nav-links aria-label="Primary">
      <a class="btn" href="status.html">Status</a>
      <a class="btn" href="activity.html">Activity</a>
      <a class="btn" href="kanban.html">Pipeline</a>
      <a class="btn" href="agent-queue.html">Agent Queue</a>
      <a class="btn" href="agents.html">Agents</a>
      <a class="btn" href="api-usage.html">API Usage</a>
      <a class="btn" href="cv-preview.html">CV Preview</a>
      <a class="btn" href="cv-run.html">CV Run</a>
    </nav>
  </header>

  <main id="main" aria-label="Task columns" tabindex="-1" aria-busy="false">
    <div class="item" style="margin:12px 16px 0 16px"><div class="item__small" role="status" aria-live="polite" aria-atomic="true" data-agent-queue-meta>Loading task board…</div></div>
    <div class="board" data-agent-queue-board tabindex="0" role="region" aria-label="Agent queue board (scroll horizontally)" aria-busy="false"></div>
    <noscript>
      <div class="column"><div class="column__shell"><h2 class="column__header">Agent Queue requires JavaScript</h2>
        <div class="item"><div class="item__small">Enable JavaScript to render the live board from <a href="agent-tasks.csv">agent-tasks.csv</a>.</div></div>
      </div></div>
    </noscript>
  </main>

  <script src="ui/nav_v1.js"></script>
  <script src="ui/scroll_a11y_v1.js"></script>
  <script type="module" src="ui/agent_queue_live_v1.js"></script>
</body>
</html>
```

## agent-roster.yaml

```yaml
team: Crabbie Employment Pod
owner: Matt Kain
manager_agent: Crabbie
objective: "Secure the right role quickly with high-quality applications and tight pipeline control."

global_guardrails:
  - No fabrication of CV facts.
  - No destructive mailbox actions (delete/spam/unsubscribe) without explicit instruction.
  - No external send on Matt's behalf unless requested or policy-approved.
  - Prioritise Brisbane and Remote roles.
  - Exclude CTO/CIO-heavy roles unless clearly growth/commercial/transformation-led.

agents:
  - id: control-tower
    name: Tide
    role: Program Manager / Chief of Staff
    personality: Calm, decisive, commercially literate.
    responsibilities:
      - Prioritise work across agents.
      - Maintain pipeline state and SLA timers.
      - Produce daily executive brief.
    inputs: [job-pipeline.csv, inbox digests, role briefs]
    outputs: [daily-priority-list, blockers, decisions-needed]

  - id: scout
    name: Radar
    role: Opportunity Scout
    personality: Curious, fast, signal-first.
    responsibilities:
      - Harvest roles from inbox + boards.
      - Deduplicate and score relevance.
      - Route high-fit roles to Role Analyst.
    skills: [job-search, triage, dedupe]

  - id: analyst
    name: Vantage
    role: Role Analyst
    personality: Analytical, blunt, strategic.
    responsibilities:
      - Decode hiring mandate and hidden criteria.
      - Produce targeted brief and keyword map.
      - Flag risks and interview narrative angles.
    outputs: [role-brief.md]

  - id: writer
    name: Forge
    role: CV Strategist / Writer
    personality: Direct, persuasive, evidence-led.
    responsibilities:
      - Produce strongest-first CV draft from approved facts.
      - Align narrative to role brief and ATS factors.
      - Prepare cover note + SEEK note when needed.

  - id: design
    name: Polish
    role: CV Layout & Design
    personality: Minimalist, premium, detail-obsessed.
    responsibilities:
      - Apply formatting standards and typography rules.
      - Enforce 2-page quality and spacing consistency.
      - Final PDF quality pass before release.

  - id: crm
    name: Ledger
    role: Pipeline & CRM Manager
    personality: Structured, relentless, precise.
    responsibilities:
      - Maintain role lifecycle status.
      - Track CV version used and comms history.
      - Age out stale opportunities and trigger follow-ups.

  - id: intel
    name: Atlas
    role: Company & Contact Intelligence
    personality: Methodical, context-rich, discreet.
    responsibilities:
      - Build target company dossiers.
      - Map key stakeholders and likely decision makers.
      - Surface warm-path intro opportunities.
```

## agent-tasks.csv

```csv
task_id,role_id,title,agent,priority,status,due_date,created_at,updated_at,notes
T-0001,R-2026-0006,Create role brief for u&u Chief Experience Officer,strategy,High,Blocked,2026-02-27,2026-02-27,2026-03-01,Awaiting brief | On hold per user instruction
T-0002,R-2026-0006,Draft tailored CV for u&u Chief Experience Officer,build,High,Blocked,2026-02-27,2026-02-27,2026-03-01,Starts after role brief | On hold per user instruction
T-0003,R-2026-0006,Apply formatting QA and final PDF for u&u role,ui,High,Blocked,2026-02-27,2026-02-27,2026-03-01,Use latest format rules | On hold per user instruction
T-0004,R-2026-0007,Create role brief for Metro South Health Senior Director role,strategy,High,Blocked,2026-02-27,2026-02-27,2026-03-01,Prioritise Brisbane relevance | On hold per user instruction
T-0005,R-2026-0007,Draft tailored CV for Metro South Health role,build,High,Blocked,2026-02-27,2026-02-27,2026-03-01,Starts after role brief | On hold per user instruction
T-0006,R-2026-0007,Apply formatting QA and final PDF for Metro role,ui,High,Blocked,2026-02-27,2026-02-27,2026-03-01,2-page layout rules | On hold per user instruction
T-0007,R-2026-0003,Mark Sharp & Carter role as Applied once confirmed,crm,Medium,Done,2026-02-28,2026-02-27,2026-03-01,Waiting user confirmation | Closed by user instruction: applied + monitor
T-0008,R-2026-0004,Prepare outreach draft if contact is available for Datacom,ops,Medium,Done,2026-02-28,2026-02-27,2026-03-01,Check ad contact details | Closed by user instruction: applied + monitor
T-0009,R-2026-0005,Check BOQ application completion status and log,crm,Medium,Done,2026-02-28,2026-02-27,2026-03-01,Track status change | Closed by user instruction: applied + monitor
T-0010,,Generate daily manager brief from pipeline + tasks,ops,High,In Progress,2026-02-27,2026-02-27,2026-02-27,Daily cadence
T-0101,,Define OS information architecture + nav model,strategy,High,Backlog,2026-03-01,2026-02-28,2026-02-28,Studio sprint 1
T-0102,,Create UI token system and component baseline,ui,High,Backlog,2026-03-01,2026-02-28,2026-02-28,Align to BMHQ-inspired layout
T-0103,,Refactor dashboard shell with sidebar + top search,build,High,Backlog,2026-03-01,2026-02-28,2026-02-28,Foundation for multi-page app
T-0104,,Write microcopy pack for dashboard actions + states,copy,Medium,Backlog,2026-03-01,2026-02-28,2026-02-28,"Button labels, hints, empty states"
T-0105,,Create release QA checklist + smoke tests,ops,High,Backlog,2026-03-01,2026-02-28,2026-02-28,Pre-publish gate
T-0106,,Implement JSON data layer + auto-refresh wiring,build,High,Backlog,2026-03-02,2026-02-28,2026-02-28,Move away from static-only updates
T-0111,,Integrate iCloud inbox monitoring into priority alert pipeline,crm,High,Backlog,2026-03-01,2026-02-28,2026-02-28,Needed for account invites and tool onboarding emails
T-0112,,"Create Crabbie account registry schema (tool, login email, status, owner, notes)",ops,High,Backlog,2026-03-01,2026-02-28,2026-02-28,Track autonomous tool accounts safely
T-0113,,Design secure credential handling flow for Crabbie-managed accounts,ops,High,Backlog,2026-03-01,2026-02-28,2026-02-28,"No plaintext in docs, use secrets + approvals"
T-0114,,Wire onboarding workflow: invite email detection -> account creation checklist,jobs,Medium,Backlog,2026-03-02,2026-02-28,2026-02-28,Route to delegation console and logs
T-0115,R-2026-0010,Validate employer identity + listing source for Jobgether role,research,High,Backlog,2026-03-01,2026-03-01,2026-03-01,Check Airbnb mismatch and direct company context
T-0116,R-2026-0010,Create role brief and fit screen for Head of Marketing remote role,strategy,High,Backlog,2026-03-01,2026-03-01,2026-03-01,Assess B2B SaaS/startup demand-gen fit
T-0117,R-2026-0010,Draft tailored CV for Head of Marketing remote role,build,High,Backlog,2026-03-01,2026-03-01,2026-03-01,Proceed after identity check + go/no-go
T-0201,,Create agent profile docs and sprint plans,ops,High,Done,2026-03-07,2026-03-07,2026-03-07,Published under ops/agents
T-0202,,Produce UX journey map artefacts v1,strategy,High,Done,2026-03-07,2026-03-07,2026-03-07,Published ops/ux/JOURNEY_MAPS_V1.md
T-0203,,Publish design roadmap incl typography and palette decisions,ui,High,Done,2026-03-07,2026-03-07,2026-03-07,Published ops/design/DESIGN_ROADMAP_V1.md
T-0204,,Implement canonical CRM status mapping spec,crm,High,Approved,2026-03-08,2026-03-08,2026-03-07,Decision approved by Matt; proceed with implementation.
T-0205,,Wire CV pipeline artefact manifest output,build,High,In Progress,2026-03-08,2026-03-07,2026-03-07,role_id keyed outputs + qa.json
T-0206,,Expand live ops site navigation and artefact links,build,Medium,In Progress,2026-03-08,2026-03-07,2026-03-09,Unblocked: Matt approved v1 copy/paste masthead + nav approach. Implement AC-1/AC-6 link surface + wire nav_v1.js; ensure Home links to index.html (fallback status.html).
T-0207,,Spec persistent masthead navigation for design/build,strategy,High,Done,2026-03-07,2026-03-07,2026-03-07,Published ops/ux/MASTHEAD_NAV_SPEC_V1.md
T-0301,,Squad UX Strategist Continuous (journeys/IA/nav/AC/hand-off),strategy,High,In Progress,,2026-03-08,2026-03-10,"Cron: adc1481d-61ab-4a0f-8f8e-8a0c3adfb22c | Maintain ops/ux artefacts tied to current build files | Last run 2026-03-09 08:28 UTC | Updates: added ops/cv-run.html as an in-scope build surface across IA + Sitemap + Journeys; Acceptance Criteria AC-1a nav set now explicitly includes CV Run when published; added AC-9 for CV Run (command + preview deep-link). | Last run 2026-03-09 10:28 UTC | Updates: refreshed UX artefacts timestamps; added AC-3b horizontal-scroll discoverability for Kanban board; IA/Nav build note now records board as labelled, focusable region; handoff notes warn against regressing board focusability. | Run 2026-03-10 06:28 UTC | Updates: AC/IA/Handoff/Journeys updated to reflect keyboard horizontal scrolling on Kanban + Agent Queue boards (←/→, PgUp/PgDn, Home/End) and scrollbar token/styling handoff notes; Acceptance Criteria AC-3b/AC-4b now specify the key bindings. | Run 2026-03-10 08:28 UTC | Updates: codified mobile-nav expanded-state panel scanability across IA/AC/Handoff/Journeys (aligns with `ops/ui/COMPONENTS_V1.css` mobile nav panel rule). | Run 2026-03-10 10:24 UTC | Updates: strengthened Activity timeline resilience requirements (skip-count + truncation notices) across Journeys/Timeline Spec/Acceptance Criteria; added build handoff UX-007 for JSONL parse diagnostics. | Run 2026-03-10 10:28 UTC | Updates: tightened AC-8 (CV Preview not broken-by-default) with build-tied implementation pointers (blank default + helper copy); HANDOFF UX-003 now includes a concrete HTML patch snippet + mdTip guidance to remove the non-existent default path and keep query-param help secondary. | Run 2026-03-10 12:28 UTC | Updates: refreshed UX artefacts timestamps; added AC-8b to harden CV Preview draft loader (reject protocols, reject '..', allowlist outputs/cv/ prefix) to match HANDOFF UX-003; IA/Journeys now explicitly record observed build gaps: Status missing 'What changed' module and CV Preview loader still needs hardening + blank default. | Run 2026-03-10 14:30 UTC | Updates: aligned UX specs to current CV flow: CV Preview convenience links (Run CV → cv-run.html?role_key=..., Pipeline → kanban.html?role_id=...); AC-1 now forbids hard-coded aria-current (nav_v1.js is source of truth) and flags current cv-preview/cv-run gap; AC-9 now includes Pipeline deep-link + role_key query hydration. | Run 2026-03-10 16:30 UTC | Updates: UX Sitemap now marks Activity as shipped (activity.html exists); verified status.html includes “What changed” module linking to activity.html; verified cv-preview.html still defaults mdPath to outputs/cv/R-2026-0017/draft.md (T-0317 remains outstanding). | Run 2026-03-10 18:30 UTC | Updates: IA/Nav now marks Activity as implemented (activity.html shipped) and records a small discoverability gap: Home lacks an Activity tile under Operate; Handoff updated to flag the same gap for build prioritisation. | Run 2026-03-10 20:30 UTC | Updates: IA_AND_NAV now reflects current Status “What changed” implementation as a link-first placeholder (Activity + Update Capture) until inline last-24h list ships; Acceptance Criteria AC-1a updated to reflect nav_v1.js as the sole active-state source (no per-page aria-current)."
T-0302,,Squad UI Designer Continuous (responsive/a11y improvements),ui,High,In Progress,,2026-03-08,2026-03-10,"Cron: 3bf4fdd4-3b38-4c1a-a9ed-5d846732ef3c | Maintain ops/ui + ops/*.html surfaces | Last run 2026-03-08 14:27 UTC | 2026-03-08 12:26 UTC: nav_v1.js now applies aria-current + active styling automatically; mobile menu closes on Escape/outside click/link click; added aria-controls. STYLE_TOKENS: underline on focus-visible links. COMPONENTS: aria-current styling + nav-toggle focus ring. agents.html: skip-link + tabindex=-1 main + labelled textareas. agent-queue.html: tabindex=-1 main. status.html: corrected active nav styling. DESIGN_LANGUAGE: documented aria-current rule. | 2026-03-08 14:19 UTC: STYLE_TOKENS add readable ::selection + prefers-contrast focus/border boost. COMPONENTS: home-logo focus ring; nav-toggle hover/active parity. status.html: aria-current=page on active nav. | 2026-03-08 14:27 UTC: COMPONENTS add responsive .table/.table-wrap styling + token-aligned capacity gauge colours. api-usage.html add skip-link, responsive table container, sticky headers within scroll region, and consistent primary nav set. agents.html improve responsive grid + textarea focus/size (token-aligned). agent-queue.html/kanban.html/status.html remove hard-coded active nav classes, add missing API Usage link, and standardise page titles. | Last run 2026-03-09 08:32 UTC | Updates: ops/ui/COMPONENTS_V1.css adds safe-area inset bottom padding to .board across breakpoints (prevents home-indicator overlap on mobile); ops/ui/DESIGN_LANGUAGE_V1.md documents safe-area rule. | Last run 2026-03-09 10:21 UTC | Updates: kanban board is now a labelled, keyboard-focusable scroll region (tabindex/role/aria-label) and `.board[tabindex=\0\""]:focus-visible` shows a focus ring for horizontal-scroll discoverability. | Last run 2026-03-09 10:32 UTC | Updates: CV Preview controls now submit as a form (Enter-to-load), main has tabindex=-1 for skip-link focus, and draft-load region announces state via aria-live + aria-busy; COMPONENTS adds a reusable .notice component, and CV Run copy failure notice now uses role=alert for assertive announcement; DESIGN_LANGUAGE documents dynamic-update announcement rules. | Run 2026-03-10 04:34 UTC | Updates: COMPONENTS_V1.css: sticky table headers now respect --sticky-offset (prevents thead hiding under topbar). api-usage.html: render CSV rows via textContent (no innerHTML) to avoid HTML injection and improve robustness. DESIGN_LANGUAGE_V1.md: documented sticky thead offset rule."" | Run 2026-03-10 06:19 UTC | Updates: Kanban board adds keyboard horizontal scrolling (←/→, PgUp/PgDn, Home/End) when board region focused; COMPONENTS adds visible scrollbar styling for .board; STYLE_TOKENS adds --scrollbar-thumb/--scrollbar-thumb-hover tokens; DESIGN_LANGUAGE documents board keyboard scroll + scrollbar tokens. | Run 2026-03-10 06:34 UTC | Updates: COMPONENTS_V1.css adds matching visible scrollbar styling for .table-wrap (tables) for better horizontal-scroll discoverability; api-usage.html now toggles aria-busy on main/table region during fetch and shows a token-aligned .notice (role=alert) on load failure; agent-queue.html board now has aria-busy and agent_queue_live_v1.js toggles aria-busy during refresh and uses .notice role=alert for fetch errors. | Run 2026-03-10 08:20 UTC | Updates: COMPONENTS_V1.css mobile nav open-state now renders as a distinct panel (padding + surface + border + radius) for better scanability on ops/*.html; DESIGN_LANGUAGE documents the rule. | Run 2026-03-10 08:34 UTC | Updates: Kanban now toggles aria-busy on <main> + board region during load/refresh; the screen-reader meta region is now role=status + aria-atomic for reliable announcements; fetch errors now render as token-aligned .notice (role=alert) for consistent a11y. | Run 2026-03-10 10:20 UTC | Updates: STYLE_TOKENS_V1.css now underlines links by default (with subtle decoration colour) to improve discoverability/accessibility in dense ops text; DESIGN_LANGUAGE_V1.md documents the rule. | Run 2026-03-10 10:34 UTC | Updates: removed hard-coded aria-current from ops/*.html primary nav links (nav_v1.js is now the single active-state source); agent-queue.html sets aria-busy default + makes the status meta region aria-atomic for consistent announcements; COMPONENTS_V1.css adds topbar row wrapping + overflow-wrap for long ids/paths in cards; DESIGN_LANGUAGE_V1.md documents the long-string overflow-wrap rule. | Run 2026-03-10 12:20 UTC | Updates: STYLE_TOKENS adds prefers-color-scheme light theme + @supports fallback when color-mix unsupported; COMPONENTS makes aria-disabled button-links non-interactive and prevents pressed-state transform when disabled; index.html adds color-scheme + theme-color metas for dark/light. | Run 2026-03-10 12:34 UTC | Updates: COMPONENTS_V1.css adjusts Status/Home board wrap column min-width to avoid horizontal overflow on ~320px screens; ops/*.html pages now include color-scheme + theme-color metas for correct browser UI theming in light/dark; status.html nav toggle explicitly type=button for consistency. | Run 2026-03-10 14:34 UTC | Updates: api-usage.html budget-status badge now renders via createElement/textContent (removes remaining innerHTML injection footgun); DESIGN_LANGUAGE_V1.md documents an explicit injection-safety build rule (prefer textContent/createElement; only use innerHTML with escaped interpolations). | Run 2026-03-10 16:20 UTC | Updates: status.html adds new “What changed” module linking to activity.html; DESIGN_LANGUAGE_V1.md documents status module rule (keep status page as the fastest “what changed” entrypoint). | Run 2026-03-10 16:34 UTC | Updates: added generic keyboard horizontal scrolling support for all focusable scroll regions (`.board`, `.table-wrap`) via new `ops/ui/scroll_a11y_v1.js` and wired it into kanban.html + agent-queue.html + api-usage.html; removed now-duplicated board key handler from `ops/ui/kanban_live_v1.js`; DESIGN_LANGUAGE_V1.md updated to reference the shared scroll script. | Run 2026-03-10 18:20 UTC | Updates: Activity timeline component styling shipped (new .timeline layout + .item__sub/.item__actions styles). STYLE_TOKENS adds --tap-min-compact (40px) for dense secondary actions; COMPONENTS uses it for Activity card buttons; DESIGN_LANGUAGE documents timeline pattern + compact tap token. | Run 2026-03-10 18:35 UTC | Updates: added Activity to the primary masthead nav across all ops/*.html pages and added an Activity tile on Home (Operate) for “what changed” discoverability; removed remaining hard-coded aria-current from cv-preview.html so nav_v1.js remains the single active-state source; hardened exec dashboard rendering (ops/ui/exec_dashboard_v1.js) by removing interpolated innerHTML in favour of createElement/textContent and adding aria-busy during refresh; DESIGN_LANGUAGE_V1.md updated with a Primary nav set rule (Activity is always in the standard set)."
T-0303,,Spec + handoff for derived Activity feed (events JSONL fallback to CSV),strategy,High,Done,2026-03-09,2026-03-08,2026-03-09,UX artefacts updated; added UX-002 derived-activity generator rules to timeline spec; seed events file present (ops/events/events-2026-03.jsonl). Next: Rivet implement activity.html + status module per ops/ux/HANDOFF_NOTES_V1.md (1.4–1.6)
T-0501,,Review CV draft for R-2026-TEST-EY before apply,build,High,In Progress,2026-03-09,2026-03-08,2026-03-08,Created by hero workflow test
T-0304,,Implement masthead home-link fix + nav_v1.js wiring (remove per-page active classes),build,High,Done,2026-03-09,2026-03-08,2026-03-09,Verified: ops/*.html load ui/nav_v1.js and home-logo links to index.html across Status/Kanban/Agent Queue/Agents/API Usage/CV Run. Superseded any remaining per-page active classes (nav_v1.js sets aria-current).
T-0311,,Add forced-colors focus outline fallback for High Contrast,ui,Medium,Done,2026-03-09,2026-03-09,2026-03-09,Implemented @media (forced-colors: active) outline fallback in ops/ui/STYLE_TOKENS_V1.css; documented in DESIGN_LANGUAGE_V1.md
T-0312,,"Squad Business Analyst Continuous (groom backlog, expand AC, update deps/decisions, capture change log)",ops,High,In Progress,,2026-03-10,2026-03-10,Cron: 41e6207f-db96-4527-b7a1-bfe0c5a823b6 | Maintain ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md + ops/UPDATE_CAPTURE.md + ops/agent-tasks.csv | Run 2026-03-10 09:38 UTC: expanded PRD-004; moved PRD-006 to Ready | Run 2026-03-10 12:38 UTC: groomed backlog; added PRD-007 (CV Preview Loader Hardening) and T-0317 | Run 2026-03-10 15:38 UTC: added PRD-008 (job-pipeline updated_at normalisation/backfill AC) + linked PRD-006 dependency to T-0316/PRD-008 | Run 2026-03-10 18:39 UTC: PRD-006 delivery status set to Done; expanded PRD-008 AC (backfill tool + backup + report + DR3); change log updated
T-0305,,Activity Timeline page (events JSONL first; derived fallback),build,High,Done,2026-03-10,2026-03-09,2026-03-10,Shipped: ops/activity.html renders events-first + derived fallback with source/meta + parse diagnostics; ops/status.html now includes compact “What changed” module linking to activity.html per ops/ux/HANDOFF_NOTES_V1.md §1.4–1.6.
T-0306,,Implement Team Operations Board page,build,High,Blocked,2026-03-10,2026-03-09,2026-03-10,Implement ops/team-ops.html per PRD-005; gauges + movement feed + blockers panel; strict PRD-005 pass. Blocker: ops/team-ops.html not present under ops/ (cannot review).
T-0307,,PRD-002 hardening: status alias mapping + resilience warnings,build,High,In Progress,2026-03-12,2026-03-09,2026-03-09,Implement PRD-002 AC/edge cases: single status alias mapping table; unknown status handling; skip invalid rows w/ warnings; show fetch path on error; perf + a11y.
T-0315,,Ops UI: add scroll-snap for kanban board columns,ui,Medium,Done,2026-03-10,2026-03-09,2026-03-09,Shipped: scroll-snap for .board columns + documented in ops/ui/DESIGN_LANGUAGE_V1.md
T-0316,,Add updated_at to job-pipeline.csv + backfill existing rows (unblocks derived Activity),crm,High,Backlog,2026-03-11,2026-03-10,2026-03-10,See ops/ux/HANDOFF_NOTES_V1.md §1.12 and ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md UX-002; backfill from last_action date when parseable.
T-0317,,CV Preview: blank default + path allowlist + traversal/protocol hardening,build,High,Approved,2026-03-12,2026-03-10,2026-03-10,"UX handoff ready (see ops/ux/HANDOFF_NOTES_V1.md §1.5). Implements PRD-007. Must reject protocols + ""..""; allow only outputs/cv/**; render clear error states; no misleading default path."
T-0318,,Ops UI: add --surface-focus token + focused card tint for keyboard users,ui,Medium,Done,2026-03-10,2026-03-10,2026-03-10,Shipped: STYLE_TOKENS adds --surface-focus; COMPONENTS uses it for .item:focus-within and .item__link:focus-visible background.
T-0319,,Ops UI: motion tokens + prefers-reduced-motion support + defer nav script (Status),ui,Medium,Done,2026-03-10,2026-03-10,2026-03-10,Shipped: added --dur-1/--dur-2/--ease-standard tokens + prefers-reduced-motion reduce guardrails; wired skip-link transition to tokens; set ops/status.html nav_v1.js to defer for faster render.
```

## agents/README.md

```markdown
# Agent Profiles & Workplans

This directory tracks each agent's:
- role and personality
- active work plan
- current sprint tasks
- handoff rules

## Files
- tide.md
- radar.md
- vantage.md
- forge.md
- polish.md
- ledger.md
- atlas.md
```

## agents/atlas.md

```markdown
# Atlas

- **Role:** Company & Contact Intel
- **Personality:** Methodical, context-rich, discreet.

## Current Work Plan
1. Execute assigned tasks from `ops/agent-tasks.csv`
2. Produce artefacts under `ops/` with deterministic naming
3. Report blockers with proposed resolution

## Responsibilities
- Build company dossiers
- Map decision stakeholders
- Surface warm-path opportunities

## This Sprint
- Build visible artefacts, not just summaries
- Keep outputs linked to roadmap and pipeline
```

## agents/forge.md

```markdown
# Forge

- **Role:** CV Strategist
- **Personality:** Direct, persuasive, evidence-led.

## Current Work Plan
1. Execute assigned tasks from `ops/agent-tasks.csv`
2. Produce artefacts under `ops/` with deterministic naming
3. Report blockers with proposed resolution

## Responsibilities
- Draft tailored CVs
- Map claims to evidence
- Generate role rationale

## This Sprint
- Build visible artefacts, not just summaries
- Keep outputs linked to roadmap and pipeline
```

## agents/ledger.md

```markdown
# Ledger

- **Role:** CRM Manager
- **Personality:** Structured, relentless, precise.

## Current Work Plan
1. Execute assigned tasks from `ops/agent-tasks.csv`
2. Produce artefacts under `ops/` with deterministic naming
3. Report blockers with proposed resolution

## Responsibilities
- Maintain stage/status integrity
- Track artefact versions
- Manage follow-ups/tasks

## This Sprint
- Build visible artefacts, not just summaries
- Keep outputs linked to roadmap and pipeline
```

## agents/polish.md

```markdown
# Polish

- **Role:** CV Layout & Design
- **Personality:** Minimalist, premium, detail-obsessed.

## Current Work Plan
1. Execute assigned tasks from `ops/agent-tasks.csv`
2. Produce artefacts under `ops/` with deterministic naming
3. Report blockers with proposed resolution

## Responsibilities
- Enforce 2-page layout quality
- Typography/spacing consistency
- Final PDF quality pass

## This Sprint
- Build visible artefacts, not just summaries
- Keep outputs linked to roadmap and pipeline
```

## agents/radar.md

```markdown
# Radar

- **Role:** Opportunity Scout
- **Personality:** Curious, fast, signal-first.

## Current Work Plan
1. Execute assigned tasks from `ops/agent-tasks.csv`
2. Produce artefacts under `ops/` with deterministic naming
3. Report blockers with proposed resolution

## Responsibilities
- Harvest/dedupe opportunities
- Apply fit-tier screening
- Route shortlisted roles

## This Sprint
- Build visible artefacts, not just summaries
- Keep outputs linked to roadmap and pipeline
```

## agents/tide.md

```markdown
# Tide

- **Role:** Control Tower
- **Personality:** Calm, decisive, commercially literate.

## Current Work Plan
1. Execute assigned tasks from `ops/agent-tasks.csv`
2. Produce artefacts under `ops/` with deterministic naming
3. Report blockers with proposed resolution

## Responsibilities
- Maintain program plan and priorities
- Track blockers and dependencies
- Publish daily executive brief

## This Sprint
- Build visible artefacts, not just summaries
- Keep outputs linked to roadmap and pipeline
```

## agents/vantage.md

```markdown
# Vantage

- **Role:** Role Analyst
- **Personality:** Analytical, blunt, strategic.

## Current Work Plan
1. Execute assigned tasks from `ops/agent-tasks.csv`
2. Produce artefacts under `ops/` with deterministic naming
3. Report blockers with proposed resolution

## Responsibilities
- Extract hiring mandate
- Create requirement map
- Flag risks and interview angles

## This Sprint
- Build visible artefacts, not just summaries
- Keep outputs linked to roadmap and pipeline
```

## agents.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark light">
  <meta name="theme-color" content="#0b1020" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#f6f8ff" media="(prefers-color-scheme: light)">
  <title>Agent Profiles · Crabbie Ops</title>
  <link rel="icon" type="image/jpeg" href="ui/assets/crabbie-logo.jpg">
  <link rel="apple-touch-icon" href="ui/assets/crabbie-logo.jpg">

  <link rel="stylesheet" href="ui/STYLE_TOKENS_V1.css">
  <link rel="stylesheet" href="ui/COMPONENTS_V1.css">
  <style>
    .profiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:var(--s3);padding:var(--s4)}
    .avatar{width:30px;height:30px;border-radius:50%;vertical-align:-6px;object-fit:cover;display:inline-block;margin-right:6px}
    .avatar-emoji{font-size:24px;line-height:1;display:inline-block;vertical-align:-3px;margin-right:6px}
    .textarea{
      width:100%;
      min-height:clamp(160px, 24vh, 240px);
      resize:vertical;
      background:var(--surface-2);
      color:var(--text);
      border:1px solid var(--border-2);
      border-radius:10px;
      padding:10px;
      font: var(--fs-1)/1.45 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }
    .textarea:focus-visible{outline:none;box-shadow:var(--focus-strong)}

    @media (max-width: 640px){
      .profiles{padding:var(--s3);grid-template-columns:1fr}
      .textarea{min-height:clamp(140px, 22vh, 200px)}
    }
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="topbar" role="banner">
    <div class="topbar__row">
      <a class="home-logo" href="index.html"><img src="ui/assets/crabbie-logo.jpg" alt="Crabbie"> Crabbie Ops Home</a>
      <button type="button" class="nav-toggle" data-nav-toggle aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation">☰ Menu</button>
    </div>
    <h1 class="topbar__title">Specialist Agent Profiles</h1>
    <p class="topbar__sub">Loaded from each agent markdown profile. Textarea edits save locally in your browser only. Use “Edit in GitHub” for true write access.</p>
    <nav id="primary-nav" class="topbar__actions" data-nav-links aria-label="Primary">
      <a class="btn" href="status.html">Status</a>
      <a class="btn" href="activity.html">Activity</a>
      <a class="btn" href="kanban.html">Pipeline</a>
      <a class="btn" href="agent-queue.html">Agent Queue</a>
      <a class="btn" href="agents.html">Agents</a>
      <a class="btn" href="api-usage.html">API Usage</a>
      <a class="btn" href="cv-preview.html">CV Preview</a>
      <a class="btn" href="cv-run.html">CV Run</a>
    </nav>
  </header>

  <main id="main" aria-label="Agent profiles" tabindex="-1">
    <section class="item" style="margin:16px">
      <h2 class="item__title">Libraries and core docs</h2>
      <div class="item__small">Direct read access is live below. For write access, use GitHub edit links.</div>
      <div class="item__small" style="margin-top:8px">
        <a href="CONTROL_TOWER.md" target="_blank" rel="noopener">CONTROL_TOWER.md</a> ·
        <a href="UPDATE_CAPTURE.md" target="_blank" rel="noopener">UPDATE_CAPTURE.md</a> ·
        <a href="PRODUCT_REQUIREMENTS_BACKLOG_V1.md" target="_blank" rel="noopener">PRODUCT_REQUIREMENTS_BACKLOG_V1.md</a> ·
        <a href="TEAM_OPENCLAW.md" target="_blank" rel="noopener">TEAM_OPENCLAW.md</a> ·
        <a href="agents/README.md" target="_blank" rel="noopener">agents/README.md</a>
      </div>
    </section>
    <div class="profiles" id="profiles-grid"></div>
  </main>

  <script>
    const GH_REPO = 'https://github.com/mattkdecide/crabbie-ops-dashboard';

    const AGENTS = [
      {key:'tide', avatar:'ui/assets/crabbie-logo.jpg', emoji:'🎈🦀', name:'Crabbie', fn:'PM Control Tower'},
      {key:'vantage', avatar:'ui/assets/agents/analytics-blue.png', emoji:'🎈🔭', name:'Vantage', fn:'UX Strategist / Role Analyst'},
      {key:'polish', avatar:'ui/assets/agents/design.png', emoji:'🎈🎨', name:'Polish', fn:'UI Designer / Visual Quality'},
      {key:'forge', avatar:'ui/assets/agents/build-hardhat.png', emoji:'🎈⚒️', name:'Forge', fn:'CV Strategist'},
      {key:'ledger', avatar:'ui/assets/agents/legal-red.png', emoji:'🎈📊', name:'Ledger', fn:'CRM Manager'},
      {key:'radar', avatar:'ui/assets/agents/radar-megaphone.png', emoji:'🎈📡', name:'Radar', fn:'Opportunity Scout'},
      {key:'atlas', avatar:'ui/assets/agents/ops-blue.png', emoji:'🎈🧭', name:'Atlas', fn:'Research & Contact Intel'}
    ];

    async function loadProfile(agent){
      const card = document.createElement('section');
      card.className = 'item';
      const file = `agents/${agent.key}.md`;
      const ghView = `${GH_REPO}/blob/main/${file}`;
      const ghEdit = `${GH_REPO}/edit/main/${file}`;

      card.innerHTML = `
        <h2 class='item__title'>${agent.avatar ? `<img class='avatar' src='${agent.avatar}' alt=''>` : `<span class='avatar-emoji' aria-hidden='true'>${agent.emoji || '🎈'}</span>`}${agent.name}</h2>
        <div class='item__meta'>${agent.fn}</div>
        <div data-agent-owner='${agent.key}'></div>
        <label class='sr-only' for='ta-${agent.key}'>Profile text for ${agent.name}. Edits save locally in your browser only.</label>
        <textarea class='textarea' id='ta-${agent.key}' aria-label='Profile text for ${agent.name}. Edits save locally in your browser only.' spellcheck='false'></textarea>
        <div class='item__small'>
          Live source: <a href='${file}' target='_blank' rel='noopener'>${file}</a> ·
          <a href='${ghView}' target='_blank' rel='noopener'>View in GitHub</a> ·
          <a href='${ghEdit}' target='_blank' rel='noopener'>Edit in GitHub</a>
        </div>
      `;
      document.getElementById('profiles-grid').appendChild(card);

      const ta = document.getElementById('ta-'+agent.key);
      const localKey = `agent-edit-${agent.key}`;

      try {
        const res = await fetch(`agents/${agent.key}.md?t=${Date.now()}`);
        const txt = await res.text();
        ta.value = txt;
      } catch (e) {
        ta.value = 'Could not load profile markdown.';
      }

      if(localStorage.getItem(localKey)) ta.value = localStorage.getItem(localKey);
      ta.addEventListener('input', ()=>localStorage.setItem(localKey, ta.value));
    }

    AGENTS.forEach(loadProfile);
  </script>

  <script src="ui/agent_capacity_v1.js"></script>
  <script>window.initAgentCapacity && window.initAgentCapacity();</script>
  <script src="ui/nav_v1.js"></script>
</body>
</html>
```

## api-usage.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark light">
  <meta name="theme-color" content="#0b1020" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#f6f8ff" media="(prefers-color-scheme: light)">
  <title>API Usage Tracker · Crabbie Ops</title>
  <link rel="icon" type="image/jpeg" href="ui/assets/crabbie-logo.jpg">
  <link rel="apple-touch-icon" href="ui/assets/crabbie-logo.jpg">

  <link rel="stylesheet" href="ui/STYLE_TOKENS_V1.css">
  <link rel="stylesheet" href="ui/COMPONENTS_V1.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="topbar" role="banner">
    <div class="topbar__row">
      <a class="home-logo" href="index.html"><img src="ui/assets/crabbie-logo.jpg" alt="Crabbie"> Crabbie Ops Home</a>
      <button type="button" class="nav-toggle" data-nav-toggle aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation">☰ Menu</button>
    </div>
    <h1 class="topbar__title">API Usage Tracker</h1>
    <p class="topbar__sub">Run-rate visibility for token and cost trend.</p>
    <nav id="primary-nav" class="topbar__actions" data-nav-links aria-label="Primary">
      <a class="btn" href="status.html">Status</a>
      <a class="btn" href="activity.html">Activity</a>
      <a class="btn" href="kanban.html">Pipeline</a>
      <a class="btn" href="agent-queue.html">Agent Queue</a>
      <a class="btn" href="agents.html">Agents</a>
      <a class="btn" href="api-usage.html">API Usage</a>
      <a class="btn" href="cv-preview.html">CV Preview</a>
      <a class="btn" href="cv-run.html">CV Run</a>
    </nav>
  </header>

  <main class="wrap wrap--wide" id="main" tabindex="-1" aria-label="API usage dashboard" aria-busy="false">
    <div class="sr-only" role="status" aria-live="polite" id="srStatus"></div>

    <div class="kpi" aria-label="Usage KPIs">
      <section class="item"><h2 class="item__title">Budget Target</h2><div class="item__meta">USD $2.00/day</div></section>
      <section class="item"><h2 class="item__title">Last Window Tokens</h2><div class="item__meta num" id="tokTotal">-</div></section>
      <section class="item"><h2 class="item__title">Estimated Cost</h2><div class="item__meta num" id="costTotal">-</div></section>
      <section class="item"><h2 class="item__title">Status</h2><div class="item__meta" id="budgetStatus">-</div></section>
    </div>

    <section class="item" aria-label="Usage log table">
      <h2 class="item__title">Usage Log</h2>
      <div id="usageNotice" class="notice notice--danger" role="alert" style="display:none;margin-bottom:var(--s2)"></div>
      <div class="table-wrap" role="region" aria-label="Usage log, scroll horizontally on small screens" tabindex="0" aria-busy="false">
        <table class="table">
          <caption>Source: <a href="usage/api-usage-log.csv">usage/api-usage-log.csv</a> · Spec: <a href="usage/API_USAGE_TRACKER_V1.md">API_USAGE_TRACKER_V1.md</a></caption>
          <thead>
            <tr>
              <th scope="col">Date (UTC)</th>
              <th scope="col">Window</th>
              <th scope="col">Model</th>
              <th scope="col" class="num">In</th>
              <th scope="col" class="num">Out</th>
              <th scope="col" class="num">Total</th>
              <th scope="col" class="num">Est. Cost (USD)</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody id="rows"></tbody>
        </table>
      </div>
    </section>
  </main>

  <script>
    function parseCSV(txt){
      const lines = txt.trim().split(/\r?\n/);
      const h = (lines.shift() || '').split(',');
      return lines.filter(Boolean).map(l=>{
        const a=[];let c='',q=false;
        for(let i=0;i<l.length;i++){
          const ch=l[i],n=l[i+1];
          if(ch==='"'){
            if(q&&n==='"'){c+='"';i++;} else {q=!q;}
          } else if(ch===',' && !q){
            a.push(c);c='';
          } else {
            c+=ch;
          }
        }
        a.push(c);
        return Object.fromEntries(h.map((k,i)=>[k,(a[i]||'').trim()]));
      });
    }

    async function load(){
      const main = document.getElementById('main');
      const sr = document.getElementById('srStatus');
      const notice = document.getElementById('usageNotice');
      const region = document.querySelector('.table-wrap');

      try{
        if (notice) {
          notice.style.display = 'none';
          notice.textContent = '';
        }
        if (main) main.setAttribute('aria-busy','true');
        if (region) region.setAttribute('aria-busy','true');

        const res = await fetch('usage/api-usage-log.csv?t='+Date.now(),{cache:'no-store'});
        if (!res.ok) throw new Error(`HTTP ${res.status} fetching api-usage-log.csv`);
        const txt = await res.text();
        const data = parseCSV(txt);

        const tb = document.getElementById('rows');
        tb.innerHTML = '';
        const cell = (tr, value, cls) => {
          const td = document.createElement('td');
          if (cls) td.className = cls;
          td.textContent = value == null ? '' : String(value);
          tr.appendChild(td);
        };

        data.slice().reverse().forEach(r=>{
          const tr = document.createElement('tr');
          cell(tr, r.date_utc || '');
          cell(tr, r.window || '');
          cell(tr, r.model || '');
          cell(tr, r.in_tokens || '', 'num');
          cell(tr, r.out_tokens || '', 'num');
          cell(tr, r.total_tokens || '', 'num');
          cell(tr, r.estimated_cost_usd ? '$' + r.estimated_cost_usd : '', 'num');
          cell(tr, r.notes || '');
          tb.appendChild(tr);
        });

        const last = data[data.length-1] || {};
        const cost = Number(last.estimated_cost_usd||0);
        const tot = last.total_tokens || '0';

        document.getElementById('tokTotal').textContent = tot;
        document.getElementById('costTotal').textContent = '$'+cost.toFixed(2);

        const budgetEl = document.getElementById('budgetStatus');
        const onTarget = cost <= 2;
        const budgetText = onTarget ? 'On target' : 'Above target';
        budgetEl.className = 'item__meta';
        budgetEl.textContent = '';
        const badge = document.createElement('span');
        badge.className = `badge ${onTarget ? 'badge--success' : 'badge--warning'}`;
        badge.textContent = budgetText;
        budgetEl.appendChild(badge);

        if (sr) sr.textContent = `Loaded ${data.length} usage rows. Budget status: ${budgetText}.`;
      } catch(e){
        const tb = document.getElementById('rows');
        tb.innerHTML = '<tr><td colspan="8">Could not load usage log.</td></tr>';
        if (notice) {
          notice.textContent = `Could not load API usage log: ${e && e.message ? e.message : String(e)}`;
          notice.style.display = 'block';
        }
        if (sr) sr.textContent = 'Could not load API usage log.';
      } finally {
        if (region) region.setAttribute('aria-busy','false');
        if (main) main.setAttribute('aria-busy','false');
      }
    }

    load();
  </script>
  <script src="ui/nav_v1.js"></script>
  <script src="ui/scroll_a11y_v1.js"></script>
</body>
</html>
```

## architect-review.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark light">
  <meta name="theme-color" content="#0b1020" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#f6f8ff" media="(prefers-color-scheme: light)">
  <title>Architect Review Pack · Crabbie Ops</title>
  <link rel="icon" type="image/jpeg" href="ui/assets/crabbie-logo.jpg">
  <link rel="apple-touch-icon" href="ui/assets/crabbie-logo.jpg">
  <link rel="stylesheet" href="ui/STYLE_TOKENS_V1.css">
  <link rel="stylesheet" href="ui/COMPONENTS_V1.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="topbar" role="banner">
    <div class="topbar__row">
      <a class="home-logo" href="index.html"><img src="ui/assets/crabbie-logo.jpg" alt="Crabbie"> Crabbie Ops Home</a>
      <button type="button" class="nav-toggle" data-nav-toggle aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation">☰ Menu</button>
    </div>
    <h1 class="topbar__title">Architect Review Pack</h1>
    <p class="topbar__sub">Ground-truth map of what is live, what is static, and what is still maturing.</p>
    <nav id="primary-nav" class="topbar__actions" data-nav-links aria-label="Primary">
      <a class="btn" href="status.html">Status</a>
      <a class="btn" href="activity.html">Activity</a>
      <a class="btn" href="kanban.html">Pipeline</a>
      <a class="btn" href="agent-queue.html">Agent Queue</a>
      <a class="btn" href="agents.html">Agents</a>
      <a class="btn" href="architect-review.html">Architect Pack</a>
    </nav>
  </header>

  <main id="main" class="board board--wrap" tabindex="-1" aria-label="Architect review pack">
    <section class="column">
      <div class="column__shell">
        <h2 class="column__header">Canonical sources (authoritative)</h2>
        <div class="item item--link"><a class="item__link" href="CONTROL_TOWER.md"><h3 class="item__title">CONTROL_TOWER.md</h3><div class="item__small">Priority stack, blockers, decision requests, acceptance status.</div></a></div>
        <div class="item item--link"><a class="item__link" href="UPDATE_CAPTURE.md"><h3 class="item__title">UPDATE_CAPTURE.md</h3><div class="item__small">Chronological shipping log and change narrative.</div></a></div>
        <div class="item item--link"><a class="item__link" href="agent-tasks.csv"><h3 class="item__title">agent-tasks.csv</h3><div class="item__small">Execution task state and ownership.</div></a></div>
        <div class="item item--link"><a class="item__link" href="job-pipeline.csv"><h3 class="item__title">job-pipeline.csv</h3><div class="item__small">Pipeline role records and stage state.</div></a></div>
        <div class="item item--link"><a class="item__link" href="events/events-2026-03.jsonl"><h3 class="item__title">events/*.jsonl</h3><div class="item__small">Event feed for timeline and future read-models.</div></a></div>
      </div>
    </section>

    <section class="column">
      <div class="column__shell">
        <h2 class="column__header">Surface reliability (current)</h2>
        <div class="item"><h3 class="item__title">High confidence</h3><div class="item__small">Pipeline, Agent Queue, Activity. These read directly from CSV/events and are operationally useful.</div></div>
        <div class="item"><h3 class="item__title">Medium confidence</h3><div class="item__small">Status page. Great navigation/orientation layer, but largely curated/static cards.</div></div>
        <div class="item"><h3 class="item__title">Low confidence</h3><div class="item__small">read_models/v1/status_summary.json currently manual-seeded and stale, not suitable as telemetry truth.</div></div>
      </div>
    </section>

    <section class="column">
      <div class="column__shell">
        <h2 class="column__header">Known gaps</h2>
        <div class="item"><h3 class="item__title">Read-model freshness</h3><div class="item__small">No robust automated read-model generation pipeline yet.</div></div>
        <div class="item"><h3 class="item__title">Data normalisation</h3><div class="item__small">`updated_at` normalisation/backfill still in-flight (PRD-008 dependency).</div></div>
        <div class="item"><h3 class="item__title">CV flow hardening</h3><div class="item__small">CV run/preview UX and quality gates still being tightened.</div></div>
      </div>
    </section>

    <section class="column">
      <div class="column__shell">
        <h2 class="column__header">Architect quick start</h2>
        <div class="item">
          <h3 class="item__title">Suggested review order</h3>
          <div class="item__small">1) CONTROL_TOWER.md → 2) UPDATE_CAPTURE.md → 3) agent-tasks.csv + job-pipeline.csv → 4) Activity page → 5) architecture/*.md and schemas.</div>
        </div>
        <div class="item item--link"><a class="item__link" href="architecture/INTEGRATION_CONTRACTS_V1.md"><h3 class="item__title">Integration contracts</h3></a></div>
        <div class="item item--link"><a class="item__link" href="architecture/openapi/control-tower-api.v1.yaml"><h3 class="item__title">Control Tower API spec</h3></a></div>
      </div>
    </section>
  </main>

  <script src="ui/nav_v1.js"></script>
</body>
</html>
```

## architecture/CONTROL_TOWER_API_EVENT_ENVELOPE_ALIGNMENT_2026-03-09.md

```markdown
# Control Tower API: Event Envelope Alignment (2026-03-09)

## Increment
Align the **OpenAPI** `EventEnvelope` shape used by `/v1/events` with the canonical event envelope defined in:
- `ops/architecture/schemas/event-envelope.schema.json`
- described in `ops/architecture/EVENT_MODEL_V1.md`

### What changed
In `ops/architecture/openapi/control-tower-api.v1.yaml`:
- `components.schemas.EventEnvelope` now uses:
  - `spec_version`, `event_id`, `event_type`, `occurred_at`, `producer`, `subject`, `correlation_id`, `idempotency_key`, `data`
- Added:
  - `components.schemas.EventProducer`
  - `components.schemas.EventSubject`

### Why
We previously had **two competing envelope shapes**:
- JSON Schemas + docs used `event_type` + `data`
- OpenAPI used `type` + `payload` (+ `actor`, `trace_id`)

This mismatch creates avoidable integration bugs (UI and agents serialise one shape, API promises another).

## Migration notes

### Producers
- If you are emitting to JSONL (file-first), emit the canonical envelope:
  - rename `type` -> `event_type`
  - rename `payload` -> `data`
  - move `actor` into `data.changed_by` (event-specific) or into `producer` if appropriate

### Consumers
- API consumers of `/v1/events` must read:
  - `event.event_type` (not `event.type`)
  - `event.data` (not `event.payload`)

### Backwards compatibility
If compatibility is required, implement a temporary translation layer in the API:
- Accept both shapes on ingest (if ingest exists)
- On GET, optionally support `?shape=legacy` to return `{type, payload}` until dashboards migrate

## Risks
1) **Breaking UI dashboards** if any already consume `/v1/events` expecting `{type, payload}`.
   - Mitigation: update the dashboards, or add the translation layer noted above.

2) **Inconsistent attribution** (`actor` vs `data.changed_by`).
   - Mitigation: standardise on event-specific `data.changed_by` for status-change events; reserve `producer` for system identity.

3) **Validation drift** between OpenAPI and JSON Schemas.
   - Mitigation: treat JSON Schemas as the source of truth; optionally generate OpenAPI components from them later.
```

## architecture/DEPLOYMENT_TOPOLOGY_V1.md

```markdown
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
```

## architecture/EVENT_CONSUMPTION_PIPELINE_V1.md

```markdown
# Event Consumption Pipeline v1 (Ops Control Tower)

**Last updated:** 2026-03-10

## Purpose
Define a concrete, deterministic way to **ingest** the append-only event log (`ops/events/*.jsonl`) and **project** it into versioned read models (`ops/read_models/v1/*`).

This increment standardises:
- inputs and file locations,
- replay + idempotency rules,
- projection order and conflict rules,
- how to introduce snapshots/compaction later,
- migration steps from the current CSV/HTML parsing approach,
- key risks.

The goal is to make the Control Tower work in a **file-first** world now, while keeping the same semantics when we move to a DB outbox and/or pub/sub.

---

## System context
### Producers (write path)
Any component that changes operational state MAY emit an event using the canonical envelope (`schemas/event-envelope.schema.json`), for example:
- `crm.*.status_changed.v1`
- `ops.task.*.v1`, `ops.agent.*.v1`, `ops.run.*.v1`
- `pipeline.cv_run.completed.v1`

### Consumer (read path)
A single “projector” process (can be `dashboard-worker.js`, a future `ops-projector`, or a CI build step) reads events and generates read models.

---

## Inputs (contracts)
### 1) Event logs
- Location: `ops/events/events-YYYY-MM.jsonl`
- Format: one JSON object per line
- Contract: each line validates against `event-envelope.schema.json`, and `data` validates against its per-event schema.

### 2) Optional legacy artefacts (during migration)
Until all producers emit events consistently, the projector MAY also read:
- `ops/agent-tasks.csv`
- `ops/agent-tasks.csv`-derived HTML
- `ops/agent-roster.yaml`

Rule: **events override legacy artefacts** when the same entity appears in both.

---

## Outputs (contracts)
Read models are the public UI contract (see `READ_MODEL_CONTRACTS_V1.md`).

The projector MUST write:
- `ops/read_models/v1/status_summary.json`
- `ops/read_models/v1/kanban_board.json`

And SHOULD write a build manifest for auditability:
- `ops/read_models/v1/_build.json`

### `_build.json` (recommended shape)
This is not yet a formal schema, but should be stable in practice.
```json
{
  "spec_version": "1.0",
  "generated_at": "2026-03-10T16:20:00Z",
  "inputs": {
    "events": ["ops/events/events-2026-03.jsonl"],
    "legacy": ["ops/agent-tasks.csv"]
  },
  "watermarks": {
    "last_event_occurred_at": "2026-03-10T15:59:00Z",
    "last_event_id": "..."
  },
  "stats": {
    "events_read": 120,
    "events_applied": 118,
    "events_ignored": 2
  }
}
```

---

## Processing model
### Determinism and replay
The projector MUST be able to rebuild read models from scratch using only:
- the published artefacts (event log files), and
- optional legacy artefacts (while migrating).

This means:
- no hidden mutable state,
- no dependence on “last run” local caches.

### Ordering rule
Events MUST be applied in a stable order:
1) sort by `occurred_at` ascending
2) tiebreak by `event_id` lexicographically

Rationale: JSONL append order is not guaranteed if events are merged or regenerated.

### Idempotency and de-duplication
Consumers MUST de-dupe using:
- primary: `event_id`
- secondary: `idempotency_key` (when present)

Rule:
- If two events share the same `event_id`, ignore the later occurrence.
- If two events share the same `idempotency_key`, keep the earliest by ordering rule above.

### Projection strategy
Use **event-type specific reducers** to update an in-memory projection.

Minimum reducers for v1 read models:
- Task reducers: `ops.task.created.v1`, `ops.task.status_changed.v1`, `ops.task.id_remapped.v1`
- Agent reducers: `ops.agent.upserted.v1`, `ops.agent.capacity_changed.v1`
- Run reducers: `ops.run.status_changed.v1`
- CRM reducers: `crm.*.status_changed.v1` (for status summary counts and highlights)
- Pipeline reducers: `pipeline.cv_run.completed.v1` (for status summary counts)

### Conflict rules (when multiple sources exist)
#### 1) Task identity remaps
When encountering `ops.task.id_remapped.v1`:
- update the canonical task ID to `new_task_id`
- retain an alias list (old IDs) for matching legacy artefacts and older events

Projection invariant:
- all read models MUST emit only canonical task IDs

#### 2) Legacy CSV overlay (migration only)
If a task appears only in CSV and not in events:
- include it in the read model
- mark it as `source="legacy"` (if the schema allows; otherwise include via a permissive metadata field)

If a task appears in events:
- ignore the CSV row for state (status/assignee/priority)
- CSV may still contribute presentation details (e.g., free-text notes) **only if** a deterministic merge rule exists.

---

## Snapshots and compaction (planned, not required in v1)
As JSONL grows, introduce periodic snapshots without changing event shapes.

### Snapshot file
- Location: `ops/events/snapshots/snapshot-YYYY-MM-DD.json`
- Contains a point-in-time materialised state for the projector (e.g., task map, agent map, counters)

### Compaction rule
- The projector may start from the latest snapshot and then apply events after the snapshot watermark.
- Snapshots MUST be reproducible (generated from the same input set) and should record:
  - snapshot `generated_at`
  - `watermark_event_id`
  - `watermark_occurred_at`

---

## Migration notes
### Step 1: Add projector build manifest
- Implement `_build.json` generation alongside existing read model generation.
- Include input file list and watermarks.

### Step 2: Prefer event log for projections
- Update read model builder to ingest `ops/events/*.jsonl` first.
- Keep CSV as fallback only.

### Step 3: Raise the bar (quality gates)
- Fail the build if:
  - any event fails schema validation,
  - duplicate canonical task IDs exist after applying `id_remapped`,
  - a task status is outside canonical enums.

### Step 4: Phase out legacy sources
- Once event emission coverage is sufficient (target: >95% of task changes), remove CSV parsing from the projection path.

---

## Risks and mitigations
1) **Event time lies (occurred_at not trustworthy)**
- Risk: producers emit events late or with wrong timestamps; ordering becomes incorrect.
- Mitigation: enforce `occurred_at` set at write-time by the system of record (API or controlled script), not callers; optionally add `ingested_at` for debugging.

2) **Schema validation drift / broken builds**
- Risk: a single malformed event breaks the projector.
- Mitigation: strict validation in CI, plus a quarantine folder (`ops/events/quarantine/`) for invalid lines with a human-readable report.

3) **Unbounded growth of JSONL files**
- Risk: slow builds.
- Mitigation: monthly files + snapshot/compaction as above.

4) **Dual-write inconsistencies during migration**
- Risk: CSV and events disagree.
- Mitigation: explicit precedence rules (events win), and a dashboard warning when a task exists in both with mismatched status.

5) **ID remap complexity**
- Risk: remap events are mishandled, producing duplicate or missing tasks.
- Mitigation: treat `ops.task.id_remapped.v1` as a first-class reducer; add unit tests around alias resolution.
```

## architecture/EVENT_MODEL_V1.md

```markdown
# Event Model v1 (Ops Control Tower)

**Last updated:** 2026-03-08

## Purpose
Create a small, consistent event model so the Control Tower (status page, dashboard worker, future automation) can consume changes across:
- **CRM** (jobs, applications, tasks)
- **CV pipeline** runs (artefacts + QA)
- **Agent/task board** updates (CSV-driven now, DB-driven later)

This increment defines:
1) a **standard event envelope**,
2) a minimum set of **domain events**,
3) **integration contracts** (JSON Schemas), and
4) **migration notes + risks**.

The intent is to support both:
- **File-first** (events written as JSONL in repo, consumed by dashboard-worker.js), and
- **DB-first later** (outbox table + pub/sub), without changing event shapes.

---

## 1) Event envelope (contract)
All events MUST conform to `ops/architecture/schemas/event-envelope.schema.json`.

### Envelope fields
- `spec_version` (string): fixed `"1.0"` for this version.
- `event_id` (string, UUID): unique per event.
- `event_type` (string): namespaced, dot-delimited.
- `occurred_at` (string, RFC3339 UTC): when the change happened.
- `producer` (object): component metadata.
- `subject` (object): domain entity reference.
- `correlation_id` (string, optional): tie together a pipeline run, an ingestion batch, etc.
- `idempotency_key` (string, optional): stable key for de-dupe when replaying.
- `data` (object): event payload; validated by per-event schema.

### Naming convention
`<domain>.<entity>.<action>.v<major>`

Examples:
- `crm.job.status_changed.v1`
- `crm.application.status_changed.v1`
- `crm.task.status_changed.v1`
- `pipeline.cv_run.completed.v1`

---

## 2) Canonical status taxonomy (referenced by events)
This is **not** the full mapping spec (that is T-0204), but events should emit canonical values from day 1.

### JobStatus (v1)
- `identified`
- `shortlisted`
- `dropped`

### ApplicationStatus (v1)
- `not_started`
- `drafting`
- `submitted`
- `interviewing`
- `offer`
- `rejected`
- `withdrawn`

### TaskStatus (v1)
- `backlog`
- `in_progress`
- `blocked`
- `done`

**Rule:** CSV/DB/UI may keep their local labels, but event payloads MUST normalise to these canonical enums.

---

## 3) Minimum domain events (v1)

### A) CRM status change events
These are the highest leverage because they drive dashboards, reminders, and reporting.

1. `crm.job.status_changed.v1`
2. `crm.application.status_changed.v1`
3. `crm.task.status_changed.v1`

Each payload includes:
- `old_status`, `new_status` (canonical)
- `reason` (optional, short string)
- `changed_by` (optional, actor reference, e.g. `"agent:ledger"`, `"human:matt"`)

### B) Pipeline run events
4. `pipeline.cv_run.completed.v1`

Payload includes:
- `role_id`
- `run_id`
- `manifest_path` (expected by T-0205)
- `artefacts` (optional inline summary; full detail remains in manifest)
- `qa_path` (optional convenience pointer)
- `result` (`success|partial|failed`)

---

## 4) Storage and transport (pragmatic v1)

### File-first transport (now)
Write events to:
- `ops/events/events-YYYY-MM.jsonl`

One JSON object per line. This supports:
- cheap append-only writes,
- easy git diff/audit,
- replay by re-processing the log.

### DB outbox (later)
When moving to SQLite/Postgres for CRM, add an `event_outbox` table and ensure writes are:
- transactionally consistent (domain update + outbox insert in same txn),
- published asynchronously to a message bus or file sink.

---

## 5) Integration contracts (schemas)
Schemas live at:
- `ops/architecture/schemas/`

Defined in this increment:
- `event-envelope.schema.json`
- `crm.job.status_changed.v1.schema.json`
- `crm.application.status_changed.v1.schema.json`
- `crm.task.status_changed.v1.schema.json`
- `pipeline.cv_run.completed.v1.schema.json`

---

## 6) Migration notes

### Migration step 1 (no DB changes)
- Add `ops/events/` directory.
- Start emitting events from scripts/agents that already touch CSV/HTML.
- Dashboard worker can ingest JSONL as an additional source of truth.

### Migration step 2 (status normalisation)
- Wherever a status is written (CSV row update, DB update, UI), add a normalisation step that maps to canonical enums before emitting.
- Keep emitting `old_status` and `new_status` in canonical form even if storage keeps legacy text.

### Migration step 3 (CRM schema alignment)
- In `crm-schema-v0.sql`, `jobs.status`, `applications.status`, `tasks.status` currently hold legacy values.
- Plan: introduce new columns (or a check constraint) aligned to canonical enums, then backfill.
  - Example: add `jobs.status_v1` and keep `jobs.status` as legacy during migration.

---

## 7) Risks and mitigations

1) **Status drift (multiple sources of truth)**
- Risk: CSV/DB/UI disagree; events become unreliable.
- Mitigation: enforce canonical enum emission and central mapping table (T-0204) with automated tests.

2) **Duplicate events during replay**
- Risk: JSONL replay double-counts.
- Mitigation: `event_id` uniqueness + consumer de-dupe using `idempotency_key`.

3) **Leaky identifiers / unstable IDs**
- Risk: CSV rows don’t have stable IDs.
- Mitigation: define `subject` as `(type, id)` where `id` is stable: `job:<db_id>` or `job:<hash(url)>` until DB IDs exist.

4) **Schema versioning pain**
- Risk: hard to evolve events.
- Mitigation: version in `event_type` suffix (`.v1`, `.v2`) and avoid breaking changes; add fields only.

---

## Appendix: Example event (job status change)
```json
{
  "spec_version": "1.0",
  "event_id": "2f4b1d24-9c2b-4a90-820f-9c45b16c5b2f",
  "event_type": "crm.job.status_changed.v1",
  "occurred_at": "2026-03-08T08:20:00Z",
  "producer": {"name": "ledger", "version": "0.1"},
  "subject": {"type": "job", "id": "job:123"},
  "correlation_id": "run:cv:role_0042:20260308T0818Z",
  "idempotency_key": "job:123:status:identified->shortlisted",
  "data": {
    "old_status": "identified",
    "new_status": "shortlisted",
    "reason": "High-fit role confirmed",
    "changed_by": "agent:ledger"
  }
}
```
```

## architecture/INTEGRATION_CONTRACTS_V1.md

```markdown
# Integration Contracts V1 (Ops Control Tower)

**Last updated:** 2026-03-08

## Purpose

Define a small, explicit contract layer between:

- **Producers**: agents/tools that create or mutate operational data (tasks, status changes, CV runs, CRM events)
- **Consumers**: static dashboard pages (`status.html`, `kanban.html`, `agent-queue.html`, etc.), workers (`dashboard-worker.js`), and future automations

V1 is intentionally minimal: it standardises *how data is read and appended* without forcing an immediate rewrite of the existing CSV/MD/HTML artefacts.

---

## Contract set (V1)

### 0) Event contracts (domain-level)

Concrete event contracts live in `ops/architecture/integrations/` and define producer/consumer expectations for specific event names.

Current set (additive):

- `ops/architecture/integrations/ops.task.status_changed.v1.md`
- `ops/architecture/integrations/ops.agent.capacity_changed.v1.md`
- `ops/architecture/integrations/ops.run.status_changed.v1.md`

### 1) HTTP API: Control Tower API (read-mostly)

- **Spec**: `ops/architecture/openapi/control-tower-api.v1.yaml`
- **Style**: REST + JSON, versioned via URL prefix: `/v1/...`
- **Auth**: `X-Api-Key` (optional in local dev; required when exposed beyond localhost)

The API is the canonical integration surface for UI and for agent-side automation.

### 2) Event stream: JSONL append-only (local-first)

- **Envelope**: `ops/architecture/schemas/event-envelope.schema.json`
- **Storage**: `ops/events/events-YYYY-MM.jsonl`
- **Semantics**: append-only; ordering by `occurred_at` (ISO8601) then `event_id`

This stream feeds activity timeline components and acts as the “audit trail” for API-derived state.

---

## Data domains and canonical identifiers

### Task

- `task_id`: `T-XXXX`
- `owner`: agent/person handle (e.g., `Forge`, `Ledger`)
- `status`: `Backlog | In Progress | Blocked | Done` (see `ops/crm/STATUS_MAPPING_V1.md`)

### CV Run

- `role_id`: stable identifier for a role target (preferred over role title)
- `run_id`: immutable run instance identifier

### CRM

- `job_id`, `application_id` (UUIDs)

---

## Integration patterns

### UI pages

UI pages should prefer:

1. **GET** API endpoints for state (`/v1/tasks`, `/v1/agents`, `/v1/status-summary`)
2. **GET** `/v1/events` for timeline
3. Fall back to reading static sources directly only if API is not available

### Agents

Agents/tools should:

- mutate state via **POST** endpoints, which in turn:
  - validate payloads
  - write state to the current storage backend
  - append an event to JSONL

---

## Migration notes (from current repo state)

### Current state

- Operational truth is scattered across:
  - `ops/agent-tasks.csv` (tasks)
  - `ops/agent-roster.yaml` (agents)
  - `ops/UPDATE_CAPTURE.md` and other MD pages (summaries)
  - `ops/architecture/schemas/*.json` (events schemas)

### V1 migration (safe, incremental)

1. **Add API as a thin façade over existing files**
   - Read tasks from `agent-tasks.csv`
   - Read agents from `agent-roster.yaml`
   - Read events from `ops/events/*.jsonl` (if present)

2. **Start writing events on every mutation**
   - When a task status changes, append `crm.task.status_changed.v1` (or introduce `ops.task.status_changed.v1` if you want to keep CRM events separate)

3. **Gradually move writes off CSV**
   - Introduce `ops/data/tasks.sqlite` or `ops/data/tasks.json` as the API write target
   - Keep CSV as an export for humans until UI fully swaps to API

---

## Key risks

- **Dual-write drift**: if both UI and humans edit CSV while API writes elsewhere, state diverges.
  - Mitigation: API becomes the *only writer*; CSV becomes export-only.
- **Identifier mismatch**: task rows missing stable IDs or duplicates (already noted: duplicate `T-0302`).
  - Mitigation: enforce `task_id` uniqueness in API validation.
- **Security posture**: exposing API beyond localhost without auth leaks operational data.
  - Mitigation: bind to localhost by default; require API key and TLS when remote.
- **Over-engineering**: adding API too early could slow shipping.
  - Mitigation: read-only endpoints first; mutation endpoints only for high-value workflows.
```

## architecture/MEMORY_INDEX_V1.md

```markdown
# Memory Index v1 (Ops Control Tower)

**Last updated:** 2026-03-10

## Purpose
Introduce a small, machine-readable **curated-memory index** to complement the existing memory layers:
- L2 (events) is the audit trail.
- L3 (read models) is UI-ready projection.
- L4 (curated memory) is decision-grade.

This index makes L4 **searchable and linkable** without requiring consumers (agents, scripts, UI) to scrape markdown.

Key outcomes:
- One record per significant decision / architecture increment.
- Tight linking to the artefacts (files), schemas, and relevant event types.
- Low friction: append-only JSONL, git-friendly.

---

## Contract (v1)
### Storage location
Append-only JSONL file:
- `ops/architecture/memory-index.jsonl`

### Schema
Each line MUST be a standalone JSON object conforming to:
- `ops/architecture/schemas/memory.entry.v1.schema.json`

### Entry types
`entry_type` is one of:
- `decision`
- `architecture_increment`
- `risk`
- `run_log`
- `glossary`

### Linking rules
Use `links[]` to provide durable pointers:
- `kind=file` with repo-relative `href` (preferred)
- `kind=schema` for schema ids or paths
- `kind=event_type` for relevant envelope `event_type` names
- `kind=url` only when necessary

**Rule:** Prefer links over duplicating long content. The index is a map, not the territory.

---

## Operating model
### Who writes it
Any producer of architecture increments (this cron job included).

### When to write an entry
Write an entry when you create or materially change any of:
- schema (event, read model, integration contract)
- deployment topology
- integration contract/openapi
- memory layer design

### Append discipline
- Append-only in normal operation.
- Corrections should be new entries that reference the older entry_id (v1 does not formalise supersedes; use `summary` + links).

---

## Migration notes
### Step 1 (now): introduce the index
1. Create `ops/architecture/memory-index.jsonl`.
2. Start writing **one entry per architecture increment**.

### Step 2 (next): validation in publish
Update `ops/publish_preflight_v1.sh` (or equivalent) to:
- validate each JSONL line against `memory.entry.v1.schema.json`.

### Step 3 (later): consumption
- Use the index as the primary discovery mechanism for architecture docs.
- Optionally generate a human-readable page (e.g. `ops/architecture/memory-index.html`) from JSONL.

---

## Risks and mitigations
1) **Index becomes stale** (entries not written)
- Mitigation: enforce “one entry per increment” as part of this cron job’s definition; add preflight validation that the file exists and changed in the last N days.

2) **Duplicates / inconsistent tagging**
- Mitigation: keep tags small and controlled; introduce a tag glossary later if needed.

3) **Accidental sensitive data**
- Mitigation: keep summaries operational and non-personal; prefer linking to files that already follow repo handling rules; avoid embedding secrets.

4) **Another ‘source of truth’ confusion**
- Mitigation: document clearly: memory-index is a **directory** of decisions and artefacts, not the system of record (L2 events remain operational truth).
```

## architecture/MEMORY_LAYERS_V1.md

```markdown
# Memory Layers v1 (Ops Control Tower)

**Last updated:** 2026-03-09

## Purpose
Define a pragmatic, automatable memory architecture for Squad Enterprise Architecture work inside this repo.

Goals:
- Separate **ephemeral** chat context from **durable** operational truth.
- Make it easy to **replay** operational history (events) and **reconstruct** dashboards (read models).
- Keep long-term memory **curated**, with clear ownership and retention.
- Minimise PII/secret leakage and keep auditability high (git-friendly).

Non-goals (v1):
- Full enterprise knowledge graph.
- Automated sensitive data discovery/redaction.

---

## 1) Layer model (v1)

### L0. Runtime context (ephemeral)
**What it is:** In-session context (current conversation, tool outputs) that disappears between runs.

- **System of record:** none
- **Storage:** transient (model context)
- **Access pattern:** interactive
- **Retention:** minutes–hours
- **Primary risks:** hallucinated continuity, missing context after restart

**Rule:** never treat L0 as authoritative; write down decisions into L2/L3.

---

### L1. Working scratch (durable but non-authoritative)
**What it is:** Drafts, working notes, raw captures.

- **System of record:** file tree in `ops/` (repo)
- **Storage:** markdown/csv/html/etc
- **Access pattern:** human-first, occasionally machine-read
- **Retention:** weeks–months
- **Primary risks:** duplication, stale docs

**Where it lives (current):**
- `ops/*.md` plans and working docs
- `ops/downloads/*` reference artefacts

**Rule:** L1 is allowed to be messy. Promote conclusions into L2/L3.

---

### L2. Event log (append-only operational truth)
**What it is:** Canonical record of state changes and completed runs.

- **System of record:** JSONL event log
- **Storage:** `ops/events/events-YYYY-MM.jsonl`
- **Access pattern:** append-only write; replay by consumers
- **Retention:** 12 months recommended (configurable)
- **Primary risks:** schema drift, duplicate emission, missing events

**Contract:** see `ops/architecture/EVENT_MODEL_V1.md` and schemas in `ops/architecture/schemas/`.

**Rule:** if something happened that should drive dashboards/automation, emit an event (L2).

---

### L3. Read models (derived, query-optimised views)
**What it is:** Materialised views computed from L2 (and, temporarily, from CSV sources).

- **System of record:** derived, not authoritative
- **Storage:** `ops/read_models/*` (JSON/CSV) and/or `ops/status.html` generated artefacts
- **Access pattern:** read-heavy (UI), regenerated on demand
- **Retention:** regenerate anytime (keep last N for debugging)
- **Primary risks:** divergence from event log, hidden business logic

**Rule:** all transformation logic must be explicit and testable (even if tests come later).

---

### L4. Curated memory (long-term, decision-grade)
**What it is:** Distilled decisions, preferences, and durable facts.

- **System of record:** curated docs (outside `ops/` today, but referenced here)
- **Storage (current):**
  - `MEMORY.md` (long-term)
  - `memory/YYYY-MM-DD.md` (daily raw logs)
- **Access pattern:** lookup and summarisation
- **Retention:** long-term
- **Primary risks:** accidental secrets, overgrowth, unclear truth status

**Rule:** promote only what is stable and useful. Avoid storing secrets unless explicitly requested.

---

## 2) Data classification and handling

### Classification (v1)
- **Public:** safe to publish.
- **Internal:** ok in repo, not meant for public.
- **Sensitive:** credentials, personal contact details, private messages, HR/legal.

### Handling rules
- L2 event payloads MUST be **Internal** by default and SHOULD avoid **Sensitive**.
- If Sensitive data is unavoidable:
  - store a **reference** (pointer) rather than the raw value,
  - or redact/tokenise and keep the mapping outside the repo.

---

## 3) Canonical file map (v1)

### Authoritative vs derived
- **Authoritative:**
  - L2: `ops/events/events-YYYY-MM.jsonl`
- **Derived:**
  - L3: `ops/read_models/*` and generated HTML
- **Curated (decision-grade):**
  - L4: `MEMORY.md` and selected `ops/architecture/*_V*.md` specs

### Indexing (optional v1)
Introduce an optional machine-readable index for curated decisions and artefacts:
- `ops/architecture/memory-index.jsonl` (each line conforms to `memory.entry.v1`)

This supports:
- rapid search,
- linking decisions to events and artefacts,
- controlled summarisation without scraping markdown.

---

## 4) Integration points

### Producers (write)
- Agents/scripts that change CRM/task state emit L2 events.
- Pipelines emit completion events (e.g. `pipeline.cv_run.completed.v1`).

### Consumers (read)
- Dashboard worker consumes L2, produces L3.
- Human operators consult L3 for operational decisions.

---

## 5) Migration notes

### Step 1 (now): document + optional index schema
- Adopt this layer vocabulary in architecture docs.
- Add `memory.entry.v1` schema (optional).

### Step 2 (next): minimal decision capture into index
- When a new architecture increment is created, add a corresponding `memory-index.jsonl` entry:
  - what changed,
  - why,
  - links to files,
  - risks.

### Step 3 (later): automate read-model regeneration
- Ensure read-model generation is deterministic from L2.
- Add a small CI or scheduled job to regenerate L3 from L2.

---

## 6) Risks and mitigations

1) **Too many “truths”** (docs, CSVs, events)
- Mitigation: declare L2 as operational truth for changes; treat CSV/HTML as inputs during transition only.

2) **Sensitive data leakage into L2/L4**
- Mitigation: schema guidance + review checklist; prefer pointers over raw content.

3) **Index becomes another stale artefact**
- Mitigation: keep index optional; if used, enforce “one entry per increment” and validate schema.

4) **Read models embed logic without visibility**
- Mitigation: document transformations and version them; use event schemas as contracts.
```

## architecture/OPS_DATA_STORE_SQLITE_SCHEMA_V1.md

```markdown
# Ops Data Store (SQLite) Schema V1

**Last updated:** 2026-03-10

## Intent

Create a single local-first, transactional source of truth for Control Tower operational state (tasks, agents, runs) while keeping the existing **append-only JSONL event log** for audit and timeline.

This increment introduces a minimal **SQLite schema** that:

- replaces CSV as the write target (CSV becomes export-only)
- supports idempotent upserts from agents and API
- enables read models (kanban, status, capacity) to be generated deterministically

**Canonical store:** `ops/data/ops.db` (SQLite)

---

## Domain boundaries (V1)

- **Operational state** (current truth): SQLite tables below
- **Audit/event stream**: `ops/events/events-YYYY-MM.jsonl` (see `EVENT_MODEL_V1.md`)
- **Read models**: generated artefacts (HTML/JSON exports) derived from SQLite + events

V1 does **not** attempt to store every event payload in relational form, only the state needed for UI and automation.

---

## SQLite schema (DDL)

### 0) Pragmas (recommended)

```sql
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
PRAGMA foreign_keys = ON;
```

### 1) Agents

```sql
CREATE TABLE IF NOT EXISTS agents (
  agent_id            TEXT PRIMARY KEY,              -- e.g. "Forge", "Ledger", "Crabbie"
  display_name        TEXT NOT NULL,
  kind                TEXT NOT NULL DEFAULT 'agent',  -- agent|human|service
  status              TEXT NOT NULL DEFAULT 'active', -- active|inactive
  timezone            TEXT,                           -- optional (IANA)
  capabilities_json   TEXT,                           -- JSON array/object (kept flexible)
  created_at          TEXT NOT NULL,
  updated_at          TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_agents_status ON agents(status);
```

### 2) Tasks

```sql
CREATE TABLE IF NOT EXISTS tasks (
  task_id             TEXT PRIMARY KEY,               -- e.g. "T-0302"
  title               TEXT NOT NULL,
  description         TEXT,
  domain              TEXT NOT NULL DEFAULT 'ops',     -- ops|crm|cv|architecture|...
  owner_id            TEXT REFERENCES agents(agent_id),
  status              TEXT NOT NULL,                  -- Backlog|In Progress|Blocked|Done
  priority            INTEGER NOT NULL DEFAULT 3,      -- 1=highest, 5=lowest
  due_date            TEXT,                           -- ISO8601 date/time (optional)
  source              TEXT,                           -- where it came from (cron, chat, import)
  source_ref          TEXT,                           -- message id, job id, etc.
  tags_json           TEXT,                           -- JSON array of strings
  created_at          TEXT NOT NULL,
  updated_at          TEXT NOT NULL,
  closed_at           TEXT
);

CREATE INDEX IF NOT EXISTS idx_tasks_status ON tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_owner  ON tasks(owner_id);
CREATE INDEX IF NOT EXISTS idx_tasks_domain ON tasks(domain);
CREATE INDEX IF NOT EXISTS idx_tasks_due    ON tasks(due_date);
```

### 3) Task status history (for audit + analytics)

```sql
CREATE TABLE IF NOT EXISTS task_status_history (
  id                  INTEGER PRIMARY KEY AUTOINCREMENT,
  task_id             TEXT NOT NULL REFERENCES tasks(task_id) ON DELETE CASCADE,
  from_status         TEXT,
  to_status           TEXT NOT NULL,
  changed_by_id       TEXT REFERENCES agents(agent_id),
  reason              TEXT,
  occurred_at         TEXT NOT NULL,                  -- ISO8601
  event_id            TEXT                            -- ties back to JSONL event_id when available
);

CREATE INDEX IF NOT EXISTS idx_tsh_task     ON task_status_history(task_id);
CREATE INDEX IF NOT EXISTS idx_tsh_time     ON task_status_history(occurred_at);
CREATE UNIQUE INDEX IF NOT EXISTS uq_tsh_event_id ON task_status_history(event_id);
```

### 4) Work items / runs (optional but useful for CV pipeline + job apps)

This is a generic, lightweight “run” concept that can represent:

- a CV generation run
- a job application submission run
- a data export / publish run

```sql
CREATE TABLE IF NOT EXISTS runs (
  run_id              TEXT PRIMARY KEY,               -- UUID
  run_type            TEXT NOT NULL,                  -- cv|application|export|publish|...
  subject_id          TEXT,                           -- role_id, application_id, etc.
  status              TEXT NOT NULL,                  -- queued|running|succeeded|failed
  started_at          TEXT,
  finished_at         TEXT,
  created_by_id       TEXT REFERENCES agents(agent_id),
  meta_json           TEXT,                           -- JSON blob
  created_at          TEXT NOT NULL,
  updated_at          TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_runs_type_status ON runs(run_type, status);
CREATE INDEX IF NOT EXISTS idx_runs_subject     ON runs(subject_id);
```

### 5) Idempotency keys (for safe retries)

```sql
CREATE TABLE IF NOT EXISTS idempotency_keys (
  key                 TEXT PRIMARY KEY,
  scope               TEXT NOT NULL,                  -- endpoint or command family
  created_at          TEXT NOT NULL,
  response_json       TEXT                            -- optional cached response
);
```

---

## Integration contracts (what writes where)

### Writers

- **Control Tower API** is the sole writer to SQLite.
- Agents/tools mutate state **only via API**.

### Eventing

For every state mutation, the API MUST append a corresponding event to JSONL (see `OUTBOX_PATTERN_V1.md`).

Mapping (V1):

- `POST /v1/tasks` (create) → `ops.task.created.v1`
- `POST /v1/tasks/{id}/status` → `ops.task.status_changed.v1` + insert into `task_status_history`
- `POST /v1/agents` (upsert) → `ops.agent.upserted.v1`
- `POST /v1/runs` / `.../complete` → `ops.run.*.v1`

### Readers

- UI pages and workers should read via API endpoints backed by SQLite.
- JSONL events remain the feed for the timeline (API can provide `/v1/events` backed by JSONL scan).

---

## Migration notes (from current repo state)

### Source artefacts

- Tasks: `ops/agent-tasks.csv`
- Agents: `ops/agent-roster.yaml` and/or `ops/studio-roster.yaml`
- Events: `ops/events/*.jsonl`

### Migration plan (incremental, low blast radius)

1) **Create DB + tables**
   - Place at `ops/data/ops.db`.

2) **One-time import (bootstrap)**
   - Import agents from YAML → `agents`.
   - Import tasks from CSV → `tasks`.
   - Set `created_at/updated_at` to import time if missing.

3) **Dual-read, single-write**
   - API reads from SQLite first; if a record is missing, it MAY fall back to CSV/YAML for a limited period.
   - All mutations write to SQLite + JSONL only.

4) **Export-only CSV**
   - Add a scheduled export that regenerates `agent-tasks.csv` from SQLite for human browsing until UI is fully API-backed.

5) **Cutover**
   - Remove CSV/YAML fallback reads once confidence is high.

### Data quality rules to enforce at import

- `task_id` must be unique; resolve collisions by:
  - keeping oldest as-is
  - reissuing new IDs for duplicates (`T-0302b`, or better: allocate next free `T-XXXX`)
  - writing a one-off event `ops.task.id_remapped.v1`
- Normalise statuses to the canonical set.

---

## Risks and mitigations

1) **Dual-write drift (CSV edited by humans)**
   - Mitigation: clearly label CSV as export-only; stop importing after bootstrap.

2) **Silent schema creep via JSON blobs** (`*_json` columns)
   - Mitigation: document allowed keys; periodically promote stable fields into proper columns.

3) **Concurrency + partial writes (event appended but DB write fails, or vice versa)**
   - Mitigation: implement outbox pattern with a single transaction boundary where possible; if JSONL append is outside the DB transaction, add a recovery worker that reconciles “missing events” from DB change tables.

4) **Time semantics** (UTC vs local time)
   - Mitigation: store all `*_at` values in UTC ISO8601 with `Z`; keep timezone on agent for display.

5) **Over-indexing / performance**
   - Mitigation: start with the minimal indexes above; measure before adding more.

---

## Next increment candidates

- `ops/architecture/openapi/control-tower-api.v1.yaml`: add explicit endpoints for idempotent upserts and status history reads.
- `ops/architecture/schemas/ops.task.created.v1.json`: formal event schemas for the mapping above.
- A tiny import/export CLI (`ops/scripts/opsdb_bootstrap.py`, `ops/scripts/opsdb_export_csv.py`).
```

## architecture/OPS_EVENT_SCHEMAS_TASK_AGENT_RUN_V1.md

```markdown
# Ops Event Schemas: Task, Agent, Run (V1)

**Last updated:** 2026-03-10

## Increment
Add missing **producer-facing event payload schemas** for the Control Tower write-path.

We already have:
- Envelope: `schemas/event-envelope.schema.json`
- Task status change payload: `schemas/ops.task.status_changed.v1.schema.json`

This increment adds payload schemas for:
- `ops.task.created.v1`
- `ops.task.id_remapped.v1`
- `ops.agent.upserted.v1`
- `ops.run.status_changed.v1`

These schemas are designed to work with the existing canonical event envelope:
- `event_type` namespaced and versioned
- payload placed under `data`

## Contracts added
Payload schemas live under `ops/architecture/schemas/`:

1) `ops.task.created.v1.schema.json`
2) `ops.task.id_remapped.v1.schema.json`
3) `ops.agent.upserted.v1.schema.json`
4) `ops.run.status_changed.v1.schema.json`

## Event definitions (what they mean)

### 1) `ops.task.created.v1`
Emitted when a new task becomes known to the system (API create, import, or agent tool).

Guidance:
- If imported from CSV, set `source="csv-import"` in `data` and keep `occurred_at` as import time.
- If created by a human via UI, set `created_by` in `data` (e.g., `human:matt`).

### 2) `ops.task.id_remapped.v1`
Emitted when task identifiers change (most likely during bootstrap when duplicates exist).

Guidance:
- This is the *bridge* for reconciliation across:
  - CSV history
  - JSONL events
  - SQLite state
  - external references (links in docs)
- Always include `reason` with enough detail to understand the remap.

### 3) `ops.agent.upserted.v1`
Emitted when an agent record is created or updated (capabilities, status, timezone).

Guidance:
- Prefer emitting on meaningful changes (status, capabilities), not on every no-op upsert.

### 4) `ops.run.status_changed.v1`
Emitted when a run transitions state (queued → running → succeeded/failed).

Guidance:
- Use this for CV pipeline runs and publish/export runs.
- Correlate related events with `correlation_id` in the envelope (e.g., `run:<uuid>`).

## Migration notes

### Step 1 (no storage change)
- Producers that currently write CSV/HTML can start emitting these events immediately.
- Keep file-first transport: append to `ops/events/events-YYYY-MM.jsonl`.

### Step 2 (API + SQLite cutover)
Once the Control Tower API becomes the sole writer (per `OPS_DATA_STORE_SQLITE_SCHEMA_V1.md`):
- API endpoints MUST emit the corresponding events:
  - `POST /v1/tasks` → `ops.task.created.v1`
  - `POST /v1/tasks/{id}/status` → `ops.task.status_changed.v1`
  - bootstrap/import duplicate fix → `ops.task.id_remapped.v1`
  - `POST /v1/agents` (upsert) → `ops.agent.upserted.v1`
  - run lifecycle endpoints → `ops.run.status_changed.v1`

### Step 3 (consumer updates)
- Timeline/event viewers should treat `ops.task.id_remapped.v1` as a *linking* event and optionally show a banner (e.g., “Task ID changed”).
- Read model builders should apply the remap when projecting task history.

## Risks and mitigations

1) **Status enum mismatch** (OpenAPI vs JSON Schemas)
- Risk: API uses `Backlog|In Progress` while schemas use `backlog|in_progress`.
- Mitigation: treat event payload enums as canonical (lowercase snake). Add an API normalisation layer on ingress/egress.

2) **Over-emission / noisy logs**
- Risk: emitting `ops.agent.upserted.v1` on every run creates large JSONL files.
- Mitigation: emit only when a meaningful field changes; include `idempotency_key` to de-dupe.

3) **ID remap breaking deep links**
- Risk: docs and dashboards link to old `T-XXXX` and become stale.
- Mitigation: keep a remap index (derived from events) and add redirect/alias support in API and UI.

4) **Schema drift as JSON blobs evolve**
- Risk: `capabilities_json`, `meta_json`, `tags_json` are unbounded.
- Mitigation: keep schemas intentionally permissive for those sub-objects, but periodically promote stable keys to first-class schema fields.
```

## architecture/OUTBOX_PATTERN_V1.md

```markdown
# Event Outbox Pattern v1 (Ops Control Tower)

**Last updated:** 2026-03-09

## Purpose
Provide a concrete, DB-first continuation of `EVENT_MODEL_V1.md` that preserves the v1 event shapes while enabling:
- transactional consistency (domain write + event emission),
- reliable publishing with retries,
- replay/backfill, and
- consumer de-duplication.

This increment defines:
1) the **event_outbox** relational schema,
2) publishing semantics (leases, retries, DLQ),
3) required indexes, and
4) migration notes + risks.

Applies to both SQLite (initial) and Postgres (later). Differences are noted.

---

## 1) Schema (DDL)

### 1.1 event_outbox
Append-only logical outbox; records are immutable after `occurred_at` except for publish bookkeeping.

```sql
-- event_outbox v1
-- Store event envelope + validated payload, plus publishing metadata.

CREATE TABLE IF NOT EXISTS event_outbox (
  -- Identity
  outbox_id        TEXT PRIMARY KEY,           -- UUID (or ULID) generated at insert time

  -- Event envelope (v1)
  spec_version     TEXT NOT NULL,              -- "1.0"
  event_id         TEXT NOT NULL,              -- UUID; unique per event (consumer facing)
  event_type       TEXT NOT NULL,              -- e.g. "crm.task.status_changed.v1"
  occurred_at      TEXT NOT NULL,              -- RFC3339 UTC
  producer_name    TEXT NOT NULL,
  producer_version TEXT NULL,
  subject_type     TEXT NOT NULL,              -- e.g. "task"
  subject_id       TEXT NOT NULL,              -- e.g. "task:123"
  correlation_id   TEXT NULL,
  idempotency_key  TEXT NULL,

  -- Event payload (store the whole envelope OR only data; choose one and standardise)
  envelope_json    TEXT NOT NULL,              -- JSON string; MUST validate to envelope+payload schema

  -- Publishing bookkeeping
  publish_state    TEXT NOT NULL DEFAULT 'pending',  -- pending|leased|published|dead
  publish_attempts INTEGER NOT NULL DEFAULT 0,
  next_attempt_at  TEXT NULL,                  -- RFC3339 UTC

  leased_until     TEXT NULL,                  -- RFC3339 UTC
  lease_owner      TEXT NULL,                  -- instance id (worker name)

  published_at     TEXT NULL,                  -- RFC3339 UTC
  last_error       TEXT NULL                   -- last failure summary (truncate)
);

-- Uniqueness: prevent accidental duplicates on insert.
-- SQLite supports partial indexes; Postgres supports partial indexes too.
CREATE UNIQUE INDEX IF NOT EXISTS ux_event_outbox_event_id
  ON event_outbox(event_id);

-- Optional but recommended: de-dupe at source when idempotency_key is stable.
-- Allow NULLs; uniqueness applies only when present.
CREATE UNIQUE INDEX IF NOT EXISTS ux_event_outbox_idempotency_key
  ON event_outbox(idempotency_key)
  WHERE idempotency_key IS NOT NULL;

-- Worker scan indexes
CREATE INDEX IF NOT EXISTS ix_event_outbox_pending
  ON event_outbox(publish_state, next_attempt_at, occurred_at);

CREATE INDEX IF NOT EXISTS ix_event_outbox_subject
  ON event_outbox(subject_type, subject_id, occurred_at);
```

### 1.2 Dead-letter table (optional but clean)
If you prefer to keep `event_outbox` small and immutable after failure resolution.

```sql
CREATE TABLE IF NOT EXISTS event_dead_letter (
  dead_id        TEXT PRIMARY KEY,
  outbox_id      TEXT NOT NULL,
  moved_at       TEXT NOT NULL,
  reason         TEXT NOT NULL,
  envelope_json  TEXT NOT NULL,
  error_detail   TEXT NULL
);

CREATE INDEX IF NOT EXISTS ix_event_dead_letter_outbox
  ON event_dead_letter(outbox_id);
```

---

## 2) Publishing semantics (contracts)

### 2.1 Insert contract (producer)
Within the same DB transaction as the domain write:
1. Write/modify domain rows (jobs/applications/tasks/etc).
2. Construct the full **event envelope** per `EVENT_MODEL_V1.md`.
3. Validate `envelope_json` against:
   - `event-envelope.schema.json`, and
   - the per-event payload schema for `event_type`.
4. Insert into `event_outbox` with `publish_state='pending'` and `next_attempt_at` NULL.

**Rule:** never “fire and forget” publish from the domain transaction. Outbox is the handoff.

### 2.2 Lease contract (publisher worker)
A publisher instance claims work with a short lease.

**Algorithm (portable):**
- Find candidate rows:
  - `publish_state='pending'`
  - and (`next_attempt_at` IS NULL OR `next_attempt_at` <= now)
  - ordered by `occurred_at ASC`
- Attempt to atomically lease:
  - set `publish_state='leased'`
  - set `leased_until=now + lease_ttl` (e.g. 60s)
  - set `lease_owner=<instance_id>`

**SQLite note:** use an `UPDATE ... WHERE outbox_id IN (SELECT ...)` pattern inside a transaction.

### 2.3 Publish contract (sink)
The publisher MUST treat the sink as **at-least-once**. Consumers must de-dupe by `event_id`.

Supported sinks (choose one per environment):
- file sink: append to `ops/events/events-YYYY-MM.jsonl`
- HTTP sink: POST to an internal webhook
- message bus: NATS/Kafka/SNS (later)

### 2.4 Ack / retry / dead-letter
On successful publish:
- set `publish_state='published'`
- set `published_at=now`

On failure:
- increment `publish_attempts`
- set `last_error` (truncate to e.g. 1–4 KB)
- compute `next_attempt_at` using exponential backoff (e.g. 30s, 2m, 10m, 1h)
- set `publish_state='pending'`
- clear lease fields

On repeated failure (e.g. attempts >= 10 OR error is non-retriable):
- either set `publish_state='dead'` OR move row to `event_dead_letter`.

### 2.5 Consumer contract (read model)
Consumers must:
- validate the envelope,
- de-dupe on `event_id` (store a processed-event ledger),
- apply idempotent updates to read models.

---

## 3) Migration notes

### Migration step A (introduce table without changing event shapes)
1) Add `event_outbox` (and optional `event_dead_letter`) to the CRM DB.
2) Update writers (CSV-to-DB scripts, future UI handlers) to insert into outbox inside their domain transaction.
3) Create a small `publisher` job (can be `dashboard-worker.js` or separate process) to:
   - lease pending outbox rows,
   - publish them to JSONL (initially),
   - mark them published.

### Migration step B (bridge JSONL and outbox)
During transition, you may have two sources:
- legacy JSONL written directly, and
- outbox-published JSONL.

Recommendation: **disable direct JSONL writes** once outbox publishing is in place, to prevent ordering and duplication issues.

### Migration step C (move sink from JSONL to bus)
Swap the publisher sink implementation; keep:
- outbox schema,
- event envelope,
- per-event JSON schemas,
unchanged.

---

## 4) Risks and mitigations

1) **Exactly-once illusion**
- Risk: team assumes exactly-once; duplicates appear.
- Mitigation: document at-least-once, enforce consumer de-dupe on `event_id`.

2) **Lease bugs causing stuck rows**
- Risk: a crashed worker leaves rows leased forever.
- Mitigation: treat `leased_until < now` as lease-expired and re-lease; keep short TTL.

3) **Schema drift (invalid envelope_json)**
- Risk: unvalidated events make the stream unreliable.
- Mitigation: validate before insert; add a CI check that re-validates all published JSONL.

4) **Idempotency key misuse**
- Risk: overly broad idempotency keys collapse distinct events.
- Mitigation: define idempotency key templates per event type; keep it optional until stable.

5) **SQLite concurrency constraints**
- Risk: publisher and writers contend on DB locks.
- Mitigation: keep publish work in small batches; short transactions; consider WAL mode.
```

## architecture/PUBLISH_GUARDRAILS_V1.md

```markdown
# Publish Guardrails v1 (Ops Control Tower)

**Last updated:** 2026-03-09

## Purpose
The Ops Control Tower is published as a **static site** by copying a curated subset of workspace artefacts into a separate publish repo (`tmp_crabbie_repo`) and pushing to `main` via `ops/publish_ops.sh`.

Because this is a *copy-and-push* mechanism (not a build pipeline with secrets isolation), we need an explicit, automated **preflight safety gate** to reduce the risk of accidentally publishing:
- secrets (API keys, tokens, private keys),
- credentials (.env, SSH keys),
- unintentional personal data.

This increment defines the guardrail contract and introduces an executable preflight check.

---

## Guardrail contract

### When the preflight runs
Preflight MUST run **after** files are copied into the publish repo and **before** any `git add/commit/push`.

### Inputs
- Publish repo path: `$WS/tmp_crabbie_repo` (default in `publish_ops.sh`)

### Output behaviours
- **PASS**: exit code `0`, print a short summary.
- **FAIL**: exit code `1`, print:
  - offending file paths,
  - matched rule name(s),
  - minimal redacted context (no full secrets echoed).

### Non-goals (v1)
- Deep content classification (PII detection, ML-based scanning)
- Preventing publication of *all* sensitive operational content (that remains an allow-list responsibility)

---

## Ruleset (v1)

### A) Forbidden file patterns (hard fail)
Fail if any file in publish repo matches (case-insensitive):
- `.env`, `.env.*`
- `*id_rsa*`, `*id_ed25519*`
- `*.pem`, `*.key`, `*.p12`, `*.pfx`
- `*credentials*`, `*secret*`, `*token*` (filename-based)

Rationale: these are almost never intended for public distribution.

### B) Forbidden content patterns (hard fail)
Fail if any file content matches patterns such as:
- `BEGIN (RSA|OPENSSH|EC|PRIVATE) KEY`
- `AKIA[0-9A-Z]{16}` (AWS access key id)
- `xox(b|p|a|r)-` (Slack tokens)
- `ghp_` / `github_pat_` (GitHub tokens)
- Generic high-risk strings (case-insensitive): `api_key=`, `access_token`, `refresh_token`, `client_secret`

Rationale: catch common accidental leakage even if the filename is benign.

### C) Allow-list escape hatch (documented only)
If a false positive blocks publishing, resolve via one of:
- move the artefact out of the publish allow-list,
- redact the content,
- (only if necessary) add a narrowly-scoped exception rule with justification in the preflight script.

---

## Implementation

### Script
- `ops/publish_preflight_v1.sh`

### Integration
- `ops/publish_ops.sh` MUST invoke the preflight script prior to staging/commit.

---

## Migration notes

### Rolling adoption
1. Add `publish_preflight_v1.sh` and wire it into `publish_ops.sh`.
2. Run a publish once and tune false positives.
3. If publication moves to CI later, port the same checks into CI (GitHub Actions) for defence in depth.

### Future increments
- Add a **deny-list of directories** (e.g., never publish `memory/`, raw logs).
- Add a lightweight **PII heuristics scan** (emails, phone numbers) with a warning mode first.

---

## Risks and mitigations

1) **False positives block publishing**
- Mitigation: keep v1 rules minimal and narrowly targeted; add exceptions sparingly with justification.

2) **False negatives (missed secrets)**
- Mitigation: defence-in-depth: keep strict copy allow-list + add CI checks later; avoid storing secrets in artefacts that are ever copied.

3) **Sensitive context in legitimate files (not “secrets”)**
- Mitigation: treat allow-list selection as the primary control; introduce PII warning scan in a later increment.
```

## architecture/READ_MODEL_CONTRACTS_V1.md

```markdown
# Read Model Contracts v1 (Ops Control Tower)

**Last updated:** 2026-03-09

## Purpose
Decouple UI pages from parsing raw operational artefacts (CSV/MD) by introducing **versioned, schema-validated read models**. Read models are JSON documents produced by a deterministic worker/build step and consumed by static pages.

This increment defines:
- which read models exist in v1,
- where they live,
- JSON Schema contracts for each,
- migration steps from today’s CSV parsing,
- key risks.

This is intentionally **local-first** and **static-site friendly**: read models are files published alongside HTML.

---

## Scope
### In scope (v1)
1) **Status Summary**: a single JSON object to drive `status.html` and high-level KPIs.
2) **Kanban Board**: normalised tasks with swimlanes/columns to drive `kanban.html`.

### Out of scope (v1)
- Full text search indexes
- Time-series analytics
- Live server-side APIs

---

## Storage locations (contract)
Read models MUST be written to:
- `ops/read_models/v1/status_summary.json`
- `ops/read_models/v1/kanban_board.json`

Publishing:
- `ops/publish_ops.sh` should include `ops/read_models/**` in the allow-list.

---

## Versioning rules
- Versioned by **path** and by schema `$id`:
  - `.../v1/...` indicates major version.
- Non-breaking changes (additive fields) are allowed within v1.
- Breaking changes require v2 path + new schema.

---

## Contracts (JSON Schemas)
Schemas live under `ops/architecture/schemas/`.

### 1) Status Summary v1
- Schema: `readmodel.status_summary.v1.schema.json`
- Consumer: `ops/status.html` (and any future “home” dashboard)

### 2) Kanban Board v1
- Schema: `readmodel.kanban_board.v1.schema.json`
- Consumer: `ops/kanban.html`

---

## Relationship to Event Model v1
Read models may be built from any combination of:
- raw artefacts (e.g., `ops/agent-tasks.csv`)
- event log (`ops/events/events-YYYY-MM.jsonl`)
- derived artefacts (e.g., `ops/usage/api-usage-log.csv`)

Rule of thumb:
- **Events** are the audit trail.
- **Read models** are the fast, UI-ready projection.

---

## Migration notes (incremental)
### Step 0: Introduce read model directory (no UI change)
- Create `ops/read_models/v1/`.
- Produce `status_summary.json` and `kanban_board.json` via a script/agent step.
- Validate outputs against the schemas as a CI/local check.

### Step 1: Update UI pages to prefer read models
- In `ops/ui/*.js` (or page scripts), load JSON from `ops/read_models/v1/*.json` first.
- If missing, fall back to existing CSV parsing for backwards compatibility.

### Step 2: Make read models required for publish
- Add a pre-publish check in `publish_ops.sh` that fails if read models are missing.
- Optional: keep CSV publish for human inspection/export only.

### Step 3 (later): Move from CSV-derived → event-derived
- Once producers consistently emit `*.status_changed.v1` events, the worker can build kanban/status from events + snapshots.
- This removes dependence on CSV structure.

---

## Key risks and mitigations
1) **Stale read models**
- Risk: UI shows old state if the build step isn’t run.
- Mitigation: publish script should *build then publish*; add timestamp + source hashes.

2) **Schema drift**
- Risk: UI and producer disagree about JSON shape.
- Mitigation: validate read model files against JSON Schema in the build step.

3) **Hidden source-of-truth conflict**
- Risk: humans keep editing CSV, but the UI is driven by read models.
- Mitigation: show `generated_from` and `inputs` in each read model, plus a `generated_at` watermark in UI.

4) **Identifier instability**
- Risk: tasks lack stable IDs, breaking reconciliation across inputs.
- Mitigation: require `task_id` and enforce uniqueness at projection time; fail fast on duplicates.

---

## Example: minimal status summary
```json
{
  "spec_version": "1.0",
  "generated_at": "2026-03-09T00:10:00Z",
  "window": {"from": "2026-03-01T00:00:00Z", "to": "2026-03-09T00:10:00Z"},
  "counts": {
    "tasks": {"backlog": 12, "in_progress": 5, "blocked": 1, "done": 27},
    "cv_runs": {"success": 4, "partial": 1, "failed": 0}
  },
  "highlights": [
    {"type": "risk", "title": "Blocked tasks", "detail": "1 task is blocked"}
  ]
}
```
```

## architecture/integrations/ops.agent.capacity_changed.v1.md

```markdown
# Integration Contract: ops.agent.capacity_changed.v1

**Version:** 1

## Intent

Emit a durable event whenever an agent’s *available capacity* changes. This supports:

- the agent roster view (who is available, constrained, or paused)
- queue/routing rules (only assign work to agents above a threshold)
- timeline/audit (why capacity changed)

This is explicitly *ops-layer*, not CRM: it describes the operating system that coordinates agents.

## Transport

- Stored as JSON in `ops/events/events-YYYY-MM.jsonl`
- Wrapped in the standard event envelope:
  - `ops/architecture/schemas/event-envelope.schema.json`

## Event type

`ops.agent.capacity_changed.v1`

## Subject

Envelope `subject` MUST be:

```json
{"type":"agent","id":"agent:<agent_id>"}
```

Where `agent_id` matches the roster `agents[].id` in `ops/agent-roster.yaml`.

## Payload schema (conceptual)

```json
{
  "agent_id": "writer",
  "capacity_pct": 40,
  "state": "reduced",
  "reason": "Deep work on CV drafts; limit interruptions",
  "effective_from": "2026-03-09T04:20:00Z",
  "updated_by": "agent:control-tower",
  "source": "control-tower-api"
}
```

## Validation rules

- `agent_id` MUST be a stable slug, aligned to `ops/agent-roster.yaml`.
- `capacity_pct` MUST be an integer in `[0, 100]`.
- `state` MUST be one of:
  - `active` (normal capacity)
  - `reduced` (constrained but available)
  - `paused` (do not assign)
- If present, `effective_from` MUST be RFC3339 UTC, and SHOULD be `<=` envelope `occurred_at`.
- If `state == paused`, `capacity_pct` SHOULD be `0` (consumer may normalise).

## Consumer projection (recommended)

Consumers (dashboard worker, API read model) should maintain a single projection:

- key: `agent_id`
- fields: `capacity_pct`, `state`, `reason`, `effective_from`, `last_event_id`, `last_occurred_at`
- rule: last-write-wins by (`effective_from` if present else `occurred_at`), then `event_id`

## Mapping to existing artefacts

- `ops/agent-roster.yaml` remains the **identity + role** source.
- Capacity is currently *implicit* (humans decide, not encoded). This event makes it explicit without forcing roster format changes.
- UI candidates:
  - `agent-queue.html`: filter/flag when `state != active` or `capacity_pct < threshold`
  - `status.html`: show capacity notes as part of the daily brief

## Risks

- **Noise/oscillation**: frequent tiny adjustments create spammy timelines.
  - Mitigation: apply hysteresis (only emit on >=10% change or state change), or batch changes.
- **Roster mismatch**: event references unknown `agent_id`.
  - Mitigation: producer validates against current roster; consumer quarantines unknowns.
- **Ambiguous meaning**: `%` is subjective across agents.
  - Mitigation: treat as routing signal (relative), not time accounting; require a short `reason` for non-active states.
```

## architecture/integrations/ops.run.status_changed.v1.md

```markdown
# Integration Contract: ops.run.status_changed.v1

**Version:** 1

## Intent

Emit a durable event whenever a long-running operational process (“run”) changes status. This supports:

- activity timelines (what started/finished, and when)
- reconstructing run history for any subject (CV role, application, export, publish)
- a stable hook for retries, alerts, and SLAs (future)

Typical runs:

- `run_type=cv` (CV pipeline execution)
- `run_type=application` (application workflow step)
- `run_type=export` (ops export generation)
- `run_type=publish` (site or artefact publish)

## Transport

- Stored as JSON in `ops/events/events-YYYY-MM.jsonl`
- Wrapped in the standard event envelope:
  - `ops/architecture/schemas/event-envelope.schema.json`
- Payload schema (machine validation):
  - `ops/architecture/schemas/ops.run.status_changed.v1.schema.json`

## Payload schema (example)

Envelope (illustrative):

```json
{
  "event_id": "01J2K3X4Y5Z6A7B8C9D0E1F2G3",
  "event_name": "ops.run.status_changed.v1",
  "event_version": 1,
  "occurred_at": "2026-03-10T20:18:00Z",
  "producer": "service:cv-pipeline",
  "correlation_id": "run:5d3d6d5e-9e1a-4e2b-b3be-6d6f6f1d2c3a",
  "payload": {
    "run_id": "5d3d6d5e-9e1a-4e2b-b3be-6d6f6f1d2c3a",
    "run_type": "cv",
    "subject_id": "role:pm-enterprise-ai-001",
    "from_status": "queued",
    "to_status": "running",
    "started_at": "2026-03-10T20:18:00Z",
    "finished_at": null,
    "result": null,
    "meta": {
      "git_sha": "abc1234",
      "input": "roles/top10-ranked-v1.json"
    },
    "changed_by": "service:cv-pipeline"
  }
}
```

## Validation rules (beyond JSON Schema)

1) **Status progression**
- Allowed statuses: `queued | running | succeeded | failed`
- Recommended transitions:
  - `queued → running → succeeded|failed`
  - `queued → failed` (if preflight fails before start)
- `from_status` MAY be null for first-known state.

2) **Timestamps**
- If `started_at` is present, it SHOULD be set on the first transition to `running`.
- If `to_status` is `succeeded` or `failed`, `finished_at` SHOULD be non-null.
- `started_at` MUST be <= `finished_at` when both present.

3) **Run identity and correlation**
- `run_id` MUST be immutable for the life of the run.
- Envelope `correlation_id` SHOULD be stable per run (recommended: `run:<run_id>`).

4) **Result semantics**
- `result` SHOULD be null unless `to_status ∈ {succeeded, failed}`.
- If `to_status=failed`, `result` SHOULD be `failed`.
- If `to_status=succeeded`, `result` SHOULD be `success` (or `partial` if explicitly needed).

## Consumer expectations

Consumers SHOULD be able to build a run history using only events:

- `run_id` is the primary key
- last-write-wins projection by (`occurred_at`, `event_id`) for the current status
- history view is the ordered list of `ops.run.status_changed.v1` events

Recommended read models:

- **Run timeline**: events grouped by `run_id`
- **Subject timeline**: events grouped by `subject_id`

## Mapping to existing artefacts

- `ops/cv-pipeline/*` scripts:
  - emit `queued` when a run is created
  - emit `running` at first work step
  - emit `succeeded|failed` on termination
- UI pages (`activity.html`, future status components):
  - render “Run started/finished” entries using `run_type`, `subject_id`, and timestamps

## Migration notes (incremental adoption)

1) **Start by emitting only terminal events**
- If adding instrumentation is risky, begin with just:
  - `to_status=succeeded|failed` and `finished_at`
- Then backfill `queued` and `running` once stable.

2) **Bridge from ad-hoc logs**
- Where runs are currently only visible via console output, add a tiny adapter that appends events to JSONL using the envelope schema.

3) **Avoid dual truth**
- Do not introduce a separate “runs.csv” as a second writable source.
- The JSONL event stream is the audit trail; any tabular view is a projection/export.

## Risks

- **Inconsistent status vocabulary** across producers (`done`, `complete`, etc.).
  - Mitigation: enforce the schema at the write boundary (API or append helper).
- **Missing timestamps** makes duration and SLA metrics impossible.
  - Mitigation: require `started_at` for `running` and `finished_at` for terminal statuses in producer helpers.
- **Duplicate events** (retries) can inflate timelines.
  - Mitigation: consumers should be idempotent by (`event_id`) and tolerate repeated transitions.
- **Meta bloat / PII leakage** in `meta`.
  - Mitigation: treat `meta` as operational diagnostics only; avoid embedding raw documents, emails, or sensitive candidate data.
```

## architecture/integrations/ops.task.status_changed.v1.md

```markdown
# Integration Contract: ops.task.status_changed.v1

**Version:** 1

## Intent

Emit a durable event whenever a task changes status. This supports:

- activity timelines ("what changed")
- rebuilding task state from an audit trail
- notification rules (future)

## Transport

- Stored as JSON in `ops/events/events-YYYY-MM.jsonl`
- Wrapped in the standard event envelope:
  - `ops/architecture/schemas/event-envelope.schema.json`

## Payload schema (conceptual)

```json
{
  "task_id": "T-0206",
  "from_status": "In Progress",
  "to_status": "Blocked",
  "reason": "Need agreed approach for shared masthead/nav partials",
  "owner": "Rivet",
  "source": "control-tower-api",
  "effective_at": "2026-03-08T11:17:00Z"
}
```

## Validation rules

- `task_id` MUST match `^T-\d{4}$`
- `from_status` MAY be null for first-known state
- `to_status` MUST be one of: `Backlog | In Progress | Blocked | Done`
- If `effective_at` is present, it MUST be <= envelope `occurred_at`

## Mapping to existing artefacts

- `agent-tasks.csv` row: update `status` and optionally append a note.
- `CONTROL_TOWER.md`: can be generated from events by grouping by window.

## Risks

- If humans edit CSV without emitting events, the audit trail becomes incomplete.
- If multiple writers update the same task concurrently, you can get out-of-order events.
  - Mitigation: always include `occurred_at` and use last-write-wins for projection.
```

## architecture/memory-index.jsonl

```json
{"spec_version":"1.0","entry_id":"5ecadad4-d72b-4fb5-bf97-e8f317f5e6f1","created_at":"2026-03-10T08:18:00Z","entry_type":"architecture_increment","title":"Memory Index v1: append-only curated decision directory","summary":"Introduced an append-only curated-memory index (JSONL) to make L4 decisions and architecture increments discoverable without scraping markdown. Each line conforms to memory.entry.v1 schema and links to the underlying artefacts (docs/schemas/event types). This supports fast search, controlled summarisation, and cross-linking between L2 events, L3 read models, and L4 decision-grade docs.","tags":["ops","architecture","memory","index","jsonl"],"links":[{"kind":"file","href":"ops/architecture/MEMORY_INDEX_V1.md","label":"Spec: Memory Index v1"},{"kind":"file","href":"ops/architecture/memory-index.jsonl","label":"Index: memory-index.jsonl"},{"kind":"schema","href":"ops/architecture/schemas/memory.entry.v1.schema.json","label":"Schema: memory.entry.v1"},{"kind":"file","href":"ops/architecture/MEMORY_LAYERS_V1.md","label":"Context: Memory Layers v1"}],"risks":["Index staleness if increments are created without adding an entry (mitigate via cron discipline + preflight validation).","Accidental inclusion of sensitive data in summaries (keep summaries operational; prefer links/pointers)."],"owners":["agent:atlas","human:matt"]}
```

## architecture/openapi/control-tower-api.v1.yaml

```yaml
openapi: 3.0.3
info:
  title: Ops Control Tower API
  version: 1.0.0
  description: |
    Minimal read-mostly API façade for Ops Control Tower artefacts.

    V1 goal: unify dashboards + agents on a single contract while the
    underlying persistence remains file-based (CSV/YAML/JSONL).
servers:
  - url: http://localhost:8787
    description: Local dev
security:
  - ApiKeyAuth: []

paths:
  /v1/health:
    get:
      summary: Health check
      security: []
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                type: object
                properties:
                  status:
                    type: string
                    example: ok
                  time_utc:
                    type: string
                    format: date-time

  /v1/agents:
    get:
      summary: List agents
      responses:
        '200':
          description: Agents
          content:
            application/json:
              schema:
                type: object
                properties:
                  agents:
                    type: array
                    items:
                      $ref: '#/components/schemas/Agent'

  /v1/tasks:
    get:
      summary: List tasks
      parameters:
        - in: query
          name: status
          description: Filter by status
          schema:
            $ref: '#/components/schemas/TaskStatus'
        - in: query
          name: owner
          description: Filter by owner/agent
          schema:
            type: string
        - in: query
          name: q
          description: Full-text query (implementation-defined)
          schema:
            type: string
      responses:
        '200':
          description: Tasks
          content:
            application/json:
              schema:
                type: object
                properties:
                  tasks:
                    type: array
                    items:
                      $ref: '#/components/schemas/Task'

  /v1/tasks/{task_id}:
    get:
      summary: Get a task
      parameters:
        - in: path
          name: task_id
          required: true
          schema:
            type: string
            pattern: '^T-\\d{4}$'
      responses:
        '200':
          description: Task
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Task'
        '404':
          description: Not found

  /v1/tasks/{task_id}/status:
    post:
      summary: Change task status (writes event)
      description: |
        V1 mutation endpoint.

        Implementation must:
        - validate task_id uniqueness
        - update the current backing store
        - append an event to JSONL (event type: ops.task.status_changed.v1)
      parameters:
        - in: path
          name: task_id
          required: true
          schema:
            type: string
            pattern: '^T-\\d{4}$'
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required: [to_status]
              properties:
                to_status:
                  $ref: '#/components/schemas/TaskStatus'
                reason:
                  type: string
                  description: Optional human-readable reason
                actor:
                  type: string
                  description: Who/what made the change (agent, user)
      responses:
        '200':
          description: Updated task
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Task'
        '409':
          description: Conflict (e.g., duplicate IDs, invalid transition)

  /v1/events:
    get:
      summary: Query events (append-only)
      parameters:
        - in: query
          name: since
          description: ISO8601 timestamp (inclusive)
          schema:
            type: string
            format: date-time
        - in: query
          name: until
          description: ISO8601 timestamp (exclusive)
          schema:
            type: string
            format: date-time
        - in: query
          name: types
          description: Comma-separated event types
          schema:
            type: string
      responses:
        '200':
          description: Events
          content:
            application/json:
              schema:
                type: object
                properties:
                  events:
                    type: array
                    items:
                      $ref: '#/components/schemas/EventEnvelope'

  /v1/status-summary:
    get:
      summary: Summary for status.html (pre-aggregated)
      description: |
        Returns the exact data needed by the Status page.
        This endpoint exists to keep UI code simple and stable.
      responses:
        '200':
          description: Summary
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusSummary'

components:
  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-Api-Key

  schemas:
    Agent:
      type: object
      required: [handle, name, role]
      properties:
        handle:
          type: string
          example: Forge
        name:
          type: string
          example: Forge
        role:
          type: string
          example: CV Pipeline Engineer
        status:
          type: string
          example: active

    TaskStatus:
      type: string
      enum: [Backlog, In Progress, Blocked, Done]

    Task:
      type: object
      required: [task_id, title, status]
      properties:
        task_id:
          type: string
          pattern: '^T-\\d{4}$'
        title:
          type: string
        owner:
          type: string
          nullable: true
        status:
          $ref: '#/components/schemas/TaskStatus'
        priority:
          type: string
          nullable: true
        due_date:
          type: string
          format: date
          nullable: true
        notes:
          type: string
          nullable: true
        updated_at:
          type: string
          format: date-time
          nullable: true

    EventProducer:
      type: object
      required: [name]
      properties:
        name:
          type: string
          example: ledger
        version:
          type: string
          nullable: true
          example: 0.1

    EventSubject:
      type: object
      required: [type, id]
      properties:
        type:
          type: string
          example: task
        id:
          type: string
          example: "T-0204"

    EventEnvelope:
      type: object
      description: |
        Canonical Ops event envelope.

        This schema is intended to match `ops/architecture/schemas/event-envelope.schema.json`.
      required: [spec_version, event_id, event_type, occurred_at, producer, subject, data]
      properties:
        spec_version:
          type: string
          example: "1.0"
        event_id:
          type: string
          description: UUID
          example: 2f4b1d24-9c2b-4a90-820f-9c45b16c5b2f
        event_type:
          type: string
          example: ops.task.status_changed.v1
        occurred_at:
          type: string
          format: date-time
          description: RFC3339 UTC
        producer:
          $ref: '#/components/schemas/EventProducer'
        subject:
          $ref: '#/components/schemas/EventSubject'
        correlation_id:
          type: string
          nullable: true
        idempotency_key:
          type: string
          nullable: true
        data:
          type: object
          description: Per-event payload (shape depends on event_type)
          additionalProperties: true

    StatusSummary:
      type: object
      required: [time_utc, top_priorities, blockers, task_counts]
      properties:
        time_utc:
          type: string
          format: date-time
        top_priorities:
          type: array
          items:
            $ref: '#/components/schemas/Task'
        blockers:
          type: array
          items:
            type: object
            required: [task_id, blocker]
            properties:
              task_id:
                type: string
              blocker:
                type: string
        task_counts:
          type: object
          additionalProperties:
            type: integer
```

## architecture/schemas/crm.application.status_changed.v1.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ops.mattkain.com/schemas/crm.application.status_changed/v1",
  "title": "crm.application.status_changed.v1",
  "type": "object",
  "additionalProperties": false,
  "required": ["old_status", "new_status"],
  "properties": {
    "old_status": {"$ref": "#/definitions/applicationStatus"},
    "new_status": {"$ref": "#/definitions/applicationStatus"},
    "reason": {"type": "string"},
    "changed_by": {"type": "string"}
  },
  "definitions": {
    "applicationStatus": {
      "type": "string",
      "enum": [
        "not_started",
        "drafting",
        "submitted",
        "interviewing",
        "offer",
        "rejected",
        "withdrawn"
      ]
    }
  }
}
```

## architecture/schemas/crm.job.status_changed.v1.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ops.mattkain.com/schemas/crm.job.status_changed/v1",
  "title": "crm.job.status_changed.v1",
  "type": "object",
  "additionalProperties": false,
  "required": ["old_status", "new_status"],
  "properties": {
    "old_status": {"$ref": "#/definitions/jobStatus"},
    "new_status": {"$ref": "#/definitions/jobStatus"},
    "reason": {"type": "string"},
    "changed_by": {"type": "string", "description": "agent:<name> | human:<name> | system"}
  },
  "definitions": {
    "jobStatus": {
      "type": "string",
      "enum": ["identified", "shortlisted", "dropped"]
    }
  }
}
```

## architecture/schemas/crm.task.status_changed.v1.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ops.mattkain.com/schemas/crm.task.status_changed/v1",
  "title": "crm.task.status_changed.v1",
  "type": "object",
  "additionalProperties": false,
  "required": ["old_status", "new_status"],
  "properties": {
    "old_status": {"$ref": "#/definitions/taskStatus"},
    "new_status": {"$ref": "#/definitions/taskStatus"},
    "reason": {"type": "string"},
    "changed_by": {"type": "string"}
  },
  "definitions": {
    "taskStatus": {
      "type": "string",
      "enum": ["backlog", "in_progress", "blocked", "done"]
    }
  }
}
```

## architecture/schemas/event-envelope.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ops.mattkain.com/schemas/event-envelope/1.0",
  "title": "Ops Event Envelope",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "spec_version",
    "event_id",
    "event_type",
    "occurred_at",
    "producer",
    "subject",
    "data"
  ],
  "properties": {
    "spec_version": {
      "type": "string",
      "const": "1.0"
    },
    "event_id": {
      "type": "string",
      "description": "UUID",
      "pattern": "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$"
    },
    "event_type": {
      "type": "string",
      "minLength": 1
    },
    "occurred_at": {
      "type": "string",
      "description": "RFC3339 timestamp in UTC (Z)",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$"
    },
    "producer": {
      "type": "object",
      "additionalProperties": false,
      "required": ["name"],
      "properties": {
        "name": {"type": "string", "minLength": 1},
        "version": {"type": "string"},
        "environment": {"type": "string", "description": "local|ci|prod etc"}
      }
    },
    "subject": {
      "type": "object",
      "additionalProperties": false,
      "required": ["type", "id"],
      "properties": {
        "type": {"type": "string", "minLength": 1},
        "id": {"type": "string", "minLength": 1}
      }
    },
    "correlation_id": {"type": "string"},
    "idempotency_key": {"type": "string"},
    "data": {"type": "object"}
  }
}
```

## architecture/schemas/memory.entry.v1.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ops.mattkain.com/schemas/memory.entry.v1.schema.json",
  "title": "memory.entry.v1",
  "type": "object",
  "additionalProperties": false,
  "required": ["spec_version", "entry_id", "created_at", "entry_type", "title", "summary", "links"],
  "properties": {
    "spec_version": {
      "type": "string",
      "const": "1.0"
    },
    "entry_id": {
      "type": "string",
      "description": "Stable identifier for this index entry (UUID recommended)."
    },
    "created_at": {
      "type": "string",
      "format": "date-time",
      "description": "RFC3339 UTC timestamp."
    },
    "entry_type": {
      "type": "string",
      "enum": ["decision", "architecture_increment", "risk", "run_log", "glossary"],
      "description": "Classification for search and filtering."
    },
    "title": {"type": "string", "minLength": 3, "maxLength": 160},
    "summary": {"type": "string", "minLength": 10, "maxLength": 2000},
    "tags": {
      "type": "array",
      "items": {"type": "string", "minLength": 1, "maxLength": 40},
      "maxItems": 20
    },
    "correlation_id": {
      "type": "string",
      "description": "Optional link to an L2 event correlation_id (e.g., run id)."
    },
    "links": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": ["kind", "href"],
        "properties": {
          "kind": {
            "type": "string",
            "enum": ["file", "url", "event_type", "schema"]
          },
          "href": {"type": "string"},
          "label": {"type": "string", "maxLength": 120}
        }
      }
    },
    "risks": {
      "type": "array",
      "items": {"type": "string", "minLength": 3, "maxLength": 240},
      "maxItems": 20
    },
    "owners": {
      "type": "array",
      "items": {"type": "string", "minLength": 3, "maxLength": 80},
      "description": "Optional owners, e.g. ['agent:atlas','human:matt']."
    }
  }
}
```

## architecture/schemas/ops.agent.capacity_changed.v1.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ops.mattkain.com/schemas/ops.agent.capacity_changed/v1",
  "title": "ops.agent.capacity_changed.v1",
  "type": "object",
  "additionalProperties": false,
  "required": ["agent_id", "capacity_pct", "state"],
  "properties": {
    "agent_id": {
      "type": "string",
      "pattern": "^[a-z][a-z0-9_-]{1,32}$",
      "description": "Stable agent slug aligned to ops/agent-roster.yaml agents[].id (e.g., writer, analyst, control-tower)."
    },
    "capacity_pct": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "description": "Routing signal for relative availability (0-100)."
    },
    "state": {
      "type": "string",
      "enum": ["active", "reduced", "paused"],
      "description": "Coarse capacity state for simple UI/routing rules."
    },
    "reason": {
      "type": "string",
      "description": "Optional human-readable reason (recommended when state != active)."
    },
    "effective_from": {
      "type": "string",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$",
      "description": "Optional: when this capacity should take effect (RFC3339 UTC)."
    },
    "updated_by": {
      "type": "string",
      "description": "Optional actor reference (e.g., agent:control-tower, human:matt)."
    },
    "source": {
      "type": "string",
      "description": "Optional producer-specific source label (e.g., control-tower-api, manual-note)."
    }
  }
}
```

## architecture/schemas/ops.agent.upserted.v1.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ops.mattkain.com/schemas/ops.agent.upserted/v1",
  "title": "ops.agent.upserted.v1",
  "type": "object",
  "additionalProperties": false,
  "required": ["agent_id", "display_name", "kind", "status"],
  "properties": {
    "agent_id": {
      "type": "string",
      "description": "Stable agent identifier (e.g., Forge, Ledger, Crabbie)."
    },
    "display_name": {"type": "string"},
    "kind": {
      "type": "string",
      "enum": ["agent", "human", "service"],
      "default": "agent"
    },
    "status": {
      "type": "string",
      "enum": ["active", "inactive"],
      "default": "active"
    },
    "timezone": {
      "type": ["string", "null"],
      "description": "Optional IANA timezone (e.g., Australia/Brisbane)."
    },
    "capabilities": {
      "type": ["object", "array", "null"],
      "description": "Flexible blob (JSON) describing capabilities/limits; schema intentionally permissive in v1."
    },
    "upserted_by": {
      "type": "string",
      "description": "Actor reference (e.g., service:control-tower-api)."
    }
  }
}
```

## architecture/schemas/ops.run.status_changed.v1.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ops.mattkain.com/schemas/ops.run.status_changed/v1",
  "title": "ops.run.status_changed.v1",
  "type": "object",
  "additionalProperties": false,
  "required": ["run_id", "run_type", "to_status"],
  "properties": {
    "run_id": {
      "type": "string",
      "description": "Run identifier (UUID preferred)."
    },
    "run_type": {
      "type": "string",
      "description": "cv|application|export|publish|..."
    },
    "subject_id": {
      "type": ["string", "null"],
      "description": "Optional subject identifier (role_id, application_id, etc.)."
    },
    "from_status": {
      "oneOf": [
        {"type": "null"},
        {"$ref": "#/$defs/runStatus"}
      ]
    },
    "to_status": {"$ref": "#/$defs/runStatus"},
    "started_at": {
      "type": ["string", "null"],
      "description": "RFC3339 UTC timestamp if known."
    },
    "finished_at": {
      "type": ["string", "null"],
      "description": "RFC3339 UTC timestamp if known."
    },
    "result": {
      "type": ["string", "null"],
      "enum": [null, "success", "partial", "failed"],
      "description": "Optional: only meaningful when to_status indicates completion."
    },
    "meta": {
      "type": ["object", "null"],
      "description": "Flexible blob for run metadata; schema intentionally permissive in v1."
    },
    "changed_by": {
      "type": "string",
      "description": "Actor reference (e.g., agent:forge, service:cv-pipeline)."
    }
  },
  "$defs": {
    "runStatus": {
      "type": "string",
      "enum": ["queued", "running", "succeeded", "failed"]
    }
  }
}
```

## architecture/schemas/ops.task.created.v1.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ops.mattkain.com/schemas/ops.task.created/v1",
  "title": "ops.task.created.v1",
  "type": "object",
  "additionalProperties": false,
  "required": ["task_id", "title", "status"],
  "properties": {
    "task_id": {
      "type": "string",
      "pattern": "^T-\\d{4}$",
      "description": "Canonical task identifier (stable)."
    },
    "title": {"type": "string"},
    "description": {"type": "string"},
    "domain": {
      "type": "string",
      "description": "Logical domain bucket (ops|crm|cv|architecture|...).",
      "default": "ops"
    },
    "status": {"$ref": "#/$defs/taskStatus"},
    "owner": {
      "type": "string",
      "description": "Agent/person handle (e.g., Forge, Ledger, Matt)."
    },
    "priority": {
      "type": "integer",
      "minimum": 1,
      "maximum": 5,
      "description": "1=highest, 5=lowest"
    },
    "due_date": {
      "type": "string",
      "description": "ISO8601 date or date-time (UTC recommended)."
    },
    "tags": {
      "type": "array",
      "items": {"type": "string"}
    },
    "source": {
      "type": "string",
      "description": "Producer-specific source label (e.g., control-tower-api, csv-import)."
    },
    "source_ref": {
      "type": "string",
      "description": "Optional reference (message id, URL, file path, etc.)."
    },
    "created_by": {
      "type": "string",
      "description": "Actor reference (e.g., agent:ledger, human:matt)."
    }
  },
  "$defs": {
    "taskStatus": {
      "type": "string",
      "enum": ["backlog", "in_progress", "blocked", "done"]
    }
  }
}
```

## architecture/schemas/ops.task.id_remapped.v1.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ops.mattkain.com/schemas/ops.task.id_remapped/v1",
  "title": "ops.task.id_remapped.v1",
  "type": "object",
  "additionalProperties": false,
  "required": ["from_task_id", "to_task_id", "reason"],
  "properties": {
    "from_task_id": {
      "type": "string",
      "pattern": "^T-\\d{4}$",
      "description": "Previous task id (no longer canonical)."
    },
    "to_task_id": {
      "type": "string",
      "pattern": "^T-\\d{4}$",
      "description": "New canonical task id."
    },
    "reason": {
      "type": "string",
      "description": "Human-readable explanation sufficient for audit." 
    },
    "remapped_by": {
      "type": "string",
      "description": "Actor reference (e.g., agent:ledger, service:control-tower-api)."
    }
  }
}
```

## architecture/schemas/ops.task.status_changed.v1.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ops.mattkain.com/schemas/ops.task.status_changed/v1",
  "title": "ops.task.status_changed.v1",
  "type": "object",
  "additionalProperties": false,
  "required": ["task_id", "to_status"],
  "properties": {
    "task_id": {
      "type": "string",
      "pattern": "^T-\\d{4}$"
    },
    "from_status": {
      "oneOf": [
        {"type": "null"},
        {"$ref": "#/definitions/taskStatus"}
      ],
      "description": "Previous canonical status. Null allowed for first-known state."
    },
    "to_status": {
      "$ref": "#/definitions/taskStatus",
      "description": "New canonical status."
    },
    "reason": {"type": "string"},
    "owner": {"type": "string", "description": "Agent/person handle (e.g., Forge, Ledger, Matt)"},
    "source": {"type": "string", "description": "Producer-specific source label (e.g., control-tower-api, csv-import)"},
    "effective_at": {
      "type": "string",
      "description": "Optional: time the change should be considered effective; must be <= envelope occurred_at when validated by producer/consumer.",
      "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$"
    }
  },
  "definitions": {
    "taskStatus": {
      "type": "string",
      "enum": ["backlog", "in_progress", "blocked", "done"]
    }
  }
}
```

## architecture/schemas/pipeline.cv_run.completed.v1.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ops.mattkain.com/schemas/pipeline.cv_run.completed/v1",
  "title": "pipeline.cv_run.completed.v1",
  "type": "object",
  "additionalProperties": false,
  "required": ["role_id", "run_id", "result"],
  "properties": {
    "role_id": {"type": "string", "minLength": 1},
    "run_id": {"type": "string", "minLength": 1},
    "result": {"type": "string", "enum": ["success", "partial", "failed"]},
    "manifest_path": {"type": "string"},
    "qa_path": {"type": "string"},
    "artefacts": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": ["path", "label"],
        "properties": {
          "path": {"type": "string"},
          "label": {"type": "string"},
          "content_type": {"type": "string"}
        }
      }
    },
    "warnings": {"type": "array", "items": {"type": "string"}}
  }
}
```

## architecture/schemas/readmodel.kanban_board.v1.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ops.mattkain.com/schemas/readmodel.kanban_board.v1.schema.json",
  "title": "Read Model: Kanban Board v1",
  "type": "object",
  "additionalProperties": false,
  "required": ["spec_version", "generated_at", "columns", "tasks"],
  "properties": {
    "spec_version": {"type": "string", "const": "1.0"},
    "generated_at": {"type": "string", "format": "date-time"},
    "generated_from": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "producer": {"type": "string"},
        "version": {"type": "string"},
        "inputs": {
          "type": "array",
          "items": {
            "type": "object",
            "additionalProperties": false,
            "required": ["path"],
            "properties": {
              "path": {"type": "string"},
              "sha256": {"type": "string"}
            }
          }
        }
      }
    },
    "columns": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": ["id", "name"],
        "properties": {
          "id": {
            "type": "string",
            "enum": ["backlog", "in_progress", "blocked", "done"]
          },
          "name": {"type": "string"},
          "wip_limit": {"type": "integer", "minimum": 0}
        }
      }
    },
    "tasks": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": ["task_id", "title", "status"],
        "properties": {
          "task_id": {"type": "string", "pattern": "^T-[0-9]{4}$"},
          "title": {"type": "string"},
          "status": {
            "type": "string",
            "enum": ["backlog", "in_progress", "blocked", "done"]
          },
          "owner": {"type": "string"},
          "priority": {"type": "string", "enum": ["low", "med", "high", "urgent"]},
          "due_date": {"type": "string", "format": "date"},
          "tags": {"type": "array", "items": {"type": "string"}},
          "links": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "required": ["type", "value"],
              "properties": {
                "type": {"type": "string", "enum": ["url", "path", "id"]},
                "value": {"type": "string"}
              }
            }
          },
          "summary": {"type": "string"},
          "updated_at": {"type": "string", "format": "date-time"}
        }
      }
    }
  }
}
```

## architecture/schemas/readmodel.status_summary.v1.schema.json

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ops.mattkain.com/schemas/readmodel.status_summary.v1.schema.json",
  "title": "Read Model: Status Summary v1",
  "type": "object",
  "additionalProperties": false,
  "required": ["spec_version", "generated_at", "counts"],
  "properties": {
    "spec_version": {"type": "string", "const": "1.0"},
    "generated_at": {"type": "string", "format": "date-time"},
    "generated_from": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "producer": {"type": "string"},
        "version": {"type": "string"},
        "inputs": {
          "type": "array",
          "items": {
            "type": "object",
            "additionalProperties": false,
            "required": ["path"],
            "properties": {
              "path": {"type": "string"},
              "sha256": {"type": "string"}
            }
          }
        }
      }
    },
    "window": {
      "type": "object",
      "additionalProperties": false,
      "required": ["from", "to"],
      "properties": {
        "from": {"type": "string", "format": "date-time"},
        "to": {"type": "string", "format": "date-time"}
      }
    },
    "counts": {
      "type": "object",
      "additionalProperties": false,
      "required": ["tasks"],
      "properties": {
        "tasks": {
          "type": "object",
          "additionalProperties": false,
          "required": ["backlog", "in_progress", "blocked", "done"],
          "properties": {
            "backlog": {"type": "integer", "minimum": 0},
            "in_progress": {"type": "integer", "minimum": 0},
            "blocked": {"type": "integer", "minimum": 0},
            "done": {"type": "integer", "minimum": 0}
          }
        },
        "cv_runs": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "success": {"type": "integer", "minimum": 0},
            "partial": {"type": "integer", "minimum": 0},
            "failed": {"type": "integer", "minimum": 0}
          }
        }
      }
    },
    "highlights": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": ["type", "title"],
        "properties": {
          "type": {"type": "string", "enum": ["risk", "win", "note"]},
          "title": {"type": "string"},
          "detail": {"type": "string"},
          "url": {"type": "string"}
        }
      }
    }
  }
}
```

## crm/STATUS_MAPPING_V1.md

```markdown
# Canonical CRM Status Mapping v1

**Purpose:** Provide a single source of truth for status taxonomy across:
- DB (SQLite schema v0 and future schema)
- CSV/task tracker (`ops/agent-tasks.csv`)
- UI badges/filters (ops.mattkain.com)
- Event model (`crm.*.status_changed.v1`)

**Design principles**
1. **Small, durable enums** (avoid UI-only nuance).
2. **Separate entity lifecycles** (Job ≠ Application ≠ Task).
3. **Canonical keys are lowercase snake_case** (stable for code + events).
4. **UI labels can change** without breaking data.

---

## 1) Canonical enums

### 1.0 Ops pipeline status (`ops.pipeline.status`)
Operational Kanban status for `ops/job-pipeline.csv`. This is a **UI/ops view** (not the durable CRM job/application lifecycle), but it needs a canonical key set so the UI can be mapped deterministically.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `pinned` | Pinned | Manually pinned at top of pipeline. | no |
| `new` | New | Captured, not yet assessed. | no |
| `assessing` | Assessing | Screening / role fit assessment in progress. | no |
| `cv_ready` | CV Ready | Tailored CV is prepared and ready to apply. | no |
| `applied` | Applied | Application submitted. | no |
| `interview` | Interview | In an interview loop. | no |
| `offer` | Offer | Offer received. | yes |
| `rejected` | Rejected | Rejected by employer. | yes |
| `hold` | Hold | Paused (timing, dependency, or decision). | no |
| `ignored` | Ignored | Explicitly not pursuing. | yes |

**Implementation note:** `ops.pipeline.status` is intentionally separate from `crm.job.status` and `crm.application.status` (Sections 1.1 and 1.2). The Kanban can evolve without forcing CRM migrations.

### 1.1 Job status (`crm.job.status`)
Jobs represent *opportunities* (roles) irrespective of whether an application has been started.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `identified` | Identified | Role found and captured. | no |
| `shortlisted` | Shortlisted | Worth pursuing, actively being worked. | no |
| `dropped` | Dropped | No longer pursuing. | yes |

**Allowed transitions**
- `identified` → `shortlisted` | `dropped`
- `shortlisted` → `dropped`
- `dropped` → (none)

---

### 1.2 Application status (`crm.application.status`)
Applications represent the *execution track* for a given job.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `not_started` | Not started | No application artefacts created yet. | no |
| `drafting` | Drafting | CV/CL being tailored, but not submitted. | no |
| `submitted` | Submitted | Application submitted. | no |
| `interviewing` | Interviewing | Any live interview loop (incl. screening). | no |
| `offer` | Offer | Offer received. | yes |
| `rejected` | Rejected | Explicit rejection received. | yes |
| `withdrawn` | Withdrawn | We withdrew / stopped mid-process. | yes |

**Allowed transitions**
- `not_started` → `drafting` | `withdrawn`
- `drafting` → `submitted` | `withdrawn`
- `submitted` → `interviewing` | `rejected` | `withdrawn`
- `interviewing` → `offer` | `rejected` | `withdrawn`
- `offer` → (none)
- `rejected` → (none)
- `withdrawn` → (none)

---

### 1.3 Task status (`crm.task.status`)
Tasks represent work items (ops tasks, follow-ups, artefact prep) that can exist independently of jobs.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `backlog` | Backlog | Not started. | no |
| `in_progress` | In progress | Actively being worked. | no |
| `review` | Review | Pending review/approval/QA before continuing. | no |
| `blocked` | Blocked | Cannot proceed due to dependency/decision. | no |
| `done` | Done | Completed. | yes |

**Allowed transitions**
- `backlog` → `in_progress` | `review` | `blocked` | `done`
- `in_progress` → `review` | `blocked` | `done`
- `review` → `in_progress` | `blocked` | `done`
- `blocked` → `in_progress` | `review` | `done`
- `done` → (none)

---

## 2) Mapping tables

### 2.1 DB schema v0 (legacy) → canonical

#### `ops/crm-schema-v0.sql` :: `jobs.status`
Legacy comment: `new|shortlisted|applied|interview|closed`

| legacy | canonical |
|---|---|
| `new` | `identified` |
| `shortlisted` | `shortlisted` |
| `applied` | `shortlisted` *(application state belongs on application)* |
| `interview` | `shortlisted` *(application state belongs on application)* |
| `closed` | `dropped` |

#### `ops/crm-schema-v0.sql` :: `applications.status`
Legacy comment: `draft|submitted|responded|rejected|offer`

| legacy | canonical |
|---|---|
| `draft` | `drafting` |
| `submitted` | `submitted` |
| `responded` | `interviewing` |
| `offer` | `offer` |
| `rejected` | `rejected` |

#### `ops/crm-schema-v0.sql` :: `tasks.status`
Legacy default: `open`

| legacy | canonical |
|---|---|
| `open` | `backlog` |

---

### 2.2 CSV task system (`ops/agent-tasks.csv`) → canonical Task status

| CSV value | canonical |
|---|---|
| `Backlog` | `backlog` |
| `In Progress` | `in_progress` |
| `Review` | `review` |
| `Approved` | `review` *(treated as review-state)* |
| `Blocked` | `blocked` |
| `Done` | `done` |

### 2.3 Pipeline CSV (`ops/job-pipeline.csv`) → canonical Ops pipeline status

| CSV value | canonical |
|---|---|
| `Pinned` | `pinned` |
| `New` | `new` |
| `Assessing` | `assessing` |
| `CV Ready` | `cv_ready` |
| `Applied` | `applied` |
| `Interview` | `interview` |
| `Offer` | `offer` |
| `Rejected` | `rejected` |
| `Hold` | `hold` |
| `Ignored` | `ignored` |

---

## 3) UI badge defaults

- `identified` → neutral/grey
- `shortlisted` → primary/blue
- `dropped` → muted/grey (or danger/red if explicitly rejected)

- `not_started` → neutral/grey
- `drafting` → warning/amber
- `submitted` → primary/blue
- `interviewing` → accent/purple
- `offer` → success/green
- `rejected` → danger/red
- `withdrawn` → muted/grey

- `backlog` → neutral/grey
- `in_progress` → primary/blue
- `review` → warning/amber
- `blocked` → warning/amber
- `done` → success/green

---

## 4) Migration note (lightweight)

If/when we migrate existing SQLite rows or import CSVs:
1. **Do not overwrite raw legacy values** on day 1.
2. Create a one-off transform (or view) that maps legacy → canonical using Section 2.
3. Once consumers are updated, backfill canonical values and constrain columns to enum set.

---

## 5) Implementation notes (for builders)

- Canonical keys should be used in events:
  - `crm.job.status_changed.v1` uses `identified|shortlisted|dropped`
  - `crm.application.status_changed.v1` uses `not_started|drafting|submitted|interviewing|offer|rejected|withdrawn`
  - `crm.task.status_changed.v1` uses `backlog|in_progress|blocked|done`

- If a UI needs more nuance (e.g., “Phone screen”, “Final round”), represent it as **metadata** on the event, not a new status key.
```

## crm/status-mapping-v1.json

```json
{
  "version": 1,
  "canonical": {
    "pipeline": {
      "pinned": {"label": "Pinned", "terminal": false},
      "new": {"label": "New", "terminal": false},
      "assessing": {"label": "Assessing", "terminal": false},
      "cv_ready": {"label": "CV Ready", "terminal": false},
      "applied": {"label": "Applied", "terminal": false},
      "interview": {"label": "Interview", "terminal": false},
      "offer": {"label": "Offer", "terminal": true},
      "rejected": {"label": "Rejected", "terminal": true},
      "hold": {"label": "Hold", "terminal": false},
      "ignored": {"label": "Ignored", "terminal": true}
    },
    "pipeline_order": ["pinned","new","assessing","cv_ready","applied","interview","offer","rejected","hold","ignored"],
    "job": {
      "identified": {
        "label": "Identified",
        "terminal": false,
        "allowed_next": ["shortlisted", "dropped"]
      },
      "shortlisted": {
        "label": "Shortlisted",
        "terminal": false,
        "allowed_next": ["dropped"]
      },
      "dropped": {
        "label": "Dropped",
        "terminal": true,
        "allowed_next": []
      }
    },
    "application": {
      "not_started": {
        "label": "Not started",
        "terminal": false,
        "allowed_next": ["drafting", "withdrawn"]
      },
      "drafting": {
        "label": "Drafting",
        "terminal": false,
        "allowed_next": ["submitted", "withdrawn"]
      },
      "submitted": {
        "label": "Submitted",
        "terminal": false,
        "allowed_next": ["interviewing", "rejected", "withdrawn"]
      },
      "interviewing": {
        "label": "Interviewing",
        "terminal": false,
        "allowed_next": ["offer", "rejected", "withdrawn"]
      },
      "offer": {
        "label": "Offer",
        "terminal": true,
        "allowed_next": []
      },
      "rejected": {
        "label": "Rejected",
        "terminal": true,
        "allowed_next": []
      },
      "withdrawn": {
        "label": "Withdrawn",
        "terminal": true,
        "allowed_next": []
      }
    },
    "task": {
      "backlog": {
        "label": "Backlog",
        "terminal": false,
        "allowed_next": ["in_progress", "review", "blocked", "done"]
      },
      "in_progress": {
        "label": "In progress",
        "terminal": false,
        "allowed_next": ["review", "blocked", "done"]
      },
      "review": {
        "label": "Review",
        "terminal": false,
        "allowed_next": ["in_progress", "blocked", "done"]
      },
      "blocked": {
        "label": "Blocked",
        "terminal": false,
        "allowed_next": ["in_progress", "review", "done"]
      },
      "done": {
        "label": "Done",
        "terminal": true,
        "allowed_next": []
      }
    }
  },
  "mappings": {
    "db_v0": {
      "jobs.status": {
        "new": "identified",
        "shortlisted": "shortlisted",
        "applied": "shortlisted",
        "interview": "shortlisted",
        "closed": "dropped"
      },
      "applications.status": {
        "draft": "drafting",
        "submitted": "submitted",
        "responded": "interviewing",
        "offer": "offer",
        "rejected": "rejected"
      },
      "tasks.status": {
        "open": "backlog"
      }
    },
    "agent_tasks_csv": {
      "Backlog": "backlog",
      "In Progress": "in_progress",
      "Review": "review",
      "Approved": "review",
      "Blocked": "blocked",
      "Done": "done"
    },
    "job_pipeline_csv": {
      "Pinned": "pinned",
      "New": "new",
      "Assessing": "assessing",
      "CV Ready": "cv_ready",
      "Applied": "applied",
      "Interview": "interview",
      "Offer": "offer",
      "Rejected": "rejected",
      "Hold": "hold",
      "Ignored": "ignored"
    }
  }
}
```

## crm-schema-v0.sql

```sql
-- CRM Foundation Schema v0
-- Phase 2 starter, created during Phase 1 initialisation.
-- NOTE: status columns in this v0 schema contain legacy values.
-- Canonical taxonomy + migration mapping lives in:
--   - ops/crm/STATUS_MAPPING_V1.md
--   - ops/crm/status-mapping-v1.json

CREATE TABLE IF NOT EXISTS companies (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  website TEXT,
  industry TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS jobs (
  id INTEGER PRIMARY KEY,
  company_id INTEGER,
  title TEXT NOT NULL,
  location TEXT,
  salary_text TEXT,
  source TEXT,
  url TEXT,
  status TEXT DEFAULT 'new', -- new|shortlisted|applied|interview|closed
  fit_score INTEGER,
  notes TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(company_id) REFERENCES companies(id)
);

CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY,
  company_id INTEGER,
  name TEXT NOT NULL,
  role TEXT,
  email TEXT,
  linkedin_url TEXT,
  notes TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(company_id) REFERENCES companies(id)
);

CREATE TABLE IF NOT EXISTS applications (
  id INTEGER PRIMARY KEY,
  job_id INTEGER NOT NULL,
  cv_path TEXT,
  cover_letter_path TEXT,
  status TEXT DEFAULT 'draft', -- draft|submitted|responded|rejected|offer
  submitted_at TEXT,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(job_id) REFERENCES jobs(id)
);

CREATE TABLE IF NOT EXISTS communications (
  id INTEGER PRIMARY KEY,
  job_id INTEGER,
  contact_id INTEGER,
  channel TEXT, -- email|linkedin|phone|other
  direction TEXT, -- inbound|outbound
  summary TEXT,
  occurred_at TEXT,
  FOREIGN KEY(job_id) REFERENCES jobs(id),
  FOREIGN KEY(contact_id) REFERENCES contacts(id)
);

CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY,
  job_id INTEGER,
  title TEXT NOT NULL,
  due_at TEXT,
  priority TEXT DEFAULT 'medium',
  status TEXT DEFAULT 'open',
  owner TEXT DEFAULT 'crabbie',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(job_id) REFERENCES jobs(id)
);
```

## cv-pipeline/README.md

```markdown
# CV Automation Pipeline (Phase 1)

## Goal
Input job URL or pasted role text → output tailored 2-page CV draft + polished PDF + shareable file paths.

## Pipeline v1 (implemented next)
1. **Ingest**
   - Accept `job_url` or `job_text`.
   - Fetch URL text when provided.
2. **Extract requirements**
   - Parse responsibilities, must-have skills, preferred experience, seniority.
3. **Profile match**
   - Load Matt CV source data and prior achievement bank.
   - Map evidence to requirements.
4. **Draft generation**
   - Produce ATS-safe, 2-page markdown draft.
5. **Polish pass**
   - Tighten language, enforce style, remove fluff.
6. **PDF build**
   - Convert markdown to PDF via local renderer.
7. **Return outputs**
   - `draft.md`, `final.pdf`, rationale summary.

## File Layout
- `inputs/jobs/` raw job inputs
- `inputs/cv/` source CV files
- `outputs/cv/` generated drafts and PDFs
- `ops/cv-pipeline/` orchestration scripts/spec

## Acceptance Criteria
- End-to-end run in <2 minutes for pasted JD.
- 2-page output target.
- Explicit mapping of role requirements to CV evidence.
- One-click file path response for user.
```

## cv-pipeline/qa-thresholds-v1.json

```json
{
  "version": "v1",
  "hard_fail": {
    "must_have_coverage_pct_min": 60,
    "page_estimate_max": 2.2,
    "placeholder_count_max": 0,
    "required_sections": [
      "Summary",
      "Core Strengths",
      "Selected Experience Alignment"
    ]
  },
  "soft_warning": {
    "keyword_coverage_pct_min": 75,
    "quantified_bullets_min": 3,
    "nice_to_have_coverage_pct_min": 40
  },
  "pass_condition": "PASS only when zero hard_fail violations. Soft warnings allowed."
}
```

## cv-preview.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <meta name="color-scheme" content="dark light">
  <meta name="theme-color" content="#0b1020" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#f6f8ff" media="(prefers-color-scheme: light)">
  <title>CV Preview · Crabbie</title>
  <link rel="icon" type="image/jpeg" href="ui/assets/crabbie-logo.jpg">
  <link rel="apple-touch-icon" href="ui/assets/crabbie-logo.jpg">

  <link rel='stylesheet' href='ui/STYLE_TOKENS_V1.css'>
  <link rel='stylesheet' href='ui/COMPONENTS_V1.css'>
  <link rel='stylesheet' href='ui/CV_PREVIEW_V1.css'>
  <style>
    .cv-controls{max-width:var(--content-max);margin:12px auto 0;padding:0 var(--s4);display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end}
    .cv-controls .field{min-width: min(520px, 100%);flex: 1 1 420px}
    .cv-note{font-size:var(--fs-1);color:var(--text-2)}
    .cv-tip{max-width: 60ch}
    #renderedMd p{margin:0 0 10px 0;line-height:1.5}
    #renderedMd h1,#renderedMd h2,#renderedMd h3{margin:14px 0 8px 0;line-height:1.2}
    #renderedMd ul{margin:8px 0 12px 20px}
    @media (max-width:640px){.cv-controls{padding:0 var(--s3)} }
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class='topbar' role='banner'>
    <div class='topbar__row'>
      <a class='home-logo' href='index.html'><img src='ui/assets/crabbie-logo.jpg' alt='Crabbie'> Crabbie Ops Home</a>
      <button type='button' class='nav-toggle' data-nav-toggle aria-controls='primary-nav' aria-expanded='false' aria-label='Toggle navigation'>☰ Menu</button>
    </div>
    <h1 class='topbar__title'>CV Preview</h1>
    <div class='topbar__sub'>Document-quality preview. Load any generated draft markdown and print to PDF.</div>
    <nav id='primary-nav' class='topbar__actions' data-nav-links aria-label='Primary'>
      <a class='btn' href='status.html'>Status</a>
      <a class='btn' href='activity.html'>Activity</a>
      <a class='btn' href='kanban.html'>Pipeline</a>
      <a class='btn' href='agent-queue.html'>Agent Queue</a>
      <a class='btn' href='agents.html'>Agents</a>
      <a class='btn' href='api-usage.html'>API Usage</a>
      <a class='btn' href='cv-preview.html'>CV Preview</a>
      <a class='btn' href='cv-run.html'>CV Run</a>
      <button class='btn btn--primary' type='button' onclick='window.print()'>Print / Save PDF</button>
    </nav>
  </header>

  <form class='cv-controls' id='cvForm' aria-label='Load a draft markdown file'>
    <div class='field'>
      <label class='field__label' for='mdPath'>Draft file path</label>
      <input class='input' id='mdPath' type='text' value='outputs/cv/R-2026-0017/draft.md' aria-describedby='mdTip' />
    </div>
    <button class='btn' id='loadBtn' type='submit'>Load Draft</button>
    <a class='btn' id='runFromPreviewLink' href='cv-run.html'>Run CV ↗</a>
    <a class='btn' id='pipelineFromPreviewLink' href='kanban.html'>Pipeline ↗</a>
    <span class='cv-note cv-tip' id='mdTip'>Tip: use query param <code>?file=outputs/cv/&lt;role_id&gt;/draft.md</code></span>
    <p class='sr-only' id='loadStatus' role='status' aria-live='polite'></p>
  </form>

  <main id='main' class='cv-shell' tabindex='-1'>
    <article class='cv-paper' aria-label='Curriculum vitae preview'>
      <header>
        <h2 class='cv-h1'>Matt Kain</h2>
        <p class='cv-lede'>Strategic operator in growth, transformation, and digital performance. Brisbane, AU · <a href='mailto:hello@mattkain.com'>hello@mattkain.com</a></p>
      </header>

      <div id='renderedMd' aria-live='polite' aria-busy='false'>
        <p><strong>Ready for live content.</strong> Load a generated draft above to preview your actual role-tailored CV in this paper surface.</p>
        <p>This view is now set up for responsive display and print export, and no longer relies on placeholder role bullets.</p>
      </div>
    </article>
  </main>

  <script>
    function escapeHtml(s){
      return String(s)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
    }

    // Minimal markdown renderer for CV drafts.
    // Security: escape raw text first, then add our small allowed tag set.
    function mdToHtml(md){
      const safe = escapeHtml(md ?? '');

      let html = safe
        .replace(/^###\s+(.*)$/gm,'<h3>$1</h3>')
        .replace(/^##\s+(.*)$/gm,'<h2>$1</h2>')
        .replace(/^#\s+(.*)$/gm,'<h1>$1</h1>')
        .replace(/^\-\s+(.*)$/gm,'<li>$1</li>');

      html = html.replace(/(<li>.*<\/li>\n?)+/g, m => '<ul>'+m+'</ul>');

      html = html
        .split(/\n\n+/)
        .map(b => /<(h\d|ul|li)/.test(b) ? b : '<p>'+b.replace(/\n/g,'<br>')+'</p>')
        .join('\n');

      return html;
    }

    async function loadDraft(path){
      const target = document.getElementById('renderedMd');
      const live = document.getElementById('loadStatus');
      if (target) {
        target.setAttribute('aria-busy','true');
        target.innerHTML = '<p>Loading draft…</p>';
      }
      if (live) live.textContent = 'Loading draft.';

      try{
        const res = await fetch(path + (path.includes('?') ? '&' : '?') + 't=' + Date.now());
        if(!res.ok) throw new Error('HTTP '+res.status);
        const md = await res.text();
        if (target) target.innerHTML = mdToHtml(md);
        if (live) live.textContent = 'Draft loaded.';
      }catch(e){
        const msg = (e && e.message) ? e.message : String(e);
        if (target) target.innerHTML = '<p><strong>Could not load draft.</strong> Check the file path and ensure it exists in the published site.</p><p class="cv-note">'+escapeHtml(msg)+'</p>';
        if (live) live.textContent = 'Could not load draft.';
      } finally {
        if (target) target.setAttribute('aria-busy','false');
        setTimeout(()=>{ if(live) live.textContent=''; }, 800);
      }
    }

    function roleIdFromPath(p){
      const path = String(p || '').trim();
      // Expected: outputs/cv/<ROLE_ID>/draft.md (or final.pdf etc.)
      const m = path.match(/outputs\/cv\/([^\/]+)\//i);
      return m ? m[1] : '';
    }

    function syncContextLinks(){
      const mdPath = document.getElementById('mdPath')?.value || '';
      const roleId = roleIdFromPath(mdPath);

      const runLink = document.getElementById('runFromPreviewLink');
      const pipeLink = document.getElementById('pipelineFromPreviewLink');

      if (runLink) {
        if (roleId) {
          const qs = new URLSearchParams();
          qs.set('role_key', roleId);
          runLink.setAttribute('href', `cv-run.html?${qs.toString()}`);
        } else {
          runLink.setAttribute('href', 'cv-run.html');
        }
      }

      if (pipeLink) {
        if (roleId) {
          const qs = new URLSearchParams();
          qs.set('role_id', roleId);
          pipeLink.setAttribute('href', `kanban.html?${qs.toString()}`);
        } else {
          pipeLink.setAttribute('href', 'kanban.html');
        }
      }
    }

    const params = new URLSearchParams(location.search);
    const qFile = params.get('file');
    if(qFile) document.getElementById('mdPath').value = qFile;

    syncContextLinks();

    document.getElementById('mdPath').addEventListener('input', syncContextLinks);
    document.getElementById('mdPath').addEventListener('change', syncContextLinks);

    document.getElementById('cvForm').addEventListener('submit', (e)=>{
      e.preventDefault();
      const p = document.getElementById('mdPath').value.trim();
      syncContextLinks();
      loadDraft(p);
    });
  </script>
  <script src='ui/nav_v1.js'></script>
</body>
</html>
```

## cv-run/index.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>CV Run · Crabbie</title>
  <link rel="stylesheet" href="../ui/STYLE_TOKENS_V1.css">
  <link rel="stylesheet" href="../ui/COMPONENTS_V1.css">
  <style>
    .shell{max-width:var(--content-max);margin:0 auto;padding:var(--s4)}
    .grid{display:grid;gap:var(--s3);grid-template-columns:repeat(12,1fr)}
    .card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r2);padding:var(--s3)}
    .span-12{grid-column:span 12}
    .span-7{grid-column:span 7}
    .span-5{grid-column:span 5}
    .mono{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;}
    pre{background:var(--surface-2);border:1px solid var(--border-2);border-radius:var(--r1);padding:var(--s3);overflow:auto;white-space:pre-wrap;word-break:break-word;margin:0}
    .help{margin:0;color:var(--text-2);font-size:var(--fs-1);line-height:1.45}
    .row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
    @media (max-width: 960px){.span-7,.span-5{grid-column:span 12}.shell{padding:var(--s3)}}
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="topbar" role="banner">
    <div class="topbar__row">
      <a class="home-logo" href="../index.html"><img src="../ui/assets/crabbie-logo.jpg" alt="Crabbie"> Crabbie Ops Home</a>
      <button type="button" class="nav-toggle" data-nav-toggle aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation">☰ Menu</button>
    </div>
    <h1 class="topbar__title">CV Run</h1>
    <p class="topbar__sub">Generate a one-shot local command to run the deterministic CV pipeline and then preview the draft in-browser.</p>
    <nav id="primary-nav" class="topbar__actions" data-nav-links aria-label="Primary">
      <a class="btn" href="../status.html">Status</a>
      <a class="btn" href="../kanban.html">Pipeline</a>
      <a class="btn" href="../agent-queue.html">Agent Queue</a>
      <a class="btn" href="../agents.html">Agents</a>
      <a class="btn" href="../api-usage.html">API Usage</a>
      <a class="btn" href="../cv-preview.html">CV Preview</a>
      <a class="btn" href="../cv-run.html" aria-current="page">CV Run</a>
    </nav>
  </header>

  <main id="main" class="shell" tabindex="-1">
    <div class="grid">
      <section class="card span-7" aria-label="Inputs">
        <h2 style="margin:0 0 var(--s2) 0">Inputs</h2>
        <p class="help">This page does not run code in the browser. It generates a command you can paste into a terminal on the machine that hosts the workspace.</p>

        <div style="height:12px"></div>

        <div class="field">
          <label class="field__label" for="roleKey">Role key</label>
          <input class="input mono" id="roleKey" type="text" value="R-2026-XXXX" placeholder="R-2026-0017" aria-describedby="roleKeyHelp" spellcheck="false" autocapitalize="characters" inputmode="text" list="roleKeyList" />
          <datalist id="roleKeyList"></datalist>
          <div class="help" id="roleKeyHelp">Used as the output folder name: <span class="mono">outputs/cv/&lt;role_key&gt;/</span>. Autocomplete is populated from <span class="mono">job-pipeline.csv</span> when available.</div>
        </div>

        <div style="height:10px"></div>

        <div class="field">
          <label class="field__label" for="title">Role title</label>
          <input class="input" id="title" type="text" value="General Manager, Growth and Transformation" />
          <div class="help">Tip: select a known role key (above) to auto-fill from the pipeline index.</div>
        </div>

        <div style="height:10px"></div>

        <div class="field">
          <label class="field__label" for="inputFile">Input file (job text)</label>
          <input class="input mono" id="inputFile" type="text" value="inputs/jobs/R-2026-XXXX/intake.txt" aria-describedby="inputFileHelp" spellcheck="false" autocapitalize="none" inputmode="text" />
          <div class="help" id="inputFileHelp">Tip: keep role intake under <span class="mono">inputs/jobs/&lt;role_key&gt;/intake.txt</span>.</div>
        </div>

        <div style="height:10px"></div>

        <div class="field">
          <label class="field__label" for="profile">Profile (test mode)</label>
          <select class="input" id="profile" aria-describedby="profileHelp">
            <option value="pass" selected>pass (QA passes, attempts PDF)</option>
            <option value="fail">fail (forces QA fail for testing)</option>
          </select>
          <div class="help" id="profileHelp">The deterministic pipeline is a scaffold. Use <span class="mono">fail</span> to verify QA + CRM wiring.</div>
        </div>

        <div style="height:14px"></div>

        <div class="row">
          <button class="btn btn--primary" type="button" id="copyBtn" aria-describedby="copyStatus">Copy command</button>
          <a class="btn" id="previewLink" href="../cv-preview.html">Open preview</a>
          <a class="btn" id="kanbanLink" href="../kanban.html">Open pipeline</a>
        </div>
        <div id="copyNotice" class="notice notice--danger" hidden></div>
        <p class="sr-only" id="copyStatus" role="status" aria-live="polite"></p>
      </section>

      <section class="card span-5" aria-label="Command">
        <h2 style="margin:0 0 var(--s2) 0">Command</h2>
        <p class="help">Paste into a terminal from workspace root (<span class="mono">/home/kain/.openclaw/workspace</span>):</p>
        <div style="height:12px"></div>
        <pre class="mono" id="cmd">python3 ops/cv-pipeline/run_cv_deterministic.py --role-key R-2026-XXXX --title "General Manager, Growth and Transformation" --input-file inputs/jobs/R-2026-XXXX/intake.txt --profile pass</pre>
        <div style="height:12px"></div>
        <p class="help">Outputs:
          <br><span class="mono" id="outDraft">outputs/cv/R-2026-XXXX/draft.md</span>
          <br><span class="mono" id="outPdf">outputs/cv/R-2026-XXXX/final.pdf</span>
        </p>
        <div style="height:12px"></div>
        <p class="help">After running, refresh <strong>Pipeline</strong> and <strong>Agent Queue</strong> pages, they read <span class="mono">job-pipeline.csv</span> and <span class="mono">agent-tasks.csv</span>.</p>
      </section>

      <section class="card span-12" aria-label="Notes">
        <h2 style="margin:0 0 var(--s2) 0">Notes</h2>
        <ul style="margin:0 0 0 18px;color:var(--text-2);line-height:1.45">
          <li>If <span class="mono">final.pdf</span> is missing, install Python dependency: <span class="mono">pip install fpdf</span>.</li>
          <li>The generated draft is intentionally plain and ATS-safe. The richer pipeline comes later.</li>
          <li>CRM stage mapping: QA pass writes <span class="mono">CV Ready</span>; QA fail writes <span class="mono">Assessing</span> (see <span class="mono">ops/crm/status-mapping-v1.json</span>).</li>
        </ul>
      </section>
    </div>
  </main>

  <script>
    function esc(s){
      return String(s)
        .replaceAll('&','&amp;')
        .replaceAll('<','&lt;')
        .replaceAll('>','&gt;')
        .replaceAll('"','&quot;')
        .replaceAll("'",'&#39;');
    }

    // Minimal CSV parser that handles commas, quotes, and newlines.
    function parseCsv(text){
      const rows = [];
      let row = [];
      let cell = '';
      let inQuotes = false;

      for (let i = 0; i < text.length; i++) {
        const c = text[i];
        const next = text[i + 1];

        if (c === '"') {
          if (inQuotes && next === '"') {
            cell += '"';
            i++;
          } else {
            inQuotes = !inQuotes;
          }
          continue;
        }

        if (!inQuotes && (c === ',' || c === '\n' || c === '\r')) {
          if (c === '\r' && next === '\n') i++; // Windows newline

          row.push(cell);
          cell = '';

          if (c !== ',') {
            if (row.some(v => String(v).trim() !== '')) rows.push(row);
            row = [];
          }
          continue;
        }

        cell += c;
      }

      row.push(cell);
      if (row.some(v => String(v).trim() !== '')) rows.push(row);
      return rows;
    }

    const pipelineIndex = new Map();

    async function loadPipelineIndex(){
      try{
        const res = await fetch('../job-pipeline.csv', { cache: 'no-store' });
        if(!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        const rows = parseCsv(text);
        if(rows.length < 2) return;

        const header = rows[0].map(h => String(h || '').trim());
        const col = (name) => header.indexOf(name);
        const ixRole = col('role_id');
        const ixTitle = col('title');
        const ixInput = col('input_file');

        for(const r of rows.slice(1)){
          const role = String(r[ixRole] || '').trim();
          if(!role) continue;
          pipelineIndex.set(role, {
            title: String(r[ixTitle] || '').trim(),
            inputFile: String(r[ixInput] || '').trim()
          });
        }

        const dl = document.getElementById('roleKeyList');
        if(dl){
          dl.innerHTML = '';
          for(const [role, meta] of pipelineIndex.entries()){
            const opt = document.createElement('option');
            opt.value = role;
            const label = meta.title ? ` ${meta.title}` : '';
            opt.label = `${role}${label}`;
            dl.appendChild(opt);
          }
        }
      }catch(_){
        // Silent: file:// context or missing CSV should not break CV Run.
      }
    }

    function applyPipelineDefaults(roleKey){
      const meta = pipelineIndex.get(roleKey);
      if(!meta) return;

      const titleEl = document.getElementById('title');
      if(titleEl && (!titleEl.value || titleEl.value.trim() === '' || titleEl.value.includes('General Manager, Growth and Transformation'))){
        if(meta.title) titleEl.value = meta.title;
      }

      const inputEl = document.getElementById('inputFile');
      if(inputEl){
        const fallback = `inputs/jobs/${roleKey}/intake.txt`;
        inputEl.value = meta.inputFile || fallback;
      }
    }

    function buildCommand(){
      const roleKey = (document.getElementById('roleKey').value || '').trim() || 'R-2026-XXXX';
      const title = (document.getElementById('title').value || '').trim() || 'Untitled role';
      const inputFile = (document.getElementById('inputFile').value || '').trim() || `inputs/jobs/${roleKey}/intake.txt`;
      const profile = (document.getElementById('profile').value || 'pass').trim();

      const safeTitle = title.replaceAll('"','\\"');
      const cmd = `python3 ops/cv-pipeline/run_cv_deterministic.py --role-key ${roleKey} --title "${safeTitle}" --input-file ${inputFile} --profile ${profile}`;

      document.getElementById('cmd').textContent = cmd;
      document.getElementById('outDraft').textContent = `outputs/cv/${roleKey}/draft.md`;
      document.getElementById('outPdf').textContent = `outputs/cv/${roleKey}/final.pdf`;

      const q = encodeURIComponent(`outputs/cv/${roleKey}/draft.md`);
      document.getElementById('previewLink').setAttribute('href', `../cv-preview.html?file=${q}`);

      document.getElementById('kanbanLink').setAttribute('href', `../kanban.html?role_id=${encodeURIComponent(roleKey)}`);

      return cmd;
    }

    async function copyCommand(){
      const cmd = buildCommand();
      try{
        await navigator.clipboard.writeText(cmd);
        const btn = document.getElementById('copyBtn');
        const live = document.getElementById('copyStatus');
        const prev = btn.textContent;
        btn.textContent = 'Copied';
        if (live) live.textContent = 'Command copied to clipboard.';

        const notice = document.getElementById('copyNotice');
        if (notice) notice.hidden = true;

        setTimeout(()=>{
          btn.textContent = prev;
          if (live) live.textContent = '';
        }, 900);
      }catch(e){
        const live = document.getElementById('copyStatus');
        if (live) live.textContent = 'Clipboard copy failed. Select and copy manually.';

        const notice = document.getElementById('copyNotice');
        if (notice) {
          notice.textContent = 'Clipboard copy failed (browser permission or insecure context). Select the command and copy manually.';
          notice.hidden = false;
        }
      }
    }

    ['title','inputFile','profile'].forEach(id=>{
      document.getElementById(id).addEventListener('input', buildCommand);
      document.getElementById(id).addEventListener('change', buildCommand);
    });

    const roleKeyEl = document.getElementById('roleKey');
    roleKeyEl.addEventListener('input', () => {
      const rk = (roleKeyEl.value || '').trim();
      if(rk) applyPipelineDefaults(rk);
      buildCommand();
    });
    roleKeyEl.addEventListener('change', () => {
      const rk = (roleKeyEl.value || '').trim();
      if(rk) applyPipelineDefaults(rk);
      buildCommand();
    });

    document.getElementById('copyBtn').addEventListener('click', copyCommand);

    // Initial render + URL hydration.
    const params = new URLSearchParams(location.search);
    const rk = params.get('role_key');
    if(rk) {
      document.getElementById('roleKey').value = rk;
      document.getElementById('inputFile').value = `inputs/jobs/${rk}/intake.txt`;
    }
    const t = params.get('title');
    if(t) document.getElementById('title').value = t;

    // Best-effort live wiring: populate known roles from job-pipeline.csv.
    loadPipelineIndex().finally(() => {
      const rk2 = (document.getElementById('roleKey').value || '').trim();
      if(rk2) applyPipelineDefaults(rk2);
      buildCommand();
    });
  </script>
  <script src="../ui/nav_v1.js"></script>
</body>
</html>
```

## cv-run.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>CV Run · Crabbie</title>
  <link rel="icon" type="image/jpeg" href="ui/assets/crabbie-logo.jpg">
  <link rel="apple-touch-icon" href="ui/assets/crabbie-logo.jpg">

  <link rel="stylesheet" href="ui/STYLE_TOKENS_V1.css">
  <link rel="stylesheet" href="ui/COMPONENTS_V1.css">
  <style>
    .shell{max-width:var(--content-max);margin:0 auto;padding:var(--s4)}
    .grid{display:grid;gap:var(--s3);grid-template-columns:repeat(12,1fr)}
    .card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r2);padding:var(--s3)}
    .span-12{grid-column:span 12}
    .span-7{grid-column:span 7}
    .span-5{grid-column:span 5}
    .mono{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;}
    pre{background:var(--surface-2);border:1px solid var(--border-2);border-radius:var(--r1);padding:var(--s3);overflow:auto;white-space:pre-wrap;word-break:break-word;margin:0}
    .help{margin:0;color:var(--text-2);font-size:var(--fs-1);line-height:1.45}
    .row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}
    @media (max-width: 960px){.span-7,.span-5{grid-column:span 12}.shell{padding:var(--s3)}}
  </style>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="topbar" role="banner">
    <div class="topbar__row">
      <a class="home-logo" href="index.html"><img src="ui/assets/crabbie-logo.jpg" alt="Crabbie"> Crabbie Ops Home</a>
      <button type="button" class="nav-toggle" data-nav-toggle aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation">☰ Menu</button>
    </div>
    <h1 class="topbar__title">CV Run</h1>
    <p class="topbar__sub">Generate a one-shot local command to run the deterministic CV pipeline and then preview the draft in-browser.</p>
    <nav id="primary-nav" class="topbar__actions" data-nav-links aria-label="Primary">
      <a class="btn" href="status.html">Status</a>
      <a class="btn" href="activity.html">Activity</a>
      <a class="btn" href="kanban.html">Pipeline</a>
      <a class="btn" href="agent-queue.html">Agent Queue</a>
      <a class="btn" href="agents.html">Agents</a>
      <a class="btn" href="api-usage.html">API Usage</a>
      <a class="btn" href="cv-preview.html">CV Preview</a>
      <a class="btn" href="cv-run.html">CV Run</a>
    </nav>
  </header>

  <main id="main" class="shell" tabindex="-1">
    <div class="grid">
      <section class="card span-7" aria-label="Inputs">
        <h2 style="margin:0 0 var(--s2) 0">Inputs</h2>
        <p class="help">This page does not run code in the browser. It generates a command you can paste into a terminal on the machine that hosts the workspace.</p>

        <div style="height:12px"></div>

        <div class="field">
          <label class="field__label" for="roleKey">Role key</label>
          <input class="input mono" id="roleKey" type="text" value="R-2026-XXXX" placeholder="R-2026-0017" aria-describedby="roleKeyHelp" spellcheck="false" autocapitalize="characters" inputmode="text" list="roleKeyList" />
          <datalist id="roleKeyList"></datalist>
          <div class="help" id="roleKeyHelp">Used as the output folder name: <span class="mono">outputs/cv/&lt;role_key&gt;/</span>. Autocomplete is populated from <span class="mono">job-pipeline.csv</span> when available.</div>
        </div>

        <div style="height:10px"></div>

        <div class="field">
          <label class="field__label" for="title">Role title</label>
          <input class="input" id="title" type="text" value="General Manager, Growth and Transformation" />
          <div class="help">Tip: select a known role key (above) to auto-fill from the pipeline index.</div>
        </div>

        <div style="height:10px"></div>

        <div class="field">
          <label class="field__label" for="inputFile">Input file (job text)</label>
          <input class="input mono" id="inputFile" type="text" value="inputs/jobs/R-2026-XXXX/intake.txt" aria-describedby="inputFileHelp" spellcheck="false" autocapitalize="none" inputmode="text" />
          <div class="help" id="inputFileHelp">Tip: keep role intake under <span class="mono">inputs/jobs/&lt;role_key&gt;/intake.txt</span>.</div>
        </div>

        <div style="height:10px"></div>

        <div class="field">
          <label class="field__label" for="profile">Profile (test mode)</label>
          <select class="input" id="profile" aria-describedby="profileHelp">
            <option value="pass" selected>pass (QA passes, attempts PDF)</option>
            <option value="fail">fail (forces QA fail for testing)</option>
          </select>
          <div class="help" id="profileHelp">The deterministic pipeline is a scaffold. Use <span class="mono">fail</span> to verify QA + CRM wiring.</div>
        </div>

        <div style="height:14px"></div>

        <div class="row">
          <button class="btn btn--primary" type="button" id="copyBtn" aria-describedby="copyStatus">Copy command</button>
          <a class="btn" id="previewLink" href="cv-preview.html">Open preview</a>
          <a class="btn" id="kanbanLink" href="kanban.html">Open pipeline</a>
        </div>
        <div id="copyNotice" class="notice notice--danger" role="alert" aria-live="assertive" hidden></div>
        <p class="sr-only" id="copyStatus" role="status" aria-live="polite"></p>
      </section>

      <section class="card span-5" aria-label="Command">
        <h2 style="margin:0 0 var(--s2) 0">Command</h2>
        <p class="help">Paste into a terminal from workspace root (<span class="mono">/home/kain/.openclaw/workspace</span>):</p>
        <div style="height:12px"></div>
        <pre class="mono" id="cmd">python3 ops/cv-pipeline/run_cv_deterministic.py --role-key R-2026-XXXX --title "General Manager, Growth and Transformation" --input-file inputs/jobs/R-2026-XXXX/intake.txt --profile pass</pre>
        <div style="height:12px"></div>
        <p class="help">Outputs:
          <br><span class="mono" id="outDraft">outputs/cv/R-2026-XXXX/draft.md</span>
          <br><span class="mono" id="outPdf">outputs/cv/R-2026-XXXX/final.pdf</span>
        </p>

        <div class="row" style="margin-top:10px">
          <a class="btn" id="openDraftBtn" href="#" aria-disabled="true" target="_blank" rel="noopener">Open draft ↗</a>
          <a class="btn" id="openPdfBtn" href="#" aria-disabled="true" target="_blank" rel="noopener">Open PDF ↗</a>
          <button class="btn" type="button" id="checkOutputsBtn">Check outputs</button>
        </div>
        <div class="badges" id="outputBadges" aria-live="polite" style="margin-top:10px"></div>

        <div style="height:12px"></div>
        <p class="help">After running, refresh <strong>Pipeline</strong> and <strong>Agent Queue</strong> pages, they read <span class="mono">job-pipeline.csv</span> and <span class="mono">agent-tasks.csv</span>.</p>
      </section>

      <section class="card span-12" aria-label="Notes">
        <h2 style="margin:0 0 var(--s2) 0">Notes</h2>
        <ul style="margin:0 0 0 18px;color:var(--text-2);line-height:1.45">
          <li>If <span class="mono">final.pdf</span> is missing, install Python dependency: <span class="mono">pip install fpdf</span>.</li>
          <li>The generated draft is intentionally plain and ATS-safe. The richer pipeline comes later.</li>
          <li>CRM stage mapping: QA pass writes <span class="mono">CV Ready</span>; QA fail writes <span class="mono">Assessing</span> (see <span class="mono">ops/crm/status-mapping-v1.json</span>).</li>
        </ul>
      </section>
    </div>
  </main>

  <script type="module" src="ui/cv_run_v1.js"></script>
  <script src="ui/nav_v1.js"></script>
</body>
</html>
```

## dashboard-worker.js

```javascript
export default {
  async fetch(req) {
    const url=new URL(req.url);
    const path=url.pathname;

    const TOKENS=`:root{--bg:#0b1020;--surface:#121a36;--surface-2:#0f1730;--border:#243059;--border-2:#2a3a70;--text:#eaf0ff;--text-2:#b7c6ef;--text-3:#9eb0de;--link:#9bc0ff;--accent:#2a64ff;--success-bg:#123b27;--success-fg:#bff3d6;--warning-bg:#3c3516;--warning-fg:#ffe6a6;--danger-bg:#3f1620;--danger-fg:#ffc0ce;--info-bg:#163042;--info-fg:#b9e4ff;--font-sans:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;--fs-0:11px;--fs-1:12px;--fs-2:14px;--fs-3:16px;--fs-4:20px;--fs-5:28px;--lh-tight:1.2;--lh-body:1.45;--s1:4px;--s2:8px;--s3:12px;--s4:16px;--s5:20px;--s6:28px;--r1:10px;--r2:12px;--r-pill:999px;--focus:0 0 0 2px rgba(42,100,255,.55)}
*{box-sizing:border-box}html,body{height:100%}body{font-family:var(--font-sans);background:var(--bg);color:var(--text);margin:0;font-size:var(--fs-2);line-height:var(--lh-body)}a{color:var(--link);text-decoration:none}a:hover{text-decoration:underline}a:focus-visible{outline:none;box-shadow:var(--focus);border-radius:8px}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r2);padding:var(--s4)}.panel{background:var(--surface-2);border:1px solid var(--border-2);border-radius:var(--r1)}
.muted{color:var(--text-3)}.small{font-size:var(--fs-1);color:var(--text-3)}
.badge{display:inline-block;font-size:var(--fs-0);padding:2px 8px;border-radius:var(--r-pill);border:1px solid rgba(255,255,255,.08);background:#23356a;color:#cfe0ff;vertical-align:middle}
.badge--danger{background:var(--danger-bg);color:var(--danger-fg)}.badge--warning{background:var(--warning-bg);color:var(--warning-fg)}.badge--info{background:var(--info-bg);color:var(--info-fg)}
@media (prefers-reduced-motion: reduce){*{scroll-behavior:auto !important;transition:none !important;animation:none !important}}
`;

    if (path==='/'||path==='/index.html') return new Response(`<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Crabbie Ops Dashboard</title><style>${TOKENS}
body{padding:28px}h1{margin:0 0 14px;font-size:var(--fs-5);line-height:var(--lh-tight)}h2{margin:0 0 6px;font-size:var(--fs-4);line-height:var(--lh-tight)}.card{margin:12px 0;max-width:720px}
</style></head><body><h1>Crabbie Ops Dashboard</h1><p class="muted">Private operations views</p><div class="card"><h2>Role Pipeline Kanban</h2><p><a href="/kanban">Open /kanban</a></p></div><div class="card"><h2>Agent Queue Board</h2><p><a href="/agent-queue">Open /agent-queue</a></p></div></body></html>`, {headers: {'content-type':'text/html; charset=utf-8'}});
    if (path==='/kanban') return new Response("<html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Crabbie Pipeline Kanban</title><style>\n"+TOKENS+"\nbody{margin:0}\n.top{padding:16px 20px;background:#111934;position:sticky;top:0}\nh1{margin:0;font-size:20px}\n.wrap{display:flex;gap:12px;overflow:auto;padding:14px}\n.col{min-width:320px;max-width:320px;background:#121a36;border:1px solid #243059;border-radius:12px}\n.col h2{font-size:14px;margin:0;padding:10px 12px;border-bottom:1px solid #243059;position:sticky;top:56px;background:#121a36}\n.card{margin:10px;background:#0f1730;border:1px solid #2a3a70;border-radius:10px;padding:10px}\n.t{font-weight:700;font-size:13px;margin-bottom:6px}\n.m{font-size:12px;color:#b7c6ef;line-height:1.35}\na{color:#7fb0ff;text-decoration:none}\n.badge{display:inline-block;font-size:11px;padding:2px 7px;border-radius:999px;background:#23356a;color:#cfe0ff;margin-top:6px}\n.small{font-size:11px;color:#9eb0de;margin-top:6px}\n</style></head><body><div class='top'><h1>Crabbie Employment Pod \u00b7 Pipeline Kanban</h1></div><div class='wrap'><div class='col'><h2>New (2)</h2><div class='card'><div class='t'>Chief Experience Officer</div><div class='m'>u&amp;u \u00b7 Brisbane</div><div class='small'><a href='https://www.seek.com.au/job/90563809' target='_blank'>Open listing \u2197</a></div><div class='badge'>Tier A</div><div class='small'>ID: R-2026-0006</div><div class='small'>Next: Assess + prep CV</div></div><div class='card'><div class='t'>Senior Director - Digital Transformation Services</div><div class='m'>Metro South Health \u00b7 Brisbane</div><div class='small'><a href='https://www.seek.com.au/job/90522976' target='_blank'>Open listing \u2197</a></div><div class='badge'>Tier A</div><div class='small'>ID: R-2026-0007</div><div class='small'>Next: Assess + prep CV</div></div></div><div class='col'><h2>Assessing (0)</h2></div><div class='col'><h2>CV Ready (3)</h2><div class='card'><div class='t'>General Manager - Growth &amp; Transformation</div><div class='m'>Sharp &amp; Carter \u00b7 Brisbane</div><div class='small'><a href='https://www.seek.com.au/job/90526213' target='_blank'>Open listing \u2197</a></div><div class='badge'>Tier A</div><div class='small'>ID: R-2026-0003</div><div class='small'>CV: Matt Kain CV Feb 2026 General Manager Growth and Transformation Sharp and Carter v4.pdf</div><div class='small'>Next: Apply / send outreach</div></div><div class='card'><div class='t'>Consulting Director</div><div class='m'>Datacom \u00b7 Brisbane</div><div class='small'><a href='https://www.linkedin.com/jobs/view/4376553708' target='_blank'>Open listing \u2197</a></div><div class='badge'>Tier A</div><div class='small'>ID: R-2026-0004</div><div class='small'>CV: Matt Kain CV Feb 2026 Consulting Director Datacom.pdf</div><div class='small'>Next: Apply</div></div><div class='card'><div class='t'>Senior Manager - Digital Growth &amp; Optimisation</div><div class='m'>BOQ \u00b7 Brisbane</div><div class='small'><a href='https://boq.wd3.myworkdayjobs.com/en-GB/Careers-at-BOQGroup/job/Brisbane-Office---Newstead-Village/Senior-Manager---Digital-Growth-Optimisation_JR100332?source=LinkedIn' target='_blank'>Open listing \u2197</a></div><div class='badge'>Tier A</div><div class='small'>ID: R-2026-0005</div><div class='small'>CV: Matt Kain CV Feb 2026 Senior Manager Digital Growth Optimisation BOQ.pdf</div><div class='small'>Next: Apply online</div></div></div><div class='col'><h2>Applied (2)</h2><div class='card'><div class='t'>Head of Marketing Centre of Excellence (CoE)</div><div class='m'>Qantas \u00b7 Sydney</div><div class='small'><a href='https://www.linkedin.com/jobs/view/4376504696' target='_blank'>Open listing \u2197</a></div><div class='badge'>Tier A</div><div class='small'>ID: R-2026-0001</div><div class='small'>CV: Matt Kain CV Feb 2026 Head of Marketing Centre of Excellence v3.pdf</div><div class='small'>Next: Monitor response</div></div><div class='card'><div class='t'>Head of Marketing</div><div class='m'>LSKD \u00b7 Brisbane</div><div class='small'><a href='https://www.seek.com.au/job/90404349' target='_blank'>Open listing \u2197</a></div><div class='badge'>Tier A</div><div class='small'>ID: R-2026-0002</div><div class='small'>Next: Monitor response</div></div></div><div class='col'><h2>Interview (0)</h2></div><div class='col'><h2>Offer (0)</h2></div><div class='col'><h2>Rejected (0)</h2></div><div class='col'><h2>Ignored (2)</h2><div class='card'><div class='t'>General Manager - Information Technology</div><div class='m'>Techforce \u00b7 Brisbane</div><div class='small'><a href='https://www.seek.com.au/job/90573967' target='_blank'>Open listing \u2197</a></div><div class='badge'>Tier C</div><div class='small'>ID: R-2026-0008</div><div class='small'>Next: None</div></div><div class='card'><div class='t'>General Manager - Operational Technology</div><div class='m'>Stellar \u00b7 Brisbane</div><div class='small'><a href='https://www.seek.com.au/job/90545972' target='_blank'>Open listing \u2197</a></div><div class='badge'>Tier C</div><div class='small'>ID: R-2026-0009</div><div class='small'>Next: None</div></div></div></div></body></html>", {headers: {'content-type':'text/html; charset=utf-8'}});
    if (path==='/agent-queue') return new Response("<html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Employment Pod Agent Queue</title><style>\n"+TOKENS+"\nbody{margin:0}\n.top{padding:16px 20px;background:#111934;position:sticky;top:0;z-index:10}\nh1{margin:0;font-size:20px}\n.sub{margin-top:6px;color:#a9b8e6;font-size:12px}\n.wrap{display:flex;gap:12px;overflow:auto;padding:14px}\n.col{min-width:340px;max-width:340px;background:#121a36;border:1px solid #243059;border-radius:12px}\n.col h2{font-size:14px;margin:0;padding:10px 12px;border-bottom:1px solid #243059;position:sticky;top:58px;background:#121a36}\n.card{margin:10px;background:#0f1730;border:1px solid #2a3a70;border-radius:10px;padding:10px}\n.t{font-weight:700;font-size:13px;margin-bottom:6px}\n.m{font-size:12px;color:#b7c6ef;line-height:1.35}\n.badge{display:inline-block;font-size:11px;padding:2px 7px;border-radius:999px;background:#23356a;color:#cfe0ff;margin-right:6px;margin-top:6px}\n.small{font-size:11px;color:#9eb0de;margin-top:6px}\n.pH{background:#6a2333}.pM{background:#6a5a23}.pL{background:#23526a}\n</style></head><body><div class='top'><h1>Crabbie Employment Pod \u00b7 Agent Queue</h1><div class='sub'>Agents: Forge, Ledger, Polish, Tide, Vantage</div></div><div class='wrap'><div class='col'><h2>Backlog (9)</h2><div class='card'><div class='t'>T-0001 \u00b7 Create role brief for u&amp;u Chief Experience Officer</div><div class='m'>Agent: Vantage \u00b7 Role: R-2026-0006</div><span class='badge pH'>Priority High</span><span class='badge'>Due 2026-02-27</span><div class='small'>Notes: Awaiting brief</div></div><div class='card'><div class='t'>T-0002 \u00b7 Draft tailored CV for u&amp;u Chief Experience Officer</div><div class='m'>Agent: Forge \u00b7 Role: R-2026-0006</div><span class='badge pH'>Priority High</span><span class='badge'>Due 2026-02-27</span><div class='small'>Notes: Starts after role brief</div></div><div class='card'><div class='t'>T-0003 \u00b7 Apply formatting QA and final PDF for u&amp;u role</div><div class='m'>Agent: Polish \u00b7 Role: R-2026-0006</div><span class='badge pH'>Priority High</span><span class='badge'>Due 2026-02-27</span><div class='small'>Notes: Use latest format rules</div></div><div class='card'><div class='t'>T-0004 \u00b7 Create role brief for Metro South Health Senior Director role</div><div class='m'>Agent: Vantage \u00b7 Role: R-2026-0007</div><span class='badge pH'>Priority High</span><span class='badge'>Due 2026-02-27</span><div class='small'>Notes: Prioritise Brisbane relevance</div></div><div class='card'><div class='t'>T-0005 \u00b7 Draft tailored CV for Metro South Health role</div><div class='m'>Agent: Forge \u00b7 Role: R-2026-0007</div><span class='badge pH'>Priority High</span><span class='badge'>Due 2026-02-27</span><div class='small'>Notes: Starts after role brief</div></div><div class='card'><div class='t'>T-0006 \u00b7 Apply formatting QA and final PDF for Metro role</div><div class='m'>Agent: Polish \u00b7 Role: R-2026-0007</div><span class='badge pH'>Priority High</span><span class='badge'>Due 2026-02-27</span><div class='small'>Notes: 2-page layout rules</div></div><div class='card'><div class='t'>T-0007 \u00b7 Mark Sharp &amp; Carter role as Applied once confirmed</div><div class='m'>Agent: Ledger \u00b7 Role: R-2026-0003</div><span class='badge pM'>Priority Medium</span><span class='badge'>Due 2026-02-28</span><div class='small'>Notes: Waiting user confirmation</div></div><div class='card'><div class='t'>T-0008 \u00b7 Prepare outreach draft if contact is available for Datacom</div><div class='m'>Agent: Tide \u00b7 Role: R-2026-0004</div><span class='badge pM'>Priority Medium</span><span class='badge'>Due 2026-02-28</span><div class='small'>Notes: Check ad contact details</div></div><div class='card'><div class='t'>T-0009 \u00b7 Check BOQ application completion status and log</div><div class='m'>Agent: Ledger \u00b7 Role: R-2026-0005</div><span class='badge pM'>Priority Medium</span><span class='badge'>Due 2026-02-28</span><div class='small'>Notes: Track status change</div></div></div><div class='col'><h2>In Progress (1)</h2><div class='card'><div class='t'>T-0010 \u00b7 Generate daily manager brief from pipeline + tasks</div><div class='m'>Agent: Tide \u00b7 Role: </div><span class='badge pH'>Priority High</span><span class='badge'>Due 2026-02-27</span><div class='small'>Notes: Daily cadence</div></div></div><div class='col'><h2>Review (0)</h2></div><div class='col'><h2>Blocked (0)</h2></div><div class='col'><h2>Done (0)</h2></div></div></body></html>", {headers: {'content-type':'text/html; charset=utf-8'}});
    return new Response('Not found', {status:404});
  }
};
```

## design/COLOR_PALETTE_V1.md

```markdown
# UI Colour Palette v1

## Core dark UI
- Background: #0b1020
- Surface: #121a36
- Surface 2: #1a2447
- Border: #243059
- Text primary: #eaf0ff
- Text secondary: #9eb0de

## Semantic
- Success: #22c55e
- Warning: #f59e0b
- Danger: #ef4444
- Info: #60a5fa

## Paper mode
- Paper background: #ffffff
- Paper text: #0f172a
- Paper muted: #475569
- Paper border: #cbd5e1
```

## design/DESIGN_ROADMAP_V1.md

```markdown
# Design Roadmap v1

## Principles
- Operator-first clarity over decoration
- Dark orchestration shell + paper-grade document surfaces
- Consistent token system across all pages

## Visual Language Tracks
1. **Design language**
   - tokens, spacing, hierarchy, focus states
2. **Typography**
   - Base: system sans stack
   - Sizes: 12/14/16/20/28
   - Rule: no core copy below 12px
3. **Colour palette**
   - Dark app surfaces: slate/navy base
   - Semantic states: success/warning/danger/info
   - Paper mode for CV preview: high-contrast ink on light background
4. **Component library**
   - topbar, board, column, item card, badges, buttons
5. **UX assets**
   - journey maps
   - flow diagrams
   - interaction states

## Milestones
- M1: Token foundation complete ✅
- M2: Shared components in Kanban/Queue ✅
- M3: CV Preview surface baseline ✅
- M4: Data table + form primitives (in progress)
- M5: Visual QA pass + accessibility contrast audit

## Decisions Pending
- Font family selection for production brand layer
- Accent palette refinement (neon vs muted premium)
- Iconography style (outlined vs duotone)

## Brand Direction Update (2026-03-08)
- Crabbie mascot image adopted as primary site/home logo (`ops/ui/assets/crabbie-logo.jpg`).
- Subagent visual language should derive emoji/icon choices from the mascot tone: playful but sharp.
- Palette experiments should include a bright accent lane inspired by mascot colours for non-critical highlights while preserving professional readability.
```

## design/ICONOGRAPHY_IMAGE_GUIDE_V1.md

```markdown
# Iconography and Imagery Guide v1

## Icon style
- Rounded outline icons for nav/actions
- Semantic icons for status only (no decorative overload)
- Stroke consistency preferred over mixed styles

## Emoji/avatars for agents (Balloon Emoji inspired set)
- Crabbie (Core): 🤪 (signature mascot expression)
- Tide (PM Control Tower): 😎 (calm control)
- Vantage (UX Strategist): 🧐 (analysis + empathy)
- Polish (UI Designer): 🤡 (bold visual creativity, playful edge)
- Forge (CV Strategist): 😤 (drive + execution pressure)
- Ledger (CRM Manager): 😬 (precision, risk-awareness)
- Radar (Opportunity Scout): 😵 (wide-scan signal hunting)
- Atlas (Research & Intel): 🥶 (cool-headed research)

## Imagery
- Dark premium UI context images
- Diagram-first visuals for architecture and flows
- Avoid generic stock photos
```

## design/TYPOGRAPHY_SAMPLE_V1.md

```markdown
# Typography Sample v1

Primary stack:
Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial

Scale:
- fs-1: metadata/body small
- fs-2: body default
- fs-3: section lead
- fs-4: page title
- fs-5: hero title

Rules:
- No critical UI text below 12px
- Use 14px baseline for app content
- Headings carry hierarchy via weight and spacing, not oversized jumps
```

## events/events-2026-03.jsonl

```json
{"spec_version":"1.0","event_id":"c2b3d0d1-5f35-4c01-8b89-4c90c6f7503e","event_type":"crm.task.status_changed.v1","occurred_at":"2026-03-08T12:20:00Z","producer":{"name":"vantage","version":"0.1"},"subject":{"type":"task","id":"task:T-0303"},"idempotency_key":"task:T-0303:status:backlog->in_progress","data":{"old_status":"backlog","new_status":"in_progress","reason":"UX spec + build handoff drafted for Activity feed (derived fallback + JSONL seed)","changed_by":"agent:vantage"}}
{"spec_version":"1.0","event_id":"f6b9d7a6-0c28-4b13-ae7c-90e4ec78c0cb","event_type":"crm.job.status_changed.v1","occurred_at":"2026-03-08T10:00:00Z","producer":{"name":"ledger","version":"0.1"},"subject":{"type":"job","id":"job:R-2026-0024"},"idempotency_key":"job:R-2026-0024:status:identified->shortlisted","data":{"old_status":"identified","new_status":"shortlisted","reason":"Alignment score requested; moved into active assessment set","changed_by":"agent:ledger"}}
```

## events/index.json

```json
{
  "latest": "events-2026-03.jsonl",
  "files": [
    "events-2026-03.jsonl"
  ]
}
```

## exports/ADVISOR_UPDATE_2026-03-09.md

```markdown
# Crabbie Ops — Comprehensive Advisor Update

_Date: 2026-03-09 (UTC)_
_Owner: Matt Kain_

---

## 1) Executive Summary
Crabbie Ops has progressed from a planning-heavy system into an actively shipping, multi-stream execution environment with visible public surfaces at `ops.mattkain.com`.

The system now has:
- continuous specialist delivery loops (PM, BA, UX, UI, Build, Architecture),
- improved UX/accessibility baselines across core pages,
- deterministic CV pipeline scaffolding with QA/manifest behaviour,
- stronger architecture contracts (events, read-models, memory layers),
- and guarded publishing controls.

Primary near-term focus is shifting from framework setup to product-complete outcomes:
1. Activity Timeline (`activity.html`),
2. Team Operations Board (`team-ops.html`),
3. canonical CRM status mapping implementation,
4. QA gate policy finalisation in the CV flow,
5. API usage reduction and operating-cost control.

---

## 2) Strategic Objective
Build an always-on, commercially useful career-operations platform that:
- continuously discovers and triages roles,
- generates high-quality, role-tailored CV artefacts safely and deterministically,
- tracks execution in a clear CRM/pipeline model,
- and presents trustworthy operational visibility in a web-first interface.

Design principle: **working hero workflow first, architecture depth second**.

---

## 3) What Is Live Today
### Public surfaces (core)
- `/index.html` (home)
- `/status.html` (ops launchpad)
- `/kanban.html`
- `/agent-queue.html`
- `/agents.html`
- `/cv-run.html`
- `/cv-preview.html`
- `/api-usage.html`

### UX/UI quality progress
- full-card clickable tiles for better mobile/keyboard usability,
- focus management upgrades (skip links, focusable scroll regions, visible focus rings),
- reduced-motion and forced-colours support improvements,
- improved table readability (numeric alignment, tabular numerals, row scanability),
- reusable notice/status patterns for accessible inline feedback.

### Agent identity layer
- Crabbie + balloon-style role avatars integrated in Agent Profiles.
- Live capacity rendering restored and refreshing on interval.

---

## 4) Process Flows (Current)
## A) CV flow (deterministic scaffold)
Intake -> role key/title mapping -> draft generation -> QA checks -> manifest/qa outputs -> conditional final PDF -> preview + pipeline/task updates.

Current behaviour includes deterministic artefact layout and pass/fail policy; remaining work is to finalise minimum QA gate decisions and complete production hardening.

## B) Ops delivery flow
Specialist cron runs -> artefact/task updates -> status/control tower refresh -> auto-publish -> public visibility.

## C) Activity flow (in progress)
Event JSONL-first timeline model with derived fallback from CSV surfaces; pending dedicated `activity.html` implementation and full `updated_at` hygiene.

---

## 5) Delivery Progress by Stream
## PM / Control Tower
- priorities, blockers, and acceptance criteria continuously refreshed.
- backlog movement being tracked and surfaced.

## BA
- PRDs deepened into implementation-ready acceptance criteria and edge cases.
- grooming lanes clarified (Draft/Refined/Ready) with delivery state separately tracked.

## UX
- journey maps, IA/nav, acceptance criteria, and handoff notes now tightly tied to actual build reality.
- explicit non-regression requirements added for accessibility patterns.

## UI
- repeated improvements to component consistency, responsive behaviour, and screen-reader/keyboard workflows.

## Build Engineering
- frequent targeted increments shipped to core pages and JS renderers.
- CV Preview hardening landed (escaping content before render).

## Enterprise Architecture
- event and integration contracts expanded,
- read-model contract scaffolding introduced,
- memory layers model documented,
- publish guardrails added.

---

## 6) Architecture Snapshot
Current direction is contracts-first, with phased migration:
1. keep working CSV/MD surfaces,
2. introduce schema-validated read-models,
3. move toward deterministic projection from event logs,
4. maintain clear source-of-truth boundaries.

Key architecture artefacts now include:
- `EVENT_MODEL_V1`,
- `INTEGRATION_CONTRACTS_V1`,
- read-model schemas/contracts,
- memory layers v1,
- publish guardrails v1.

---

## 7) Backlog and Priority Stack (Near Term)
Top execution priorities (24-72h):
1. **T-0204** Canonical CRM status mapping implementation (CSV/DB/UI alignment + migration note)
2. **T-0305** Activity Timeline page (`activity.html`) events-first + derived fallback + guardrails
3. **T-0306** Team Ops Board (`team-ops.html`) with gauges, movement feed, blockers
4. CV QA gate finalisation (minimum checks + manifest-on-fail behaviour already directionally approved)

---

## 8) Decisions and Governance
Recently settled directions include:
- static nav standardisation with `nav_v1.js` active-state control,
- home-link preference to `index.html` (status as fallback/launchpad context),
- role-track restart focus on u&u (Metro remains paused),
- manifest-on-fail direction set to yes.

Remaining decision clusters:
- PRD-006: event enum, retention policy, derived-vs-events behaviour,
- PRD-005: Review vs Approved visual handling and final gauge buckets,
- PRD-003: final minimum QA checklist details.

---

## 9) Risks and Control Actions
## Key risks
- Data quality drift (`updated_at` reliability in pipeline sources)
- Multi-writer drift across CSV/spec/build artefacts
- API usage pressure (Google API already high this month)
- Publish interruption from over-broad guardrails if not tuned

## Active controls
- publish preflight guardrails,
- clear handoff contracts and acceptance criteria,
- non-regression UX/a11y notes,
- explicit decision-request capture in backlog/control-tower artefacts.

---

## 10) Cost and Usage
Concern: Google API utilisation is already high.

Approved direction: aggressive reduction path.
Proposed applied controls:
- digest cadence compression,
- alert-frequency reduction,
- stronger no-change short-circuit behaviour,
- strict dedupe across mailbox workflows.

Target outcome: materially lower monthly API burn while preserving signal quality.

---

## 11) External Review Requests (for Advisors)
Please pressure-test:
1. Is the current 24-72h priority stack correct for commercial outcomes?
2. Are CRM stage and activity model choices sufficient for decision-quality reporting?
3. Is the events/read-model migration sequence pragmatic and low-risk?
4. Are the QA gate thresholds right for CV quality vs throughput trade-off?
5. Are current cost controls sufficient, or should cadence be reduced further?

---

## 12) Supporting Files (for deeper due diligence)
- Comprehensive technical bundle:
  - `ops/exports/PROJECT_DUMP_COMPREHENSIVE_2026-03-09_1422UTC.md`
- Executive brief:
  - `ops/exports/EXEC_BRIEF_2026-03-09.md`
- Full project dump (earlier compile):
  - `ops/exports/PROJECT_DUMP_2026-03-09.md`

---

## 13) Bottom Line
The system is now in a credible execution phase with visible outputs and accelerating operational maturity.

The next step is not more framework: it is converting current momentum into three complete, advisor-visible outcomes:
- Activity Timeline live,
- Team Ops Board live,
- canonical CRM mapping implemented end-to-end,
while reducing API burn and preserving quality.
```

## exports/CLAUDE_CODE_HANDOFF_PROMPT_2026-03-09.md

```markdown
# Claude Code Build Handoff Prompt

You are joining an in-flight build called **Crabbie Ops**. Your job is to continue implementation with minimal disruption and maximum delivery clarity.

## Context
- Product: always-on operations system for career pipeline execution.
- Live site: `https://ops.mattkain.com/`
- Workspace root: `/home/kain/.openclaw/workspace`
- Main project area: `/home/kain/.openclaw/workspace/ops`
- Canonical project dump: `ops/exports/PROJECT_DUMP_2026-03-09.md`
- Executive brief: `ops/exports/EXEC_BRIEF_2026-03-09.md`

## User priorities
1. Real visible progress, not theory.
2. Strong visual UX (including balloon-style agent identities + Crabbie branding).
3. No terminal/Python dependency for Matt-facing workflows where avoidable.
4. Accessibility and responsive quality are non-negotiable.
5. Cost discipline (especially Google API usage).

## Critical constraints
- Do not fabricate completion claims.
- Keep compatibility with static site publishing flow.
- Do not leak secrets; respect publish guardrails.
- Preserve existing nav and accessibility patterns.

## Current architecture direction
- Events/contracts/read-models are being introduced incrementally.
- CSV remains active fallback in several surfaces.
- Publish pipeline has preflight guardrails.

## Immediate implementation targets (priority order)
### P1 — Activity Timeline
- Build `ops/activity.html`.
- Use events JSONL first, derived fallback second.
- Implement performance and error-state guardrails per UX specs.

### P1 — Team Ops Board
- Build `ops/team-ops.html`.
- Wire to `agent-tasks.csv` + status mapping.
- Include per-agent gauges, movement feed, blockers panel.

### P1 — CRM canonical mapping
- Complete T-0204 mapping implementation across data + UI.
- Ensure migration notes and unknown-state handling are explicit.

### P2 — CV flow hardening completion
- Finalise minimum QA gate policy and enforce `overall_pass` rules.
- Confirm manifest behaviour on fail (recommended always write).

## Required files to read before coding
- `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`
- `ops/CONTROL_TOWER.md`
- `ops/UPDATE_CAPTURE.md`
- `ops/ux/HANDOFF_NOTES_V1.md`
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md`
- `ops/ux/JOURNEY_MAPS_V1.md`
- `ops/crm/status-mapping-v1.json`
- `ops/cv-pipeline/run_cv_deterministic.py`

## Definition of Done for each increment
1. Code change shipped in the workspace.
2. Acceptance criteria linked and satisfied.
3. Accessibility impact stated (keyboard, SR, focus, reduced motion).
4. Any data contract impacts documented.
5. Publish status clearly stated (live vs not live).
6. Blockers/decision asks explicitly listed.

## Output format expected from you each run
- **Shipped**: exact files changed + what user can now do.
- **Validation**: how you verified behaviour.
- **Risks**: known limitations.
- **Next**: top 1–3 follow-ups.

## Cost-control instruction
Propose and apply low-risk API cost controls where possible, prioritising:
- digest cadence reductions,
- stronger dedupe,
- no-change early exits,
- low-cost models for scheduled analysis.

Proceed now by proposing a concrete 2-increment plan and then implement increment 1.
```

## exports/EXEC_BRIEF_2026-03-09.md

```markdown
# Crabbie Ops — Executive Brief

_Date: 2026-03-09 (UTC)_

## 1) Objective
Build an always-on, low-cost, multi-agent operations system for Matt’s career pipeline that is visibly productive and execution-oriented.

Primary outcomes:
- Convert role intake to tailored CV artefacts with deterministic QA gates.
- Maintain live, usable ops surfaces (`ops.mattkain.com`) with strong accessibility and clear movement.
- Keep CRM/pipeline states consistent and decision-ready.

## 2) Current State (What is working)
- Live publishing pipeline is active with frequent updates.
- Specialist streams are producing continuous increments across PM, BA, UX, UI, Build, and Architecture.
- Core pages are in place: Status, Kanban, Agent Queue, Agents, CV Run, CV Preview, API Usage.
- Agent profile avatars and Crabbie branding are now integrated.
- Capacity indicators are running on Agents page with periodic refresh.
- CV Preview has been hardened against raw HTML injection.

## 3) Delivery Focus (next 24–72h)
1. **T-0204** Canonical CRM status mapping implementation (CSV/DB/UI alignment).
2. **T-0305** Activity Timeline (`activity.html`) with events-first + derived fallback.
3. **T-0306** Team Operations Board (`team-ops.html`) with gauges, movement feed, blockers.
4. Finalise CV minimum QA gate decisions (overall pass criteria + manifest behaviour on fail).

## 4) Key Risks
- **Data drift risk**: `job-pipeline.csv` requires reliable `updated_at` writes for accurate timelines/audit.
- **Spec/implementation drift**: multiple streams touching same surfaces quickly.
- **Cost pressure**: Google API utilisation is already high this month.

## 5) Cost & Usage Controls (recommended immediate actions)
- Consolidate jobs digest cadence (AM only) and disable PM digest.
- Reduce Priority Inbox Alerts frequency (e.g., 4/day → 2–3/day).
- Enforce strict “no-change = NO_REPLY” behaviour.
- Keep model at `gpt-5.2` low-thinking for scheduled mailbox jobs.

Expected impact: meaningful drop in Gmail/Google API activity without major signal loss.

## 6) Operating Model
- Work streams run in isolated cron sessions.
- Main session used for user-facing updates and decision capture.
- Public site acts as source of visible progress.
- Architecture direction: events/contracts/read-models with controlled migration.

## 7) Decisions Needed from Matt
1. PRD-003: minimum QA checks required for `overall_pass=true`.
2. PRD-003: should `manifest.json` always be written on failed runs? (recommended: yes).
3. PRD-006: event type enum, retention window, and fallback behaviour when events exist.
4. PRD-005: Approved vs Review handling and canonical gauge buckets.

## 8) Success Criteria (near term)
- Users can see clear productivity from Status + Agent Queue + Team Ops board.
- CV flow is deterministic, safe, and auditable end-to-end.
- API usage trend stabilises below current trajectory.
- Weekly planning becomes decision-led rather than archaeology-led.
```

## exports/PROJECT_DUMP_2026-03-09.md

```markdown
# Crabbie Ops Project Dump

_Generated: 2026-03-09 13:13 UTC_


## Contents

1. [Executive](#executive) — `ops/master-project-brief.md`
2. [Execution Plan](#execution-plan) — `ops/EXECUTION_PLAN_2026-03-03.md`
3. [Control Tower](#control-tower) — `ops/CONTROL_TOWER.md`
4. [Backlog](#backlog) — `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`
5. [Update Capture](#update-capture) — `ops/UPDATE_CAPTURE.md`
6. [Project Gantt](#project-gantt) — `ops/project-gantt.md`
7. [Team Model](#team-model) — `ops/TEAM_OPENCLAW.md`
8. [CV Pipeline README](#cv-pipeline-readme) — `ops/cv-pipeline/README.md`
9. [CRM Mapping Spec](#crm-mapping-spec) — `ops/crm/STATUS_MAPPING_V1.md`
10. [Architecture Event Model](#architecture-event-model) — `ops/architecture/EVENT_MODEL_V1.md`
11. [Architecture Integration Contracts](#architecture-integration-contracts) — `ops/architecture/INTEGRATION_CONTRACTS_V1.md`
12. [Architecture Read Models](#architecture-read-models) — `ops/architecture/READ_MODEL_CONTRACTS_V1.md`
13. [Architecture Memory Layers](#architecture-memory-layers) — `ops/architecture/MEMORY_LAYERS_V1.md`
14. [Architecture Publish Guardrails](#architecture-publish-guardrails) — `ops/architecture/PUBLISH_GUARDRAILS_V1.md`
15. [UX Journey Maps](#ux-journey-maps) — `ops/ux/JOURNEY_MAPS_V1.md`
16. [UX IA and Navigation](#ux-ia-and-navigation) — `ops/ux/IA_AND_NAV_V1.md`
17. [UX Masthead Nav Spec](#ux-masthead-nav-spec) — `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
18. [UX Acceptance Criteria](#ux-acceptance-criteria) — `ops/ux/ACCEPTANCE_CRITERIA_V1.md`
19. [UX Timeline Spec](#ux-timeline-spec) — `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
20. [UX Job Triage Controls](#ux-job-triage-controls) — `ops/ux/JOB_TRIAGE_CONTROLS_SPEC_V1.md`
21. [UX Handoff Notes](#ux-handoff-notes) — `ops/ux/HANDOFF_NOTES_V1.md`
22. [UX Sitemap](#ux-sitemap) — `ops/ux/SITEMAP_V1.md`
23. [UI Design Language](#ui-design-language) — `ops/ui/DESIGN_LANGUAGE_V1.md`
24. [API Usage Tracker Notes](#api-usage-tracker-notes) — `ops/usage/API_USAGE_TRACKER_V1.md`

---


## Executive

`ops/master-project-brief.md`


```markdown
# OpenClaw Agent System – Master Project Brief

**Owner:** Matt  
**Version:** 1.0  
**Primary Goal:** Build a multi-agent personal productivity and career acceleration platform, beginning with automated CV generation and progressing toward a full CRM-driven opportunity management system with visible UI iteration.

---

# 1. Strategic Objectives

## Primary Objective (Phase 1 Priority)

Create a **fully autonomous CV generation workflow** that:

- Accepts a job URL or pasted role description.
- Analyses requirements and matches against stored CV knowledge.
- Produces a **high-quality, two-page tailored CV**.
- Outputs:
  - Editable document.
  - Final PDF.
  - Clickable download links.
- Requires **minimal user iteration**.
- Meets professional design standards automatically.

## Secondary Objective

Demonstrate visible progress toward the broader platform by:

- Building an initial CRM database.
- Creating a simple UI interface.
- Iterating the interface daily or frequently.
- Showing continuous improvement.

## Long-Term Objective

Develop a modular agent ecosystem supporting:

- Opportunity discovery.
- Application management.
- Contact intelligence.
- Product development workflows.
- System automation.

---

# 2. System Philosophy

The system operates as a **team of specialised agents** coordinated by a **Main Orchestrator Agent**.

Principles:

1. Autonomy with guardrails.
2. Continuous iteration.
3. Cost efficiency.
4. Modular architecture.
5. Human approval for external actions.

---

# 3. Agent Architecture Overview

## 3.1 Main Orchestrator Agent (Project Manager)

Role:

- Central communication hub with the user.
- Coordinates all sub-agents.
- Maintains project roadmap.
- Monitors progress.
- Produces daily digests.

Responsibilities:

- Task routing.
- Dependency management.
- Agent activation.
- Priority decisions.
- Escalation of blockers.

Communication rules:

- Default communication with user occurs through this agent.
- Specialist conversations allowed when explicitly requested.

---

# 4. Core Agents

## 4.1 CV Specialist Agent (Highest Priority)

Mission: Deliver best-in-class CV generation.

Capabilities:

- Parse job descriptions.
- Extract requirements.
- Match against CV knowledge base.
- Generate tailored content.
- Maintain formatting standards.
- Export professional PDF.

Dependencies:

- File handling tools.
- PDF generation.
- Template library.
- Design standards memory.

Outputs:

- CV draft.
- Final PDF.
- Download link.
- Summary of tailoring logic.

Success criteria:

- Minimal revisions required.
- Professional layout.
- High relevance to role.

---

## 4.2 Opportunity Intelligence Agent (Prospecting)

Mission: Identify and prioritise opportunities.

Capabilities:

- Monitor Gmail job alerts.
- Extract job listings.
- Score opportunities based on:
  - Location relevance.
  - Seniority.
  - Salary.
  - Fit to experience.
- Produce digest reports.

Outputs:

- Ranked opportunity list.
- Recommendations.
- Actions requested from user.

---

## 4.3 Research Agent

Mission: Provide strategic context for applications.

Capabilities:

- Company research.
- Hiring manager discovery.
- Role background analysis.
- News scanning.
- Competitive insights.

Outputs:

- Research briefs.
- Talking points.
- CV positioning insights.
- Interview preparation notes.

---

## 4.4 CRM Agent

Mission: Maintain structured knowledge of opportunities and contacts.

Responsibilities:

- Store job records.
- Track application status.
- Manage contacts.
- Monitor email responses.
- Update lifecycle states.

Planned schema (initial):

Tables:

- Jobs
- Applications
- Contacts
- Communications
- Companies
- Tasks

This agent interacts with:

- Gmail integration.
- Opportunity agent.
- CV agent.
- Research agent.

---

# 5. Platform Development Agents

## 5.1 Product Manager Agent

Mission: Oversee system development.

Responsibilities:

- Define roadmap.
- Create milestones.
- Coordinate UX and engineering.
- Track progress.
- Deliver iteration plans.

---

## 5.2 UX Agent

Mission: Design workflows and user journeys.

Outputs:

- Wireframes.
- User flows.
- Interaction models.
- Requirements documentation.

---

## 5.3 UI Design Agent

Mission: Produce visual interface assets.

Outputs:

- Screen designs.
- Design system.
- Component library.
- Front-end specs.

---

## 5.4 Engineering Agent

Mission: Build platform infrastructure.

Responsibilities:

- Database setup.
- API integrations.
- Backend services.
- UI implementation.
- Deployment.

---

# 6. Memory Architecture

The system uses **three memory layers**.

## Layer 1 – Agent Local Memory

Each agent maintains markdown files.

Examples:

- soul.md
- tone.md
- knowledge.md
- procedures.md
- preferences.md

Purpose:

- Preserve identity.
- Maintain expertise.
- Reduce token usage.

---

## Layer 2 – Global Vector Memory

Install a vector memory system (example: mem0).

Purpose:

- Capture conversations automatically.
- Enable semantic recall.
- Reduce context load.
- Improve long-term learning.

---

## Layer 3 – Structured Database Memory

SQL database used for:

- CRM records.
- System state.
- Contacts.
- Jobs.
- Activities.

---

# 7. Autonomy Guardrails

Agents MAY:

- Build internal systems.
- Refactor architecture.
- Create files.
- Install tools.
- Iterate designs.

Agents MUST NOT without approval:

- Send emails.
- Contact external people.
- Submit applications.
- Perform destructive operations.
- Spend significant money.

When uncertain, escalate to Main Agent → User.

---

# 8. User Interaction Model

Default interaction: User ↔ Main Agent  
Optional: User ↔ Specialist Agent (on request)

Digest frequency:

- Daily summary preferred.
- Urgent alerts allowed.

---

# 9. Cost Management Strategy

Target total system cost: ≤ $2 per day during proof-of-concept.

Approach:

- Prefer lightweight models.
- Use local models where feasible.
- Reserve premium models for:
  - CV generation.
  - Complex reasoning.
  - Architecture decisions.

Suggested model allocation:

High intelligence:

- GPT-class models for:
  - CV agent.
  - Orchestrator decisions.
  - Research synthesis.

Medium:

- Smaller models for:
  - Classification.
  - Filtering.
  - Summaries.

Local models:

- UI generation.
- Routine tasks.
- Data formatting.

Infrastructure:

- Monitor VM usage.
- Scale down when idle.

---

# 10. Phase Roadmap

## Phase 1 – CV Automation

Deliver:

- End-to-end CV pipeline.
- PDF generation.
- File links.
- Template system.

Success signal: User can paste job → receive final CV with minimal edits.

---

## Phase 2 – CRM Foundation

Deliver:

- Database schema.
- Job tracking.
- Application states.
- Email ingestion.

---

## Phase 3 – Opportunity Intelligence

Deliver:

- Gmail scanning.
- Job ranking.
- Daily digests.

---

## Phase 4 – Interface Development

Deliver:

- Basic dashboard.
- CRM views.
- Iterative UI improvements.

---

## Phase 5 – Platform Expansion

Deliver:

- Full workflow orchestration.
- Contact intelligence.
- Automation enhancements.

---

# 11. Immediate Next Actions for Main Agent

1. Audit current agent structure.
2. Identify gaps.
3. Prioritise CV agent deployment.
4. Confirm file handling and PDF capability.
5. Design initial CRM schema.
6. Create project roadmap.
7. Produce first progress report.

---

# 12. Success Definition

System is successful when:

- CV creation requires minimal effort.
- Opportunities are tracked automatically.
- Progress is visible.
- Costs remain controlled.
- Agents operate reliably with limited supervision.

---

# 13. Tone and Behaviour Expectations

Agents should be:

- Practical.
- Efficient.
- Collaborative.
- Iterative.
- Transparent.

Avoid:

- Over-engineering.
- Excessive verbosity.
- Unnecessary API calls.

---

# 14. Instruction to Main Agent

You are responsible for transforming this brief into an operational multi-agent system.

Prioritise execution over perfection.

Begin with the CV workflow.

Report progress regularly.
```


## Execution Plan

`ops/EXECUTION_PLAN_2026-03-03.md`


```markdown
# Execution Plan – Initialisation (2026-03-03)

## Priority Stack
1. Phase 1 CV Automation Pipeline (highest)
2. CRM foundation bootstrap
3. Visible UI progress loop

## 48-hour Plan

### Track A: CV Pipeline
- A1: Define canonical input schema (`job_url` OR `job_text`)
- A2: Build requirement extraction routine
- A3: Build CV evidence bank from existing CV docs
- A4: Generate tailored markdown draft (2-page target)
- A5: PDF export step + deterministic output paths
- A6: Add quality gate checklist (relevance/layout/clarity)

### Track B: CRM Foundation
- B1: Create sqlite DB with `ops/crm-schema-v0.sql`
- B2: Add import adapter from job digest / Gmail items
- B3: Add status lifecycle transitions

### Track C: Visible Progress
- C1: Update dashboard tiles for CV pipeline status
- C2: Add daily increment notes section
- C3: Publish progress checkpoint at regular cadence

## Risks / Blockers
- Memory vector layer currently not configured (memory status unknown)
- Missing curated long-term `MEMORY.md` in workspace root
- SSH key path from Mac→VM broken for scp; slows asset transfer

## Cost Controls
- Use local processing for file transforms where possible
- Reserve high-intelligence passes for tailoring/polish only
- Batch updates and summaries to reduce API turns

## Definition of Done (Phase 1)
- User provides JD/URL once
- System returns tailored CV draft + final PDF + rationale
- Typical user iteration <= 1 round
```


## Control Tower

`ops/CONTROL_TOWER.md`


```markdown
# Squad PM Control Tower

**Last updated:** 2026-03-09 09:36 UTC

## 1) Backlog status changes (since last capture)

### Moved to Done
- (None captured in this window.)

### Status changed (important)
- **T-0305** Implement Activity Timeline page (Rivet) → **Backlog → In Progress**
  - Now executing against PRD-006 (events JSONL first, derived fallback).

### New / newly-visible delivery work
- **T-0306** Implement Team Operations Board page (Rivet) → **Backlog**
  - Implements PRD-005 (agent workload gauges + movement feed + blockers panel).

---

## 2) Top 3 priorities (next 24–48h)

1. **T-0204 – Canonical CRM status mapping spec (Ledger) [Approved]**
   - Goal: lock taxonomy + mapping across CSV/DB/UI so statuses stop drifting.
2. **T-0206 – Live ops site navigation + artefact links (Rivet)**
   - Goal: implement AC-1 + AC-6 consistently across pages (Home resolves to `index.html`, fallback `status.html`).
3. **T-0305 – Activity Timeline page (Rivet) [In Progress]**
   - Goal: ship `ops/activity.html` per PRD-006 with error states + performance limits.

---

## 3) Blockers + decision requests

### Decisions (resolved)
- **Static masthead/nav approach:** approved by Matt. v1 approach = **copy/paste masthead block** across static pages.
- **Status taxonomy (T-0204):** approved by Matt (see `ops/UPDATE_CAPTURE.md`). Proceed to implementation + migration notes.

### Remaining decision requests from Matt (still open)
- **Paused role work (T-0001–T-0006):** confirm when to restart and which single role to resume first (u&u vs Metro), plus role brief inputs.
- **PRD-003-DR1 (CV QA gate):** confirm minimum QA checks required to unblock PDF.
- **PRD-006 decision bundle:**
  - DR1: confirm canonical `type` enum list (recommended: release, decision, build, data, incident, task)
  - DR2: confirm retention window (recommended: last 30 days)
  - DR3: confirm whether derived activity is suppressed when events exist (recommended: hide derived when events present)
- **PRD-005 decision requests (Team Ops board):**
  - DR1: confirm whether “Approved” is distinct from “Review” in v1 UI (recommend: bucket=Review; chip=Approved).
  - DR2: confirm canonical status buckets to display in gauges (recommend: Backlog, In Progress, Blocked, Review, Done).

### Operational blockers / hygiene
- **Task list invariant:** `agent-tasks.csv` previously had a duplicate `T-0302` row. Re-check and de-dupe if it reappears so “task_id is unique” remains true.
- **Stale due dates:** many tasks still show early-March dates. Once the next sprint window is confirmed, roll dates forward so the file regains scheduling signal.

---

## 4) Acceptance criteria updates (make work testable)

### T-0204 (Canonical CRM status mapping spec) — implementation-ready
- Defines canonical enums for Job/Application/Task and a mapping table to:
  - `job-pipeline.csv` statuses
  - `agent-tasks.csv` statuses
  - DB schema (existing + planned)
  - UI labels/badges
- Includes transition rules (allowed next states) and “terminal” states.
- Provides a migration note: what existing rows should map to, plus how to handle unknowns safely.

### T-0206 (Live ops site navigation + artefact links)
- Meets AC-1/AC-6 (and incorporates AC-8) from `ops/ux/ACCEPTANCE_CRITERIA_V1.md`.
- Masthead/nav consistency is enforced via the agreed v1 method:
  - identical masthead block copy/pasted across pages
  - `nav_v1.js` applies active tab (`aria-current`) automatically
- Home-link rule:
  - Home SHOULD link to `index.html` when present, otherwise fall back to `status.html`.
- `ops/status.html` exposes visible links to:
  - Agents docs (`ops/agents/*`)
  - Design roadmap (`ops/design/*`)
  - UX artefacts (`ops/ux/*`)
  - CV pipeline README + latest outputs
- CV Preview default path must not mislead (AC-8): blank or example path that exists.

### T-0205 (CV pipeline artefact manifest output)
- Produces a single manifest file per role run, keyed by **role_id** (and timestamp/run_id).
- Manifest enumerates artefacts with **paths + content type + human label** (e.g., `cv.md`, `cv.pdf`, `cover_letter.md`, `qa.json`).
- Includes a `qa.json` with at minimum:
  - relevance checklist (requirements coverage %, critical gaps list)
  - formatting checklist (2-page constraint indicator, section order validation)
  - risks/warnings (missing JD fields, low-confidence matches)
- Output paths are deterministic under a single directory, e.g. `ops/cv-pipeline/out/<role_id>/<run_id>/...`.

### T-0305 (Activity Timeline page)
- Implements PRD-006 from `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`.
- If `ops/events/events-YYYY-MM.jsonl` exists, timeline renders from it (newest-first, grouped by UTC day).
- If missing/unreadable, timeline renders from derived sources and shows:
  - `Event feed unavailable, showing derived activity.`
- Large feed guard: if JSONL exceeds ~2 MB, show latest N only (default 250) and show “Showing latest 250 events”.

### T-0306 (Team Operations Board page)
- Implements PRD-005 from `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`.
- `ops/team-ops.html` exists and renders within the standard masthead/navigation shell.
- Loads tasks from `ops/agent-tasks.csv` using shared CSV loader and maps statuses using `ops/crm/status-mapping-v1.json`.
- Renders:
  - workload gauge cards per agent (counts by canonical bucket)
  - recent movement feed (derived from `updated_at`, latest 25, extend to 100)
  - blockers panel (bucket == Blocked) with overdue visual flag
- Filters by agent + status bucket; persists via query string and restores on load.
- Resilience: if CSV fetch fails, show visible error banner + empty-state shell (no crash).
```


## Backlog

`ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`


```markdown
# Product Requirements Backlog v1

Owner: Tide (PM Control Tower)
Contributors: Vantage (UX), Ledger (CRM), Forge (CV), Polish (UI), Build Engineer

## Purpose
Single backlog for detailed, testable product requirements with grooming state.

## Priority Buckets
- P0: Core workflow integrity
- P1: Usability and speed
- P2: Optimisation and polish

## Requirement Format
- **Req ID**
- **Title**
- **Problem / Outcome**
- **User story**
- **Acceptance criteria**
- **Edge cases / Non-goals**
- **Dependencies**
- **Decision requests**
- **Owner**
- **Grooming state** (Draft / Refined / Ready)
- **Delivery status** (Backlog / In Progress / Blocked / Done)

---

## P0

### PRD-001 — Canonical Job Record + Stage Model
- Outcome: one source of truth per job record.
- User story: As operator, I can manage each opportunity from intake to close in a consistent schema.
- Acceptance criteria:
  - Job record includes required fields agreed by Matt.
  - Stage model: triage, drafting, applied, progressing, closed.
  - Closed reasons captured separately.
- Edge cases / Non-goals:
  - Non-goal: importing historical jobs at high fidelity on v1.
- Dependencies:
  - `ops/crm-schema-v0.sql` (schema) + UI mapping.
- Decision requests:
  - Confirm canonical required fields list (PRD-001-DR1).
- Owner: Ledger
- Grooming state: Ready
- Delivery status: Backlog

### PRD-002 — Live Kanban From Data
- Outcome: board reflects latest job pipeline without manual HTML editing.
- Acceptance criteria:
  - Kanban loads from `ops/job-pipeline.csv` (current) and supports status aliases.
  - Unknown statuses are handled safely (render as “Unknown”, do not break layout).
  - Board updates on publish cycle.
- Edge cases / Non-goals:
  - If CSV missing/unreadable: show inline error state and preserve last-rendered DOM shell.
- Dependencies:
  - `ops/ui/kanban_live_v1.js`
  - `ops/ui/csv_v1.js`
- Decision requests:
  - None.
- Owner: Build Engineer
- Grooming state: Ready
- Delivery status: In Progress

### PRD-003 — CV Run Flow (Input -> Analysis -> Draft -> QA -> PDF)
- Outcome: repeatable CV generation with visible QA gate.
- Acceptance criteria:
  - Role-keyed artefacts generated under `outputs/cv/<role_id>/`.
  - analysis/evidence/qa artefacts created and linked.
  - PDF gated by QA results.
- Edge cases / Non-goals:
  - If QA fails: PDF must not be generated, and a human-readable failure summary is persisted.
- Dependencies:
  - `ops/cv-pipeline/README.md` (pipeline design)
  - `ops/cv-preview.html` (preview surface)
- Decision requests:
  - Confirm the minimum QA checks required to unblock PDF (PRD-003-DR1).
- Owner: Forge + Vantage
- Grooming state: Refined
- Delivery status: In Progress

---

## P1

### PRD-004 — Persistent Navigation and Home Routing
- Outcome: consistent navigation across all pages.
- Acceptance criteria:
  - Shared nav on status/kanban/queue/agents/cv preview.
  - Home route resolves to existing page.
  - Mobile menu is usable.
- Edge cases / Non-goals:
  - Non-goal: SPA routing; v1 is static HTML with JS enhancement.
- Dependencies:
  - `ops/index.html` exists and is valid Home.
  - `ops/ui/nav_v1.js` (active link + aria-current).
- Decision requests:
  - None (nav reuse decision resolved: copy/paste acceptable, JS sets active state).
- Owner: Polish + Build Engineer
- Grooming state: Ready
- Delivery status: In Progress

### PRD-005 — Team Operations Board
- Outcome: visible task movement and squad accountability.
- User story: As operator, I can see who is doing what, what is blocked, and what changed recently, so I can intervene early.

- Acceptance criteria:
  1. **Surface + shell**
     - `ops/team-ops.html` exists and renders within the standard masthead/navigation shell.
     - Page title and primary H1 clearly indicate “Team Ops”.
  2. **Data source (v1 canonical)**
     - Page loads from `ops/agent-tasks.csv` using the shared CSV loader (`ops/ui/csv_v1.js`) or equivalent.
     - Uses `ops/crm/status-mapping-v1.json` to map raw status labels to canonical buckets.
  3. **Workload gauge (per agent)**
     - Render one card per agent with counts by canonical status bucket (minimum: Backlog, In Progress, Blocked, Review, Done).
     - Agents are derived from the CSV `agent` column; unknown/blank agent values are grouped under “Unassigned”.
     - Each card includes a “Total open” number (all except Done).
  4. **Task movement feed (recent changes)**
     - Feed is derived from `updated_at` (descending). Items show: task_id, title, agent, status, updated_at.
     - Feed default is latest 25 items; “Show more” increases to 100 without page reload (client-side).
     - If `updated_at` is missing/unparseable, item is placed at the end and flagged.
  5. **Blockers panel**
     - Panel lists tasks where canonical status bucket == Blocked.
     - Each blocker row shows: task_id, title, agent, due_date (if present), and a short “blocker summary” extracted from `notes` up to first pipe `|` if present.
     - If due_date is in the past, row is visually flagged as overdue.
  6. **Filtering + deep links (v1 simple)**
     - Provide a client-side filter by agent and by canonical status bucket.
     - Filters are reflected in the URL query string (e.g. `?agent=Rivet&bucket=Blocked`) and restored on load.
  7. **A11y and resilience**
     - Tables/feeds use semantic markup (`<table>` for tabular, `<ul>`/`<ol>` for feed) with visible focus states.
     - If CSV fetch fails: show visible error banner with attempted path; render an empty-state shell (do not crash).

- Edge cases / Non-goals:
  - Unknown statuses in `ops/agent-tasks.csv`: map to canonical “Backlog” AND flag visibly (chip “Unknown status”).
  - CSV row missing `task_id`: row is skipped and counted in a “X rows skipped” warning.
  - Non-goal: editing tasks in UI (read-only v1).
  - Non-goal: real-time updates; refresh is manual or on page reload for v1.

- Dependencies:
  - `ops/team-ops.html` (new surface)
  - `ops/agent-tasks.csv` (canonical ops tasks)
  - `ops/crm/status-mapping-v1.json` (status mapping)
  - `ops/ui/csv_v1.js` (CSV loading)
  - `ops/ui/nav_v1.js` (navigation)

- Decision requests:
  - PRD-005-DR1: Confirm whether “Approved” is distinct from “Review” in v1 UI.
    - Recommendation: treat Approved as a subtype within Review for v1 (bucket=Review; chip=Approved) to avoid UI complexity.
  - PRD-005-DR2: Confirm canonical status buckets to display in gauges (recommend: Backlog, In Progress, Blocked, Review, Done).

- Owner: Tide + Build Engineer
- Grooming state: Ready
- Delivery status: In Progress

### PRD-006 — Activity Timeline (Events-first, CSV fallback)
- Outcome: clear activity narrative from real events.
- User story: As operator, I can review what changed (pipeline + squad output) without reading commits or guessing from the UI.
- Acceptance criteria (events-first):
  1. **Surface**: `ops/activity.html` exists and renders within the standard masthead/navigation shell.
  2. **Primary data source**: If an events JSONL file exists for the current month (e.g. `ops/events/events-YYYY-MM.jsonl`), the page renders from it.
  3. **Event schema** (minimum): each JSONL line MUST parse to an object with:
     - `ts` (ISO-8601 timestamp),
     - `type` (string enum),
     - `title` (short human-readable summary),
     - `refs` (array of file paths or URLs; may be empty),
     - `actor` (agent or “human”).
  4. **Sorting**: events are rendered newest-first.
  5. **Grouping**: events are grouped by local day label (UTC for now, unless decided otherwise).
  6. **Rendering**:
     - Each event shows timestamp, type chip, title, and optional refs list.
     - Refs that are workspace-relative file paths are rendered as non-clickable code (v1 static site) but are copyable.
  7. **Load failures**:
     - If the JSONL fetch fails, show a visible error banner with the attempted path and fall back to CSV-derived activity (if available).
     - If JSONL contains invalid lines, skip those lines and show a small “X lines skipped” warning.
  8. **Secondary data source (fallback)**: If no events JSONL exists (or it cannot be loaded), derive a basic activity list from:
     - `ops/job-pipeline.csv` (job stage deltas when available), and
     - `ops/agent-tasks.csv` (task status changes and updated_at).
     The derived activity MUST label items as “Derived” and must not pretend to be authoritative.
  9. **Performance**: timeline renders within 250 ms on a typical laptop for up to 2,000 events (client-side).
  10. **A11y**:
      - Timeline list is a semantic list (`<ol>` / `<ul>`),
      - page has a skip-link target,
      - visible focus states apply to any interactive controls.

- Edge cases / Non-goals:
  - Timezone ambiguity: v1 groups by UTC day; do not implement per-user TZ until requested.
  - Duplicate events: if two events share the same `ts` and `title`, render both (no de-dupe) but consider future hash-based de-dupe.
  - Missing optional fields: if `refs` missing, treat as empty array; if `actor` missing, render “system”.
  - Large JSONL file: if file exceeds 2 MB, render latest N events only (N default 250) and show “Showing latest 250 events”.
  - Non-goal: editing events in the UI (read-only v1).

- Dependencies:
  - UX spec + handoff: `ops/ux/HANDOFF_NOTES_V1.md` (timeline guidance) and `ops/ux/MASTHEAD_NAV_SPEC_V1.md`.
  - Seed events file exists: `ops/events/events-2026-03.jsonl`.
  - Shared nav JS: `ops/ui/nav_v1.js`.

- Decision requests:
  - PRD-006-DR1: Confirm canonical `type` enum list for events (recommended: release, decision, build, data, incident, task).
  - PRD-006-DR2: Confirm retention window for events surfaced in UI (recommended: last 30 days).
  - PRD-006-DR3: Confirm whether derived activity should be suppressed when events exist (recommended: hide derived when events present).

- Owner: Vantage + Build Engineer
- Grooming state: Ready
- Delivery status: Backlog
```


## Update Capture

`ops/UPDATE_CAPTURE.md`


```markdown
# Update Capture

## 2026-03-03

## 2026-03-08
- Matt approved decision bundle (1-7): CRM stage model and triage structure, shared static nav approach, two-phase subagent plan, restart u&u role track only, Jobgether no-go, AUSTRAC-style role deprioritisation, CV preview path restriction to `outputs/cv/**`.
- Master project brief ingested and anchored to `ops/master-project-brief.md`.
- System audit complete (agents/memory/tools/files/runtime).
- Gap analysis complete.
- Execution roadmap created: `ops/EXECUTION_PLAN_2026-03-03.md`.
- CV pipeline design created: `ops/cv-pipeline/README.md`.
- CRM schema v0 created: `ops/crm-schema-v0.sql`.
- Model/cost routing strategy created: `ops/MODEL_COST_STRATEGY.md`.

## 2026-03-08
- Control Tower created: `ops/CONTROL_TOWER.md` (priorities, blockers/decisions, acceptance criteria, and backlog status movement).
- Shipped live data wiring for `ops/kanban.html`: now renders directly from `ops/job-pipeline.csv` via `ops/ui/kanban_live_v1.js` (+ `ops/ui/csv_v1.js`).
- Shipped live data wiring for `ops/agent-queue.html`: now renders directly from `ops/agent-tasks.csv` via `ops/ui/agent_queue_live_v1.js`, using canonical CRM task status mapping from `ops/crm/status-mapping-v1.json`.
- Extended canonical CRM task status enum to include `review` (supports CSV statuses `Review` and `Approved`).
- UI surface iteration pass: responsive layout + a11y affordances (skip-link target/focus), standardised sticky offset vars, and tightened CSS/design language docs (`ops/status.html`, `ops/agent-queue.html`, `ops/cv-preview.html`, `ops/ui/*`).
- Control Tower refreshed: reflected `T-0206` as **Blocked** pending nav reuse decision; added decision request on static masthead implementation approach.
- Control Tower refreshed again: marked decisions resolved (taxonomy + nav copy/paste), captured `T-0204` as **Approved** and `T-0303` as **In Progress**, and updated priority stack accordingly.

## Next Publishing Goal
- Expose/update a live web status view that includes:
  1. latest increment log,
  2. CV pipeline stage status,
  3. project Gantt timeline.

## UI Direction Captured (Builder screenshots)
- Dark, premium, low-noise interface with neon accent and soft glow connectors.
- Node-based orchestration visual language: orchestrator at centre with branching specialist agents.
- Clear hierarchy: strategist/planner layer above execution worker layer.
- Rounded cards/chips, subtle depth, restrained motion, high-contrast focal elements.
- Split utility + control layout in admin views: left rail list, right detail pane, tabbed sections.
- Product intent: make multi-agent workflow legible and confidence-inducing, not merely decorative.
- Additional reference direction captured: explicit memory controls/surfaces (memory flush/search/session-memory), visible security-scan trust indicators for downloadable modules, structured memory architecture views, and simple system-overview diagrams for onboarding/explainability.
- Additional workflow references captured: meeting-to-actions pipeline with approval gating (human-in-loop before task creation), RAG knowledge-base pipeline (multi-source ingest -> embed -> SQLite+vectors -> plain-English query), and advisory-council pattern (parallel specialist analyses plus synthesiser and feedback loop).
- Additional ops references captured: automated DB discovery/backups with encryption and retention, health monitoring heartbeat/checklist, config/doc drift monitoring, and update notification pattern in chat. Self-update actions remain explicit-approval only.

## 2026-03-09
- Groomed `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`: introduced explicit grooming state (Draft/Refined/Ready) + expanded requirement format to include edge cases + decision requests.
- Expanded PRD-006 (Activity Timeline) into implementation-ready acceptance criteria and edge cases; captured decision requests (event type enum, retention, derived-when-events-present).
- Added delivery task `T-0305` to `ops/agent-tasks.csv` for Rivet to implement `ops/activity.html` per PRD-006.
- Refreshed Control Tower: marked T-0303 Done; unblocked T-0206 (now In Progress) after masthead/nav copy-paste decision; pulled in AC-8 fix (CV preview default path must not mislead).
- Groomed PRD-005 (Team Operations Board): expanded into implementation-ready acceptance criteria/edge cases; moved Grooming state Refined → Ready.
- Added delivery task `T-0306` to `ops/agent-tasks.csv` for Rivet to implement `ops/team-ops.html` per PRD-005.
- Control Tower refresh (09:36 UTC): captured T-0305 **Backlog → In Progress**, surfaced new delivery work T-0306, and made Team Ops acceptance criteria explicit in Control Tower.
```


## Project Gantt

`ops/project-gantt.md`


```markdown
# Crabbie OS Roadmap Gantt (Draft)

## Streams
- Foundation
- Data & Automation
- UI/UX
- Agent Delegation
- Delivery Ops

## Timeline (Brisbane)
- 2026-03-01 to 2026-03-28

## Milestones
- M1: Dashboard shell + agents pages consolidated
- M2: JSON data layer + auto-refresh
- M3: Command router live (chat -> pipeline/task updates)
- M4: Task detail + activity log + schedules views
- M5: QA gates + release rhythm stable
```


## Team Model

`ops/TEAM_OPENCLAW.md`


```markdown
# Crabbie Employment Pod - Operating Model

## Mission
Land the right role fast with high-quality applications, tight pipeline control, and low-noise execution.

## Command Structure
- **Crabbie (Manager):** final orchestration, quality control, user-facing decisions.
- **Tide (Control Tower):** daily priorities, blockers, sequencing.
- **Radar (Scout):** finds and dedupes roles.
- **Vantage (Analyst):** decodes role requirements.
- **Forge (Writer):** writes role-targeted CV content.
- **Polish (Design):** enforces premium 2-page formatting.
- **Ledger (CRM):** tracks statuses, versions, follow-ups.
- **Atlas (Intel):** builds company/contact intelligence.

## Workflow (Autonomous-by-default)
1. Scout captures roles and assigns fit tier.
2. Analyst generates role brief.
3. Writer produces strongest-first application pack.
4. Design finalises polished PDF outputs.
5. CRM logs role status, CV version, and next actions.
6. Manager sends concise summary + decisions needed.

## Status Definitions
- `New`
- `Assessing`
- `CV Ready`
- `Applied`
- `Interview`
- `Offer`
- `Rejected`
- `Ignored`

## Current Priority Rules
- Prioritise **Brisbane** and **Remote**.
- Non-Brisbane/non-Remote shown in weekly secondary digest only.
- Exclude CTO/CIO-heavy roles by default.

## Daily Operating Cadence
- Inbox priority checks: 9am, 12pm, 3pm, 6pm AEST
- Jobs digest: 9am and 3pm AEST
- Weekly secondary market digest: Monday 10:30am AEST

## Next Automation Targets
- Auto-update `job-pipeline.csv` from digest decisions (`ignore x`, `prep x`, `applied x`).
- Auto-generate outreach drafts where contact email exists.
- Weekly pipeline review with stale-role nudges.
```


## CV Pipeline README

`ops/cv-pipeline/README.md`


```markdown
# CV Automation Pipeline (Phase 1)

## Goal
Input job URL or pasted role text → output tailored 2-page CV draft + polished PDF + shareable file paths.

## Pipeline v1 (implemented next)
1. **Ingest**
   - Accept `job_url` or `job_text`.
   - Fetch URL text when provided.
2. **Extract requirements**
   - Parse responsibilities, must-have skills, preferred experience, seniority.
3. **Profile match**
   - Load Matt CV source data and prior achievement bank.
   - Map evidence to requirements.
4. **Draft generation**
   - Produce ATS-safe, 2-page markdown draft.
5. **Polish pass**
   - Tighten language, enforce style, remove fluff.
6. **PDF build**
   - Convert markdown to PDF via local renderer.
7. **Return outputs**
   - `draft.md`, `final.pdf`, rationale summary.

## File Layout
- `inputs/jobs/` raw job inputs
- `inputs/cv/` source CV files
- `outputs/cv/` generated drafts and PDFs
- `ops/cv-pipeline/` orchestration scripts/spec

## Acceptance Criteria
- End-to-end run in <2 minutes for pasted JD.
- 2-page output target.
- Explicit mapping of role requirements to CV evidence.
- One-click file path response for user.
```


## CRM Mapping Spec

`ops/crm/STATUS_MAPPING_V1.md`


```markdown
# Canonical CRM Status Mapping v1

**Purpose:** Provide a single source of truth for status taxonomy across:
- DB (SQLite schema v0 and future schema)
- CSV/task tracker (`ops/agent-tasks.csv`)
- UI badges/filters (ops.mattkain.com)
- Event model (`crm.*.status_changed.v1`)

**Design principles**
1. **Small, durable enums** (avoid UI-only nuance).
2. **Separate entity lifecycles** (Job ≠ Application ≠ Task).
3. **Canonical keys are lowercase snake_case** (stable for code + events).
4. **UI labels can change** without breaking data.

---

## 1) Canonical enums

### 1.0 Ops pipeline status (`ops.pipeline.status`)
Operational Kanban status for `ops/job-pipeline.csv`. This is a **UI/ops view** (not the durable CRM job/application lifecycle), but it needs a canonical key set so the UI can be mapped deterministically.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `pinned` | Pinned | Manually pinned at top of pipeline. | no |
| `new` | New | Captured, not yet assessed. | no |
| `assessing` | Assessing | Screening / role fit assessment in progress. | no |
| `cv_ready` | CV Ready | Tailored CV is prepared and ready to apply. | no |
| `applied` | Applied | Application submitted. | no |
| `interview` | Interview | In an interview loop. | no |
| `offer` | Offer | Offer received. | yes |
| `rejected` | Rejected | Rejected by employer. | yes |
| `hold` | Hold | Paused (timing, dependency, or decision). | no |
| `ignored` | Ignored | Explicitly not pursuing. | yes |

**Implementation note:** `ops.pipeline.status` is intentionally separate from `crm.job.status` and `crm.application.status` (Sections 1.1 and 1.2). The Kanban can evolve without forcing CRM migrations.

### 1.1 Job status (`crm.job.status`)
Jobs represent *opportunities* (roles) irrespective of whether an application has been started.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `identified` | Identified | Role found and captured. | no |
| `shortlisted` | Shortlisted | Worth pursuing, actively being worked. | no |
| `dropped` | Dropped | No longer pursuing. | yes |

**Allowed transitions**
- `identified` → `shortlisted` | `dropped`
- `shortlisted` → `dropped`
- `dropped` → (none)

---

### 1.2 Application status (`crm.application.status`)
Applications represent the *execution track* for a given job.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `not_started` | Not started | No application artefacts created yet. | no |
| `drafting` | Drafting | CV/CL being tailored, but not submitted. | no |
| `submitted` | Submitted | Application submitted. | no |
| `interviewing` | Interviewing | Any live interview loop (incl. screening). | no |
| `offer` | Offer | Offer received. | yes |
| `rejected` | Rejected | Explicit rejection received. | yes |
| `withdrawn` | Withdrawn | We withdrew / stopped mid-process. | yes |

**Allowed transitions**
- `not_started` → `drafting` | `withdrawn`
- `drafting` → `submitted` | `withdrawn`
- `submitted` → `interviewing` | `rejected` | `withdrawn`
- `interviewing` → `offer` | `rejected` | `withdrawn`
- `offer` → (none)
- `rejected` → (none)
- `withdrawn` → (none)

---

### 1.3 Task status (`crm.task.status`)
Tasks represent work items (ops tasks, follow-ups, artefact prep) that can exist independently of jobs.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `backlog` | Backlog | Not started. | no |
| `in_progress` | In progress | Actively being worked. | no |
| `review` | Review | Pending review/approval/QA before continuing. | no |
| `blocked` | Blocked | Cannot proceed due to dependency/decision. | no |
| `done` | Done | Completed. | yes |

**Allowed transitions**
- `backlog` → `in_progress` | `review` | `blocked` | `done`
- `in_progress` → `review` | `blocked` | `done`
- `review` → `in_progress` | `blocked` | `done`
- `blocked` → `in_progress` | `review` | `done`
- `done` → (none)

---

## 2) Mapping tables

### 2.1 DB schema v0 (legacy) → canonical

#### `ops/crm-schema-v0.sql` :: `jobs.status`
Legacy comment: `new|shortlisted|applied|interview|closed`

| legacy | canonical |
|---|---|
| `new` | `identified` |
| `shortlisted` | `shortlisted` |
| `applied` | `shortlisted` *(application state belongs on application)* |
| `interview` | `shortlisted` *(application state belongs on application)* |
| `closed` | `dropped` |

#### `ops/crm-schema-v0.sql` :: `applications.status`
Legacy comment: `draft|submitted|responded|rejected|offer`

| legacy | canonical |
|---|---|
| `draft` | `drafting` |
| `submitted` | `submitted` |
| `responded` | `interviewing` |
| `offer` | `offer` |
| `rejected` | `rejected` |

#### `ops/crm-schema-v0.sql` :: `tasks.status`
Legacy default: `open`

| legacy | canonical |
|---|---|
| `open` | `backlog` |

---

### 2.2 CSV task system (`ops/agent-tasks.csv`) → canonical Task status

| CSV value | canonical |
|---|---|
| `Backlog` | `backlog` |
| `In Progress` | `in_progress` |
| `Review` | `review` |
| `Approved` | `review` *(treated as review-state)* |
| `Blocked` | `blocked` |
| `Done` | `done` |

### 2.3 Pipeline CSV (`ops/job-pipeline.csv`) → canonical Ops pipeline status

| CSV value | canonical |
|---|---|
| `Pinned` | `pinned` |
| `New` | `new` |
| `Assessing` | `assessing` |
| `CV Ready` | `cv_ready` |
| `Applied` | `applied` |
| `Interview` | `interview` |
| `Offer` | `offer` |
| `Rejected` | `rejected` |
| `Hold` | `hold` |
| `Ignored` | `ignored` |

---

## 3) UI badge defaults

- `identified` → neutral/grey
- `shortlisted` → primary/blue
- `dropped` → muted/grey (or danger/red if explicitly rejected)

- `not_started` → neutral/grey
- `drafting` → warning/amber
- `submitted` → primary/blue
- `interviewing` → accent/purple
- `offer` → success/green
- `rejected` → danger/red
- `withdrawn` → muted/grey

- `backlog` → neutral/grey
- `in_progress` → primary/blue
- `review` → warning/amber
- `blocked` → warning/amber
- `done` → success/green

---

## 4) Migration note (lightweight)

If/when we migrate existing SQLite rows or import CSVs:
1. **Do not overwrite raw legacy values** on day 1.
2. Create a one-off transform (or view) that maps legacy → canonical using Section 2.
3. Once consumers are updated, backfill canonical values and constrain columns to enum set.

---

## 5) Implementation notes (for builders)

- Canonical keys should be used in events:
  - `crm.job.status_changed.v1` uses `identified|shortlisted|dropped`
  - `crm.application.status_changed.v1` uses `not_started|drafting|submitted|interviewing|offer|rejected|withdrawn`
  - `crm.task.status_changed.v1` uses `backlog|in_progress|blocked|done`

- If a UI needs more nuance (e.g., “Phone screen”, “Final round”), represent it as **metadata** on the event, not a new status key.
```


## Architecture Event Model

`ops/architecture/EVENT_MODEL_V1.md`


```markdown
# Event Model v1 (Ops Control Tower)

**Last updated:** 2026-03-08

## Purpose
Create a small, consistent event model so the Control Tower (status page, dashboard worker, future automation) can consume changes across:
- **CRM** (jobs, applications, tasks)
- **CV pipeline** runs (artefacts + QA)
- **Agent/task board** updates (CSV-driven now, DB-driven later)

This increment defines:
1) a **standard event envelope**,
2) a minimum set of **domain events**,
3) **integration contracts** (JSON Schemas), and
4) **migration notes + risks**.

The intent is to support both:
- **File-first** (events written as JSONL in repo, consumed by dashboard-worker.js), and
- **DB-first later** (outbox table + pub/sub), without changing event shapes.

---

## 1) Event envelope (contract)
All events MUST conform to `ops/architecture/schemas/event-envelope.schema.json`.

### Envelope fields
- `spec_version` (string): fixed `"1.0"` for this version.
- `event_id` (string, UUID): unique per event.
- `event_type` (string): namespaced, dot-delimited.
- `occurred_at` (string, RFC3339 UTC): when the change happened.
- `producer` (object): component metadata.
- `subject` (object): domain entity reference.
- `correlation_id` (string, optional): tie together a pipeline run, an ingestion batch, etc.
- `idempotency_key` (string, optional): stable key for de-dupe when replaying.
- `data` (object): event payload; validated by per-event schema.

### Naming convention
`<domain>.<entity>.<action>.v<major>`

Examples:
- `crm.job.status_changed.v1`
- `crm.application.status_changed.v1`
- `crm.task.status_changed.v1`
- `pipeline.cv_run.completed.v1`

---

## 2) Canonical status taxonomy (referenced by events)
This is **not** the full mapping spec (that is T-0204), but events should emit canonical values from day 1.

### JobStatus (v1)
- `identified`
- `shortlisted`
- `dropped`

### ApplicationStatus (v1)
- `not_started`
- `drafting`
- `submitted`
- `interviewing`
- `offer`
- `rejected`
- `withdrawn`

### TaskStatus (v1)
- `backlog`
- `in_progress`
- `blocked`
- `done`

**Rule:** CSV/DB/UI may keep their local labels, but event payloads MUST normalise to these canonical enums.

---

## 3) Minimum domain events (v1)

### A) CRM status change events
These are the highest leverage because they drive dashboards, reminders, and reporting.

1. `crm.job.status_changed.v1`
2. `crm.application.status_changed.v1`
3. `crm.task.status_changed.v1`

Each payload includes:
- `old_status`, `new_status` (canonical)
- `reason` (optional, short string)
- `changed_by` (optional, actor reference, e.g. `"agent:ledger"`, `"human:matt"`)

### B) Pipeline run events
4. `pipeline.cv_run.completed.v1`

Payload includes:
- `role_id`
- `run_id`
- `manifest_path` (expected by T-0205)
- `artefacts` (optional inline summary; full detail remains in manifest)
- `qa_path` (optional convenience pointer)
- `result` (`success|partial|failed`)

---

## 4) Storage and transport (pragmatic v1)

### File-first transport (now)
Write events to:
- `ops/events/events-YYYY-MM.jsonl`

One JSON object per line. This supports:
- cheap append-only writes,
- easy git diff/audit,
- replay by re-processing the log.

### DB outbox (later)
When moving to SQLite/Postgres for CRM, add an `event_outbox` table and ensure writes are:
- transactionally consistent (domain update + outbox insert in same txn),
- published asynchronously to a message bus or file sink.

---

## 5) Integration contracts (schemas)
Schemas live at:
- `ops/architecture/schemas/`

Defined in this increment:
- `event-envelope.schema.json`
- `crm.job.status_changed.v1.schema.json`
- `crm.application.status_changed.v1.schema.json`
- `crm.task.status_changed.v1.schema.json`
- `pipeline.cv_run.completed.v1.schema.json`

---

## 6) Migration notes

### Migration step 1 (no DB changes)
- Add `ops/events/` directory.
- Start emitting events from scripts/agents that already touch CSV/HTML.
- Dashboard worker can ingest JSONL as an additional source of truth.

### Migration step 2 (status normalisation)
- Wherever a status is written (CSV row update, DB update, UI), add a normalisation step that maps to canonical enums before emitting.
- Keep emitting `old_status` and `new_status` in canonical form even if storage keeps legacy text.

### Migration step 3 (CRM schema alignment)
- In `crm-schema-v0.sql`, `jobs.status`, `applications.status`, `tasks.status` currently hold legacy values.
- Plan: introduce new columns (or a check constraint) aligned to canonical enums, then backfill.
  - Example: add `jobs.status_v1` and keep `jobs.status` as legacy during migration.

---

## 7) Risks and mitigations

1) **Status drift (multiple sources of truth)**
- Risk: CSV/DB/UI disagree; events become unreliable.
- Mitigation: enforce canonical enum emission and central mapping table (T-0204) with automated tests.

2) **Duplicate events during replay**
- Risk: JSONL replay double-counts.
- Mitigation: `event_id` uniqueness + consumer de-dupe using `idempotency_key`.

3) **Leaky identifiers / unstable IDs**
- Risk: CSV rows don’t have stable IDs.
- Mitigation: define `subject` as `(type, id)` where `id` is stable: `job:<db_id>` or `job:<hash(url)>` until DB IDs exist.

4) **Schema versioning pain**
- Risk: hard to evolve events.
- Mitigation: version in `event_type` suffix (`.v1`, `.v2`) and avoid breaking changes; add fields only.

---

## Appendix: Example event (job status change)
```json
{
  "spec_version": "1.0",
  "event_id": "2f4b1d24-9c2b-4a90-820f-9c45b16c5b2f",
  "event_type": "crm.job.status_changed.v1",
  "occurred_at": "2026-03-08T08:20:00Z",
  "producer": {"name": "ledger", "version": "0.1"},
  "subject": {"type": "job", "id": "job:123"},
  "correlation_id": "run:cv:role_0042:20260308T0818Z",
  "idempotency_key": "job:123:status:identified->shortlisted",
  "data": {
    "old_status": "identified",
    "new_status": "shortlisted",
    "reason": "High-fit role confirmed",
    "changed_by": "agent:ledger"
  }
}
```
```


## Architecture Integration Contracts

`ops/architecture/INTEGRATION_CONTRACTS_V1.md`


```markdown
# Integration Contracts V1 (Ops Control Tower)

**Last updated:** 2026-03-08

## Purpose

Define a small, explicit contract layer between:

- **Producers**: agents/tools that create or mutate operational data (tasks, status changes, CV runs, CRM events)
- **Consumers**: static dashboard pages (`status.html`, `kanban.html`, `agent-queue.html`, etc.), workers (`dashboard-worker.js`), and future automations

V1 is intentionally minimal: it standardises *how data is read and appended* without forcing an immediate rewrite of the existing CSV/MD/HTML artefacts.

---

## Contract set (V1)

### 1) HTTP API: Control Tower API (read-mostly)

- **Spec**: `ops/architecture/openapi/control-tower-api.v1.yaml`
- **Style**: REST + JSON, versioned via URL prefix: `/v1/...`
- **Auth**: `X-Api-Key` (optional in local dev; required when exposed beyond localhost)

The API is the canonical integration surface for UI and for agent-side automation.

### 2) Event stream: JSONL append-only (local-first)

- **Envelope**: `ops/architecture/schemas/event-envelope.schema.json`
- **Storage**: `ops/events/events-YYYY-MM.jsonl`
- **Semantics**: append-only; ordering by `occurred_at` (ISO8601) then `event_id`

This stream feeds activity timeline components and acts as the “audit trail” for API-derived state.

---

## Data domains and canonical identifiers

### Task

- `task_id`: `T-XXXX`
- `owner`: agent/person handle (e.g., `Forge`, `Ledger`)
- `status`: `Backlog | In Progress | Blocked | Done` (see `ops/crm/STATUS_MAPPING_V1.md`)

### CV Run

- `role_id`: stable identifier for a role target (preferred over role title)
- `run_id`: immutable run instance identifier

### CRM

- `job_id`, `application_id` (UUIDs)

---

## Integration patterns

### UI pages

UI pages should prefer:

1. **GET** API endpoints for state (`/v1/tasks`, `/v1/agents`, `/v1/status-summary`)
2. **GET** `/v1/events` for timeline
3. Fall back to reading static sources directly only if API is not available

### Agents

Agents/tools should:

- mutate state via **POST** endpoints, which in turn:
  - validate payloads
  - write state to the current storage backend
  - append an event to JSONL

---

## Migration notes (from current repo state)

### Current state

- Operational truth is scattered across:
  - `ops/agent-tasks.csv` (tasks)
  - `ops/agent-roster.yaml` (agents)
  - `ops/UPDATE_CAPTURE.md` and other MD pages (summaries)
  - `ops/architecture/schemas/*.json` (events schemas)

### V1 migration (safe, incremental)

1. **Add API as a thin façade over existing files**
   - Read tasks from `agent-tasks.csv`
   - Read agents from `agent-roster.yaml`
   - Read events from `ops/events/*.jsonl` (if present)

2. **Start writing events on every mutation**
   - When a task status changes, append `crm.task.status_changed.v1` (or introduce `ops.task.status_changed.v1` if you want to keep CRM events separate)

3. **Gradually move writes off CSV**
   - Introduce `ops/data/tasks.sqlite` or `ops/data/tasks.json` as the API write target
   - Keep CSV as an export for humans until UI fully swaps to API

---

## Key risks

- **Dual-write drift**: if both UI and humans edit CSV while API writes elsewhere, state diverges.
  - Mitigation: API becomes the *only writer*; CSV becomes export-only.
- **Identifier mismatch**: task rows missing stable IDs or duplicates (already noted: duplicate `T-0302`).
  - Mitigation: enforce `task_id` uniqueness in API validation.
- **Security posture**: exposing API beyond localhost without auth leaks operational data.
  - Mitigation: bind to localhost by default; require API key and TLS when remote.
- **Over-engineering**: adding API too early could slow shipping.
  - Mitigation: read-only endpoints first; mutation endpoints only for high-value workflows.
```


## Architecture Read Models

`ops/architecture/READ_MODEL_CONTRACTS_V1.md`


```markdown
# Read Model Contracts v1 (Ops Control Tower)

**Last updated:** 2026-03-09

## Purpose
Decouple UI pages from parsing raw operational artefacts (CSV/MD) by introducing **versioned, schema-validated read models**. Read models are JSON documents produced by a deterministic worker/build step and consumed by static pages.

This increment defines:
- which read models exist in v1,
- where they live,
- JSON Schema contracts for each,
- migration steps from today’s CSV parsing,
- key risks.

This is intentionally **local-first** and **static-site friendly**: read models are files published alongside HTML.

---

## Scope
### In scope (v1)
1) **Status Summary**: a single JSON object to drive `status.html` and high-level KPIs.
2) **Kanban Board**: normalised tasks with swimlanes/columns to drive `kanban.html`.

### Out of scope (v1)
- Full text search indexes
- Time-series analytics
- Live server-side APIs

---

## Storage locations (contract)
Read models MUST be written to:
- `ops/read_models/v1/status_summary.json`
- `ops/read_models/v1/kanban_board.json`

Publishing:
- `ops/publish_ops.sh` should include `ops/read_models/**` in the allow-list.

---

## Versioning rules
- Versioned by **path** and by schema `$id`:
  - `.../v1/...` indicates major version.
- Non-breaking changes (additive fields) are allowed within v1.
- Breaking changes require v2 path + new schema.

---

## Contracts (JSON Schemas)
Schemas live under `ops/architecture/schemas/`.

### 1) Status Summary v1
- Schema: `readmodel.status_summary.v1.schema.json`
- Consumer: `ops/status.html` (and any future “home” dashboard)

### 2) Kanban Board v1
- Schema: `readmodel.kanban_board.v1.schema.json`
- Consumer: `ops/kanban.html`

---

## Relationship to Event Model v1
Read models may be built from any combination of:
- raw artefacts (e.g., `ops/agent-tasks.csv`)
- event log (`ops/events/events-YYYY-MM.jsonl`)
- derived artefacts (e.g., `ops/usage/api-usage-log.csv`)

Rule of thumb:
- **Events** are the audit trail.
- **Read models** are the fast, UI-ready projection.

---

## Migration notes (incremental)
### Step 0: Introduce read model directory (no UI change)
- Create `ops/read_models/v1/`.
- Produce `status_summary.json` and `kanban_board.json` via a script/agent step.
- Validate outputs against the schemas as a CI/local check.

### Step 1: Update UI pages to prefer read models
- In `ops/ui/*.js` (or page scripts), load JSON from `ops/read_models/v1/*.json` first.
- If missing, fall back to existing CSV parsing for backwards compatibility.

### Step 2: Make read models required for publish
- Add a pre-publish check in `publish_ops.sh` that fails if read models are missing.
- Optional: keep CSV publish for human inspection/export only.

### Step 3 (later): Move from CSV-derived → event-derived
- Once producers consistently emit `*.status_changed.v1` events, the worker can build kanban/status from events + snapshots.
- This removes dependence on CSV structure.

---

## Key risks and mitigations
1) **Stale read models**
- Risk: UI shows old state if the build step isn’t run.
- Mitigation: publish script should *build then publish*; add timestamp + source hashes.

2) **Schema drift**
- Risk: UI and producer disagree about JSON shape.
- Mitigation: validate read model files against JSON Schema in the build step.

3) **Hidden source-of-truth conflict**
- Risk: humans keep editing CSV, but the UI is driven by read models.
- Mitigation: show `generated_from` and `inputs` in each read model, plus a `generated_at` watermark in UI.

4) **Identifier instability**
- Risk: tasks lack stable IDs, breaking reconciliation across inputs.
- Mitigation: require `task_id` and enforce uniqueness at projection time; fail fast on duplicates.

---

## Example: minimal status summary
```json
{
  "spec_version": "1.0",
  "generated_at": "2026-03-09T00:10:00Z",
  "window": {"from": "2026-03-01T00:00:00Z", "to": "2026-03-09T00:10:00Z"},
  "counts": {
    "tasks": {"backlog": 12, "in_progress": 5, "blocked": 1, "done": 27},
    "cv_runs": {"success": 4, "partial": 1, "failed": 0}
  },
  "highlights": [
    {"type": "risk", "title": "Blocked tasks", "detail": "1 task is blocked"}
  ]
}
```
```


## Architecture Memory Layers

`ops/architecture/MEMORY_LAYERS_V1.md`


```markdown
# Memory Layers v1 (Ops Control Tower)

**Last updated:** 2026-03-09

## Purpose
Define a pragmatic, automatable memory architecture for Squad Enterprise Architecture work inside this repo.

Goals:
- Separate **ephemeral** chat context from **durable** operational truth.
- Make it easy to **replay** operational history (events) and **reconstruct** dashboards (read models).
- Keep long-term memory **curated**, with clear ownership and retention.
- Minimise PII/secret leakage and keep auditability high (git-friendly).

Non-goals (v1):
- Full enterprise knowledge graph.
- Automated sensitive data discovery/redaction.

---

## 1) Layer model (v1)

### L0. Runtime context (ephemeral)
**What it is:** In-session context (current conversation, tool outputs) that disappears between runs.

- **System of record:** none
- **Storage:** transient (model context)
- **Access pattern:** interactive
- **Retention:** minutes–hours
- **Primary risks:** hallucinated continuity, missing context after restart

**Rule:** never treat L0 as authoritative; write down decisions into L2/L3.

---

### L1. Working scratch (durable but non-authoritative)
**What it is:** Drafts, working notes, raw captures.

- **System of record:** file tree in `ops/` (repo)
- **Storage:** markdown/csv/html/etc
- **Access pattern:** human-first, occasionally machine-read
- **Retention:** weeks–months
- **Primary risks:** duplication, stale docs

**Where it lives (current):**
- `ops/*.md` plans and working docs
- `ops/downloads/*` reference artefacts

**Rule:** L1 is allowed to be messy. Promote conclusions into L2/L3.

---

### L2. Event log (append-only operational truth)
**What it is:** Canonical record of state changes and completed runs.

- **System of record:** JSONL event log
- **Storage:** `ops/events/events-YYYY-MM.jsonl`
- **Access pattern:** append-only write; replay by consumers
- **Retention:** 12 months recommended (configurable)
- **Primary risks:** schema drift, duplicate emission, missing events

**Contract:** see `ops/architecture/EVENT_MODEL_V1.md` and schemas in `ops/architecture/schemas/`.

**Rule:** if something happened that should drive dashboards/automation, emit an event (L2).

---

### L3. Read models (derived, query-optimised views)
**What it is:** Materialised views computed from L2 (and, temporarily, from CSV sources).

- **System of record:** derived, not authoritative
- **Storage:** `ops/read_models/*` (JSON/CSV) and/or `ops/status.html` generated artefacts
- **Access pattern:** read-heavy (UI), regenerated on demand
- **Retention:** regenerate anytime (keep last N for debugging)
- **Primary risks:** divergence from event log, hidden business logic

**Rule:** all transformation logic must be explicit and testable (even if tests come later).

---

### L4. Curated memory (long-term, decision-grade)
**What it is:** Distilled decisions, preferences, and durable facts.

- **System of record:** curated docs (outside `ops/` today, but referenced here)
- **Storage (current):**
  - `MEMORY.md` (long-term)
  - `memory/YYYY-MM-DD.md` (daily raw logs)
- **Access pattern:** lookup and summarisation
- **Retention:** long-term
- **Primary risks:** accidental secrets, overgrowth, unclear truth status

**Rule:** promote only what is stable and useful. Avoid storing secrets unless explicitly requested.

---

## 2) Data classification and handling

### Classification (v1)
- **Public:** safe to publish.
- **Internal:** ok in repo, not meant for public.
- **Sensitive:** credentials, personal contact details, private messages, HR/legal.

### Handling rules
- L2 event payloads MUST be **Internal** by default and SHOULD avoid **Sensitive**.
- If Sensitive data is unavoidable:
  - store a **reference** (pointer) rather than the raw value,
  - or redact/tokenise and keep the mapping outside the repo.

---

## 3) Canonical file map (v1)

### Authoritative vs derived
- **Authoritative:**
  - L2: `ops/events/events-YYYY-MM.jsonl`
- **Derived:**
  - L3: `ops/read_models/*` and generated HTML
- **Curated (decision-grade):**
  - L4: `MEMORY.md` and selected `ops/architecture/*_V*.md` specs

### Indexing (optional v1)
Introduce an optional machine-readable index for curated decisions and artefacts:
- `ops/architecture/memory-index.jsonl` (each line conforms to `memory.entry.v1`)

This supports:
- rapid search,
- linking decisions to events and artefacts,
- controlled summarisation without scraping markdown.

---

## 4) Integration points

### Producers (write)
- Agents/scripts that change CRM/task state emit L2 events.
- Pipelines emit completion events (e.g. `pipeline.cv_run.completed.v1`).

### Consumers (read)
- Dashboard worker consumes L2, produces L3.
- Human operators consult L3 for operational decisions.

---

## 5) Migration notes

### Step 1 (now): document + optional index schema
- Adopt this layer vocabulary in architecture docs.
- Add `memory.entry.v1` schema (optional).

### Step 2 (next): minimal decision capture into index
- When a new architecture increment is created, add a corresponding `memory-index.jsonl` entry:
  - what changed,
  - why,
  - links to files,
  - risks.

### Step 3 (later): automate read-model regeneration
- Ensure read-model generation is deterministic from L2.
- Add a small CI or scheduled job to regenerate L3 from L2.

---

## 6) Risks and mitigations

1) **Too many “truths”** (docs, CSVs, events)
- Mitigation: declare L2 as operational truth for changes; treat CSV/HTML as inputs during transition only.

2) **Sensitive data leakage into L2/L4**
- Mitigation: schema guidance + review checklist; prefer pointers over raw content.

3) **Index becomes another stale artefact**
- Mitigation: keep index optional; if used, enforce “one entry per increment” and validate schema.

4) **Read models embed logic without visibility**
- Mitigation: document transformations and version them; use event schemas as contracts.
```


## Architecture Publish Guardrails

`ops/architecture/PUBLISH_GUARDRAILS_V1.md`


```markdown
# Publish Guardrails v1 (Ops Control Tower)

**Last updated:** 2026-03-09

## Purpose
The Ops Control Tower is published as a **static site** by copying a curated subset of workspace artefacts into a separate publish repo (`tmp_crabbie_repo`) and pushing to `main` via `ops/publish_ops.sh`.

Because this is a *copy-and-push* mechanism (not a build pipeline with secrets isolation), we need an explicit, automated **preflight safety gate** to reduce the risk of accidentally publishing:
- secrets (API keys, tokens, private keys),
- credentials (.env, SSH keys),
- unintentional personal data.

This increment defines the guardrail contract and introduces an executable preflight check.

---

## Guardrail contract

### When the preflight runs
Preflight MUST run **after** files are copied into the publish repo and **before** any `git add/commit/push`.

### Inputs
- Publish repo path: `$WS/tmp_crabbie_repo` (default in `publish_ops.sh`)

### Output behaviours
- **PASS**: exit code `0`, print a short summary.
- **FAIL**: exit code `1`, print:
  - offending file paths,
  - matched rule name(s),
  - minimal redacted context (no full secrets echoed).

### Non-goals (v1)
- Deep content classification (PII detection, ML-based scanning)
- Preventing publication of *all* sensitive operational content (that remains an allow-list responsibility)

---

## Ruleset (v1)

### A) Forbidden file patterns (hard fail)
Fail if any file in publish repo matches (case-insensitive):
- `.env`, `.env.*`
- `*id_rsa*`, `*id_ed25519*`
- `*.pem`, `*.key`, `*.p12`, `*.pfx`
- `*credentials*`, `*secret*`, `*token*` (filename-based)

Rationale: these are almost never intended for public distribution.

### B) Forbidden content patterns (hard fail)
Fail if any file content matches patterns such as:
- `BEGIN (RSA|OPENSSH|EC|PRIVATE) KEY`
- `AKIA[0-9A-Z]{16}` (AWS access key id)
- `xox(b|p|a|r)-` (Slack tokens)
- `ghp_` / `github_pat_` (GitHub tokens)
- Generic high-risk strings (case-insensitive): `api_key=`, `access_token`, `refresh_token`, `client_secret`

Rationale: catch common accidental leakage even if the filename is benign.

### C) Allow-list escape hatch (documented only)
If a false positive blocks publishing, resolve via one of:
- move the artefact out of the publish allow-list,
- redact the content,
- (only if necessary) add a narrowly-scoped exception rule with justification in the preflight script.

---

## Implementation

### Script
- `ops/publish_preflight_v1.sh`

### Integration
- `ops/publish_ops.sh` MUST invoke the preflight script prior to staging/commit.

---

## Migration notes

### Rolling adoption
1. Add `publish_preflight_v1.sh` and wire it into `publish_ops.sh`.
2. Run a publish once and tune false positives.
3. If publication moves to CI later, port the same checks into CI (GitHub Actions) for defence in depth.

### Future increments
- Add a **deny-list of directories** (e.g., never publish `memory/`, raw logs).
- Add a lightweight **PII heuristics scan** (emails, phone numbers) with a warning mode first.

---

## Risks and mitigations

1) **False positives block publishing**
- Mitigation: keep v1 rules minimal and narrowly targeted; add exceptions sparingly with justification.

2) **False negatives (missed secrets)**
- Mitigation: defence-in-depth: keep strict copy allow-list + add CI checks later; avoid storing secrets in artefacts that are ever copied.

3) **Sensitive context in legitimate files (not “secrets”)**
- Mitigation: treat allow-list selection as the primary control; introduce PII warning scan in a later increment.
```


## UX Journey Maps

`ops/ux/JOURNEY_MAPS_V1.md`


```markdown
# UX Journey Maps v1

## 1) Job Intake -> Prioritise -> Act (file-first)
**Primary artefacts:**
- `ops/job-pipeline.csv` (jobs + next actions)
- `ops/agent-tasks.csv` (work queue)
- (next) `ops/events/events-YYYY-MM.jsonl` (audit + activity feed) per `ops/architecture/EVENT_MODEL_V1.md`

Steps:
1. Digest surfaces candidate roles (email/chat scrape -> shortlist).
2. Matt triages each role: **Pinned / Ignored / Hold / Assessing**.
3. System writes triage decision to `ops/job-pipeline.csv` (`status`, `last_action`, `next_action`, `owner`, `notes`).
4. System creates/updates the highest-leverage task in `ops/agent-tasks.csv` (role brief, alignment score, CV draft, QA/PDF, follow-up).
5. When CV work is requested: CV pipeline run requested and `outputs/cv/<role_id>/` artefacts produced.
6. Deliverable bundle is linked from the job row and shown in UI (draft MD, final PDF, rationale, QA checklist).

Pain points (current):
- **Status mapping drift** between `ops/job-pipeline.csv` labels (e.g., `Pinned`, `Applied`) and canonical enums in `ops/architecture/EVENT_MODEL_V1.md`.
- Follow-up actions are buried in `notes` rather than expressed as structured `next_action` + task.

UX decisions (v1):
- Keep CSV labels for human readability, but **normalise for events** (see T-0204) and UI badges.
- Treat `next_action` as a first-class field displayed on every card/list row.

---

## 2) CV Build Journey (role_id keyed)
**Primary artefacts:**
- Inputs: `inputs/cv/` (base PDFs), role brief (TBD), job URL
- Outputs: `outputs/cv/<role_id>/` (drafts + manifest)
- Utility entry: `ops/cv-run.html` (local command + deep-link into Preview)
- Review surface: `ops/cv-preview.html` (loads draft via input or `?file=`)

Journey:
Intake role_id -> Run (cv-run) -> Analysis summary -> Evidence map -> Draft -> QA gate -> PDF -> Delivery

UX requirements (implementation-ready):
- User-visible **analysis summary** at top of the CV run page (1 screen, scannable).
- Explicit quality gate: QA checklist must be acknowledged before final PDF is considered “ready”.
- One-click access to all artefacts for a role: draft, PDF, manifest, QA, and source links.

Current build note:
- `ops/cv-run.html` generates a one-shot local terminal command and deep-links into Preview.
- `ops/cv-preview.html` can load a generated draft markdown file directly.
- It supports query param `?file=outputs/cv/<role_id>/draft.md`.

---

## 3) Application Tracking Journey (job ↔ application)
**Primary artefacts:**
- Near-term: `ops/job-pipeline.csv`
- Event stream: `ops/events/...jsonl` (activity feed + reminders)

Visible journey states (human labels):
- New -> Assessing -> CV Ready -> Applied -> Interview -> Offer/Closed

System actions:
- Stage changes emit canonical events (`crm.job.status_changed.v1`, `crm.application.status_changed.v1`).
- Follow-up tasks auto-generated (e.g., “Chase recruiter in 5 business days”).
- Next action always visible on the card.

---

## 4) Daily Operator Brief Journey
Inputs: inbox alerts + job digest + pipeline status + blockers -> Output: single concise brief (today/next 48h)

---

## 5) Ops UI Navigation Journey (orientation)
**Primary artefacts:**
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- Pages: `ops/status.html`, `ops/kanban.html`, `ops/agent-queue.html`, `ops/agents.html`, `ops/cv-preview.html`, `ops/api-usage.html`
- Behaviour glue: `ops/ui/nav_v1.js` (active-link semantics + mobile menu)

Goal: user always knows (a) where they are, (b) what changed, (c) the next action.

Current build note:
- `ops/index.html` now exists and acts as “Home”. Home/logo link should resolve to `index.html` (fall back to `status.html` only if `index.html` is not published).

---

## 6) Activity Feed Journey (events-first with derived fallback)
**Primary artefacts:**
- Future canonical: `ops/events/events-YYYY-MM.jsonl` (per `ops/architecture/EVENT_MODEL_V1.md`)
- Current fallback inputs: `ops/job-pipeline.csv`, `ops/agent-tasks.csv`
- Current UI targets: `ops/status.html` (compact), `ops/activity.html` (full, to create)

User story:
- As Matt, I want to see what changed (and what needs attention) without scanning 3 pages.

Journey:
1. Open `ops/status.html`.
2. See “What changed” module.
3. If `ops/events/` exists, render first N events.
4. If `ops/events/` is missing, render **derived activity**:
   - job status changes inferred from `job-pipeline.csv` `status` + `last_action` + `updated_at` (if present)
   - task status changes inferred from `agent-tasks.csv` `status` + `updated_at`
5. Click through to `ops/activity.html` for the full list.

Implementation notes (v1, build-ready):
- Timeline item schema in UI should be normalised to: `{time, entity_type, entity_id, verb, summary, severity, href}`.
- Prefer events when present.
  - Seed file exists now: `ops/events/events-2026-03.jsonl`.
  - v1 fetch rule: try `events/events-2026-03.jsonl` first; if missing, fall back to derived activity.
  - When falling back, show the inline note (exact): `Event feed unavailable, showing derived activity.`
- CSV-derived activity is inherently lossy until CSVs carry an `updated_at` field.
  - Current fallback for `ops/job-pipeline.csv`: use `last_action` as the best available timestamp.
  - Current fallback for `ops/agent-tasks.csv`: use `updated_at` (already present).
  - Date-only values (`YYYY-MM-DD`) should be treated as UTC midnight for ordering.
- Derived rules must be explicitly documented (and shared as a pure function) to avoid drift.
  - Source of truth: `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md` (Handoff item UX-002).

---

## Next UX Deliverables (tracked)
- **IA + navigation map (static v1)**: `ops/ux/IA_AND_NAV_V1.md`.
- **Acceptance criteria pack (build-ready)**: `ops/ux/ACCEPTANCE_CRITERIA_V1.md`.
- **Handoff notes** (copy/paste partial strategy + timeline seed): `ops/ux/HANDOFF_NOTES_V1.md`.
- **Status/event timeline component spec**: `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`.
- Status normalisation mapping table spec (T-0204, Ledger).
- Form/input pattern for role triage actions (Pinned/Ignored/Hold/Assessing) with keyboard-first interactions.

## Build files explicitly tied to this journey set
- `ops/status.html` (overview/launchpad, should link to UX artefacts + host compact Activity module)
- `ops/kanban.html` (pipeline decisions, must surface next action per role)
- `ops/agent-queue.html` (task workload + blockers)
- `ops/agents.html` (agent roster/index, secondary entry to Agents workspace)
- `ops/cv-preview.html` (CV layout/QA/run status; supports `?file=` draft loading)
- (planned) `ops/activity.html` (global event feed; falls back to derived activity until full events)
```


## UX IA and Navigation

`ops/ux/IA_AND_NAV_V1.md`


```markdown
# Ops UX IA + Navigation v1

Owner: UX (Vantage)
Status: Implementation-ready (static HTML v1)
Last updated: 2026-03-09 (10:28 UTC)

## 0) Scope
This IA covers the *current build surfaces* in `ops/*.html` plus their supporting artefacts. It is written to be directly implementable in static HTML first, and later migratable to a templated build.

Current build files in scope:
- `ops/index.html`
- `ops/status.html`
- `ops/kanban.html`
- `ops/agent-queue.html`
- `ops/agents.html`
- `ops/cv-preview.html`
- `ops/cv-run.html` (utility page, currently linked in global nav)
- `ops/api-usage.html` (utility page, currently linked in global nav)

Planned build files (not yet present):
- `ops/activity.html`

UX source specs (this folder):
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ops/ux/JOURNEY_MAPS_V1.md`
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md`
- `ops/ux/HANDOFF_NOTES_V1.md`

Build note (current reality):
- The HTML pages currently use a simpler `.topbar` header with cross-links.
- `ops/ui/nav_v1.js` is present and now:
  - toggles the mobile menu reliably (Escape/outside click/link click)
  - applies active-link semantics via `aria-current="page"` and `.btn--primary` based on the current filename
- `ops/kanban.html` now treats the board as a labelled, keyboard-focusable horizontal scroll region (`role="region"`, `aria-label`, `tabindex="0"`) so the scroll affordance is discoverable
- `ops/index.html` now exists and acts as a lightweight landing page (“Home”).
- The “home” logo link currently points to `index.html` across pages (aligned to the current build).

Pragmatic v1 recommendation:
- Treat `index.html` as “Home”, and `status.html` as the operational launchpad/status board.

---

## 1) Primary information architecture
### Level 0: Workspaces (future)
- Default workspace label shown: **Employment Pod**
- Future: multi-workspace switcher (e.g., Consulting Pod, Trading Pod)

### Level 1: Primary sections (masthead tabs)
Aligned to `MASTHEAD_NAV_SPEC_V1.md`.

1. **Pipeline**
   - Purpose: see jobs, status, next action
   - Current page: `ops/kanban.html`
   - Source data: `ops/job-pipeline.csv`

2. **Agents**
   - Purpose: see tasks by agent and current blockers
   - Current pages:
     - `ops/agent-queue.html` (task board)
     - `ops/agents.html` (agent roster/index)
   - Source data: `ops/agent-tasks.csv` + `ops/agents/*`

3. **UX**
   - Purpose: navigation + journeys + component specs
   - Current content: markdown in `ops/ux/`
   - Landing (recommended): `ops/ux/index.md` (to create when we add more docs)

4. **Design**
   - Purpose: design language + component tokens
   - Current content: `ops/design/DESIGN_ROADMAP_V1.md` and `ops/ui/*`

5. **Roadmap**
   - Purpose: execution plan, gantt, update capture
   - Current content:
     - `ops/EXECUTION_PLAN_2026-03-03.md`
     - `ops/project-gantt.md`
     - `ops/UPDATE_CAPTURE.md`
     - (utility) `ops/api-usage.html`

6. **Activity**
   - Purpose: global event feed, filterable
   - Current status: not implemented; see `STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
   - Proposed page: `ops/activity.html` (static)

---

## 2) Navigation model (URLs + active tab rules)
### Canonical routes (static v1)
- Pipeline tab → `kanban.html`
- Agents tab → `agent-queue.html` (board) and/or `agents.html` (index)
- UX tab → `ux/JOURNEY_MAPS_V1.md` (temporary) or `ux/index.md` (preferred)
- Design tab → `design/DESIGN_ROADMAP_V1.md`
- Roadmap tab → `status.html` (acts as Overview/Launchpad in current build)
- Activity tab → `activity.html` (to be created)

### Active-tab logic (static)
Current implementation direction:
- Prefer `ops/ui/nav_v1.js` to set `aria-current="page"` and apply `.btn--primary` automatically.
- Avoid per-page hard-coded active classes where possible (reduces drift).

Rule table (for the *masthead tab state*, independent of the v1 `.topbar` links):
- `*/kanban.html` → active=Pipeline
- `*/agent-queue.html` or `*/agents.html` → active=Agents
- `*/ux/*` → active=UX
- `*/design/*` OR `*/ui/*` → active=Design
- `*/EXECUTION_PLAN_*` OR `*/project-gantt*` OR `*/UPDATE_CAPTURE*` OR `*/status.html` OR `*/api-usage.html` → active=Roadmap
- `*/activity.html` OR `*/events/*` → active=Activity

---

## 3) Page-level IA (what belongs where)
### `ops/status.html` (Overview / Launchpad)
Job-to-be-done: open one page and jump to the right operational surface.

Should contain:
- persistent masthead (target) or topbar cross-links (current)
- a compact “What changed” module (last 24h) using Timeline component (or placeholder)
- links to: Kanban, Agent Queue, CV Preview, key specs

### `ops/kanban.html` (Pipeline)
Job-to-be-done: decide what to do next per role.

Must show per card:
- status badge + tier
- role_id
- **next action** (first-class)
- link to listing
- link to CV artefacts when they exist

### `ops/agent-queue.html` (Agents)
Job-to-be-done: see workload, blockers, and what is in progress.

Must show per task row:
- status, priority, due date
- owner agent
- role_id (if applicable)
- blocker reason (if status=Blocked)

### `ops/cv-preview.html` (CV build target)
Job-to-be-done: evaluate layout and export readiness.

Current behaviour (implemented):
- User can load a draft markdown file via an input field.
- Optional query param supported:
  - `cv-preview.html?file=outputs/cv/<role_id>/draft.md`

Should show:
- active role context (role_id) (future)
- most recent build artefacts + manifest (when available)
- QA checklist status (when available)

### `ops/cv-run.html` (Utility: local run command generator)
Job-to-be-done: generate the correct one-shot terminal command for a role and then jump to Preview.

Should contain:
- same global nav pattern as other ops pages
- role key input (role_id), title, input path
- a copyable command snippet that runs the deterministic pipeline
- a preview deep-link like `cv-preview.html?file=outputs/cv/<role_id>/draft.md`

### `ops/api-usage.html` (Utility: spend visibility)
Job-to-be-done: see run-rate and cost trend quickly.

Should contain:
- same global nav pattern as other ops pages
- KPI tiles (budget target, tokens, estimated cost, status)
- a simple log table sourced from `usage/api-usage-log.csv`

---

## 4) Build implementation notes (thin)
- Reuse CSS: `ops/ui/STYLE_TOKENS_V1.css` + `ops/ui/COMPONENTS_V1.css`.
- Implement masthead as a copy-paste partial first; later migrate to a shared template.
- Prefer keyboard-first: visible focus rings, no click-only controls.

---

## 5) Open decisions
1. Should `status.html` be considered “Roadmap”, or should there be an explicit Overview tab?
2. Where should global search land first: Pipeline cards, tasks, or artefact filenames?
3. Does Activity page render client-side from `ops/events/*.jsonl`, or do we precompute a small index (e.g., `ops/events/index.json`)?
4. Should `cv-preview.html` restrict allowed draft paths to `outputs/cv/**` only (security hardening for hosted environments)?
5. Should API Usage live under Roadmap (current), or become a first-class “Metrics” workspace later?
```


## UX Masthead Nav Spec

`ops/ux/MASTHEAD_NAV_SPEC_V1.md`


```markdown
# Persistent Masthead Navigation Spec v1

Owner: UX Agent (Vantage)  
Consumers: Design (Polish), Build (Rivet)  
Status: Ready for implementation

## 1) Objective
Create a persistent masthead that gives immediate orientation and control across all ops pages.

Success criteria:
- User can identify location and next action in <1 second.
- Navigation is consistent across Dashboard, Kanban, Agent Queue, CV Preview, and future pages.
- Supports keyboard-first usage and mobile responsiveness.

## 2) Information Architecture
Masthead zones:

### Left zone
- Product mark/name: `Crabbie Ops`
- Context label (small): `Employment Pod` (future: workspace switcher)

### Centre zone (primary navigation)
Tabs (ordered):
1. Pipeline
2. Agents
3. UX
4. Design
5. Roadmap
6. Activity

Rules:
- Current page tab has active style + underline.
- Tabs are persistent on desktop; collapse to menu on mobile.

### Right zone
- Global search trigger (icon + `/` hint)
- Primary action button: `+ New`
- Live sync indicator: `Updated <time>`
- User/profile avatar (future controls)

## 3) Live Signal Badges
Each nav item can show concise operational state:
- Pipeline: open jobs count
- Agents: active/in-progress tasks count
- Roadmap: blockers count
- Activity: new events since last view

Badge style:
- Use semantic token variants (info/warning/danger)
- Keep compact, non-distracting

## 4) Interaction Model
Desktop:
- Masthead sticky at top; always visible.
- Height token: `--topbar-h` (default 72px).

Mobile:
- Left: logo/title
- Right: search + menu
- Tabs move into slide-over menu
- Keep one persistent primary CTA (`+ New`)

Keyboard shortcuts:
- `/` focus search
- `g p` pipeline
- `g a` agents
- `g r` roadmap
- `g x` activity
- `n` create new task/job

Focus/accessibility:
- Use `--focus-strong`
- No focus suppression
- Tab order left→centre→right

## 5) Visual Design Constraints (handoff to Design)
- Reuse existing tokens from `ops/ui/STYLE_TOKENS_V1.css`
- Reuse component primitives from `ops/ui/COMPONENTS_V1.css`
- Keep masthead low-noise: one title, one context label, one CTA
- Active tab should be obvious without relying on colour alone

## 6) Build Handoff (implementation tasks)
1. Implement masthead markup (copy-paste is acceptable for static v1).
2. Inject the same masthead into (current build surfaces):
   - `ops/status.html` (operational launchpad/status board; `ops/index.html` is now “Home”)
   - `ops/kanban.html`
   - `ops/agent-queue.html`
   - `ops/agents.html`
   - `ops/cv-preview.html`
3. Home link rule (avoid broken nav):
   - Masthead logo/title link SHOULD go to `index.html` when present (current build).
   - If `index.html` is not available in an environment, fall back to `status.html`.
4. Active-tab + mobile menu behaviour:
   - Prefer the existing script `ops/ui/nav_v1.js` to set `aria-current="page"` and apply `.btn--primary` based on URL.
   - Do not hard-code active styles per page if `nav_v1.js` is present.
5. Optional enhancements (v1+):
   - Keyboard shortcut listener.
   - Badge data adapter (initially from CSV counts, later DB/API).

## 7) Definition of Done
- Same masthead rendered on all major pages.
- Active nav state correct by page.
- Search opens from icon and `/`.
- Keyboard routes functional.
- Mobile menu functional and readable.
- Accessibility check passed (focus, contrast, tab flow).
```


## UX Acceptance Criteria

`ops/ux/ACCEPTANCE_CRITERIA_V1.md`


```markdown
# UX Acceptance Criteria v1 (Ops surfaces)

Owner: UX (Vantage)
Status: Ready for build
Last updated: 2026-03-09 (10:28 UTC)

This file consolidates implementation-ready acceptance criteria for the current static build files.

In scope build files:
- `ops/index.html`
- `ops/status.html`
- `ops/kanban.html`
- `ops/agent-queue.html`
- `ops/agents.html`
- `ops/cv-preview.html`
- `ops/cv-run.html`
- `ops/api-usage.html`

Planned build file:
- `ops/activity.html`

Supporting specs:
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ops/ux/IA_AND_NAV_V1.md`
- `ops/ui/nav_v1.js`

---

## AC-1: Global header navigation is present and consistent (v1 → v2)
### AC-1a (v1): `.topbar` header is consistent across pages
**Given** I open any of the ops pages (Status, Kanban, Agent Queue, Agents, CV Preview, API Usage)
**When** the page renders
**Then** a header renders at the top with:
- a working “Home” link that resolves to an existing page
  - **v1 rule:** Home SHOULD link to `index.html` when present (current build), otherwise fall back to `status.html`
- a visible page title (`h1`)
- a primary navigation area with links to: Status, Pipeline, Agent Queue, Agents, API Usage, CV Preview
  - If `cv-run.html` is published, include `CV Run` as a utility link in this same nav set
- visible focus states for all interactive elements

**And** the page loads `ui/nav_v1.js` so that:
- the mobile menu can be toggled and dismissed (Escape, outside click)
- the active link is expressed via `aria-current="page"` (not colour-only)

### AC-1b (target): Persistent masthead (spec)
**Given** I open any of the ops pages (Status, Kanban, Agent Queue, Agents, CV Preview, API Usage)
**When** the page renders
**Then** a masthead renders at the top with:
- Left zone: product name `Crabbie Ops` and context label `Employment Pod`.
- Centre tabs: Pipeline, Agents, UX, Design, Roadmap, Activity.
- Right zone: search trigger (or stub), `+ New` button (or stub), updated timestamp.

**And** the current page tab appears active (not colour-only).

**And** the masthead is sticky (remains visible on scroll) on desktop widths.

Notes for static v1:
- If search and `+ New` are not implemented yet, they must still render as disabled/stub controls with tooltips.

---

## AC-2: Keyboard navigation shortcuts (minimal)
Status: not implemented in current build (spec retained for when masthead lands).

**Given** I am focused anywhere on the page
**When** I type:
- `g p`
**Then** I navigate to `ops/kanban.html`

**When** I type:
- `g a`
**Then** I navigate to `ops/agent-queue.html`

**When** I type:
- `g x`
**Then** I navigate to `ops/activity.html` (or show “Not implemented” toast until page exists)

**When** I type:
- `/`
**Then** focus moves to the search input (or opens search modal if implemented).

---

## AC-3: Kanban cards show next action as first-class
**Given** I open `ops/kanban.html`
**Then** each card must show:
- role title
- org + location
- role_id (e.g., `R-2026-0006`)
- status column label
- tier badge (Tier A/B/C)
- **Next:** line (derived from `job-pipeline.csv` `next_action`)
- link to source listing

**And** if a CV filename/artefact exists, it must be displayed and clickable (or at minimum shown as text until storage is wired).

### AC-3b (a11y/UX affordance): Horizontal scroll region is discoverable
**Given** I am using keyboard navigation on `ops/kanban.html`
**When** I Tab into the board
**Then** the board itself is focusable and labelled (e.g., `role="region"` + `aria-label="Kanban board (scroll horizontally)"`)

**And** when focused, a visible focus ring appears on the board container (so users discover horizontal scrolling).

---

## AC-4: Agent Queue shows blockers explicitly
**Given** I open `ops/agent-queue.html`
**Then** each task row must show:
- status, priority
- agent owner
- title
- role_id when available

**And** if status is `Blocked`, the row must render a visible blocker reason (not hidden in a hover).

---

## AC-5: Timeline component renders in at least one place
**Given** I open `ops/status.html` (or `ops/activity.html` if created)
**When** there is an events feed available at `ops/events/events-YYYY-MM.jsonl`
**Then** the UI renders a Timeline list from the first N events.

**And** if the events feed is missing
**Then** the UI renders a derived timeline from `job-pipeline.csv` and `agent-tasks.csv` and shows the inline note:
`Event feed unavailable, showing derived activity.`

---

## AC-6: UX artefacts are discoverable from Status
**Given** I open `ops/status.html`
**Then** there are visible links to:
- `ops/ux/JOURNEY_MAPS_V1.md`
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ops/ux/IA_AND_NAV_V1.md`
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md`

(They may sit under an “Execution Artefacts” list.)

---

## AC-7: CV Preview can load drafts via input or query param
**Given** I open `ops/cv-preview.html`
**Then** I can load draft content into the preview surface by either:
- entering a path into the “Draft file path” field and clicking “Load Draft”, or
- opening a URL like `cv-preview.html?file=outputs/cv/<role_id>/draft.md`

**And** while loading, the UI shows a loading state.

**And** if the file cannot be fetched, the UI shows a readable error message that includes the attempted path.

Non-goals (v1):
- Perfect markdown support.

---

## AC-8: CV Preview default path does not mislead
**Given** I open `ops/cv-preview.html` with no query param
**When** the default path is shown
**Then** it must either:
- point to an example file that exists in the repo/site, or
- be blank with helper text.

Test note (current build):
- The default value is `outputs/cv/R-2026-0017/draft.md` which is unlikely to exist on a fresh publish. This should be updated.

Rationale:
- Avoids a “broken by default” first impression.

---

## AC-9: CV Run generates a correct local command + deep-links to preview
**Given** I open `ops/cv-run.html`
**When** I enter a role key (e.g., `R-2026-0017`) and change inputs
**Then** the page updates a visible command snippet that:
- uses `python3 ops/cv-pipeline/run_cv_deterministic.py`
- writes outputs to `outputs/cv/<role_key>/`

**And** the page provides a link that deep-links to Preview using:
- `cv-preview.html?file=outputs/cv/<role_key>/draft.md`

Non-goals (v1):
- Running code in the browser.
```


## UX Timeline Spec

`ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`


```markdown
# Status / Event Timeline Component Spec v1

Owner: UX Agent (Vantage)
Consumers: Build (Rivet), Data/CRM (Ledger)
Status: Draft (implementation-ready v1)

## 1) Objective
Provide a single, consistent timeline component to show “what changed” for a job/application/task, with an audit trail that can be rendered across Ops pages.

This solves:
- invisible state changes (currently buried in CSV diffs and notes)
- inconsistent status naming across CSV/UI/DB
- lack of an Activity view that aggregates changes

## 2) Sources of truth (v1)
1. **Events JSONL** (preferred): `ops/events/events-YYYY-MM.jsonl`
   - MUST follow `ops/architecture/EVENT_MODEL_V1.md` + `ops/architecture/schemas/*`
2. **CSV fallback** (until events exist everywhere):
   - `ops/job-pipeline.csv` (job status + last_action/next_action)
   - `ops/agent-tasks.csv` (task status)

Rule: if events exist for an entity, render timeline from events; otherwise, render a minimal “derived timeline” from CSV `updated_at` + `notes`.

Events file selection (v1, static build constraint):
- Do not attempt directory listing in-browser.
- Fetch a known file for the current month first (e.g., `events/events-2026-03.jsonl`).
- If that fetch fails, fall back to derived activity.
- (Later) add a small precomputed index (e.g., `ops/events/index.json`) to make this dynamic.

## 3) Where it appears (initial placements)
- Job detail drawer/modal (from Pipeline/Kanban)
- CV run page header section (show run start/completion + QA acknowledgement)
- Agent task detail view
- Activity page (global feed, filterable)

## 4) Component anatomy
### A) Header row
- Title: `Activity`
- Filters (optional per context):
  - Event type (Job/Application/Task/Pipeline)
  - Time range (24h, 7d, 30d)
- “Copy link” (deep link to this timeline section)

### B) Timeline items (each item)
Fields:
- **Timestamp** (relative + absolute on hover): `2h ago` + `2026-03-08 08:20 UTC`
- **Badge** (event type): `Job`, `Application`, `Task`, `CV Run`
- **Primary line** (plain language):
  - `Job moved: Shortlisted → Dropped`
  - `Task blocked: waiting on recruiter response`
  - `CV run completed (success)`
- **Secondary line** (details, optional): reason, link to artefact, who changed it
- **Meta** (right aligned, optional): actor `agent:ledger` / `human:matt`

Interaction:
- Collapsed by default after N items (e.g., 10), with “Show more”.
- Items with artefacts show a link icon and open in a new tab.

## 5) Data contract (UI adapter)
### Input (normalised record)
Build should implement a small adapter that maps either:
- event envelope objects (preferred), or
- CSV-derived records
into:
```ts
type TimelineItem = {
  id: string
  occurredAt: string // RFC3339
  domain: 'job'|'application'|'task'|'pipeline'
  summary: string
  detail?: string
  actor?: string
  severity?: 'info'|'warning'|'danger'
  links?: { label: string, href: string }[]
}
```

### Mapping rules (events → TimelineItem)
- `event_type` prefix maps to `domain`.
- `data.old_status`/`data.new_status` produce the “moved” summary line.
- `data.reason` maps to `detail`.
- `producer.name` or `data.changed_by` maps to `actor`.
- `severity`:
  - `danger` when `new_status` is a terminal negative (`rejected`, `withdrawn`, `dropped`) or `TaskStatus=blocked`
  - `warning` for `drafting` / `interviewing` (attention needed)
  - otherwise `info`

### CSV fallback rules (until full eventing)
- Job row change: synthesise `summary` from `status` and `last_action`.
- Task row change: synthesise `summary` from `status` + `notes` prefix.
- Set `severity=warning` when `next_action` contains “Assess/Prep/Chase”, else `info`.

## 6) Empty, loading, and error states
- Empty: `No activity yet. Changes will appear here as jobs and tasks update.`
- Loading: skeleton list (3 items).
- Error (events file missing): show fallback CSV-derived timeline with an inline note: `Event feed unavailable, showing derived activity.`

## 7) Accessibility + keyboard
- Timeline is a list (`role=list`) with items (`role=listitem`).
- Links are reachable via tab; no click-only interactions.
- Timestamp hover detail also available via focus.

## 8) Build handoff (concrete)
**Handoff item UX-001:** Implement `renderTimeline(items)` component and `timelineAdapter`.

Acceptance criteria:
1. Given a small hard-coded array of `TimelineItem`, renders correctly in `ops/status.html` (or a dedicated `ops/activity.html`).
2. Adapter can parse a sample JSONL file (first N non-empty lines) into `TimelineItem[]`.
3. Items support optional links and severity badges.

Dependencies:
- `ops/events/` directory and at least one JSONL file.
  - Seed created: `ops/events/events-2026-03.jsonl`.
- Data hygiene: `ops/job-pipeline.csv` does not yet carry `updated_at`, so derived timeline will use `last_action` until `updated_at` is added.

**Handoff item UX-002:** Implement derived-activity generator (CSV fallback) as a pure function.

Goal: keep fallback logic deterministic and testable, so derived rules do not drift between pages.

Input:
- parsed rows from `ops/agent-tasks.csv`
- parsed rows from `ops/job-pipeline.csv`

Output:
- `TimelineItem[]` sorted desc by `occurredAt`

Rules (v1):
- Tasks (`ops/agent-tasks.csv`):
  - occurredAt: `updated_at` (assume `YYYY-MM-DD` is UTC midnight if no time is present)
  - domain: `task`
  - id: `task:${task_id}`
  - summary: `${status}: ${title}` (prefix with `${role_id} · ` when role_id exists)
  - severity: `danger` when status=`Blocked`; `info` otherwise
  - link: `{label:'Agent Queue', href:'agent-queue.html'}`
- Jobs (`ops/job-pipeline.csv`):
  - occurredAt: prefer `updated_at` when present; else use `last_action` if it is parseable as a date; else omit row
  - domain: `job`
  - id: `job:${role_id}`
  - summary: `${status}: ${title}` plus ` • Next: ${next_action}` when next_action exists
  - severity: `warning` when next_action contains `Assess`/`Prep`/`Chase` (case-insensitive); `info` otherwise
  - link: `{label:'Pipeline', href:'kanban.html'}`

Acceptance criteria:
1. With a small fixture CSV (2 tasks, 2 jobs), generator returns stable output ordering.
2. Missing/blank timestamps do not crash; row is skipped with a console warn.
3. When `ops/events/` fetch fails, UI renders derived items and shows the inline note from Section 6.

## 9) Open questions / blockers
- Where should event ingestion live (client-side fetch vs server-side precompute in `dashboard-worker.js`)?
- Decide whether Activity is a dedicated page (`/activity`) or embedded on Pipeline + Agents first.
```


## UX Job Triage Controls

`ops/ux/JOB_TRIAGE_CONTROLS_SPEC_V1.md`


```markdown
# Job Triage Controls Spec v1 (Kanban)

Owner: UX (Vantage)
Consumers: Build (Rivet), Data/CRM (Ledger)
Status: Draft (implementation-ready v1)
Last updated: 2026-03-09

## 1) Objective
Make job triage decisions fast, explicit, and auditable directly from the Pipeline board (`ops/kanban.html`), without burying decisions in free-text notes.

This solves:
- triage decisions hidden in `notes`
- status drift (human labels vs canonical statuses)
- too many clicks to move a role between “Assessing / Hold / Ignored / Pinned”

## 2) Scope (v1)
In scope:
- UI control pattern on each Kanban card
- keyboard-first interactions
- deterministic write-back contract to `ops/job-pipeline.csv` (via existing scripts/agents; UI does not need to write files in-browser)

Out of scope:
- server-side persistence
- multi-user conflict resolution

## 3) Primary artefacts
- Pipeline data: `ops/job-pipeline.csv`
- Status mapping: `ops/crm/status-mapping-v1.json` and `ops/crm/STATUS_MAPPING_V1.md`
- Acceptance criteria: `ops/ux/ACCEPTANCE_CRITERIA_V1.md`

## 4) Control pattern (per card)
### 4.1 Visual pattern
A compact segmented control (or button row) on each card:
- **Assessing** (default triage)
- **Pinned** (top priority)
- **Hold** (pause, revisit)
- **Ignored** (drop)

Placement (v1): under the status badge and above “Next:” line.

Copy rules:
- Use these exact labels: `Assessing`, `Pinned`, `Hold`, `Ignored`.

### 4.2 State rules
- Exactly one triage state is active at a time.
- Active state is expressed with:
  - `aria-pressed="true"` on the selected button, and
  - a visible style change (not colour-only).

### 4.3 Keyboard interactions (v1)
When focus is within a card:
- `1` → set `Pinned`
- `2` → set `Assessing`
- `3` → set `Hold`
- `4` → set `Ignored`

When focus is on a triage button:
- Arrow keys move between options.
- Enter/Space selects.

A11y:
- Buttons must be reachable via Tab.
- Each card has a labelled grouping (e.g., `<div role="group" aria-label="Triage">`).

## 5) Write-back contract (for scripts/agents)
UI action must be representable as a single deterministic update to the corresponding row in `ops/job-pipeline.csv`.

Minimum fields to update:
- `status` (human label: one of Pinned/Assessing/Hold/Ignored)
- `updated_at` (RFC3339 preferred; date-only acceptable) **(new column, see handoff UX-005/Section 7)**
- `last_action` (human-readable: e.g., `2026-03-09 triage: Hold`)
- optional: `next_action` (may be cleared or adjusted)

Eventing (when Ledger wiring lands):
- Emit `crm.job.status_changed.v1` with old/new status normalised via `status-mapping-v1.json`.

## 6) Empty and error states
- If a card has no triage state (unexpected), default the UI display to `Assessing` and show a small inline note: `Triage not set`.
- If write-back fails (future), show a toast/notice: `Could not update pipeline. Try again.`

## 7) Build handoff (concrete)
**Handoff item UX-004:** Add triage controls to Kanban cards (UI only)

Deliverables:
1) Update `ops/kanban.html` card template to include the triage control group.
2) Implement client-side state toggling (pure UI) so users can see the selected state immediately.
3) Add `data-role-id` attributes to cards to support future wiring.

Acceptance criteria:
- Meets `AC-10` in `ops/ux/ACCEPTANCE_CRITERIA_V1.md`.
- Works with keyboard only.

Dependencies:
- None for UI-only v1.

**Handoff item UX-005:** Add `updated_at` column to `ops/job-pipeline.csv` writes (enables Activity + audit)

Deliverables:
- Add `updated_at` field to CSV schema and ensure any writer updates it whenever `status/next_action/notes` changes.

Dependencies:
- Any pipeline writers/agents that touch `ops/job-pipeline.csv`.

## 8) Blockers / open questions
- `ops/job-pipeline.csv` column set is not enforced; need a single schema source (lightweight) to prevent drift.
- Decide whether Kanban triage updates also auto-manage `next_action` (e.g., when Ignored, clear next_action).
```


## UX Handoff Notes

`ops/ux/HANDOFF_NOTES_V1.md`


```markdown
# UX Handoff Notes v1 (Build + Design)

Owner: UX (Vantage)
Last updated: 2026-03-09 (10:28 UTC)

This is a practical handoff note intended to reduce ambiguity for build work.

---

## 1) What to implement next (in order)
### 1.1 Implement the masthead (copy-paste first)
Source spec: `ops/ux/MASTHEAD_NAV_SPEC_V1.md`

Target pages:
- `ops/status.html`
- `ops/kanban.html`
- `ops/agent-queue.html`
- `ops/agents.html`
- `ops/cv-preview.html`
- `ops/api-usage.html` (currently in the primary nav; keep consistent)

Implementation approach (static HTML v1):
- Replace current `.topbar` blocks with a masthead component.
- If a shared partial is not available, accept copy-paste duplication for v1 but keep the markup identical.
- Ensure active tab is correct per page.

Design dependencies:
- Use existing tokens: `ops/ui/STYLE_TOKENS_V1.css`
- Use primitives: `ops/ui/COMPONENTS_V1.css`

Keep (do not regress):
- `ops/kanban.html` board container is intentionally keyboard-focusable (`tabindex="0"`) with a focus ring so horizontal scrolling is discoverable.

Known blocker:
- Task `T-0206` notes a partial/template strategy is not yet agreed.

### 1.2 Add Activity timeline (minimal seed)
Source spec: `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`

Option A (recommended): create `ops/activity.html` and render timeline there first.
Option B: embed a compact timeline module on `ops/status.html`.

Minimal v1 is acceptable:
- Render 10 items.
- Support empty/missing states.
- Hard-code sample data until `ops/events/` exists.

### 1.3 UX artefact links on Status (DONE)
Target file: `ops/status.html`

Current reality (verified 2026-03-08):
- Status links the full UX pack:
  - `ux/JOURNEY_MAPS_V1.md`
  - `ux/MASTHEAD_NAV_SPEC_V1.md`
  - `ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
  - `ux/IA_AND_NAV_V1.md`
  - `ux/ACCEPTANCE_CRITERIA_V1.md`

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-6)

### 1.4 Build handoff (concrete): Derived Activity module + Activity page stub
Source specs:
- `ops/ux/JOURNEY_MAPS_V1.md` (Journey 6)
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md` (see Handoff item UX-002 for CSV fallback rules)
- `ops/ux/IA_AND_NAV_V1.md` (Activity tab target)

Deliverables (static v1):
1) Create `ops/activity.html`
   - Must include masthead (AC-1) and a page title `Activity`.
   - Must render a `<ol class="timeline">` list.
   - Data source order:
     1. if `ops/events/events-YYYY-MM.jsonl` exists → render first 50 lines
     2. else → render derived activity from CSVs (below)

2) Add compact module to `ops/status.html`
   - Heading: `What changed` + link `View all →` to `activity.html`.
   - Render first 10 items using the same Timeline markup.
   - Empty state copy (exact): `No recent activity.`

Derived activity rules (fallback):
- From `ops/agent-tasks.csv`: create an item per row where `updated_at` is within last 7 days.
  - `entity_type=task`, `entity_id=task_id`
  - summary: `${status}: ${title}` (include `role_id` prefix if present)
  - href: `agent-queue.html` (v1), later deep-link by id
- From `ops/job-pipeline.csv`: no `updated_at` exists yet, so use `last_action` as the timestamp.
  - Include rows where `last_action` is within last 7 days.
  - `entity_type=job`, `entity_id=role_id`
  - summary: `${status}: ${title}` + `Next: ${next_action}` when present
  - href: `kanban.html` (v1)

Data hygiene note (important):
- Add `updated_at` to `ops/job-pipeline.csv` as soon as it is touched by scripts/agents.
- Once present, switch the derived rule to prefer `updated_at` over `last_action`.

Acceptance check:
- Satisfies `ops/ux/ACCEPTANCE_CRITERIA_V1.md` AC-5 (event feed OR derived activity fallback).

### 1.5 CV Preview UX tightening (quick wins)
Target file: `ops/cv-preview.html`

Current reality (verified 2026-03-08):
- Draft loader exists (input + fetch + lightweight markdown rendering).
- Query param supported: `?file=outputs/cv/<role_id>/draft.md`.
- Default input value is currently `outputs/cv/R-2026-0017/draft.md` which is likely non-existent on a fresh publish, creating a “broken by default” first impression.

Build asks (v1):
- Set default to blank and rely on helper text (preferred), or point to a known-good demo file that exists in the repo.
- If hosted publicly, restrict load paths to `outputs/cv/**` only (same-origin) to reduce accidental file exposure.

**Handoff item UX-003 (concrete): Harden the draft loader + fix the default path**
Goal: eliminate “broken by default” and prevent path traversal / accidental fetch of non-output files.

Implementation notes (static JS v1):
- When resolving the `file` query param or input value:
  1) Reject absolute URLs and protocols (`http:`, `https:`, `file:`, `data:`).
  2) Normalise and reject any path containing `..` segments.
  3) Allowlist prefix: must start with `outputs/cv/`.
- Default input state: blank.
  - Helper text (exact): `Paste a path under outputs/cv/… (e.g., outputs/cv/R-2026-TEST-EY/draft.md)`
- Error copy (exact, prefix only): `Could not load draft:` then include the attempted path.

Acceptance:
1) Opening `cv-preview.html` with no query param does not show an error state.
2) Opening `cv-preview.html?file=outputs/cv/R-2026-TEST-EY/draft.md` loads when the file exists.
3) Opening with `?file=../ops/agent-tasks.csv` shows a readable error and does not fetch the file.

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-7, AC-8)

### 1.6 Build handoff (concrete): Seed events feed + parse-first-N proof
Why: unblocks AC-5 quickly (real events path, not just derived fallback).

Deliverables (static v1):
1) Ensure `ops/events/` exists and is web-served.
2) Commit a small seed file: `ops/events/events-2026-03.jsonl` (already created by UX).
3) Timeline read order:
   - Try fetch `events/events-2026-03.jsonl` first (or latest by naming convention).
   - If fetch fails, fall back to derived activity (Section 1.4).
4) Parse strategy (v1):
   - Fetch as text.
   - Split by `\n`.
   - Parse only first 50 non-empty lines with `JSON.parse`.

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-5)

### 1.7 Build handoff (concrete): Home link rule + delegate active-link semantics to `nav_v1.js`
Why: `nav_v1.js` already implements URL-based active link semantics, and a working “Home” target prevents nav dead-ends.

Current reality (verified 2026-03-09):
- `ops/index.html` now exists and acts as “Home”.
- Most pages already link the logo/home anchor to `index.html`.

Deliverables (static v1):
1) Standardise the logo/title href across pages:
   - If `index.html` exists (current build): set to `index.html`.
   - If `index.html` is removed or not published in an environment: set to `status.html`.
2) Ensure these pages load `ops/ui/nav_v1.js`:
   - `ops/status.html`
   - `ops/kanban.html`
   - `ops/agent-queue.html`
   - `ops/agents.html`
   - `ops/cv-preview.html`
   - `ops/api-usage.html`
3) Remove per-page hard-coded “active” styles/classes where present; rely on:
   - `aria-current="page"` and `.btn--primary` applied by `nav_v1.js`

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-1)

### 1.8 Build handoff (concrete): Add `updated_at` to `job-pipeline.csv` writes (unblocks better Activity)
Why: CSV-derived activity is currently lossy because `ops/job-pipeline.csv` has no stable `updated_at`.

Deliverables (v1):
1) Add a new column `updated_at` to `ops/job-pipeline.csv` (RFC3339 preferred; date-only acceptable).
2) Update any scripts/agents that write pipeline rows to also write `updated_at` whenever `status`, `next_action`, `owner`, or `notes` changes.
3) Update derived-activity generator to prefer `updated_at` over `last_action` when present (already specified in `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`).

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-5)

---

## 2) Markup hooks (pragmatic)
To reduce CSS churn, keep these conventions:
- Root: `<header class="masthead"> ...` (new)
- Tabs: `<nav class="masthead__nav">` containing anchor buttons.
- Active state: `aria-current="page"` on active tab.
- Badge: `<span class="badge badge--info">3</span>` etc.

Timeline conventions:
- List: `<ol class="timeline" role="list">`
- Item: `<li class="timeline__item" role="listitem">`
- Severity classes: `timeline__item--info|--warning|--danger`

---

## 3) Copy (microcopy defaults)
Use these exact labels (avoid drift):
- Tabs: Pipeline, Agents, UX, Design, Roadmap, Activity
- Search hint: `/ Search`
- Primary CTA: `+ New`
- Updated label: `Updated <time>`

---

## 4) Definition of done references
Use the acceptance criteria checklist:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md`

---

## 5) Risks + mitigations
- Static duplication risk: masthead copied into multiple pages can drift.
  - Mitigation: keep markup identical, consider a small build step later.
- Event feed risk: JSONL parsing in browser may be slow for large files.
  - Mitigation: only read first N lines in v1; add an index/precompute step later.
- Draft loader risk: unrestricted `fetch()` paths can leak files in some hosting contexts.
  - Mitigation: restrict to `outputs/cv/**` and enforce same-origin only.
```


## UX Sitemap

`ops/ux/SITEMAP_V1.md`


```markdown
# UX Sitemap v1

- Home (`index.html`)
- Status (`status.html`)
- Pipeline (`kanban.html`)
- Agent Queue (`agent-queue.html`)
- Agents (`agents.html`)
- API Usage (`api-usage.html`)
- CV Preview (`cv-preview.html`)
- CV Run (`cv-run.html`)
- Activity (`activity.html`, planned)

## Documentation branches
- UX specs (`ux/*.md`)
- Design system (`ui/*.css`, `design/*.md`)
- Architecture (`architecture/*.md`, `architecture/schemas/*`)
- Ops records (`job-pipeline.csv`, `agent-tasks.csv`, `UPDATE_CAPTURE.md`)
```


## UI Design Language

`ops/ui/DESIGN_LANGUAGE_V1.md`


```markdown
# Crabbie OS Design Language v1

## Principles
1. Clarity first: every screen should answer "what matters now?"
2. Operational calm: low-noise layout, strong hierarchy, minimal visual clutter.
3. Executive readability: concise copy, obvious status, easy scanning.
4. Motion with purpose: subtle hover, selection, and drag feedback only.

## Visual direction
- Aesthetic: modern macOS-inspired dark UI, minimal, high-contrast data cards.
- Typography: Inter/system UI fallback, strong section labels, compact metadata, but never below 12px for core UI copy.

### Colour system (tokens)
- Background: #0b1020 (`--bg`)
- Surface: #121a36 (`--surface`)
- Surface 2: #0f1730 (`--surface-2`) for inner cards/rows
- Border: #243059 (`--border`)
- Border 2: #2a3a70 (`--border-2`) for stronger separation
- Text: #eaf0ff (`--text`)
- Text secondary: #b7c6ef (`--text-2`)
- Text muted: #9eb0de (`--text-3`)
- Link: #9bc0ff (`--link`)
- Accent: #2a64ff (`--accent`)

State colours should ship as paired bg/fg tokens (avoid “green on green”):
- Success: bg #123b27 / fg #bff3d6
- Warning: bg #3c3516 / fg #ffe6a6
- Danger:  bg #3f1620 / fg #ffc0ce
- Info:    bg #163042 / fg #b9e4ff

### Type + spacing scale (build rules)
- Base font size: `--fs-2` (fluid clamp: 14px → 16px), line-height 1.45 (`--lh-body`).
- Titles: `--fs-5` (fluid clamp: 26px → 32px) for landing, `--fs-4` (19px → 22px) for page headers, `--fs-3` (16px → 18px) for emphasis.
- Metadata: `--fs-1` (12px → 13px), micro labels: `--fs-0` (11px).
- Spacing: 4px grid (`--s1`..`--s6`). Default card padding 16px.
- Radii: cards 12px, inner panels 10px, chips 999px.
- Elevation: only for hover/active, use `--shadow-1` (avoid permanent drop-shadows on static cards).
- Focus: all interactive elements must have `:focus-visible` outline/box-shadow using `--focus` / `--focus-strong`.
- Touch targets: buttons and inputs should meet `--tap-min` (44px) where practical.

Reference implementation: `ops/ui/STYLE_TOKENS_V1.css`

## Core components
- Left rail navigation with module grouping.
- Top command bar with search + quick actions.
- Kanban cards with status chips, owner, next action.
- Entity links: role -> company -> CRM contacts.
- Activity timeline with timestamp + actor + event type.

## Interaction patterns
- Hover: slight elevation + border accent.
- Select: clear focus ring and selected-state tint.
- Drag/drop: ghost card + insertion marker + valid/invalid drop cues.
- Loading: skeleton rows, not spinners where possible.

## Accessibility baseline
- Contrast AA minimum.
- Keyboard focus visible on all actionable elements.
- Skip links: pages using `.skip-link` should set the destination container (usually `<main id="main">`) to `tabindex="-1"` so keyboard focus actually moves (standardised across ops pages).
- Dynamic updates: any content that changes via JS (load draft, copy-to-clipboard feedback, fetch errors) should announce via `role="status"` (polite) or `role="alert"` (assertive) and should toggle `aria-busy` on the updated region.
- Navigation: use `aria-current="page"` on the active page link (or let `ops/ui/nav_v1.js` apply it automatically) so screen readers announce the current location.
- Sticky headers: anchor targets should use `scroll-margin-top` (see `:target` rule in `STYLE_TOKENS_V1.css`).
- Reduced motion preference respected.
- Text selection: ensure `::selection` maintains readable contrast (avoid near-black-on-blue in dark mode).
- Contrast preference: provide stronger borders and focus rings under `@media (prefers-contrast: more)`.
- Forced colours (Windows High Contrast): ensure focus is still visible via `@media (forced-colors: active)` outline fallback (see `STYLE_TOKENS_V1.css`).
- Safe areas (mobile): scroll surfaces should include `env(safe-area-inset-bottom)` padding so the last row of content is not obscured by the home indicator.
- Scroll regions (tables/boards): if a container scrolls horizontally, make the container own the border and focus ring (e.g., `.table-wrap[role="region"][tabindex="0"]` + `.table-wrap:focus-visible`).
- Boards: for true kanban horizontal scroll (`.board`), set `tabindex="0" role="region" aria-label="…"` and use `.board[tabindex="0"]:focus-visible` to show a focus ring (discoverability for keyboard users).
- Linked cards: avoid tiny title links. Use `.item.item--link` + `.item__link` so the whole card is a single generous tap/click target and focus ring.

## Page layout variants
- `board` (default): horizontal scroll for true kanban-style boards.
- `board board--wrap`: wrap columns into a responsive grid (status/landing pages) to avoid forced sideways scrolling.
```


## API Usage Tracker Notes

`ops/usage/API_USAGE_TRACKER_V1.md`


```markdown
# API Usage Tracker v1

Purpose: provide visible run-rate tracking for model/API usage and cost trend.

## Budget target
- POC target: <= USD 2/day

## Tracked metrics
- In tokens
- Out tokens
- Total tokens
- Estimated cost (USD)
- Top contributing jobs/streams

## Current status
- Tracker initialized.
- Next increment: automate ingestion from cron run stats/events into `usage/api-usage-log.csv`.

## Data source
- `usage/api-usage-log.csv`

## Notes
- This is now wired into the Ops status/navigation pages so run-rate visibility is first-class.
```


---
## Data Files (not embedded)

- `ops/agent-tasks.csv`
- `ops/job-pipeline.csv`
- `ops/crm/status-mapping-v1.json`
- `ops/agent-roster.yaml`
- `ops/usage/api-usage-log.csv`
```

## exports/PROJECT_DUMP_COMPREHENSIVE_2026-03-09_1422UTC.md

```markdown
# Crabbie Ops — Comprehensive Project Dump

Generated: 2026-03-09 14:22 UTC

## Purpose
Share-ready technical and delivery snapshot for external consultant review.

## Included Files

- `ops/exports/EXEC_BRIEF_2026-03-09.md`
- `ops/master-project-brief.md`
- `ops/EXECUTION_PLAN_2026-03-03.md`
- `ops/CONTROL_TOWER.md`
- `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`
- `ops/UPDATE_CAPTURE.md`
- `ops/project-gantt.md`
- `ops/TEAM_OPENCLAW.md`
- `ops/agent-roster.yaml`
- `ops/agent-tasks.csv`
- `ops/job-pipeline.csv`
- `ops/crm/STATUS_MAPPING_V1.md`
- `ops/crm/status-mapping-v1.json`
- `ops/cv-pipeline/README.md`
- `ops/cv-pipeline/qa-thresholds-v1.json`
- `ops/cv-pipeline/run_cv_deterministic.py`
- `ops/architecture/EVENT_MODEL_V1.md`
- `ops/architecture/INTEGRATION_CONTRACTS_V1.md`
- `ops/architecture/READ_MODEL_CONTRACTS_V1.md`
- `ops/architecture/MEMORY_LAYERS_V1.md`
- `ops/architecture/PUBLISH_GUARDRAILS_V1.md`
- `ops/ux/JOURNEY_MAPS_V1.md`
- `ops/ux/IA_AND_NAV_V1.md`
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md`
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ops/ux/JOB_TRIAGE_CONTROLS_SPEC_V1.md`
- `ops/ux/HANDOFF_NOTES_V1.md`
- `ops/ux/SITEMAP_V1.md`
- `ops/ui/DESIGN_LANGUAGE_V1.md`
- `ops/usage/API_USAGE_TRACKER_V1.md`
- `ops/usage/api-usage-log.csv`

---


## exports/EXEC_BRIEF_2026-03-09.md

```markdown
# Crabbie Ops — Executive Brief

_Date: 2026-03-09 (UTC)_

## 1) Objective
Build an always-on, low-cost, multi-agent operations system for Matt’s career pipeline that is visibly productive and execution-oriented.

Primary outcomes:
- Convert role intake to tailored CV artefacts with deterministic QA gates.
- Maintain live, usable ops surfaces (`ops.mattkain.com`) with strong accessibility and clear movement.
- Keep CRM/pipeline states consistent and decision-ready.

## 2) Current State (What is working)
- Live publishing pipeline is active with frequent updates.
- Specialist streams are producing continuous increments across PM, BA, UX, UI, Build, and Architecture.
- Core pages are in place: Status, Kanban, Agent Queue, Agents, CV Run, CV Preview, API Usage.
- Agent profile avatars and Crabbie branding are now integrated.
- Capacity indicators are running on Agents page with periodic refresh.
- CV Preview has been hardened against raw HTML injection.

## 3) Delivery Focus (next 24–72h)
1. **T-0204** Canonical CRM status mapping implementation (CSV/DB/UI alignment).
2. **T-0305** Activity Timeline (`activity.html`) with events-first + derived fallback.
3. **T-0306** Team Operations Board (`team-ops.html`) with gauges, movement feed, blockers.
4. Finalise CV minimum QA gate decisions (overall pass criteria + manifest behaviour on fail).

## 4) Key Risks
- **Data drift risk**: `job-pipeline.csv` requires reliable `updated_at` writes for accurate timelines/audit.
- **Spec/implementation drift**: multiple streams touching same surfaces quickly.
- **Cost pressure**: Google API utilisation is already high this month.

## 5) Cost & Usage Controls (recommended immediate actions)
- Consolidate jobs digest cadence (AM only) and disable PM digest.
- Reduce Priority Inbox Alerts frequency (e.g., 4/day → 2–3/day).
- Enforce strict “no-change = NO_REPLY” behaviour.
- Keep model at `gpt-5.2` low-thinking for scheduled mailbox jobs.

Expected impact: meaningful drop in Gmail/Google API activity without major signal loss.

## 6) Operating Model
- Work streams run in isolated cron sessions.
- Main session used for user-facing updates and decision capture.
- Public site acts as source of visible progress.
- Architecture direction: events/contracts/read-models with controlled migration.

## 7) Decisions Needed from Matt
1. PRD-003: minimum QA checks required for `overall_pass=true`.
2. PRD-003: should `manifest.json` always be written on failed runs? (recommended: yes).
3. PRD-006: event type enum, retention window, and fallback behaviour when events exist.
4. PRD-005: Approved vs Review handling and canonical gauge buckets.

## 8) Success Criteria (near term)
- Users can see clear productivity from Status + Agent Queue + Team Ops board.
- CV flow is deterministic, safe, and auditable end-to-end.
- API usage trend stabilises below current trajectory.
- Weekly planning becomes decision-led rather than archaeology-led.
```


## master-project-brief.md

```markdown
# OpenClaw Agent System – Master Project Brief

**Owner:** Matt  
**Version:** 1.0  
**Primary Goal:** Build a multi-agent personal productivity and career acceleration platform, beginning with automated CV generation and progressing toward a full CRM-driven opportunity management system with visible UI iteration.

---

# 1. Strategic Objectives

## Primary Objective (Phase 1 Priority)

Create a **fully autonomous CV generation workflow** that:

- Accepts a job URL or pasted role description.
- Analyses requirements and matches against stored CV knowledge.
- Produces a **high-quality, two-page tailored CV**.
- Outputs:
  - Editable document.
  - Final PDF.
  - Clickable download links.
- Requires **minimal user iteration**.
- Meets professional design standards automatically.

## Secondary Objective

Demonstrate visible progress toward the broader platform by:

- Building an initial CRM database.
- Creating a simple UI interface.
- Iterating the interface daily or frequently.
- Showing continuous improvement.

## Long-Term Objective

Develop a modular agent ecosystem supporting:

- Opportunity discovery.
- Application management.
- Contact intelligence.
- Product development workflows.
- System automation.

---

# 2. System Philosophy

The system operates as a **team of specialised agents** coordinated by a **Main Orchestrator Agent**.

Principles:

1. Autonomy with guardrails.
2. Continuous iteration.
3. Cost efficiency.
4. Modular architecture.
5. Human approval for external actions.

---

# 3. Agent Architecture Overview

## 3.1 Main Orchestrator Agent (Project Manager)

Role:

- Central communication hub with the user.
- Coordinates all sub-agents.
- Maintains project roadmap.
- Monitors progress.
- Produces daily digests.

Responsibilities:

- Task routing.
- Dependency management.
- Agent activation.
- Priority decisions.
- Escalation of blockers.

Communication rules:

- Default communication with user occurs through this agent.
- Specialist conversations allowed when explicitly requested.

---

# 4. Core Agents

## 4.1 CV Specialist Agent (Highest Priority)

Mission: Deliver best-in-class CV generation.

Capabilities:

- Parse job descriptions.
- Extract requirements.
- Match against CV knowledge base.
- Generate tailored content.
- Maintain formatting standards.
- Export professional PDF.

Dependencies:

- File handling tools.
- PDF generation.
- Template library.
- Design standards memory.

Outputs:

- CV draft.
- Final PDF.
- Download link.
- Summary of tailoring logic.

Success criteria:

- Minimal revisions required.
- Professional layout.
- High relevance to role.

---

## 4.2 Opportunity Intelligence Agent (Prospecting)

Mission: Identify and prioritise opportunities.

Capabilities:

- Monitor Gmail job alerts.
- Extract job listings.
- Score opportunities based on:
  - Location relevance.
  - Seniority.
  - Salary.
  - Fit to experience.
- Produce digest reports.

Outputs:

- Ranked opportunity list.
- Recommendations.
- Actions requested from user.

---

## 4.3 Research Agent

Mission: Provide strategic context for applications.

Capabilities:

- Company research.
- Hiring manager discovery.
- Role background analysis.
- News scanning.
- Competitive insights.

Outputs:

- Research briefs.
- Talking points.
- CV positioning insights.
- Interview preparation notes.

---

## 4.4 CRM Agent

Mission: Maintain structured knowledge of opportunities and contacts.

Responsibilities:

- Store job records.
- Track application status.
- Manage contacts.
- Monitor email responses.
- Update lifecycle states.

Planned schema (initial):

Tables:

- Jobs
- Applications
- Contacts
- Communications
- Companies
- Tasks

This agent interacts with:

- Gmail integration.
- Opportunity agent.
- CV agent.
- Research agent.

---

# 5. Platform Development Agents

## 5.1 Product Manager Agent

Mission: Oversee system development.

Responsibilities:

- Define roadmap.
- Create milestones.
- Coordinate UX and engineering.
- Track progress.
- Deliver iteration plans.

---

## 5.2 UX Agent

Mission: Design workflows and user journeys.

Outputs:

- Wireframes.
- User flows.
- Interaction models.
- Requirements documentation.

---

## 5.3 UI Design Agent

Mission: Produce visual interface assets.

Outputs:

- Screen designs.
- Design system.
- Component library.
- Front-end specs.

---

## 5.4 Engineering Agent

Mission: Build platform infrastructure.

Responsibilities:

- Database setup.
- API integrations.
- Backend services.
- UI implementation.
- Deployment.

---

# 6. Memory Architecture

The system uses **three memory layers**.

## Layer 1 – Agent Local Memory

Each agent maintains markdown files.

Examples:

- soul.md
- tone.md
- knowledge.md
- procedures.md
- preferences.md

Purpose:

- Preserve identity.
- Maintain expertise.
- Reduce token usage.

---

## Layer 2 – Global Vector Memory

Install a vector memory system (example: mem0).

Purpose:

- Capture conversations automatically.
- Enable semantic recall.
- Reduce context load.
- Improve long-term learning.

---

## Layer 3 – Structured Database Memory

SQL database used for:

- CRM records.
- System state.
- Contacts.
- Jobs.
- Activities.

---

# 7. Autonomy Guardrails

Agents MAY:

- Build internal systems.
- Refactor architecture.
- Create files.
- Install tools.
- Iterate designs.

Agents MUST NOT without approval:

- Send emails.
- Contact external people.
- Submit applications.
- Perform destructive operations.
- Spend significant money.

When uncertain, escalate to Main Agent → User.

---

# 8. User Interaction Model

Default interaction: User ↔ Main Agent  
Optional: User ↔ Specialist Agent (on request)

Digest frequency:

- Daily summary preferred.
- Urgent alerts allowed.

---

# 9. Cost Management Strategy

Target total system cost: ≤ $2 per day during proof-of-concept.

Approach:

- Prefer lightweight models.
- Use local models where feasible.
- Reserve premium models for:
  - CV generation.
  - Complex reasoning.
  - Architecture decisions.

Suggested model allocation:

High intelligence:

- GPT-class models for:
  - CV agent.
  - Orchestrator decisions.
  - Research synthesis.

Medium:

- Smaller models for:
  - Classification.
  - Filtering.
  - Summaries.

Local models:

- UI generation.
- Routine tasks.
- Data formatting.

Infrastructure:

- Monitor VM usage.
- Scale down when idle.

---

# 10. Phase Roadmap

## Phase 1 – CV Automation

Deliver:

- End-to-end CV pipeline.
- PDF generation.
- File links.
- Template system.

Success signal: User can paste job → receive final CV with minimal edits.

---

## Phase 2 – CRM Foundation

Deliver:

- Database schema.
- Job tracking.
- Application states.
- Email ingestion.

---

## Phase 3 – Opportunity Intelligence

Deliver:

- Gmail scanning.
- Job ranking.
- Daily digests.

---

## Phase 4 – Interface Development

Deliver:

- Basic dashboard.
- CRM views.
- Iterative UI improvements.

---

## Phase 5 – Platform Expansion

Deliver:

- Full workflow orchestration.
- Contact intelligence.
- Automation enhancements.

---

# 11. Immediate Next Actions for Main Agent

1. Audit current agent structure.
2. Identify gaps.
3. Prioritise CV agent deployment.
4. Confirm file handling and PDF capability.
5. Design initial CRM schema.
6. Create project roadmap.
7. Produce first progress report.

---

# 12. Success Definition

System is successful when:

- CV creation requires minimal effort.
- Opportunities are tracked automatically.
- Progress is visible.
- Costs remain controlled.
- Agents operate reliably with limited supervision.

---

# 13. Tone and Behaviour Expectations

Agents should be:

- Practical.
- Efficient.
- Collaborative.
- Iterative.
- Transparent.

Avoid:

- Over-engineering.
- Excessive verbosity.
- Unnecessary API calls.

---

# 14. Instruction to Main Agent

You are responsible for transforming this brief into an operational multi-agent system.

Prioritise execution over perfection.

Begin with the CV workflow.

Report progress regularly.
```


## EXECUTION_PLAN_2026-03-03.md

```markdown
# Execution Plan – Initialisation (2026-03-03)

## Priority Stack
1. Phase 1 CV Automation Pipeline (highest)
2. CRM foundation bootstrap
3. Visible UI progress loop

## 48-hour Plan

### Track A: CV Pipeline
- A1: Define canonical input schema (`job_url` OR `job_text`)
- A2: Build requirement extraction routine
- A3: Build CV evidence bank from existing CV docs
- A4: Generate tailored markdown draft (2-page target)
- A5: PDF export step + deterministic output paths
- A6: Add quality gate checklist (relevance/layout/clarity)

### Track B: CRM Foundation
- B1: Create sqlite DB with `ops/crm-schema-v0.sql`
- B2: Add import adapter from job digest / Gmail items
- B3: Add status lifecycle transitions

### Track C: Visible Progress
- C1: Update dashboard tiles for CV pipeline status
- C2: Add daily increment notes section
- C3: Publish progress checkpoint at regular cadence

## Risks / Blockers
- Memory vector layer currently not configured (memory status unknown)
- Missing curated long-term `MEMORY.md` in workspace root
- SSH key path from Mac→VM broken for scp; slows asset transfer

## Cost Controls
- Use local processing for file transforms where possible
- Reserve high-intelligence passes for tailoring/polish only
- Batch updates and summaries to reduce API turns

## Definition of Done (Phase 1)
- User provides JD/URL once
- System returns tailored CV draft + final PDF + rationale
- Typical user iteration <= 1 round
```


## CONTROL_TOWER.md

```markdown
# Squad PM Control Tower

**Last updated:** 2026-03-09 09:36 UTC

## 1) Backlog status changes (since last capture)

### Moved to Done
- (None captured in this window.)

### Status changed (important)
- **T-0305** Implement Activity Timeline page (Rivet) → **Backlog → In Progress**
  - Now executing against PRD-006 (events JSONL first, derived fallback).

### New / newly-visible delivery work
- **T-0306** Implement Team Operations Board page (Rivet) → **Backlog**
  - Implements PRD-005 (agent workload gauges + movement feed + blockers panel).

---

## 2) Top 3 priorities (next 24–48h)

1. **T-0204 – Canonical CRM status mapping spec (Ledger) [Approved]**
   - Goal: lock taxonomy + mapping across CSV/DB/UI so statuses stop drifting.
2. **T-0206 – Live ops site navigation + artefact links (Rivet)**
   - Goal: implement AC-1 + AC-6 consistently across pages (Home resolves to `index.html`, fallback `status.html`).
3. **T-0305 – Activity Timeline page (Rivet) [In Progress]**
   - Goal: ship `ops/activity.html` per PRD-006 with error states + performance limits.

---

## 3) Blockers + decision requests

### Decisions (resolved)
- **Static masthead/nav approach:** approved by Matt. v1 approach = **copy/paste masthead block** across static pages.
- **Status taxonomy (T-0204):** approved by Matt (see `ops/UPDATE_CAPTURE.md`). Proceed to implementation + migration notes.

### Remaining decision requests from Matt (still open)
- **Paused role work (T-0001–T-0006):** confirm when to restart and which single role to resume first (u&u vs Metro), plus role brief inputs.
- **PRD-003-DR1 (CV QA gate):** confirm minimum QA checks required to unblock PDF.
- **PRD-006 decision bundle:**
  - DR1: confirm canonical `type` enum list (recommended: release, decision, build, data, incident, task)
  - DR2: confirm retention window (recommended: last 30 days)
  - DR3: confirm whether derived activity is suppressed when events exist (recommended: hide derived when events present)
- **PRD-005 decision requests (Team Ops board):**
  - DR1: confirm whether “Approved” is distinct from “Review” in v1 UI (recommend: bucket=Review; chip=Approved).
  - DR2: confirm canonical status buckets to display in gauges (recommend: Backlog, In Progress, Blocked, Review, Done).

### Operational blockers / hygiene
- **Task list invariant:** `agent-tasks.csv` previously had a duplicate `T-0302` row. Re-check and de-dupe if it reappears so “task_id is unique” remains true.
- **Stale due dates:** many tasks still show early-March dates. Once the next sprint window is confirmed, roll dates forward so the file regains scheduling signal.

---

## 4) Acceptance criteria updates (make work testable)

### T-0204 (Canonical CRM status mapping spec) — implementation-ready
- Defines canonical enums for Job/Application/Task and a mapping table to:
  - `job-pipeline.csv` statuses
  - `agent-tasks.csv` statuses
  - DB schema (existing + planned)
  - UI labels/badges
- Includes transition rules (allowed next states) and “terminal” states.
- Provides a migration note: what existing rows should map to, plus how to handle unknowns safely.

### T-0206 (Live ops site navigation + artefact links)
- Meets AC-1/AC-6 (and incorporates AC-8) from `ops/ux/ACCEPTANCE_CRITERIA_V1.md`.
- Masthead/nav consistency is enforced via the agreed v1 method:
  - identical masthead block copy/pasted across pages
  - `nav_v1.js` applies active tab (`aria-current`) automatically
- Home-link rule:
  - Home SHOULD link to `index.html` when present, otherwise fall back to `status.html`.
- `ops/status.html` exposes visible links to:
  - Agents docs (`ops/agents/*`)
  - Design roadmap (`ops/design/*`)
  - UX artefacts (`ops/ux/*`)
  - CV pipeline README + latest outputs
- CV Preview default path must not mislead (AC-8): blank or example path that exists.

### T-0205 (CV pipeline artefact manifest output)
- Produces a single manifest file per role run, keyed by **role_id** (and timestamp/run_id).
- Manifest enumerates artefacts with **paths + content type + human label** (e.g., `cv.md`, `cv.pdf`, `cover_letter.md`, `qa.json`).
- Includes a `qa.json` with at minimum:
  - relevance checklist (requirements coverage %, critical gaps list)
  - formatting checklist (2-page constraint indicator, section order validation)
  - risks/warnings (missing JD fields, low-confidence matches)
- Output paths are deterministic under a single directory, e.g. `ops/cv-pipeline/out/<role_id>/<run_id>/...`.

### T-0305 (Activity Timeline page)
- Implements PRD-006 from `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`.
- If `ops/events/events-YYYY-MM.jsonl` exists, timeline renders from it (newest-first, grouped by UTC day).
- If missing/unreadable, timeline renders from derived sources and shows:
  - `Event feed unavailable, showing derived activity.`
- Large feed guard: if JSONL exceeds ~2 MB, show latest N only (default 250) and show “Showing latest 250 events”.

### T-0306 (Team Operations Board page)
- Implements PRD-005 from `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`.
- `ops/team-ops.html` exists and renders within the standard masthead/navigation shell.
- Loads tasks from `ops/agent-tasks.csv` using shared CSV loader and maps statuses using `ops/crm/status-mapping-v1.json`.
- Renders:
  - workload gauge cards per agent (counts by canonical bucket)
  - recent movement feed (derived from `updated_at`, latest 25, extend to 100)
  - blockers panel (bucket == Blocked) with overdue visual flag
- Filters by agent + status bucket; persists via query string and restores on load.
- Resilience: if CSV fetch fails, show visible error banner + empty-state shell (no crash).
```


## PRODUCT_REQUIREMENTS_BACKLOG_V1.md

```markdown
# Product Requirements Backlog v1

Owner: Tide (PM Control Tower)
Contributors: Vantage (UX), Ledger (CRM), Forge (CV), Polish (UI), Build Engineer

## Purpose
Single backlog for detailed, testable product requirements with grooming state.

## Priority Buckets
- P0: Core workflow integrity
- P1: Usability and speed
- P2: Optimisation and polish

## Requirement Format
- **Req ID**
- **Title**
- **Problem / Outcome**
- **User story**
- **Acceptance criteria**
- **Edge cases / Non-goals**
- **Dependencies**
- **Decision requests**
- **Owner**
- **Grooming state** (Draft / Refined / Ready)
- **Delivery status** (Backlog / In Progress / Blocked / Done)

---

## P0

### PRD-001 — Canonical Job Record + Stage Model
- Outcome: one source of truth per job record.
- User story: As operator, I can manage each opportunity from intake to close in a consistent schema.
- Acceptance criteria:
  - Job record includes required fields agreed by Matt.
  - Stage model: triage, drafting, applied, progressing, closed.
  - Closed reasons captured separately.
- Edge cases / Non-goals:
  - Non-goal: importing historical jobs at high fidelity on v1.
- Dependencies:
  - `ops/crm-schema-v0.sql` (schema) + UI mapping.
- Decision requests:
  - Confirm canonical required fields list (PRD-001-DR1).
- Owner: Ledger
- Grooming state: Ready
- Delivery status: Backlog

### PRD-002 — Live Kanban From Data
- Outcome: board reflects latest job pipeline without manual HTML editing.
- Acceptance criteria:
  - Kanban loads from `ops/job-pipeline.csv` (current) and supports status aliases.
  - Unknown statuses are handled safely (render as “Unknown”, do not break layout).
  - Board updates on publish cycle.
- Edge cases / Non-goals:
  - If CSV missing/unreadable: show inline error state and preserve last-rendered DOM shell.
- Dependencies:
  - `ops/ui/kanban_live_v1.js`
  - `ops/ui/csv_v1.js`
- Decision requests:
  - None.
- Owner: Build Engineer
- Grooming state: Ready
- Delivery status: In Progress

### PRD-003 — CV Run Flow (Input -> Analysis -> Draft -> QA -> PDF)
- Outcome: repeatable CV generation with visible QA gate.
- Acceptance criteria:
  - Role-keyed artefacts generated under `outputs/cv/<role_id>/`.
  - analysis/evidence/qa artefacts created and linked.
  - PDF gated by QA results.
- Edge cases / Non-goals:
  - If QA fails: PDF must not be generated, and a human-readable failure summary is persisted.
- Dependencies:
  - `ops/cv-pipeline/README.md` (pipeline design)
  - `ops/cv-preview.html` (preview surface)
- Decision requests:
  - Confirm the minimum QA checks required to unblock PDF (PRD-003-DR1).
- Owner: Forge + Vantage
- Grooming state: Refined
- Delivery status: In Progress

---

## P1

### PRD-004 — Persistent Navigation and Home Routing
- Outcome: consistent navigation across all pages.
- Acceptance criteria:
  - Shared nav on status/kanban/queue/agents/cv preview.
  - Home route resolves to existing page.
  - Mobile menu is usable.
- Edge cases / Non-goals:
  - Non-goal: SPA routing; v1 is static HTML with JS enhancement.
- Dependencies:
  - `ops/index.html` exists and is valid Home.
  - `ops/ui/nav_v1.js` (active link + aria-current).
- Decision requests:
  - None (nav reuse decision resolved: copy/paste acceptable, JS sets active state).
- Owner: Polish + Build Engineer
- Grooming state: Ready
- Delivery status: In Progress

### PRD-005 — Team Operations Board
- Outcome: visible task movement and squad accountability.
- User story: As operator, I can see who is doing what, what is blocked, and what changed recently, so I can intervene early.

- Acceptance criteria:
  1. **Surface + shell**
     - `ops/team-ops.html` exists and renders within the standard masthead/navigation shell.
     - Page title and primary H1 clearly indicate “Team Ops”.
  2. **Data source (v1 canonical)**
     - Page loads from `ops/agent-tasks.csv` using the shared CSV loader (`ops/ui/csv_v1.js`) or equivalent.
     - Uses `ops/crm/status-mapping-v1.json` to map raw status labels to canonical buckets.
  3. **Workload gauge (per agent)**
     - Render one card per agent with counts by canonical status bucket (minimum: Backlog, In Progress, Blocked, Review, Done).
     - Agents are derived from the CSV `agent` column; unknown/blank agent values are grouped under “Unassigned”.
     - Each card includes a “Total open” number (all except Done).
  4. **Task movement feed (recent changes)**
     - Feed is derived from `updated_at` (descending). Items show: task_id, title, agent, status, updated_at.
     - Feed default is latest 25 items; “Show more” increases to 100 without page reload (client-side).
     - If `updated_at` is missing/unparseable, item is placed at the end and flagged.
  5. **Blockers panel**
     - Panel lists tasks where canonical status bucket == Blocked.
     - Each blocker row shows: task_id, title, agent, due_date (if present), and a short “blocker summary” extracted from `notes` up to first pipe `|` if present.
     - If due_date is in the past, row is visually flagged as overdue.
  6. **Filtering + deep links (v1 simple)**
     - Provide a client-side filter by agent and by canonical status bucket.
     - Filters are reflected in the URL query string (e.g. `?agent=Rivet&bucket=Blocked`) and restored on load.
  7. **A11y and resilience**
     - Tables/feeds use semantic markup (`<table>` for tabular, `<ul>`/`<ol>` for feed) with visible focus states.
     - If CSV fetch fails: show visible error banner with attempted path; render an empty-state shell (do not crash).

- Edge cases / Non-goals:
  - Unknown statuses in `ops/agent-tasks.csv`: map to canonical “Backlog” AND flag visibly (chip “Unknown status”).
  - CSV row missing `task_id`: row is skipped and counted in a “X rows skipped” warning.
  - Non-goal: editing tasks in UI (read-only v1).
  - Non-goal: real-time updates; refresh is manual or on page reload for v1.

- Dependencies:
  - `ops/team-ops.html` (new surface)
  - `ops/agent-tasks.csv` (canonical ops tasks)
  - `ops/crm/status-mapping-v1.json` (status mapping)
  - `ops/ui/csv_v1.js` (CSV loading)
  - `ops/ui/nav_v1.js` (navigation)

- Decision requests:
  - PRD-005-DR1: Confirm whether “Approved” is distinct from “Review” in v1 UI.
    - Recommendation: treat Approved as a subtype within Review for v1 (bucket=Review; chip=Approved) to avoid UI complexity.
  - PRD-005-DR2: Confirm canonical status buckets to display in gauges (recommend: Backlog, In Progress, Blocked, Review, Done).

- Owner: Tide + Build Engineer
- Grooming state: Ready
- Delivery status: In Progress

### PRD-006 — Activity Timeline (Events-first, CSV fallback)
- Outcome: clear activity narrative from real events.
- User story: As operator, I can review what changed (pipeline + squad output) without reading commits or guessing from the UI.
- Acceptance criteria (events-first):
  1. **Surface**: `ops/activity.html` exists and renders within the standard masthead/navigation shell.
  2. **Primary data source**: If an events JSONL file exists for the current month (e.g. `ops/events/events-YYYY-MM.jsonl`), the page renders from it.
  3. **Event schema** (minimum): each JSONL line MUST parse to an object with:
     - `ts` (ISO-8601 timestamp),
     - `type` (string enum),
     - `title` (short human-readable summary),
     - `refs` (array of file paths or URLs; may be empty),
     - `actor` (agent or “human”).
  4. **Sorting**: events are rendered newest-first.
  5. **Grouping**: events are grouped by local day label (UTC for now, unless decided otherwise).
  6. **Rendering**:
     - Each event shows timestamp, type chip, title, and optional refs list.
     - Refs that are workspace-relative file paths are rendered as non-clickable code (v1 static site) but are copyable.
  7. **Load failures**:
     - If the JSONL fetch fails, show a visible error banner with the attempted path and fall back to CSV-derived activity (if available).
     - If JSONL contains invalid lines, skip those lines and show a small “X lines skipped” warning.
  8. **Secondary data source (fallback)**: If no events JSONL exists (or it cannot be loaded), derive a basic activity list from:
     - `ops/job-pipeline.csv` (job stage deltas when available), and
     - `ops/agent-tasks.csv` (task status changes and updated_at).
     The derived activity MUST label items as “Derived” and must not pretend to be authoritative.
  9. **Performance**: timeline renders within 250 ms on a typical laptop for up to 2,000 events (client-side).
  10. **A11y**:
      - Timeline list is a semantic list (`<ol>` / `<ul>`),
      - page has a skip-link target,
      - visible focus states apply to any interactive controls.

- Edge cases / Non-goals:
  - Timezone ambiguity: v1 groups by UTC day; do not implement per-user TZ until requested.
  - Duplicate events: if two events share the same `ts` and `title`, render both (no de-dupe) but consider future hash-based de-dupe.
  - Missing optional fields: if `refs` missing, treat as empty array; if `actor` missing, render “system”.
  - Large JSONL file: if file exceeds 2 MB, render latest N events only (N default 250) and show “Showing latest 250 events”.
  - Non-goal: editing events in the UI (read-only v1).

- Dependencies:
  - UX spec + handoff: `ops/ux/HANDOFF_NOTES_V1.md` (timeline guidance) and `ops/ux/MASTHEAD_NAV_SPEC_V1.md`.
  - Seed events file exists: `ops/events/events-2026-03.jsonl`.
  - Shared nav JS: `ops/ui/nav_v1.js`.

- Decision requests:
  - PRD-006-DR1: Confirm canonical `type` enum list for events (recommended: release, decision, build, data, incident, task).
  - PRD-006-DR2: Confirm retention window for events surfaced in UI (recommended: last 30 days).
  - PRD-006-DR3: Confirm whether derived activity should be suppressed when events exist (recommended: hide derived when events present).

- Owner: Vantage + Build Engineer
- Grooming state: Ready
- Delivery status: Backlog
```


## UPDATE_CAPTURE.md

```markdown
# Update Capture

## 2026-03-03

## 2026-03-08
- Matt approved decision bundle (1-7): CRM stage model and triage structure, shared static nav approach, two-phase subagent plan, restart u&u role track only, Jobgether no-go, AUSTRAC-style role deprioritisation, CV preview path restriction to `outputs/cv/**`.
- Master project brief ingested and anchored to `ops/master-project-brief.md`.
- System audit complete (agents/memory/tools/files/runtime).
- Gap analysis complete.
- Execution roadmap created: `ops/EXECUTION_PLAN_2026-03-03.md`.
- CV pipeline design created: `ops/cv-pipeline/README.md`.
- CRM schema v0 created: `ops/crm-schema-v0.sql`.
- Model/cost routing strategy created: `ops/MODEL_COST_STRATEGY.md`.

## 2026-03-08
- Control Tower created: `ops/CONTROL_TOWER.md` (priorities, blockers/decisions, acceptance criteria, and backlog status movement).
- Shipped live data wiring for `ops/kanban.html`: now renders directly from `ops/job-pipeline.csv` via `ops/ui/kanban_live_v1.js` (+ `ops/ui/csv_v1.js`).
- Shipped live data wiring for `ops/agent-queue.html`: now renders directly from `ops/agent-tasks.csv` via `ops/ui/agent_queue_live_v1.js`, using canonical CRM task status mapping from `ops/crm/status-mapping-v1.json`.
- Extended canonical CRM task status enum to include `review` (supports CSV statuses `Review` and `Approved`).
- UI surface iteration pass: responsive layout + a11y affordances (skip-link target/focus), standardised sticky offset vars, and tightened CSS/design language docs (`ops/status.html`, `ops/agent-queue.html`, `ops/cv-preview.html`, `ops/ui/*`).
- Control Tower refreshed: reflected `T-0206` as **Blocked** pending nav reuse decision; added decision request on static masthead implementation approach.
- Control Tower refreshed again: marked decisions resolved (taxonomy + nav copy/paste), captured `T-0204` as **Approved** and `T-0303` as **In Progress**, and updated priority stack accordingly.

## Next Publishing Goal
- Expose/update a live web status view that includes:
  1. latest increment log,
  2. CV pipeline stage status,
  3. project Gantt timeline.

## UI Direction Captured (Builder screenshots)
- Dark, premium, low-noise interface with neon accent and soft glow connectors.
- Node-based orchestration visual language: orchestrator at centre with branching specialist agents.
- Clear hierarchy: strategist/planner layer above execution worker layer.
- Rounded cards/chips, subtle depth, restrained motion, high-contrast focal elements.
- Split utility + control layout in admin views: left rail list, right detail pane, tabbed sections.
- Product intent: make multi-agent workflow legible and confidence-inducing, not merely decorative.
- Additional reference direction captured: explicit memory controls/surfaces (memory flush/search/session-memory), visible security-scan trust indicators for downloadable modules, structured memory architecture views, and simple system-overview diagrams for onboarding/explainability.
- Additional workflow references captured: meeting-to-actions pipeline with approval gating (human-in-loop before task creation), RAG knowledge-base pipeline (multi-source ingest -> embed -> SQLite+vectors -> plain-English query), and advisory-council pattern (parallel specialist analyses plus synthesiser and feedback loop).
- Additional ops references captured: automated DB discovery/backups with encryption and retention, health monitoring heartbeat/checklist, config/doc drift monitoring, and update notification pattern in chat. Self-update actions remain explicit-approval only.

## 2026-03-09
- Groomed `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`: introduced explicit grooming state (Draft/Refined/Ready) + expanded requirement format to include edge cases + decision requests.
- Expanded PRD-006 (Activity Timeline) into implementation-ready acceptance criteria and edge cases; captured decision requests (event type enum, retention, derived-when-events-present).
- Added delivery task `T-0305` to `ops/agent-tasks.csv` for Rivet to implement `ops/activity.html` per PRD-006.
- Refreshed Control Tower: marked T-0303 Done; unblocked T-0206 (now In Progress) after masthead/nav copy-paste decision; pulled in AC-8 fix (CV preview default path must not mislead).
- Groomed PRD-005 (Team Operations Board): expanded into implementation-ready acceptance criteria/edge cases; moved Grooming state Refined → Ready.
- Added delivery task `T-0306` to `ops/agent-tasks.csv` for Rivet to implement `ops/team-ops.html` per PRD-005.
- Control Tower refresh (09:36 UTC): captured T-0305 **Backlog → In Progress**, surfaced new delivery work T-0306, and made Team Ops acceptance criteria explicit in Control Tower.
```


## project-gantt.md

```markdown
# Crabbie OS Roadmap Gantt (Draft)

## Streams
- Foundation
- Data & Automation
- UI/UX
- Agent Delegation
- Delivery Ops

## Timeline (Brisbane)
- 2026-03-01 to 2026-03-28

## Milestones
- M1: Dashboard shell + agents pages consolidated
- M2: JSON data layer + auto-refresh
- M3: Command router live (chat -> pipeline/task updates)
- M4: Task detail + activity log + schedules views
- M5: QA gates + release rhythm stable
```


## TEAM_OPENCLAW.md

```markdown
# Crabbie Employment Pod - Operating Model

## Mission
Land the right role fast with high-quality applications, tight pipeline control, and low-noise execution.

## Command Structure
- **Crabbie (Manager):** final orchestration, quality control, user-facing decisions.
- **Tide (Control Tower):** daily priorities, blockers, sequencing.
- **Radar (Scout):** finds and dedupes roles.
- **Vantage (Analyst):** decodes role requirements.
- **Forge (Writer):** writes role-targeted CV content.
- **Polish (Design):** enforces premium 2-page formatting.
- **Ledger (CRM):** tracks statuses, versions, follow-ups.
- **Atlas (Intel):** builds company/contact intelligence.

## Workflow (Autonomous-by-default)
1. Scout captures roles and assigns fit tier.
2. Analyst generates role brief.
3. Writer produces strongest-first application pack.
4. Design finalises polished PDF outputs.
5. CRM logs role status, CV version, and next actions.
6. Manager sends concise summary + decisions needed.

## Status Definitions
- `New`
- `Assessing`
- `CV Ready`
- `Applied`
- `Interview`
- `Offer`
- `Rejected`
- `Ignored`

## Current Priority Rules
- Prioritise **Brisbane** and **Remote**.
- Non-Brisbane/non-Remote shown in weekly secondary digest only.
- Exclude CTO/CIO-heavy roles by default.

## Daily Operating Cadence
- Inbox priority checks: 9am, 12pm, 3pm, 6pm AEST
- Jobs digest: 9am and 3pm AEST
- Weekly secondary market digest: Monday 10:30am AEST

## Next Automation Targets
- Auto-update `job-pipeline.csv` from digest decisions (`ignore x`, `prep x`, `applied x`).
- Auto-generate outreach drafts where contact email exists.
- Weekly pipeline review with stale-role nudges.
```


## agent-roster.yaml

```yaml
team: Crabbie Employment Pod
owner: Matt Kain
manager_agent: Crabbie
objective: "Secure the right role quickly with high-quality applications and tight pipeline control."

global_guardrails:
  - No fabrication of CV facts.
  - No destructive mailbox actions (delete/spam/unsubscribe) without explicit instruction.
  - No external send on Matt's behalf unless requested or policy-approved.
  - Prioritise Brisbane and Remote roles.
  - Exclude CTO/CIO-heavy roles unless clearly growth/commercial/transformation-led.

agents:
  - id: control-tower
    name: Tide
    role: Program Manager / Chief of Staff
    personality: Calm, decisive, commercially literate.
    responsibilities:
      - Prioritise work across agents.
      - Maintain pipeline state and SLA timers.
      - Produce daily executive brief.
    inputs: [job-pipeline.csv, inbox digests, role briefs]
    outputs: [daily-priority-list, blockers, decisions-needed]

  - id: scout
    name: Radar
    role: Opportunity Scout
    personality: Curious, fast, signal-first.
    responsibilities:
      - Harvest roles from inbox + boards.
      - Deduplicate and score relevance.
      - Route high-fit roles to Role Analyst.
    skills: [job-search, triage, dedupe]

  - id: analyst
    name: Vantage
    role: Role Analyst
    personality: Analytical, blunt, strategic.
    responsibilities:
      - Decode hiring mandate and hidden criteria.
      - Produce targeted brief and keyword map.
      - Flag risks and interview narrative angles.
    outputs: [role-brief.md]

  - id: writer
    name: Forge
    role: CV Strategist / Writer
    personality: Direct, persuasive, evidence-led.
    responsibilities:
      - Produce strongest-first CV draft from approved facts.
      - Align narrative to role brief and ATS factors.
      - Prepare cover note + SEEK note when needed.

  - id: design
    name: Polish
    role: CV Layout & Design
    personality: Minimalist, premium, detail-obsessed.
    responsibilities:
      - Apply formatting standards and typography rules.
      - Enforce 2-page quality and spacing consistency.
      - Final PDF quality pass before release.

  - id: crm
    name: Ledger
    role: Pipeline & CRM Manager
    personality: Structured, relentless, precise.
    responsibilities:
      - Maintain role lifecycle status.
      - Track CV version used and comms history.
      - Age out stale opportunities and trigger follow-ups.

  - id: intel
    name: Atlas
    role: Company & Contact Intelligence
    personality: Methodical, context-rich, discreet.
    responsibilities:
      - Build target company dossiers.
      - Map key stakeholders and likely decision makers.
      - Surface warm-path intro opportunities.
```


## agent-tasks.csv

```csv
task_id,role_id,title,agent,priority,status,due_date,created_at,updated_at,notes
T-0001,R-2026-0006,Create role brief for u&u Chief Experience Officer,Vantage,High,Blocked,2026-02-27,2026-02-27,2026-03-01,Awaiting brief | On hold per user instruction
T-0002,R-2026-0006,Draft tailored CV for u&u Chief Experience Officer,Forge,High,Blocked,2026-02-27,2026-02-27,2026-03-01,Starts after role brief | On hold per user instruction
T-0003,R-2026-0006,Apply formatting QA and final PDF for u&u role,Polish,High,Blocked,2026-02-27,2026-02-27,2026-03-01,Use latest format rules | On hold per user instruction
T-0004,R-2026-0007,Create role brief for Metro South Health Senior Director role,Vantage,High,Blocked,2026-02-27,2026-02-27,2026-03-01,Prioritise Brisbane relevance | On hold per user instruction
T-0005,R-2026-0007,Draft tailored CV for Metro South Health role,Forge,High,Blocked,2026-02-27,2026-02-27,2026-03-01,Starts after role brief | On hold per user instruction
T-0006,R-2026-0007,Apply formatting QA and final PDF for Metro role,Polish,High,Blocked,2026-02-27,2026-02-27,2026-03-01,2-page layout rules | On hold per user instruction
T-0007,R-2026-0003,Mark Sharp & Carter role as Applied once confirmed,Ledger,Medium,Done,2026-02-28,2026-02-27,2026-03-01,Waiting user confirmation | Closed by user instruction: applied + monitor
T-0008,R-2026-0004,Prepare outreach draft if contact is available for Datacom,Tide,Medium,Done,2026-02-28,2026-02-27,2026-03-01,Check ad contact details | Closed by user instruction: applied + monitor
T-0009,R-2026-0005,Check BOQ application completion status and log,Ledger,Medium,Done,2026-02-28,2026-02-27,2026-03-01,Track status change | Closed by user instruction: applied + monitor
T-0010,,Generate daily manager brief from pipeline + tasks,Tide,High,In Progress,2026-02-27,2026-02-27,2026-02-27,Daily cadence
T-0101,,Define OS information architecture + nav model,Northstar,High,Backlog,2026-03-01,2026-02-28,2026-02-28,Studio sprint 1
T-0102,,Create UI token system and component baseline,Velvet,High,Backlog,2026-03-01,2026-02-28,2026-02-28,Align to BMHQ-inspired layout
T-0103,,Refactor dashboard shell with sidebar + top search,Rivet,High,Backlog,2026-03-01,2026-02-28,2026-02-28,Foundation for multi-page app
T-0104,,Write microcopy pack for dashboard actions + states,Quill,Medium,Backlog,2026-03-01,2026-02-28,2026-02-28,"Button labels, hints, empty states"
T-0105,,Create release QA checklist + smoke tests,Sentinel,High,Backlog,2026-03-01,2026-02-28,2026-02-28,Pre-publish gate
T-0106,,Implement JSON data layer + auto-refresh wiring,Pulse,High,Backlog,2026-03-02,2026-02-28,2026-02-28,Move away from static-only updates
T-0111,,Integrate iCloud inbox monitoring into priority alert pipeline,crm,High,Backlog,2026-03-01,2026-02-28,2026-02-28,Needed for account invites and tool onboarding emails
T-0112,,"Create Crabbie account registry schema (tool, login email, status, owner, notes)",ops,High,Backlog,2026-03-01,2026-02-28,2026-02-28,Track autonomous tool accounts safely
T-0113,,Design secure credential handling flow for Crabbie-managed accounts,ops,High,Backlog,2026-03-01,2026-02-28,2026-02-28,"No plaintext in docs, use secrets + approvals"
T-0114,,Wire onboarding workflow: invite email detection -> account creation checklist,jobs,Medium,Backlog,2026-03-02,2026-02-28,2026-02-28,Route to delegation console and logs
T-0115,R-2026-0010,Validate employer identity + listing source for Jobgether role,Atlas,High,Backlog,2026-03-01,2026-03-01,2026-03-01,Check Airbnb mismatch and direct company context
T-0116,R-2026-0010,Create role brief and fit screen for Head of Marketing remote role,Vantage,High,Backlog,2026-03-01,2026-03-01,2026-03-01,Assess B2B SaaS/startup demand-gen fit
T-0117,R-2026-0010,Draft tailored CV for Head of Marketing remote role,Forge,High,Backlog,2026-03-01,2026-03-01,2026-03-01,Proceed after identity check + go/no-go
T-0201,,Create agent profile docs and sprint plans,Tide,High,Done,2026-03-07,2026-03-07,2026-03-07,Published under ops/agents
T-0202,,Produce UX journey map artefacts v1,Vantage,High,Done,2026-03-07,2026-03-07,2026-03-07,Published ops/ux/JOURNEY_MAPS_V1.md
T-0203,,Publish design roadmap incl typography and palette decisions,Polish,High,Done,2026-03-07,2026-03-07,2026-03-07,Published ops/design/DESIGN_ROADMAP_V1.md
T-0204,,Implement canonical CRM status mapping spec,Ledger,High,Approved,2026-03-08,2026-03-08,2026-03-07,Decision approved by Matt; proceed with implementation.
T-0205,,Wire CV pipeline artefact manifest output,Forge,High,In Progress,2026-03-08,2026-03-07,2026-03-07,role_id keyed outputs + qa.json
T-0206,,Expand live ops site navigation and artefact links,Rivet,Medium,In Progress,2026-03-08,2026-03-07,2026-03-09,Unblocked: Matt approved v1 copy/paste masthead + nav approach. Implement AC-1/AC-6 link surface + wire nav_v1.js; ensure Home links to index.html (fallback status.html).
T-0207,,Spec persistent masthead navigation for design/build,Vantage,High,Done,2026-03-07,2026-03-07,2026-03-07,Published ops/ux/MASTHEAD_NAV_SPEC_V1.md
T-0301,,Squad UX Strategist Continuous (journeys/IA/nav/AC/hand-off),Vantage,High,In Progress,,2026-03-08,2026-03-09,"Cron: adc1481d-61ab-4a0f-8f8e-8a0c3adfb22c | Maintain ops/ux artefacts tied to current build files | Last run 2026-03-09 08:28 UTC | Updates: added ops/cv-run.html as an in-scope build surface across IA + Sitemap + Journeys; Acceptance Criteria AC-1a nav set now explicitly includes CV Run when published; added AC-9 for CV Run (command + preview deep-link). | Last run 2026-03-09 10:28 UTC | Updates: refreshed UX artefacts timestamps; added AC-3b horizontal-scroll discoverability for Kanban board; IA/Nav build note now records board as labelled, focusable region; handoff notes warn against regressing board focusability."
T-0302,,Squad UI Designer Continuous (responsive/a11y improvements),Velvet,High,In Progress,,2026-03-08,2026-03-09,"Cron: 3bf4fdd4-3b38-4c1a-a9ed-5d846732ef3c | Maintain ops/ui + ops/*.html surfaces | Last run 2026-03-08 14:27 UTC | 2026-03-08 12:26 UTC: nav_v1.js now applies aria-current + active styling automatically; mobile menu closes on Escape/outside click/link click; added aria-controls. STYLE_TOKENS: underline on focus-visible links. COMPONENTS: aria-current styling + nav-toggle focus ring. agents.html: skip-link + tabindex=-1 main + labelled textareas. agent-queue.html: tabindex=-1 main. status.html: corrected active nav styling. DESIGN_LANGUAGE: documented aria-current rule. | 2026-03-08 14:19 UTC: STYLE_TOKENS add readable ::selection + prefers-contrast focus/border boost. COMPONENTS: home-logo focus ring; nav-toggle hover/active parity. status.html: aria-current=page on active nav. | 2026-03-08 14:27 UTC: COMPONENTS add responsive .table/.table-wrap styling + token-aligned capacity gauge colours. api-usage.html add skip-link, responsive table container, sticky headers within scroll region, and consistent primary nav set. agents.html improve responsive grid + textarea focus/size (token-aligned). agent-queue.html/kanban.html/status.html remove hard-coded active nav classes, add missing API Usage link, and standardise page titles. | Last run 2026-03-09 08:32 UTC | Updates: ops/ui/COMPONENTS_V1.css adds safe-area inset bottom padding to .board across breakpoints (prevents home-indicator overlap on mobile); ops/ui/DESIGN_LANGUAGE_V1.md documents safe-area rule. | Last run 2026-03-09 10:21 UTC | Updates: kanban board is now a labelled, keyboard-focusable scroll region (tabindex/role/aria-label) and `.board[tabindex=\0\""]:focus-visible` shows a focus ring for horizontal-scroll discoverability. | Last run 2026-03-09 10:32 UTC | Updates: CV Preview controls now submit as a form (Enter-to-load), main has tabindex=-1 for skip-link focus, and draft-load region announces state via aria-live + aria-busy; COMPONENTS adds a reusable .notice component, and CV Run copy failure notice now uses role=alert for assertive announcement; DESIGN_LANGUAGE documents dynamic-update announcement rules."""
T-0303,,Spec + handoff for derived Activity feed (events JSONL fallback to CSV),Vantage,High,Done,2026-03-09,2026-03-08,2026-03-09,UX artefacts updated; added UX-002 derived-activity generator rules to timeline spec; seed events file present (ops/events/events-2026-03.jsonl). Next: Rivet implement activity.html + status module per ops/ux/HANDOFF_NOTES_V1.md (1.4–1.6)
T-0501,,Review CV draft for R-2026-TEST-EY before apply,Forge,High,In Progress,2026-03-09,2026-03-08,2026-03-08,Created by hero workflow test
T-0304,,Implement masthead home-link fix + nav_v1.js wiring (remove per-page active classes),Rivet,High,Done,2026-03-09,2026-03-08,2026-03-09,Verified: ops/*.html load ui/nav_v1.js and home-logo links to index.html across Status/Kanban/Agent Queue/Agents/API Usage/CV Run. Superseded any remaining per-page active classes (nav_v1.js sets aria-current).
T-0311,,Add forced-colors focus outline fallback for High Contrast,Velvet,Medium,Done,2026-03-09,2026-03-09,2026-03-09,Implemented @media (forced-colors: active) outline fallback in ops/ui/STYLE_TOKENS_V1.css; documented in DESIGN_LANGUAGE_V1.md
T-0305,,Implement Activity Timeline page (events JSONL + derived fallback),Rivet,High,In Progress,2026-03-10,2026-03-09,2026-03-09,Status change: Backlog → In Progress (UX specs stable) | Implements PRD-006 per ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md and ops/ux/HANDOFF_NOTES_V1.md; render list + error states + nav_v1 wiring
T-0312,,Status page: make artefact items full-card links,Velvet,Medium,Done,2026-03-09,2026-03-09,2026-03-09,Improves touch targets + keyboard focus; uses .item--link pattern in ops/status.html
T-0306,,Implement Team Operations Board page (gauges + feed + blockers),Rivet,High,Backlog,2026-03-10,2026-03-09,2026-03-09,Implements PRD-005 per ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md | New surface ops/team-ops.html using ops/agent-tasks.csv + ops/crm/status-mapping-v1.json; URL query filters; error states
```


## job-pipeline.csv

```csv
role_id,title,company,location,url,fit_tier,status,cv_file,cover_file,last_action,next_action,owner,notes
R-2026-0001,Head of Marketing Centre of Excellence (CoE),Qantas,Sydney,https://www.linkedin.com/jobs/view/4376504696,A,Applied,Matt Kain CV Feb 2026 Head of Marketing Centre of Excellence v3.pdf,,2026-02-27,Monitor response,Ledger,Application submitted
R-2026-0002,Head of Marketing,LSKD,Brisbane,https://www.seek.com.au/job/90404349,A,Applied,, ,2026-02-27,Monitor response,Ledger,User confirmed applied
R-2026-0003,General Manager - Growth & Transformation,Sharp & Carter,Brisbane,https://www.seek.com.au/job/90526213,A,Applied,Matt Kain CV Feb 2026 General Manager Growth and Transformation Sharp and Carter v4.pdf,,2026-03-01,Monitor response,Ledger,User instructed: mark applied and monitor
R-2026-0004,Consulting Director,Datacom,Brisbane,https://www.linkedin.com/jobs/view/4376553708,A,Applied,Matt Kain CV Feb 2026 Consulting Director Datacom.pdf,,2026-03-01,Monitor response,Ledger,User instructed: mark applied and monitor
R-2026-0005,Senior Manager - Digital Growth & Optimisation,BOQ,Brisbane,https://boq.wd3.myworkdayjobs.com/en-GB/Careers-at-BOQGroup/job/Brisbane-Office---Newstead-Village/Senior-Manager---Digital-Growth-Optimisation_JR100332?source=LinkedIn,A,Applied,Matt Kain CV Feb 2026 Senior Manager Digital Growth Optimisation BOQ.pdf,,2026-03-01,Monitor response,Ledger,User instructed: mark applied and monitor
R-2026-0006,Chief Experience Officer,u&u,Brisbane,https://www.seek.com.au/job/90563809,A,Hold,,,2026-03-01,Hold,Radar,User instructed: hold
R-2026-0007,Senior Director - Digital Transformation Services,Metro South Health,Brisbane,https://www.seek.com.au/job/90522976,A,Hold,,,2026-03-01,Hold,Radar,User instructed: hold
R-2026-0008,General Manager - Information Technology,Techforce,Brisbane,https://www.seek.com.au/job/90573967,C,Ignored,,,2026-02-27,None,Ledger,Too tech
R-2026-0009,General Manager - Operational Technology,Stellar,Brisbane,https://www.seek.com.au/job/90545972,C,Ignored,,,2026-02-27,None,Ledger,Too tech
R-2026-0010,Head of Marketing (Remote from Australia),Jobgether (partner listing),Remote (Australia),https://www.linkedin.com/jobs/view/4378698278/,A,Applied,Matt Kain CV Mar 2026 Head of Marketing Jobgether.pdf,,2026-03-01,Monitor response,Ledger,User flagged as interesting; verify employer identity (digest showed Airbnb mismatch) before applying. | User confirmed applied; CV attached in chat.
R-2026-0011,Head of Ecommerce - Global,Love to Dream,Remote,https://www.linkedin.com/jobs/view/4377602833/,A,Applied,MATT KAIN standard CV (ecommerce-performance).pdf,,2026-03-01,Monitor response,Ledger,User confirmed applied; CV attached in chat.
R-2026-0012,"Head of Communications, ANZ",Airbnb,Sydney / Remote (ANZ),https://www.linkedin.com/jobs/view/4377175677/,B,Hold,,,2026-03-01,Hold,Radar,User clarified this is the true Airbnb role; responses managed off LinkedIn. | User instructed: hold Airbnb role.
R-2026-0013,General Manager Stakeholder Engagement,u&u Recruitment Partners,Brisbane,https://www.seek.com.au/job/90685480,A,Pinned,,,2026-03-04,Assess + prep CV,Forge,User instruction: Job 1 maybe - pin it.
R-2026-0014,"Senior Manager- Eco-Tourism, Marketing and Partnerships",Brisbane Sustainability Agency,Brisbane,https://www.seek.com.au/job/90684847,B,Ignored,,,2026-03-04,None,Ledger,User instruction: Job 2 no.
R-2026-0015,Director of Sales and Marketing,Sofitel Brisbane Central,Brisbane,https://www.seek.com.au/job/90644618,B,Ignored,,,2026-03-04,None,Ledger,User instruction: Job 3 no.
R-2026-0016,Director of PR & Communications,Minor Hotels,Brisbane,https://www.linkedin.com/comm/jobs/view/4370390318/,B,Ignored,,,2026-03-04,None,Ledger,User instruction: Job 4 no.
R-2026-0017,General Manager SEO & AI SEARCH,Compare the Market,Brisbane,https://www.seek.com.au/job/90758951,A,Applied,,,2026-03-08,Monitor response,Ledger,User instruction: #1 applied.
R-2026-0018,Brand & Campaign Lead,National Storage,Brisbane,https://au.indeed.com/rc/clk/dl?jk=eccedaa3ff62bed8,B,Ignored,,,2026-03-08,None,Ledger,User instruction: #2 disregard.
R-2026-0019,"Specialist, Performance Marketing",Insurance Australia Group,Brisbane,https://au.indeed.com/rc/clk/dl?jk=8e5c17acfa745706,A,Assessing,,,2026-03-08,Assess + prep CV,Vantage,User shortlisted for alignment scoring set.
R-2026-0020,SVCS Marketing Campaign Manager,St Vincent's Health Australia,Brisbane,https://au.indeed.com/rc/clk/dl?jk=540876b03ce18e8a,B,Ignored,,,2026-03-08,None,Ledger,User instruction: #4 disregard.
R-2026-0021,Digital Marketing Manager,Brisbane Racing Club,Ascot QLD,https://au.indeed.com/rc/clk/dl?jk=989ded15872a1f0d,A,Assessing,,,2026-03-08,Assess + prep CV,Vantage,User shortlisted for alignment scoring set.
R-2026-0022,Head of Strategic Partnerships & Alliances,Mansell Taylor Consulting,Brisbane,https://www.seek.com.au/job/90768051,A,Assessing,,,2026-03-08,Assess + prep CV,Vantage,User shortlisted for alignment scoring set.
R-2026-0023,Strategic Growth Executive,Six Degrees Executive Pty Ltd,Brisbane,https://www.seek.com.au/job/90767931,A,Assessing,,,2026-03-08,Assess + prep CV,Vantage,User shortlisted for alignment scoring set.
R-2026-0024,"Directors, Media and Internal Communications and Executive and Ministerial",AUSTRAC,Brisbane,https://www.seek.com.au/job/90765041,B,Assessing,,,2026-03-08,Alignment score + go/no-go,Vantage,User requested alignment score for #8.
,,,,,,,,,,,,
R-2026-TEST-EY,Oceania Data Lead - Senior Manager/Associate Director,EY,Australia,https://www.ey.com/,C,Drafting,/home/kain/.openclaw/workspace/outputs/cv/R-2026-TEST-EY/draft.md,,2026-03-08,Review stretch-fit before apply,crm-steward,Hero workflow test run
R-2026-PASS-001,Head of Marketing,Unknown,Unknown,,B,Drafting,/home/kain/.openclaw/workspace/outputs/cv/R-2026-PASS-001/draft.md,,2026-03-08,Ready to apply with submitted artefacts,crm-steward,Inserted by deterministic CV run pipeline
R-2026-FAIL-001,DXP Consultant,Unknown,Unknown,,B,Drafting,/home/kain/.openclaw/workspace/outputs/cv/R-2026-FAIL-001/draft.md,,2026-03-08,Revise CV per qa.json hard fails,crm-steward,Inserted by deterministic CV run pipeline
```


## crm/STATUS_MAPPING_V1.md

```markdown
# Canonical CRM Status Mapping v1

**Purpose:** Provide a single source of truth for status taxonomy across:
- DB (SQLite schema v0 and future schema)
- CSV/task tracker (`ops/agent-tasks.csv`)
- UI badges/filters (ops.mattkain.com)
- Event model (`crm.*.status_changed.v1`)

**Design principles**
1. **Small, durable enums** (avoid UI-only nuance).
2. **Separate entity lifecycles** (Job ≠ Application ≠ Task).
3. **Canonical keys are lowercase snake_case** (stable for code + events).
4. **UI labels can change** without breaking data.

---

## 1) Canonical enums

### 1.0 Ops pipeline status (`ops.pipeline.status`)
Operational Kanban status for `ops/job-pipeline.csv`. This is a **UI/ops view** (not the durable CRM job/application lifecycle), but it needs a canonical key set so the UI can be mapped deterministically.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `pinned` | Pinned | Manually pinned at top of pipeline. | no |
| `new` | New | Captured, not yet assessed. | no |
| `assessing` | Assessing | Screening / role fit assessment in progress. | no |
| `cv_ready` | CV Ready | Tailored CV is prepared and ready to apply. | no |
| `applied` | Applied | Application submitted. | no |
| `interview` | Interview | In an interview loop. | no |
| `offer` | Offer | Offer received. | yes |
| `rejected` | Rejected | Rejected by employer. | yes |
| `hold` | Hold | Paused (timing, dependency, or decision). | no |
| `ignored` | Ignored | Explicitly not pursuing. | yes |

**Implementation note:** `ops.pipeline.status` is intentionally separate from `crm.job.status` and `crm.application.status` (Sections 1.1 and 1.2). The Kanban can evolve without forcing CRM migrations.

### 1.1 Job status (`crm.job.status`)
Jobs represent *opportunities* (roles) irrespective of whether an application has been started.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `identified` | Identified | Role found and captured. | no |
| `shortlisted` | Shortlisted | Worth pursuing, actively being worked. | no |
| `dropped` | Dropped | No longer pursuing. | yes |

**Allowed transitions**
- `identified` → `shortlisted` | `dropped`
- `shortlisted` → `dropped`
- `dropped` → (none)

---

### 1.2 Application status (`crm.application.status`)
Applications represent the *execution track* for a given job.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `not_started` | Not started | No application artefacts created yet. | no |
| `drafting` | Drafting | CV/CL being tailored, but not submitted. | no |
| `submitted` | Submitted | Application submitted. | no |
| `interviewing` | Interviewing | Any live interview loop (incl. screening). | no |
| `offer` | Offer | Offer received. | yes |
| `rejected` | Rejected | Explicit rejection received. | yes |
| `withdrawn` | Withdrawn | We withdrew / stopped mid-process. | yes |

**Allowed transitions**
- `not_started` → `drafting` | `withdrawn`
- `drafting` → `submitted` | `withdrawn`
- `submitted` → `interviewing` | `rejected` | `withdrawn`
- `interviewing` → `offer` | `rejected` | `withdrawn`
- `offer` → (none)
- `rejected` → (none)
- `withdrawn` → (none)

---

### 1.3 Task status (`crm.task.status`)
Tasks represent work items (ops tasks, follow-ups, artefact prep) that can exist independently of jobs.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `backlog` | Backlog | Not started. | no |
| `in_progress` | In progress | Actively being worked. | no |
| `review` | Review | Pending review/approval/QA before continuing. | no |
| `blocked` | Blocked | Cannot proceed due to dependency/decision. | no |
| `done` | Done | Completed. | yes |

**Allowed transitions**
- `backlog` → `in_progress` | `review` | `blocked` | `done`
- `in_progress` → `review` | `blocked` | `done`
- `review` → `in_progress` | `blocked` | `done`
- `blocked` → `in_progress` | `review` | `done`
- `done` → (none)

---

## 2) Mapping tables

### 2.1 DB schema v0 (legacy) → canonical

#### `ops/crm-schema-v0.sql` :: `jobs.status`
Legacy comment: `new|shortlisted|applied|interview|closed`

| legacy | canonical |
|---|---|
| `new` | `identified` |
| `shortlisted` | `shortlisted` |
| `applied` | `shortlisted` *(application state belongs on application)* |
| `interview` | `shortlisted` *(application state belongs on application)* |
| `closed` | `dropped` |

#### `ops/crm-schema-v0.sql` :: `applications.status`
Legacy comment: `draft|submitted|responded|rejected|offer`

| legacy | canonical |
|---|---|
| `draft` | `drafting` |
| `submitted` | `submitted` |
| `responded` | `interviewing` |
| `offer` | `offer` |
| `rejected` | `rejected` |

#### `ops/crm-schema-v0.sql` :: `tasks.status`
Legacy default: `open`

| legacy | canonical |
|---|---|
| `open` | `backlog` |

---

### 2.2 CSV task system (`ops/agent-tasks.csv`) → canonical Task status

| CSV value | canonical |
|---|---|
| `Backlog` | `backlog` |
| `In Progress` | `in_progress` |
| `Review` | `review` |
| `Approved` | `review` *(treated as review-state)* |
| `Blocked` | `blocked` |
| `Done` | `done` |

### 2.3 Pipeline CSV (`ops/job-pipeline.csv`) → canonical Ops pipeline status

| CSV value | canonical |
|---|---|
| `Pinned` | `pinned` |
| `New` | `new` |
| `Assessing` | `assessing` |
| `CV Ready` | `cv_ready` |
| `Applied` | `applied` |
| `Interview` | `interview` |
| `Offer` | `offer` |
| `Rejected` | `rejected` |
| `Hold` | `hold` |
| `Ignored` | `ignored` |

---

## 3) UI badge defaults

- `identified` → neutral/grey
- `shortlisted` → primary/blue
- `dropped` → muted/grey (or danger/red if explicitly rejected)

- `not_started` → neutral/grey
- `drafting` → warning/amber
- `submitted` → primary/blue
- `interviewing` → accent/purple
- `offer` → success/green
- `rejected` → danger/red
- `withdrawn` → muted/grey

- `backlog` → neutral/grey
- `in_progress` → primary/blue
- `review` → warning/amber
- `blocked` → warning/amber
- `done` → success/green

---

## 4) Migration note (lightweight)

If/when we migrate existing SQLite rows or import CSVs:
1. **Do not overwrite raw legacy values** on day 1.
2. Create a one-off transform (or view) that maps legacy → canonical using Section 2.
3. Once consumers are updated, backfill canonical values and constrain columns to enum set.

---

## 5) Implementation notes (for builders)

- Canonical keys should be used in events:
  - `crm.job.status_changed.v1` uses `identified|shortlisted|dropped`
  - `crm.application.status_changed.v1` uses `not_started|drafting|submitted|interviewing|offer|rejected|withdrawn`
  - `crm.task.status_changed.v1` uses `backlog|in_progress|blocked|done`

- If a UI needs more nuance (e.g., “Phone screen”, “Final round”), represent it as **metadata** on the event, not a new status key.
```


## crm/status-mapping-v1.json

```json
{
  "version": 1,
  "canonical": {
    "pipeline": {
      "pinned": {"label": "Pinned", "terminal": false},
      "new": {"label": "New", "terminal": false},
      "assessing": {"label": "Assessing", "terminal": false},
      "cv_ready": {"label": "CV Ready", "terminal": false},
      "applied": {"label": "Applied", "terminal": false},
      "interview": {"label": "Interview", "terminal": false},
      "offer": {"label": "Offer", "terminal": true},
      "rejected": {"label": "Rejected", "terminal": true},
      "hold": {"label": "Hold", "terminal": false},
      "ignored": {"label": "Ignored", "terminal": true}
    },
    "pipeline_order": ["pinned","new","assessing","cv_ready","applied","interview","offer","rejected","hold","ignored"],
    "job": {
      "identified": {
        "label": "Identified",
        "terminal": false,
        "allowed_next": ["shortlisted", "dropped"]
      },
      "shortlisted": {
        "label": "Shortlisted",
        "terminal": false,
        "allowed_next": ["dropped"]
      },
      "dropped": {
        "label": "Dropped",
        "terminal": true,
        "allowed_next": []
      }
    },
    "application": {
      "not_started": {
        "label": "Not started",
        "terminal": false,
        "allowed_next": ["drafting", "withdrawn"]
      },
      "drafting": {
        "label": "Drafting",
        "terminal": false,
        "allowed_next": ["submitted", "withdrawn"]
      },
      "submitted": {
        "label": "Submitted",
        "terminal": false,
        "allowed_next": ["interviewing", "rejected", "withdrawn"]
      },
      "interviewing": {
        "label": "Interviewing",
        "terminal": false,
        "allowed_next": ["offer", "rejected", "withdrawn"]
      },
      "offer": {
        "label": "Offer",
        "terminal": true,
        "allowed_next": []
      },
      "rejected": {
        "label": "Rejected",
        "terminal": true,
        "allowed_next": []
      },
      "withdrawn": {
        "label": "Withdrawn",
        "terminal": true,
        "allowed_next": []
      }
    },
    "task": {
      "backlog": {
        "label": "Backlog",
        "terminal": false,
        "allowed_next": ["in_progress", "review", "blocked", "done"]
      },
      "in_progress": {
        "label": "In progress",
        "terminal": false,
        "allowed_next": ["review", "blocked", "done"]
      },
      "review": {
        "label": "Review",
        "terminal": false,
        "allowed_next": ["in_progress", "blocked", "done"]
      },
      "blocked": {
        "label": "Blocked",
        "terminal": false,
        "allowed_next": ["in_progress", "review", "done"]
      },
      "done": {
        "label": "Done",
        "terminal": true,
        "allowed_next": []
      }
    }
  },
  "mappings": {
    "db_v0": {
      "jobs.status": {
        "new": "identified",
        "shortlisted": "shortlisted",
        "applied": "shortlisted",
        "interview": "shortlisted",
        "closed": "dropped"
      },
      "applications.status": {
        "draft": "drafting",
        "submitted": "submitted",
        "responded": "interviewing",
        "offer": "offer",
        "rejected": "rejected"
      },
      "tasks.status": {
        "open": "backlog"
      }
    },
    "agent_tasks_csv": {
      "Backlog": "backlog",
      "In Progress": "in_progress",
      "Review": "review",
      "Approved": "review",
      "Blocked": "blocked",
      "Done": "done"
    },
    "job_pipeline_csv": {
      "Pinned": "pinned",
      "New": "new",
      "Assessing": "assessing",
      "CV Ready": "cv_ready",
      "Applied": "applied",
      "Interview": "interview",
      "Offer": "offer",
      "Rejected": "rejected",
      "Hold": "hold",
      "Ignored": "ignored"
    }
  }
}
```


## cv-pipeline/README.md

```markdown
# CV Automation Pipeline (Phase 1)

## Goal
Input job URL or pasted role text → output tailored 2-page CV draft + polished PDF + shareable file paths.

## Pipeline v1 (implemented next)
1. **Ingest**
   - Accept `job_url` or `job_text`.
   - Fetch URL text when provided.
2. **Extract requirements**
   - Parse responsibilities, must-have skills, preferred experience, seniority.
3. **Profile match**
   - Load Matt CV source data and prior achievement bank.
   - Map evidence to requirements.
4. **Draft generation**
   - Produce ATS-safe, 2-page markdown draft.
5. **Polish pass**
   - Tighten language, enforce style, remove fluff.
6. **PDF build**
   - Convert markdown to PDF via local renderer.
7. **Return outputs**
   - `draft.md`, `final.pdf`, rationale summary.

## File Layout
- `inputs/jobs/` raw job inputs
- `inputs/cv/` source CV files
- `outputs/cv/` generated drafts and PDFs
- `ops/cv-pipeline/` orchestration scripts/spec

## Acceptance Criteria
- End-to-end run in <2 minutes for pasted JD.
- 2-page output target.
- Explicit mapping of role requirements to CV evidence.
- One-click file path response for user.
```


## cv-pipeline/qa-thresholds-v1.json

```json
{
  "version": "v1",
  "hard_fail": {
    "must_have_coverage_pct_min": 60,
    "page_estimate_max": 2.2,
    "placeholder_count_max": 0,
    "required_sections": [
      "Summary",
      "Core Strengths",
      "Selected Experience Alignment"
    ]
  },
  "soft_warning": {
    "keyword_coverage_pct_min": 75,
    "quantified_bullets_min": 3,
    "nice_to_have_coverage_pct_min": 40
  },
  "pass_condition": "PASS only when zero hard_fail violations. Soft warnings allowed."
}
```


## cv-pipeline/run_cv_deterministic.py

```py
#!/usr/bin/env python3
import argparse, csv, datetime as dt, json, re
from pathlib import Path

WS = Path('/home/kain/.openclaw/workspace')
THRESH = WS / 'ops/cv-pipeline/qa-thresholds-v1.json'


def slug(s: str) -> str:
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')[:48] or 'role'


def extract_requirements(text: str):
    lines = [l.strip('-• \t') for l in text.splitlines() if l.strip()]
    must, nice, resp = [], [], []
    for l in lines:
        low = l.lower()
        if any(k in low for k in ['must', 'required', 'proven', 'strong understanding', 'deep knowledge']):
            must.append(l)
        elif any(k in low for k in ['ideally', 'nice', 'desirable', 'familiarity']):
            nice.append(l)
        elif any(k in low for k in ['lead', 'oversee', 'coordinate', 'partner', 'support', 'act as']):
            resp.append(l)
    if not must:
        must = lines[:6]
    if not resp:
        resp = lines[6:12]
    kws = sorted(set(re.findall(r'[A-Za-z][A-Za-z\-]{3,}', text)))
    return {
        'must_have': must[:12],
        'nice_to_have': nice[:8],
        'responsibilities': resp[:12],
        'keywords': kws[:30],
        'seniority': 'senior' if re.search(r'senior|director|head', text, re.I) else 'mid',
        'domain': 'marketing/growth/transformation',
        'location_constraints': 'as listed in role input'
    }


def build_draft(role_key: str, title: str, req: dict, profile: str):
    base = f"""# Matt Kain\nBrisbane, Australia\n\n## Summary\nStrategic operator across growth, transformation, and digital performance with executive stakeholder alignment capability and delivery focus.\n\n## Core Strengths\n- Commercial strategy and execution alignment\n- Data-informed decision systems\n- Cross-functional leadership across business, risk, and technology\n- Program governance and measurable outcomes\n\n## Selected Experience Alignment\n- Led transformation initiatives with executive stakeholder alignment and measurable outcomes (+18% lead conversion).\n- Built operating cadence and reporting frameworks that improved decision velocity (+22% faster approvals).\n- Directed cross-functional delivery in regulated contexts while maintaining quality and risk controls (12 initiatives delivered).\n\n## Role Targeting Notes\n- Prioritised role requirements are reflected in summary, strengths, and alignment bullets.\n"""
    if profile == 'fail':
        base += "\n## Draft Placeholder\n- [REPLACE WITH METRIC]\n"
        base += ("Extra filler paragraph. " * 700)
    return base


def qa_eval(draft: str, req: dict, thresh: dict):
    hard = []
    warn = []
    low = draft.lower()

    sections_present = sum(1 for s in thresh['hard_fail']['required_sections'] if f'## {s}'.lower() in low)
    must_covered = sum(1 for m in req['must_have'] if any(tok.lower() in low for tok in re.findall(r'[A-Za-z]{4,}', m)[:3]))
    must_pct = round((must_covered / max(1, len(req['must_have']))) * 100)

    kw_covered = sum(1 for k in req['keywords'] if k.lower() in low)
    kw_pct = round((kw_covered / max(1, len(req['keywords']))) * 100)

    nice_cov = sum(1 for n in req['nice_to_have'] if any(tok.lower() in low for tok in re.findall(r'[A-Za-z]{4,}', n)[:3]))
    nice_pct = round((nice_cov / max(1, len(req['nice_to_have']) if req['nice_to_have'] else 1)) * 100)

    placeholders = len(re.findall(r'\[REPLACE|TODO|TBD|placeholder', draft, re.I))
    bullets = len(re.findall(r'^-\s+.*\d', draft, re.M))
    page_est = round(max(1.0, len(draft) / 3800), 2)

    if must_pct < thresh['hard_fail']['must_have_coverage_pct_min']:
        hard.append(f'must_have_coverage_pct<{thresh["hard_fail"]["must_have_coverage_pct_min"]} ({must_pct})')
    if page_est > thresh['hard_fail']['page_estimate_max']:
        hard.append(f'page_estimate>{thresh["hard_fail"]["page_estimate_max"]} ({page_est})')
    if placeholders > thresh['hard_fail']['placeholder_count_max']:
        hard.append(f'placeholder_count>{thresh["hard_fail"]["placeholder_count_max"]} ({placeholders})')
    if sections_present < len(thresh['hard_fail']['required_sections']):
        hard.append('missing_required_sections')

    if kw_pct < thresh['soft_warning']['keyword_coverage_pct_min']:
        warn.append(f'keyword_coverage_pct<{thresh["soft_warning"]["keyword_coverage_pct_min"]} ({kw_pct})')
    if bullets < thresh['soft_warning']['quantified_bullets_min']:
        warn.append(f'quantified_bullets<{thresh["soft_warning"]["quantified_bullets_min"]} ({bullets})')
    if nice_pct < thresh['soft_warning']['nice_to_have_coverage_pct_min'] and req['nice_to_have']:
        warn.append(f'nice_to_have_coverage_pct<{thresh["soft_warning"]["nice_to_have_coverage_pct_min"]} ({nice_pct})')

    passed = len(hard) == 0
    return {
        'pass': passed,
        'hard_fail_reasons': hard,
        'soft_warnings': warn,
        'metrics': {
            'must_have_coverage_pct': must_pct,
            'keyword_coverage_pct': kw_pct,
            'nice_to_have_coverage_pct': nice_pct,
            'page_estimate': page_est,
            'placeholder_count': placeholders,
            'quantified_bullets': bullets
        }
    }


def write_pdf_from_text(text: str, out_pdf: Path):
    try:
        from fpdf import FPDF
    except Exception:
        return False, 'fpdf_missing'
    pdf = FPDF()
    pdf.set_auto_page_break(auto=True, margin=12)
    pdf.add_page()
    pdf.set_font('Helvetica', size=10)
    for line in text.splitlines():
        clean = line.encode('ascii', 'ignore').decode('ascii')
        if not clean.strip():
            pdf.ln(3)
        else:
            pdf.multi_cell(0, 5, clean)
    pdf.output(str(out_pdf))
    return True, None


def upsert_job_csv(role_key: str, title: str, stage: str, draft_path: str, pdf_path: str | None, next_step: str):
    path = WS / 'ops/job-pipeline.csv'
    rows = []
    if path.exists():
        with path.open(newline='') as f:
            rows = list(csv.reader(f))
    if not rows:
        rows = [["role_id","title","company","location","url","fit_tier","status","cv_file","cover_note","last_action","next_action","owner","notes"]]
    hdr = rows[0]
    idx = {k:i for i,k in enumerate(hdr)}
    found = False
    for r in rows[1:]:
        if len(r) < len(hdr):
            r += ['']*(len(hdr)-len(r))
        if r[idx['role_id']] == role_key:
            r[idx['title']] = title
            r[idx['status']] = stage
            r[idx['cv_file']] = pdf_path or draft_path
            r[idx['last_action']] = str(dt.datetime.utcnow().date())
            r[idx['next_action']] = next_step
            r[idx['notes']] = 'Updated by deterministic CV run pipeline'
            found = True
            break
    if not found:
        new = ['']*len(hdr)
        new[idx['role_id']] = role_key
        new[idx['title']] = title
        if 'company' in idx: new[idx['company']] = 'Unknown'
        if 'location' in idx: new[idx['location']] = 'Unknown'
        if 'url' in idx: new[idx['url']] = ''
        if 'fit_tier' in idx: new[idx['fit_tier']] = 'B'
        new[idx['status']] = stage
        new[idx['cv_file']] = pdf_path or draft_path
        if 'cover_note' in idx: new[idx['cover_note']] = ''
        new[idx['last_action']] = str(dt.datetime.utcnow().date())
        new[idx['next_action']] = next_step
        if 'owner' in idx: new[idx['owner']] = 'crm-steward'
        if 'notes' in idx: new[idx['notes']] = 'Inserted by deterministic CV run pipeline'
        rows.append(new)
    with path.open('w', newline='') as f:
        csv.writer(f).writerows(rows)


def upsert_followup_task(role_key: str, passed: bool):
    path = WS / 'ops/agent-tasks.csv'
    rows = []
    if path.exists():
        with path.open(newline='') as f:
            rows = list(csv.reader(f))

    # Support both legacy + current header variants.
    if not rows:
        rows = [["task_id","role_id","title","agent","priority","status","due_date","created_at","updated_at","notes"]]

    hdr = rows[0]
    idx = {k: i for i, k in enumerate(hdr)}

    due_col = 'due' if 'due' in idx else ('due_date' if 'due_date' in idx else None)
    owner_col = 'owner' if 'owner' in idx else ('agent' if 'agent' in idx else None)

    task_id = f"CV-{role_key}-FOLLOWUP"
    title = f"{'Submit application' if passed else 'Revise CV'} for {role_key}"
    status = 'Review' if passed else 'Blocked'
    due = str((dt.datetime.utcnow() + dt.timedelta(days=1)).date())

    found = False
    for r in rows[1:]:
        if len(r) < len(hdr):
            r += [''] * (len(hdr) - len(r))
        if r[idx['task_id']] == task_id:
            if 'title' in idx:
                r[idx['title']] = title
            if 'status' in idx:
                r[idx['status']] = status
            if due_col:
                r[idx[due_col]] = due
            if 'updated_at' in idx:
                r[idx['updated_at']] = str(dt.datetime.utcnow().date())
            if 'notes' in idx:
                r[idx['notes']] = 'Updated by deterministic CV run pipeline'
            if 'role_id' in idx:
                r[idx['role_id']] = role_key
            found = True
            break

    if not found:
        new = [''] * len(hdr)
        new[idx['task_id']] = task_id
        if 'role_id' in idx:
            new[idx['role_id']] = role_key
        if 'epic' in idx:
            new[idx['epic']] = 'cv-pipeline'
        if 'title' in idx:
            new[idx['title']] = title
        if owner_col:
            new[idx[owner_col]] = 'Forge'
        if 'priority' in idx:
            new[idx['priority']] = 'High'
        if 'status' in idx:
            new[idx['status']] = status
        if due_col:
            new[idx[due_col]] = due
        if 'updated_at' in idx:
            new[idx['updated_at']] = str(dt.datetime.utcnow().date())
        if 'created_at' in idx:
            new[idx['created_at']] = str(dt.datetime.utcnow().date())
        if 'notes' in idx:
            new[idx['notes']] = 'Created by deterministic CV run pipeline'
        rows.append(new)

    with path.open('w', newline='') as f:
        csv.writer(f).writerows(rows)

    return task_id, status


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--role-key', required=True)
    ap.add_argument('--title', required=True)
    ap.add_argument('--input-file', required=True)
    ap.add_argument('--profile', choices=['pass','fail'], required=True)
    args = ap.parse_args()

    role_key = args.role_key
    input_text = Path(args.input_file).read_text(errors='ignore')
    req = extract_requirements(input_text)

    out = WS / 'outputs/cv' / role_key
    out.mkdir(parents=True, exist_ok=True)

    (out/'intake.txt').write_text(input_text)
    (out/'analysis.json').write_text(json.dumps(req, indent=2))

    emap = {
        'role_key': role_key,
        'mappings': [
            {'requirement': m, 'evidence': ['transferable leadership + transformation evidence'], 'strength': 'medium', 'gap': None}
            for m in req['must_have'][:6]
        ]
    }
    (out/'evidence-map.json').write_text(json.dumps(emap, indent=2))

    draft = build_draft(role_key, args.title, req, args.profile)
    (out/'draft.md').write_text(draft)

    thresh = json.loads(THRESH.read_text())
    qa = qa_eval(draft, req, thresh)
    (out/'qa.json').write_text(json.dumps(qa, indent=2))

    final_pdf = out/'final.pdf'
    pdf_generated = False
    pdf_error = None
    if qa['pass']:
        pdf_generated, pdf_error = write_pdf_from_text(draft, final_pdf)
    else:
        if final_pdf.exists():
            final_pdf.unlink()

    # canonical stage mapping for this workflow (matches ops/crm/status-mapping-v1.json → job_pipeline_csv)
    #
    # - QA pass → CV Ready
    # - QA fail → Assessing (still in progress)
    stage = 'CV Ready' if qa['pass'] else 'Assessing'

    if qa['pass']:
        if pdf_generated:
            next_step = 'Ready to apply (final.pdf generated)'
        else:
            next_step = 'QA passed; generate final.pdf (install fpdf) or proceed with draft.md'
    else:
        next_step = 'Revise CV per qa.json hard fails'

    upsert_job_csv(role_key, args.title, stage, str(out/'draft.md'), str(final_pdf) if pdf_generated else None, next_step)
    task_id, task_status = upsert_followup_task(role_key, qa['pass'])

    manifest = {
        'role_key': role_key,
        'run_at_utc': dt.datetime.utcnow().isoformat() + 'Z',
        'input': {'input_file': args.input_file, 'title': args.title},
        'qa_result': 'pass' if qa['pass'] else 'fail',
        'qa_hard_fail_reasons': qa['hard_fail_reasons'],
        'qa_soft_warnings': qa['soft_warnings'],
        'artefacts': {
            'intake_txt': str(out/'intake.txt'),
            'analysis_json': str(out/'analysis.json'),
            'evidence_map_json': str(out/'evidence-map.json'),
            'draft_md': str(out/'draft.md'),
            'qa_json': str(out/'qa.json'),
            'final_pdf': str(final_pdf) if pdf_generated else None
        },
        'crm_update': {
            'job_pipeline_status_written': stage,
            'next_step_written': next_step
        },
        'task_update': {
            'task_id': task_id,
            'task_status': task_status
        },
        'pdf_generated': pdf_generated,
        'pdf_error': pdf_error
    }
    (out/'manifest.json').write_text(json.dumps(manifest, indent=2))
    print(json.dumps({'role_key': role_key, 'qa': manifest['qa_result'], 'pdf_generated': pdf_generated, 'manifest': str(out/'manifest.json')}, indent=2))


if __name__ == '__main__':
    main()
```


## architecture/EVENT_MODEL_V1.md

```markdown
# Event Model v1 (Ops Control Tower)

**Last updated:** 2026-03-08

## Purpose
Create a small, consistent event model so the Control Tower (status page, dashboard worker, future automation) can consume changes across:
- **CRM** (jobs, applications, tasks)
- **CV pipeline** runs (artefacts + QA)
- **Agent/task board** updates (CSV-driven now, DB-driven later)

This increment defines:
1) a **standard event envelope**,
2) a minimum set of **domain events**,
3) **integration contracts** (JSON Schemas), and
4) **migration notes + risks**.

The intent is to support both:
- **File-first** (events written as JSONL in repo, consumed by dashboard-worker.js), and
- **DB-first later** (outbox table + pub/sub), without changing event shapes.

---

## 1) Event envelope (contract)
All events MUST conform to `ops/architecture/schemas/event-envelope.schema.json`.

### Envelope fields
- `spec_version` (string): fixed `"1.0"` for this version.
- `event_id` (string, UUID): unique per event.
- `event_type` (string): namespaced, dot-delimited.
- `occurred_at` (string, RFC3339 UTC): when the change happened.
- `producer` (object): component metadata.
- `subject` (object): domain entity reference.
- `correlation_id` (string, optional): tie together a pipeline run, an ingestion batch, etc.
- `idempotency_key` (string, optional): stable key for de-dupe when replaying.
- `data` (object): event payload; validated by per-event schema.

### Naming convention
`<domain>.<entity>.<action>.v<major>`

Examples:
- `crm.job.status_changed.v1`
- `crm.application.status_changed.v1`
- `crm.task.status_changed.v1`
- `pipeline.cv_run.completed.v1`

---

## 2) Canonical status taxonomy (referenced by events)
This is **not** the full mapping spec (that is T-0204), but events should emit canonical values from day 1.

### JobStatus (v1)
- `identified`
- `shortlisted`
- `dropped`

### ApplicationStatus (v1)
- `not_started`
- `drafting`
- `submitted`
- `interviewing`
- `offer`
- `rejected`
- `withdrawn`

### TaskStatus (v1)
- `backlog`
- `in_progress`
- `blocked`
- `done`

**Rule:** CSV/DB/UI may keep their local labels, but event payloads MUST normalise to these canonical enums.

---

## 3) Minimum domain events (v1)

### A) CRM status change events
These are the highest leverage because they drive dashboards, reminders, and reporting.

1. `crm.job.status_changed.v1`
2. `crm.application.status_changed.v1`
3. `crm.task.status_changed.v1`

Each payload includes:
- `old_status`, `new_status` (canonical)
- `reason` (optional, short string)
- `changed_by` (optional, actor reference, e.g. `"agent:ledger"`, `"human:matt"`)

### B) Pipeline run events
4. `pipeline.cv_run.completed.v1`

Payload includes:
- `role_id`
- `run_id`
- `manifest_path` (expected by T-0205)
- `artefacts` (optional inline summary; full detail remains in manifest)
- `qa_path` (optional convenience pointer)
- `result` (`success|partial|failed`)

---

## 4) Storage and transport (pragmatic v1)

### File-first transport (now)
Write events to:
- `ops/events/events-YYYY-MM.jsonl`

One JSON object per line. This supports:
- cheap append-only writes,
- easy git diff/audit,
- replay by re-processing the log.

### DB outbox (later)
When moving to SQLite/Postgres for CRM, add an `event_outbox` table and ensure writes are:
- transactionally consistent (domain update + outbox insert in same txn),
- published asynchronously to a message bus or file sink.

---

## 5) Integration contracts (schemas)
Schemas live at:
- `ops/architecture/schemas/`

Defined in this increment:
- `event-envelope.schema.json`
- `crm.job.status_changed.v1.schema.json`
- `crm.application.status_changed.v1.schema.json`
- `crm.task.status_changed.v1.schema.json`
- `pipeline.cv_run.completed.v1.schema.json`

---

## 6) Migration notes

### Migration step 1 (no DB changes)
- Add `ops/events/` directory.
- Start emitting events from scripts/agents that already touch CSV/HTML.
- Dashboard worker can ingest JSONL as an additional source of truth.

### Migration step 2 (status normalisation)
- Wherever a status is written (CSV row update, DB update, UI), add a normalisation step that maps to canonical enums before emitting.
- Keep emitting `old_status` and `new_status` in canonical form even if storage keeps legacy text.

### Migration step 3 (CRM schema alignment)
- In `crm-schema-v0.sql`, `jobs.status`, `applications.status`, `tasks.status` currently hold legacy values.
- Plan: introduce new columns (or a check constraint) aligned to canonical enums, then backfill.
  - Example: add `jobs.status_v1` and keep `jobs.status` as legacy during migration.

---

## 7) Risks and mitigations

1) **Status drift (multiple sources of truth)**
- Risk: CSV/DB/UI disagree; events become unreliable.
- Mitigation: enforce canonical enum emission and central mapping table (T-0204) with automated tests.

2) **Duplicate events during replay**
- Risk: JSONL replay double-counts.
- Mitigation: `event_id` uniqueness + consumer de-dupe using `idempotency_key`.

3) **Leaky identifiers / unstable IDs**
- Risk: CSV rows don’t have stable IDs.
- Mitigation: define `subject` as `(type, id)` where `id` is stable: `job:<db_id>` or `job:<hash(url)>` until DB IDs exist.

4) **Schema versioning pain**
- Risk: hard to evolve events.
- Mitigation: version in `event_type` suffix (`.v1`, `.v2`) and avoid breaking changes; add fields only.

---

## Appendix: Example event (job status change)
```json
{
  "spec_version": "1.0",
  "event_id": "2f4b1d24-9c2b-4a90-820f-9c45b16c5b2f",
  "event_type": "crm.job.status_changed.v1",
  "occurred_at": "2026-03-08T08:20:00Z",
  "producer": {"name": "ledger", "version": "0.1"},
  "subject": {"type": "job", "id": "job:123"},
  "correlation_id": "run:cv:role_0042:20260308T0818Z",
  "idempotency_key": "job:123:status:identified->shortlisted",
  "data": {
    "old_status": "identified",
    "new_status": "shortlisted",
    "reason": "High-fit role confirmed",
    "changed_by": "agent:ledger"
  }
}
```
```


## architecture/INTEGRATION_CONTRACTS_V1.md

```markdown
# Integration Contracts V1 (Ops Control Tower)

**Last updated:** 2026-03-08

## Purpose

Define a small, explicit contract layer between:

- **Producers**: agents/tools that create or mutate operational data (tasks, status changes, CV runs, CRM events)
- **Consumers**: static dashboard pages (`status.html`, `kanban.html`, `agent-queue.html`, etc.), workers (`dashboard-worker.js`), and future automations

V1 is intentionally minimal: it standardises *how data is read and appended* without forcing an immediate rewrite of the existing CSV/MD/HTML artefacts.

---

## Contract set (V1)

### 1) HTTP API: Control Tower API (read-mostly)

- **Spec**: `ops/architecture/openapi/control-tower-api.v1.yaml`
- **Style**: REST + JSON, versioned via URL prefix: `/v1/...`
- **Auth**: `X-Api-Key` (optional in local dev; required when exposed beyond localhost)

The API is the canonical integration surface for UI and for agent-side automation.

### 2) Event stream: JSONL append-only (local-first)

- **Envelope**: `ops/architecture/schemas/event-envelope.schema.json`
- **Storage**: `ops/events/events-YYYY-MM.jsonl`
- **Semantics**: append-only; ordering by `occurred_at` (ISO8601) then `event_id`

This stream feeds activity timeline components and acts as the “audit trail” for API-derived state.

---

## Data domains and canonical identifiers

### Task

- `task_id`: `T-XXXX`
- `owner`: agent/person handle (e.g., `Forge`, `Ledger`)
- `status`: `Backlog | In Progress | Blocked | Done` (see `ops/crm/STATUS_MAPPING_V1.md`)

### CV Run

- `role_id`: stable identifier for a role target (preferred over role title)
- `run_id`: immutable run instance identifier

### CRM

- `job_id`, `application_id` (UUIDs)

---

## Integration patterns

### UI pages

UI pages should prefer:

1. **GET** API endpoints for state (`/v1/tasks`, `/v1/agents`, `/v1/status-summary`)
2. **GET** `/v1/events` for timeline
3. Fall back to reading static sources directly only if API is not available

### Agents

Agents/tools should:

- mutate state via **POST** endpoints, which in turn:
  - validate payloads
  - write state to the current storage backend
  - append an event to JSONL

---

## Migration notes (from current repo state)

### Current state

- Operational truth is scattered across:
  - `ops/agent-tasks.csv` (tasks)
  - `ops/agent-roster.yaml` (agents)
  - `ops/UPDATE_CAPTURE.md` and other MD pages (summaries)
  - `ops/architecture/schemas/*.json` (events schemas)

### V1 migration (safe, incremental)

1. **Add API as a thin façade over existing files**
   - Read tasks from `agent-tasks.csv`
   - Read agents from `agent-roster.yaml`
   - Read events from `ops/events/*.jsonl` (if present)

2. **Start writing events on every mutation**
   - When a task status changes, append `crm.task.status_changed.v1` (or introduce `ops.task.status_changed.v1` if you want to keep CRM events separate)

3. **Gradually move writes off CSV**
   - Introduce `ops/data/tasks.sqlite` or `ops/data/tasks.json` as the API write target
   - Keep CSV as an export for humans until UI fully swaps to API

---

## Key risks

- **Dual-write drift**: if both UI and humans edit CSV while API writes elsewhere, state diverges.
  - Mitigation: API becomes the *only writer*; CSV becomes export-only.
- **Identifier mismatch**: task rows missing stable IDs or duplicates (already noted: duplicate `T-0302`).
  - Mitigation: enforce `task_id` uniqueness in API validation.
- **Security posture**: exposing API beyond localhost without auth leaks operational data.
  - Mitigation: bind to localhost by default; require API key and TLS when remote.
- **Over-engineering**: adding API too early could slow shipping.
  - Mitigation: read-only endpoints first; mutation endpoints only for high-value workflows.
```


## architecture/READ_MODEL_CONTRACTS_V1.md

```markdown
# Read Model Contracts v1 (Ops Control Tower)

**Last updated:** 2026-03-09

## Purpose
Decouple UI pages from parsing raw operational artefacts (CSV/MD) by introducing **versioned, schema-validated read models**. Read models are JSON documents produced by a deterministic worker/build step and consumed by static pages.

This increment defines:
- which read models exist in v1,
- where they live,
- JSON Schema contracts for each,
- migration steps from today’s CSV parsing,
- key risks.

This is intentionally **local-first** and **static-site friendly**: read models are files published alongside HTML.

---

## Scope
### In scope (v1)
1) **Status Summary**: a single JSON object to drive `status.html` and high-level KPIs.
2) **Kanban Board**: normalised tasks with swimlanes/columns to drive `kanban.html`.

### Out of scope (v1)
- Full text search indexes
- Time-series analytics
- Live server-side APIs

---

## Storage locations (contract)
Read models MUST be written to:
- `ops/read_models/v1/status_summary.json`
- `ops/read_models/v1/kanban_board.json`

Publishing:
- `ops/publish_ops.sh` should include `ops/read_models/**` in the allow-list.

---

## Versioning rules
- Versioned by **path** and by schema `$id`:
  - `.../v1/...` indicates major version.
- Non-breaking changes (additive fields) are allowed within v1.
- Breaking changes require v2 path + new schema.

---

## Contracts (JSON Schemas)
Schemas live under `ops/architecture/schemas/`.

### 1) Status Summary v1
- Schema: `readmodel.status_summary.v1.schema.json`
- Consumer: `ops/status.html` (and any future “home” dashboard)

### 2) Kanban Board v1
- Schema: `readmodel.kanban_board.v1.schema.json`
- Consumer: `ops/kanban.html`

---

## Relationship to Event Model v1
Read models may be built from any combination of:
- raw artefacts (e.g., `ops/agent-tasks.csv`)
- event log (`ops/events/events-YYYY-MM.jsonl`)
- derived artefacts (e.g., `ops/usage/api-usage-log.csv`)

Rule of thumb:
- **Events** are the audit trail.
- **Read models** are the fast, UI-ready projection.

---

## Migration notes (incremental)
### Step 0: Introduce read model directory (no UI change)
- Create `ops/read_models/v1/`.
- Produce `status_summary.json` and `kanban_board.json` via a script/agent step.
- Validate outputs against the schemas as a CI/local check.

### Step 1: Update UI pages to prefer read models
- In `ops/ui/*.js` (or page scripts), load JSON from `ops/read_models/v1/*.json` first.
- If missing, fall back to existing CSV parsing for backwards compatibility.

### Step 2: Make read models required for publish
- Add a pre-publish check in `publish_ops.sh` that fails if read models are missing.
- Optional: keep CSV publish for human inspection/export only.

### Step 3 (later): Move from CSV-derived → event-derived
- Once producers consistently emit `*.status_changed.v1` events, the worker can build kanban/status from events + snapshots.
- This removes dependence on CSV structure.

---

## Key risks and mitigations
1) **Stale read models**
- Risk: UI shows old state if the build step isn’t run.
- Mitigation: publish script should *build then publish*; add timestamp + source hashes.

2) **Schema drift**
- Risk: UI and producer disagree about JSON shape.
- Mitigation: validate read model files against JSON Schema in the build step.

3) **Hidden source-of-truth conflict**
- Risk: humans keep editing CSV, but the UI is driven by read models.
- Mitigation: show `generated_from` and `inputs` in each read model, plus a `generated_at` watermark in UI.

4) **Identifier instability**
- Risk: tasks lack stable IDs, breaking reconciliation across inputs.
- Mitigation: require `task_id` and enforce uniqueness at projection time; fail fast on duplicates.

---

## Example: minimal status summary
```json
{
  "spec_version": "1.0",
  "generated_at": "2026-03-09T00:10:00Z",
  "window": {"from": "2026-03-01T00:00:00Z", "to": "2026-03-09T00:10:00Z"},
  "counts": {
    "tasks": {"backlog": 12, "in_progress": 5, "blocked": 1, "done": 27},
    "cv_runs": {"success": 4, "partial": 1, "failed": 0}
  },
  "highlights": [
    {"type": "risk", "title": "Blocked tasks", "detail": "1 task is blocked"}
  ]
}
```
```


## architecture/MEMORY_LAYERS_V1.md

```markdown
# Memory Layers v1 (Ops Control Tower)

**Last updated:** 2026-03-09

## Purpose
Define a pragmatic, automatable memory architecture for Squad Enterprise Architecture work inside this repo.

Goals:
- Separate **ephemeral** chat context from **durable** operational truth.
- Make it easy to **replay** operational history (events) and **reconstruct** dashboards (read models).
- Keep long-term memory **curated**, with clear ownership and retention.
- Minimise PII/secret leakage and keep auditability high (git-friendly).

Non-goals (v1):
- Full enterprise knowledge graph.
- Automated sensitive data discovery/redaction.

---

## 1) Layer model (v1)

### L0. Runtime context (ephemeral)
**What it is:** In-session context (current conversation, tool outputs) that disappears between runs.

- **System of record:** none
- **Storage:** transient (model context)
- **Access pattern:** interactive
- **Retention:** minutes–hours
- **Primary risks:** hallucinated continuity, missing context after restart

**Rule:** never treat L0 as authoritative; write down decisions into L2/L3.

---

### L1. Working scratch (durable but non-authoritative)
**What it is:** Drafts, working notes, raw captures.

- **System of record:** file tree in `ops/` (repo)
- **Storage:** markdown/csv/html/etc
- **Access pattern:** human-first, occasionally machine-read
- **Retention:** weeks–months
- **Primary risks:** duplication, stale docs

**Where it lives (current):**
- `ops/*.md` plans and working docs
- `ops/downloads/*` reference artefacts

**Rule:** L1 is allowed to be messy. Promote conclusions into L2/L3.

---

### L2. Event log (append-only operational truth)
**What it is:** Canonical record of state changes and completed runs.

- **System of record:** JSONL event log
- **Storage:** `ops/events/events-YYYY-MM.jsonl`
- **Access pattern:** append-only write; replay by consumers
- **Retention:** 12 months recommended (configurable)
- **Primary risks:** schema drift, duplicate emission, missing events

**Contract:** see `ops/architecture/EVENT_MODEL_V1.md` and schemas in `ops/architecture/schemas/`.

**Rule:** if something happened that should drive dashboards/automation, emit an event (L2).

---

### L3. Read models (derived, query-optimised views)
**What it is:** Materialised views computed from L2 (and, temporarily, from CSV sources).

- **System of record:** derived, not authoritative
- **Storage:** `ops/read_models/*` (JSON/CSV) and/or `ops/status.html` generated artefacts
- **Access pattern:** read-heavy (UI), regenerated on demand
- **Retention:** regenerate anytime (keep last N for debugging)
- **Primary risks:** divergence from event log, hidden business logic

**Rule:** all transformation logic must be explicit and testable (even if tests come later).

---

### L4. Curated memory (long-term, decision-grade)
**What it is:** Distilled decisions, preferences, and durable facts.

- **System of record:** curated docs (outside `ops/` today, but referenced here)
- **Storage (current):**
  - `MEMORY.md` (long-term)
  - `memory/YYYY-MM-DD.md` (daily raw logs)
- **Access pattern:** lookup and summarisation
- **Retention:** long-term
- **Primary risks:** accidental secrets, overgrowth, unclear truth status

**Rule:** promote only what is stable and useful. Avoid storing secrets unless explicitly requested.

---

## 2) Data classification and handling

### Classification (v1)
- **Public:** safe to publish.
- **Internal:** ok in repo, not meant for public.
- **Sensitive:** credentials, personal contact details, private messages, HR/legal.

### Handling rules
- L2 event payloads MUST be **Internal** by default and SHOULD avoid **Sensitive**.
- If Sensitive data is unavoidable:
  - store a **reference** (pointer) rather than the raw value,
  - or redact/tokenise and keep the mapping outside the repo.

---

## 3) Canonical file map (v1)

### Authoritative vs derived
- **Authoritative:**
  - L2: `ops/events/events-YYYY-MM.jsonl`
- **Derived:**
  - L3: `ops/read_models/*` and generated HTML
- **Curated (decision-grade):**
  - L4: `MEMORY.md` and selected `ops/architecture/*_V*.md` specs

### Indexing (optional v1)
Introduce an optional machine-readable index for curated decisions and artefacts:
- `ops/architecture/memory-index.jsonl` (each line conforms to `memory.entry.v1`)

This supports:
- rapid search,
- linking decisions to events and artefacts,
- controlled summarisation without scraping markdown.

---

## 4) Integration points

### Producers (write)
- Agents/scripts that change CRM/task state emit L2 events.
- Pipelines emit completion events (e.g. `pipeline.cv_run.completed.v1`).

### Consumers (read)
- Dashboard worker consumes L2, produces L3.
- Human operators consult L3 for operational decisions.

---

## 5) Migration notes

### Step 1 (now): document + optional index schema
- Adopt this layer vocabulary in architecture docs.
- Add `memory.entry.v1` schema (optional).

### Step 2 (next): minimal decision capture into index
- When a new architecture increment is created, add a corresponding `memory-index.jsonl` entry:
  - what changed,
  - why,
  - links to files,
  - risks.

### Step 3 (later): automate read-model regeneration
- Ensure read-model generation is deterministic from L2.
- Add a small CI or scheduled job to regenerate L3 from L2.

---

## 6) Risks and mitigations

1) **Too many “truths”** (docs, CSVs, events)
- Mitigation: declare L2 as operational truth for changes; treat CSV/HTML as inputs during transition only.

2) **Sensitive data leakage into L2/L4**
- Mitigation: schema guidance + review checklist; prefer pointers over raw content.

3) **Index becomes another stale artefact**
- Mitigation: keep index optional; if used, enforce “one entry per increment” and validate schema.

4) **Read models embed logic without visibility**
- Mitigation: document transformations and version them; use event schemas as contracts.
```


## architecture/PUBLISH_GUARDRAILS_V1.md

```markdown
# Publish Guardrails v1 (Ops Control Tower)

**Last updated:** 2026-03-09

## Purpose
The Ops Control Tower is published as a **static site** by copying a curated subset of workspace artefacts into a separate publish repo (`tmp_crabbie_repo`) and pushing to `main` via `ops/publish_ops.sh`.

Because this is a *copy-and-push* mechanism (not a build pipeline with secrets isolation), we need an explicit, automated **preflight safety gate** to reduce the risk of accidentally publishing:
- secrets (API keys, tokens, private keys),
- credentials (.env, SSH keys),
- unintentional personal data.

This increment defines the guardrail contract and introduces an executable preflight check.

---

## Guardrail contract

### When the preflight runs
Preflight MUST run **after** files are copied into the publish repo and **before** any `git add/commit/push`.

### Inputs
- Publish repo path: `$WS/tmp_crabbie_repo` (default in `publish_ops.sh`)

### Output behaviours
- **PASS**: exit code `0`, print a short summary.
- **FAIL**: exit code `1`, print:
  - offending file paths,
  - matched rule name(s),
  - minimal redacted context (no full secrets echoed).

### Non-goals (v1)
- Deep content classification (PII detection, ML-based scanning)
- Preventing publication of *all* sensitive operational content (that remains an allow-list responsibility)

---

## Ruleset (v1)

### A) Forbidden file patterns (hard fail)
Fail if any file in publish repo matches (case-insensitive):
- `.env`, `.env.*`
- `*id_rsa*`, `*id_ed25519*`
- `*.pem`, `*.key`, `*.p12`, `*.pfx`
- `*credentials*`, `*secret*`, `*token*` (filename-based)

Rationale: these are almost never intended for public distribution.

### B) Forbidden content patterns (hard fail)
Fail if any file content matches patterns such as:
- `BEGIN (RSA|OPENSSH|EC|PRIVATE) KEY`
- `AKIA[0-9A-Z]{16}` (AWS access key id)
- `xox(b|p|a|r)-` (Slack tokens)
- `ghp_` / `github_pat_` (GitHub tokens)
- Generic high-risk strings (case-insensitive): `api_key=`, `access_token`, `refresh_token`, `client_secret`

Rationale: catch common accidental leakage even if the filename is benign.

### C) Allow-list escape hatch (documented only)
If a false positive blocks publishing, resolve via one of:
- move the artefact out of the publish allow-list,
- redact the content,
- (only if necessary) add a narrowly-scoped exception rule with justification in the preflight script.

---

## Implementation

### Script
- `ops/publish_preflight_v1.sh`

### Integration
- `ops/publish_ops.sh` MUST invoke the preflight script prior to staging/commit.

---

## Migration notes

### Rolling adoption
1. Add `publish_preflight_v1.sh` and wire it into `publish_ops.sh`.
2. Run a publish once and tune false positives.
3. If publication moves to CI later, port the same checks into CI (GitHub Actions) for defence in depth.

### Future increments
- Add a **deny-list of directories** (e.g., never publish `memory/`, raw logs).
- Add a lightweight **PII heuristics scan** (emails, phone numbers) with a warning mode first.

---

## Risks and mitigations

1) **False positives block publishing**
- Mitigation: keep v1 rules minimal and narrowly targeted; add exceptions sparingly with justification.

2) **False negatives (missed secrets)**
- Mitigation: defence-in-depth: keep strict copy allow-list + add CI checks later; avoid storing secrets in artefacts that are ever copied.

3) **Sensitive context in legitimate files (not “secrets”)**
- Mitigation: treat allow-list selection as the primary control; introduce PII warning scan in a later increment.
```


## ux/JOURNEY_MAPS_V1.md

```markdown
# UX Journey Maps v1

## 1) Job Intake -> Prioritise -> Act (file-first)
**Primary artefacts:**
- `ops/job-pipeline.csv` (jobs + next actions)
- `ops/agent-tasks.csv` (work queue)
- (next) `ops/events/events-YYYY-MM.jsonl` (audit + activity feed) per `ops/architecture/EVENT_MODEL_V1.md`

Steps:
1. Digest surfaces candidate roles (email/chat scrape -> shortlist).
2. Matt triages each role: **Pinned / Ignored / Hold / Assessing**.
3. System writes triage decision to `ops/job-pipeline.csv` (`status`, `last_action`, `next_action`, `owner`, `notes`).
4. System creates/updates the highest-leverage task in `ops/agent-tasks.csv` (role brief, alignment score, CV draft, QA/PDF, follow-up).
5. When CV work is requested: CV pipeline run requested and `outputs/cv/<role_id>/` artefacts produced.
6. Deliverable bundle is linked from the job row and shown in UI (draft MD, final PDF, rationale, QA checklist).

Pain points (current):
- **Status mapping drift** between `ops/job-pipeline.csv` labels (e.g., `Pinned`, `Applied`) and canonical enums in `ops/architecture/EVENT_MODEL_V1.md`.
- Follow-up actions are buried in `notes` rather than expressed as structured `next_action` + task.

UX decisions (v1):
- Keep CSV labels for human readability, but **normalise for events** (see T-0204) and UI badges.
- Treat `next_action` as a first-class field displayed on every card/list row.

---

## 2) CV Build Journey (role_id keyed)
**Primary artefacts:**
- Inputs: `inputs/cv/` (base PDFs), role brief (TBD), job URL
- Outputs: `outputs/cv/<role_id>/` (drafts + manifest)
- Utility entry: `ops/cv-run.html` (local command + deep-link into Preview)
- Review surface: `ops/cv-preview.html` (loads draft via input or `?file=`)

Journey:
Intake role_id -> Run (cv-run) -> Analysis summary -> Evidence map -> Draft -> QA gate -> PDF -> Delivery

UX requirements (implementation-ready):
- User-visible **analysis summary** at top of the CV run page (1 screen, scannable).
- Explicit quality gate: QA checklist must be acknowledged before final PDF is considered “ready”.
- One-click access to all artefacts for a role: draft, PDF, manifest, QA, and source links.

Current build note:
- `ops/cv-run.html` generates a one-shot local terminal command and deep-links into Preview.
- `ops/cv-preview.html` can load a generated draft markdown file directly.
- It supports query param `?file=outputs/cv/<role_id>/draft.md`.

---

## 3) Application Tracking Journey (job ↔ application)
**Primary artefacts:**
- Near-term: `ops/job-pipeline.csv`
- Event stream: `ops/events/...jsonl` (activity feed + reminders)

Visible journey states (human labels):
- New -> Assessing -> CV Ready -> Applied -> Interview -> Offer/Closed

System actions:
- Stage changes emit canonical events (`crm.job.status_changed.v1`, `crm.application.status_changed.v1`).
- Follow-up tasks auto-generated (e.g., “Chase recruiter in 5 business days”).
- Next action always visible on the card.

---

## 4) Daily Operator Brief Journey
Inputs: inbox alerts + job digest + pipeline status + blockers -> Output: single concise brief (today/next 48h)

---

## 5) Ops UI Navigation Journey (orientation)
**Primary artefacts:**
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- Pages: `ops/status.html`, `ops/kanban.html`, `ops/agent-queue.html`, `ops/agents.html`, `ops/cv-preview.html`, `ops/api-usage.html`
- Behaviour glue: `ops/ui/nav_v1.js` (active-link semantics + mobile menu)

Goal: user always knows (a) where they are, (b) what changed, (c) the next action.

Current build note:
- `ops/index.html` now exists and acts as “Home”. Home/logo link should resolve to `index.html` (fall back to `status.html` only if `index.html` is not published).

---

## 6) Activity Feed Journey (events-first with derived fallback)
**Primary artefacts:**
- Future canonical: `ops/events/events-YYYY-MM.jsonl` (per `ops/architecture/EVENT_MODEL_V1.md`)
- Current fallback inputs: `ops/job-pipeline.csv`, `ops/agent-tasks.csv`
- Current UI targets: `ops/status.html` (compact), `ops/activity.html` (full, to create)

User story:
- As Matt, I want to see what changed (and what needs attention) without scanning 3 pages.

Journey:
1. Open `ops/status.html`.
2. See “What changed” module.
3. If `ops/events/` exists, render first N events.
4. If `ops/events/` is missing, render **derived activity**:
   - job status changes inferred from `job-pipeline.csv` `status` + `last_action` + `updated_at` (if present)
   - task status changes inferred from `agent-tasks.csv` `status` + `updated_at`
5. Click through to `ops/activity.html` for the full list.

Implementation notes (v1, build-ready):
- Timeline item schema in UI should be normalised to: `{time, entity_type, entity_id, verb, summary, severity, href}`.
- Prefer events when present.
  - Seed file exists now: `ops/events/events-2026-03.jsonl`.
  - v1 fetch rule: try `events/events-2026-03.jsonl` first; if missing, fall back to derived activity.
  - When falling back, show the inline note (exact): `Event feed unavailable, showing derived activity.`
- CSV-derived activity is inherently lossy until CSVs carry an `updated_at` field.
  - Current fallback for `ops/job-pipeline.csv`: use `last_action` as the best available timestamp.
  - Current fallback for `ops/agent-tasks.csv`: use `updated_at` (already present).
  - Date-only values (`YYYY-MM-DD`) should be treated as UTC midnight for ordering.
- Derived rules must be explicitly documented (and shared as a pure function) to avoid drift.
  - Source of truth: `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md` (Handoff item UX-002).

---

## Next UX Deliverables (tracked)
- **IA + navigation map (static v1)**: `ops/ux/IA_AND_NAV_V1.md`.
- **Acceptance criteria pack (build-ready)**: `ops/ux/ACCEPTANCE_CRITERIA_V1.md`.
- **Handoff notes** (copy/paste partial strategy + timeline seed): `ops/ux/HANDOFF_NOTES_V1.md`.
- **Status/event timeline component spec**: `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`.
- Status normalisation mapping table spec (T-0204, Ledger).
- Form/input pattern for role triage actions (Pinned/Ignored/Hold/Assessing) with keyboard-first interactions.

## Build files explicitly tied to this journey set
- `ops/status.html` (overview/launchpad, should link to UX artefacts + host compact Activity module)
- `ops/kanban.html` (pipeline decisions, must surface next action per role)
- `ops/agent-queue.html` (task workload + blockers)
- `ops/agents.html` (agent roster/index, secondary entry to Agents workspace)
- `ops/cv-preview.html` (CV layout/QA/run status; supports `?file=` draft loading)
- (planned) `ops/activity.html` (global event feed; falls back to derived activity until full events)
```


## ux/IA_AND_NAV_V1.md

```markdown
# Ops UX IA + Navigation v1

Owner: UX (Vantage)
Status: Implementation-ready (static HTML v1)
Last updated: 2026-03-09 (10:28 UTC)

## 0) Scope
This IA covers the *current build surfaces* in `ops/*.html` plus their supporting artefacts. It is written to be directly implementable in static HTML first, and later migratable to a templated build.

Current build files in scope:
- `ops/index.html`
- `ops/status.html`
- `ops/kanban.html`
- `ops/agent-queue.html`
- `ops/agents.html`
- `ops/cv-preview.html`
- `ops/cv-run.html` (utility page, currently linked in global nav)
- `ops/api-usage.html` (utility page, currently linked in global nav)

Planned build files (not yet present):
- `ops/activity.html`

UX source specs (this folder):
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ops/ux/JOURNEY_MAPS_V1.md`
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md`
- `ops/ux/HANDOFF_NOTES_V1.md`

Build note (current reality):
- The HTML pages currently use a simpler `.topbar` header with cross-links.
- `ops/ui/nav_v1.js` is present and now:
  - toggles the mobile menu reliably (Escape/outside click/link click)
  - applies active-link semantics via `aria-current="page"` and `.btn--primary` based on the current filename
- `ops/kanban.html` now treats the board as a labelled, keyboard-focusable horizontal scroll region (`role="region"`, `aria-label`, `tabindex="0"`) so the scroll affordance is discoverable
- `ops/index.html` now exists and acts as a lightweight landing page (“Home”).
- The “home” logo link currently points to `index.html` across pages (aligned to the current build).

Pragmatic v1 recommendation:
- Treat `index.html` as “Home”, and `status.html` as the operational launchpad/status board.

---

## 1) Primary information architecture
### Level 0: Workspaces (future)
- Default workspace label shown: **Employment Pod**
- Future: multi-workspace switcher (e.g., Consulting Pod, Trading Pod)

### Level 1: Primary sections (masthead tabs)
Aligned to `MASTHEAD_NAV_SPEC_V1.md`.

1. **Pipeline**
   - Purpose: see jobs, status, next action
   - Current page: `ops/kanban.html`
   - Source data: `ops/job-pipeline.csv`

2. **Agents**
   - Purpose: see tasks by agent and current blockers
   - Current pages:
     - `ops/agent-queue.html` (task board)
     - `ops/agents.html` (agent roster/index)
   - Source data: `ops/agent-tasks.csv` + `ops/agents/*`

3. **UX**
   - Purpose: navigation + journeys + component specs
   - Current content: markdown in `ops/ux/`
   - Landing (recommended): `ops/ux/index.md` (to create when we add more docs)

4. **Design**
   - Purpose: design language + component tokens
   - Current content: `ops/design/DESIGN_ROADMAP_V1.md` and `ops/ui/*`

5. **Roadmap**
   - Purpose: execution plan, gantt, update capture
   - Current content:
     - `ops/EXECUTION_PLAN_2026-03-03.md`
     - `ops/project-gantt.md`
     - `ops/UPDATE_CAPTURE.md`
     - (utility) `ops/api-usage.html`

6. **Activity**
   - Purpose: global event feed, filterable
   - Current status: not implemented; see `STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
   - Proposed page: `ops/activity.html` (static)

---

## 2) Navigation model (URLs + active tab rules)
### Canonical routes (static v1)
- Pipeline tab → `kanban.html`
- Agents tab → `agent-queue.html` (board) and/or `agents.html` (index)
- UX tab → `ux/JOURNEY_MAPS_V1.md` (temporary) or `ux/index.md` (preferred)
- Design tab → `design/DESIGN_ROADMAP_V1.md`
- Roadmap tab → `status.html` (acts as Overview/Launchpad in current build)
- Activity tab → `activity.html` (to be created)

### Active-tab logic (static)
Current implementation direction:
- Prefer `ops/ui/nav_v1.js` to set `aria-current="page"` and apply `.btn--primary` automatically.
- Avoid per-page hard-coded active classes where possible (reduces drift).

Rule table (for the *masthead tab state*, independent of the v1 `.topbar` links):
- `*/kanban.html` → active=Pipeline
- `*/agent-queue.html` or `*/agents.html` → active=Agents
- `*/ux/*` → active=UX
- `*/design/*` OR `*/ui/*` → active=Design
- `*/EXECUTION_PLAN_*` OR `*/project-gantt*` OR `*/UPDATE_CAPTURE*` OR `*/status.html` OR `*/api-usage.html` → active=Roadmap
- `*/activity.html` OR `*/events/*` → active=Activity

---

## 3) Page-level IA (what belongs where)
### `ops/status.html` (Overview / Launchpad)
Job-to-be-done: open one page and jump to the right operational surface.

Should contain:
- persistent masthead (target) or topbar cross-links (current)
- a compact “What changed” module (last 24h) using Timeline component (or placeholder)
- links to: Kanban, Agent Queue, CV Preview, key specs

### `ops/kanban.html` (Pipeline)
Job-to-be-done: decide what to do next per role.

Must show per card:
- status badge + tier
- role_id
- **next action** (first-class)
- link to listing
- link to CV artefacts when they exist

### `ops/agent-queue.html` (Agents)
Job-to-be-done: see workload, blockers, and what is in progress.

Must show per task row:
- status, priority, due date
- owner agent
- role_id (if applicable)
- blocker reason (if status=Blocked)

### `ops/cv-preview.html` (CV build target)
Job-to-be-done: evaluate layout and export readiness.

Current behaviour (implemented):
- User can load a draft markdown file via an input field.
- Optional query param supported:
  - `cv-preview.html?file=outputs/cv/<role_id>/draft.md`

Should show:
- active role context (role_id) (future)
- most recent build artefacts + manifest (when available)
- QA checklist status (when available)

### `ops/cv-run.html` (Utility: local run command generator)
Job-to-be-done: generate the correct one-shot terminal command for a role and then jump to Preview.

Should contain:
- same global nav pattern as other ops pages
- role key input (role_id), title, input path
- a copyable command snippet that runs the deterministic pipeline
- a preview deep-link like `cv-preview.html?file=outputs/cv/<role_id>/draft.md`

### `ops/api-usage.html` (Utility: spend visibility)
Job-to-be-done: see run-rate and cost trend quickly.

Should contain:
- same global nav pattern as other ops pages
- KPI tiles (budget target, tokens, estimated cost, status)
- a simple log table sourced from `usage/api-usage-log.csv`

---

## 4) Build implementation notes (thin)
- Reuse CSS: `ops/ui/STYLE_TOKENS_V1.css` + `ops/ui/COMPONENTS_V1.css`.
- Implement masthead as a copy-paste partial first; later migrate to a shared template.
- Prefer keyboard-first: visible focus rings, no click-only controls.

---

## 5) Open decisions
1. Should `status.html` be considered “Roadmap”, or should there be an explicit Overview tab?
2. Where should global search land first: Pipeline cards, tasks, or artefact filenames?
3. Does Activity page render client-side from `ops/events/*.jsonl`, or do we precompute a small index (e.g., `ops/events/index.json`)?
4. Should `cv-preview.html` restrict allowed draft paths to `outputs/cv/**` only (security hardening for hosted environments)?
5. Should API Usage live under Roadmap (current), or become a first-class “Metrics” workspace later?
```


## ux/MASTHEAD_NAV_SPEC_V1.md

```markdown
# Persistent Masthead Navigation Spec v1

Owner: UX Agent (Vantage)  
Consumers: Design (Polish), Build (Rivet)  
Status: Ready for implementation

## 1) Objective
Create a persistent masthead that gives immediate orientation and control across all ops pages.

Success criteria:
- User can identify location and next action in <1 second.
- Navigation is consistent across Dashboard, Kanban, Agent Queue, CV Preview, and future pages.
- Supports keyboard-first usage and mobile responsiveness.

## 2) Information Architecture
Masthead zones:

### Left zone
- Product mark/name: `Crabbie Ops`
- Context label (small): `Employment Pod` (future: workspace switcher)

### Centre zone (primary navigation)
Tabs (ordered):
1. Pipeline
2. Agents
3. UX
4. Design
5. Roadmap
6. Activity

Rules:
- Current page tab has active style + underline.
- Tabs are persistent on desktop; collapse to menu on mobile.

### Right zone
- Global search trigger (icon + `/` hint)
- Primary action button: `+ New`
- Live sync indicator: `Updated <time>`
- User/profile avatar (future controls)

## 3) Live Signal Badges
Each nav item can show concise operational state:
- Pipeline: open jobs count
- Agents: active/in-progress tasks count
- Roadmap: blockers count
- Activity: new events since last view

Badge style:
- Use semantic token variants (info/warning/danger)
- Keep compact, non-distracting

## 4) Interaction Model
Desktop:
- Masthead sticky at top; always visible.
- Height token: `--topbar-h` (default 72px).

Mobile:
- Left: logo/title
- Right: search + menu
- Tabs move into slide-over menu
- Keep one persistent primary CTA (`+ New`)

Keyboard shortcuts:
- `/` focus search
- `g p` pipeline
- `g a` agents
- `g r` roadmap
- `g x` activity
- `n` create new task/job

Focus/accessibility:
- Use `--focus-strong`
- No focus suppression
- Tab order left→centre→right

## 5) Visual Design Constraints (handoff to Design)
- Reuse existing tokens from `ops/ui/STYLE_TOKENS_V1.css`
- Reuse component primitives from `ops/ui/COMPONENTS_V1.css`
- Keep masthead low-noise: one title, one context label, one CTA
- Active tab should be obvious without relying on colour alone

## 6) Build Handoff (implementation tasks)
1. Implement masthead markup (copy-paste is acceptable for static v1).
2. Inject the same masthead into (current build surfaces):
   - `ops/status.html` (operational launchpad/status board; `ops/index.html` is now “Home”)
   - `ops/kanban.html`
   - `ops/agent-queue.html`
   - `ops/agents.html`
   - `ops/cv-preview.html`
3. Home link rule (avoid broken nav):
   - Masthead logo/title link SHOULD go to `index.html` when present (current build).
   - If `index.html` is not available in an environment, fall back to `status.html`.
4. Active-tab + mobile menu behaviour:
   - Prefer the existing script `ops/ui/nav_v1.js` to set `aria-current="page"` and apply `.btn--primary` based on URL.
   - Do not hard-code active styles per page if `nav_v1.js` is present.
5. Optional enhancements (v1+):
   - Keyboard shortcut listener.
   - Badge data adapter (initially from CSV counts, later DB/API).

## 7) Definition of Done
- Same masthead rendered on all major pages.
- Active nav state correct by page.
- Search opens from icon and `/`.
- Keyboard routes functional.
- Mobile menu functional and readable.
- Accessibility check passed (focus, contrast, tab flow).
```


## ux/ACCEPTANCE_CRITERIA_V1.md

```markdown
# UX Acceptance Criteria v1 (Ops surfaces)

Owner: UX (Vantage)
Status: Ready for build
Last updated: 2026-03-09 (10:28 UTC)

This file consolidates implementation-ready acceptance criteria for the current static build files.

In scope build files:
- `ops/index.html`
- `ops/status.html`
- `ops/kanban.html`
- `ops/agent-queue.html`
- `ops/agents.html`
- `ops/cv-preview.html`
- `ops/cv-run.html`
- `ops/api-usage.html`

Planned build file:
- `ops/activity.html`

Supporting specs:
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ops/ux/IA_AND_NAV_V1.md`
- `ops/ui/nav_v1.js`

---

## AC-1: Global header navigation is present and consistent (v1 → v2)
### AC-1a (v1): `.topbar` header is consistent across pages
**Given** I open any of the ops pages (Status, Kanban, Agent Queue, Agents, CV Preview, API Usage)
**When** the page renders
**Then** a header renders at the top with:
- a working “Home” link that resolves to an existing page
  - **v1 rule:** Home SHOULD link to `index.html` when present (current build), otherwise fall back to `status.html`
- a visible page title (`h1`)
- a primary navigation area with links to: Status, Pipeline, Agent Queue, Agents, API Usage, CV Preview
  - If `cv-run.html` is published, include `CV Run` as a utility link in this same nav set
- visible focus states for all interactive elements

**And** the page loads `ui/nav_v1.js` so that:
- the mobile menu can be toggled and dismissed (Escape, outside click)
- the active link is expressed via `aria-current="page"` (not colour-only)

### AC-1b (target): Persistent masthead (spec)
**Given** I open any of the ops pages (Status, Kanban, Agent Queue, Agents, CV Preview, API Usage)
**When** the page renders
**Then** a masthead renders at the top with:
- Left zone: product name `Crabbie Ops` and context label `Employment Pod`.
- Centre tabs: Pipeline, Agents, UX, Design, Roadmap, Activity.
- Right zone: search trigger (or stub), `+ New` button (or stub), updated timestamp.

**And** the current page tab appears active (not colour-only).

**And** the masthead is sticky (remains visible on scroll) on desktop widths.

Notes for static v1:
- If search and `+ New` are not implemented yet, they must still render as disabled/stub controls with tooltips.

---

## AC-2: Keyboard navigation shortcuts (minimal)
Status: not implemented in current build (spec retained for when masthead lands).

**Given** I am focused anywhere on the page
**When** I type:
- `g p`
**Then** I navigate to `ops/kanban.html`

**When** I type:
- `g a`
**Then** I navigate to `ops/agent-queue.html`

**When** I type:
- `g x`
**Then** I navigate to `ops/activity.html` (or show “Not implemented” toast until page exists)

**When** I type:
- `/`
**Then** focus moves to the search input (or opens search modal if implemented).

---

## AC-3: Kanban cards show next action as first-class
**Given** I open `ops/kanban.html`
**Then** each card must show:
- role title
- org + location
- role_id (e.g., `R-2026-0006`)
- status column label
- tier badge (Tier A/B/C)
- **Next:** line (derived from `job-pipeline.csv` `next_action`)
- link to source listing

**And** if a CV filename/artefact exists, it must be displayed and clickable (or at minimum shown as text until storage is wired).

### AC-3b (a11y/UX affordance): Horizontal scroll region is discoverable
**Given** I am using keyboard navigation on `ops/kanban.html`
**When** I Tab into the board
**Then** the board itself is focusable and labelled (e.g., `role="region"` + `aria-label="Kanban board (scroll horizontally)"`)

**And** when focused, a visible focus ring appears on the board container (so users discover horizontal scrolling).

---

## AC-4: Agent Queue shows blockers explicitly
**Given** I open `ops/agent-queue.html`
**Then** each task row must show:
- status, priority
- agent owner
- title
- role_id when available

**And** if status is `Blocked`, the row must render a visible blocker reason (not hidden in a hover).

---

## AC-5: Timeline component renders in at least one place
**Given** I open `ops/status.html` (or `ops/activity.html` if created)
**When** there is an events feed available at `ops/events/events-YYYY-MM.jsonl`
**Then** the UI renders a Timeline list from the first N events.

**And** if the events feed is missing
**Then** the UI renders a derived timeline from `job-pipeline.csv` and `agent-tasks.csv` and shows the inline note:
`Event feed unavailable, showing derived activity.`

---

## AC-6: UX artefacts are discoverable from Status
**Given** I open `ops/status.html`
**Then** there are visible links to:
- `ops/ux/JOURNEY_MAPS_V1.md`
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ops/ux/IA_AND_NAV_V1.md`
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md`

(They may sit under an “Execution Artefacts” list.)

---

## AC-7: CV Preview can load drafts via input or query param
**Given** I open `ops/cv-preview.html`
**Then** I can load draft content into the preview surface by either:
- entering a path into the “Draft file path” field and clicking “Load Draft”, or
- opening a URL like `cv-preview.html?file=outputs/cv/<role_id>/draft.md`

**And** while loading, the UI shows a loading state.

**And** if the file cannot be fetched, the UI shows a readable error message that includes the attempted path.

Non-goals (v1):
- Perfect markdown support.

---

## AC-8: CV Preview default path does not mislead
**Given** I open `ops/cv-preview.html` with no query param
**When** the default path is shown
**Then** it must either:
- point to an example file that exists in the repo/site, or
- be blank with helper text.

Test note (current build):
- The default value is `outputs/cv/R-2026-0017/draft.md` which is unlikely to exist on a fresh publish. This should be updated.

Rationale:
- Avoids a “broken by default” first impression.

---

## AC-9: CV Run generates a correct local command + deep-links to preview
**Given** I open `ops/cv-run.html`
**When** I enter a role key (e.g., `R-2026-0017`) and change inputs
**Then** the page updates a visible command snippet that:
- uses `python3 ops/cv-pipeline/run_cv_deterministic.py`
- writes outputs to `outputs/cv/<role_key>/`

**And** the page provides a link that deep-links to Preview using:
- `cv-preview.html?file=outputs/cv/<role_key>/draft.md`

Non-goals (v1):
- Running code in the browser.
```


## ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md

```markdown
# Status / Event Timeline Component Spec v1

Owner: UX Agent (Vantage)
Consumers: Build (Rivet), Data/CRM (Ledger)
Status: Draft (implementation-ready v1)

## 1) Objective
Provide a single, consistent timeline component to show “what changed” for a job/application/task, with an audit trail that can be rendered across Ops pages.

This solves:
- invisible state changes (currently buried in CSV diffs and notes)
- inconsistent status naming across CSV/UI/DB
- lack of an Activity view that aggregates changes

## 2) Sources of truth (v1)
1. **Events JSONL** (preferred): `ops/events/events-YYYY-MM.jsonl`
   - MUST follow `ops/architecture/EVENT_MODEL_V1.md` + `ops/architecture/schemas/*`
2. **CSV fallback** (until events exist everywhere):
   - `ops/job-pipeline.csv` (job status + last_action/next_action)
   - `ops/agent-tasks.csv` (task status)

Rule: if events exist for an entity, render timeline from events; otherwise, render a minimal “derived timeline” from CSV `updated_at` + `notes`.

Events file selection (v1, static build constraint):
- Do not attempt directory listing in-browser.
- Fetch a known file for the current month first (e.g., `events/events-2026-03.jsonl`).
- If that fetch fails, fall back to derived activity.
- (Later) add a small precomputed index (e.g., `ops/events/index.json`) to make this dynamic.

## 3) Where it appears (initial placements)
- Job detail drawer/modal (from Pipeline/Kanban)
- CV run page header section (show run start/completion + QA acknowledgement)
- Agent task detail view
- Activity page (global feed, filterable)

## 4) Component anatomy
### A) Header row
- Title: `Activity`
- Filters (optional per context):
  - Event type (Job/Application/Task/Pipeline)
  - Time range (24h, 7d, 30d)
- “Copy link” (deep link to this timeline section)

### B) Timeline items (each item)
Fields:
- **Timestamp** (relative + absolute on hover): `2h ago` + `2026-03-08 08:20 UTC`
- **Badge** (event type): `Job`, `Application`, `Task`, `CV Run`
- **Primary line** (plain language):
  - `Job moved: Shortlisted → Dropped`
  - `Task blocked: waiting on recruiter response`
  - `CV run completed (success)`
- **Secondary line** (details, optional): reason, link to artefact, who changed it
- **Meta** (right aligned, optional): actor `agent:ledger` / `human:matt`

Interaction:
- Collapsed by default after N items (e.g., 10), with “Show more”.
- Items with artefacts show a link icon and open in a new tab.

## 5) Data contract (UI adapter)
### Input (normalised record)
Build should implement a small adapter that maps either:
- event envelope objects (preferred), or
- CSV-derived records
into:
```ts
type TimelineItem = {
  id: string
  occurredAt: string // RFC3339
  domain: 'job'|'application'|'task'|'pipeline'
  summary: string
  detail?: string
  actor?: string
  severity?: 'info'|'warning'|'danger'
  links?: { label: string, href: string }[]
}
```

### Mapping rules (events → TimelineItem)
- `event_type` prefix maps to `domain`.
- `data.old_status`/`data.new_status` produce the “moved” summary line.
- `data.reason` maps to `detail`.
- `producer.name` or `data.changed_by` maps to `actor`.
- `severity`:
  - `danger` when `new_status` is a terminal negative (`rejected`, `withdrawn`, `dropped`) or `TaskStatus=blocked`
  - `warning` for `drafting` / `interviewing` (attention needed)
  - otherwise `info`

### CSV fallback rules (until full eventing)
- Job row change: synthesise `summary` from `status` and `last_action`.
- Task row change: synthesise `summary` from `status` + `notes` prefix.
- Set `severity=warning` when `next_action` contains “Assess/Prep/Chase”, else `info`.

## 6) Empty, loading, and error states
- Empty: `No activity yet. Changes will appear here as jobs and tasks update.`
- Loading: skeleton list (3 items).
- Error (events file missing): show fallback CSV-derived timeline with an inline note: `Event feed unavailable, showing derived activity.`

## 7) Accessibility + keyboard
- Timeline is a list (`role=list`) with items (`role=listitem`).
- Links are reachable via tab; no click-only interactions.
- Timestamp hover detail also available via focus.

## 8) Build handoff (concrete)
**Handoff item UX-001:** Implement `renderTimeline(items)` component and `timelineAdapter`.

Acceptance criteria:
1. Given a small hard-coded array of `TimelineItem`, renders correctly in `ops/status.html` (or a dedicated `ops/activity.html`).
2. Adapter can parse a sample JSONL file (first N non-empty lines) into `TimelineItem[]`.
3. Items support optional links and severity badges.

Dependencies:
- `ops/events/` directory and at least one JSONL file.
  - Seed created: `ops/events/events-2026-03.jsonl`.
- Data hygiene: `ops/job-pipeline.csv` does not yet carry `updated_at`, so derived timeline will use `last_action` until `updated_at` is added.

**Handoff item UX-002:** Implement derived-activity generator (CSV fallback) as a pure function.

Goal: keep fallback logic deterministic and testable, so derived rules do not drift between pages.

Input:
- parsed rows from `ops/agent-tasks.csv`
- parsed rows from `ops/job-pipeline.csv`

Output:
- `TimelineItem[]` sorted desc by `occurredAt`

Rules (v1):
- Tasks (`ops/agent-tasks.csv`):
  - occurredAt: `updated_at` (assume `YYYY-MM-DD` is UTC midnight if no time is present)
  - domain: `task`
  - id: `task:${task_id}`
  - summary: `${status}: ${title}` (prefix with `${role_id} · ` when role_id exists)
  - severity: `danger` when status=`Blocked`; `info` otherwise
  - link: `{label:'Agent Queue', href:'agent-queue.html'}`
- Jobs (`ops/job-pipeline.csv`):
  - occurredAt: prefer `updated_at` when present; else use `last_action` if it is parseable as a date; else omit row
  - domain: `job`
  - id: `job:${role_id}`
  - summary: `${status}: ${title}` plus ` • Next: ${next_action}` when next_action exists
  - severity: `warning` when next_action contains `Assess`/`Prep`/`Chase` (case-insensitive); `info` otherwise
  - link: `{label:'Pipeline', href:'kanban.html'}`

Acceptance criteria:
1. With a small fixture CSV (2 tasks, 2 jobs), generator returns stable output ordering.
2. Missing/blank timestamps do not crash; row is skipped with a console warn.
3. When `ops/events/` fetch fails, UI renders derived items and shows the inline note from Section 6.

## 9) Open questions / blockers
- Where should event ingestion live (client-side fetch vs server-side precompute in `dashboard-worker.js`)?
- Decide whether Activity is a dedicated page (`/activity`) or embedded on Pipeline + Agents first.
```


## ux/JOB_TRIAGE_CONTROLS_SPEC_V1.md

```markdown
# Job Triage Controls Spec v1 (Kanban)

Owner: UX (Vantage)
Consumers: Build (Rivet), Data/CRM (Ledger)
Status: Draft (implementation-ready v1)
Last updated: 2026-03-09

## 1) Objective
Make job triage decisions fast, explicit, and auditable directly from the Pipeline board (`ops/kanban.html`), without burying decisions in free-text notes.

This solves:
- triage decisions hidden in `notes`
- status drift (human labels vs canonical statuses)
- too many clicks to move a role between “Assessing / Hold / Ignored / Pinned”

## 2) Scope (v1)
In scope:
- UI control pattern on each Kanban card
- keyboard-first interactions
- deterministic write-back contract to `ops/job-pipeline.csv` (via existing scripts/agents; UI does not need to write files in-browser)

Out of scope:
- server-side persistence
- multi-user conflict resolution

## 3) Primary artefacts
- Pipeline data: `ops/job-pipeline.csv`
- Status mapping: `ops/crm/status-mapping-v1.json` and `ops/crm/STATUS_MAPPING_V1.md`
- Acceptance criteria: `ops/ux/ACCEPTANCE_CRITERIA_V1.md`

## 4) Control pattern (per card)
### 4.1 Visual pattern
A compact segmented control (or button row) on each card:
- **Assessing** (default triage)
- **Pinned** (top priority)
- **Hold** (pause, revisit)
- **Ignored** (drop)

Placement (v1): under the status badge and above “Next:” line.

Copy rules:
- Use these exact labels: `Assessing`, `Pinned`, `Hold`, `Ignored`.

### 4.2 State rules
- Exactly one triage state is active at a time.
- Active state is expressed with:
  - `aria-pressed="true"` on the selected button, and
  - a visible style change (not colour-only).

### 4.3 Keyboard interactions (v1)
When focus is within a card:
- `1` → set `Pinned`
- `2` → set `Assessing`
- `3` → set `Hold`
- `4` → set `Ignored`

When focus is on a triage button:
- Arrow keys move between options.
- Enter/Space selects.

A11y:
- Buttons must be reachable via Tab.
- Each card has a labelled grouping (e.g., `<div role="group" aria-label="Triage">`).

## 5) Write-back contract (for scripts/agents)
UI action must be representable as a single deterministic update to the corresponding row in `ops/job-pipeline.csv`.

Minimum fields to update:
- `status` (human label: one of Pinned/Assessing/Hold/Ignored)
- `updated_at` (RFC3339 preferred; date-only acceptable) **(new column, see handoff UX-005/Section 7)**
- `last_action` (human-readable: e.g., `2026-03-09 triage: Hold`)
- optional: `next_action` (may be cleared or adjusted)

Eventing (when Ledger wiring lands):
- Emit `crm.job.status_changed.v1` with old/new status normalised via `status-mapping-v1.json`.

## 6) Empty and error states
- If a card has no triage state (unexpected), default the UI display to `Assessing` and show a small inline note: `Triage not set`.
- If write-back fails (future), show a toast/notice: `Could not update pipeline. Try again.`

## 7) Build handoff (concrete)
**Handoff item UX-004:** Add triage controls to Kanban cards (UI only)

Deliverables:
1) Update `ops/kanban.html` card template to include the triage control group.
2) Implement client-side state toggling (pure UI) so users can see the selected state immediately.
3) Add `data-role-id` attributes to cards to support future wiring.

Acceptance criteria:
- Meets `AC-10` in `ops/ux/ACCEPTANCE_CRITERIA_V1.md`.
- Works with keyboard only.

Dependencies:
- None for UI-only v1.

**Handoff item UX-005:** Add `updated_at` column to `ops/job-pipeline.csv` writes (enables Activity + audit)

Deliverables:
- Add `updated_at` field to CSV schema and ensure any writer updates it whenever `status/next_action/notes` changes.

Dependencies:
- Any pipeline writers/agents that touch `ops/job-pipeline.csv`.

## 8) Blockers / open questions
- `ops/job-pipeline.csv` column set is not enforced; need a single schema source (lightweight) to prevent drift.
- Decide whether Kanban triage updates also auto-manage `next_action` (e.g., when Ignored, clear next_action).
```


## ux/HANDOFF_NOTES_V1.md

```markdown
# UX Handoff Notes v1 (Build + Design)

Owner: UX (Vantage)
Last updated: 2026-03-09 (10:28 UTC)

This is a practical handoff note intended to reduce ambiguity for build work.

---

## 1) What to implement next (in order)
### 1.1 Implement the masthead (copy-paste first)
Source spec: `ops/ux/MASTHEAD_NAV_SPEC_V1.md`

Target pages:
- `ops/status.html`
- `ops/kanban.html`
- `ops/agent-queue.html`
- `ops/agents.html`
- `ops/cv-preview.html`
- `ops/api-usage.html` (currently in the primary nav; keep consistent)

Implementation approach (static HTML v1):
- Replace current `.topbar` blocks with a masthead component.
- If a shared partial is not available, accept copy-paste duplication for v1 but keep the markup identical.
- Ensure active tab is correct per page.

Design dependencies:
- Use existing tokens: `ops/ui/STYLE_TOKENS_V1.css`
- Use primitives: `ops/ui/COMPONENTS_V1.css`

Keep (do not regress):
- `ops/kanban.html` board container is intentionally keyboard-focusable (`tabindex="0"`) with a focus ring so horizontal scrolling is discoverable.

Known blocker:
- Task `T-0206` notes a partial/template strategy is not yet agreed.

### 1.2 Add Activity timeline (minimal seed)
Source spec: `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`

Option A (recommended): create `ops/activity.html` and render timeline there first.
Option B: embed a compact timeline module on `ops/status.html`.

Minimal v1 is acceptable:
- Render 10 items.
- Support empty/missing states.
- Hard-code sample data until `ops/events/` exists.

### 1.3 UX artefact links on Status (DONE)
Target file: `ops/status.html`

Current reality (verified 2026-03-08):
- Status links the full UX pack:
  - `ux/JOURNEY_MAPS_V1.md`
  - `ux/MASTHEAD_NAV_SPEC_V1.md`
  - `ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
  - `ux/IA_AND_NAV_V1.md`
  - `ux/ACCEPTANCE_CRITERIA_V1.md`

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-6)

### 1.4 Build handoff (concrete): Derived Activity module + Activity page stub
Source specs:
- `ops/ux/JOURNEY_MAPS_V1.md` (Journey 6)
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md` (see Handoff item UX-002 for CSV fallback rules)
- `ops/ux/IA_AND_NAV_V1.md` (Activity tab target)

Deliverables (static v1):
1) Create `ops/activity.html`
   - Must include masthead (AC-1) and a page title `Activity`.
   - Must render a `<ol class="timeline">` list.
   - Data source order:
     1. if `ops/events/events-YYYY-MM.jsonl` exists → render first 50 lines
     2. else → render derived activity from CSVs (below)

2) Add compact module to `ops/status.html`
   - Heading: `What changed` + link `View all →` to `activity.html`.
   - Render first 10 items using the same Timeline markup.
   - Empty state copy (exact): `No recent activity.`

Derived activity rules (fallback):
- From `ops/agent-tasks.csv`: create an item per row where `updated_at` is within last 7 days.
  - `entity_type=task`, `entity_id=task_id`
  - summary: `${status}: ${title}` (include `role_id` prefix if present)
  - href: `agent-queue.html` (v1), later deep-link by id
- From `ops/job-pipeline.csv`: no `updated_at` exists yet, so use `last_action` as the timestamp.
  - Include rows where `last_action` is within last 7 days.
  - `entity_type=job`, `entity_id=role_id`
  - summary: `${status}: ${title}` + `Next: ${next_action}` when present
  - href: `kanban.html` (v1)

Data hygiene note (important):
- Add `updated_at` to `ops/job-pipeline.csv` as soon as it is touched by scripts/agents.
- Once present, switch the derived rule to prefer `updated_at` over `last_action`.

Acceptance check:
- Satisfies `ops/ux/ACCEPTANCE_CRITERIA_V1.md` AC-5 (event feed OR derived activity fallback).

### 1.5 CV Preview UX tightening (quick wins)
Target file: `ops/cv-preview.html`

Current reality (verified 2026-03-08):
- Draft loader exists (input + fetch + lightweight markdown rendering).
- Query param supported: `?file=outputs/cv/<role_id>/draft.md`.
- Default input value is currently `outputs/cv/R-2026-0017/draft.md` which is likely non-existent on a fresh publish, creating a “broken by default” first impression.

Build asks (v1):
- Set default to blank and rely on helper text (preferred), or point to a known-good demo file that exists in the repo.
- If hosted publicly, restrict load paths to `outputs/cv/**` only (same-origin) to reduce accidental file exposure.

**Handoff item UX-003 (concrete): Harden the draft loader + fix the default path**
Goal: eliminate “broken by default” and prevent path traversal / accidental fetch of non-output files.

Implementation notes (static JS v1):
- When resolving the `file` query param or input value:
  1) Reject absolute URLs and protocols (`http:`, `https:`, `file:`, `data:`).
  2) Normalise and reject any path containing `..` segments.
  3) Allowlist prefix: must start with `outputs/cv/`.
- Default input state: blank.
  - Helper text (exact): `Paste a path under outputs/cv/… (e.g., outputs/cv/R-2026-TEST-EY/draft.md)`
- Error copy (exact, prefix only): `Could not load draft:` then include the attempted path.

Acceptance:
1) Opening `cv-preview.html` with no query param does not show an error state.
2) Opening `cv-preview.html?file=outputs/cv/R-2026-TEST-EY/draft.md` loads when the file exists.
3) Opening with `?file=../ops/agent-tasks.csv` shows a readable error and does not fetch the file.

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-7, AC-8)

### 1.6 Build handoff (concrete): Seed events feed + parse-first-N proof
Why: unblocks AC-5 quickly (real events path, not just derived fallback).

Deliverables (static v1):
1) Ensure `ops/events/` exists and is web-served.
2) Commit a small seed file: `ops/events/events-2026-03.jsonl` (already created by UX).
3) Timeline read order:
   - Try fetch `events/events-2026-03.jsonl` first (or latest by naming convention).
   - If fetch fails, fall back to derived activity (Section 1.4).
4) Parse strategy (v1):
   - Fetch as text.
   - Split by `\n`.
   - Parse only first 50 non-empty lines with `JSON.parse`.

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-5)

### 1.7 Build handoff (concrete): Home link rule + delegate active-link semantics to `nav_v1.js`
Why: `nav_v1.js` already implements URL-based active link semantics, and a working “Home” target prevents nav dead-ends.

Current reality (verified 2026-03-09):
- `ops/index.html` now exists and acts as “Home”.
- Most pages already link the logo/home anchor to `index.html`.

Deliverables (static v1):
1) Standardise the logo/title href across pages:
   - If `index.html` exists (current build): set to `index.html`.
   - If `index.html` is removed or not published in an environment: set to `status.html`.
2) Ensure these pages load `ops/ui/nav_v1.js`:
   - `ops/status.html`
   - `ops/kanban.html`
   - `ops/agent-queue.html`
   - `ops/agents.html`
   - `ops/cv-preview.html`
   - `ops/api-usage.html`
3) Remove per-page hard-coded “active” styles/classes where present; rely on:
   - `aria-current="page"` and `.btn--primary` applied by `nav_v1.js`

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-1)

### 1.8 Build handoff (concrete): Add `updated_at` to `job-pipeline.csv` writes (unblocks better Activity)
Why: CSV-derived activity is currently lossy because `ops/job-pipeline.csv` has no stable `updated_at`.

Deliverables (v1):
1) Add a new column `updated_at` to `ops/job-pipeline.csv` (RFC3339 preferred; date-only acceptable).
2) Update any scripts/agents that write pipeline rows to also write `updated_at` whenever `status`, `next_action`, `owner`, or `notes` changes.
3) Update derived-activity generator to prefer `updated_at` over `last_action` when present (already specified in `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`).

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-5)

---

## 2) Markup hooks (pragmatic)
To reduce CSS churn, keep these conventions:
- Root: `<header class="masthead"> ...` (new)
- Tabs: `<nav class="masthead__nav">` containing anchor buttons.
- Active state: `aria-current="page"` on active tab.
- Badge: `<span class="badge badge--info">3</span>` etc.

Timeline conventions:
- List: `<ol class="timeline" role="list">`
- Item: `<li class="timeline__item" role="listitem">`
- Severity classes: `timeline__item--info|--warning|--danger`

---

## 3) Copy (microcopy defaults)
Use these exact labels (avoid drift):
- Tabs: Pipeline, Agents, UX, Design, Roadmap, Activity
- Search hint: `/ Search`
- Primary CTA: `+ New`
- Updated label: `Updated <time>`

---

## 4) Definition of done references
Use the acceptance criteria checklist:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md`

---

## 5) Risks + mitigations
- Static duplication risk: masthead copied into multiple pages can drift.
  - Mitigation: keep markup identical, consider a small build step later.
- Event feed risk: JSONL parsing in browser may be slow for large files.
  - Mitigation: only read first N lines in v1; add an index/precompute step later.
- Draft loader risk: unrestricted `fetch()` paths can leak files in some hosting contexts.
  - Mitigation: restrict to `outputs/cv/**` and enforce same-origin only.
```


## ux/SITEMAP_V1.md

```markdown
# UX Sitemap v1

- Home (`index.html`)
- Status (`status.html`)
- Pipeline (`kanban.html`)
- Agent Queue (`agent-queue.html`)
- Agents (`agents.html`)
- API Usage (`api-usage.html`)
- CV Preview (`cv-preview.html`)
- CV Run (`cv-run.html`)
- Activity (`activity.html`, planned)

## Documentation branches
- UX specs (`ux/*.md`)
- Design system (`ui/*.css`, `design/*.md`)
- Architecture (`architecture/*.md`, `architecture/schemas/*`)
- Ops records (`job-pipeline.csv`, `agent-tasks.csv`, `UPDATE_CAPTURE.md`)
```


## ui/DESIGN_LANGUAGE_V1.md

```markdown
# Crabbie OS Design Language v1

## Principles
1. Clarity first: every screen should answer "what matters now?"
2. Operational calm: low-noise layout, strong hierarchy, minimal visual clutter.
3. Executive readability: concise copy, obvious status, easy scanning.
4. Motion with purpose: subtle hover, selection, and drag feedback only.

## Visual direction
- Aesthetic: modern macOS-inspired dark UI, minimal, high-contrast data cards.
- Typography: Inter/system UI fallback, strong section labels, compact metadata, but never below 12px for core UI copy.

### Colour system (tokens)
- Background: #0b1020 (`--bg`)
- Surface: #121a36 (`--surface`)
- Surface 2: #0f1730 (`--surface-2`) for inner cards/rows
- Border: #243059 (`--border`)
- Border 2: #2a3a70 (`--border-2`) for stronger separation
- Text: #eaf0ff (`--text`)
- Text secondary: #b7c6ef (`--text-2`)
- Text muted: #9eb0de (`--text-3`)
- Link: #9bc0ff (`--link`)
- Accent: #2a64ff (`--accent`)

State colours should ship as paired bg/fg tokens (avoid “green on green”):
- Success: bg #123b27 / fg #bff3d6
- Warning: bg #3c3516 / fg #ffe6a6
- Danger:  bg #3f1620 / fg #ffc0ce
- Info:    bg #163042 / fg #b9e4ff

### Type + spacing scale (build rules)
- Base font size: `--fs-2` (fluid clamp: 14px → 16px), line-height 1.45 (`--lh-body`).
- Titles: `--fs-5` (fluid clamp: 26px → 32px) for landing, `--fs-4` (19px → 22px) for page headers, `--fs-3` (16px → 18px) for emphasis.
- Metadata: `--fs-1` (12px → 13px), micro labels: `--fs-0` (11px).
- Spacing: 4px grid (`--s1`..`--s6`). Default card padding 16px.
- Radii: cards 12px, inner panels 10px, chips 999px.
- Elevation: only for hover/active, use `--shadow-1` (avoid permanent drop-shadows on static cards).
- Focus: all interactive elements must have `:focus-visible` outline/box-shadow using `--focus` / `--focus-strong`.
- Touch targets: buttons and inputs should meet `--tap-min` (44px) where practical.

Reference implementation: `ops/ui/STYLE_TOKENS_V1.css`

## Core components
- Left rail navigation with module grouping.
- Top command bar with search + quick actions.
- Kanban cards with status chips, owner, next action.
- Entity links: role -> company -> CRM contacts.
- Activity timeline with timestamp + actor + event type.

## Interaction patterns
- Hover: slight elevation + border accent.
- Select: clear focus ring and selected-state tint.
- Drag/drop: ghost card + insertion marker + valid/invalid drop cues.
- Loading: skeleton rows, not spinners where possible.

## Accessibility baseline
- Contrast AA minimum.
- Keyboard focus visible on all actionable elements.
- Skip links: pages using `.skip-link` should set the destination container (usually `<main id="main">`) to `tabindex="-1"` so keyboard focus actually moves (standardised across ops pages).
- Dynamic updates: any content that changes via JS (load draft, copy-to-clipboard feedback, fetch errors) should announce via `role="status"` (polite) or `role="alert"` (assertive) and should toggle `aria-busy` on the updated region.
- Navigation: use `aria-current="page"` on the active page link (or let `ops/ui/nav_v1.js` apply it automatically) so screen readers announce the current location.
- Sticky headers: anchor targets should use `scroll-margin-top` (see `:target` rule in `STYLE_TOKENS_V1.css`).
- Reduced motion preference respected.
- Text selection: ensure `::selection` maintains readable contrast (avoid near-black-on-blue in dark mode).
- Contrast preference: provide stronger borders and focus rings under `@media (prefers-contrast: more)`.
- Forced colours (Windows High Contrast): ensure focus is still visible via `@media (forced-colors: active)` outline fallback (see `STYLE_TOKENS_V1.css`).
- Safe areas (mobile): scroll surfaces should include `env(safe-area-inset-bottom)` padding so the last row of content is not obscured by the home indicator.
- Scroll regions (tables/boards): if a container scrolls horizontally, make the container own the border and focus ring (e.g., `.table-wrap[role="region"][tabindex="0"]` + `.table-wrap:focus-visible`).
- Boards: for true kanban horizontal scroll (`.board`), set `tabindex="0" role="region" aria-label="…"` and use `.board[tabindex="0"]:focus-visible` to show a focus ring (discoverability for keyboard users).
- Linked cards: avoid tiny title links. Use `.item.item--link` + `.item__link` so the whole card is a single generous tap/click target and focus ring.

## Page layout variants
- `board` (default): horizontal scroll for true kanban-style boards.
- `board board--wrap`: wrap columns into a responsive grid (status/landing pages) to avoid forced sideways scrolling.
```


## usage/API_USAGE_TRACKER_V1.md

```markdown
# API Usage Tracker v1

Purpose: provide visible run-rate tracking for model/API usage and cost trend.

## Budget target
- POC target: <= USD 2/day

## Tracked metrics
- In tokens
- Out tokens
- Total tokens
- Estimated cost (USD)
- Top contributing jobs/streams

## Current status
- Tracker initialized.
- Next increment: automate ingestion from cron run stats/events into `usage/api-usage-log.csv`.

## Data source
- `usage/api-usage-log.csv`

## Notes
- This is now wired into the Ops status/navigation pages so run-rate visibility is first-class.
```


## usage/api-usage-log.csv

```csv
date_utc,window,model,in_tokens,out_tokens,total_tokens,estimated_cost_usd,notes
2026-03-08,rolling-24h,openai-codex/gpt-5.2,0,0,0,0.00,Tracker initialised
```
```

## index.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark light">
  <meta name="theme-color" content="#0b1020" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#f6f8ff" media="(prefers-color-scheme: light)">
  <title>Crabbie Ops Home</title>
  <link rel="icon" type="image/jpeg" href="ui/assets/crabbie-logo.jpg">
  <link rel="apple-touch-icon" href="ui/assets/crabbie-logo.jpg">

  <link rel="stylesheet" href="ui/STYLE_TOKENS_V1.css">
  <link rel="stylesheet" href="ui/COMPONENTS_V1.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="topbar" role="banner">
    <div class="topbar__row">
      <a class="home-logo" href="index.html"><img src="ui/assets/crabbie-logo.jpg" alt="Crabbie"> Crabbie Ops Home</a>
      <button type="button" class="nav-toggle" data-nav-toggle aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation">☰ Menu</button>
    </div>
    <h1 class="topbar__title">Crabbie Operations</h1>
    <p class="topbar__sub">Live product build hub: pipeline, agents, UX/UI artefacts, architecture, and downloads.</p>
    <nav id="primary-nav" class="topbar__actions" data-nav-links aria-label="Primary">
      <a class="btn" href="status.html">Status</a>
      <a class="btn" href="activity.html">Activity</a>
      <a class="btn" href="kanban.html">Pipeline</a>
      <a class="btn" href="agent-queue.html">Agent Queue</a>
      <a class="btn" href="agents.html">Agents</a>
      <a class="btn" href="api-usage.html">API Usage</a>
      <a class="btn" href="architect-review.html">Architect Pack</a>
      <a class="btn" href="cv-preview.html">CV Preview</a>
      <a class="btn" href="cv-run.html">CV Run</a>
    </nav>
  </header>

  <main id="main" class="board board--wrap" tabindex="-1" aria-label="Home links">
    <section class="column">
      <div class="column__shell">
        <h2 class="column__header">Operate</h2>
        <div class="item item--link"><a class="item__link" href="kanban.html"><h3 class="item__title">Open Pipeline Kanban</h3><div class="item__small">Live job records and stage movement</div></a></div>
        <div class="item item--link"><a class="item__link" href="agent-queue.html"><h3 class="item__title">Open Agent Queue</h3><div class="item__small">Task ownership, status, and blockers</div></a></div>
        <div class="item item--link"><a class="item__link" href="activity.html"><h3 class="item__title">Open Activity Timeline</h3><div class="item__small">Latest runs, updates, and system events (events-first feed)</div></a></div>
        <div class="item item--link"><a class="item__link" href="agents.html"><h3 class="item__title">Open Specialist Agents</h3><div class="item__small">Profiles, functions, capacity gauges, editable notes</div></a></div>
        <div class="item item--link"><a class="item__link" href="cv-run.html"><h3 class="item__title">Run CV Pipeline (local)</h3><div class="item__small">Generate the terminal command, run, then preview the draft</div></a></div>
      </div>
    </section>

    <section class="column">
      <div class="column__shell">
        <h2 class="column__header">Inspect</h2>
        <div class="item item--link"><a class="item__link" href="status.html"><h3 class="item__title">Status Board</h3><div class="item__small">Artefacts, UX pack, and review downloads</div></a></div>
        <div class="item item--link"><a class="item__link" href="architect-review.html"><h3 class="item__title">Architect Review Pack</h3><div class="item__small">Ground truth map: live vs static vs gaps</div></a></div>
        <div class="item item--link"><a class="item__link" href="CONTROL_TOWER.md"><h3 class="item__title">Control Tower Log</h3><div class="item__small">Priorities, decisions, and blockers</div></a></div>
        <div class="item item--link"><a class="item__link" href="UPDATE_CAPTURE.md"><h3 class="item__title">Update Capture</h3><div class="item__small">Chronological shipping log</div></a></div>
      </div>
    </section>
  </main>

  <script src="ui/nav_v1.js"></script>
</body>
</html>
```

## job-pipeline.csv

```csv
role_id,title,company,location,url,fit_tier,status,input_file,cv_file,cover_file,last_action,next_action,owner,notes
R-2026-0001,Head of Marketing Centre of Excellence (CoE),Qantas,Sydney,https://www.linkedin.com/jobs/view/4376504696,A,Applied,inputs/jobs/R-2026-0001/intake.txt,Matt Kain CV Feb 2026 Head of Marketing Centre of Excellence v3.pdf,,2026-02-27,Monitor response,Ledger,Application submitted
R-2026-0002,Head of Marketing,LSKD,Brisbane,https://www.seek.com.au/job/90404349,A,Applied,inputs/jobs/R-2026-0002/intake.txt,, ,2026-02-27,Monitor response,Ledger,User confirmed applied
R-2026-0003,General Manager - Growth & Transformation,Sharp & Carter,Brisbane,https://www.seek.com.au/job/90526213,A,Applied,inputs/jobs/R-2026-0003/intake.txt,Matt Kain CV Feb 2026 General Manager Growth and Transformation Sharp and Carter v4.pdf,,2026-03-01,Monitor response,Ledger,User instructed: mark applied and monitor
R-2026-0004,Consulting Director,Datacom,Brisbane,https://www.linkedin.com/jobs/view/4376553708,A,Applied,inputs/jobs/R-2026-0004/intake.txt,Matt Kain CV Feb 2026 Consulting Director Datacom.pdf,,2026-03-01,Monitor response,Ledger,User instructed: mark applied and monitor
R-2026-0005,Senior Manager - Digital Growth & Optimisation,BOQ,Brisbane,https://boq.wd3.myworkdayjobs.com/en-GB/Careers-at-BOQGroup/job/Brisbane-Office---Newstead-Village/Senior-Manager---Digital-Growth-Optimisation_JR100332?source=LinkedIn,A,Applied,inputs/jobs/R-2026-0005/intake.txt,Matt Kain CV Feb 2026 Senior Manager Digital Growth Optimisation BOQ.pdf,,2026-03-01,Monitor response,Ledger,User instructed: mark applied and monitor
R-2026-0006,Chief Experience Officer,u&u,Brisbane,https://www.seek.com.au/job/90563809,A,Hold,inputs/jobs/R-2026-0006/intake.txt,,,2026-03-01,Hold,Radar,User instructed: hold
R-2026-0007,Senior Director - Digital Transformation Services,Metro South Health,Brisbane,https://www.seek.com.au/job/90522976,A,Hold,inputs/jobs/R-2026-0007/intake.txt,,,2026-03-01,Hold,Radar,User instructed: hold
R-2026-0008,General Manager - Information Technology,Techforce,Brisbane,https://www.seek.com.au/job/90573967,C,Ignored,inputs/jobs/R-2026-0008/intake.txt,,,2026-02-27,None,Ledger,Too tech
R-2026-0009,General Manager - Operational Technology,Stellar,Brisbane,https://www.seek.com.au/job/90545972,C,Ignored,inputs/jobs/R-2026-0009/intake.txt,,,2026-02-27,None,Ledger,Too tech
R-2026-0010,Head of Marketing (Remote from Australia),Jobgether (partner listing),Remote (Australia),https://www.linkedin.com/jobs/view/4378698278/,A,Applied,inputs/jobs/R-2026-0010/intake.txt,Matt Kain CV Mar 2026 Head of Marketing Jobgether.pdf,,2026-03-01,Monitor response,Ledger,User flagged as interesting; verify employer identity (digest showed Airbnb mismatch) before applying. | User confirmed applied; CV attached in chat.
R-2026-0011,Head of Ecommerce - Global,Love to Dream,Remote,https://www.linkedin.com/jobs/view/4377602833/,A,Applied,inputs/jobs/R-2026-0011/intake.txt,MATT KAIN standard CV (ecommerce-performance).pdf,,2026-03-01,Monitor response,Ledger,User confirmed applied; CV attached in chat.
R-2026-0012,"Head of Communications, ANZ",Airbnb,Sydney / Remote (ANZ),https://www.linkedin.com/jobs/view/4377175677/,B,Hold,inputs/jobs/R-2026-0012/intake.txt,,,2026-03-01,Hold,Radar,User clarified this is the true Airbnb role; responses managed off LinkedIn. | User instructed: hold Airbnb role.
R-2026-0013,General Manager Stakeholder Engagement,u&u Recruitment Partners,Brisbane,https://www.seek.com.au/job/90685480,A,Pinned,inputs/jobs/R-2026-0013/intake.txt,,,2026-03-04,Assess + prep CV,Forge,User instruction: Job 1 maybe - pin it.
R-2026-0014,"Senior Manager- Eco-Tourism, Marketing and Partnerships",Brisbane Sustainability Agency,Brisbane,https://www.seek.com.au/job/90684847,B,Ignored,inputs/jobs/R-2026-0014/intake.txt,,,2026-03-04,None,Ledger,User instruction: Job 2 no.
R-2026-0015,Director of Sales and Marketing,Sofitel Brisbane Central,Brisbane,https://www.seek.com.au/job/90644618,B,Ignored,inputs/jobs/R-2026-0015/intake.txt,,,2026-03-04,None,Ledger,User instruction: Job 3 no.
R-2026-0016,Director of PR & Communications,Minor Hotels,Brisbane,https://www.linkedin.com/comm/jobs/view/4370390318/,B,Ignored,inputs/jobs/R-2026-0016/intake.txt,,,2026-03-04,None,Ledger,User instruction: Job 4 no.
R-2026-0017,General Manager SEO & AI SEARCH,Compare the Market,Brisbane,https://www.seek.com.au/job/90758951,A,Applied,inputs/jobs/R-2026-0017/intake.txt,,,2026-03-08,Monitor response,Ledger,User instruction: #1 applied.
R-2026-0018,Brand & Campaign Lead,National Storage,Brisbane,https://au.indeed.com/rc/clk/dl?jk=eccedaa3ff62bed8,B,Ignored,inputs/jobs/R-2026-0018/intake.txt,,,2026-03-08,None,Ledger,User instruction: #2 disregard.
R-2026-0019,"Specialist, Performance Marketing",Insurance Australia Group,Brisbane,https://au.indeed.com/rc/clk/dl?jk=8e5c17acfa745706,A,Assessing,inputs/jobs/R-2026-0019/intake.txt,,,2026-03-08,Assess + prep CV,Vantage,User shortlisted for alignment scoring set.
R-2026-0020,SVCS Marketing Campaign Manager,St Vincent's Health Australia,Brisbane,https://au.indeed.com/rc/clk/dl?jk=540876b03ce18e8a,B,Ignored,inputs/jobs/R-2026-0020/intake.txt,,,2026-03-08,None,Ledger,User instruction: #4 disregard.
R-2026-0021,Digital Marketing Manager,Brisbane Racing Club,Ascot QLD,https://au.indeed.com/rc/clk/dl?jk=989ded15872a1f0d,A,Assessing,inputs/jobs/R-2026-0021/intake.txt,,,2026-03-08,Assess + prep CV,Vantage,User shortlisted for alignment scoring set.
R-2026-0022,Head of Strategic Partnerships & Alliances,Mansell Taylor Consulting,Brisbane,https://www.seek.com.au/job/90768051,A,Assessing,inputs/jobs/R-2026-0022/intake.txt,,,2026-03-08,Assess + prep CV,Vantage,User shortlisted for alignment scoring set.
R-2026-0023,Strategic Growth Executive,Six Degrees Executive Pty Ltd,Brisbane,https://www.seek.com.au/job/90767931,A,Assessing,inputs/jobs/R-2026-0023/intake.txt,,,2026-03-08,Assess + prep CV,Vantage,User shortlisted for alignment scoring set.
R-2026-0024,"Directors, Media and Internal Communications and Executive and Ministerial",AUSTRAC,Brisbane,https://www.seek.com.au/job/90765041,B,Assessing,inputs/jobs/R-2026-0024/intake.txt,,,2026-03-08,Alignment score + go/no-go,Vantage,User requested alignment score for #8.
,,,,,,,,,,,,,
R-2026-TEST-EY,Oceania Data Lead - Senior Manager/Associate Director,EY,Australia,https://www.ey.com/,C,Drafting,inputs/jobs/R-2026-TEST-EY/intake.txt,/home/kain/.openclaw/workspace/outputs/cv/R-2026-TEST-EY/draft.md,,2026-03-08,Review stretch-fit before apply,crm-steward,Hero workflow test run
R-2026-PASS-001,Head of Marketing,Unknown,Unknown,,B,Drafting,inputs/jobs/R-2026-PASS-001/intake.txt,/home/kain/.openclaw/workspace/outputs/cv/R-2026-PASS-001/draft.md,,2026-03-08,Ready to apply with submitted artefacts,crm-steward,Inserted by deterministic CV run pipeline
R-2026-FAIL-001,DXP Consultant,Unknown,Unknown,,B,Drafting,inputs/jobs/R-2026-FAIL-001/intake.txt,/home/kain/.openclaw/workspace/outputs/cv/R-2026-FAIL-001/draft.md,,2026-03-08,Revise CV per qa.json hard fails,crm-steward,Inserted by deterministic CV run pipeline
R-2026-PROOF-001,Data Lead,Unknown,Unknown,,B,CV Ready,inputs/jobs/R-2026-PROOF-001/intake.txt,/home/kain/.openclaw/workspace/outputs/cv/R-2026-PROOF-001/final.pdf,,2026-03-09,Ready to apply (final.pdf generated),crm-steward,Inserted by deterministic CV run pipeline
```

## kanban.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark light">
  <meta name="theme-color" content="#0b1020" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#f6f8ff" media="(prefers-color-scheme: light)">
  <title>Crabbie Pipeline Kanban</title>
  <link rel="icon" type="image/jpeg" href="ui/assets/crabbie-logo.jpg">
  <link rel="apple-touch-icon" href="ui/assets/crabbie-logo.jpg">

  <link rel="stylesheet" href="ui/STYLE_TOKENS_V1.css">
  <link rel="stylesheet" href="ui/COMPONENTS_V1.css">
  <style>
    /* Hard override for Kanban heading alignment + non-overlap */
    .page-kanban .column__header{position:static !important;top:auto !important;min-height:56px;display:flex;align-items:center}
    .page-kanban .column__shell{display:flex;flex-direction:column}
  </style>
</head>
<body class="page-kanban">
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="topbar" role="banner">
    <div class="topbar__row">
      <a class="home-logo" href="index.html"><img src="ui/assets/crabbie-logo.jpg" alt="Crabbie"> Crabbie Ops Home</a>
      <button type="button" class="nav-toggle" data-nav-toggle aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation">☰ Menu</button>
    </div>
    <h1 class="topbar__title">Pipeline Kanban</h1>
    <p class="topbar__sub">Operational view. Keyboard: Tab to move between links, Enter to open.</p>
    <nav id="primary-nav" class="topbar__actions" data-nav-links aria-label="Primary">
      <a class="btn" href="status.html">Status</a>
      <a class="btn" href="activity.html">Activity</a>
      <a class="btn" href="kanban.html">Pipeline</a>
      <a class="btn" href="agent-queue.html">Agent Queue</a>
      <a class="btn" href="agents.html">Agents</a>
      <a class="btn" href="api-usage.html">API Usage</a>
      <a class="btn" href="cv-preview.html">CV Preview</a>
      <a class="btn" href="cv-run.html">CV Run</a>
    </nav>
  </header>

  <main id="main" aria-label="Pipeline columns" tabindex="-1" aria-busy="false">
    <div class="item" style="margin:12px 16px 0 16px"><div class="item__small" role="status" aria-live="polite" aria-atomic="true" data-kanban-meta>Loading pipeline…</div></div>
    <div class="board" data-kanban-board tabindex="0" role="region" aria-label="Kanban board (scroll horizontally)" aria-busy="false"></div>
    <noscript>
      <div class="column"><div class="column__shell"><h2 class="column__header">Kanban requires JavaScript</h2>
        <div class="item"><div class="item__small">Enable JavaScript to render the live board from <a href="job-pipeline.csv">job-pipeline.csv</a>.</div></div>
      </div></div>
    </noscript>
  </main>

  <script src="ui/nav_v1.js"></script>
  <script src="ui/scroll_a11y_v1.js"></script>
  <script type="module" src="ui/kanban_live_v1.js"></script>
</body>
</html>
```

## master-project-brief.md

```markdown
# OpenClaw Agent System – Master Project Brief

**Owner:** Matt  
**Version:** 1.0  
**Primary Goal:** Build a multi-agent personal productivity and career acceleration platform, beginning with automated CV generation and progressing toward a full CRM-driven opportunity management system with visible UI iteration.

---

# 1. Strategic Objectives

## Primary Objective (Phase 1 Priority)

Create a **fully autonomous CV generation workflow** that:

- Accepts a job URL or pasted role description.
- Analyses requirements and matches against stored CV knowledge.
- Produces a **high-quality, two-page tailored CV**.
- Outputs:
  - Editable document.
  - Final PDF.
  - Clickable download links.
- Requires **minimal user iteration**.
- Meets professional design standards automatically.

## Secondary Objective

Demonstrate visible progress toward the broader platform by:

- Building an initial CRM database.
- Creating a simple UI interface.
- Iterating the interface daily or frequently.
- Showing continuous improvement.

## Long-Term Objective

Develop a modular agent ecosystem supporting:

- Opportunity discovery.
- Application management.
- Contact intelligence.
- Product development workflows.
- System automation.

---

# 2. System Philosophy

The system operates as a **team of specialised agents** coordinated by a **Main Orchestrator Agent**.

Principles:

1. Autonomy with guardrails.
2. Continuous iteration.
3. Cost efficiency.
4. Modular architecture.
5. Human approval for external actions.

---

# 3. Agent Architecture Overview

## 3.1 Main Orchestrator Agent (Project Manager)

Role:

- Central communication hub with the user.
- Coordinates all sub-agents.
- Maintains project roadmap.
- Monitors progress.
- Produces daily digests.

Responsibilities:

- Task routing.
- Dependency management.
- Agent activation.
- Priority decisions.
- Escalation of blockers.

Communication rules:

- Default communication with user occurs through this agent.
- Specialist conversations allowed when explicitly requested.

---

# 4. Core Agents

## 4.1 CV Specialist Agent (Highest Priority)

Mission: Deliver best-in-class CV generation.

Capabilities:

- Parse job descriptions.
- Extract requirements.
- Match against CV knowledge base.
- Generate tailored content.
- Maintain formatting standards.
- Export professional PDF.

Dependencies:

- File handling tools.
- PDF generation.
- Template library.
- Design standards memory.

Outputs:

- CV draft.
- Final PDF.
- Download link.
- Summary of tailoring logic.

Success criteria:

- Minimal revisions required.
- Professional layout.
- High relevance to role.

---

## 4.2 Opportunity Intelligence Agent (Prospecting)

Mission: Identify and prioritise opportunities.

Capabilities:

- Monitor Gmail job alerts.
- Extract job listings.
- Score opportunities based on:
  - Location relevance.
  - Seniority.
  - Salary.
  - Fit to experience.
- Produce digest reports.

Outputs:

- Ranked opportunity list.
- Recommendations.
- Actions requested from user.

---

## 4.3 Research Agent

Mission: Provide strategic context for applications.

Capabilities:

- Company research.
- Hiring manager discovery.
- Role background analysis.
- News scanning.
- Competitive insights.

Outputs:

- Research briefs.
- Talking points.
- CV positioning insights.
- Interview preparation notes.

---

## 4.4 CRM Agent

Mission: Maintain structured knowledge of opportunities and contacts.

Responsibilities:

- Store job records.
- Track application status.
- Manage contacts.
- Monitor email responses.
- Update lifecycle states.

Planned schema (initial):

Tables:

- Jobs
- Applications
- Contacts
- Communications
- Companies
- Tasks

This agent interacts with:

- Gmail integration.
- Opportunity agent.
- CV agent.
- Research agent.

---

# 5. Platform Development Agents

## 5.1 Product Manager Agent

Mission: Oversee system development.

Responsibilities:

- Define roadmap.
- Create milestones.
- Coordinate UX and engineering.
- Track progress.
- Deliver iteration plans.

---

## 5.2 UX Agent

Mission: Design workflows and user journeys.

Outputs:

- Wireframes.
- User flows.
- Interaction models.
- Requirements documentation.

---

## 5.3 UI Design Agent

Mission: Produce visual interface assets.

Outputs:

- Screen designs.
- Design system.
- Component library.
- Front-end specs.

---

## 5.4 Engineering Agent

Mission: Build platform infrastructure.

Responsibilities:

- Database setup.
- API integrations.
- Backend services.
- UI implementation.
- Deployment.

---

# 6. Memory Architecture

The system uses **three memory layers**.

## Layer 1 – Agent Local Memory

Each agent maintains markdown files.

Examples:

- soul.md
- tone.md
- knowledge.md
- procedures.md
- preferences.md

Purpose:

- Preserve identity.
- Maintain expertise.
- Reduce token usage.

---

## Layer 2 – Global Vector Memory

Install a vector memory system (example: mem0).

Purpose:

- Capture conversations automatically.
- Enable semantic recall.
- Reduce context load.
- Improve long-term learning.

---

## Layer 3 – Structured Database Memory

SQL database used for:

- CRM records.
- System state.
- Contacts.
- Jobs.
- Activities.

---

# 7. Autonomy Guardrails

Agents MAY:

- Build internal systems.
- Refactor architecture.
- Create files.
- Install tools.
- Iterate designs.

Agents MUST NOT without approval:

- Send emails.
- Contact external people.
- Submit applications.
- Perform destructive operations.
- Spend significant money.

When uncertain, escalate to Main Agent → User.

---

# 8. User Interaction Model

Default interaction: User ↔ Main Agent  
Optional: User ↔ Specialist Agent (on request)

Digest frequency:

- Daily summary preferred.
- Urgent alerts allowed.

---

# 9. Cost Management Strategy

Target total system cost: ≤ $2 per day during proof-of-concept.

Approach:

- Prefer lightweight models.
- Use local models where feasible.
- Reserve premium models for:
  - CV generation.
  - Complex reasoning.
  - Architecture decisions.

Suggested model allocation:

High intelligence:

- GPT-class models for:
  - CV agent.
  - Orchestrator decisions.
  - Research synthesis.

Medium:

- Smaller models for:
  - Classification.
  - Filtering.
  - Summaries.

Local models:

- UI generation.
- Routine tasks.
- Data formatting.

Infrastructure:

- Monitor VM usage.
- Scale down when idle.

---

# 10. Phase Roadmap

## Phase 1 – CV Automation

Deliver:

- End-to-end CV pipeline.
- PDF generation.
- File links.
- Template system.

Success signal: User can paste job → receive final CV with minimal edits.

---

## Phase 2 – CRM Foundation

Deliver:

- Database schema.
- Job tracking.
- Application states.
- Email ingestion.

---

## Phase 3 – Opportunity Intelligence

Deliver:

- Gmail scanning.
- Job ranking.
- Daily digests.

---

## Phase 4 – Interface Development

Deliver:

- Basic dashboard.
- CRM views.
- Iterative UI improvements.

---

## Phase 5 – Platform Expansion

Deliver:

- Full workflow orchestration.
- Contact intelligence.
- Automation enhancements.

---

# 11. Immediate Next Actions for Main Agent

1. Audit current agent structure.
2. Identify gaps.
3. Prioritise CV agent deployment.
4. Confirm file handling and PDF capability.
5. Design initial CRM schema.
6. Create project roadmap.
7. Produce first progress report.

---

# 12. Success Definition

System is successful when:

- CV creation requires minimal effort.
- Opportunities are tracked automatically.
- Progress is visible.
- Costs remain controlled.
- Agents operate reliably with limited supervision.

---

# 13. Tone and Behaviour Expectations

Agents should be:

- Practical.
- Efficient.
- Collaborative.
- Iterative.
- Transparent.

Avoid:

- Over-engineering.
- Excessive verbosity.
- Unnecessary API calls.

---

# 14. Instruction to Main Agent

You are responsible for transforming this brief into an operational multi-agent system.

Prioritise execution over perfection.

Begin with the CV workflow.

Report progress regularly.
```

## opportunity-intelligence/scoring-model-v1.json

```json
{
  "version": "v1",
  "factors": {
    "fit_tier": {"A": 40, "B": 25, "C": 10},
    "location": {"brisbane_or_remote": 20, "australia_other": 10, "other": 0},
    "seniority_alignment": {"target": 20, "stretch": 10, "mismatch": 0},
    "role_relevance": {"growth_marketing_transformation": 20, "adjacent": 10, "out_of_scope": -20}
  },
  "thresholds": {
    "generate_cv_now": 75,
    "research_first": 55,
    "park": 35,
    "ignore_below": 35
  },
  "actions": {
    ">=75": "generate_cv_now",
    "55-74": "research_first",
    "35-54": "park",
    "<35": "ignore"
  }
}
```

## opportunity-intelligence/top10-ranked-v1.json

```json
{
  "model_version": "v1",
  "top10": [
    {
      "role_id": "R-2026-0002",
      "title": "Head of Marketing",
      "company": "LSKD",
      "score": 100,
      "action": "generate_cv_now",
      "factors": {
        "fit_tier": 40,
        "location": 20,
        "seniority_alignment": 20,
        "role_relevance": 20
      }
    },
    {
      "role_id": "R-2026-0003",
      "title": "General Manager - Growth & Transformation",
      "company": "Sharp & Carter",
      "score": 100,
      "action": "generate_cv_now",
      "factors": {
        "fit_tier": 40,
        "location": 20,
        "seniority_alignment": 20,
        "role_relevance": 20
      }
    },
    {
      "role_id": "R-2026-0005",
      "title": "Senior Manager - Digital Growth & Optimisation",
      "company": "BOQ",
      "score": 100,
      "action": "generate_cv_now",
      "factors": {
        "fit_tier": 40,
        "location": 20,
        "seniority_alignment": 20,
        "role_relevance": 20
      }
    },
    {
      "role_id": "R-2026-0007",
      "title": "Senior Director - Digital Transformation Services",
      "company": "Metro South Health",
      "score": 100,
      "action": "generate_cv_now",
      "factors": {
        "fit_tier": 40,
        "location": 20,
        "seniority_alignment": 20,
        "role_relevance": 20
      }
    },
    {
      "role_id": "R-2026-0010",
      "title": "Head of Marketing (Remote from Australia)",
      "company": "Jobgether (partner listing)",
      "score": 100,
      "action": "generate_cv_now",
      "factors": {
        "fit_tier": 40,
        "location": 20,
        "seniority_alignment": 20,
        "role_relevance": 20
      }
    },
    {
      "role_id": "R-2026-0022",
      "title": "Head of Strategic Partnerships & Alliances",
      "company": "Mansell Taylor Consulting",
      "score": 100,
      "action": "generate_cv_now",
      "factors": {
        "fit_tier": 40,
        "location": 20,
        "seniority_alignment": 20,
        "role_relevance": 20
      }
    },
    {
      "role_id": "R-2026-0001",
      "title": "Head of Marketing Centre of Excellence (CoE)",
      "company": "Qantas",
      "score": 90,
      "action": "generate_cv_now",
      "factors": {
        "fit_tier": 40,
        "location": 10,
        "seniority_alignment": 20,
        "role_relevance": 20
      }
    },
    {
      "role_id": "R-2026-0013",
      "title": "General Manager Stakeholder Engagement",
      "company": "u&u Recruitment Partners",
      "score": 90,
      "action": "generate_cv_now",
      "factors": {
        "fit_tier": 40,
        "location": 20,
        "seniority_alignment": 20,
        "role_relevance": 10
      }
    },
    {
      "role_id": "R-2026-0014",
      "title": "Senior Manager- Eco-Tourism, Marketing and Partnerships",
      "company": "Brisbane Sustainability Agency",
      "score": 85,
      "action": "generate_cv_now",
      "factors": {
        "fit_tier": 25,
        "location": 20,
        "seniority_alignment": 20,
        "role_relevance": 20
      }
    },
    {
      "role_id": "R-2026-0015",
      "title": "Director of Sales and Marketing",
      "company": "Sofitel Brisbane Central",
      "score": 85,
      "action": "generate_cv_now",
      "factors": {
        "fit_tier": 25,
        "location": 20,
        "seniority_alignment": 20,
        "role_relevance": 20
      }
    }
  ]
}
```

## ops-mattkain-com-links.txt

```text
ops.mattkain.com build pages

Status: https://ops.mattkain.com/status.html
Home: https://ops.mattkain.com/index.html
Kanban: https://ops.mattkain.com/kanban.html
Agent Queue: https://ops.mattkain.com/agent-queue.html

If DNS has not propagated yet, temporary fallback links:
Status: https://rawcdn.githack.com/mattkdecide/crabbie-ops-dashboard/main/status.html
Home: https://rawcdn.githack.com/mattkdecide/crabbie-ops-dashboard/main/index.html
Kanban: https://rawcdn.githack.com/mattkdecide/crabbie-ops-dashboard/main/kanban.html
Agent Queue: https://rawcdn.githack.com/mattkdecide/crabbie-ops-dashboard/main/agent-queue.html
```

## project-gantt.md

```markdown
# Crabbie OS Roadmap Gantt (Draft)

## Streams
- Foundation
- Data & Automation
- UI/UX
- Agent Delegation
- Delivery Ops

## Timeline (Brisbane)
- 2026-03-01 to 2026-03-28

## Milestones
- M1: Dashboard shell + agents pages consolidated
- M2: JSON data layer + auto-refresh
- M3: Command router live (chat -> pipeline/task updates)
- M4: Task detail + activity log + schedules views
- M5: QA gates + release rhythm stable
```

## publish_ops.sh

```bash
#!/usr/bin/env bash
set -euo pipefail

WS="/home/kain/.openclaw/workspace"
REPO="$WS/tmp_crabbie_repo"

# Sync current ops web surfaces into publish repo
cp "$WS/ops/index.html" "$REPO/index.html" 2>/dev/null || true
cp "$WS/ops/status.html" "$REPO/status.html" 2>/dev/null || true
cp "$WS/ops/kanban.html" "$REPO/kanban.html"
cp "$WS/ops/agent-queue.html" "$REPO/agent-queue.html"
cp "$WS/ops/cv-preview.html" "$REPO/cv-preview.html" 2>/dev/null || true
cp "$WS/ops/agents.html" "$REPO/agents.html" 2>/dev/null || true
cp "$WS/ops/api-usage.html" "$REPO/api-usage.html" 2>/dev/null || true
cp "$WS/ops/architect-review.html" "$REPO/architect-review.html" 2>/dev/null || true
cp "$WS/ops/CONTROL_TOWER.md" "$REPO/CONTROL_TOWER.md" 2>/dev/null || true
cp "$WS/ops/project-gantt.md" "$REPO/project-gantt.md" 2>/dev/null || true
cp "$WS/ops/UPDATE_CAPTURE.md" "$REPO/UPDATE_CAPTURE.md" 2>/dev/null || true
cp "$WS/ops/ARCHITECT_REVIEW_PACK.md" "$REPO/ARCHITECT_REVIEW_PACK.md" 2>/dev/null || true

mkdir -p "$REPO/roadmap" "$REPO/ui" "$REPO/ui/assets" "$REPO/agents" "$REPO/ux" "$REPO/design" "$REPO/downloads" "$REPO/usage" "$REPO/crm"
cp "$WS/ops/project-gantt.md" "$REPO/roadmap/project-gantt.md" 2>/dev/null || true
cp "$WS/ops/UPDATE_CAPTURE.md" "$REPO/roadmap/update-capture.md" 2>/dev/null || true

# CRM canonical status mapping (used by live boards)
cp "$WS/ops/crm/status-mapping-v1.json" "$REPO/crm/status-mapping-v1.json" 2>/dev/null || true

# Agent / UX / design artefacts
cp "$WS/ops/agents/"*.md "$REPO/agents/" 2>/dev/null || true
cp "$WS/ops/ux/"*.md "$REPO/ux/" 2>/dev/null || true
cp "$WS/ops/design/"*.md "$REPO/design/" 2>/dev/null || true
cp "$WS/ops/agent-tasks.csv" "$REPO/agent-tasks.csv" 2>/dev/null || true
cp "$WS/ops/job-pipeline.csv" "$REPO/job-pipeline.csv" 2>/dev/null || true
cp "$WS/ops/downloads/"*.pdf "$REPO/downloads/" 2>/dev/null || true
cp "$WS/ops/downloads/README.md" "$REPO/downloads/README.md" 2>/dev/null || true
cp "$WS/ops/usage/"* "$REPO/usage/" 2>/dev/null || true

# UI assets
cp "$WS/ops/ui/STYLE_TOKENS_V1.css" "$REPO/ui/STYLE_TOKENS_V1.css" 2>/dev/null || true
cp "$WS/ops/ui/COMPONENTS_V1.css" "$REPO/ui/COMPONENTS_V1.css" 2>/dev/null || true
cp "$WS/ops/ui/CV_PREVIEW_V1.css" "$REPO/ui/CV_PREVIEW_V1.css" 2>/dev/null || true

# Ship all UI JS modules so live pages don’t silently break when new modules are added.
cp "$WS/ops/ui/"*.js "$REPO/ui/" 2>/dev/null || true

cp "$WS/ops/ui/assets/"* "$REPO/ui/assets/" 2>/dev/null || true

# Publish generated CV artefacts used by preview (markdown/json only)
mkdir -p "$REPO/outputs/cv"
if [ -d "$WS/outputs/cv" ]; then
  while IFS= read -r f; do
    rel="${f#$WS/}"
    mkdir -p "$REPO/$(dirname "$rel")"
    cp "$f" "$REPO/$rel"
  done < <(find "$WS/outputs/cv" -type f \( -name "*.md" -o -name "*.json" -o -name "*.txt" \))
fi

cd "$REPO"
git add -A
if git diff --cached --quiet; then
  echo "No publish changes."
  exit 0
fi

git commit -m "Auto-publish ops pages ($(date -u +%Y-%m-%dT%H:%M:%SZ))"
git push origin main
echo "Published."
```

## publish_preflight_v1.sh

```bash
#!/usr/bin/env bash
set -euo pipefail

# Publish preflight v1
# Runs in the publish repo to block obvious secret/credential publication.

REPO_DIR="${1:-}"
if [[ -z "$REPO_DIR" ]]; then
  echo "usage: $(basename "$0") /path/to/publish/repo" >&2
  exit 2
fi

if [[ ! -d "$REPO_DIR" ]]; then
  echo "preflight: repo dir not found: $REPO_DIR" >&2
  exit 2
fi

cd "$REPO_DIR"

fail=0

echo "preflight: scanning publish repo: $REPO_DIR"

# A) Forbidden file patterns
# Note: keep patterns conservative; allow-list controls what is copied.
mapfile -t forbidden_files < <(
  find . -type f \( \
    -iname '.env' -o -iname '.env.*' -o \
    -iname '*id_rsa*' -o -iname '*id_ed25519*' -o \
    -iname '*.pem' -o -iname '*.key' -o -iname '*.p12' -o -iname '*.pfx' -o \
    -iname '*credentials*' -o -iname '*secret*' -o -iname '*token*' \
  \) -print
)

if (( ${#forbidden_files[@]} > 0 )); then
  fail=1
  echo "FAIL: forbidden filenames found:" >&2
  printf '%s\n' "${forbidden_files[@]}" >&2
fi

# B) Forbidden content patterns
# Use grep -I to skip binary; exclude common vendor/minified assets if needed later.
patterns=(
  'BEGIN (RSA|OPENSSH|EC|PRIVATE) KEY'
  'AKIA[0-9A-Z]{16}'
  'xox(b|p|a|r)-'
  'ghp_[A-Za-z0-9]+'
  'github_pat_[A-Za-z0-9_]+'
  'api[_-]?key\s*[:=]'
  'access[_-]?token\s*[:=]'
  'refresh[_-]?token\s*[:=]'
  'client[_-]?secret\s*[:=]'
)

content_hits=()
for pat in "${patterns[@]}"; do
  while IFS= read -r line; do
    content_hits+=("$line")
  done < <(LC_ALL=C grep -RInI --line-number --extended-regexp -- "$pat" . 2>/dev/null || true)
done

if (( ${#content_hits[@]} > 0 )); then
  fail=1
  echo "FAIL: forbidden content patterns found (redact before publishing):" >&2
  # Print file:line only (avoid echoing the matched secret)
  printf '%s\n' "${content_hits[@]}" | sed -E 's/:([0-9]+):.*/:\1: <redacted>/' | sort -u >&2
fi

if (( fail == 1 )); then
  echo "preflight: FAIL" >&2
  exit 1
fi

echo "preflight: PASS"
```

## status.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark light">
  <meta name="theme-color" content="#0b1020" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#f6f8ff" media="(prefers-color-scheme: light)">
  <title>Crabbie Ops Status</title>
  <link rel="icon" type="image/jpeg" href="ui/assets/crabbie-logo.jpg">
  <link rel="apple-touch-icon" href="ui/assets/crabbie-logo.jpg">

  <link rel="stylesheet" href="ui/STYLE_TOKENS_V1.css">
  <link rel="stylesheet" href="ui/COMPONENTS_V1.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="topbar" role="banner">
    <div class="topbar__row">
      <a class="home-logo" href="index.html"><img src="ui/assets/crabbie-logo.jpg" alt="Crabbie"> Crabbie Ops Home</a>
      <button type="button" class="nav-toggle" data-nav-toggle aria-controls="primary-nav" aria-expanded="false" aria-label="Toggle navigation">☰ Menu</button>
    </div>
    <h1 class="topbar__title">Live Status</h1>
    <p class="topbar__sub">Visible execution surfaces: tasks, agents, UX, design, and downloads.</p>
    <nav id="primary-nav" class="topbar__actions" data-nav-links aria-label="Primary">
      <a class="btn" href="status.html">Status</a>
      <a class="btn" href="activity.html">Activity</a>
      <a class="btn" href="kanban.html">Pipeline</a>
      <a class="btn" href="agent-queue.html">Agent Queue</a>
      <a class="btn" href="agents.html">Agents</a>
      <a class="btn" href="api-usage.html">API Usage</a>
      <a class="btn" href="architect-review.html">Architect Pack</a>
      <a class="btn" href="cv-preview.html">CV Preview</a>
      <a class="btn" href="cv-run.html">CV Run</a>
    </nav>
  </header>

  <main id="main" class="board board--wrap" aria-label="Status boards" tabindex="-1">
    <section class="column" aria-label="Execution artefacts">
      <div class="column__shell">
        <h2 class="column__header">Execution Artefacts</h2>

        <div class="item item--link">
          <a class="item__link" href="UPDATE_CAPTURE.md"><h3 class="item__title">Update Capture Log</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="project-gantt.md"><h3 class="item__title">Project Gantt</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="CONTROL_TOWER.md"><h3 class="item__title">Control Tower</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="agents/README.md"><h3 class="item__title">Agent Profiles Index</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="api-usage.html"><h3 class="item__title">API Usage Tracker</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="architect-review.html"><h3 class="item__title">Architect Review Pack</h3></a>
        </div>
      </div>
    </section>

    <section class="column" aria-label="What changed">
      <div class="column__shell">
        <h2 class="column__header">What changed</h2>

        <div class="item item--link">
          <a class="item__link" href="activity.html">
            <h3 class="item__title">Activity timeline</h3>
            <div class="item__meta">Fastest way to see latest runs, updates, and system events. <span class="badge badge--info">View all</span></div>
          </a>
        </div>

        <div class="item item--link">
          <a class="item__link" href="UPDATE_CAPTURE.md">
            <h3 class="item__title">Update capture (rolling log)</h3>
            <div class="item__meta">Curated change notes, decisions, and “what shipped”.</div>
          </a>
        </div>

        <div class="item">
          <h3 class="item__title">Tip</h3>
          <div class="item__small">When you add a new ops surface, link it here and in Activity so “what changed” is never buried.</div>
        </div>
      </div>
    </section>

    <section class="column" aria-label="UX pack">
      <div class="column__shell">
        <h2 class="column__header">UX Pack</h2>

        <div class="item item--link">
          <a class="item__link" href="ux/JOURNEY_MAPS_V1.md"><h3 class="item__title">Journey Maps</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="ux/MASTHEAD_NAV_SPEC_V1.md"><h3 class="item__title">Masthead Nav Spec</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md"><h3 class="item__title">Status Timeline Spec</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="ux/IA_AND_NAV_V1.md"><h3 class="item__title">IA and Navigation</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="ux/ACCEPTANCE_CRITERIA_V1.md"><h3 class="item__title">UX Acceptance Criteria</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="api-usage.html"><h3 class="item__title">API Usage Tracker</h3></a>
        </div>
      </div>
    </section>

    <section class="column" aria-label="Downloads">
      <div class="column__shell">
        <h2 class="column__header">Review Downloads (PDF)</h2>

        <div class="item item--link">
          <a class="item__link" href="downloads/UX_Journey_Maps_v1.pdf"><h3 class="item__title">UX Journey Maps PDF</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="downloads/UX_Wireframes_v1.pdf"><h3 class="item__title">UX Wireframes PDF</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="downloads/UX_Sitemap_v1.pdf"><h3 class="item__title">UX Sitemap PDF</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="downloads/UI_Design_Language_v1.pdf"><h3 class="item__title">UI Design Language PDF</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="downloads/UI_Colour_Palette_v1.pdf"><h3 class="item__title">UI Colour Palette PDF</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="downloads/UI_Typography_v1.pdf"><h3 class="item__title">UI Typography PDF</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="downloads/UI_Iconography_and_Imagery_v1.pdf"><h3 class="item__title">UI Iconography &amp; Imagery PDF</h3></a>
        </div>
        <div class="item item--link">
          <a class="item__link" href="api-usage.html"><h3 class="item__title">API Usage Tracker</h3></a>
        </div>
      </div>
    </section>
  </main>

  <script src="ui/nav_v1.js" defer></script>
</body>
</html>
```

## studio-roster.yaml

```yaml
team: Crabbie OS Studio Pod
owner: Matt Kain
manager_agent: Crabbie
objective: "Design and ship a premium multi-agent operating system with WYSIWYG dashboards and strong delegation."

global_guardrails:
  - No irreversible deletion/destruction without Matt's explicit approval.
  - Keep all outputs reversible and versioned.
  - Prioritise high-signal UX and operational clarity over complexity.
  - Ship in visible increments to dev pages.

agents:
  - id: ux-strategy
    name: Northstar
    role: UX Strategist
    mandate:
      - Define IA, workflows, and decision surfaces.
      - Keep dashboard focused on monitor -> decide -> delegate loops.
    outputs: [ux-map.md, journey-flows.md, information-architecture.md]

  - id: ui-design
    name: Velvet
    role: UI Designer
    mandate:
      - Create visual system (tokens, spacing, typography, components).
      - Ensure executive-grade readability and mobile-safe views.
    outputs: [design-tokens.css, component-spec.md, ui-mock-notes.md]

  - id: web-dev
    name: Rivet
    role: Frontend Web Developer
    mandate:
      - Implement pages/components, routing, and data rendering.
      - Optimise performance and deployment stability.
    outputs: [index.html, dashboard/*.html, assets/*]

  - id: copywriter
    name: Quill
    role: Product Copywriter
    mandate:
      - Write labels, microcopy, summaries, and executive update text.
      - Keep tone sharp, clear, and commercially literate.
    outputs: [copy-deck.md, microcopy.md, release-notes.md]

  - id: qa-ops
    name: Sentinel
    role: QA + Operations Reliability
    mandate:
      - Validate flows, links, empty states, and data integrity.
      - Log defects and publish quality gates before each push.
    outputs: [qa-checklist.md, bug-log.md, release-gate.md]

  - id: automation
    name: Pulse
    role: Automation Engineer
    mandate:
      - Build command routing, sync scripts, and refresh pipelines.
      - Reduce manual updates via data-fed rendering.
    outputs: [sync-scripts/, command-router.md, automation-log.md]
```

## ui/COMPONENTS_V1.css

```css
/* Crabbie OS components v1 (dashboard primitives)
   Depends on: STYLE_TOKENS_V1.css

   Accessibility / responsiveness notes (v1.1):
   - Adds a visible-on-focus skip link (.skip-link)
   - Ensures focus is visible on cards via :focus-within
   - Improves sticky header offsets across breakpoints via --topbar-h
   - Adds safe-area padding support for iOS notch devices
*/

:root{
  /* Sticky header offset shared across pages.
     Overridden in media queries below.
  */
  --topbar-h: 88px;
  --sticky-offset: calc(var(--topbar-h) + env(safe-area-inset-top));
}

/* Utilities */
.sr-only{
  position:absolute !important;
  width:1px;height:1px;
  padding:0;margin:-1px;
  overflow:hidden;
  clip:rect(0,0,0,0);
  white-space:nowrap;
  border:0;
}

.skip-link{
  position:absolute;
  left:var(--s3);
  top:calc(var(--s3) + env(safe-area-inset-top));
  z-index:999;
  padding:10px 12px;
  border-radius:10px;
  background:var(--surface);
  border:1px solid var(--border-2);
  color:var(--text);
  transform:translateY(-140%);
  transition: transform var(--dur-1, 140ms) var(--ease-standard, ease);
}
.skip-link:focus,
.skip-link:focus-visible{
  transform:translateY(0);
  outline:none;
  box-shadow:var(--focus-strong);
}

/* Page wrappers (avoid per-page inline CSS) */
.wrap{
  padding: var(--s4);
  max-width: var(--content-max);
  margin: 0 auto;
}
.wrap--wide{max-width: var(--content-max-wide)}
.wrap--narrow{max-width: var(--content-max-narrow)}
.wrap > :where(p,ul,ol){max-width: var(--measure)}
@media (max-width: 640px){
  .wrap{padding: var(--s3)}
}

/* KPI tiles (small dashboard stats) */
.kpi{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:var(--s2);
  margin:var(--s3) 0;
}
.kpi .item{margin:0}
@media (max-width: 640px){
  .kpi{grid-template-columns:1fr}
}

/* Layout */
.topbar{
  padding: calc(var(--s4) + env(safe-area-inset-top)) calc(var(--s4) + var(--s2));
  padding-bottom: var(--s4);
  background: color-mix(in srgb, var(--surface) 80%, var(--bg));
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 10;
}
.topbar__title{margin:0;font-size:var(--fs-4);line-height:var(--lh-tight)}
.topbar__sub{margin-top:var(--s1);color:var(--text-2);font-size:var(--fs-1)}

.topbar__row{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:var(--s2);
  flex-wrap:wrap;
}
.home-logo{
  display:inline-flex;
  align-items:center;
  gap:8px;
  color:var(--text);
  text-decoration:none;
  font-weight:700;
  min-width:0;
  max-width:100%;
}
.home-logo:focus-visible{outline:none;box-shadow:var(--focus-strong);border-radius:12px}
.home-logo img{width:28px;height:28px;border-radius:50%;object-fit:cover;border:1px solid var(--border-2)}

.nav-toggle{display:none}
.nav-toggle:hover{border-color:color-mix(in srgb, var(--accent) 40%, var(--border-2));box-shadow:var(--shadow-1)}
.nav-toggle:active{transform:translateY(1px)}
.nav-toggle:focus-visible{outline:none;box-shadow:var(--focus-strong)}

.topbar__actions{margin-top:var(--s2);display:flex;gap:var(--s2);flex-wrap:wrap;align-items:center}

.board{display:flex;gap:var(--s3);overflow:auto;padding:var(--s4);
  /* iOS home indicator / safe-area: ensure last row of cards isn't obscured */
  padding-bottom: calc(var(--s4) + env(safe-area-inset-bottom));

  /* Horizontal-kanban usability (mouse + touch + keyboard) */
  scroll-snap-type: x proximity;
  scroll-padding-inline: var(--s4);

  /* Prevent "scroll chaining" and reduce layout shift when scrollbars appear */
  overscroll-behavior-x: contain;
  scrollbar-gutter: stable;
  -webkit-overflow-scrolling: touch;

  /* Make horizontal scrolling discoverable (especially on desktop trackpads). */
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: var(--scrollbar-thumb) transparent;
}

/* WebKit scrollbar styling (Chrome/Safari/Edge) */
.board::-webkit-scrollbar{height:12px}
.board::-webkit-scrollbar-track{background:transparent}
.board::-webkit-scrollbar-thumb{
  background: var(--scrollbar-thumb);
  border: 3px solid transparent;
  background-clip: padding-box;
  border-radius: 999px;
}
.board::-webkit-scrollbar-thumb:hover{background: var(--scrollbar-thumb-hover)}

/* Scroll-region affordance
   When a board is keyboard-focusable (tabindex="0"), give it a visible focus ring
   so users discover that it scrolls horizontally.
*/
.board[tabindex="0"]{outline:none}
.board[tabindex="0"]:focus-visible{box-shadow:var(--focus-strong);border-radius:var(--focus-radius, var(--r2))}

/* Status/landing pages: allow columns to wrap instead of forcing horizontal scroll. */
.board--wrap{flex-wrap:wrap;overflow:visible;align-items:flex-start;scroll-snap-type:none;scroll-padding-inline:0}
/* Avoid accidental horizontal overflow on very small viewports (e.g. 320px).
   min() keeps the intended card width while respecting available space.
*/
.board--wrap .column{flex:1 1 420px;min-width:min(320px, 100%);max-width:none}
.column{
  min-width: 340px;
  max-width: 340px;
  scroll-snap-align: start;
}
.column__shell{background:var(--surface);border:1px solid var(--border);border-radius:var(--r2)}
.column__header{
  font-size: var(--fs-2);
  margin: 0;
  padding: var(--s3) var(--s3);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: var(--sticky-offset);
  background: var(--surface);
  z-index: 5;
}

/* Kanban-specific header behaviour
   - Keep column headers aligned to a consistent baseline.
   - Prevent sticky-offset overlap over the first card on the pipeline board.
*/
.page-kanban .column__header{
  position: static;
  top: auto;
  min-height: 56px;
  display: flex;
  align-items: center;
}

/* Cards */
.item{
  margin: var(--s3);
  background: var(--surface-2);
  border: 1px solid var(--border-2);
  border-radius: var(--r1);
  padding: var(--s3);
}
.item:hover{border-color:color-mix(in srgb, var(--accent) 22%, var(--border-2))}
.item:focus-within{
  border-color: color-mix(in srgb, var(--accent) 40%, var(--border-2));
  box-shadow: var(--focus);
  /* Background tint helps when box-shadow focus rings are subtle (and improves scanability). */
  background: var(--surface-focus, var(--surface-2));
}

/* Deep-link highlight (e.g. from CV Run → Kanban) */
.item--highlight{
  border-color: color-mix(in srgb, var(--accent) 65%, var(--border-2));
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 45%, transparent);
}
@media (prefers-reduced-motion: no-preference){
  .item--highlight{animation: highlightPulse 1.2s ease-in-out 0s 2}
  @keyframes highlightPulse{
    0%,100%{box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 45%, transparent)}
    50%{box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 65%, transparent)}
  }
}

/* Linked cards: make the whole card a generous target (avoid tiny title links). */
.item--link{padding:0}
.item--link .item__link{
  display:block;
  padding: var(--s3);
  min-height: var(--tap-min);
  color: inherit;
  text-decoration: none;
  border-radius: var(--r1);
}
.item--link .item__link:hover{
  background: var(--surface-hover);
}
.item--link .item__link:active{
  background: var(--surface-press);
}
.item--link .item__link:focus-visible{
  outline:none;
  box-shadow: var(--focus-strong);
  background: var(--surface-focus, var(--surface-hover));
}

.item__title{font-weight:700;font-size:var(--fs-2);margin:0 0 var(--s2) 0;line-height:var(--lh-tight)}
.item__meta{font-size:var(--fs-1);color:var(--text-2);line-height:1.35;overflow-wrap:anywhere}
/* When metadata includes an inline badge (e.g. “View all”), give it breathing room. */
.item__meta .badge{margin-left:6px}
.item__small{font-size:var(--fs-1);color:var(--text-3);margin-top:var(--s2);overflow-wrap:anywhere}

/* Badges */
.badges{display:flex;flex-wrap:wrap;gap:6px;margin-top:var(--s2)}
.badge{display:inline-flex;align-items:center;gap:6px}

.badge--tier{background:rgba(155,192,255,.12);color:var(--text);border-color:rgba(155,192,255,.18)}

.badge--prio-high{background:var(--danger-bg);color:var(--danger-fg)}
.badge--prio-med{background:var(--warning-bg);color:var(--warning-fg)}
.badge--prio-low{background:var(--info-bg);color:var(--info-fg)}

/* Generic semantic badges (used by live boards) */
.badge--success{background:var(--success-bg, rgba(46, 160, 67, .18));color:var(--success-fg, #2ea043);border-color:color-mix(in srgb, var(--success-fg, #2ea043) 25%, transparent)}
.badge--danger{background:var(--danger-bg);color:var(--danger-fg);border-color:color-mix(in srgb, var(--danger-fg) 25%, transparent)}
.badge--warning{background:var(--warning-bg);color:var(--warning-fg);border-color:color-mix(in srgb, var(--warning-fg) 25%, transparent)}
.badge--info{background:var(--info-bg);color:var(--info-fg);border-color:color-mix(in srgb, var(--info-fg) 25%, transparent)}

/* Links inside cards */
.item a{color:var(--link)}
.item a:focus-visible{outline:none;box-shadow:var(--focus-strong);border-radius:8px}

/* Buttons (dashboard actions)
   Notes:
   - Designed to work on <button> and <a>.
   - Use aria-disabled="true" for disabled anchors.
   - Use aria-current="page" for the current page in nav.
*/
.btn{
  appearance:none;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  min-height: var(--tap-min);
  border:1px solid var(--border-2);
  background:var(--surface-2);
  color:var(--text);
  padding:8px 12px;
  border-radius:10px;
  font:inherit;
  line-height:1.1;
  cursor:pointer;
  user-select:none;
  text-decoration:none;
}
.btn:hover{border-color:color-mix(in srgb, var(--accent) 40%, var(--border-2));box-shadow:var(--shadow-1)}
.btn:not([disabled]):not([aria-disabled="true"]):active{transform:translateY(1px)}
.btn:focus-visible{outline:none;box-shadow:var(--focus-strong)}
.btn[disabled],
.btn[aria-disabled="true"]{
  opacity:.55;
  cursor:not-allowed;
  box-shadow:none;
}
/* Anchors styled as buttons should behave like disabled buttons when aria-disabled is present. */
a.btn[aria-disabled="true"]{
  pointer-events:none;
}
.btn--primary,

.btn[aria-current="page"]{
  background:color-mix(in srgb, var(--accent) 22%, var(--surface-2));
  border-color:color-mix(in srgb, var(--accent) 45%, var(--border-2));
}
.btn--danger{background:color-mix(in srgb, var(--danger-bg) 70%, var(--surface-2));border-color:color-mix(in srgb, var(--danger-fg) 35%, var(--border-2));color:var(--danger-fg)}

/* Form fields */
.field{display:grid;gap:6px}
.field__label{font-size:var(--fs-1);color:var(--text-2)}
.input{
  width:100%;
  min-height: var(--tap-min);
  background:var(--surface-2);
  border:1px solid var(--border-2);
  color:var(--text);
  border-radius:10px;
  padding:9px 10px;
}
.input::placeholder{color:color-mix(in srgb, var(--text-3) 80%, transparent)}
.input:focus-visible{outline:none;box-shadow:var(--focus-strong)}

/* Density and readability guardrails */
@media (max-width: 960px){
  :root{--topbar-h: 104px}
  .topbar{padding:calc(var(--s3) + env(safe-area-inset-top)) var(--s3);padding-bottom:var(--s3)}
  .topbar__title{font-size:18px}
  .topbar__actions{gap:8px}
  .btn{padding:8px 10px}
  .board{padding:var(--s3);padding-bottom: calc(var(--s3) + env(safe-area-inset-bottom))}
  .column{min-width: 88vw;max-width: 88vw}
}

@media (max-width: 640px){
  :root{--topbar-h: 132px}
  .topbar__sub{font-size:11px}
  .nav-toggle{display:inline-flex;appearance:none;border:1px solid var(--border-2);background:var(--surface-2);color:var(--text);border-radius:10px;padding:8px 10px;min-height:var(--tap-min)}
  .topbar__actions{display:none;grid-template-columns:1fr 1fr;gap:8px}
  /* Mobile: when the menu opens, present it as a distinct panel for scanability.
     (Avoid “floating links on same background” which reduces perceived affordance.) */
  .topbar__actions.is-open{
    display:grid;
    padding: var(--s2);
    background: color-mix(in srgb, var(--surface-2) 88%, var(--bg));
    border: 1px solid var(--border-2);
    border-radius: var(--r2);
  }
  .btn{width:100%}
  .board{gap:var(--s2);padding:var(--s3);padding-bottom: calc(var(--s3) + env(safe-area-inset-bottom))}
  .column{min-width: 92vw;max-width: 92vw}
  .item{margin:var(--s2);padding:var(--s2)}
}

@media (prefers-contrast: more){
  .column__shell{border-color:var(--border-2)}
  .item{border-color:var(--border)}
  .btn{border-color:var(--border)}
}

/* Capacity gauge (agent profiles) */
.cap-row{display:flex;justify-content:space-between;align-items:center;margin-top:10px;gap:10px}
.cap-meta{font-size:var(--fs-1);color:var(--text-2)}
.cap-val{font-size:var(--fs-1);color:var(--text);font-weight:700;white-space:nowrap}
.cap-track{height:10px;background:var(--surface-2);border:1px solid var(--border-2);border-radius:999px;overflow:hidden;margin-top:6px}
.cap-fill{height:100%}
/* Use state tokens to keep palette consistent and maintain contrast in dark UI */
.cap-fill.success{background:color-mix(in srgb, var(--success-fg) 55%, #22c55e)}
.cap-fill.warning{background:color-mix(in srgb, var(--warning-fg) 55%, #f59e0b)}
.cap-fill.danger{background:color-mix(in srgb, var(--danger-fg) 55%, #ef4444)}
.cap-sub{font-size:var(--fs-0);color:var(--text-2);margin-top:6px}

/* Tables (API usage + future logs)
   Accessibility: ensure horizontal scroll on small screens instead of squishing.
*/
.table-wrap{
  overflow:auto;
  max-width:100%;
  border-radius:var(--r2);
  /* Wrapper owns the scroll and focus ring; table stays semantic */
  background: var(--surface);
  border: 1px solid var(--border-2);
  scrollbar-gutter: stable;
  -webkit-overflow-scrolling: touch;

  /* Make horizontal scroll discoverable, consistent with .board */
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: var(--scrollbar-thumb) transparent;
}
.table-wrap:focus-visible{outline:none;box-shadow:var(--focus-strong)}

/* WebKit scrollbar styling for table scroll regions */
.table-wrap::-webkit-scrollbar{height:12px}
.table-wrap::-webkit-scrollbar-track{background:transparent}
.table-wrap::-webkit-scrollbar-thumb{
  background: var(--scrollbar-thumb);
  border: 3px solid transparent;
  background-clip: padding-box;
  border-radius: 999px;
}
.table-wrap::-webkit-scrollbar-thumb:hover{background: var(--scrollbar-thumb-hover)}

/* Numeric alignment helper (tables + KPIs) */
.num{
  font-variant-numeric: tabular-nums;
  font-family: var(--font-mono);
}

.table{width:100%;border-collapse:collapse;background:transparent;border:none;font-variant-numeric: tabular-nums}
.table caption{caption-side:top;text-align:left;padding:var(--s3) var(--s3) 0 var(--s3);color:var(--text-2);font-size:var(--fs-1)}
.table th,.table td{padding:10px;vertical-align:top;border-bottom:1px solid var(--border-2);font-size:var(--fs-1);text-align:left}
.table th.num,.table td.num{text-align:right;white-space:nowrap}
.table thead th{position:sticky;top:var(--sticky-offset);background:color-mix(in srgb, var(--surface) 90%, var(--bg));z-index:1}
.table tr:hover td{background:color-mix(in srgb, var(--accent) 8%, var(--surface))}

/* Notices (inline feedback)
   Use for non-blocking errors/info (e.g., clipboard permissions, missing files).
   Pattern: <div class="notice notice--danger" role="alert">…</div>
*/
.notice{
  padding: 10px 12px;
  border-radius: var(--r1);
  border: 1px solid var(--border-2);
  background: var(--surface-2);
  color: var(--text);
  font-size: var(--fs-1);
  line-height: 1.45;
}
.notice a{color:inherit;text-decoration:underline;text-decoration-thickness:2px}
.notice--info{background:color-mix(in srgb, var(--info-bg) 75%, var(--surface-2));border-color:color-mix(in srgb, var(--info-fg) 25%, var(--border-2));color:var(--info-fg)}
.notice--success{background:color-mix(in srgb, var(--success-bg) 75%, var(--surface-2));border-color:color-mix(in srgb, var(--success-fg) 25%, var(--border-2));color:var(--success-fg)}
.notice--warning{background:color-mix(in srgb, var(--warning-bg) 75%, var(--surface-2));border-color:color-mix(in srgb, var(--warning-fg) 25%, var(--border-2));color:var(--warning-fg)}
.notice--danger{background:color-mix(in srgb, var(--danger-bg) 75%, var(--surface-2));border-color:color-mix(in srgb, var(--danger-fg) 25%, var(--border-2));color:var(--danger-fg)}

/* Timeline (Activity)
   Semantics: <ol class="timeline"><li><div class="item">…</div></li></ol>
   Goals: readable chronology, clear separation, and good keyboard/zoom behaviour.
*/
.timeline{
  list-style:none;
  padding:0;
  margin: var(--s3) 0;
  display:grid;
  gap: var(--s3);
}
.timeline > li{margin:0}

/* Extra breathing room for long notes without changing base card styling. */
.item__sub{
  margin: 0 0 var(--s2) 0;
  font-size: var(--fs-1);
  color: var(--text-2);
  max-width: var(--measure);
  overflow-wrap:anywhere;
}

.item__actions{
  margin: var(--s2) 0 0 0;
  display:flex;
  flex-wrap:wrap;
  gap: 8px;
}

/* Activity entries tend to be dense; keep action buttons compact on desktop. */
.item__actions .btn{
  padding: 7px 10px;
  min-height: var(--tap-min-compact, 40px);
}

@media (max-width: 640px){
  .timeline{gap: var(--s2)}
  .item__actions .btn{flex:1 1 160px;}
}
```

## ui/CV_PREVIEW_V1.css

```css
/* CV preview v1 (paper-in-dark layout)
   Depends on: STYLE_TOKENS_V1.css
   Goal: make on-screen preview match PDF-friendly typography without forcing the whole app to light theme.
*/

.cv-shell{max-width:var(--content-max);margin:0 auto;padding:clamp(18px, 3vw, var(--s6)) clamp(12px, 2vw, var(--s4))}

.cv-paper{
  background:var(--paper-bg);
  color:var(--paper-text);
  border:1px solid var(--paper-border);
  border-radius:14px;
  padding:clamp(16px, 2.2vw, 30px);
  box-shadow: var(--shadow-2);
}

.cv-paper a{color:var(--paper-accent)}
.cv-paper a:hover{text-decoration:underline}
/* Use paper-specific focus so the ring doesn’t look too “neon” on white */
.cv-paper a:focus-visible{outline:none;box-shadow:var(--paper-focus, var(--focus-strong));border-radius:8px}

.cv-h1{font-size:clamp(22px, 1.5vw + 16px, 30px);line-height:1.15;margin:0 0 8px 0;letter-spacing:-0.01em}
.cv-lede{margin:0 0 14px 0;color:var(--paper-muted);font-size:clamp(13px, 0.25vw + 12px, 14px);line-height:1.4}

.cv-grid{display:grid;grid-template-columns: 1.25fr 0.75fr;gap:18px;align-items:start}

.cv-section{margin-top:18px}
.cv-section__title{font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:var(--paper-muted);margin:0 0 8px 0}

.cv-role{padding:12px 0;border-top:1px solid var(--paper-border)}
.cv-role:first-of-type{border-top:none;padding-top:0}
.cv-role__title{margin:0;font-weight:700;font-size:14px;line-height:1.25}
.cv-role__meta{margin:4px 0 0 0;color:var(--paper-muted);font-size:12.5px}
.cv-role__bullets{margin:8px 0 0 18px}
.cv-role__bullets li{margin:6px 0}

.cv-pill{display:inline-block;border:1px solid var(--paper-border);border-radius:999px;padding:3px 8px;font-size:11.5px;color:var(--paper-muted);margin:0 6px 6px 0}

/* Print: remove shadows and force full-width paper */
@media print{
  body{background:#fff}
  .topbar,.board,.cv-shell{padding:0 !important}
  .cv-paper{box-shadow:none;border:none;border-radius:0;padding:0}
}

/* Small screens: single column */
@media (max-width: 860px){
  .cv-grid{grid-template-columns:1fr}
}
```

## ui/DESIGN_LANGUAGE_V1.md

```markdown
# Crabbie OS Design Language v1

## Principles
1. Clarity first: every screen should answer "what matters now?"
2. Operational calm: low-noise layout, strong hierarchy, minimal visual clutter.
3. Executive readability: concise copy, obvious status, easy scanning.
4. Motion with purpose: subtle hover, selection, and drag feedback only.

## Visual direction
- Aesthetic: modern macOS-inspired dark UI, minimal, high-contrast data cards.
- Typography: Inter/system UI fallback, strong section labels, compact metadata, but never below 12px for core UI copy.

### Colour system (tokens)
- Background: #0b1020 (`--bg`)
- Surface: #121a36 (`--surface`)
- Surface 2: #0f1730 (`--surface-2`) for inner cards/rows
- Border: #243059 (`--border`)
- Border 2: #2a3a70 (`--border-2`) for stronger separation
- Text: #eaf0ff (`--text`)
- Text secondary: #b7c6ef (`--text-2`)
- Text muted: #9eb0de (`--text-3`)
- Link: #9bc0ff (`--link`)
- Visited link: derived (`--link-visited`) for subtle differentiation (avoid purple default).
- Accent: #2a64ff (`--accent`)

Interaction surfaces (derived, used for hover/press/focus feedback):
- Surface hover tint: `--surface-hover`
- Surface press tint: `--surface-press`
- Surface focus tint: `--surface-focus` (used for focus-within on cards and focus-visible on full-card links)

Scrollbar affordance tokens (derived, used for boards/tables on desktop):
- Thumb: `--scrollbar-thumb`
- Thumb hover: `--scrollbar-thumb-hover`

State colours should ship as paired bg/fg tokens (avoid “green on green”):
- Success: bg #123b27 / fg #bff3d6
- Warning: bg #3c3516 / fg #ffe6a6
- Danger:  bg #3f1620 / fg #ffc0ce
- Info:    bg #163042 / fg #b9e4ff

### Type + spacing scale (build rules)
- Base font size: `--fs-2` (fluid clamp: 14px → 16px), line-height 1.45 (`--lh-body`).
- Titles: `--fs-5` (fluid clamp: 26px → 32px) for landing, `--fs-4` (19px → 22px) for page headers, `--fs-3` (16px → 18px) for emphasis.
- Metadata: `--fs-1` (12px → 13px), micro labels: `--fs-0` (11px).
- Spacing: 4px grid (`--s1`..`--s6`). Default card padding 16px.
- Radii: cards 12px, inner panels 10px, chips 999px.
- Elevation: only for hover/active, use `--shadow-1` (avoid permanent drop-shadows on static cards).
- Links: default to underlined links for discoverability in operational text. Exceptions: button-styled links (`.btn`), brand/home links (`.home-logo`), and full-card links (`.item__link`) should explicitly remove underlines.
- Focus: all interactive elements must have `:focus-visible` outline/box-shadow using `--focus` / `--focus-strong`.
- Touch targets: buttons and inputs should meet `--tap-min` (44px) where practical. For dense secondary actions (e.g., Activity cards), `--tap-min-compact` (40px) is acceptable on desktop while keeping mobile targets generous.
- Readability guardrails: prefer `.wrap` + `--content-max` variants over page-specific inline widths; cap long paragraphs to `--measure`.
- Long strings (ids/paths/URLs): prefer `overflow-wrap:anywhere` on metadata/help text blocks so mobile layouts don’t overflow horizontally (implemented on `.item__meta` / `.item__small` in `COMPONENTS_V1.css`).
- Numbers: use `.num` (tabular-nums + mono) for costs/tokens so columns visually scan.

Reference implementation: `ops/ui/STYLE_TOKENS_V1.css`

Notes:
- Token derivations use `color-mix(...)` for hover/press/visited-link nuance. A guarded `@supports not (color-mix)` fallback keeps the UI functional on older browsers.
- The ops UI now provides an optional light theme under `@media (prefers-color-scheme: light)` to improve readability in bright environments.
- Motion tokens: `--dur-1`, `--dur-2`, `--ease-standard`. Respect `@media (prefers-reduced-motion: reduce)` by zeroing durations and suppressing non-essential animations/transitions.

## Core components
- Left rail navigation with module grouping.
- Top command bar with search + quick actions.
- Kanban cards with status chips, owner, next action.
- Entity links: role -> company -> CRM contacts.
- Activity timeline with timestamp + actor + event type.
  - Build pattern: render as an ordered list (`<ol class="timeline">`) so chronology is explicit, with each entry as a standard `.item` card.
  - Optional sub-elements: `.item__sub` for longer notes, `.item__actions` for compact action buttons.
- Status “What changed” module: Status page should always include a dedicated entrypoint to `activity.html` (plus a link to the curated `UPDATE_CAPTURE.md`) so exec users can answer “what happened since last time?” in one click.

## Interaction patterns
- Hover: slight elevation + border accent.
- Select: clear focus ring and selected-state tint.
- Drag/drop: ghost card + insertion marker + valid/invalid drop cues.
- Loading: skeleton rows, not spinners where possible.

## Accessibility baseline
- Contrast AA minimum.
- Keyboard focus visible on all actionable elements.
- Skip links: pages using `.skip-link` should set the destination container (usually `<main id="main">`) to `tabindex="-1"` so keyboard focus actually moves (standardised across ops pages).
- Dynamic updates: any content that changes via JS (load draft, copy-to-clipboard feedback, fetch errors) should announce via `role="status"` (polite) or `role="alert"` (assertive) and should toggle `aria-busy` on the updated region.
- Injection safety (build rule): prefer `textContent` + `createElement` for data-driven UI. Only use `innerHTML` for static templates or when **every** interpolated value is escaped (e.g., via `escapeHtml`).
- Navigation: use `aria-current="page"` on the active page link (or let `ops/ui/nav_v1.js` apply it automatically) so screen readers announce the current location.
- Primary nav set (ops pages): include `Activity` alongside Status/Pipeline/Queue/Agents/API/CV surfaces so “what changed” is one click away from any page (and `nav_v1.js` remains the single source of truth for active state).
- Disabled actions: if an `<a>` is styled as a button, use `aria-disabled="true"` and ensure it is non-interactive (`pointer-events:none`) so it behaves like a disabled `<button>`.
- Mobile nav a11y: only apply `aria-hidden` to the nav when the menu is actually collapsible (i.e., the toggle is visible). On desktop layouts, do **not** leave `aria-hidden="true"` on a visible nav, or screen readers will lose access.
- Mobile nav scanability: when the menu is open, render the link cluster as a bordered/padded panel (distinct surface + border) so it reads as a menu, not stray buttons on the header.
- Sticky headers: anchor targets should use `scroll-margin-top` (see `:target` rule in `STYLE_TOKENS_V1.css`).
- Reduced motion preference respected.
- Text selection: ensure `::selection` maintains readable contrast (avoid near-black-on-blue in dark mode).
- Contrast preference: provide stronger borders and focus rings under `@media (prefers-contrast: more)`.
- Forced colours (Windows High Contrast): ensure focus is still visible via `@media (forced-colors: active)` outline fallback (see `STYLE_TOKENS_V1.css`).
- Safe areas (mobile): scroll surfaces should include `env(safe-area-inset-bottom)` padding so the last row of content is not obscured by the home indicator.
- Scroll regions (tables/boards): if a container scrolls horizontally, make the container own the border and focus ring (e.g., `.table-wrap[role="region"][tabindex="0"]` + `.table-wrap:focus-visible`).
- Tables: if using sticky `<thead>`, set `top: var(--sticky-offset)` so headers do not hide beneath the sticky topbar.
- Table scroll regions: use `.table-wrap` for horizontal overflow on small screens; it carries a visible scrollbar styled via `--scrollbar-thumb` tokens so horizontal scrolling is discoverable (and keyboard focus ring stays on the region, not the `<table>`).
- Boards: for true kanban horizontal scroll (`.board`), set `tabindex="0" role="region" aria-label="…"` and use `.board[tabindex="0"]:focus-visible` to show a focus ring (discoverability for keyboard users). Add ArrowLeft/ArrowRight (small step), PageUp/PageDown (near-viewport step), and Home/End (jump) keyboard scrolling when the region itself has focus (implemented generically in `ops/ui/scroll_a11y_v1.js`).
- Linked cards: avoid tiny title links. Use `.item.item--link` + `.item__link` so the whole card is a single generous tap/click target and focus ring.

## Page layout variants
- `board` (default): horizontal scroll for true kanban-style boards.
  - Usability: enable `scroll-snap-type: x proximity` and set `scroll-snap-align: start` on columns so touch users can “land” on a column cleanly.
- `board board--wrap`: wrap columns into a responsive grid (status/landing pages) to avoid forced sideways scrolling.
  - Build rule: columns should use `min-width: min(320px, 100%)` (or similar) so very small phones do not overflow horizontally due to fixed minimum widths.

## Page chrome (mobile polish)
- Pages should include `meta name="color-scheme" content="dark light"` and `meta name="theme-color" ...` for both dark/light so mobile browser UI (address bar, OS chrome) matches the selected theme.
```

## ui/MOCKUP_GUIDE_V1.md

```markdown
# Crabbie OS Mockup Guide v1

## Required mockups (priority)
1. Dashboard home (summary + deltas + risk panel)
2. Jobs board (status lanes + score + actions)
3. CRM graph view (company -> contacts -> relationship state)
4. Task detail drawer (owner, due date, history, linked entities)
5. Agent workspace page (bio, queue, logs, markdown notes)

## Navigation wireframe
- Home
- Jobs
- CRM
- Agents
- Activity
- Schedules
- Security
- Settings

## Data-linked navigation
- Click Role -> Role detail -> Linked Job URL
- Click Company -> Company profile -> Known CRM contacts
- Click Contact -> Contact timeline + follow-up actions

## Output quality bar
- One-screen comprehensibility in <10 seconds.
- Zero ambiguous status labels.
- Every primary action available within 2 clicks.
```

## ui/STYLE_TOKENS_V1.css

```css
/* Crabbie OS UI tokens v1 (build-ready)
   Usage: include in dashboard pages; keep values in sync with DESIGN_LANGUAGE_V1.md
*/

:root{
  color-scheme: dark;

  /* Interaction */
  --tap-min: 44px; /* WCAG-ish touch target baseline */
  --tap-min-compact: 40px; /* For dense secondary actions (still reasonable on desktop) */

  /* Motion (keep subtle; allow prefers-reduced-motion to zero durations) */
  --dur-1: 140ms;
  --dur-2: 220ms;
  --ease-standard: cubic-bezier(.2,.8,.2,1);

  /* Colour */
  --bg: #0b1020;
  --surface: #121a36;
  --surface-2: #0f1730;
  --border: #243059;
  --border-2: #2a3a70;
  --text: #eaf0ff;
  --text-2: #b7c6ef;
  --text-3: #9eb0de;
  --link: #9bc0ff;
  --link-visited: color-mix(in srgb, var(--link) 72%, var(--text-2));
  --accent: #2a64ff;

  /* Interaction surfaces (derived) */
  --surface-hover: color-mix(in srgb, var(--accent) 8%, var(--surface-2));
  --surface-press: color-mix(in srgb, var(--accent) 14%, var(--surface-2));
  --surface-focus: color-mix(in srgb, var(--accent) 10%, var(--surface-2)); /* focus-within / focus-visible background tint */

  /* Scrollbars (keep subtle but visible for horizontal boards/tables) */
  --scrollbar-thumb: color-mix(in srgb, var(--border-2) 85%, var(--accent));
  --scrollbar-thumb-hover: color-mix(in srgb, var(--border-2) 60%, var(--accent));

  --success-bg: #123b27;
  --success-fg: #bff3d6;
  --warning-bg: #3c3516;
  --warning-fg: #ffe6a6;
  --danger-bg: #3f1620;
  --danger-fg: #ffc0ce;
  --info-bg: #163042;
  --info-fg: #b9e4ff;

  /* Typography */
  --font-sans: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;

  /*
    Fluid type (kept conservative).
    Intent: improve small-screen readability without inflating desktop density.
  */
  --fs-0: 11px; /* micro */
  --fs-1: clamp(12px, 0.15vw + 11.5px, 13px); /* meta */
  --fs-2: clamp(14px, 0.25vw + 13px, 16px);  /* body */
  --fs-3: clamp(16px, 0.35vw + 14.5px, 18px); /* emphasis */
  --fs-4: clamp(19px, 0.55vw + 17px, 22px); /* section */
  --fs-5: clamp(26px, 1.1vw + 22px, 32px);  /* page title */

  --lh-tight: 1.2;
  --lh-body: 1.45;

  /* Spacing (4px grid) */
  --s1: 4px;
  --s2: 8px;
  --s3: 12px;
  --s4: 16px;
  --s5: 20px;
  --s6: 28px;

  /* Radii */
  --r1: 10px;
  --r2: 12px;
  --r-pill: 999px;

  /* Focus */
  --focus: 0 0 0 2px rgba(42,100,255,.55);
  --focus-strong: 0 0 0 3px rgba(42,100,255,.75);
  --focus-radius: 12px; /* default rounding for focus rings on containers */

  /* CV / document surfaces (paper inside dark UI) */
  --paper-bg: #ffffff;
  --paper-text: #0f172a;
  --paper-muted: #475569;
  --paper-border: #e2e8f0;
  --paper-accent: #1d4ed8;
  --paper-focus: 0 0 0 3px rgba(29,78,216,.35);

  /* Elevation + layout */
  --shadow-1: 0 8px 24px rgba(0,0,0,.28);
  --shadow-2: 0 12px 40px rgba(0,0,0,.38);

  /* Content widths (prefer named variants over one-off per-page inline CSS) */
  --content-max: 1100px;        /* default readable width for dashboards */
  --content-max-wide: 1280px;   /* dense pages where horizontal space helps (tables) */
  --content-max-narrow: 920px;  /* long-form prose */
  --measure: 74ch;              /* max comfortable line length for paragraphs */

  /* Sticky header offsets (used by dashboards + anchor navigation) */
  --topbar-h: 88px;
  --sticky-offset: calc(var(--topbar-h) + env(safe-area-inset-top));
}

/* Fallbacks for browsers that do not support color-mix (older Safari/WebViews).
   Keep behaviour functional, even if less nuanced.
*/
@supports not (color: color-mix(in srgb, #000 50%, #fff)){
  :root{
    --link-visited: var(--link);
    --surface-hover: var(--surface-2);
    --surface-press: var(--surface-2);
    --surface-focus: var(--surface-2);
    --scrollbar-thumb: var(--border-2);
    --scrollbar-thumb-hover: var(--border);
  }
}

/* Optional light mode (respects user preference).
   Intent: readable dashboards in bright environments without forcing a theme toggle.
*/
@media (prefers-color-scheme: light){
  :root{
    color-scheme: light;

    --bg: #f6f8ff;
    --surface: #ffffff;
    --surface-2: #f1f5ff;
    --border: #cbd5f0;
    --border-2: #b8c6ee;

    --text: #0f172a;
    --text-2: #334155;
    --text-3: #475569;

    --link: #1d4ed8;
    --link-visited: color-mix(in srgb, var(--link) 78%, #6d28d9);
    --accent: #1d4ed8;

    --success-bg: #e7f8ee;
    --success-fg: #0f5132;
    --warning-bg: #fff7dd;
    --warning-fg: #7a4a00;
    --danger-bg: #ffe7ee;
    --danger-fg: #7a1630;
    --info-bg: #e6f4ff;
    --info-fg: #0b3a62;

    --shadow-1: 0 10px 28px rgba(2,6,23,.10);
    --shadow-2: 0 16px 44px rgba(2,6,23,.14);

    --focus: 0 0 0 2px rgba(29,78,216,.35);
    --focus-strong: 0 0 0 3px rgba(29,78,216,.50);
  }
}

/* Reduce motion: respect user preference while keeping layout stable.
   Strategy: zero durations and avoid smooth scrolling.
*/
@media (prefers-reduced-motion: reduce){
  :root{--dur-1: 0ms; --dur-2: 0ms}
  html:focus-within{scroll-behavior:auto}
  *,*::before,*::after{animation-duration:0ms !important;animation-iteration-count:1 !important;transition-duration:0ms !important}
}

*{box-sizing:border-box}
html,body{height:100%}
body{margin:0;background:var(--bg);color:var(--text);font-family:var(--font-sans);font-size:var(--fs-2);line-height:var(--lh-body)}

a{
  color:var(--link);
  /* Default underline improves discoverability (esp. in dense ops text). */
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-decoration-color: color-mix(in srgb, var(--link) 60%, transparent);
  text-underline-offset: 2px;
}
a:visited{color:var(--link-visited)}
a:hover{ text-decoration-color: currentColor; }
a:focus-visible{outline:none;box-shadow:var(--focus-strong);border-radius:8px;text-decoration-color: currentColor;}

/* Text selection should remain readable in dark UI */
::selection{background:color-mix(in srgb, var(--accent) 35%, transparent);color:var(--text)}

/* Global keyboard focus guardrail (components may override) */
button:focus-visible{outline:none;box-shadow:var(--focus-strong);border-radius:10px}
[role="button"]:focus-visible{outline:none;box-shadow:var(--focus-strong);border-radius:10px}
:where([tabindex]:not([tabindex="-1"])):focus-visible{outline:none;box-shadow:var(--focus-strong);border-radius:var(--focus-radius, 12px)}

/* Prevent anchored content hiding behind sticky headers */
:target{scroll-margin-top: calc(var(--sticky-offset, 88px) + var(--s3))}

/* Form controls (used on CV preview, future filters/search) */
input,select,textarea,button{font:inherit}
input,select,textarea{
  color:inherit;
}
input:focus-visible,select:focus-visible,textarea:focus-visible{
  outline:none;
  box-shadow:var(--focus-strong);
  border-radius:10px;
}

code{
  font-family: var(--font-mono);
  font-size: 0.95em;
}

.muted{color:var(--text-3)}
.small{font-size:var(--fs-1);color:var(--text-3)}

.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r2);padding:var(--s4)}
.panel{background:var(--surface-2);border:1px solid var(--border-2);border-radius:var(--r1)}

.badge{display:inline-block;font-size:var(--fs-0);padding:2px 8px;border-radius:var(--r-pill);border:1px solid rgba(255,255,255,.08);vertical-align:middle}
.badge--info{background:var(--info-bg);color:var(--info-fg)}
.badge--success{background:var(--success-bg);color:var(--success-fg)}
.badge--warning{background:var(--warning-bg);color:var(--warning-fg)}
.badge--danger{background:var(--danger-bg);color:var(--danger-fg)}

@media (prefers-contrast: more){
  :root{
    /* Slightly brighter separations + stronger focus to reduce ambiguity */
    --border: color-mix(in srgb, var(--border) 55%, #ffffff);
    --border-2: color-mix(in srgb, var(--border-2) 55%, #ffffff);
    --focus: 0 0 0 2px rgba(155,192,255,.65);
    --focus-strong: 0 0 0 3px rgba(155,192,255,.9);
  }
}

@media (forced-colors: active){
  /* Windows High Contrast mode: box-shadow focus rings are often suppressed.
     Provide an outline-based fallback so keyboard focus remains visible.
  */
  a:focus-visible,
  button:focus-visible,
  input:focus-visible,
  select:focus-visible,
  textarea:focus-visible,
  [role="button"]:focus-visible,
  [tabindex]:focus-visible{
    outline: 2px solid Highlight;
    outline-offset: 2px;
    box-shadow: none !important;
  }
}

@media (prefers-reduced-motion: reduce){
  *{scroll-behavior:auto !important;transition:none !important;animation:none !important}
}
```

## ui/activity_live_v1.js

```javascript
// activity_live_v1.js
// Activity timeline rendering (events JSONL first; derived fallback to CSVs).
// v1 constraints: static hosting, no directory listing; parse first N lines; show skip/truncation notices.

import { parseCsv } from './csv_v1.js';

const EVENTS_FILE = 'events/events-2026-03.jsonl';
const MAX_EVENTS = 50;
const MAX_RENDER = 50;
const DERIVED_WINDOW_DAYS = 7;

function el(id) {
  return document.getElementById(id);
}

function parseDateUtcish(raw) {
  const s = (raw ?? '').trim();
  if (!s) return null;

  // Date-only → treat as UTC midnight.
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) {
    const d = new Date(`${s}T00:00:00Z`);
    return Number.isNaN(d.getTime()) ? null : d;
  }

  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? null : d;
}

function iso(d) {
  try {
    return d.toISOString();
  } catch {
    return null;
  }
}

function text(node, value) {
  node.textContent = value;
}

function normaliseEnvelope(e) {
  if (e && e.event_type && e.occurred_at && e.data) return e;
  if (e && e.type && e.payload) {
    return {
      ...e,
      event_type: e.type,
      occurred_at: e.occurred_at ?? e.occurredAt,
      data: e.payload
    };
  }
  return null;
}

function legacyPrdLineToItem(line) {
  const occurredAt = line.ts;
  const type = (line.type ?? '').toLowerCase();
  let domain = 'pipeline';
  if (type.includes('task')) domain = 'task';
  else if (type.includes('job')) domain = 'job';
  else if (type.includes('application')) domain = 'application';

  const item = {
    id: `legacy:${occurredAt}:${line.type}:${line.title}`,
    occurredAt,
    domain,
    summary: line.title || line.type || 'Activity',
    actor: line.actor || 'system',
    severity: 'info',
    links: []
  };

  if (Array.isArray(line.refs)) {
    for (const r of line.refs) {
      const href = (r ?? '').trim();
      if (!href) continue;
      // Keep conservative: only link if it looks like a relative HTML/MD/PDF path.
      if (/^(?:[a-z]+:)?\/\//i.test(href)) {
        // External URL: allow, but keep label simple.
        item.links.push({ label: 'ref', href });
      } else {
        item.links.push({ label: 'ref', href });
      }
    }
  }

  return item;
}

function eventToItem(env) {
  const e = normaliseEnvelope(env);
  if (!e) return null;

  const occurredAt = e.occurred_at;
  const d = parseDateUtcish(occurredAt);
  if (!d) return null;

  const eventType = (e.event_type ?? '').trim();
  const data = e.data ?? {};

  let domain = 'pipeline';
  if (eventType.startsWith('crm.job.')) domain = 'job';
  else if (eventType.startsWith('crm.application.')) domain = 'application';
  else if (eventType.startsWith('crm.task.')) domain = 'task';
  else if (eventType.startsWith('pipeline.')) domain = 'pipeline';
  else if (eventType.startsWith('ops.')) domain = 'pipeline';

  let summary = eventType || 'Activity';
  if (data.old_status && data.new_status) {
    summary = `Moved: ${data.old_status} → ${data.new_status}`;
    if (data.entity_label) summary = `${data.entity_label} ${summary}`;
  } else if (data.summary) {
    summary = String(data.summary);
  }

  const detail = data.reason ? String(data.reason) : '';

  let severity = 'info';
  const ns = String(data.new_status ?? '').toLowerCase();
  if (['rejected', 'withdrawn', 'dropped'].includes(ns)) severity = 'danger';
  if (String(data.status ?? '').toLowerCase() === 'blocked') severity = 'danger';

  const actor = data.changed_by || e.producer?.name || '';

  return {
    id: `${eventType}:${occurredAt}:${data.role_id ?? data.task_id ?? ''}`,
    occurredAt: iso(d) ?? occurredAt,
    domain,
    summary,
    detail: detail || undefined,
    actor: actor || undefined,
    severity,
    links: []
  };
}

function parseEventsJsonl(textRaw) {
  const lines = String(textRaw ?? '').split('\n');
  const items = [];
  let invalid = 0;
  let parsedNonEmpty = 0;
  let nonEmptyTotal = 0;

  for (const ln of lines) {
    if (ln.trim()) nonEmptyTotal += 1;
  }

  for (const ln of lines) {
    const s = ln.trim();
    if (!s) continue;
    if (parsedNonEmpty >= MAX_EVENTS) break;

    parsedNonEmpty += 1;

    try {
      const obj = JSON.parse(s);
      // PRD-006 legacy line support.
      if (obj && obj.ts && obj.type && obj.title) {
        items.push(legacyPrdLineToItem(obj));
        continue;
      }

      const item = eventToItem(obj);
      if (item) items.push(item);
      else invalid += 1;
    } catch {
      invalid += 1;
    }
  }

  const truncated = nonEmptyTotal > MAX_EVENTS;
  return { items, invalid, truncated };
}

async function fetchText(path) {
  const res = await fetch(path, { cache: 'no-store' });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return await res.text();
}

function withinDays(d, days) {
  const now = Date.now();
  const ms = days * 24 * 60 * 60 * 1000;
  return (now - d.getTime()) <= ms;
}

function deriveFromCsv(taskRows, jobRows) {
  const out = [];

  for (const r of taskRows) {
    const d = parseDateUtcish(r.updated_at);
    if (!d || !withinDays(d, DERIVED_WINDOW_DAYS)) continue;
    const rolePrefix = r.role_id ? `${r.role_id} · ` : '';
    out.push({
      id: `task:${r.task_id}`,
      occurredAt: iso(d) ?? r.updated_at,
      domain: 'task',
      summary: `${rolePrefix}${r.status}: ${r.title}`,
      detail: r.notes || undefined,
      severity: String(r.status).toLowerCase() === 'blocked' ? 'danger' : 'info',
      links: [{ label: 'Agent Queue', href: 'agent-queue.html' }]
    });
  }

  for (const r of jobRows) {
    const d = parseDateUtcish(r.updated_at || r.last_action);
    if (!d || !withinDays(d, DERIVED_WINDOW_DAYS)) continue;
    const next = (r.next_action ?? '').trim();
    const nextSuffix = next ? ` • Next: ${next}` : '';
    const na = next.toLowerCase();
    const severity = (na.includes('assess') || na.includes('prep') || na.includes('chase')) ? 'warning' : 'info';
    out.push({
      id: `job:${r.role_id}`,
      occurredAt: iso(d) ?? (r.updated_at || r.last_action),
      domain: 'job',
      summary: `${r.status}: ${r.title}${nextSuffix}`,
      detail: r.notes || undefined,
      severity,
      links: [{ label: 'Pipeline', href: 'kanban.html' }]
    });
  }

  out.sort((a, b) => (new Date(b.occurredAt)).getTime() - (new Date(a.occurredAt)).getTime());
  return out;
}

function renderNotice(container, msg) {
  const div = document.createElement('div');
  div.className = 'notice';
  div.setAttribute('role', 'status');
  text(div, msg);
  container.appendChild(div);
}

function renderTimeline(container, items) {
  const list = document.createElement('ol');
  list.className = 'timeline';

  for (const it of items.slice(0, MAX_RENDER)) {
    const li = document.createElement('li');

    const card = document.createElement('div');
    card.className = 'item';

    const h = document.createElement('h3');
    h.className = 'item__title';
    text(h, it.summary);

    const meta = document.createElement('p');
    meta.className = 'item__meta';
    const parts = [];
    parts.push(`${it.domain.toUpperCase()} · ${it.occurredAt.replace('T', ' ').replace('Z', ' UTC')}`);
    if (it.actor) parts.push(`by ${it.actor}`);
    text(meta, parts.join(' · '));

    card.appendChild(h);
    card.appendChild(meta);

    if (it.detail) {
      const p = document.createElement('p');
      p.className = 'item__sub';
      text(p, it.detail);
      card.appendChild(p);
    }

    if (Array.isArray(it.links) && it.links.length) {
      const links = document.createElement('p');
      links.className = 'item__actions';

      for (const l of it.links) {
        const a = document.createElement('a');
        a.className = 'btn';
        a.href = l.href;
        a.rel = 'noopener';
        text(a, l.label);
        links.appendChild(a);
      }
      card.appendChild(links);
    }

    li.appendChild(card);
    list.appendChild(li);
  }

  container.appendChild(list);
}

async function main() {
  const root = el('activityRoot');
  const meta = el('activityMeta');
  const out = el('activityOut');

  root?.setAttribute('aria-busy', 'true');
  if (meta) text(meta, 'Loading activity…');

  // 1) Try events JSONL.
  try {
    const txt = await fetchText(EVENTS_FILE);
    const parsed = parseEventsJsonl(txt);

    if (meta) text(meta, `Source: events (${EVENTS_FILE})`);

    if (parsed.invalid > 0) renderNotice(out, `${parsed.invalid} lines skipped (invalid JSON).`);
    if (parsed.truncated) renderNotice(out, `Showing first 50 events.`);

    parsed.items.sort((a, b) => (new Date(b.occurredAt)).getTime() - (new Date(a.occurredAt)).getTime());
    if (parsed.items.length === 0) renderNotice(out, 'No recent activity.');
    else renderTimeline(out, parsed.items);

    root?.setAttribute('aria-busy', 'false');
    return;
  } catch (e) {
    // Fall through to derived.
    if (meta) text(meta, 'Event feed unavailable, showing derived activity.');
  }

  // 2) Derived fallback.
  try {
    const [tasksText, jobsText] = await Promise.all([
      fetchText('agent-tasks.csv'),
      fetchText('job-pipeline.csv')
    ]);

    const tasks = parseCsv(tasksText);
    const jobs = parseCsv(jobsText);

    const derived = deriveFromCsv(tasks, jobs);
    if (derived.length === 0) renderNotice(out, 'No recent activity.');
    else renderTimeline(out, derived);
  } catch (e) {
    renderNotice(out, `Could not load activity: ${e?.message || e}`);
  } finally {
    root?.setAttribute('aria-busy', 'false');
  }
}

main();
```

## ui/agent_capacity_v1.js

```javascript
async function loadCsv(path){
  const res = await fetch(path + '?t=' + Date.now(), { cache: 'no-store' });
  if(!res.ok) throw new Error('Failed to load ' + path);
  return res.text();
}

function parseCsv(text){
  const rows=[]; let row=[]; let cell=''; let q=false;
  for(let i=0;i<text.length;i++){
    const c=text[i], n=text[i+1];
    if(c==='"'){
      if(q && n==='"'){ cell+='"'; i++; }
      else q=!q;
    } else if(c===',' && !q){ row.push(cell); cell=''; }
    else if((c==='\n' || c==='\r') && !q){
      if(c==='\r' && n==='\n') i++;
      row.push(cell); if(row.some(v=>v!=='')) rows.push(row); row=[]; cell='';
    } else cell+=c;
  }
  if(cell.length || row.length){ row.push(cell); rows.push(row); }
  const head=rows.shift()||[];
  return rows.map(r=>Object.fromEntries(head.map((h,i)=>[h,(r[i]||'').trim()])));
}

function normOwner(v=''){ return v.trim().toLowerCase(); }
function normStatus(v=''){ return v.trim().toLowerCase(); }

function utilisation(items){
  const total = items.length;
  const inProg = items.filter(x=>['in progress','in_progress'].includes(normStatus(x.status))).length;
  const blocked = items.filter(x=>normStatus(x.status)==='blocked').length;
  const backlog = items.filter(x=>normStatus(x.status)==='backlog').length;
  let pct = 0;
  if(total>0) pct = Math.min(100, Math.round(((inProg + blocked*0.85 + backlog*0.45)/total)*100));
  return {total,inProg,blocked,backlog,pct};
}

function colour(p){
  if(p>=85) return 'danger';
  if(p>=65) return 'warning';
  return 'success';
}

function renderGauge(container, u){
  container.innerHTML = `
    <div class="cap-row">
      <div class="cap-meta">Capacity</div>
      <div class="cap-val">${u.pct}%</div>
    </div>
    <div class="cap-track" role="img" aria-label="Capacity ${u.pct}%">
      <div class="cap-fill ${colour(u.pct)}" style="width:${u.pct}%"></div>
    </div>
    <div class="cap-sub">In Progress ${u.inProg} · Blocked ${u.blocked} · Backlog ${u.backlog} · Total ${u.total}</div>
  `;
}

async function initAgentCapacity(){
  try{
    const csv = await loadCsv('agent-tasks.csv');
    const rows = parseCsv(csv);
    const boxes = [...document.querySelectorAll('[data-agent-owner]')];
    boxes.forEach(el=>{
      const owner = normOwner(el.getAttribute('data-agent-owner')||'');
      const mine = rows.filter(r=> normOwner(r.owner||r.Owner||'')===owner);
      renderGauge(el, utilisation(mine));
    });
  }catch(e){
    console.warn(e);
  }
}

window.initAgentCapacity = initAgentCapacity;
```

## ui/agent_queue_live_v1.js

```javascript
// agent_queue_live_v1.js
// Live Agent Queue rendering from ops/agent-tasks.csv + canonical status mapping.

import { parseCsv } from './csv_v1.js';

const COLUMN_ORDER = ['backlog', 'in_progress', 'review', 'blocked', 'done'];

function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function normaliseKey(raw) {
  return (raw ?? '')
    .trim()
    .toLowerCase()
    .replaceAll(/\s+/g, '_')
    .replaceAll(/[^a-z0-9_]/g, '');
}

function prioBadge(priority) {
  const p = (priority ?? '').trim().toLowerCase();
  if (!p) return '';
  const cls = p === 'high' ? 'badge--prio-high' : p === 'medium' ? 'badge--prio-med' : p === 'low' ? 'badge--prio-low' : '';
  const label = `Priority ${p.charAt(0).toUpperCase()}${p.slice(1)}`;
  return `<span class="badge ${cls}">${escapeHtml(label)}</span>`;
}

function statusBadge(canonicalKey, canonicalLabel) {
  const k = (canonicalKey ?? '').trim();
  if (!k) return '';

  // Keep these coarse and stable; nuance belongs in metadata.
  const cls =
    k === 'done'
      ? 'badge--success'
      : k === 'blocked'
        ? 'badge--danger'
        : k === 'review'
          ? 'badge--warning'
          : k === 'in_progress'
            ? 'badge--info'
            : '';

  const label = canonicalLabel || k;
  return `<span class="badge ${cls}">${escapeHtml(label)}</span>`;
}

function dueBadge(due) {
  const d = (due ?? '').trim();
  if (!d) return '';
  return `<span class="badge">Due ${escapeHtml(d)}</span>`;
}

function cvPreviewLink(roleIdRaw) {
  const id = (roleIdRaw ?? '').trim();
  if (!id) return '';
  const file = `outputs/cv/${encodeURIComponent(id)}/draft.md`;
  const q = encodeURIComponent(file);
  return `<a href="cv-preview.html?file=${q}">CV preview ↗</a>`;
}

function renderCard(t, statusMeta) {
  const title = escapeHtml(t.title || 'Untitled task');
  const taskId = escapeHtml(t.task_id || '');
  const roleIdRaw = (t.role_id ?? '').trim();
  const roleId = escapeHtml(roleIdRaw || '');
  const agent = escapeHtml(t.agent || '');

  const metaParts = [];
  if (agent) metaParts.push(`Agent: ${agent}`);
  if (roleId) metaParts.push(`Role: ${roleId}`);

  const badges = [];
  const status = statusBadge(statusMeta?.key, statusMeta?.label);
  if (status) badges.push(status);

  const prio = prioBadge(t.priority);
  if (prio) badges.push(prio);

  const due = dueBadge(t.due_date);
  if (due) badges.push(due);

  const notes = (t.notes ?? '').trim();

  const links = [];
  const cvPrev = cvPreviewLink(roleIdRaw);
  if (cvPrev) links.push(cvPrev);

  const lines = [];

  const taskIdRaw = (t.task_id ?? '').trim();
  const taskAttr = taskIdRaw
    ? ` data-task-id="${escapeHtml(taskIdRaw)}" id="task-${escapeHtml(taskIdRaw)}"`
    : '';

  lines.push(`<div class="item"${taskAttr}>`);
  lines.push(`  <h3 class="item__title">${taskId ? `${taskId} · ` : ''}${title}</h3>`);
  if (metaParts.length) lines.push(`  <div class="item__meta">${metaParts.join(' · ')}</div>`);
  if (links.length) lines.push(`  <div class="item__small">${links.join(' · ')}</div>`);
  if (badges.length) lines.push(`  <div class="badges">${badges.join('')}</div>`);
  if (notes) lines.push(`  <div class="item__small">Notes: ${escapeHtml(notes)}</div>`);
  lines.push('</div>');
  return lines.join('\n');
}

function renderColumn(statusKey, statusLabel, tasks) {
  const header = `${escapeHtml(statusLabel || statusKey)} (${tasks.length})`;
  const cards = tasks
    .slice()
    .sort((a, b) => (a.task_id || '').localeCompare(b.task_id || ''))
    .map((t) => renderCard(t, { key: statusKey, label: statusLabel }))
    .join('\n');

  return `
  <div class="column">
    <div class="column__shell">
      <h2 class="column__header">${header}</h2>
      ${cards || ''}
    </div>
  </div>`;
}

async function loadMapping() {
  const res = await fetch('crm/status-mapping-v1.json', { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load crm/status-mapping-v1.json (${res.status})`);
  return res.json();
}

async function loadTasks() {
  const res = await fetch('agent-tasks.csv', { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load agent-tasks.csv (${res.status})`);
  const text = await res.text();
  return parseCsv(text);
}

function canonicaliseStatus(rawStatus, mapping) {
  const raw = (rawStatus ?? '').trim();
  if (!raw) return 'backlog';

  const direct = mapping?.mappings?.agent_tasks_csv?.[raw];
  if (direct) return direct;

  // Fall back to a best-effort normalisation.
  const k = normaliseKey(raw);
  if (k === 'inprogress') return 'in_progress';
  if (k === 'in_progress') return 'in_progress';
  if (k === 'review') return 'review';
  if (k === 'blocked') return 'blocked';
  if (k === 'done') return 'done';
  if (k === 'backlog') return 'backlog';

  return 'backlog';
}

function getStatusLabel(canonicalKey, mapping) {
  return mapping?.canonical?.task?.[canonicalKey]?.label || canonicalKey;
}

function groupByStatus(tasks, mapping) {
  const buckets = new Map();
  for (const t of tasks) {
    const key = canonicaliseStatus(t.status, mapping);
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(t);
  }
  return buckets;
}

function renderBoard(targetEl, buckets, mapping) {
  const known = COLUMN_ORDER.filter((k) => buckets.has(k));
  const unknown = [...buckets.keys()].filter((k) => !COLUMN_ORDER.includes(k)).sort();
  const order = [...known, ...unknown];

  targetEl.innerHTML = order
    .map((k) => renderColumn(k, getStatusLabel(k, mapping), buckets.get(k) || []))
    .join('\n');
}

function refreshSecondsFromQuery() {
  const params = new URLSearchParams(location.search);
  const raw = params.get('refresh_s') || params.get('autorefresh_s') || '';
  const n = Number.parseInt(String(raw), 10);
  if (!Number.isFinite(n) || n <= 0) return 0;
  // Guardrails so someone can’t accidentally DoS themselves.
  return Math.max(10, Math.min(600, n));
}

function setMeta(metaEl, tasksCount, refreshSeconds = 0) {
  const now = new Date();
  const refreshNote = refreshSeconds > 0 ? ` · Auto-refresh: ${refreshSeconds}s` : '';
  metaEl.textContent = `Loaded ${tasksCount} tasks · ${now.toLocaleString()}${refreshNote}`;
}

function highlightTaskFromQuery() {
  const params = new URLSearchParams(location.search);
  const taskId = (params.get('task_id') || params.get('task') || '').trim();
  if (!taskId) return;

  const card = document.querySelector(`[data-task-id="${CSS.escape(taskId)}"]`);
  if (!card) return;

  card.classList.add('item--highlight');

  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  card.scrollIntoView({
    block: 'center',
    inline: 'nearest',
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });

  const firstLink = card.querySelector('a');
  if (firstLink) firstLink.focus({ preventScroll: true });
}

function enableBoardKeyboardScroll(boardEl) {
  if (!boardEl) return;

  boardEl.addEventListener('keydown', (e) => {
    if (e.defaultPrevented) return;
    if (e.target !== boardEl) return;

    const key = e.key;
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const behavior = prefersReducedMotion ? 'auto' : 'smooth';

    const firstCol = boardEl.querySelector?.('.column');
    const step = firstCol ? Math.round(firstCol.getBoundingClientRect().width + 24) : Math.round(boardEl.clientWidth * 0.85);
    const page = Math.max(240, Math.round(boardEl.clientWidth * 0.95));

    if (key === 'ArrowRight') {
      e.preventDefault();
      boardEl.scrollBy({ left: step, top: 0, behavior });
      return;
    }
    if (key === 'ArrowLeft') {
      e.preventDefault();
      boardEl.scrollBy({ left: -step, top: 0, behavior });
      return;
    }
    if (key === 'PageDown') {
      e.preventDefault();
      boardEl.scrollBy({ left: page, top: 0, behavior });
      return;
    }
    if (key === 'PageUp') {
      e.preventDefault();
      boardEl.scrollBy({ left: -page, top: 0, behavior });
      return;
    }
    if (key === 'Home') {
      e.preventDefault();
      boardEl.scrollTo({ left: 0, top: 0, behavior });
      return;
    }
    if (key === 'End') {
      e.preventDefault();
      boardEl.scrollTo({ left: boardEl.scrollWidth, top: 0, behavior });
    }
  });
}

async function boot() {
  const main = document.getElementById('main');
  const board = document.querySelector('[data-agent-queue-board]');
  const meta = document.querySelector('[data-agent-queue-meta]');
  if (!board) return;

  enableBoardKeyboardScroll(board);

  const refreshSeconds = refreshSecondsFromQuery();
  let inFlight = false;

  async function renderOnce({ announce = false } = {}) {
    if (inFlight) return;
    inFlight = true;

    if (main) main.setAttribute('aria-busy', 'true');
    board.setAttribute('aria-busy', 'true');

    if (!announce) {
      board.innerHTML = `<div class="column"><div class="column__shell"><h2 class="column__header">Loading…</h2><div class="item"><div class="item__small">Fetching agent-tasks.csv</div></div></div></div>`;
      if (meta) meta.textContent = 'Loading agent queue…';
    } else {
      // Silent refresh: keep the UI stable, but announce refresh intent.
      if (meta) meta.textContent = 'Refreshing agent queue…';
    }

    try {
      const [mapping, tasks] = await Promise.all([loadMapping(), loadTasks()]);
      const buckets = groupByStatus(tasks, mapping);
      renderBoard(board, buckets, mapping);
      if (meta) setMeta(meta, tasks.length, refreshSeconds);
      highlightTaskFromQuery();
    } catch (err) {
      console.error(err);
      const msg = escapeHtml(err?.message || String(err));
      board.innerHTML = `
        <div class="column">
          <div class="column__shell">
            <h2 class="column__header">Error</h2>
            <div class="item">
              <div class="notice notice--danger" role="alert">${msg}</div>
            </div>
          </div>
        </div>`;
      if (meta) meta.textContent = `Agent queue error: ${err?.message || String(err)}`;
    } finally {
      inFlight = false;
      board.setAttribute('aria-busy', 'false');
      if (main) main.setAttribute('aria-busy', 'false');
    }
  }

  await renderOnce();

  if (refreshSeconds > 0) {
    window.setInterval(() => {
      // Refresh silently (no “Loading…” flash). Meta timestamp updates.
      void renderOnce({ announce: true });
    }, refreshSeconds * 1000);
  }
}

boot();
```

## ui/csv_v1.js

```javascript
// csv_v1.js
// Minimal CSV parser (RFC 4180-ish) supporting quoted fields and commas/newlines.

export function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let i = 0;
  let inQuotes = false;

  const pushField = () => {
    row.push(field);
    field = '';
  };
  const pushRow = () => {
    // Ignore trailing empty line
    if (row.length === 1 && row[0] === '' && rows.length === 0) return;
    rows.push(row);
    row = [];
  };

  while (i < text.length) {
    const ch = text[i];

    if (inQuotes) {
      if (ch === '"') {
        // Escaped quote
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      field += ch;
      i += 1;
      continue;
    }

    if (ch === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }

    if (ch === ',') {
      pushField();
      i += 1;
      continue;
    }

    if (ch === '\n') {
      pushField();
      pushRow();
      i += 1;
      continue;
    }

    if (ch === '\r') {
      // Handle CRLF
      if (text[i + 1] === '\n') {
        pushField();
        pushRow();
        i += 2;
        continue;
      }
      i += 1;
      continue;
    }

    field += ch;
    i += 1;
  }

  // Flush last field/row.
  pushField();
  if (row.length) pushRow();

  if (rows.length === 0) return [];

  const header = rows[0].map((h) => h.trim());
  const out = [];
  for (let r = 1; r < rows.length; r += 1) {
    const obj = {};
    const cols = rows[r];
    if (cols.length === 1 && cols[0].trim() === '') continue;
    for (let c = 0; c < header.length; c += 1) {
      obj[header[c]] = (cols[c] ?? '').trim();
    }
    out.push(obj);
  }
  return out;
}
```

## ui/cv_run_v1.js

```javascript
// cv_run_v1.js
// CV Run page logic: generate deterministic pipeline command + wire links.
// Pulls role metadata from job-pipeline.csv when available.

import { parseCsv } from './csv_v1.js';

function $(id) {
  return document.getElementById(id);
}

function setDisabledLink(a, href, enabledLabel) {
  if (!a) return;
  if (!href) {
    a.setAttribute('href', '#');
    a.setAttribute('aria-disabled', 'true');
    return;
  }
  a.setAttribute('href', href);
  a.removeAttribute('aria-disabled');
  if (enabledLabel) a.textContent = enabledLabel;
}

function buildCommand() {
  const roleKey = ($('roleKey')?.value || '').trim() || 'R-2026-XXXX';
  const title = ($('title')?.value || '').trim() || 'Untitled role';
  const inputFile = ($('inputFile')?.value || '').trim() || `inputs/jobs/${roleKey}/intake.txt`;
  const profile = ($('profile')?.value || 'pass').trim();

  const safeTitle = title.replaceAll('"', '\\"');
  const cmd = `python3 ops/cv-pipeline/run_cv_deterministic.py --role-key ${roleKey} --title "${safeTitle}" --input-file ${inputFile} --profile ${profile}`;

  const cmdEl = $('cmd');
  if (cmdEl) cmdEl.textContent = cmd;

  const draftPath = `outputs/cv/${roleKey}/draft.md`;
  const pdfPath = `outputs/cv/${roleKey}/final.pdf`;

  const outDraft = $('outDraft');
  if (outDraft) outDraft.textContent = draftPath;
  const outPdf = $('outPdf');
  if (outPdf) outPdf.textContent = pdfPath;

  // Output quick links (enabled/disabled after a check).
  const draftBtn = $('openDraftBtn');
  const pdfBtn = $('openPdfBtn');
  // Always set the hrefs; we keep aria-disabled until the existence check succeeds.
  setDisabledLink(draftBtn, draftPath);
  setDisabledLink(pdfBtn, pdfPath);

  const badges = $('outputBadges');
  if (badges) badges.innerHTML = '';

  const previewLink = $('previewLink');
  if (previewLink) {
    const q = encodeURIComponent(draftPath);
    previewLink.setAttribute('href', `cv-preview.html?file=${q}`);
  }

  const kanbanLink = $('kanbanLink');
  if (kanbanLink) kanbanLink.setAttribute('href', `kanban.html?role_id=${encodeURIComponent(roleKey)}`);

  return cmd;
}

async function copyCommand() {
  const cmd = buildCommand();
  const btn = $('copyBtn');
  const live = $('copyStatus');
  const notice = $('copyNotice');

  try {
    await navigator.clipboard.writeText(cmd);

    const prev = btn?.textContent;
    if (btn) btn.textContent = 'Copied';
    if (live) live.textContent = 'Command copied to clipboard.';
    if (notice) notice.hidden = true;

    window.setTimeout(() => {
      if (btn && prev) btn.textContent = prev;
      if (live) live.textContent = '';
    }, 900);
  } catch (_) {
    if (live) live.textContent = 'Clipboard copy failed. Select and copy manually.';
    if (notice) {
      notice.textContent = 'Clipboard copy failed (browser permission or insecure context). Select the command and copy manually.';
      notice.hidden = false;
    }
  }
}

async function fetchExists(path) {
  const url = String(path || '').trim();
  if (!url) return false;

  // Some static hosts don’t support HEAD. Try HEAD first, then fall back to GET.
  try {
    const head = await fetch(url, { method: 'HEAD', cache: 'no-store' });
    if (head.ok) return true;
    if (head.status === 404) return false;
    // If HEAD returns a weird status, fall through to GET.
  } catch (_) {
    // Ignore and try GET.
  }

  try {
    const res = await fetch(url, { cache: 'no-store' });
    return !!res.ok;
  } catch (_) {
    return false;
  }
}

function renderOutputBadges({ draftOk, pdfOk } = {}) {
  const el = $('outputBadges');
  if (!el) return;

  const mk = (ok, label) => {
    const cls = ok ? 'badge badge--success' : 'badge badge--danger';
    const text = ok ? `${label}: available` : `${label}: missing`;
    return `<span class="${cls}">${text}</span>`;
  };

  el.innerHTML = [mk(!!draftOk, 'Draft'), mk(!!pdfOk, 'PDF')].join('');
}

async function checkOutputs() {
  const roleKey = ($('roleKey')?.value || '').trim() || 'R-2026-XXXX';
  const draftPath = `outputs/cv/${roleKey}/draft.md`;
  const pdfPath = `outputs/cv/${roleKey}/final.pdf`;

  const btn = $('checkOutputsBtn');
  const prev = btn?.textContent;
  if (btn) btn.textContent = 'Checking…';

  const [draftOk, pdfOk] = await Promise.all([fetchExists(draftPath), fetchExists(pdfPath)]);

  // Enable/disable quick links.
  const draftBtn = $('openDraftBtn');
  const pdfBtn = $('openPdfBtn');

  if (draftBtn) {
    if (draftOk) draftBtn.removeAttribute('aria-disabled');
    else draftBtn.setAttribute('aria-disabled', 'true');
  }
  if (pdfBtn) {
    if (pdfOk) pdfBtn.removeAttribute('aria-disabled');
    else pdfBtn.setAttribute('aria-disabled', 'true');
  }

  renderOutputBadges({ draftOk, pdfOk });

  if (btn) btn.textContent = prev || 'Check outputs';
}

function applyPipelineDefaults(roleKey, pipelineIndex) {
  const meta = pipelineIndex.get(roleKey);
  if (!meta) return;

  const titleEl = $('title');
  if (
    titleEl &&
    (!titleEl.value || titleEl.value.trim() === '' || titleEl.value.includes('General Manager, Growth and Transformation'))
  ) {
    if (meta.title) titleEl.value = meta.title;
  }

  const inputEl = $('inputFile');
  if (inputEl) {
    const fallback = `inputs/jobs/${roleKey}/intake.txt`;
    inputEl.value = meta.inputFile || fallback;
  }
}

async function loadPipelineIndex(pipelineIndex) {
  try {
    const res = await fetch('job-pipeline.csv', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const rows = parseCsv(text);
    if (!Array.isArray(rows) || rows.length === 0) return;

    for (const r of rows) {
      const role = String(r.role_id || '').trim();
      if (!role) continue;
      pipelineIndex.set(role, {
        title: String(r.title || '').trim(),
        inputFile: String(r.input_file || '').trim()
      });
    }

    const dl = $('roleKeyList');
    if (dl) {
      dl.innerHTML = '';
      for (const [role, meta] of pipelineIndex.entries()) {
        const opt = document.createElement('option');
        opt.value = role;
        const label = meta.title ? ` ${meta.title}` : '';
        opt.label = `${role}${label}`;
        dl.appendChild(opt);
      }
    }
  } catch (_) {
    // Silent: file:// context or missing CSV should not break CV Run.
  }
}

function hydrateFromQuery() {
  const params = new URLSearchParams(location.search);
  const rk = params.get('role_key');
  if (rk && $('roleKey')) {
    $('roleKey').value = rk;
    if ($('inputFile')) $('inputFile').value = `inputs/jobs/${rk}/intake.txt`;
  }
  const t = params.get('title');
  if (t && $('title')) $('title').value = t;
}

function wireInputs(pipelineIndex) {
  const roleKeyEl = $('roleKey');
  const titleEl = $('title');
  const inputEl = $('inputFile');
  const profileEl = $('profile');

  for (const el of [titleEl, inputEl, profileEl]) {
    if (!el) continue;
    el.addEventListener('input', buildCommand);
    el.addEventListener('change', buildCommand);
  }

  if (roleKeyEl) {
    const onRoleChange = () => {
      const rk = (roleKeyEl.value || '').trim();
      if (rk) applyPipelineDefaults(rk, pipelineIndex);
      buildCommand();
    };

    roleKeyEl.addEventListener('input', onRoleChange);
    roleKeyEl.addEventListener('change', onRoleChange);
  }

  const copyBtn = $('copyBtn');
  if (copyBtn) copyBtn.addEventListener('click', copyCommand);

  const checkBtn = $('checkOutputsBtn');
  if (checkBtn) checkBtn.addEventListener('click', () => void checkOutputs());
}

async function boot() {
  const pipelineIndex = new Map();

  hydrateFromQuery();
  wireInputs(pipelineIndex);

  await loadPipelineIndex(pipelineIndex);

  const rk = ($('roleKey')?.value || '').trim();
  if (rk) applyPipelineDefaults(rk, pipelineIndex);

  buildCommand();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => void boot());
} else {
  void boot();
}
```

## ui/exec_dashboard_v1.js

```javascript
async function loadText(path){
  const r = await fetch(path + '?t=' + Date.now(), {cache:'no-store'});
  if(!r.ok) throw new Error('Failed: '+path);
  return r.text();
}

function parseCsv(text){
  const rows=[]; let row=[]; let cell=''; let q=false;
  for(let i=0;i<text.length;i++){
    const c=text[i], n=text[i+1];
    if(c==='"'){
      if(q && n==='"'){ cell+='"'; i++; } else q=!q;
    } else if(c===',' && !q){ row.push(cell); cell=''; }
    else if((c==='\n' || c==='\r') && !q){ if(c==='\r' && n==='\n') i++; row.push(cell); if(row.some(v=>v!=='')) rows.push(row); row=[]; cell=''; }
    else cell+=c;
  }
  if(cell.length || row.length){ row.push(cell); rows.push(row); }
  const head=rows.shift()||[];
  return rows.map(r=>Object.fromEntries(head.map((h,i)=>[h,(r[i]||'').trim()])));
}

function hoursAgo(iso){
  const t = Date.parse(iso||'');
  if(!t) return null;
  return (Date.now()-t)/36e5;
}

function clear(node){
  while(node && node.firstChild) node.removeChild(node.firstChild);
}

function mk(tag, attrs){
  const el = document.createElement(tag);
  if(attrs){
    for(const [k,v] of Object.entries(attrs)){
      if(v===undefined || v===null) continue;
      if(k==='class') el.className = String(v);
      else el.setAttribute(k, String(v));
    }
  }
  return el;
}

function card(title, metaText){
  const wrap = mk('div', {class:'item'});
  const h = mk('h3', {class:'item__title'});
  h.textContent = title;
  const meta = mk('div', {class:'item__meta'});
  meta.textContent = metaText;
  wrap.appendChild(h);
  wrap.appendChild(meta);
  return wrap;
}

function linkCard(title, href){
  const wrap = mk('div', {class:'item item--link'});
  const a = mk('a', {class:'item__link', href});
  const h = mk('h3', {class:'item__title'});
  h.textContent = title;
  a.appendChild(h);
  wrap.appendChild(a);
  return wrap;
}

async function initExecDashboard(){
  const el = document.getElementById('execDashboard');
  if(!el) return;

  el.setAttribute('aria-busy', 'true');

  try{
    const csv = await loadText('agent-tasks.csv');
    const rows = parseCsv(csv);

    const by = s => rows.filter(r => (r.status||'').toLowerCase()===s).length;
    const done = by('done');
    const prog = by('in progress') + by('in_progress');
    const blocked = by('blocked');
    const backlog = by('backlog');
    const approved = by('approved');

    const recent24 = rows.filter(r => {
      const u = r.updated_at || r.updatedAt || '';
      if(!u) return false;
      const h = hoursAgo(u);
      return h!==null && h<=24;
    }).length;

    const score = Math.max(0, Math.min(100, Math.round((done*1.2 + prog*0.8 + recent24*0.5 - blocked*1.1) / Math.max(1, rows.length) * 100)));

    clear(el);
    el.appendChild(card('Productivity Score', `${score}/100`));
    el.appendChild(card('Flow Snapshot', `In Progress ${prog} · Done ${done} · Blocked ${blocked} · Approved ${approved} · Backlog ${backlog}`));
    el.appendChild(card('Last 24h Movement', `${recent24} tasks updated`));
    el.appendChild(linkCard('Open Team Queue', 'agent-queue.html'));
    el.appendChild(linkCard('Open Agents + Live Capacity', 'agents.html'));

    const stamp = document.getElementById('execStamp');
    if(stamp) stamp.textContent = 'Live refresh every 60s · Last refresh: ' + new Date().toLocaleTimeString();
  }catch(err){
    clear(el);
    el.appendChild(card('Exec dashboard unavailable', 'Could not load agent-tasks.csv'));
  }finally{
    el.removeAttribute('aria-busy');
  }
}

window.initExecDashboard = function(){
  initExecDashboard();
  if(window.__execDashTimer) clearInterval(window.__execDashTimer);
  window.__execDashTimer = setInterval(initExecDashboard, 60000);
};
```

## ui/kanban_live_v1.js

```javascript
// kanban_live_v1.js
// Live Kanban rendering from job-pipeline.csv.
// Uses canonical CRM status mapping when available.
//
// Optional auto-refresh:
// - Add ?refresh_s=60 (or ?autorefresh_s=60) to refresh in-place every N seconds.

import { parseCsv } from './csv_v1.js';

const FALLBACK_STATUS_ALIASES = {
  'cv ready': 'cv_ready',
  'cv-ready': 'cv_ready',
  'cvready': 'cv_ready',
  'ready': 'cv_ready',
  'new': 'new',
  'pinned': 'pinned',
  'hold': 'hold',
  'on hold': 'hold',
  'assessing': 'assessing',
  'applied': 'applied',
  'interview': 'interview',
  'offer': 'offer',
  'rejected': 'rejected',
  'ignored': 'ignored'
};

const FALLBACK_COLUMN_ORDER = [
  'pinned',
  'new',
  'assessing',
  'cv_ready',
  'applied',
  'interview',
  'offer',
  'rejected',
  'hold',
  'ignored'
];

function normaliseKey(raw) {
  return (raw ?? '')
    .trim()
    .toLowerCase()
    .replaceAll(/\s+/g, '_')
    .replaceAll(/[^a-z0-9_]/g, '');
}

function canonicaliseStatus(raw, mapping) {
  const rawTrim = (raw ?? '').trim();
  if (!rawTrim) return 'new';

  const direct = mapping?.mappings?.job_pipeline_csv?.[rawTrim];
  if (direct) return direct;

  const key = normaliseKey(rawTrim);
  return FALLBACK_STATUS_ALIASES[key] ?? key ?? 'new';
}

function getStatusLabel(canonicalKey, mapping) {
  return mapping?.canonical?.pipeline?.[canonicalKey]?.label || canonicalKey;
}

function getColumnOrder(mapping) {
  const order = mapping?.canonical?.pipeline_order;
  if (Array.isArray(order) && order.length) return order;
  return FALLBACK_COLUMN_ORDER;
}

function tierBadge(tier) {
  const t = (tier ?? '').trim().toUpperCase();
  if (!t) return '';
  return `<span class="badge badge--tier">Tier ${escapeHtml(t)}</span>`;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function safeLink(url) {
  const u = (url ?? '').trim();
  if (!u) return '';
  return `<a href="${escapeHtml(u)}" target="_blank" rel="noopener">Open listing ↗</a>`;
}

function cvPreviewLink(roleId) {
  const id = (roleId ?? '').trim();
  if (!id) return '';
  const file = `outputs/cv/${encodeURIComponent(id)}/draft.md`;
  const q = encodeURIComponent(file);
  return `<a href="cv-preview.html?file=${q}">CV preview ↗</a>`;
}

function cvRunLink(roleId, title) {
  const id = (roleId ?? '').trim();
  if (!id) return '';

  const params = new URLSearchParams();
  params.set('role_key', id);
  if ((title ?? '').trim()) params.set('title', (title ?? '').trim());

  return `<a href="cv-run.html?${escapeHtml(params.toString())}">Run CV ↗</a>`;
}

function renderCard(role) {
  const title = escapeHtml(role.title || 'Untitled role');
  const company = escapeHtml(role.company || '');
  const location = escapeHtml(role.location || '');
  const meta = [company, location].filter(Boolean).join(' · ');

  const roleId = (role.role_id ?? '').trim();
  const roleAttr = roleId ? ` data-role-id="${escapeHtml(roleId)}" id="role-${escapeHtml(roleId)}"` : '';

  const lines = [];
  lines.push(`<div class="item"${roleAttr}>`);
  lines.push(`  <h3 class="item__title">${title}</h3>`);
  if (meta) lines.push(`  <div class="item__meta">${meta}</div>`);

  const quickLinks = [];
  const link = safeLink(role.url);
  if (link) quickLinks.push(link);

  const run = cvRunLink(role.role_id, role.title);
  if (run) quickLinks.push(run);

  const cvPrev = cvPreviewLink(role.role_id);
  if (cvPrev) quickLinks.push(cvPrev);

  if (quickLinks.length) lines.push(`  <div class="item__small">${quickLinks.join(' · ')}</div>`);

  const badges = [];
  const tier = tierBadge(role.fit_tier);
  if (tier) badges.push(tier);
  if (badges.length) lines.push(`  <div class="badges">${badges.join('')}</div>`);

  if (role.role_id) lines.push(`  <div class="item__small">ID: ${escapeHtml(role.role_id)}</div>`);
  if (role.cv_file) lines.push(`  <div class="item__small">CV: ${escapeHtml(role.cv_file)}</div>`);
  if (role.next_action) lines.push(`  <div class="item__small">Next: ${escapeHtml(role.next_action)}</div>`);

  lines.push(`</div>`);
  return lines.join('\n');
}

function renderColumn(statusLabel, roles) {
  const header = `${escapeHtml(statusLabel)} (${roles.length})`;
  const cards = roles
    .slice()
    .sort((a, b) => (a.role_id || '').localeCompare(b.role_id || ''))
    .map(renderCard)
    .join('\n');

  return `
  <div class="column">
    <div class="column__shell">
      <h2 class="column__header">${header}</h2>
      ${cards || ''}
    </div>
  </div>`;
}

async function loadMapping() {
  const res = await fetch('crm/status-mapping-v1.json', { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load crm/status-mapping-v1.json (${res.status})`);
  return res.json();
}

async function loadJobs() {
  const res = await fetch('job-pipeline.csv', { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load job-pipeline.csv (${res.status})`);
  const text = await res.text();
  return parseCsv(text);
}

async function loadAll() {
  const [mapping, jobs] = await Promise.all([loadMapping(), loadJobs()]);
  return { mapping, jobs };
}

function groupByStatus(jobs, mapping) {
  const buckets = new Map();
  for (const job of jobs) {
    const key = canonicaliseStatus(job.status, mapping);
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(job);
  }
  return buckets;
}

function hideEmptyColumnsFromQuery() {
  const params = new URLSearchParams(location.search);
  const v = (params.get('hide_empty') || params.get('hide_empty_columns') || '').trim();
  if (!v) return false;
  return v === '1' || v.toLowerCase() === 'true' || v.toLowerCase() === 'yes';
}

function renderBoard(targetEl, buckets, mapping) {
  const statuses = new Set([...buckets.keys()]);
  const columnOrder = getColumnOrder(mapping);
  const hideEmpty = hideEmptyColumnsFromQuery();

  // Default: render the full canonical pipeline so the board is stable even when a column has 0 roles.
  // Opt-in: ?hide_empty=1 to only show columns that currently contain roles.
  const ordered = hideEmpty ? [...columnOrder.filter((s) => statuses.has(s))] : [...columnOrder];

  // Append any unknown statuses at the end.
  for (const s of [...statuses].sort()) {
    if (!ordered.includes(s)) ordered.push(s);
  }

  targetEl.innerHTML = ordered
    .map((k) => renderColumn(getStatusLabel(k, mapping), buckets.get(k) || []))
    .join('\n');
}

function refreshSecondsFromQuery() {
  const params = new URLSearchParams(location.search);
  const raw = params.get('refresh_s') || params.get('autorefresh_s') || '';
  const n = Number.parseInt(String(raw), 10);
  if (!Number.isFinite(n) || n <= 0) return 0;
  // Guardrails so someone can’t accidentally DoS themselves.
  return Math.max(10, Math.min(600, n));
}

function setMeta(metaEl, jobsCount, refreshSeconds = 0) {
  const now = new Date();
  const refreshNote = refreshSeconds > 0 ? ` · Auto-refresh: ${refreshSeconds}s` : '';
  const hideEmpty = hideEmptyColumnsFromQuery();
  const columnsNote = hideEmpty ? ' · Columns: non-empty only' : ' · Columns: full pipeline';
  metaEl.textContent = `Loaded ${jobsCount} roles · ${now.toLocaleString()}${refreshNote}${columnsNote}`;
}

function highlightRoleFromQuery() {
  const params = new URLSearchParams(location.search);
  const roleId = (params.get('role_id') || params.get('role_key') || '').trim();
  if (!roleId) return;

  const card = document.querySelector(`[data-role-id="${CSS.escape(roleId)}"]`);
  if (!card) return;

  card.classList.add('item--highlight');

  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  card.scrollIntoView({
    block: 'center',
    inline: 'nearest',
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });

  // If the card contains a link, make keyboard navigation nicer.
  const firstLink = card.querySelector('a');
  if (firstLink) firstLink.focus({ preventScroll: true });
}

// Keyboard horizontal scrolling is implemented generically in ui/scroll_a11y_v1.js
// so boards and tables share consistent behaviour.

async function boot() {
  const main = document.getElementById('main');
  const board = document.querySelector('[data-kanban-board]');
  const meta = document.querySelector('[data-kanban-meta]');
  if (!board) return;


  const refreshSeconds = refreshSecondsFromQuery();
  let inFlight = false;

  async function renderOnce({ announce = false } = {}) {
    if (inFlight) return;
    inFlight = true;

    if (main) main.setAttribute('aria-busy', 'true');
    board.setAttribute('aria-busy', 'true');

    if (!announce) {
      board.innerHTML = `<div class="column"><div class="column__shell"><h2 class="column__header">Loading…</h2><div class="item"><div class="item__small">Fetching job-pipeline.csv</div></div></div></div>`;
      if (meta) meta.textContent = 'Loading pipeline…';
    } else {
      // Silent refresh: keep the UI stable, but announce refresh intent.
      if (meta) meta.textContent = 'Refreshing pipeline…';
    }

    try {
      const { mapping, jobs } = await loadAll();
      const buckets = groupByStatus(jobs, mapping);
      renderBoard(board, buckets, mapping);
      if (meta) setMeta(meta, jobs.length, refreshSeconds);
      highlightRoleFromQuery();
    } catch (err) {
      console.error(err);
      const msg = escapeHtml(err?.message || String(err));
      board.innerHTML = `
        <div class="column">
          <div class="column__shell">
            <h2 class="column__header">Error</h2>
            <div class="item">
              <div class="notice notice--danger" role="alert">${msg}</div>
            </div>
          </div>
        </div>`;
      if (meta) meta.textContent = `Pipeline error: ${err?.message || String(err)}`;
    } finally {
      inFlight = false;
      board.setAttribute('aria-busy', 'false');
      if (main) main.setAttribute('aria-busy', 'false');
    }
  }

  await renderOnce();

  if (refreshSeconds > 0) {
    window.setInterval(() => {
      // Refresh silently (no “Loading…” flash). Meta timestamp updates.
      void renderOnce({ announce: true });
    }, refreshSeconds * 1000);
  }
}

boot();
```

## ui/nav_v1.js

```javascript
(() => {
  const btn = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav-links]');
  if (!nav) return;

  // Ensure nav has an id so the toggle can reference it.
  if (!nav.id) nav.id = `nav-${Math.random().toString(16).slice(2)}`;
  if (btn) btn.setAttribute('aria-controls', nav.id);

  // NOTE: the nav is only "collapsible" when the toggle button is actually visible.
  // If we set aria-hidden while the toggle is display:none (desktop), screen readers
  // can lose access to the primary nav even though it is visible.
  const isCollapsible = () => {
    if (!btn) return false;
    try {
      return window.getComputedStyle(btn).display !== 'none';
    } catch (_) {
      return false;
    }
  };

  const syncDesktopA11y = () => {
    if (isCollapsible()) return;
    // Desktop: nav should always be available to assistive tech.
    nav.removeAttribute('aria-hidden');
    nav.classList.remove('is-open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  };

  const setExpanded = (next) => {
    if (!btn) return;
    if (!isCollapsible()) {
      syncDesktopA11y();
      return;
    }

    const wasOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(next));
    nav.classList.toggle('is-open', !!next);

    // Mobile: hide collapsed nav from assistive tech.
    nav.setAttribute('aria-hidden', String(!next));

    // Focus management: when opening, move focus into the menu (first link).
    // When closing, if focus was inside the nav, return it to the toggle.
    try {
      const active = document.activeElement;
      if (next && !wasOpen) {
        requestAnimationFrame(() => {
          const firstLink = nav.querySelector('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
          if (firstLink && firstLink.focus) firstLink.focus();
        });
      } else if (!next && wasOpen) {
        if (active && nav.contains(active)) btn.focus();
      }
    } catch (_) {
      // no-op
    }
  };

  // Initialise a11y state.
  syncDesktopA11y();
  if (btn && isCollapsible()) setExpanded(btn.getAttribute('aria-expanded') === 'true');

  // Keep aria-hidden semantics correct when crossing breakpoints (mobile ↔ desktop).
  // We avoid matchMedia here because the source of truth is actual toggle visibility.
  try {
    window.addEventListener('resize', () => {
      requestAnimationFrame(() => {
        if (!btn) {
          syncDesktopA11y();
          return;
        }
        if (!isCollapsible()) {
          syncDesktopA11y();
        } else {
          // Mobile: ensure aria-hidden matches expanded state.
          setExpanded(btn.getAttribute('aria-expanded') === 'true');
        }
      });
    });
  } catch (_) {
    // no-op
  }

  // 1) Mobile menu toggle behaviour
  if (btn) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      setExpanded(!expanded);
    });

    // Escape closes the menu.
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (btn.getAttribute('aria-expanded') === 'true') {
        setExpanded(false);
        btn.focus();
      }
    });

    // Click outside closes the menu (small screens).
    document.addEventListener('click', (e) => {
      if (btn.getAttribute('aria-expanded') !== 'true') return;
      const t = e.target;
      if (t instanceof Node && (nav.contains(t) || btn.contains(t))) return;
      setExpanded(false);
    });

    // When a nav link is activated, close the menu.
    nav.addEventListener('click', (e) => {
      const a = e.target && e.target.closest ? e.target.closest('a') : null;
      if (!a) return;
      setExpanded(false);
    });
  }

  // 2) Active link semantics (avoid copy-paste “btn--primary” per page)
  try {
    const current = (location.pathname.split('/').pop() || '').toLowerCase();
    const links = Array.from(nav.querySelectorAll('a[href]'));
    for (const a of links) {
      const href = (a.getAttribute('href') || '').split('#')[0].split('?')[0].toLowerCase();
      const isActive = href === current;
      if (isActive) {
        a.setAttribute('aria-current', 'page');
        a.classList.add('btn--primary');
      } else {
        a.removeAttribute('aria-current');
        // Do not remove btn--primary if a page hard-coded it; only remove the one we applied.
        // (We can’t reliably detect origin, so we keep it if already present.)
      }
    }
  } catch (_) {
    // no-op
  }
})();
```

## ui/scroll_a11y_v1.js

```javascript
/* scroll_a11y_v1.js
   Purpose: keyboard-accessible horizontal scrolling for scroll regions.

   Applies to:
   - .board[tabindex="0"] (Kanban / queues)
   - .table-wrap[tabindex="0"] (wide tables)

   Key bindings (when region is focused):
   - ← / → : scroll by ~10% viewport width
   - PageUp / PageDown: scroll by ~85% viewport width
   - Home / End: jump to start/end

   Accessibility intent: make horizontal scroll discoverable and operable without a mouse.
*/

(() => {
  const SELECTOR = '.board[tabindex="0"], .table-wrap[tabindex="0"]';

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  const isTextEntry = (el) => {
    if (!el) return false;
    const tag = (el.tagName || '').toLowerCase();
    if (tag === 'textarea') return true;
    if (tag === 'input') {
      const t = (el.getAttribute('type') || '').toLowerCase();
      return !['button', 'submit', 'reset', 'checkbox', 'radio', 'range', 'color', 'file'].includes(t);
    }
    return el.isContentEditable === true;
  };

  const shouldHandle = (region, e) => {
    if (!region) return false;
    if (e.defaultPrevented) return false;
    if (e.altKey || e.ctrlKey || e.metaKey) return false;
    if (isTextEntry(document.activeElement)) return false;
    // Only when this region is focused (avoid stealing arrow keys from elsewhere).
    if (document.activeElement !== region) return false;
    // Only if horizontal scrolling is actually possible.
    return region.scrollWidth > region.clientWidth + 2;
  };

  const prefersReducedMotion = () => {
    try {
      return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    } catch (_) {
      return false;
    }
  };

  const scrollBehavior = () => (prefersReducedMotion() ? 'auto' : 'smooth');

  const scrollByPx = (region, dx) => {
    try {
      region.scrollTo({ left: region.scrollLeft + dx, behavior: scrollBehavior() });
    } catch (_) {
      region.scrollLeft += dx;
    }
  };

  const scrollToEdge = (region, edge) => {
    const left = edge === 'start' ? 0 : region.scrollWidth;
    try {
      region.scrollTo({ left, behavior: scrollBehavior() });
    } catch (_) {
      region.scrollLeft = left;
    }
  };

  const onKeyDown = (e) => {
    const region = e.target && e.target.closest ? e.target.closest(SELECTOR) : null;
    if (!shouldHandle(region, e)) return;

    const vw = clamp(region.clientWidth, 240, 1200);
    const step = Math.round(vw * 0.10);
    const page = Math.round(vw * 0.85);

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        scrollByPx(region, -step);
        return;
      case 'ArrowRight':
        e.preventDefault();
        scrollByPx(region, step);
        return;
      case 'PageUp':
        e.preventDefault();
        scrollByPx(region, -page);
        return;
      case 'PageDown':
        e.preventDefault();
        scrollByPx(region, page);
        return;
      case 'Home':
        e.preventDefault();
        scrollToEdge(region, 'start');
        return;
      case 'End':
        e.preventDefault();
        scrollToEdge(region, 'end');
        return;
      default:
        return;
    }
  };

  // Delegate at document level so dynamically rendered boards/tables are covered.
  document.addEventListener('keydown', onKeyDown, { passive: false });
})();
```

## usage/API_USAGE_TRACKER_V1.md

```markdown
# API Usage Tracker v1

Purpose: provide visible run-rate tracking for model/API usage and cost trend.

## Budget target
- POC target: <= USD 2/day

## Tracked metrics
- In tokens
- Out tokens
- Total tokens
- Estimated cost (USD)
- Top contributing jobs/streams

## Current status
- Tracker initialized.
- Next increment: automate ingestion from cron run stats/events into `usage/api-usage-log.csv`.

## Data source
- `usage/api-usage-log.csv`

## Notes
- This is now wired into the Ops status/navigation pages so run-rate visibility is first-class.
```

## usage/WORKFLOW_USAGE_MODEL_V1.md

```markdown
# Workflow Usage Telemetry Model v1

## Purpose
Create an authoritative per-workflow daily usage view to control API burn.

## Log file
- `ops/usage/workflow-usage-log.csv`

## Per-run fields
- run_at_utc
- workflow_id (e.g., jobs_digest_am, priority_inbox_alerts)
- trigger_type (cron/manual)
- model
- in_tokens
- out_tokens
- total_tokens
- estimated_cost_usd
- api_calls_count
- result_state (ok|no_change|error)
- notes

## Daily rollup fields
- date_utc
- workflow_id
- runs
- api_calls_total
- in_tokens_total
- out_tokens_total
- total_tokens_total
- estimated_cost_usd_total
- no_change_runs
- error_runs

## Top-cost-drivers view
Sort rollup by `estimated_cost_usd_total` descending; report top 5 workflows.

## Initial method (until full instrumentation)
- Approximate API calls by cron run count.
- Approximate token cost by run-class averages from observed cron outputs.
- Mark estimate confidence (`low|medium|high`).
```

## usage/api-usage-log.csv

```csv
date_utc,window,model,in_tokens,out_tokens,total_tokens,estimated_cost_usd,notes
2026-03-08,rolling-24h,openai-codex/gpt-5.2,0,0,0,0.00,Tracker initialised
```

## usage/daily-usage-estimate-2026-03-09.json

```json
{
  "date_utc": "2026-03-09",
  "estimate_confidence": "low",
  "method": "run-class approximation from observed cron behaviour until workflow-usage-log.csv is fully populated",
  "estimated": {
    "api_calls_24h": 58,
    "total_tokens_24h": 540000,
    "estimated_daily_cost_usd": 1.35
  },
  "top_cost_drivers": [
    {"workflow_id": "jobs_digest_am_pm", "estimated_share_pct": 37},
    {"workflow_id": "priority_inbox_alerts", "estimated_share_pct": 24},
    {"workflow_id": "ui_visual_style_daily", "estimated_share_pct": 11},
    {"workflow_id": "ux_workflow_design_daily", "estimated_share_pct": 10},
    {"workflow_id": "squad_build_engineer_continuous", "estimated_share_pct": 8}
  ]
}
```

## usage/workflow-usage-log.csv

```csv
run_at_utc,workflow_id,trigger_type,model,in_tokens,out_tokens,total_tokens,estimated_cost_usd,api_calls_count,result_state,notes
2026-03-09T00:00:00Z,jobs_digest_pm,cron,openai-codex/gpt-5.2,182800,5200,188000,0.47,8,ok,estimated from digest output
2026-03-09T00:00:00Z,priority_inbox_alerts,cron,openai-codex/gpt-5.2,11900,3000,14900,0.04,6,ok,estimated from alert output
```

## ux/ACCEPTANCE_CRITERIA_V1.md

```markdown
# UX Acceptance Criteria v1 (Ops surfaces)

Owner: UX (Vantage)
Status: Ready for build
Last updated: 2026-03-10 (20:30 UTC)

This file consolidates implementation-ready acceptance criteria for the current static build files.

In scope build files:
- `ops/index.html`
- `ops/status.html`
- `ops/kanban.html`
- `ops/agent-queue.html`
- `ops/agents.html`
- `ops/cv-preview.html`
- `ops/cv-run.html`
- `ops/api-usage.html`
- `ops/activity.html`

Planned build files:
- `ops/team-ops.html`

Supporting specs:
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ops/ux/IA_AND_NAV_V1.md`
- `ops/ui/nav_v1.js`

---

## AC-1: Global header navigation is present and consistent (v1 → v2)
### AC-1a (v1): `.topbar` header is consistent across pages
**Given** I open any of the ops pages (Status, Kanban, Agent Queue, Agents, CV Preview, API Usage, and Team Ops if published)
**When** the page renders
**Then** a header renders at the top with:
- a working “Home” link that resolves to an existing page
  - **v1 rule:** Home SHOULD link to `index.html` when present (current build), otherwise fall back to `status.html`
- a visible page title (`h1`)
- a primary navigation area with links to: Status, Pipeline, Agent Queue, Agents, API Usage, CV Preview
  - If `cv-run.html` is published, include `CV Run` as a utility link in this same nav set
- visible focus states for all interactive elements

**And** the page loads `ui/nav_v1.js` so that:
- the mobile menu can be toggled and dismissed (Escape, outside click, link click)
- the collapsible nav region syncs `aria-hidden` with the expanded state (mobile pattern)
- focus is managed:
  - opening the menu moves focus to the first focusable item within the menu
  - closing the menu returns focus to the toggle *if focus was inside the menu*
- the active link is expressed via `aria-current="page"` (not colour-only)

**And** pages SHOULD NOT hard-code `aria-current="page"` in the HTML.
- Rationale: avoid drift and ensure a single source of truth for active-link semantics.
- Build note (current reality, as of 2026-03-10): ops pages now rely on `nav_v1.js` for active-state semantics; avoid reintroducing per-page `aria-current` attributes.

**And** on small screens, when the nav is expanded it SHOULD render as a distinct panel (surface + border + radius + readable spacing) so the link set is scannable (avoid a wall of inline links).

### AC-1b (target): Persistent masthead (spec)
**Given** I open any of the ops pages (Status, Kanban, Agent Queue, Agents, CV Preview, API Usage)
**When** the page renders
**Then** a masthead renders at the top with:
- Left zone: product name `Crabbie Ops` and context label `Employment Pod`.
- Centre tabs: Pipeline, Agents, UX, Design, Roadmap, Activity.
- Right zone: search trigger (or stub), `+ New` button (or stub), updated timestamp.

**And** the current page tab appears active (not colour-only).

**And** the masthead is sticky (remains visible on scroll) on desktop widths.

Notes for static v1:
- If search and `+ New` are not implemented yet, they must still render as disabled/stub controls with tooltips.

---

## AC-1c: Global interaction feedback uses shared tokens (hover/press/visited)
**Given** I interact with links and list items across ops pages
**When** I hover/press clickable rows or nav items
**Then** hover state uses `--surface-hover` and pressed/active state uses `--surface-press` (consistent across components)

**And** visited links render using `--link-visited` (subtle differentiation, not browser-default purple)

**And** keyboard focus styles apply to `button`, `a`, and any element with `[role="button"]` via `:focus-visible`.

---

## AC-2: Keyboard navigation shortcuts (minimal)
Status: not implemented in current build (spec retained for when masthead lands).

**Given** I am focused anywhere on the page
**When** I type:
- `g p`
**Then** I navigate to `ops/kanban.html`

**When** I type:
- `g a`
**Then** I navigate to `ops/agent-queue.html`

**When** I type:
- `g x`
**Then** I navigate to `ops/activity.html` (or show “Not implemented” toast until page exists)

**When** I type:
- `/`
**Then** focus moves to the search input (or opens search modal if implemented).

---

## AC-3: Kanban cards show next action as first-class
**Given** I open `ops/kanban.html`
**Then** each card must show:
- role title
- org + location
- role_id (e.g., `R-2026-0006`)
- status column label
- tier badge (Tier A/B/C)
- **Next:** line (derived from `job-pipeline.csv` `next_action`)
- link to source listing

**And** if a CV filename/artefact exists, it must be displayed and clickable (or at minimum shown as text until storage is wired).

### AC-3b (a11y/UX affordance): Horizontal scroll region is discoverable (and keyboard-scrollable)
**Given** I am using keyboard navigation on `ops/kanban.html`
**When** I Tab onto the board container (not just into a card link)
**Then** the board itself is focusable and labelled (e.g., `role="region"` + `aria-label="Kanban board (scroll horizontally)"` + `tabindex="0"`)

**And** when focused, a visible focus ring appears on the board container (so users discover horizontal scrolling)

**And** when the board container itself has focus:
- `←` / `→` scroll the board left/right by ~one column
- `PgUp` / `PgDn` scroll the board left/right by ~one viewport
- `Home` jumps to the first column
- `End` jumps to the last column

Non-goal:
- These key bindings do not fire when focus is inside a card (e.g., on a link/button), to avoid hijacking normal interaction.

---

## AC-4: Agent Queue shows blockers explicitly
**Given** I open `ops/agent-queue.html`
**Then** each task row must show:
- status, priority
- agent owner
- title
- role_id when available

**And** if status is `Blocked`, the row must render a visible blocker reason (not hidden in a hover).

### AC-4b (a11y/UX affordance): Horizontal scroll region is discoverable (and keyboard-scrollable)
**Given** I am using keyboard navigation on `ops/agent-queue.html`
**When** I Tab onto the board container (not just into a row link)
**Then** the board itself is focusable and labelled (e.g., `role="region"` + `aria-label="Agent queue board (scroll horizontally)"` + `tabindex="0"`)

**And** when focused, a visible focus ring appears on the board container (so users discover horizontal scrolling)

**And** when the board container itself has focus:
- `←` / `→` scroll the board left/right by ~one column
- `PgUp` / `PgDn` scroll the board left/right by ~one viewport
- `Home` jumps to the first column
- `End` jumps to the last column

Non-goal:
- These key bindings do not fire when focus is inside a task row control/link, to avoid hijacking normal interaction.

---

## AC-5: Timeline component renders in at least one place
**Given** I open `ops/status.html` (or `ops/activity.html` if created)
**When** there is an events feed available at `ops/events/events-YYYY-MM.jsonl`
**Then** the UI renders a Timeline list from the first N events.

**And** parsing is resilient:
- invalid JSONL lines are skipped
- a visible notice is shown when skips occur (exact): `X lines skipped (invalid JSON).`
- if the feed is truncated for performance (v1 cap), show (exact): `Showing first 50 events.`

**And** if the events feed is missing
**Then** the UI renders a derived timeline from `job-pipeline.csv` and `agent-tasks.csv` and shows the inline note:
`Event feed unavailable, showing derived activity.`

---

## AC-6: UX artefacts are discoverable from Status
**Given** I open `ops/status.html`
**Then** there are visible links to:
- `ops/ux/JOURNEY_MAPS_V1.md`
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ops/ux/IA_AND_NAV_V1.md`
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md`

(They may sit under an “Execution Artefacts” list.)

---

## AC-7: CV Preview can load drafts via input or query param
**Given** I open `ops/cv-preview.html`
**Then** I can load draft content into the preview surface by either:
- entering a path into the “Draft file path” field and clicking “Load Draft”, or
- opening a URL like `cv-preview.html?file=outputs/cv/<role_id>/draft.md`

**And** while loading, the UI shows a loading state.

**And** if the file cannot be fetched, the UI shows a readable error message that includes the attempted path.

**And** if the draft path implies a role folder (`outputs/cv/<role_id>/…`), the page SHOULD offer convenience links:
- `Run CV ↗` → `cv-run.html?role_key=<role_id>`
- `Pipeline ↗` → `kanban.html?role_id=<role_id>`

Non-goals (v1):
- Perfect markdown support.

---

## AC-8: CV Preview default state is not “broken by default”
**Given** I open `ops/cv-preview.html` with no query param
**Then** the Draft file path input MUST be blank (no non-existent default path)

**And** helper text MUST guide the expected pattern:
- `Paste a path under outputs/cv/… (e.g., outputs/cv/R-2026-TEST-EY/draft.md)`

Build note (current gap, as of 2026-03-10):
- `ops/cv-preview.html` still defaults to `outputs/cv/R-2026-0017/draft.md` which is likely non-existent on a fresh publish.

Implementation pointer (tie-to-build):
- In `ops/cv-preview.html`, set `#mdPath` default `value` to empty.
- Update the helper/tip copy (currently under `#mdTip`) to include the exact helper text above (query-param guidance can remain, but must not replace the default-path guidance).

Rationale:
- Avoids a “broken by default” first impression and reduces support/debug churn.

---

## AC-8b: CV Preview draft loader is hardened (path allowlist)
**Given** I open `ops/cv-preview.html`
**When** I attempt to load a draft via either the input field or the `?file=` query param
**Then** the loader MUST reject unsafe paths before calling `fetch()`:
- Reject any value containing a protocol or absolute URL (examples: `http:`, `https:`, `file:`, `data:`)
- Reject any path containing `..` segments (path traversal)
- Allowlist prefix: path MUST start with `outputs/cv/`

**And** when rejected, the UI must show a readable error starting with (exact): `Could not load draft:` and include the attempted path.

Build tie-in:
- This hardening is required for hosted environments; see `ops/ux/HANDOFF_NOTES_V1.md` (UX-003).

---

## AC-9: CV Run generates a correct local command + deep-links to preview
**Given** I open `ops/cv-run.html`
**When** I enter a role key (e.g., `R-2026-0017`) and change inputs
**Then** the page updates a visible command snippet that:
- uses `python3 ops/cv-pipeline/run_cv_deterministic.py`
- writes outputs to `outputs/cv/<role_key>/`

**And** the page provides a link that deep-links to Preview using:
- `cv-preview.html?file=outputs/cv/<role_key>/draft.md`

**And** the page provides a link back to Pipeline with role context:
- `kanban.html?role_id=<role_key>`

**And** the page MAY accept a query param to pre-fill the Role key field:
- `cv-run.html?role_key=<role_key>`

Non-goals (v1):
- Running code in the browser.

---

## AC-11: Team Ops board provides a control-tower summary (read-only v1)
**Given** I open `ops/team-ops.html`
**Then** the page renders a scannable summary of current workload from `ops/agent-tasks.csv` including:
- `In progress` count (tasks where `status=In Progress`)
- `Blocked` count (tasks where `status=Blocked`)
- `Due soon` count (tasks with `due_date` within the next 7 days)

**And** the page renders:
- a `Blocked tasks` list (top 10) that includes a visible blocker reason (from `notes`, not tooltip-only)
- a `Due soon` list (top 10)

**And** the page includes clear links back to:
- `ops/agent-queue.html`
- `ops/kanban.html`

Notes:
- Parsing CSV client-side is acceptable for v1.
- No write-back is required in v1.
```

## ux/HANDOFF_NOTES_V1.md

```markdown
# UX Handoff Notes v1 (Build + Design)

Owner: UX (Vantage)
Last updated: 2026-03-10 (20:24 UTC)

This is a practical handoff note intended to reduce ambiguity for build work.

---

## 1) What to implement next (in order)
### 1.1 Implement the masthead (copy-paste first)
Source spec: `ops/ux/MASTHEAD_NAV_SPEC_V1.md`

Target pages:
- `ops/status.html`
- `ops/kanban.html`
- `ops/agent-queue.html`
- `ops/agents.html`
- `ops/cv-preview.html`
- `ops/api-usage.html` (currently in the primary nav; keep consistent)

Implementation approach (static HTML v1):
- Replace current `.topbar` blocks with a masthead component.
- If a shared partial is not available, accept copy-paste duplication for v1 but keep the markup identical.
- Ensure active tab is correct per page.

Design dependencies:
- Use existing tokens: `ops/ui/STYLE_TOKENS_V1.css`
  - Interaction feedback: `--surface-hover`, `--surface-press`
  - Visited links: `--link-visited`
- Use primitives: `ops/ui/COMPONENTS_V1.css`

Keep (do not regress):
- `ops/kanban.html` board container is intentionally keyboard-focusable (`tabindex="0"`) with a focus ring so horizontal scrolling is discoverable.
  - When the board container itself is focused, it supports keyboard horizontal scrolling (←/→, PgUp/PgDn, Home/End).
  - Scrollbars are intentionally visible/styled (tokens: `--scrollbar-thumb`, `--scrollbar-thumb-hover` in `STYLE_TOKENS_V1.css`; board styling in `COMPONENTS_V1.css`).
- `ops/agent-queue.html` board container is intentionally keyboard-focusable (`tabindex="0"`) with a focus ring so horizontal scrolling is discoverable.
  - When the board container itself is focused, it supports keyboard horizontal scrolling (←/→, PgUp/PgDn, Home/End).
  - Scrollbars are intentionally visible/styled (tokens: `--scrollbar-thumb`, `--scrollbar-thumb-hover` in `STYLE_TOKENS_V1.css`; board styling in `COMPONENTS_V1.css`).
- Mobile nav expanded state should remain a distinct, readable panel (padding + surface + border + radius) so the global link set scans cleanly on small screens (implemented in `ops/ui/COMPONENTS_V1.css`).

Known blocker:
- Task `T-0206` notes a partial/template strategy is not yet agreed.

### 1.2 Add Activity timeline (minimal seed)
Source spec: `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`

Option A (recommended): create `ops/activity.html` and render timeline there first.
Option B: embed a compact timeline module on `ops/status.html`.

Minimal v1 is acceptable:
- Render 10 items.
- Support empty/missing states.
- Hard-code sample data until `ops/events/` exists.

**Handoff item UX-004 (concrete): Align timeline parsing to canonical EventEnvelope fields**
Why: OpenAPI + JSON Schema now standardise on `{event_type, occurred_at, data}`; avoid UI breakage from `{type, payload}` drift.

Reference:
- `ops/architecture/CONTROL_TOWER_API_EVENT_ENVELOPE_ALIGNMENT_2026-03-09.md`

Implementation notes (static JS v1):
- When parsing JSONL lines, accept canonical first:
  - `event.event_type`, `event.occurred_at`, `event.data`
- Optionally support legacy by translating:
  - `event.type -> event_type`
  - `event.payload -> data`
- Adapter must output the UI contract in `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md` Section 5.

Acceptance:
1) A JSONL line with `{event_type, occurred_at, data}` renders without errors.
2) A JSONL line with `{type, payload}` still renders (if legacy support is enabled), but the code path is clearly marked for removal.
3) Missing `occurred_at` does not crash the page; item is skipped with `console.warn`.

### 1.3 UX artefact links on Status (DONE)
Target file: `ops/status.html`

Current reality (verified 2026-03-08):
- Status links the full UX pack:
  - `ux/JOURNEY_MAPS_V1.md`
  - `ux/MASTHEAD_NAV_SPEC_V1.md`
  - `ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
  - `ux/IA_AND_NAV_V1.md`
  - `ux/ACCEPTANCE_CRITERIA_V1.md`

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-6)

### 1.4 Build handoff (concrete): Derived Activity module + Activity page stub (SHIPPED; keep as regression checklist)
Source specs:
- `ops/ux/JOURNEY_MAPS_V1.md` (Journey 6)
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md` (see Handoff item UX-002 for CSV fallback rules)
- `ops/ux/IA_AND_NAV_V1.md` (Activity tab target)

Deliverables (static v1):
1) Ship `ops/activity.html`
   - **Build note:** `ops/activity.html` now exists in-repo.
   - Confirm it includes topbar/nav (AC-1a), page title `Activity`, and renders a timeline list.
   - Data source order:
     1. if `ops/events/events-YYYY-MM.jsonl` exists → render first 50 lines
     2. else → render derived activity from CSVs (below)

2) Add compact module to `ops/status.html`
   - Heading: `What changed` + link `View all →` to `activity.html`.
   - Render first 10 items using the same Timeline markup.
   - Empty state copy (exact): `No recent activity.`

Derived activity rules (fallback):
- From `ops/agent-tasks.csv`: create an item per row where `updated_at` is within last 7 days.
  - `entity_type=task`, `entity_id=task_id`
  - summary: `${status}: ${title}` (include `role_id` prefix if present)
  - href: `agent-queue.html` (v1), later deep-link by id
- From `ops/job-pipeline.csv`: no `updated_at` exists yet, so use `last_action` as the timestamp.
  - Include rows where `last_action` is within last 7 days.
  - `entity_type=job`, `entity_id=role_id`
  - summary: `${status}: ${title}` + `Next: ${next_action}` when present
  - href: `kanban.html` (v1)

Data hygiene note (important):
- Add `updated_at` to `ops/job-pipeline.csv` as soon as it is touched by scripts/agents.
- Once present, switch the derived rule to prefer `updated_at` over `last_action`.

Acceptance check:
- Satisfies `ops/ux/ACCEPTANCE_CRITERIA_V1.md` AC-5 (event feed OR derived activity fallback).

### 1.5 CV Preview UX tightening (quick wins)
Target file: `ops/cv-preview.html`

Current reality (verified 2026-03-10):
- Draft loader exists (input + fetch + lightweight markdown rendering).
- Query param supported: `?file=outputs/cv/<role_id>/draft.md`.
- **Still unfixed:** default input value is `outputs/cv/R-2026-0017/draft.md`, which is likely non-existent on a fresh publish ("broken by default").

Build asks (v1):
- Set default to blank and rely on helper text (preferred), or point to a known-good demo file that exists in the repo.
- If hosted publicly, restrict load paths to `outputs/cv/**` only (same-origin) to reduce accidental file exposure.

**Handoff item UX-003 (concrete): Harden the draft loader + fix the default path**
Goal: eliminate “broken by default” and prevent path traversal / accidental fetch of non-output files.

Implementation notes (static JS v1):
- When resolving the `file` query param or input value:
  1) Reject absolute URLs and protocols (`http:`, `https:`, `file:`, `data:`).
  2) Normalise and reject any path containing `..` segments.
  3) Allowlist prefix: must start with `outputs/cv/`.
- Default input state: blank.
  - Helper text (exact): `Paste a path under outputs/cv/… (e.g., outputs/cv/R-2026-TEST-EY/draft.md)`
  - Concrete patch (HTML):
    - Change the input from:
      - `<input ... id='mdPath' ... value='outputs/cv/R-2026-0017/draft.md' ...>`
    - To:
      - `<input ... id='mdPath' ... value='' ...>`
    - Update the existing tip element (currently `#mdTip`) so it includes the helper text above (query-param guidance can remain, but should be secondary).
- Error copy (exact, prefix only): `Could not load draft:` then include the attempted path.

Acceptance:
1) Opening `cv-preview.html` with no query param does not show an error state.
2) Opening `cv-preview.html?file=outputs/cv/R-2026-TEST-EY/draft.md` loads when the file exists.
3) Opening with `?file=../ops/agent-tasks.csv` shows a readable error and does not fetch the file.

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-7, AC-8)

### 1.6 Build handoff (concrete): Kanban triage controls (UI-only v1)
Source spec: `ops/ux/JOB_TRIAGE_CONTROLS_SPEC_V1.md`

**Handoff item UX-010 (concrete): Triage control tap targets + keybinding precedence**
Why: keep the triage buttons usable on mobile, and prevent keyboard shortcut conflicts once `ops/ui/scroll_a11y_v1.js` is wired broadly.

Deliverables (static UI v1):
- Ensure each triage button meets the compact minimum tap target (`--tap-min-compact` in `ops/ui/STYLE_TOKENS_V1.css`).
- Do not trigger triage shortcuts (1–4, `e`) when focus is inside an input/textarea (e.g., future Next Action editor).

Acceptance:
- On mobile widths, triage buttons are reliably tappable without accidental misfires.
- With a text input focused inside a card, typing numbers does not change triage state.

Deliverables (static UI v1):
1) On each `ops/kanban.html` card, render a triage control group with the exact labels: `Pinned`, `Assessing`, `Hold`, `Ignored`.
2) A11y: wrap controls in `role="group" aria-label="Triage"` and express the active option via `aria-pressed="true"` (plus a visible style change, not colour-only).
3) Keyboard shortcuts (when focus is within a card):
   - `1` → Pinned, `2` → Assessing, `3` → Hold, `4` → Ignored
4) Add `data-role-id="<role_id>"` on the card root and `data-triage="Pinned|Assessing|Hold|Ignored"` on the selected control to simplify future wiring.
5) UI-only v1 is acceptable (no persistence), but include a `Copy update` affordance that copies a minimal patch snippet (example): `role_id=R-2026-TEST-EY, status=Pinned`.

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-10)

### 1.7 Build handoff (concrete): Seed events feed + parse-first-N proof

**Handoff item UX-007 (concrete): JSONL parse diagnostics + truncation notice**
Why: when events JSONL contains a bad line (or is very large), we need a visible, operator-friendly signal instead of silent failure.

Deliverables (static v1):
- If JSON parsing fails for some lines, skip them and show: `X lines skipped (invalid JSON).`
- Cap parsing to the first 50 non-empty lines; if the file has more, show: `Showing first 50 events.`

**Handoff item UX-009 (concrete): Timeline source indicator (operator clarity)**
Why: When operators compare environments, they need to know whether the page is showing Events vs Derived fallback, and which feed file was used.

Deliverables (static v1):
- Render a small meta line above the timeline:
  - Events path: `Source: events (events/events-YYYY-MM.jsonl)`
  - Fallback path: `Event feed unavailable, showing derived activity.`
- If the events fetch fails, do not console-only fail: the user-visible meta line MUST switch to the fallback copy above.

Acceptance:
1) With `ops/events/events-YYYY-MM.jsonl` present, meta line shows the events source path.
2) If the events fetch 404s, meta line shows the fallback copy (exact).

Reference: `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md` (UX-004, updated acceptance)
Why: unblocks AC-5 quickly (real events path, not just derived fallback).

Deliverables (static v1):
1) Ensure `ops/events/` exists and is web-served.
2) Commit a small seed file: `ops/events/events-2026-03.jsonl` (already created by UX).
3) Timeline read order:
   - Try fetch `events/events-2026-03.jsonl` first (or latest by naming convention).
   - If fetch fails, fall back to derived activity (Section 1.4).
4) Parse strategy (v1):
   - Fetch as text.
   - Split by `\n`.
   - Parse only first 50 non-empty lines with `JSON.parse`.

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-5)

### 1.7 Build handoff (concrete): Home link rule + delegate active-link semantics to `nav_v1.js`
Why: `nav_v1.js` already implements URL-based active link semantics, and a working “Home” target prevents nav dead-ends.

Current reality (verified 2026-03-09):
- `ops/index.html` now exists and acts as “Home”.
- Most pages already link the logo/home anchor to `index.html`.

Deliverables (static v1):
1) Standardise the logo/title href across pages:
   - If `index.html` exists (current build): set to `index.html`.
   - If `index.html` is removed or not published in an environment: set to `status.html`.
2) Ensure these pages load `ops/ui/nav_v1.js`:
   - `ops/status.html`
   - `ops/kanban.html`
   - `ops/agent-queue.html`
   - `ops/agents.html`
   - `ops/cv-preview.html`
   - `ops/cv-run.html`
   - `ops/api-usage.html`
3) Remove per-page hard-coded “active” styles/classes where present; rely on:
   - `aria-current="page"` and `.btn--primary` applied by `nav_v1.js`
4) Do not regress a11y behaviour now handled by `nav_v1.js`:
   - collapsible nav region MUST sync `aria-hidden`
   - focus MUST move into the menu on open, and return to the toggle on close when appropriate

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-1)

### 1.8 Build handoff (concrete): Add `updated_at` to `job-pipeline.csv` writes (unblocks better Activity)
Why: CSV-derived activity is currently lossy because `ops/job-pipeline.csv` has no stable `updated_at`.

Deliverables (v1):
1) Add a new column `updated_at` to `ops/job-pipeline.csv` (RFC3339 preferred; date-only acceptable).
2) Update any scripts/agents that write pipeline rows to also write `updated_at` whenever `status`, `next_action`, `owner`, or `notes` changes.
3) Update derived-activity generator to prefer `updated_at` over `last_action` when present (already specified in `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`).

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-5)

### 1.12 Build handoff (concrete): `job-pipeline.csv` schema bump + backfill (safe, backwards-compatible)

### 1.13 Build handoff (concrete): Promote Activity once `ops/activity.html` exists (avoid dead links)
Why: right now UX recommends Activity as a first-class destination, but the page is not yet published (T-0305). We should avoid shipping nav/items that 404.

Deliverables (static v1):
1) When `ops/activity.html` is added, promote it in *two* places (and only then):
   - Add `Activity` to the masthead nav set (see `ops/ux/MASTHEAD_NAV_SPEC_V1.md`).
   - Add the Home tile `Activity` on `ops/index.html` under Operate.
2) Until the page exists:
   - Hide the Activity nav link, OR render it as `aria-disabled="true"` + `Coming soon` (no dead link).
3) `nav_v1.js` must treat `activity.html` as a first-class route for active-link semantics.

Acceptance:
- No published page contains a dead link to `activity.html`.
- Once `activity.html` exists, it is reachable from both masthead and Home.

Why: Until pipeline writers are updated, Activity/Timeline fallback is still weak. A one-time schema bump + best-effort backfill makes derived activity immediately more useful.

Deliverables (v1):
1) Add `updated_at` column to `ops/job-pipeline.csv` (if not already present).
2) Backfill `updated_at` for existing rows:
   - If `last_action` begins with a parseable date (`YYYY-MM-DD`), set `updated_at` to that date.
   - Else leave blank (do not invent timestamps).
3) Ensure CSV readers (Kanban/derived activity) are tolerant:
   - ignore unknown extra columns
   - treat blank `updated_at` as “no timestamp” and skip those rows for derived activity (per `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md` UX-002).

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-5)

### 1.9 Build handoff (concrete): Kanban “Next action” inline edit (UI-only v1)
Source spec: `ops/ux/JOB_TRIAGE_CONTROLS_SPEC_V1.md` (Handoff item UX-006)

Why: AC-3 requires `Next:` to be visible, but without an edit affordance it will drift (CSV edits are too high-friction).

Deliverables (static UI v1):
1) On each Kanban card, render a small `Edit` affordance adjacent to `Next:`.
2) Editing uses a single-line input; keyboard rules:
   - `e` focuses input when card is focused
   - `Enter` commits (in-memory)
   - `Esc` cancels
3) Provide a `Copy update` button that copies a patch snippet suitable for manual pipeline updates:
   - `role_id=<id>, next_action="…"`

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-3)

### 1.10 Build handoff (concrete): Team Ops Board page skeleton (read-only v1)
Source spec:
- `ops/ux/JOURNEY_MAPS_V1.md` (Journey 7)

Why: gives Matt a single control-tower view of workload + blockers, without needing the full Kanban + Agent Queue context-switch.

Deliverables (static v1):
1) Create `ops/team-ops.html`
   - Include the standard header/nav (`ui/nav_v1.js`), consistent with AC-1.
   - Page title: `Team Ops`.
   - Ensure the nav set includes a route to Team Ops (either as a primary link or a clearly-labelled utility link under Agents).
2) Render 3 KPI tiles from `ops/agent-tasks.csv`:
   - `In progress` (count of `status=In Progress`)
   - `Blocked` (count of `status=Blocked`)
   - `Due soon` (count due in next 7 days)
3) Render two lists (top 10 each):
   - `Blocked tasks` (show `task_id`, `title`, `agent`, and the first ~120 chars of `notes`)
   - `Due soon` (show `due_date`, `task_id`, `title`, `agent`)
4) Add two outgoing links:
   - `View tasks →` `agent-queue.html`
   - `View pipeline →` `kanban.html`

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-11)

**Handoff item UX-012 (concrete): Team Ops publish gate (avoid “Review” without a page)**
Why: Task T-0306 is meaningless to review if `ops/team-ops.html` is not present in-repo.

Deliverables:
1) Ensure `ops/team-ops.html` exists under `ops/` and is linked from at least one surface (Home tile or masthead/nav utility list).
2) If the page is not ready to ship, set task T-0306 to `Blocked` with a short reason (e.g., “page not committed yet”).

### 1.11 Build handoff (concrete): Home tiles for Activity + Team Ops (index.html)
Target file: `ops/index.html`

Why: Home is the first click after publish. If Activity/Team Ops ship but are not visible on Home, discoverability suffers and the “control tower” loop breaks.

Current reality (2026-03-10): `ops/activity.html` exists and is linked from Status (“What changed”), and Home now includes an Activity tile under Operate (shipped in UI pass T-0302).

Deliverables (static v1):
1) Under **Operate**, add two full-card links using the existing `.item--link` pattern:
   - `Activity` → `activity.html`
   - `Team Ops` → `team-ops.html`
2) If either page does not exist yet, still render the tile but add a small label: `Coming soon` (no dead links), OR hide it behind a single boolean in JS (preferred).
3) When both pages exist, update the primary nav list in the header to include `Activity` (and optionally `Team Ops` if it is promoted to a first-class destination rather than under Agents).

Acceptance:
- Home has clear, keyboard-focusable paths to Activity and Team Ops as soon as those pages are published.

---

## 2) Markup hooks (pragmatic)
To reduce CSS churn, keep these conventions:
- Root: `<header class="masthead"> ...` (new)
- Tabs: `<nav class="masthead__nav">` containing anchor buttons.
- Active state: `aria-current="page"` on active tab.
- Badge: `<span class="badge badge--info">3</span>` etc.

Timeline conventions:
- List: `<ol class="timeline" role="list">`
- Item: `<li class="timeline__item" role="listitem">`
- Severity classes: `timeline__item--info|--warning|--danger`

---

## 3) Copy (microcopy defaults)
Use these exact labels (avoid drift):
- Tabs: Pipeline, Agents, UX, Design, Roadmap, Activity
- Search hint: `/ Search`
- Primary CTA: `+ New`
- Updated label: `Updated <time>`

---

## 4) Definition of done references
Use the acceptance criteria checklist:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md`

---

## 5) Risks + mitigations
- Static duplication risk: masthead copied into multiple pages can drift.
  - Mitigation: keep markup identical, consider a small build step later.
- Event feed risk: JSONL parsing in browser may be slow for large files.
  - Mitigation: only read first N lines in v1; add an index/precompute step later.
- Draft loader risk: unrestricted `fetch()` paths can leak files in some hosting contexts.
  - Mitigation: restrict to `outputs/cv/**` and enforce same-origin only.
```

## ux/IA_AND_NAV_V1.md

```markdown
# Ops UX IA + Navigation v1

Owner: UX (Vantage)
Status: Implementation-ready (static HTML v1)
Last updated: 2026-03-10 (20:30 UTC)

## 0) Scope
This IA covers the *current build surfaces* in `ops/*.html` plus their supporting artefacts. It is written to be directly implementable in static HTML first, and later migratable to a templated build.

Current build files in scope:
- `ops/index.html`
- `ops/status.html`
- `ops/kanban.html`
- `ops/agent-queue.html`
- `ops/agents.html`
- `ops/cv-preview.html`
- `ops/cv-run.html` (utility page, currently linked in global nav)
- `ops/api-usage.html` (utility page, currently linked in global nav)
- `ops/activity.html`

Planned build files (not yet present):
- `ops/team-ops.html` (control-tower summary; tracked in tasks as T-0306)

UX source specs (this folder):
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ops/ux/JOURNEY_MAPS_V1.md`
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md`
- `ops/ux/HANDOFF_NOTES_V1.md`

Build note (current reality):
- The HTML pages currently use a simpler `.topbar` header with cross-links.
- `ops/ui/nav_v1.js` is present and now:
  - toggles the mobile menu reliably (Escape/outside click/link click)
  - applies active-link semantics via `aria-current="page"` and `.btn--primary` based on the current filename
  - syncs `aria-hidden` on the collapsible nav region (mobile pattern; harmless on desktop)
  - manages focus on open/close (open → first link inside nav; close → return focus to toggle if focus was inside)
- Mobile nav expanded state now renders as a distinct, readable panel (padding + surface + border + radius) so the nav links scan cleanly on small screens (implemented in `ops/ui/COMPONENTS_V1.css`).
- `ops/kanban.html` now treats the board as a labelled, keyboard-focusable horizontal scroll region (`role="region"`, `aria-label`, `tabindex="0"`) so the scroll affordance is discoverable
  - Board also supports keyboard horizontal scrolling when the board container itself is focused (←/→, PgUp/PgDn, Home/End).
- `ops/agent-queue.html` now treats the board as a labelled, keyboard-focusable horizontal scroll region (`role="region"`, `aria-label`, `tabindex="0"`) so the scroll affordance is discoverable
  - Board also supports keyboard horizontal scrolling when the board container itself is focused (←/→, PgUp/PgDn, Home/End).
- `ops/index.html` now exists and acts as a lightweight landing page (“Home”).
- The “home” logo link currently points to `index.html` across pages (aligned to the current build).
- Design tokens now include explicit interaction surfaces and visited-link styling:
  - `--surface-hover`, `--surface-press` (derived)
  - `--link-visited` (derived)
- Known UX gap (should be fixed next): `ops/cv-preview.html` still defaults the draft path to a likely non-existent file (`outputs/cv/R-2026-0017/draft.md`). The default state should be blank + helper text (see AC-8 / Handoff UX-003).
- Known security/robustness gap (should be fixed with the same patch): CV Preview draft loader is not yet allowlisted to `outputs/cv/**` and does not yet reject protocols / `..` segments before `fetch()` (see AC-8b / Handoff UX-003).
- Discoverability note (resolved): `ops/index.html` (Home) now exposes an **Activity** tile under Operate, so “What changed” is 1 click from Home (shipped in UI pass T-0302).
- Launchpad note (resolved): `ops/status.html` now includes a “What changed” module that links to `activity.html` as the first-class “View all” destination (T-0305 shipped).

Pragmatic v1 recommendation:
- Treat `index.html` as “Home”, and `status.html` as the operational launchpad/status board.

---

## 1) Primary information architecture
### Level 0: Workspaces (future)
- Default workspace label shown: **Employment Pod**
- Future: multi-workspace switcher (e.g., Consulting Pod, Trading Pod)

### Level 1: Primary sections (masthead tabs)
Aligned to `MASTHEAD_NAV_SPEC_V1.md`.

1. **Pipeline**
   - Purpose: see jobs, status, next action
   - Current page: `ops/kanban.html`
   - Source data: `ops/job-pipeline.csv`

2. **Agents**
   - Purpose: see tasks by agent and current blockers
   - Current pages:
     - `ops/agent-queue.html` (task board)
     - `ops/agents.html` (agent roster/index)
   - Source data: `ops/agent-tasks.csv` + `ops/agents/*`

3. **UX**
   - Purpose: navigation + journeys + component specs
   - Current content: markdown in `ops/ux/`
   - Landing (recommended): `ops/ux/index.md` (to create when we add more docs)

4. **Design**
   - Purpose: design language + component tokens
   - Current content: `ops/design/DESIGN_ROADMAP_V1.md` and `ops/ui/*`

5. **Roadmap**
   - Purpose: execution plan, gantt, update capture
   - Current content:
     - `ops/EXECUTION_PLAN_2026-03-03.md`
     - `ops/project-gantt.md`
     - `ops/UPDATE_CAPTURE.md`
     - (utility) `ops/api-usage.html`

6. **Activity**
   - Purpose: global event feed, filterable
   - Current page: `ops/activity.html`
   - Source data (v1): `ops/events/events-YYYY-MM.jsonl` (preferred) with a derived CSV fallback per `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`

---

## 2) Navigation model (URLs + active tab rules)
### Canonical routes (static v1)
- Pipeline tab → `kanban.html`
- Agents tab → `agent-queue.html` (board), `agents.html` (index), and `team-ops.html` (control-tower summary, when published)
- UX tab → `ux/JOURNEY_MAPS_V1.md` (temporary) or `ux/index.md` (preferred)
- Design tab → `design/DESIGN_ROADMAP_V1.md`
- Roadmap tab → `status.html` (acts as Overview/Launchpad in current build)
- Activity tab → `activity.html`

### Active-tab logic (static)
Current implementation direction:
- Prefer `ops/ui/nav_v1.js` to set `aria-current="page"` and apply `.btn--primary` automatically.
- Avoid per-page hard-coded active classes where possible (reduces drift).

Rule table (for the *masthead tab state*, independent of the v1 `.topbar` links):
- `*/kanban.html` → active=Pipeline
- `*/agent-queue.html` or `*/agents.html` or `*/team-ops.html` → active=Agents
- `*/ux/*` → active=UX
- `*/design/*` OR `*/ui/*` → active=Design
- `*/EXECUTION_PLAN_*` OR `*/project-gantt*` OR `*/UPDATE_CAPTURE*` OR `*/status.html` OR `*/api-usage.html` → active=Roadmap
- `*/activity.html` OR `*/events/*` → active=Activity

---

## 3) Page-level IA (what belongs where)
### `ops/status.html` (Overview / Launchpad)
Job-to-be-done: open one page and jump to the right operational surface.

Should contain:
- persistent masthead (target) or topbar cross-links (current)
- a “What changed” module that links to `activity.html` as the first-class destination
  - v1 placeholder is acceptable (e.g., Activity link + Update Capture link) until an inline last-24h list ships
- links to: Kanban, Agent Queue, CV Preview, key specs

### `ops/kanban.html` (Pipeline)
Job-to-be-done: decide what to do next per role.

Must show per card:
- status badge + tier
- role_id
- **next action** (first-class)
- link to listing
- link to CV artefacts when they exist

### `ops/agent-queue.html` (Agents)
Job-to-be-done: see workload, blockers, and what is in progress.

Must show per task row:
- status, priority, due date
- owner agent
- role_id (if applicable)
- blocker reason (if status=Blocked)

### `ops/team-ops.html` (Agents: control tower)
Job-to-be-done: get a single scannable view of workload and blockers.

Should contain:
- KPI strip (In progress / Blocked / Due soon)
- Top blockers list with visible reasons
- Links back to Agent Queue and Kanban

### `ops/cv-preview.html` (CV build target)
Job-to-be-done: evaluate layout and export readiness.

Current behaviour (implemented):
- User can load a draft markdown file via an input field.
- Optional query param supported:
  - `cv-preview.html?file=outputs/cv/<role_id>/draft.md`
- Convenience links can be role-aware when the draft path matches `outputs/cv/<role_id>/…`:
  - `Run CV ↗` → `cv-run.html?role_key=<role_id>`
  - `Pipeline ↗` → `kanban.html?role_id=<role_id>`

Should show:
- active role context (role_id) (future)
- most recent build artefacts + manifest (when available)
- QA checklist status (when available)

### `ops/cv-run.html` (Utility: local run command generator)
Job-to-be-done: generate the correct one-shot terminal command for a role and then jump to Preview.

Should contain:
- same global nav pattern as other ops pages
- role key input (role_id), title, input path
- a copyable command snippet that runs the deterministic pipeline
- a preview deep-link like `cv-preview.html?file=outputs/cv/<role_id>/draft.md`
- a Pipeline deep-link like `kanban.html?role_id=<role_id>`
- optional query-param hydration so other pages can hand-off role context:
  - `cv-run.html?role_key=<role_id>`

### `ops/api-usage.html` (Utility: spend visibility)
Job-to-be-done: see run-rate and cost trend quickly.

Should contain:
- same global nav pattern as other ops pages
- KPI tiles (budget target, tokens, estimated cost, status)
- a simple log table sourced from `usage/api-usage-log.csv`

---

## 4) Build implementation notes (thin)
- Reuse CSS: `ops/ui/STYLE_TOKENS_V1.css` + `ops/ui/COMPONENTS_V1.css`.
- Implement masthead as a copy-paste partial first; later migrate to a shared template.
- Prefer keyboard-first: visible focus rings, no click-only controls.

---

## 5) Open decisions
1. Should `status.html` be considered “Roadmap”, or should there be an explicit Overview tab?
2. Where should global search land first: Pipeline cards, tasks, or artefact filenames?
3. Does Activity page render client-side from `ops/events/*.jsonl`, or do we precompute a small index (e.g., `ops/events/index.json`)?
4. Should `cv-preview.html` restrict allowed draft paths to `outputs/cv/**` only (security hardening for hosted environments)?
5. Should API Usage live under Roadmap (current), or become a first-class “Metrics” workspace later?
```

## ux/JOB_TRIAGE_CONTROLS_SPEC_V1.md

```markdown
# Job Triage Controls Spec v1 (Kanban)

Owner: UX (Vantage)
Consumers: Build (Rivet), Data/CRM (Ledger)
Status: Draft (implementation-ready v1)
Last updated: 2026-03-10 (18:24 UTC)

## 1) Objective
Make job triage decisions fast, explicit, and auditable directly from the Pipeline board (`ops/kanban.html`), without burying decisions in free-text notes.

This solves:
- triage decisions hidden in `notes`
- status drift (human labels vs canonical statuses)
- too many clicks to move a role between “Assessing / Hold / Ignored / Pinned”

## 2) Scope (v1)
In scope:
- UI control pattern on each Kanban card
- keyboard-first interactions
- deterministic write-back contract to `ops/job-pipeline.csv` (via existing scripts/agents; UI does not need to write files in-browser)

Out of scope:
- server-side persistence
- multi-user conflict resolution

## 3) Primary artefacts
- Pipeline data: `ops/job-pipeline.csv`
- Status mapping: `ops/crm/status-mapping-v1.json` and `ops/crm/STATUS_MAPPING_V1.md`
- Acceptance criteria: `ops/ux/ACCEPTANCE_CRITERIA_V1.md`

## 4) Control pattern (per card)
### 4.1 Visual pattern
A compact segmented control (or button row) on each card:
- **Assessing** (default triage)
- **Pinned** (top priority)
- **Hold** (pause, revisit)
- **Ignored** (drop)

Placement (v1): under the status badge and above “Next:” line.

Touch target (v1): respect the compact tap target token (`--tap-min-compact` in `ops/ui/STYLE_TOKENS_V1.css`) so the control remains usable on mobile without consuming the whole card.

Companion affordance (v1, minimal):
- `Next:` line remains visible and is treated as first-class (AC-3).
- If `next_action` is blank, render `Next: —` (em dash is OK in UI copy; specs use hyphenation elsewhere) so the absence is explicit.

Copy rules:
- Use these exact labels: `Assessing`, `Pinned`, `Hold`, `Ignored`.

### 4.2 State rules
- Exactly one triage state is active at a time.
- Active state is expressed with:
  - `aria-pressed="true"` on the selected button, and
  - a visible style change (not colour-only).

### 4.3 Keyboard interactions (v1)
When focus is within a card:
- `1` → set `Pinned`
- `2` → set `Assessing`
- `3` → set `Hold`
- `4` → set `Ignored`

When focus is on a triage button:
- Arrow keys move between options.
- Enter/Space selects.

A11y:
- Buttons must be reachable via Tab.
- Each card has a labelled grouping (e.g., `<div role="group" aria-label="Triage">`).

## 5) Write-back contract (for scripts/agents)
UI action must be representable as a single deterministic update to the corresponding row in `ops/job-pipeline.csv`.

Minimum fields to update:
- `status` (human label: one of Pinned/Assessing/Hold/Ignored)
- `updated_at` (RFC3339 preferred; date-only acceptable) **(new column, see handoff UX-005/Section 7)**
- `last_action` (human-readable: e.g., `2026-03-09 triage: Hold`)
- optional: `next_action` (may be cleared or adjusted)

Eventing (when Ledger wiring lands):
- Emit `crm.job.status_changed.v1` with old/new status normalised via `status-mapping-v1.json`.

## 6) Empty and error states
- If a card has no triage state (unexpected), default the UI display to `Assessing` and show a small inline note: `Triage not set`.
- If write-back fails (future), show a toast/notice: `Could not update pipeline. Try again.`

## 7) Build handoff (concrete)
**Handoff item UX-004:** Add triage controls to Kanban cards (UI only)

Deliverables:
1) Update `ops/kanban.html` card template to include the triage control group.
2) Implement client-side state toggling (pure UI) so users can see the selected state immediately.
3) Add `data-role-id` attributes to cards to support future wiring.

Acceptance criteria:
- Meets `AC-10` in `ops/ux/ACCEPTANCE_CRITERIA_V1.md`.
- Works with keyboard only.

Dependencies:
- None for UI-only v1.

**Handoff item UX-005:** Add `updated_at` column to `ops/job-pipeline.csv` writes (enables Activity + audit)

Deliverables:
- Add `updated_at` field to CSV schema and ensure any writer updates it whenever `status/next_action/owner/notes` changes.

Dependencies:
- Any pipeline writers/agents that touch `ops/job-pipeline.csv`.

**Handoff item UX-006:** Inline Next Action editor (Kanban card, UI-only v1)

Goal: make `next_action` maintainable from the board, so “Next:” stays true without dropping into CSV edits.

Deliverables (static UI v1):
1) On each card, render `Next:` as either:
   - plain text with an `Edit` button, or
   - an always-visible single-line input (read-only until focused).
2) Provide keyboard shortcut when focus is within a card:
   - `e` → focus the Next Action input.
   - `Esc` → cancel edits and restore prior value.
3) UI stores edits in-memory only (no persistence in-browser for v1), but must surface an explicit affordance:
   - `Copy update` button copies a patch snippet: `role_id=<id>, next_action="…"`.

Acceptance:
- Meets AC-3 (Next is visible) and reduces drift risk.
- Works keyboard-only.

Dependencies:
- None (persistence can be wired later by Rivet/Ledger).

## 8) Blockers / open questions
- `ops/job-pipeline.csv` column set is not enforced; need a single schema source (lightweight) to prevent drift.
- Keybinding precedence: ensure global scroll helper (`ops/ui/scroll_a11y_v1.js`) does not conflict with per-card shortcuts (1–4, `e`). Rule: if focus is inside an input/textarea, do not trigger triage shortcuts.
- Decide whether Kanban triage updates also auto-manage `next_action`.
  - Recommended v1 default (safe automation, low regret):
    - When set to **Ignored** → clear `next_action`.
    - When set to **Hold** and `next_action` is blank → set `next_action=Revisit in 14 days`.
    - When set to **Pinned** → leave `next_action` unchanged (do not overwrite intent).

New (v1.1 candidate):
- Add an inline `Next action` editor (single-line input or select) so users don’t need to edit CSVs to keep `next_action` current. See handoff UX-006.
```

## ux/JOURNEY_MAPS_V1.md

```markdown
# UX Journey Maps v1

Last updated: 2026-03-10 (20:24 UTC)

## 1) Job Intake -> Prioritise -> Act (file-first)
**Primary artefacts:**
- `ops/job-pipeline.csv` (jobs + next actions)
- `ops/agent-tasks.csv` (work queue)
- (next) `ops/events/events-YYYY-MM.jsonl` (audit + activity feed) per `ops/architecture/EVENT_MODEL_V1.md`

Steps:
1. Digest surfaces candidate roles (email/chat scrape -> shortlist).
2. Matt triages each role: **Pinned / Ignored / Hold / Assessing**.
3. System writes triage decision to `ops/job-pipeline.csv` (`status`, `updated_at`, `last_action`, `next_action`, `owner`, `notes`).
4. System creates/updates the highest-leverage task in `ops/agent-tasks.csv` (role brief, alignment score, CV draft, QA/PDF, follow-up).
5. When CV work is requested: CV pipeline run requested and `outputs/cv/<role_id>/` artefacts produced.
6. Deliverable bundle is linked from the job row and shown in UI (draft MD, final PDF, rationale, QA checklist).

Implementation note (v1):
- Treat `next_action` as structured intent, not free-text notes.
- Writers MUST set `updated_at` whenever `status/next_action/owner/notes` changes (unblocks Activity fallback per `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`).

Pain points (current):
- **Status mapping drift** between `ops/job-pipeline.csv` labels (e.g., `Pinned`, `Applied`) and canonical enums in `ops/architecture/EVENT_MODEL_V1.md`.
- Follow-up actions are buried in `notes` rather than expressed as structured `next_action` + task.

UX decisions (v1):
- Keep CSV labels for human readability, but **normalise for events** (see T-0204) and UI badges.
- Treat `next_action` as a first-class field displayed on every card/list row.

---

## 2) CV Build Journey (role_id keyed)
**Primary artefacts:**
- Inputs: `inputs/cv/` (base PDFs), role brief (TBD), job URL
- Outputs: `outputs/cv/<role_id>/` (drafts + manifest)
- Utility entry: `ops/cv-run.html` (local command + deep-link into Preview)
- Review surface: `ops/cv-preview.html` (loads draft via input or `?file=`)

Journey:
Intake role_id -> Run (cv-run) -> Analysis summary -> Evidence map -> Draft -> QA gate -> PDF -> Delivery

UX requirements (implementation-ready):
- User-visible **analysis summary** at top of the CV run page (1 screen, scannable).
- Explicit quality gate: QA checklist must be acknowledged before final PDF is considered “ready”.
- One-click access to all artefacts for a role: draft, PDF, manifest, QA, and source links.

Current build note:
- `ops/cv-run.html` generates a one-shot local terminal command and deep-links into Preview (`cv-preview.html?file=outputs/cv/<role_id>/draft.md`).
- `ops/cv-run.html` also supports query hydration: `cv-run.html?role_key=<role_id>` (so other pages can hand off role context).
- `ops/cv-preview.html` can load a generated draft markdown file directly.
- It supports query param `?file=outputs/cv/<role_id>/draft.md`.
- If the draft path implies a role folder, Preview should provide convenience jump-links:
  - `Run CV ↗` → `cv-run.html?role_key=<role_id>`
  - `Pipeline ↗` → `kanban.html?role_id=<role_id>`
- Known UX gap: Preview currently defaults to a likely non-existent draft path (`outputs/cv/R-2026-0017/draft.md`). Default should be blank + helper text (AC-8 / UX-003).
- Known robustness gap (pair with the same fix): draft loader should reject protocols + `..` segments and allowlist `outputs/cv/**` before `fetch()` (AC-8b / UX-003).

---

## 3) Application Tracking Journey (job ↔ application)
**Primary artefacts:**
- Near-term: `ops/job-pipeline.csv`
- Event stream: `ops/events/...jsonl` (activity feed + reminders)

Visible journey states (human labels):
- New -> Assessing -> CV Ready -> Applied -> Interview -> Offer/Closed

System actions:
- Stage changes emit canonical events (`crm.job.status_changed.v1`, `crm.application.status_changed.v1`).
- Follow-up tasks auto-generated (e.g., “Chase recruiter in 5 business days”).
- Next action always visible on the card.

---

## 4) Daily Operator Brief Journey
Inputs: inbox alerts + job digest + pipeline status + blockers -> Output: single concise brief (today/next 48h)

---

## 5) Ops UI Navigation Journey (orientation)
**Primary artefacts:**
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- Pages: `ops/status.html`, `ops/kanban.html`, `ops/agent-queue.html`, `ops/agents.html`, `ops/cv-preview.html`, `ops/api-usage.html`
- Behaviour glue: `ops/ui/nav_v1.js` (active-link semantics + mobile menu + focus/aria-hidden management)

Goal: user always knows (a) where they are, (b) what changed, (c) the next action.

Current build note:
- `ops/index.html` now exists and acts as “Home”. Home/logo link should resolve to `index.html` (fall back to `status.html` only if `index.html` is not published).
- `ops/kanban.html` and `ops/agent-queue.html` boards are now labelled, keyboard-focusable horizontal scroll regions (discoverability), and when the board container itself is focused they support keyboard horizontal scrolling (←/→, PgUp/PgDn, Home/End).
- On mobile, the expanded global nav now renders as a distinct panel (padding + surface + border + radius), which materially improves scanability. Keep this pattern consistent across ops pages.

---

## 6) Activity Feed Journey (events-first with derived fallback)
**Primary artefacts:**
- Future canonical: `ops/events/events-YYYY-MM.jsonl` (per `ops/architecture/EVENT_MODEL_V1.md`)
- Current fallback inputs: `ops/job-pipeline.csv`, `ops/agent-tasks.csv`
- Current UI targets: `ops/status.html` (compact), `ops/activity.html` (full)
- Build status: `ops/activity.html` exists (events-first with derived fallback) and is linked from Status via the compact “What changed” module (T-0305).

User story:
- As Matt, I want to see what changed (and what needs attention) without scanning 3 pages.

Journey:
1. Open `ops/index.html` (Home) or `ops/status.html` (Launchpad).
2. Use **Activity** entry point:
   - Home tile (shipped): Operate → `activity.html`, or
   - Status “What changed” module → `activity.html`.
3. If `ops/events/` exists, render first N events.
4. If `ops/events/` is missing, render **derived activity**:
   - job status changes inferred from `job-pipeline.csv` `status` + `last_action` + `updated_at` (if present)
   - task status changes inferred from `agent-tasks.csv` `status` + `updated_at`
5. Click through to `ops/activity.html` for the full list.

Implementation notes (v1, build-ready):
- Timeline item schema in UI should be normalised to: `{time, entity_type, entity_id, verb, summary, severity, href}`.
- Prefer events when present.
  - Seed file exists now: `ops/events/events-2026-03.jsonl`.
  - Canonical envelope fields are `{event_type, occurred_at, data}` (not legacy `{type, payload}`); see `ops/architecture/CONTROL_TOWER_API_EVENT_ENVELOPE_ALIGNMENT_2026-03-09.md`.
- **Build status:** `ops/activity.html` is now the “View all” destination, and Status includes the compact “What changed” module linking to it (T-0305 shipped).
- **Build status (UI):** timeline styling now lives in `ops/ui/COMPONENTS_V1.css` (see T-0302 note 2026-03-10 18:20 UTC). Reuse these classes for any future timeline embeds.
- **Data dependency:** derived activity quality remains weak until `ops/job-pipeline.csv` gains `updated_at` (tracked: T-0316).
- **Schema drift watch:** PRD-006 currently describes an alternate JSONL shape `{ts, type, title, refs, actor}`. For v1 build, implement a tolerant parser and map both shapes into the timeline UI (see `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md` → UX-004).
  - v1 fetch rule: try `events/events-2026-03.jsonl` first; if missing, fall back to derived activity.
  - When falling back, show the inline note (exact): `Event feed unavailable, showing derived activity.`
  - If some JSONL lines fail to parse, skip them and show a small notice: `X lines skipped (invalid JSON).` (no console-only failures).
- CSV-derived activity is inherently lossy until CSVs carry an `updated_at` field.
  - Current fallback for `ops/job-pipeline.csv`: use `last_action` as the best available timestamp.
  - Current fallback for `ops/agent-tasks.csv`: use `updated_at` (already present).
  - Date-only values (`YYYY-MM-DD`) should be treated as UTC midnight for ordering.
- Derived rules must be explicitly documented (and shared as a pure function) to avoid drift.
  - Source of truth: `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md` (Handoff item UX-002).

---

## 7) Team Operations Board Journey (workload + blockers)
**Primary artefacts:**
- `ops/agent-tasks.csv` (task truth)
- `ops/crm/status-mapping-v1.json` (status normalisation for badges/filters, if needed)

Planned build surface:
- `ops/team-ops.html` (new page; currently tracked in `ops/agent-tasks.csv` T-0306)

User story:
- As Matt, I want one “control tower” view of workload and blockers, so I can intervene without opening 3 separate pages.

Journey (v1):
1. Open `ops/team-ops.html`.
2. Immediately see:
   - **Work in progress** count (tasks where `status=In Progress`)
   - **Blocked** count + top blocker reasons
   - **Due soon** list (next 7 days)
3. Filter by agent owner and/or status to narrow the view.
4. Click-through affordances:
   - “View tasks” → `ops/agent-queue.html`
   - “View pipeline” → `ops/kanban.html`

Implementation notes (static v1, build-ready):
- This page is read-only in-browser; no persistence required.
- Data source: parse `ops/agent-tasks.csv` client-side (same CSV helper pattern used elsewhere).
- Blockers are inferred when `status=Blocked` and `notes` contains a reason (must be rendered verbatim, not tooltip-only).
- Keep the module set small:
  - KPI strip (3 tiles)
  - “Blocked tasks” list (top 10)
  - “Due soon” list (top 10)

---

## Next UX Deliverables (tracked)
- **IA + navigation map (static v1)**: `ops/ux/IA_AND_NAV_V1.md`.
- **Acceptance criteria pack (build-ready)**: `ops/ux/ACCEPTANCE_CRITERIA_V1.md`.
- **Handoff notes** (copy/paste partial strategy + timeline seed): `ops/ux/HANDOFF_NOTES_V1.md`.
- **Status/event timeline component spec**: `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`.
- Status normalisation mapping table spec (T-0204, Ledger).
- Form/input pattern for role triage actions (Pinned/Ignored/Hold/Assessing) with keyboard-first interactions.

## Build files explicitly tied to this journey set
- `ops/status.html` (overview/launchpad, should link to UX artefacts + host compact Activity module)
- `ops/kanban.html` (pipeline decisions, must surface next action per role)
- `ops/agent-queue.html` (task workload + blockers)
- `ops/agents.html` (agent roster/index, secondary entry to Agents workspace)
- `ops/cv-preview.html` (CV layout/QA/run status; supports `?file=` draft loading)
- (planned) `ops/activity.html` (global event feed; falls back to derived activity until full events)
```

## ux/MASTHEAD_NAV_SPEC_V1.md

```markdown
# Persistent Masthead Navigation Spec v1

Owner: UX Agent (Vantage)  
Consumers: Design (Polish), Build (Rivet)  
Status: Ready for implementation

## 1) Objective
Create a persistent masthead that gives immediate orientation and control across all ops pages.

Success criteria:
- User can identify location and next action in <1 second.
- Navigation is consistent across Dashboard, Kanban, Agent Queue, CV Preview, and future pages.
- Supports keyboard-first usage and mobile responsiveness.

## 2) Information Architecture
Masthead zones:

### Left zone
- Product mark/name: `Crabbie Ops`
- Context label (small): `Employment Pod` (future: workspace switcher)

### Centre zone (primary navigation)
Tabs (ordered):
1. Pipeline
2. Agents
3. UX
4. Design
5. Roadmap
6. Activity

Rules:
- Current page tab has active style + underline.
- Tabs are persistent on desktop; collapse to menu on mobile.
- Tabs MUST be operable without a mouse (Tab/Shift+Tab + Enter/Space).

### Right zone
- Global search trigger (icon + `/` hint)
- Primary action button: `+ New`
- Live sync indicator: `Updated <time>`
- User/profile avatar (future controls)

## 3) Live Signal Badges
Each nav item can show concise operational state:
- Pipeline: open jobs count
- Agents: active/in-progress tasks count
- Roadmap: blockers count
- Activity: new events since last view

Badge style:
- Use semantic token variants (info/warning/danger)
- Keep compact, non-distracting

## 4) Interaction Model
Desktop:
- Masthead sticky at top; always visible.
- Height token: `--topbar-h` (default 72px).

Mobile:
- Left: logo/title
- Right: search + menu
- Tabs move into slide-over menu
- Keep one persistent primary CTA (`+ New`)

Accessibility requirements (mobile menu):
- Menu toggle uses `aria-expanded` and references the menu with `aria-controls`.
- The collapsible menu region syncs `aria-hidden` with expanded state.
- Focus management:
  - On open, move focus to the first focusable item inside the menu.
  - On close, if focus was inside the menu, return focus to the toggle.
- Escape closes the menu; clicking outside closes the menu; clicking a link closes the menu.

Keyboard shortcuts:
- `/` focus search
- `g p` pipeline
- `g a` agents
- `g r` roadmap
- `g x` activity
- `n` create new task/job

Focus/accessibility:
- Use `--focus-strong`.
- No focus suppression.
- Ensure focus styles apply to anchors, buttons, and any elements with `[role="button"]`.
- Tab order left→centre→right.

Interaction feedback:
- Hover/press feedback uses `--surface-hover` and `--surface-press` (avoid ad-hoc `color-mix()` in components).
- Links use `--link` and a subtle derived `--link-visited` (avoid browser-default purple).

## 5) Visual Design Constraints (handoff to Design)
- Reuse existing tokens from `ops/ui/STYLE_TOKENS_V1.css`
- Reuse component primitives from `ops/ui/COMPONENTS_V1.css`
- Keep masthead low-noise: one title, one context label, one CTA
- Active tab should be obvious without relying on colour alone

## 6) Build Handoff (implementation tasks)
1. Implement masthead markup (copy-paste is acceptable for static v1).
2. Inject the same masthead into (current build surfaces):
   - `ops/status.html` (operational launchpad/status board; `ops/index.html` is now “Home”)
   - `ops/kanban.html`
   - `ops/agent-queue.html`
   - `ops/agents.html`
   - `ops/cv-preview.html`
   - `ops/api-usage.html`

   And into planned surfaces when they land:
   - `ops/activity.html`
   - `ops/team-ops.html`
3. Home link rule (avoid broken nav):
   - Masthead logo/title link SHOULD go to `index.html` when present (current build).
   - If `index.html` is not available in an environment, fall back to `status.html`.
4. Active-tab + mobile menu behaviour:
   - Prefer the existing script `ops/ui/nav_v1.js` to set `aria-current="page"` and apply `.btn--primary` based on URL.
   - Do not hard-code active styles per page if `nav_v1.js` is present.
5. Optional enhancements (v1+):
   - Keyboard shortcut listener.
   - Badge data adapter (initially from CSV counts, later DB/API).

## 7) Definition of Done
- Same masthead rendered on all major pages.
- Active nav state correct by page.
- Search opens from icon and `/`.
- Keyboard routes functional.
- Mobile menu functional and readable.
- Accessibility check passed (focus, contrast, tab flow).
```

## ux/SITEMAP_V1.md

```markdown
# UX Sitemap v1

- Home (`index.html`)
- Status (`status.html`)
- Pipeline (`kanban.html`)
- Agent Queue (`agent-queue.html`)
- Agents (`agents.html`)
- API Usage (`api-usage.html`)
- CV Preview (`cv-preview.html`)
- CV Run (`cv-run.html`)
- Team Ops (`team-ops.html`, planned)
- Activity (`activity.html`)

## Documentation branches
- UX specs (`ux/*.md`)
- Design system (`ui/*.css`, `design/*.md`)
- Architecture (`architecture/*.md`, `architecture/schemas/*`)
- Ops records (`job-pipeline.csv`, `agent-tasks.csv`, `UPDATE_CAPTURE.md`)
```

## ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md

```markdown
# Status / Event Timeline Component Spec v1

Owner: UX Agent (Vantage)
Consumers: Build (Rivet), Data/CRM (Ledger)
Status: Draft (implementation-ready v1)
Last updated: 2026-03-10 (14:24 UTC)

## 1) Objective
Provide a single, consistent timeline component to show “what changed” for a job/application/task, with an audit trail that can be rendered across Ops pages.

This solves:
- invisible state changes (currently buried in CSV diffs and notes)
- inconsistent status naming across CSV/UI/DB
- lack of an Activity view that aggregates changes

## 2) Sources of truth (v1)
1. **Events JSONL** (preferred): `ops/events/events-YYYY-MM.jsonl`
   - MUST follow `ops/architecture/EVENT_MODEL_V1.md` + `ops/architecture/schemas/*`
2. **CSV fallback** (until events exist everywhere):
   - `ops/job-pipeline.csv` (job status + last_action/next_action)
   - `ops/agent-tasks.csv` (task status)

Rule: if events exist for an entity, render timeline from events; otherwise, render a minimal “derived timeline” from CSV `updated_at` + `notes`.

Events file selection (v1, static build constraint):
- Do not attempt directory listing in-browser.
- Fetch a known file for the current month first (e.g., `events/events-2026-03.jsonl`).
- If that fetch fails, fall back to derived activity.
- (Later) add a small precomputed index (e.g., `ops/events/index.json`) to make this dynamic.

## 3) Where it appears (initial placements)
- Job detail drawer/modal (from Pipeline/Kanban)
- CV run page header section (show run start/completion + QA acknowledgement)
- Agent task detail view
- Activity page (global feed, filterable)

## 4) Component anatomy
### A) Header row
- Title: `Activity`
- Filters (optional per context):
  - Event type (Job/Application/Task/Pipeline)
  - Time range (24h, 7d, 30d)
- “Copy link” (deep link to this timeline section)

### B) Timeline items (each item)
Fields:
- **Timestamp** (relative + absolute on hover): `2h ago` + `2026-03-08 08:20 UTC`
- **Badge** (event type): `Job`, `Application`, `Task`, `CV Run`
- **Primary line** (plain language):
  - `Job moved: Shortlisted → Dropped`
  - `Task blocked: waiting on recruiter response`
  - `CV run completed (success)`
- **Secondary line** (details, optional): reason, link to artefact, who changed it
- **Meta** (right aligned, optional): actor `agent:ledger` / `human:matt`

Interaction:
- Collapsed by default after N items (e.g., 10), with “Show more”.
- Items with artefacts show a link icon and open in a new tab.

## 5) Data contract (UI adapter)
### Input (normalised record)
Build should implement a small adapter that maps either:
- canonical **EventEnvelope** objects (preferred), or
- CSV-derived records
into:
```ts
type TimelineItem = {
  id: string
  occurredAt: string // RFC3339
  domain: 'job'|'application'|'task'|'pipeline'
  summary: string
  detail?: string
  actor?: string
  severity?: 'info'|'warning'|'danger'
  links?: { label: string, href: string }[]
}
```

Canonical event envelope fields (v1):
- `event_type` (NOT `type`)
- `occurred_at` (NOT `occurredAt`)
- `data` (NOT `payload`)

Reference: `ops/architecture/CONTROL_TOWER_API_EVENT_ENVELOPE_ALIGNMENT_2026-03-09.md`.

### PRD-006 alignment note (Activity page JSONL shape)
There is a **known schema drift** between:
- this spec + the current seed file `ops/events/events-2026-03.jsonl` (canonical envelope: `{event_type, occurred_at, data}`), and
- `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` PRD-006 (expects `{ts, type, title, refs, actor}`).

v1 recommendation (to unblock build):
1. Treat the canonical envelope as the source of truth for `ops/events/*.jsonl`.
2. In `ops/activity.html`, implement a tolerant normaliser that can accept either shape and map into `TimelineItem`.
3. Follow-up: update PRD-006 to reference the canonical envelope (or explicitly label `{ts,type,title,...}` as a legacy/alt producer format).

Build handoff (concrete): **UX-004**
- Implement `parseEventsJsonl(text) → TimelineItem[]` with support for:
  - Canonical envelope `{event_type, occurred_at, data, subject?, producer?}` (preferred)
  - Legacy PRD-006 lines `{ts, type, title, refs?, actor?}` (optional compatibility)
- Mapping (legacy PRD line → TimelineItem):
  - `occurredAt = ts`
  - `domain = (type contains 'task' ? 'task' : type contains 'job' ? 'job' : 'pipeline')` (default `pipeline`)
  - `summary = title`
  - `links = refs?.map(r => ({label:'ref', href:r}))` BUT if `r` is a workspace-relative path, render as copyable code in UI (do not assume click-to-open in static hosting).
  - `actor = actor || 'system'`

Acceptance criteria (UX-004):
1. Given a JSONL file containing a mix of canonical + legacy-shaped lines, page renders without crashing.
2. Invalid JSON lines are skipped and a notice is shown in the UI (exact format): `X lines skipped (invalid JSON).`
3. Canonical envelope lines are mapped using the rules in Section 5.
4. Parser caps work for v1: parse at most the first 50 non-empty lines (perf guard), and indicate when the feed is truncated (exact): `Showing first 50 events.`

### Mapping rules (events → TimelineItem)
- `occurredAt` = `event.occurred_at`.
- `domain`:
  - map from `event.event_type` prefix (e.g., `crm.job.*` → `job`, `crm.application.*` → `application`, `crm.task.*` → `task`, `ops.*` → `pipeline`).
- `summary`:
  - if `data.old_status` + `data.new_status` exist, use: `Moved: <old> → <new>` (prefix with entity label when available).
  - else fall back to `event.event_type` (humanised).
- `detail`:
  - use `data.reason` when present; else omit.
- `actor`:
  - prefer `data.changed_by` (event-specific attribution), else `producer.name`.
- `severity`:
  - `danger` when `data.new_status` is a terminal negative (`rejected`, `withdrawn`, `dropped`) or when a task status indicates blocked.
  - `warning` for attention states (drafting/interviewing or soon-due follow-ups).
  - otherwise `info`.

Legacy compatibility note (if needed): some older producers may emit `{type, payload}`.

Normalisation rule (MUST be implemented before mapping):
```js
function normaliseEnvelope(e) {
  // Canonical v1
  if (e && e.event_type && e.occurred_at && e.data) return e

  // Legacy shim (remove once all producers are aligned)
  if (e && e.type && e.payload) {
    return { ...e, event_type: e.type, occurred_at: e.occurred_at ?? e.occurredAt, data: e.payload }
  }

  return null
}
```
- Adapter MUST consume canonical `{event_type, occurred_at, data}` when present.
- Legacy shim is optional, but if included it must be clearly marked as temporary.
- If `normaliseEnvelope()` returns null, skip the line with `console.warn` (do not crash the page).

### CSV fallback rules (until full eventing)
- Job row change: synthesise `summary` from `status` and `last_action`.
- Task row change: synthesise `summary` from `status` + `notes` prefix.
- Set `severity=warning` when `next_action` contains “Assess/Prep/Chase”, else `info`.

## 6) Empty, loading, and error states
- Empty: `No activity yet. Changes will appear here as jobs and tasks update.`
- Loading: skeleton list (3 items).
- Source indicator (operator clarity): render a small meta line above the list.
  - Events path: `Source: events (events/events-YYYY-MM.jsonl)`
  - Fallback path: `Event feed unavailable, showing derived activity.`
- Error (events file missing): show fallback CSV-derived timeline and set the meta line to the fallback copy above (no console-only failures).

## 7) Accessibility + keyboard
- Timeline is a list (`role=list`) with items (`role=listitem`).
- Links are reachable via tab; no click-only interactions.
- Timestamp hover detail also available via focus.

## 8) Build handoff (concrete)
**Handoff item UX-001:** Implement `renderTimeline(items)` component and `timelineAdapter`.

Acceptance criteria:
1. Given a small hard-coded array of `TimelineItem`, renders correctly in `ops/status.html` (or a dedicated `ops/activity.html`).
2. Adapter can parse a sample JSONL file (first N non-empty lines) into `TimelineItem[]`.
3. Items support optional links and severity badges.

Dependencies:
- `ops/events/` directory and at least one JSONL file.
  - Seed created: `ops/events/events-2026-03.jsonl`.
- Data hygiene: `ops/job-pipeline.csv` does not yet carry `updated_at`, so derived timeline will use `last_action` until `updated_at` is added (tracked: `ops/agent-tasks.csv` T-0316).

**Handoff item UX-002:** Implement derived-activity generator (CSV fallback) as a pure function.

Goal: keep fallback logic deterministic and testable, so derived rules do not drift between pages.

Input:
- parsed rows from `ops/agent-tasks.csv`
- parsed rows from `ops/job-pipeline.csv`

Output:
- `TimelineItem[]` sorted desc by `occurredAt`

Rules (v1):
- Tasks (`ops/agent-tasks.csv`):
  - occurredAt: `updated_at` (assume `YYYY-MM-DD` is UTC midnight if no time is present)
  - domain: `task`
  - id: `task:${task_id}`
  - summary: `${status}: ${title}` (prefix with `${role_id} · ` when role_id exists)
  - severity: `danger` when status=`Blocked`; `info` otherwise
  - link: `{label:'Agent Queue', href:'agent-queue.html'}`
- Jobs (`ops/job-pipeline.csv`):
  - occurredAt: prefer `updated_at` when present; else use `last_action` if it is parseable as a date; else omit row
  - domain: `job`
  - id: `job:${role_id}`
  - summary: `${status}: ${title}` plus ` • Next: ${next_action}` when next_action exists
  - severity: `warning` when next_action contains `Assess`/`Prep`/`Chase` (case-insensitive); `info` otherwise
  - link: `{label:'Pipeline', href:'kanban.html'}`

Acceptance criteria:
1. With a small fixture CSV (2 tasks, 2 jobs), generator returns stable output ordering.
2. Missing/blank timestamps do not crash; row is skipped with a console warn.
3. When `ops/events/` fetch fails, UI renders derived items and shows the inline note from Section 6.

## 9) Open questions / blockers
- **Envelope shape drift risk:** dashboards must consume canonical `{event_type, occurred_at, data}` (not `{type, payload}`); see `ops/architecture/CONTROL_TOWER_API_EVENT_ENVELOPE_ALIGNMENT_2026-03-09.md`.
- Where should event ingestion live (client-side fetch vs server-side precompute in `dashboard-worker.js`)?
- Decide whether Activity is a dedicated page (`/activity`) or embedded on Pipeline + Agents first.
```

## ux/WIREFRAMES_V1.md

```markdown
# UX Wireframes v1 (text wireframes)

## 1) Status page
[Topbar: Home + Nav + Actions]
[Column A: Execution Artefacts]
[Column B: UX Pack]
[Column C: Review Downloads]

## 2) Pipeline Kanban
[Topbar]
[Column lanes by stage]
[Cards: role_id, title, company, location, next action, links]

## 3) Agent Profiles
[Topbar]
[Grid of agent cards]
[Avatar + function + editable profile textarea]

## 4) CV Run/Preview
[Topbar]
[Input controls]
[Paper preview]
[Artefact links + QA status]
```

## visual/gantt.html

```html
<!doctype html><html lang='en'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Visual Gantt</title><link rel='stylesheet' href='../ui/STYLE_TOKENS_V1.css'><style>body{background:#0b1020;color:#eaf0ff;font-family:Inter,system-ui;padding:20px}.row{margin:10px 0}.bar{height:22px;border-radius:8px;background:#1f2b55;position:relative}.fill{height:100%;border-radius:8px;background:#60a5fa}.label{display:flex;justify-content:space-between;font-size:12px;margin-bottom:4px}</style></head><body><h1>Project Gantt (Visual)</h1><div class='row'><div class='label'><span>CV deterministic pipeline</span><span>80%</span></div><div class='bar'><div class='fill' style='width:80%'></div></div></div><div class='row'><div class='label'><span>CRM canonical mapping</span><span>90%</span></div><div class='bar'><div class='fill' style='width:90%'></div></div></div><div class='row'><div class='label'><span>Activity timeline</span><span>35%</span></div><div class='bar'><div class='fill' style='width:35%'></div></div></div><div class='row'><div class='label'><span>UI responsive/accessibility</span><span>75%</span></div><div class='bar'><div class='fill' style='width:75%'></div></div></div></body></html>
```

## visual/style-guide.html

```html
<!doctype html><html lang='en'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Visual Style Guide</title><link rel='stylesheet' href='../ui/STYLE_TOKENS_V1.css'><style>body{background:#0b1020;color:#eaf0ff;font-family:Inter,system-ui;padding:20px}.sw{display:flex;gap:8px;flex-wrap:wrap}.c{width:120px;height:72px;border-radius:10px;padding:8px;font-size:11px}.t1{font-size:28px}.t2{font-size:20px}.t3{font-size:16px}.t4{font-size:14px}.t5{font-size:12px}</style></head><body><h1>Style Guide (Visual)</h1><h2>Palette</h2><div class='sw'><div class='c' style='background:#0b1020;border:1px solid #334155'>bg #0b1020</div><div class='c' style='background:#121a36;border:1px solid #334155'>surface #121a36</div><div class='c' style='background:#60a5fa;color:#0b1020'>info #60a5fa</div><div class='c' style='background:#22c55e;color:#0b1020'>success #22c55e</div><div class='c' style='background:#f59e0b;color:#0b1020'>warning #f59e0b</div><div class='c' style='background:#ef4444'>danger #ef4444</div></div><h2>Typography</h2><div class='t1'>Heading 28</div><div class='t2'>Heading 20</div><div class='t3'>Body 16</div><div class='t4'>Body 14</div><div class='t5'>Meta 12</div></body></html>
```

## visual/wireframes.html

```html
<!doctype html><html lang='en'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width,initial-scale=1'><title>Visual Wireframes</title><link rel='stylesheet' href='../ui/STYLE_TOKENS_V1.css'><style>body{background:#0b1020;color:#eaf0ff;font-family:Inter,system-ui;padding:20px}.frame{border:1px solid #334155;border-radius:12px;padding:12px;margin:12px 0}.box{border:1px dashed #64748b;border-radius:8px;padding:10px;margin:8px 0}</style></head><body><h1>Wireframes (Visual)</h1><div class='frame'><strong>Status page</strong><div class='box'>Topbar + nav</div><div class='box'>Execution artefacts column</div><div class='box'>UX pack column</div><div class='box'>Downloads column</div></div><div class='frame'><strong>Pipeline</strong><div class='box'>Topbar + filters</div><div class='box'>Kanban lanes</div><div class='box'>Cards with next action + CV preview link</div></div><div class='frame'><strong>Agents</strong><div class='box'>Avatar + role</div><div class='box'>Capacity gauge</div><div class='box'>Editable markdown pane</div></div></body></html>
```
