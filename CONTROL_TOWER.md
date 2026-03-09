# Squad PM Control Tower

**Last updated:** 2026-03-09 15:37 UTC

## 1) Backlog status changes (since last capture)

_No additional status changes recorded since 2026-03-09 09:36 UTC._

### Moved to Done
- (None captured in this window.)

### Status changed (important)
- (None captured in this window.)

### New / newly-visible delivery work
- (None captured in this window.)

---

## 2) Top 3 priorities (next 24–48h)

1. **T-0305 – Activity Timeline page (Rivet) [In Progress]**
   - Goal: ship `ops/activity.html` per PRD-006 (events JSONL first, derived fallback, error states, perf cap).
2. **T-0206 – Live ops site navigation + artefact links (Rivet) [In Progress]**
   - Goal: implement AC-1 + AC-6 consistently across pages (Home resolves to `index.html`, fallback `status.html`) and ensure artefact links are discoverable.
3. **T-0205 – CV pipeline artefact manifest + QA gate (Forge) [In Progress]**
   - Goal: align outputs to PRD-003 (role-scoped outputs, manifest, `qa.json` pass/fail, hard block PDF unless QA passes, never overwrite prior PDF on QA fail).

_Next up (queued): **T-0306 – Team Operations Board** (Rivet) once Activity Timeline stabilises._

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

_No acceptance criteria changes in this capture window._

Reference set remains:
- PRD-003 (CV Run Flow) — `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`
- PRD-005 (Team Operations Board) — `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`
- PRD-006 (Activity Timeline) — `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`
- Nav + artefact-linking expectations — `ops/ux/ACCEPTANCE_CRITERIA_V1.md` + `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
