# Squad PM Control Tower

**Last updated:** 2026-03-08 15:32 UTC

## 1) Backlog status changes (since last capture)

### Moved to Done
- No additional items moved to **Done** since 12:29 UTC capture.

### Status changed (important)
- **T-0206** Expand live ops site navigation + artefact links (Rivet) → **Blocked → Ready**
  - Unblocked per Matt decision: v1 approach = **copy/paste masthead/nav block** across static pages; keep the “source-of-truth” snippet in `ops/ux/MASTHEAD_NAV_SPEC_V1.md`.

### Notable progress (still In Progress)
- **T-0205** CV pipeline artefact manifest output (Forge) → progressing; AC confirmed below.
- **T-0302** Squad UI Designer Continuous (Velvet) → shipped nav/a11y improvements:
  - `nav_v1.js` now applies `aria-current` + active styling automatically.
  - Mobile menu close behaviours (Escape/outside click/link click) + `aria-controls`.
  - Focus-visible underline rule documented + applied.

---

## 2) Top 3 priorities (next 24–48h)

1. **T-0204 – Canonical CRM status mapping spec (Ledger) [Approved]**
   - Goal: lock taxonomy + mapping across CSV/DB/UI so statuses stop drifting.
2. **T-0206 – Live ops site navigation + artefact links (Rivet) [Ready]**
   - Goal: implement masthead/nav v1 copy/paste per `ops/ux/MASTHEAD_NAV_SPEC_V1.md`, then finish AC-6 links on `ops/status.html`.
3. **T-0205 – CV pipeline artefact manifest output (Forge)**
   - Goal: deterministic, role_id-keyed outputs + `qa.json` so CV runs are inspectable and automatable.

---

## 3) Blockers + decision requests

### Decisions (resolved)
- **Status taxonomy (T-0204):** approved by Matt (see `ops/UPDATE_CAPTURE.md`). Proceed to implementation + migration notes.
- **Static masthead/nav approach (T-0206):** approved by Matt. v1 approach = **copy/paste masthead block** across static pages; document the “source-of-truth” snippet in `ops/ux/MASTHEAD_NAV_SPEC_V1.md`.

### Remaining decision requests from Matt
- **Paused role work (T-0001–T-0006):** confirm when to restart, and which single role to resume first (u&u vs Metro) + provide/confirm role brief inputs.

### Operational blockers / hygiene
- **Task list invariant:** `agent-tasks.csv` previously had a duplicate `T-0302` row. Re-check and de-dupe if it reappears so “task_id is unique” remains true.
- **Stale due dates:** many tasks still show 2026-03-01/02. After confirming the next sprint window, roll dates forward so the file regains scheduling signal.

---

## 4) Acceptance criteria updates (make work testable)

### T-0204 (Canonical CRM status mapping spec) — implementation-ready
- Defines canonical enums for Job/Application/Task and a mapping table to:
  - `job-pipeline.csv` statuses
  - `agent-tasks.csv` statuses
  - DB schema (existing + planned)
  - UI labels/badges
- Includes transition rules (allowed next states) and “terminal” states.
- Provides a migration note: what existing rows should map to, plus how to handle unknowns safely.

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
- Masthead/nav consistency is enforced via the agreed v1 method:
  - identical masthead block copy/pasted across pages
  - `nav_v1.js` applies active tab (`aria-current`) automatically
- `ops/status.html` exposes visible links to:
  - Agents docs (`ops/agents/*`)
  - Design roadmap (`ops/design/*`)
  - UX artefacts (`ops/ux/*`)
  - CV pipeline README + latest outputs
- Links resolve locally (file paths) and in published mode (relative URLs) without breakage.
- Includes a single “Latest update” block pulling from `ops/UPDATE_CAPTURE.md` (manual is fine for now).

### T-0304 (Home-link fix + remove per-page active-nav classes)
- Home/logo link MUST resolve to `status.html` (per AC-1a v1 rule) until an `index.html` home exists.
- Remove hard-coded “active” classes from pages and rely on `nav_v1.js` + `aria-current="page"`.
- Confirm `ops/api-usage.html` is included in the primary nav set across pages.

### AC-8 (CV Preview default path) — quick fix
- Update `ops/cv-preview.html` default draft path to either:
  - blank + helper text, or
  - an example file that exists in the repo/site.
