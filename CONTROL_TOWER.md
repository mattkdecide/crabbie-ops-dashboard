# Squad PM Control Tower

**Last updated:** 2026-03-09 03:36 UTC

## 1) Backlog status changes (since last capture)

### Moved to Done
- **T-0502** BA: Expand PRD-002 AC + edge cases (Tide) → **In Progress → Done**
  - PRD-002 now includes v1 CSV contract, sorting rules, deep-link highlight behaviour, and explicit decision requests.
- **T-0308** Status page: convert list cards to full-card links + add scannable meta copy (Velvet) → **In Progress → Done**
  - Improves scan-ability and hit targets; aligns with `.item--link` pattern.
- **T-0312** Kanban deep-link highlight respects prefers-reduced-motion (Velvet) → **In Progress → Done**
  - `scrollIntoView` only smooth-scrolls when reduced motion is not requested.

### Status changed (important)
- **T-0311** Implement Activity Timeline page (Rivet) → **Backlog → Approved**
  - Build can proceed against PRD-006 + UX handoff notes.

### Notable progress (still In Progress)
- **T-0206** Expand live ops site navigation and artefact links (Rivet) → continues **In Progress**
  - Scope includes consistent nav injection + visible “Latest update” block sourced from `ops/UPDATE_CAPTURE.md`.
- **T-0205** Wire CV pipeline artefact manifest output (Forge) → continues **In Progress**
- **T-0301 / T-0302** Continuous UX + UI streams (Vantage / Velvet) → ongoing incremental shipping.

---

## 2) Top 3 priorities (next 24–48h)

1. **T-0311 – Implement Activity Timeline page (Rivet) [Approved]**
   - Goal: ship `ops/activity.html` events-first feed with CSV-derived fallback, deep links, and visible warning counters.
2. **T-0206 – Live ops site navigation + artefact links (Rivet) [In Progress]**
   - Goal: land nav consistency across ops surfaces + wire “Latest update” block from `ops/UPDATE_CAPTURE.md`.
3. **T-0205 – CV pipeline artefact manifest output (Forge) [In Progress]**
   - Goal: deterministic role_id-keyed outputs + manifest + `qa.json` gating so CV runs become inspectable and automatable.

(Next up: **T-0204** implement the approved canonical CRM status mapping end-to-end.)

---

## 3) Blockers + decision requests

### Decision requests for Matt (to unblock build correctness)
- **PRD-002 (Live Kanban) data contract confirmations**
  1. Confirm required columns v1 for `ops/job-pipeline.csv` (spec proposes: `job_id`, `company`, `role_title`, `stage`; optional: `close_reason`, `location`, `url`, `notes`, `created_at`, `updated_at`).
  2. Confirm unknown stage policy: render in **Unknown** bucket vs forcibly map to **Triage**.
  3. Confirm de-duplication rule for duplicate `job_id`: latest `updated_at` wins vs last-row wins.
- **Paused role work (T-0001–T-0006):** confirm when to restart, and provide the minimum brief inputs needed to proceed.
  - Note: prior bundle decision was “restart u&u track only”, but the work is still blocked on inputs.

### Operational blockers / hygiene
- **Read-model drift:** `ops/read_models/v1/status_summary.json` + `kanban_board.json` currently show empty counts/tasks.
  - Decision ask: treat read models as deprecated (UI reads CSV directly), or add a small publish step that regenerates them so status dashboards remain trustworthy.
- **Stale due dates:** several tasks still carry 2026-03-01/02.
  - Once the next sprint window is confirmed, roll dates forward to restore scheduling signal.

---

## 4) Acceptance criteria updates (make work testable)

### T-0311 (Activity Timeline page) — implementation-ready (build)
- Page exists at `ops/activity.html` and is linked from primary nav.
- Data source selection:
  - Prefer JSONL: `ops/events/events-YYYY-MM.jsonl` for current month; if missing, fall back to latest `ops/events/events-*.jsonl` by filename sort.
  - If no JSONL exists, derive a feed from `ops/job-pipeline.csv` + `ops/agent-tasks.csv`.
- Rendering:
  - Strict reverse-chronological ordering.
  - Invalid JSON lines are skipped and increment a visible warning counter.
  - Entries include deep links where possible:
    - Jobs → `ops/kanban.html#<job_id>`
    - Tasks → `ops/agent-queue.html#<task_id>`
- Empty state guidance when no events and CSV inputs are empty/unreadable.
- Performance target: renders within ~1 second for up to 5,000 events (no O(N^2) DOM build).

### T-0205 (CV pipeline artefact manifest output)
- Produces a single manifest file per run keyed by **role_id** (and timestamp/run_id).
- Manifest enumerates artefacts with **paths + content type + human label** (e.g., `cv.md`, `cv.pdf`, `cover_letter.md`, `qa.json`).
- Includes `qa.json` with, at minimum:
  - relevance checklist (coverage %, critical gaps)
  - formatting checklist (2-page constraint indicator, section order validation)
  - risks/warnings (missing JD fields, low-confidence matches)
- Output paths deterministic under `outputs/cv/<role_id>/<run_id>/...` (align with CV preview path restrictions).

### T-0206 (Live ops site navigation + artefact links)
- Meets **AC-1/AC-6** from `ops/ux/ACCEPTANCE_CRITERIA_V1.md`.
- v1 enforcement method:
  - identical masthead/nav block copy/pasted across pages
  - `nav_v1.js` applies active tab (`aria-current`) automatically (no per-page hard-coded active classes)
- “Latest update” block pulls from `ops/UPDATE_CAPTURE.md` (single source of truth).
- Confirm/fix AC-8 papercut:
  - `ops/cv-preview.html` default path is blank or points to a known-existing example (avoid “broken by default”).
