# Squad PM Control Tower

**Last updated:** 2026-03-10 12:48 UTC

## 1) Backlog status changes (since last capture)

Capture window: since **2026-03-10 09:48 UTC**.

### Status moved
- **T-0305 — Activity Timeline page (PRD-006)**
  - Delivery execution status (agent task): **In Progress → Blocked**.
  - Reason (current): `ops/activity.html` not yet published; awaiting build capacity to implement per `ops/ux/HANDOFF_NOTES_V1.md` §1.4–1.6 and nav promotion gating §1.13.

### Newly-visible work / scope surfaced
- **PRD-007 — CV Preview Loader Hardening + Blank Default**
  - Added to backlog (implementation-ready AC).
  - Delivery status: **Backlog** (Ready).
- **T-0317 — CV Preview: blank default + path allowlist + traversal/protocol hardening**
  - Status: **Backlog** (created by BA run @ 12:38 UTC).

### Hygiene / alignment
- **Control Tower vs system-of-record:** prior Control Tower capture showed T-0305 as In Progress; `ops/agent-tasks.csv` now reflects Blocked. This update treats CSV as authoritative for execution status.

---

## 2) Top 3 priorities (next 24–48h)

1. **Unblock T-0305 – Activity Timeline page (Rivet) [Blocked]**
   - Ship `ops/activity.html` per PRD-006: events JSONL-first, derived fallback only on load failure, visible error states + parse diagnostics, perf cap, a11y.
   - If capacity is tight: ship the shell + JSONL load + error handling first, then derived fallback.
2. **T-0317 – CV Preview hardening (Build) [Backlog]**
   - Implement PRD-007: blank default input, strict allowlist `outputs/cv/**`, reject traversal/protocols, safe error states.
3. **T-0205 – CV pipeline artefact manifest + QA gate (Forge) [In Progress]**
   - Implement PRD-003: `manifest.json`, `qa.json` pass/fail gate, never overwrite prior PDF on QA fail, role-scoped outputs.

_Next up (queued): close out **T-0306 – Team Ops board** (currently Review) only once PRD-005 is strictly met (gauges, movement feed, blockers panel, resilience)._ 

---

## 3) Blockers + decision requests

### Blockers (operational)
- **T-0305 blocked:** Activity surface not yet published; build capacity / sequencing required.
- **CV Preview broken-by-default + security gap:** default path still risks misleading operators and needs loader hardening (PRD-007 / T-0317).
- **Task system-of-record drift risk:** `ops/agent-tasks.csv` previously drifted (missing rows). Rows are restored, but we still need a root-cause check to prevent repeat overwrites.

### Decision requests (open)
- **Paused role work (T-0001–T-0006):** confirm when to restart, and which single role to resume first (u&u vs Metro), plus role brief inputs.
- **PRD-003-DR1 (CV QA gate):** confirm minimum QA checks required to unblock PDF.
- **PRD-006 decision bundle:**
  - DR1: confirm canonical `type` enum list (default: `release`, `decision`, `build`, `data`, `incident`, `task`)
  - DR2: confirm retention window (default: last 30 days)
  - DR3: confirm derived activity behaviour when events exist (default: hide derived when events present; show fallback only on events load failure)
- **PRD-005 decision requests (Team Ops board):**
  - DR1: confirm whether “Approved” is distinct from “Review” in v1 UI (recommend: bucket=Review; chip=Approved)
  - DR2: confirm canonical status buckets to display in gauges (recommend: Backlog, In Progress, Blocked, Review, Done)
- **PRD-007 decision requests (CV Preview loader):**
  - DR1: confirm whether PDF preview (`outputs/cv/<role_id>/cv.pdf`) should be supported here or remain markdown-only (recommend: markdown-only v1).
  - DR2: confirm maximum draft size threshold + truncation behaviour (recommend: warn at 1 MB, truncate at 250k chars).
- **PRD-001-DR1 (Canonical job record):** confirm canonical required fields list for a “valid job record”.
- **PRD-002-DR1 (Kanban status mapping):** confirm canonical source-of-truth for status alias mapping (recommend: `ops/crm/kanban-status-aliases-v1.json`).

---

## 4) Acceptance criteria updates (make work testable)

Acceptance criteria baseline remains in `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` (PRD-001/002/003/004/005/006/007) plus UX acceptance criteria (`ops/ux/ACCEPTANCE_CRITERIA_V1.md`).

Updates/signals in this window:
- **PRD-007 added and is implementation-ready:** AC now explicitly covers allowlist (`outputs/cv/**`), traversal + protocol rejection, query-param safety, a11y state announcements, and safe markdown rendering.
- **Execution note:** treat `ops/agent-tasks.csv` as system-of-record for task execution status; Control Tower mirrors it (this update corrected T-0305).
