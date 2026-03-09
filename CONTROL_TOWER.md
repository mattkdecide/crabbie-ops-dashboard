# Squad PM Control Tower

**Last updated:** 2026-03-09 18:40 UTC

## 1) Backlog status changes (since last capture)

Capture window: since **2026-03-09 15:37 UTC**.

### Moved to Done
- **T-0315 — Ops UI: add scroll-snap for kanban board columns (Velvet)**
  - Status: In Progress → **Done**
  - Notes: scroll-snap for `.board` columns + documented guidance in `ops/ui/DESIGN_LANGUAGE_V1.md`.

### Status changed (important)
- **T-0306 — Implement Team Operations Board page (Rivet)**
  - Status: In Progress → **Review**
  - Focus for review: PRD-005 compliance (gauges, movement feed, blockers panel, load-failure shell) and status-mapping alignment.

### New / newly-visible delivery work
- (No new task IDs created in this window.)

---

## 2) Top 3 priorities (next 24–48h)

1. **T-0305 – Activity Timeline page (Rivet) [In Progress]**
   - Goal: ship `ops/activity.html` per PRD-006 (events JSONL first; derived fallback; visible error states; perf cap; a11y).
2. **T-0205 – CV pipeline artefact manifest + QA gate (Forge) [In Progress]**
   - Goal: align outputs to PRD-003 (role-scoped outputs, manifest, `qa.json` pass/fail, hard block PDF unless QA passes, never overwrite prior PDF on QA fail).
3. **T-0306 – Team Operations Board (Rivet) [Review]**
   - Goal: close review with a strict PRD-005 pass, then mark Done (surface exists + loads from `ops/agent-tasks.csv` + blockers/feed behave correctly).

_Next up (queued): **T-0206 – Live ops site navigation + artefact links** (Rivet) once Activity + Team Ops are stable._

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
- **PRD-001-DR1 (Canonical job record):** confirm canonical required fields list for a “valid job record”.
- **PRD-002-DR1 (Kanban status mapping):** confirm canonical source-of-truth for status alias mapping (recommend: `ops/crm/kanban-status-aliases-v1.json`).

### Operational blockers / hygiene
- **Task list invariant:** `agent-tasks.csv` previously had a duplicate `T-0302` row. Re-check and de-dupe if it reappears so “task_id is unique” remains true.
- **Stale due dates:** many tasks still show early-March dates. Once the next sprint window is confirmed, roll dates forward so the file regains scheduling signal.

---

## 4) Acceptance criteria updates (make work testable)

Acceptance criteria baseline remains in `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` (PRD-003/005/006) plus UX acceptance criteria (`ops/ux/ACCEPTANCE_CRITERIA_V1.md`).

Newly reinforced (by recent shipped UI work) as “don’t regress” constraints:
- **Horizontal-scroll discoverability** is now treated as explicit AC for board-like UIs (Kanban + Agent Queue): board must be labelled, keyboard-focusable, and show a visible focus ring when focused.
- **Primary nav a11y state management**: `nav_v1.js` must not leave `aria-hidden="true"` applied on desktop breakpoints; must re-sync on resize.

_No PRD acceptance-criteria text changes captured in this window (this is a status capture + reinforcement note only)._