# Squad PM Control Tower

**Last updated:** 2026-03-09 00:36 UTC

## 1) Backlog status changes (since last capture)

### Moved to Done
- **T-0303** Spec + handoff for derived Activity feed (Vantage) → **In Progress → Done**
  - PRD-006 now contains implementation-ready AC + edge cases.
  - Seed events file exists: `ops/events/events-2026-03.jsonl`.

### Status changed (important)
- **T-0206** Expand live ops site navigation and artefact links (Rivet) → **Blocked → In Progress**
  - Unblocked by Matt decision: v1 approach = **copy/paste masthead/nav** across static pages; `nav_v1.js` handles active-tab state.

### Notable progress (still In Progress)
- **T-0301** Squad UX Strategist Continuous (Vantage) → updated IA + AC to reflect `ops/index.html` as Home and expanded page scope.
- **T-0302** Squad UI Designer Continuous (Velvet) → shipped additional accessibility + responsiveness tweaks and improved `index.html` and `cv-run.html` UX.

---

## 2) Top 3 priorities (next 24–48h)

1. **T-0204 – Canonical CRM status mapping spec (Ledger) [Approved]**
   - Goal: implement the approved taxonomy end-to-end (CSV/DB/UI) and document migration notes.
2. **T-0206 – Live ops site navigation + artefact links (Rivet) [In Progress]**
   - Goal: land AC-1/AC-6 consistently across all ops pages, plus a visible “Latest update” block sourced from `ops/UPDATE_CAPTURE.md`.
3. **T-0205 – CV pipeline artefact manifest output (Forge) [In Progress]**
   - Goal: deterministic role_id-keyed outputs + `qa.json` so CV runs become inspectable and automatable.

---

## 3) Blockers + decision requests

### Remaining decision requests from Matt
- **Paused role work (T-0001–T-0006):** confirm when to restart, and which single role to resume first (u&u vs Metro) + confirm/provide role brief inputs.

### Operational blockers / hygiene
- **Read-model drift:** `ops/read_models/v1/status_summary.json` + `kanban_board.json` currently show empty counts/tasks despite `agent-tasks.csv` and `job-pipeline.csv` having data.
  - Decision ask (lightweight): do we treat read models as deprecated (UI reads CSV directly), or add a small publish step that regenerates them so status dashboards remain trustworthy?
- **Stale due dates:** several tasks still carry 2026-03-01/02. After confirming the next sprint window, roll forward dates to restore scheduling signal.

---

## 4) Acceptance criteria updates (make work testable)

### T-0204 (Canonical CRM status mapping spec) — implementation-ready
- Canonical enums + mapping table for:
  - `job-pipeline.csv` statuses
  - `agent-tasks.csv` statuses
  - DB schema fields (existing + planned)
  - UI labels/badges
- Transition rules (allowed next states) + terminal states.
- Unknown-handling rule: unknown statuses never crash renders; they display as “Unknown” and are flagged.
- Migration note: how existing rows map, and what to do with non-conforming legacy values.

### T-0205 (CV pipeline artefact manifest output)
- Produces a single manifest file per role run keyed by **role_id** (and timestamp/run_id).
- Manifest enumerates artefacts with **paths + content type + human label** (e.g., `cv.md`, `cv.pdf`, `cover_letter.md`, `qa.json`).
- Includes a `qa.json` with at minimum:
  - relevance checklist (coverage %, critical gaps list)
  - formatting checklist (2-page constraint indicator, section order validation)
  - risks/warnings (missing JD fields, low-confidence matches)
- Output paths are deterministic under a single directory, e.g. `outputs/cv/<role_id>/<run_id>/...` (align with CV preview path restrictions).

### T-0206 (Live ops site navigation + artefact links)
- Meets **AC-1/AC-6** from `ops/ux/ACCEPTANCE_CRITERIA_V1.md`.
- v1 enforcement method:
  - identical masthead/nav block copy/pasted across pages
  - `nav_v1.js` applies active tab (`aria-current`) automatically (no per-page hard-coded active classes)
- `ops/status.html` exposes visible links to:
  - agents docs (`ops/agents/*`)
  - design artefacts (`ops/design/*`)
  - UX artefacts (`ops/ux/*`)
  - CV pipeline README + latest outputs
- Add/confirm AC-8 fix (from UX AC v1):
  - `ops/cv-preview.html` default path must be blank or point to a known-existing example (avoid “broken by default”).

### T-0303 (Derived Activity feed spec + handoff) — now Done
- Delivery complete at the spec layer:
  - PRD-006 expanded into implementation-ready AC and edge cases.
  - Seed events file exists.
- Next build work (implementation) should satisfy **AC-5** (Timeline renders from events JSONL; falls back to derived CSV with the inline note).
