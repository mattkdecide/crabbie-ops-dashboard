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
