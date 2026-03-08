# Ops UX IA + Navigation v1

Owner: UX (Vantage)
Status: Implementation-ready (static HTML v1)
Last updated: 2026-03-08 (12:23 UTC)

## 0) Scope
This IA covers the *current build surfaces* in `ops/*.html` plus their supporting artefacts. It is written to be directly implementable in static HTML first, and later migratable to a templated build.

Current build files in scope:
- `ops/status.html`
- `ops/kanban.html`
- `ops/agent-queue.html`
- `ops/agents.html`
- `ops/cv-preview.html`

Planned build files (not yet present):
- `ops/activity.html`

UX source specs (this folder):
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ops/ux/JOURNEY_MAPS_V1.md`
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md`

Build note (current reality):
- The HTML pages currently use a simpler `.topbar` header with cross-links.
- The “home” logo link currently points to `index.html`, but `ops/index.html` does **not** exist yet (so the link is broken in the current build).
- The target end-state is the persistent masthead described in `MASTHEAD_NAV_SPEC_V1.md`.

Pragmatic v1 recommendation:
- Treat `status.html` as “home” until an `index.html` landing page is created.

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

6. **Activity**
   - Purpose: global event feed, filterable
   - Current status: not implemented; see `STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
   - Proposed page: `ops/activity.html` (static)

---

## 2) Navigation model (URLs + active tab rules)
### Canonical routes (static v1)
- Pipeline tab → `kanban.html`
- Agents tab → `agent-queue.html` (board) and/or `agents.html` (index)
- UX tab → `ux/JOURNEY_MAPS_V1.md` (temporary) or `ux/index.md` (preferred)
- Design tab → `design/DESIGN_ROADMAP_V1.md`
- Roadmap tab → `status.html` (acts as Overview/Launchpad in current build)
- Activity tab → `activity.html` (to be created)

### Active-tab logic (static)
Because these are standalone HTML pages, “active tab” can be:
- hard-coded per page, or
- set via a small script that inspects `window.location.pathname`.

Rule table:
- `*/kanban.html` → active=Pipeline
- `*/agent-queue.html` → active=Agents
- `*/ux/*` → active=UX
- `*/design/*` OR `*/ui/*` → active=Design
- `*/EXECUTION_PLAN_*` OR `*/project-gantt*` OR `*/UPDATE_CAPTURE*` OR `*/status.html` → active=Roadmap
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

---

## 4) Build implementation notes (thin)
- Reuse CSS: `ops/ui/STYLE_TOKENS_V1.css` + `ops/ui/COMPONENTS_V1.css`.
- Implement masthead as a copy-paste partial first; later migrate to a shared template.
- Prefer *keyboard-first*: visible focus rings, no click-only controls.

---

## 5) Open decisions
1. Should `status.html` be considered “Roadmap”, or should there be an explicit Overview tab?
2. Where should global search land first: Pipeline cards, tasks, or artefact filenames?
3. Does Activity page render client-side from `ops/events/*.jsonl`, or do we precompute a small index (e.g., `ops/events/index.json`)?
4. Should `cv-preview.html` restrict allowed draft paths to `outputs/cv/**` only (security hardening for hosted environments)?
