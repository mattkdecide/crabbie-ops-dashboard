# UX Journey Maps v1

Owner: UX (Vantage)
Last updated: 2026-03-08 (22:24 UTC)

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
- `ops/job-pipeline.csv` lacks an `updated_at` field, which makes derived Activity feeds unreliable (timestamp must not be scraped from free-text `last_action`).

UX decisions (v1):
- Keep CSV labels for human readability, but **normalise for events** (see T-0204) and UI badges.
- Treat `next_action` as a first-class field displayed on every card/list row.

---

## 2) CV Build Journey (role_id keyed)
**Primary artefacts:**
- Inputs: `inputs/cv/` (base PDFs), role brief (TBD), job URL
- Outputs: `outputs/cv/<role_id>/` (drafts + manifest)

Journey:
Input -> Analysis summary -> Evidence map -> Draft -> QA gate -> PDF -> Delivery

UX requirements (implementation-ready):
- User-visible **analysis summary** at top of the CV run page (1 screen, scannable).
- Explicit quality gate: QA checklist must be acknowledged before final PDF is considered “ready”.
- One-click access to all artefacts for a role: draft, PDF, manifest, QA, and source links.
- CV Preview draft loader should be **non-broken by default**:
  - default input value blank (or a known-good demo file), not a role-specific path that may not exist.

Current build note:
- `ops/cv-run.html` generates a deterministic pipeline command (copy/paste) and links directly to preview via:
  - `cv-preview.html?file=outputs/cv/<role_key>/draft.md`
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
- Pages: `ops/index.html`, `ops/status.html`, `ops/kanban.html`, `ops/agent-queue.html`, `ops/agents.html`, `ops/cv-preview.html`, `ops/cv-run.html`, `ops/api-usage.html`
- Behaviour glue: `ops/ui/nav_v1.js` (active-link semantics + mobile menu)

Goal: user always knows (a) where they are, (b) what changed, (c) the next action.

Current build note:
- Home/logo link resolves to `index.html` (landing hub).
- `status.html` is treated as the status/artefact board, not the home landing page.

---

## 6) Activity Feed Journey (events-first with derived fallback)
**Primary artefacts:**
- Canonical: `ops/events/events-YYYY-MM.jsonl` (per `ops/architecture/EVENT_MODEL_V1.md`)
- Fallback inputs: `ops/job-pipeline.csv`, `ops/agent-tasks.csv`
- UI targets: `ops/status.html` (compact “What changed”), `ops/activity.html` (full feed)

User story:
- As Matt, I want to see what changed (and what needs attention) without scanning 3 pages.

Journey:
1. Open `ops/status.html`.
2. See “What changed” module (10 most recent items) with `View all →` link.
3. Open `ops/activity.html` for the full list (50 items v1), filterable.
4. Click an item to jump to its working surface with focus:
   - Task → `ops/agent-queue.html?focus=<task_id>` (scroll + highlight)
   - Job → `ops/kanban.html?focus=<role_id>` (scroll + highlight)
   (Build handoff: `ops/ux/HANDOFF_NOTES_V1.md` §1.9–1.10)

Source selection (v1):
- If `ops/events/` exists: render first N events from JSONL.
- Else: render **derived activity**:
  - job changes inferred from `ops/job-pipeline.csv` `status` + `next_action` + `updated_at` (if present)
  - task changes inferred from `ops/agent-tasks.csv` `status` + `updated_at`

Implementation notes (v1, build-ready):
- Normalise UI records to: `{time, entity_type, entity_id, summary, severity, href}`.
- Prefer events when present. Seed file exists: `ops/events/events-2026-03.jsonl`.
- Derived rules (exact) live in `ops/ux/HANDOFF_NOTES_V1.md` Section 1.4, and must be kept in sync with build to prevent drift.
- Data hygiene blocker: `ops/job-pipeline.csv` still lacks `updated_at` (handoff Section 1.8); until added, use `last_action` as best-effort timestamp.

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
- `ops/cv-run.html` (CV command generator; links to preview with correct role_key path)
- (planned) `ops/activity.html` (global event feed; falls back to derived activity until full events)
