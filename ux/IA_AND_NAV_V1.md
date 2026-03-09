# Ops UX IA + Navigation v1

Owner: UX (Vantage)
Status: Implementation-ready (static HTML v1)
Last updated: 2026-03-09 (20:28 UTC)

## 0) Scope
This IA covers the *current build surfaces* in `ops/*.html` plus their supporting artefacts. It is written to be directly implementable in static HTML first, and later migratable to a templated build.

Current build files in scope:
- `ops/index.html`
- `ops/status.html`
- `ops/kanban.html`
- `ops/agent-queue.html`
- `ops/agents.html`
- `ops/cv-preview.html`
- `ops/cv-run.html` (utility page, currently linked in global nav)
- `ops/api-usage.html` (utility page, currently linked in global nav)

Planned build files (not yet present):
- `ops/activity.html`
- `ops/team-ops.html` (control-tower summary; tracked in tasks as T-0306)

UX source specs (this folder):
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ops/ux/JOURNEY_MAPS_V1.md`
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md`
- `ops/ux/HANDOFF_NOTES_V1.md`

Build note (current reality):
- The HTML pages currently use a simpler `.topbar` header with cross-links.
- `ops/ui/nav_v1.js` is present and now:
  - toggles the mobile menu reliably (Escape/outside click/link click)
  - applies active-link semantics via `aria-current="page"` and `.btn--primary` based on the current filename
  - syncs `aria-hidden` on the collapsible nav region (mobile pattern; harmless on desktop)
  - manages focus on open/close (open → first link inside nav; close → return focus to toggle if focus was inside)
- `ops/kanban.html` now treats the board as a labelled, keyboard-focusable horizontal scroll region (`role="region"`, `aria-label`, `tabindex="0"`) so the scroll affordance is discoverable
- `ops/agent-queue.html` now treats the board as a labelled, keyboard-focusable horizontal scroll region (`role="region"`, `aria-label`, `tabindex="0"`) so the scroll affordance is discoverable
- `ops/index.html` now exists and acts as a lightweight landing page (“Home”).
- The “home” logo link currently points to `index.html` across pages (aligned to the current build).
- Design tokens now include explicit interaction surfaces and visited-link styling:
  - `--surface-hover`, `--surface-press` (derived)
  - `--link-visited` (derived)

Pragmatic v1 recommendation:
- Treat `index.html` as “Home”, and `status.html` as the operational launchpad/status board.

---

## 1) Primary information architecture
### Level 0: Workspaces (future)
- Default workspace label shown: **Employment Pod**
- Future: multi-workspace switcher (e.g., Consulting Pod, Trading Pod)

### Level 1: Primary sections (masthead tabs)
Aligned to `MASTHEAD_NAV_SPEC_V1.md`.

1. **Pipeline**
   - Purpose: see jobs, status, next action
   - Current page: `ops/kanban.html`
   - Source data: `ops/job-pipeline.csv`

2. **Agents**
   - Purpose: see tasks by agent and current blockers
   - Current pages:
     - `ops/agent-queue.html` (task board)
     - `ops/agents.html` (agent roster/index)
   - Source data: `ops/agent-tasks.csv` + `ops/agents/*`

3. **UX**
   - Purpose: navigation + journeys + component specs
   - Current content: markdown in `ops/ux/`
   - Landing (recommended): `ops/ux/index.md` (to create when we add more docs)

4. **Design**
   - Purpose: design language + component tokens
   - Current content: `ops/design/DESIGN_ROADMAP_V1.md` and `ops/ui/*`

5. **Roadmap**
   - Purpose: execution plan, gantt, update capture
   - Current content:
     - `ops/EXECUTION_PLAN_2026-03-03.md`
     - `ops/project-gantt.md`
     - `ops/UPDATE_CAPTURE.md`
     - (utility) `ops/api-usage.html`

