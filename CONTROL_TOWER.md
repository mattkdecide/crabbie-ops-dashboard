# Squad PM Control Tower

**Last updated:** 2026-03-10 06:48 UTC

## 1) Backlog status changes (since last capture)

Capture window: since **2026-03-09 18:40 UTC**.

### Status moved
- (No confirmed status moves captured in this window.)

### Newly-visible work / hygiene events
- **T-0312 — Squad Business Analyst Continuous (Tide)**
  - Status: **In Progress** (cron-backed)
  - Scope: maintain PRD backlog + acceptance criteria + change log + task list hygiene.

### Data integrity alert (needs attention)
- **`ops/agent-tasks.csv` was missing rows for T-0305 / T-0306 / T-0307 / T-0315** despite being referenced in Control Tower + Update Capture history.
  - Impact: Team Ops / Agent Queue / any derived reporting will undercount or mislead.
  - Action taken (this run): **restored those rows** to re-align the task system-of-record.
  - Follow-up: confirm whether any other task rows were lost, and whether a publish step overwrote the file.

### Notable progress signals (notes updated)
- **T-0301 (UX continuous) + T-0302 (UI continuous)**: acceptance criteria and UI implementation notes were updated to include keyboard horizontal scrolling, visible scrollbars, and robust `aria-busy`/error notices.

---

## 2) Top 3 priorities (next 24–48h)

1. **T-0305 – Activity Timeline page (Rivet) [In Progress]**
   - Ship `ops/activity.html` per PRD-006: events JSONL-first, derived fallback on load failure only, visible error states, perf cap, a11y.
2. **T-0205 – CV pipeline artefact manifest + QA gate (Forge) [In Progress]**
   - Implement PRD-003: `manifest.json`, `qa.json` pass/fail gate, never overwrite prior PDF on QA fail, deterministic role-scoped outputs.
3. **Fix AC-8 gap: CV Preview default path must be blank (Polish/Velvet) [Untracked]**
   - Current `ops/cv-preview.html` still defaults to `outputs/cv/R-2026-0017/draft.md`.
   - This is explicitly called out as a “broken by default” issue in UX AC.

_Next up (queued): **T-0306 – Team Ops board**: close Review to Done once PRD-005 is strictly met (gauges, movement feed, blockers panel, resilience)._ 

---

## 3) Blockers + decision requests

### Blockers (operational)
- **Task system-of-record drift:** missing rows in `ops/agent-tasks.csv` (restored, but root cause unknown).
- **CV Preview broken-by-default:** violates UX AC-8 until default path is removed/blank.

### Decision requests (still open)
- **Paused role work (T-0001–T-0006):** confirm when to restart, and which single role to resume first (u&u vs Metro), plus role brief inputs.
- **PRD-003-DR1 (CV QA gate):** confirm minimum QA checks required to unblock PDF.
- **PRD-006 decision bundle:**
  - DR1: confirm canonical `type` enum list (recommended: `release`, `decision`, `build`, `data`, `incident`, `task`)
  - DR2: confirm retention window (recommended: last 30 days)
  - DR3: confirm derived activity behaviour when events exist (recommended: hide derived when events present; show only on events load failure)
- **PRD-005 decision requests (Team Ops board):**
  - DR1: confirm whether “Approved” is distinct from “Review” in v1 UI (recommend: bucket=Review; chip=Approved)
  - DR2: confirm canonical status buckets to display in gauges (recommend: Backlog, In Progress, Blocked, Review, Done)
- **PRD-001-DR1 (Canonical job record):** confirm canonical required fields list for a “valid job record”.
- **PRD-002-DR1 (Kanban status mapping):** confirm canonical source-of-truth for status alias mapping (recommend: `ops/crm/kanban-status-aliases-v1.json`).

---

## 4) Acceptance criteria updates (make work testable)

Acceptance criteria baseline remains in `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` (PRD-001/002/003/005/006) plus UX acceptance criteria (`ops/ux/ACCEPTANCE_CRITERIA_V1.md`).

Updates/signals in this window:
- **UX AC now explicitly includes keyboard horizontal scrolling bindings** for Kanban + Agent Queue board regions (←/→, PgUp/PgDn, Home/End) and requires visible focus rings on the scroll region.
- **Visible scrollbar styling tokens** were added/used for both `.board` and `.table-wrap` to improve horizontal-scroll discoverability.
- **AC-8 is now an explicit, testable requirement**: CV Preview default input MUST be blank (no non-existent default path).

No PRD text edits captured in this run (this was a control-tower refresh + hygiene fix).
