# UX Handoff Notes v1 (Build + Design)

Owner: UX (Vantage)
Last updated: 2026-03-08 (20:25 UTC)

This is a practical handoff note intended to reduce ambiguity for build work.

---

## 1) What to implement next (in order)
### 1.1 Implement the masthead (copy-paste first)
Source spec: `ops/ux/MASTHEAD_NAV_SPEC_V1.md`

Target pages:
- `ops/status.html`
- `ops/kanban.html`
- `ops/agent-queue.html`
- `ops/agents.html`
- `ops/cv-preview.html`
- `ops/cv-run.html`
- `ops/api-usage.html` (currently in the primary nav; keep consistent)

Implementation approach (static HTML v1):
- Replace current `.topbar` blocks with a masthead component.
- If a shared partial is not available, accept copy-paste duplication for v1 but keep the markup identical.
- Ensure active tab is correct per page.

Design dependencies:
- Use existing tokens: `ops/ui/STYLE_TOKENS_V1.css`
- Use primitives: `ops/ui/COMPONENTS_V1.css`

Known blocker:
- Task `T-0206` notes a partial/template strategy is not yet agreed.

### 1.2 Add Activity timeline (minimal seed)
Source spec: `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`

Option A (recommended): create `ops/activity.html` and render timeline there first.
Option B: embed a compact timeline module on `ops/status.html`.

Minimal v1 is acceptable:
- Render 10 items.
- Support empty/missing states.
- Hard-code sample data until `ops/events/` exists.

### 1.3 UX artefact links on Status (DONE)
Target file: `ops/status.html`

Current reality (verified 2026-03-08):
- Status links the full UX pack:
  - `ux/JOURNEY_MAPS_V1.md`
  - `ux/MASTHEAD_NAV_SPEC_V1.md`
  - `ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
  - `ux/IA_AND_NAV_V1.md`
  - `ux/ACCEPTANCE_CRITERIA_V1.md`

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-6)

### 1.4 Build handoff (concrete): Derived Activity module + Activity page stub
Source specs:
- `ops/ux/JOURNEY_MAPS_V1.md` (Journey 6)
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ops/ux/IA_AND_NAV_V1.md` (Activity tab target)

Deliverables (static v1):
1) Create `ops/activity.html`
   - Must include masthead (AC-1) and a page title `Activity`.
   - Must render a `<ol class="timeline">` list.
   - Data source order:
     1. if `ops/events/events-YYYY-MM.jsonl` exists → render first 50 lines
     2. else → render derived activity from CSVs (below)

2) Add compact module to `ops/status.html`
   - Heading: `What changed` + link `View all →` to `activity.html`.
   - Render first 10 items using the same Timeline markup.
   - Empty state copy (exact): `No recent activity.`

Derived activity rules (fallback):
- From `ops/agent-tasks.csv`: create an item per row where `updated_at` is within last 7 days.
  - `entity_type=task`, `entity_id=task_id`
  - summary: `${status}: ${title}` (include `role_id` prefix if present)
  - href: `agent-queue.html` (v1), later deep-link by id
- From `ops/job-pipeline.csv`: no `updated_at` exists yet, so use `last_action` as the timestamp.
  - Include rows where `last_action` is within last 7 days.
  - `entity_type=job`, `entity_id=role_id`
  - summary: `${status}: ${title}` + `Next: ${next_action}` when present
  - href: `kanban.html` (v1)

Data hygiene note (important):
- Add `updated_at` to `ops/job-pipeline.csv` as soon as it is touched by scripts/agents.
- Once present, switch the derived rule to prefer `updated_at` over `last_action`.

Acceptance check:
- Satisfies `ops/ux/ACCEPTANCE_CRITERIA_V1.md` AC-5 (event feed OR derived activity fallback).

### 1.5 CV Preview UX tightening (quick wins)
Target file: `ops/cv-preview.html`

Current reality (verified 2026-03-08):
- Draft loader exists (input + fetch + lightweight markdown rendering).
- Query param supported: `?file=outputs/cv/<role_id>/draft.md`.
- Default input value is currently `outputs/cv/R-2026-0017/draft.md` which is likely non-existent on a fresh publish, creating a “broken by default” first impression.

Build asks:
- Set default to blank and rely on helper text (preferred), or point to a known-good demo file that exists in the repo.
- If hosted publicly, restrict load paths to `outputs/cv/**` only (same-origin) to reduce accidental file exposure.

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-7, AC-8)