6. **Activity**
   - Purpose: global event feed, filterable
   - Current status: not implemented; see `STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
   - Proposed page: `ops/activity.html` (static)

---

## 2) Navigation model (URLs + active tab rules)
### Canonical routes (static v1)
- Pipeline tab → `kanban.html`
- Agents tab → `agent-queue.html` (board), `agents.html` (index), and `team-ops.html` (control-tower summary, when published)
- UX tab → `ux/JOURNEY_MAPS_V1.md` (temporary) or `ux/index.md` (preferred)
- Design tab → `design/DESIGN_ROADMAP_V1.md`
- Roadmap tab → `status.html` (acts as Overview/Launchpad in current build)
- Activity tab → `activity.html` (to be created)

### Active-tab logic (static)
Current implementation direction:
- Prefer `ops/ui/nav_v1.js` to set `aria-current="page"` and apply `.btn--primary` automatically.
- Avoid per-page hard-coded active classes where possible (reduces drift).

Rule table (for the *masthead tab state*, independent of the v1 `.topbar` links):
- `*/kanban.html` → active=Pipeline
- `*/agent-queue.html` or `*/agents.html` or `*/team-ops.html` → active=Agents
- `*/ux/*` → active=UX
- `*/design/*` OR `*/ui/*` → active=Design
- `*/EXECUTION_PLAN_*` OR `*/project-gantt*` OR `*/UPDATE_CAPTURE*` OR `*/status.html` OR `*/api-usage.html` → active=Roadmap
- `*/activity.html` OR `*/events/*` → active=Activity

---

## 3) Page-level IA (what belongs where)
### `ops/status.html` (Overview / Launchpad)
Job-to-be-done: open one page and jump to the right operational surface.

Should contain:
- persistent masthead (target) or topbar cross-links (current)
- a compact “What changed” module (last 24h) using Timeline component (or placeholder)
- links to: Kanban, Agent Queue, CV Preview, key specs

### `ops/kanban.html` (Pipeline)
Job-to-be-done: decide what to do next per role.

Must show per card:
- status badge + tier
- role_id
- **next action** (first-class)
- link to listing
- link to CV artefacts when they exist

### `ops/agent-queue.html` (Agents)
Job-to-be-done: see workload, blockers, and what is in progress.

Must show per task row:
- status, priority, due date
- owner agent
- role_id (if applicable)
- blocker reason (if status=Blocked)

### `ops/team-ops.html` (Agents: control tower)
Job-to-be-done: get a single scannable view of workload and blockers.

Should contain:
- KPI strip (In progress / Blocked / Due soon)
- Top blockers list with visible reasons
- Links back to Agent Queue and Kanban

### `ops/cv-preview.html` (CV build target)
Job-to-be-done: evaluate layout and export readiness.

Current behaviour (implemented):
- User can load a draft markdown file via an input field.
- Optional query param supported:
  - `cv-preview.html?file=outputs/cv/<role_id>/draft.md`

Should show:
- active role context (role_id) (future)
- most recent build artefacts + manifest (when available)
- QA checklist status (when available)

### `ops/cv-run.html` (Utility: local run command generator)
Job-to-be-done: generate the correct one-shot terminal command for a role and then jump to Preview.

Should contain:
- same global nav pattern as other ops pages
- role key input (role_id), title, input path
- a copyable command snippet that runs the deterministic pipeline
- a preview deep-link like `cv-preview.html?file=outputs/cv/<role_id>/draft.md`

### `ops/api-usage.html` (Utility: spend visibility)
Job-to-be-done: see run-rate and cost trend quickly.

Should contain:
- same global nav pattern as other ops pages
- KPI tiles (budget target, tokens, estimated cost, status)
- a simple log table sourced from `usage/api-usage-log.csv`

---

## 4) Build implementation notes (thin)
- Reuse CSS: `ops/ui/STYLE_TOKENS_V1.css` + `ops/ui/COMPONENTS_V1.css`.
- Implement masthead as a copy-paste partial first; later migrate to a shared template.
- Prefer keyboard-first: visible focus rings, no click-only controls.

---

## 5) Open decisions
1. Should `status.html` be considered “Roadmap”, or should there be an explicit Overview tab?
2. Where should global search land first: Pipeline cards, tasks, or artefact filenames?
3. Does Activity page render client-side from `ops/events/*.jsonl`, or do we precompute a small index (e.g., `ops/events/index.json`)?
4. Should `cv-preview.html` restrict allowed draft paths to `outputs/cv/**` only (security hardening for hosted environments)?
5. Should API Usage live under Roadmap (current), or become a first-class “Metrics” workspace later?
