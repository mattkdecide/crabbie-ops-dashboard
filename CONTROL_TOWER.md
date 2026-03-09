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