### 1.6 Build handoff (concrete): Seed events feed + parse-first-N proof
Why: unblocks AC-5 quickly (real events path, not just derived fallback).

Deliverables (static v1):
1) Ensure `ops/events/` exists and is web-served.
2) Commit a small seed file: `ops/events/events-2026-03.jsonl` (already created by UX).
3) Timeline read order:
   - Try fetch `events/events-2026-03.jsonl` first (or latest by naming convention).
   - If fetch fails, fall back to derived activity (Section 1.4).
4) Parse strategy (v1):
   - Fetch as text.
   - Split by `\n`.
   - Parse only first 50 non-empty lines with `JSON.parse`.

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-5)

### 1.7 Build handoff (concrete): Home landing page + active-link semantics (NOW VALID)
Why: `nav_v1.js` already implements URL-based active-link semantics, and the ops surface now has a real landing page.

Current reality (verified 2026-03-08):
- `ops/index.html` now exists and functions as the Home/launchpad.
- All primary ops pages link the logo/home anchor to `index.html`.
- Per-page hard-coded active classes for nav links have been removed; active state is expressed via `aria-current="page"` + `.btn--primary` applied by `nav_v1.js`.

Definition-of-done checks (static v1):
1) Every ops page loads `ui/nav_v1.js`.
2) The “Home” logo link resolves to `index.html`.
3) Active link is set programmatically (no per-page drift).

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-1)

### 1.8 Build handoff (concrete): Add `updated_at` to `job-pipeline.csv` + display it
Why: the Activity fallback currently uses `last_action` as a timestamp (lossy and often non-parseable). A proper `updated_at` unlocks reliable “What changed” sorting, and makes diffs easier to read.

Deliverables (v1):
1) Add a column `updated_at` (RFC3339, UTC) to `ops/job-pipeline.csv`.
   - Example value: `2026-03-08T18:22:00Z`
2) Ensure any script/agent that touches a job row sets `updated_at=now()`.
   - If multiple fields change, only one timestamp is needed.
3) In UI, surface `updated_at` in `ops/kanban.html` (secondary meta line is fine):
   - Label (exact): `Updated <time>`
4) Update derived-activity logic (Section 1.4) to prefer `updated_at` over `last_action` when present.

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-5)

### 1.9 Build handoff (concrete): Deep-link + highlight an entity from Activity
Why: without deep links, Activity becomes a dead-end list. Even before true “detail pages” exist, we can route users to the right surface and visually focus the target row.

Deliverables (v1):
1) Support query param on `ops/activity.html`: `?focus=task:T-0303` or `?focus=job:R-2026-0010`.
2) When a timeline item is clicked:
   - Tasks route to `agent-queue.html?focus=<task_id>`
   - Jobs route to `kanban.html?focus=<role_id>`
3) On `ops/agent-queue.html` and `ops/kanban.html`, implement a tiny helper in page JS:
   - if `focus` is present, scroll the matching row into view and apply a temporary highlight class for ~3 seconds.

Markup expectation (minimal):
- Add `data-task-id="T-XXXX"` on task rows in `agent-queue.html`.
- Add `data-role-id="R-YYYY"` on job rows/cards in `kanban.html`.

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-5 usability extension)

---

## 2) Markup hooks (pragmatic)
To reduce CSS churn, keep these conventions:
- Root: `<header class="masthead"> ...` (new)
- Tabs: `<nav class="masthead__nav">` containing anchor buttons.
- Active state: `aria-current="page"` on active tab.
- Badge: `<span class="badge badge--info">3</span>` etc.

Timeline conventions:
- List: `<ol class="timeline" role="list">`
- Item: `<li class="timeline__item" role="listitem">`
- Severity classes: `timeline__item--info|--warning|--danger`

---

## 3) Copy (microcopy defaults)
Use these exact labels (avoid drift):
- Tabs: Pipeline, Agents, UX, Design, Roadmap, Activity
- Search hint: `/ Search`
- Primary CTA: `+ New`
- Updated label: `Updated <time>`

---

## 4) Definition of done references
Use the acceptance criteria checklist:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md`

---

## 5) Risks + mitigations
- Static duplication risk: masthead copied into multiple pages can drift.
  - Mitigation: keep markup identical, consider a small build step later.
- Event feed risk: JSONL parsing in browser may be slow for large files.
  - Mitigation: only read first N lines in v1; add an index/precompute step later.
- Draft loader risk: unrestricted `fetch()` paths can leak files in some hosting contexts.
  - Mitigation: restrict to `outputs/cv/**` and enforce same-origin only.
