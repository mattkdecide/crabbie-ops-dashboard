# Squad PM Control Tower

**Last updated:** 2026-03-10 15:48 UTC

## 1) Backlog status changes (since last capture)

Capture window: since **2026-03-10 12:48 UTC**.

### Status moved
- **T-0305 — Activity Timeline page (PRD-006)**
  - Delivery execution status (agent task): **Blocked → In Progress**.
  - Evidence: `ops/activity.html` now exists and is events-JSONL-first with a derived fallback, plus source/meta + parse diagnostics. Remaining work is now explicitly scoped to a small follow-on UI integration into `ops/status.html` (see task notes).
- **T-0318 — Ops UI: surface focus token**
  - Delivery execution status: **In Progress → Done**.
  - Shipped: `--surface-focus` token + focused-card tint for keyboard users (focus-visible / focus-within) per task notes.

### Newly-visible work / scope surfaced
- **PRD-008 — Job Pipeline `updated_at` Normalisation + Backfill**
  - Added to backlog (implementation-ready AC).
  - Purpose: make Kanban sorting + derived Activity fallback reliable (every pipeline row has a parseable `updated_at`).
- **T-0316 — Add `updated_at` to job-pipeline.csv + backfill existing rows**
  - Reconfirmed as the delivery vehicle for PRD-008; still **Backlog**.

### Hygiene / alignment
- **Control Tower vs system-of-record:** `ops/agent-tasks.csv` is authoritative for execution status. This update aligns T-0305 to **In Progress** per latest CSV notes.

---

## 2) Top 3 priorities (next 24–48h)

1. **Finish T-0305 – Activity Timeline page (Build) [In Progress]**
   - Complete the remaining integration: add the compact “What changed” module on `ops/status.html` with a clear “View all → Activity” path (per `ops/ux/HANDOFF_NOTES_V1.md` §1.4–1.6).
   - Validate: events JSONL loads reliably; derived fallback only when events fail; user-visible diagnostics are concise.
2. **T-0317 – CV Preview hardening (Build) [Backlog]**
   - Implement PRD-007: blank default input, strict allowlist `outputs/cv/**`, reject traversal/protocols, safe error + a11y status states, escape-first markdown rendering.
3. **T-0316 / PRD-008 – `job-pipeline.csv` updated_at backfill (CRM) [Backlog]**
   - Add canonical `updated_at` column + non-destructive backfill rules.
   - This directly improves Kanban ordering and makes derived Activity fallback meaningful.

_Next up (queued): close out **T-0306 – Team Ops board** (Review) once PRD-005 is strictly met (gauges, movement feed, blockers panel, resilience)._ 

---

## 3) Blockers + decision requests

### Blockers (operational)
- **Status surface doesn’t yet surface Activity summary:** T-0305 is unblocked, but the last-mile “What changed” status module is still missing, so operators won’t naturally discover Activity.
- **CV Preview broken-by-default + security gap remains:** CV Preview loader still needs PRD-007 hardening (T-0317).
- **Derived recency depends on `updated_at`:** until PRD-008/T-0316 lands, derived Activity fallback and sorting can’t be relied on for true recency across all jobs.

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
  - DR1: confirm whether PDF preview (`outputs/cv/<role_id>/cv.pdf`) should be supported here or remain markdown-only v1.
  - DR2: confirm maximum draft size threshold + truncation behaviour (recommend: warn at 1 MB, truncate at 250k chars).
- **PRD-008 decision requests (`updated_at` backfill rules):**
  - DR1: confirm proxy precedence for backfill (recommend: documented fixed precedence list + pick latest parseable within it).
  - DR2: confirm required timestamp format (recommend: ISO-8601 UTC `YYYY-MM-DDTHH:MM:SSZ`).
- **PRD-001-DR1 (Canonical job record):** confirm canonical required fields list for a “valid job record”.
- **PRD-002-DR1 (Kanban status mapping):** confirm canonical source-of-truth for status alias mapping (recommend: a single JSON mapping file shared by Kanban + derived Activity).

---

## 4) Acceptance criteria updates (make work testable)

Acceptance criteria baseline remains in `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` (PRD-001/002/003/004/005/006/007/008) plus UX acceptance criteria (`ops/ux/ACCEPTANCE_CRITERIA_V1.md`).

Updates/signals in this window:
- **PRD-008 added and is implementation-ready:** AC now makes `updated_at` canonical (single sorting timestamp), specifies non-destructive backfill rules, and requires visible diagnostics for missing/invalid timestamps.
- **PRD-006 dependency clarified:** derived Activity fallback reliability now explicitly depends on `ops/job-pipeline.csv` having parseable `updated_at` (ties PRD-006 to PRD-008 / T-0316).
