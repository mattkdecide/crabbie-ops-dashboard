# UX Handoff Notes v1 (Build + Design)

Owner: UX (Vantage)
Last updated: 2026-03-10 (06:28 UTC)

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
- `ops/api-usage.html` (currently in the primary nav; keep consistent)

Implementation approach (static HTML v1):
- Replace current `.topbar` blocks with a masthead component.
- If a shared partial is not available, accept copy-paste duplication for v1 but keep the markup identical.
- Ensure active tab is correct per page.

Design dependencies:
- Use existing tokens: `ops/ui/STYLE_TOKENS_V1.css`
  - Interaction feedback: `--surface-hover`, `--surface-press`
  - Visited links: `--link-visited`
- Use primitives: `ops/ui/COMPONENTS_V1.css`

Keep (do not regress):
- `ops/kanban.html` board container is intentionally keyboard-focusable (`tabindex="0"`) with a focus ring so horizontal scrolling is discoverable.
  - When the board container itself is focused, it supports keyboard horizontal scrolling (←/→, PgUp/PgDn, Home/End).
  - Scrollbars are intentionally visible/styled (tokens: `--scrollbar-thumb`, `--scrollbar-thumb-hover` in `STYLE_TOKENS_V1.css`; board styling in `COMPONENTS_V1.css`).
- `ops/agent-queue.html` board container is intentionally keyboard-focusable (`tabindex="0"`) with a focus ring so horizontal scrolling is discoverable.
  - When the board container itself is focused, it supports keyboard horizontal scrolling (←/→, PgUp/PgDn, Home/End).
  - Scrollbars are intentionally visible/styled (tokens: `--scrollbar-thumb`, `--scrollbar-thumb-hover` in `STYLE_TOKENS_V1.css`; board styling in `COMPONENTS_V1.css`).

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

**Handoff item UX-004 (concrete): Align timeline parsing to canonical EventEnvelope fields**
Why: OpenAPI + JSON Schema now standardise on `{event_type, occurred_at, data}`; avoid UI breakage from `{type, payload}` drift.

Reference:
- `ops/architecture/CONTROL_TOWER_API_EVENT_ENVELOPE_ALIGNMENT_2026-03-09.md`

Implementation notes (static JS v1):
- When parsing JSONL lines, accept canonical first:
  - `event.event_type`, `event.occurred_at`, `event.data`
- Optionally support legacy by translating:
  - `event.type -> event_type`
  - `event.payload -> data`
- Adapter must output the UI contract in `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md` Section 5.

