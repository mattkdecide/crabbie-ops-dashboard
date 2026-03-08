# Squad PM Control Tower

**Last updated:** 2026-03-08 11:17 UTC

## 1) Backlog status changes (since last capture)

### Moved to Done
- No additional items moved to **Done** since 08:17 UTC capture.

### Status changed (important)
- **T-0206** Expand live ops site navigation and artefact links (Rivet) → **In Progress → Blocked**
  - Blocker captured in task notes: need an agreed approach for sharing masthead/nav across static HTML pages (partials vs copy/paste).

### Notable progress (still In Progress)
- **T-0302** Squad UI Designer Continuous (Velvet) → continued iteration on ops UI surfaces (responsive layout, a11y affordances, masthead/sticky offset standardisation).

---

## 2) Top 3 priorities (next 24–48h)

1. **T-0205 – CV pipeline artefact manifest output (Forge)**
   - Goal: deterministic, role_id-keyed outputs + `qa.json` so CV runs are inspectable and automatable.
2. **T-0204 – Canonical CRM status mapping spec (Ledger)**
   - Goal: unify taxonomy across CSV/DB/Kanban/UI to prevent drift and rework.
3. **Unblock T-0206 – Static nav reuse decision (Rivet + Velvet)**
   - Goal: pick the simplest v1 approach for consistent masthead/nav across `status.html`, `kanban.html`, `agent-queue.html`, `cv-preview.html` so we can keep shipping.

---

## 3) Blockers + decision requests

### Decisions needed from Matt
1. **Status taxonomy final call (unblocks T-0204):**
   - Confirm the canonical set for *Job/Application/Task* lifecycles.
   - Proposed minimal set (edit as needed):
     - **Job:** Identified → Shortlisted → Dropped
     - **Application:** Not started → Drafting → Submitted → Interviewing → Offer → Rejected → Withdrawn
     - **Task:** Backlog → In Progress → Blocked → Done
2. **Static masthead/nav implementation approach (unblocks T-0206):**
   - Recommend for v1: **copy/paste the masthead block** into each static HTML page and keep it “source-of-truth” documented in `ops/ux/MASTHEAD_NAV_SPEC_V1.md`.
   - Alternative: lightweight build step/templating (adds overhead, but avoids drift).
3. **Resume paused role work? (affects T-0001–T-0006):**
   - Keep on hold, or pick one role to restart (u&u vs Metro) and provide/confirm the role brief inputs.
4. **Jobgether “Head of Marketing” go/no-go (affects T-0115–T-0117):**
   - Proceed with identity validation + role brief, or deprioritise until more signal.

### Operational blockers
- **Task list hygiene:** `agent-tasks.csv` currently contains a duplicate `T-0302` row (same task_id twice). Decide whether to de-dupe to preserve “task_id is unique” invariant.
- **Due dates in `agent-tasks.csv` are stale** (many are 2026-03-01/02). After priority confirmation, roll them forward to restore scheduling signal.

---

## 4) Acceptance criteria updates (make work testable)

### T-0205 (CV pipeline artefact manifest output)
- Produces a single manifest file per role run, keyed by **role_id** (and timestamp/run_id).
- Manifest enumerates artefacts with **paths + content type + human label** (e.g., `cv.md`, `cv.pdf`, `cover_letter.md`, `qa.json`).
- Includes a `qa.json` with at minimum:
  - relevance checklist (requirements coverage %, critical gaps list)
  - formatting checklist (2-page constraint indicator, section order validation)
  - risks/warnings (missing JD fields, low-confidence matches)
- Output paths are deterministic under a single directory, e.g. `ops/cv-pipeline/out/<role_id>/<run_id>/...`.

### T-0204 (Canonical CRM status mapping spec)
- Defines canonical enums for Job/Application/Task and a mapping table to:
  - `agent-tasks.csv` statuses
  - DB schema (existing + planned)
  - UI labels/badges
- Includes transition rules (allowed next states) and “terminal” states.
- Provides a short migration note: what existing rows should map to.

### T-0206 (Live ops site navigation + artefact links)
- Meets AC-1/AC-6 from `ops/ux/ACCEPTANCE_CRITERIA_V1.md`.
- `ops/status.html` exposes visible links to:
  - Agents docs (`ops/agents/*`)
  - Design roadmap (`ops/design/*`)
  - UX artefacts (`ops/ux/*`)
  - CV pipeline README + latest outputs
- Links resolve locally (file paths) and in published mode (relative URLs) without breakage.
- Includes a single “Latest update” block pulling from `ops/UPDATE_CAPTURE.md` (manual is fine for now).

### T-0303 (Derived Activity feed spec + handoff)
- `ops/ux/HANDOFF_NOTES_V1.md` section 1.4 is implemented as either:
  - an `ops/activity.html` page, or
  - a module rendered inside `ops/status.html`.
- If `ops/events/events-YYYY-MM.jsonl` exists, timeline renders from it.
- If it does not exist, timeline renders from derived sources and shows:
  - `Event feed unavailable, showing derived activity.`
