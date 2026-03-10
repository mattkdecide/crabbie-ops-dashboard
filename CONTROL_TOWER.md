# Squad PM Control Tower

**Last updated:** 2026-03-10 09:48 UTC

## 1) Backlog status changes (since last capture)

Capture window: since **2026-03-10 06:48 UTC**.

### Status moved
- **PRD-006 (Activity Timeline)**
  - Grooming state: **Refined → Ready** (confirmed in BA run @ 09:38 UTC).
  - Delivery status: **Backlog → In Progress** (aligned to active delivery work T-0305).

### Newly-visible work / hygiene events
- **T-0312 — Squad Business Analyst Continuous (Tide)**
  - Status: **In Progress** (cron-backed)
  - Scope: maintain PRD backlog + acceptance criteria + change log + task list hygiene.

### Data integrity / system-of-record
- **Resolved (but monitor):** `ops/agent-tasks.csv` previously drifted (missing rows for T-0305/T-0306/T-0307/T-0315). Rows are restored; root cause remains unknown.

---

## 2) Top 3 priorities (next 24–48h)

1. **T-0305 – Activity Timeline page (Rivet) [In Progress]**
   - Ship `ops/activity.html` per PRD-006: events JSONL-first, derived fallback only on load failure, visible error states, perf cap, a11y.
2. **T-0205 – CV pipeline artefact manifest + QA gate (Forge) [In Progress]**
   - Implement PRD-003: `manifest.json`, `qa.json` pass/fail gate, never overwrite prior PDF on QA fail, deterministic role-scoped outputs.
3. **Fix AC-8 gap: CV Preview default path must be blank (Polish/Velvet) [Untracked]**
   - `ops/cv-preview.html` still defaults to `outputs/cv/R-2026-0017/draft.md`.

_Next up (queued): **T-0306 – Team Ops board**: close Review → Done once PRD-005 is strictly met (gauges, movement feed, blockers panel, resilience)._ 

---

## 3) Blockers + decision requests

### Blockers (operational)
- **CV Preview broken-by-default:** violates UX AC-8 until default path is removed/blank.
- **Task system-of-record drift risk:** CSV rows were restored, but we still need a root-cause check to prevent repeat overwrites.

### Decision requests (still open)
- **Paused role work (T-0001–T-0006):** confirm when to restart, and which single role to resume first (u&u vs Metro), plus role brief inputs.
- **PRD-003-DR1 (CV QA gate):** confirm minimum QA checks required to unblock PDF.
- **PRD-006 decision bundle:**
  - DR1: confirm canonical `type` enum list (default: `release`, `decision`, `build`, `data`, `incident`, `task`)
  - DR2: confirm retention window (default: last 30 days)
  - DR3: confirm derived activity behaviour when events exist (default: hide derived when events present; show fallback only on events load failure)
- **PRD-005 decision requests (Team Ops board):**
  - DR1: confirm whether “Approved” is distinct from “Review” in v1 UI (recommend: bucket=Review; chip=Approved)
  - DR2: confirm canonical status buckets to display in gauges (recommend: Backlog, In Progress, Blocked, Review, Done)
- **PRD-001-DR1 (Canonical job record):** confirm canonical required fields list for a “valid job record”.
- **PRD-002-DR1 (Kanban status mapping):** confirm canonical source-of-truth for status alias mapping (recommend: `ops/crm/kanban-status-aliases-v1.json`).

---

## 4) Acceptance criteria updates (make work testable)

Acceptance criteria baseline remains in `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` (PRD-001/002/003/004/005/006) plus UX acceptance criteria (`ops/ux/ACCEPTANCE_CRITERIA_V1.md`).

Updates/signals in this window:
- **PRD-004 expanded to implementation-ready detail** (persistent nav, active-state automation, mobile behaviour, resilience).
- **PRD-006 is now internally consistent for delivery:** grooming Ready + delivery In Progress (matches T-0305).
- **AC-8 remains the most urgent “broken-by-default” UX gap:** CV Preview default input MUST be blank.