Acceptance:
1) A JSONL line with `{event_type, occurred_at, data}` renders without errors.
2) A JSONL line with `{type, payload}` still renders (if legacy support is enabled), but the code path is clearly marked for removal.
3) Missing `occurred_at` does not crash the page; item is skipped with `console.warn`.

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
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md` (see Handoff item UX-002 for CSV fallback rules)
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

Current reality (verified 2026-03-10):
- Draft loader exists (input + fetch + lightweight markdown rendering).
- Query param supported: `?file=outputs/cv/<role_id>/draft.md`.
- **Still unfixed:** default input value is `outputs/cv/R-2026-0017/draft.md`, which is likely non-existent on a fresh publish ("broken by default").

Build asks (v1):
- Set default to blank and rely on helper text (preferred), or point to a known-good demo file that exists in the repo.
- If hosted publicly, restrict load paths to `outputs/cv/**` only (same-origin) to reduce accidental file exposure.

**Handoff item UX-003 (concrete): Harden the draft loader + fix the default path**
Goal: eliminate “broken by default” and prevent path traversal / accidental fetch of non-output files.

Implementation notes (static JS v1):
- When resolving the `file` query param or input value:
  1) Reject absolute URLs and protocols (`http:`, `https:`, `file:`, `data:`).
  2) Normalise and reject any path containing `..` segments.
  3) Allowlist prefix: must start with `outputs/cv/`.
- Default input state: blank.
  - Helper text (exact): `Paste a path under outputs/cv/… (e.g., outputs/cv/R-2026-TEST-EY/draft.md)`
- Error copy (exact, prefix only): `Could not load draft:` then include the attempted path.

Acceptance:
1) Opening `cv-preview.html` with no query param does not show an error state.
2) Opening `cv-preview.html?file=outputs/cv/R-2026-TEST-EY/draft.md` loads when the file exists.
3) Opening with `?file=../ops/agent-tasks.csv` shows a readable error and does not fetch the file.

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

### 1.7 Build handoff (concrete): Home link rule + delegate active-link semantics to `nav_v1.js`
Why: `nav_v1.js` already implements URL-based active link semantics, and a working “Home” target prevents nav dead-ends.

Current reality (verified 2026-03-09):
- `ops/index.html` now exists and acts as “Home”.
- Most pages already link the logo/home anchor to `index.html`.

Deliverables (static v1):
1) Standardise the logo/title href across pages:
   - If `index.html` exists (current build): set to `index.html`.
   - If `index.html` is removed or not published in an environment: set to `status.html`.
2) Ensure these pages load `ops/ui/nav_v1.js`:
   - `ops/status.html`
   - `ops/kanban.html`
   - `ops/agent-queue.html`
   - `ops/agents.html`
   - `ops/cv-preview.html`
   - `ops/api-usage.html`
3) Remove per-page hard-coded “active” styles/classes where present; rely on:
   - `aria-current="page"` and `.btn--primary` applied by `nav_v1.js`
4) Do not regress a11y behaviour now handled by `nav_v1.js`:
   - collapsible nav region MUST sync `aria-hidden`
   - focus MUST move into the menu on open, and return to the toggle on close when appropriate

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-1)

### 1.8 Build handoff (concrete): Add `updated_at` to `job-pipeline.csv` writes (unblocks better Activity)
Why: CSV-derived activity is currently lossy because `ops/job-pipeline.csv` has no stable `updated_at`.

Deliverables (v1):
1) Add a new column `updated_at` to `ops/job-pipeline.csv` (RFC3339 preferred; date-only acceptable).
2) Update any scripts/agents that write pipeline rows to also write `updated_at` whenever `status`, `next_action`, `owner`, or `notes` changes.
3) Update derived-activity generator to prefer `updated_at` over `last_action` when present (already specified in `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`).

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-5)

### 1.9 Build handoff (concrete): Kanban “Next action” inline edit (UI-only v1)
Source spec: `ops/ux/JOB_TRIAGE_CONTROLS_SPEC_V1.md` (Handoff item UX-006)

Why: AC-3 requires `Next:` to be visible, but without an edit affordance it will drift (CSV edits are too high-friction).

Deliverables (static UI v1):
1) On each Kanban card, render a small `Edit` affordance adjacent to `Next:`.
2) Editing uses a single-line input; keyboard rules:
   - `e` focuses input when card is focused
   - `Enter` commits (in-memory)
   - `Esc` cancels
3) Provide a `Copy update` button that copies a patch snippet suitable for manual pipeline updates:
   - `role_id=<id>, next_action="…"`

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-3)

### 1.10 Build handoff (concrete): Team Ops Board page skeleton (read-only v1)
Source spec:
- `ops/ux/JOURNEY_MAPS_V1.md` (Journey 7)

Why: gives Matt a single control-tower view of workload + blockers, without needing the full Kanban + Agent Queue context-switch.

Deliverables (static v1):
1) Create `ops/team-ops.html`
   - Include the standard header/nav (`ui/nav_v1.js`), consistent with AC-1.
   - Page title: `Team Ops`.
   - Ensure the nav set includes a route to Team Ops (either as a primary link or a clearly-labelled utility link under Agents).
2) Render 3 KPI tiles from `ops/agent-tasks.csv`:
   - `In progress` (count of `status=In Progress`)
   - `Blocked` (count of `status=Blocked`)
   - `Due soon` (count due in next 7 days)
3) Render two lists (top 10 each):
   - `Blocked tasks` (show `task_id`, `title`, `agent`, and the first ~120 chars of `notes`)
   - `Due soon` (show `due_date`, `task_id`, `title`, `agent`)
4) Add two outgoing links:
   - `View tasks →` `agent-queue.html`
   - `View pipeline →` `kanban.html`

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-11)

### 1.11 Build handoff (concrete): Home tiles for Activity + Team Ops (index.html)
Target file: `ops/index.html`

Why: Home is the first click after publish. If Activity/Team Ops ship but are not visible on Home, discoverability suffers and the “control tower” loop breaks.

Deliverables (static v1):
1) Under **Operate**, add two full-card links using the existing `.item--link` pattern:
   - `Activity` → `activity.html`
   - `Team Ops` → `team-ops.html`
2) If either page does not exist yet, still render the tile but add a small label: `Coming soon` (no dead links), OR hide it behind a single boolean in JS (preferred).
3) When both pages exist, update the primary nav list in the header to include `Activity` (and optionally `Team Ops` if it is promoted to a first-class destination rather than under Agents).

Acceptance:
- Home has clear, keyboard-focusable paths to Activity and Team Ops as soon as those pages are published.

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
