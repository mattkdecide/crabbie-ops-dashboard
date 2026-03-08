# Squad PM Control Tower

**Last updated:** 2026-03-08 18:34 UTC

## 1) Backlog status changes (since last capture)

### Moved to Done
- **T-0204** Implement canonical CRM status mapping spec (Ledger) → **Approved/Ready → Done**
  - Delivered: `ops/crm/STATUS_MAPPING_V1.md` + `ops/crm/status-mapping-v1.json`.

### Status changed (important)
- **T-0206** Expand live ops site navigation + artefact links (Rivet) → **Blocked → Ready**
  - Blocker resolved: v1 approach is **copy/paste shared masthead/nav block** across static pages.

### Notable progress (still In Progress)
- **T-0205** CV pipeline artefact manifest output (Forge) → progressing; AC confirmed below.
- **T-0303** Spec + handoff for derived Activity feed (Vantage) → in progress; PRD-006 is implementation-ready.
- **T-0304** Implement masthead home-link fix + nav_v1.js wiring (Rivet) → in progress.

---

## 2) Top 3 priorities (next 24–48h)

1. **T-0205 – CV pipeline artefact manifest output (Forge)**
   - Goal: deterministic, role_id-keyed outputs + `qa.json` so CV runs are inspectable and automatable.
2. **T-0206 – Live ops site navigation + artefact links (Rivet) [Ready]**
   - Goal: implement AC-1/AC-6 links on `ops/status.html` and ensure published-mode relative URLs are correct.
3. **T-0305 – Activity Timeline page (Rivet) [Ready]**
   - Goal: ship `ops/activity.html` events-first JSONL reader with derived fallback (PRD-006).

---

## 3) Blockers + decision requests

### Decisions (resolved)
- **Status taxonomy (T-0204):** locked and implemented. Source-of-truth: `ops/crm/STATUS_MAPPING_V1.md`.
- **Static masthead/nav approach (T-0206):** locked. v1 method = **copy/paste masthead block** across static pages (with `nav_v1.js` handling active tab styling).

### Remaining decision requests from Matt
- **Paused role work (T-0001–T-0006):** confirm when to restart, and which single role to resume first (u&u vs Metro) + provide/confirm role brief inputs.

### Operational blockers / hygiene
- **Task list invariant:** keep `agent-tasks.csv` “task_id is unique” (watch for accidental duplicates).
- **Stale due dates:** many tasks still show 2026-03-01/02. Once the next sprint window is agreed, roll dates forward so the file regains scheduling signal.

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

### T-0206 (Live ops site navigation + artefact links)
- Meets AC-1/AC-6 from `ops/ux/ACCEPTANCE_CRITERIA_V1.md`.
- Masthead/nav consistency is enforced via v1 method:
  - identical masthead block copy/pasted across pages
  - `nav_v1.js` applies active tab (`aria-current`) automatically
- `ops/status.html` exposes visible links to:
  - Agents docs (`ops/agents/*`)
  - Design roadmap (`ops/design/*`)
  - UX artefacts (`ops/ux/*`)
  - CV pipeline README + latest outputs
- Links resolve locally (file paths) and in published mode (relative URLs) without breakage.
- Includes a single “Latest update” block pulling from `ops/UPDATE_CAPTURE.md` (manual is fine for now).

### T-0305 (Activity Timeline page: PRD-006)
- Ships `ops/activity.html` and adds it to primary nav.
- Reads from `ops/events/events-YYYY-MM.jsonl` when present; each line is an independent JSON object.
- Safe parsing: bad lines are skipped (console warning), page never hard-fails.
- Fallback: when events file missing/empty, render derived items from:
  - `ops/agent-tasks.csv` (status + updated_at)
  - `ops/job-pipeline.csv` (pipeline snapshot)
- Renders newest-first, grouped by day, with simple keyword filter across `summary`/`type`.
- Clear empty state if neither source is available.
