# UX Journey Maps v1

Last updated: 2026-03-09 (16:28 UTC)

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
- Behaviour glue: `ops/ui/nav_v1.js` (active-link semantics + mobile menu + focus/aria-hidden management)

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
