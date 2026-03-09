# UX Acceptance Criteria v1 (Ops surfaces)

Owner: UX (Vantage)
Status: Ready for build
Last updated: 2026-03-09 (14:28 UTC)

This file consolidates implementation-ready acceptance criteria for the current static build files.

In scope build files:
- `ops/index.html`
- `ops/status.html`
- `ops/kanban.html`
- `ops/agent-queue.html`
- `ops/agents.html`
- `ops/cv-preview.html`
- `ops/cv-run.html`
- `ops/api-usage.html`

Planned build files:
- `ops/activity.html`
- `ops/team-ops.html`

Supporting specs:
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ops/ux/IA_AND_NAV_V1.md`
- `ops/ui/nav_v1.js`

---

## AC-1: Global header navigation is present and consistent (v1 → v2)
### AC-1a (v1): `.topbar` header is consistent across pages
**Given** I open any of the ops pages (Status, Kanban, Agent Queue, Agents, CV Preview, API Usage)
**When** the page renders
**Then** a header renders at the top with:
- a working “Home” link that resolves to an existing page
  - **v1 rule:** Home SHOULD link to `index.html` when present (current build), otherwise fall back to `status.html`
- a visible page title (`h1`)
- a primary navigation area with links to: Status, Pipeline, Agent Queue, Agents, API Usage, CV Preview
  - If `cv-run.html` is published, include `CV Run` as a utility link in this same nav set
- visible focus states for all interactive elements

**And** the page loads `ui/nav_v1.js` so that:
- the mobile menu can be toggled and dismissed (Escape, outside click)
- the active link is expressed via `aria-current="page"` (not colour-only)

### AC-1b (target): Persistent masthead (spec)
**Given** I open any of the ops pages (Status, Kanban, Agent Queue, Agents, CV Preview, API Usage)
**When** the page renders
**Then** a masthead renders at the top with:
- Left zone: product name `Crabbie Ops` and context label `Employment Pod`.
- Centre tabs: Pipeline, Agents, UX, Design, Roadmap, Activity.
- Right zone: search trigger (or stub), `+ New` button (or stub), updated timestamp.

**And** the current page tab appears active (not colour-only).

**And** the masthead is sticky (remains visible on scroll) on desktop widths.

Notes for static v1:
- If search and `+ New` are not implemented yet, they must still render as disabled/stub controls with tooltips.

---

## AC-2: Keyboard navigation shortcuts (minimal)
Status: not implemented in current build (spec retained for when masthead lands).

**Given** I am focused anywhere on the page
**When** I type:
- `g p`
**Then** I navigate to `ops/kanban.html`

**When** I type:
- `g a`
**Then** I navigate to `ops/agent-queue.html`

**When** I type:
- `g x`
**Then** I navigate to `ops/activity.html` (or show “Not implemented” toast until page exists)

**When** I type:
- `/`
**Then** focus moves to the search input (or opens search modal if implemented).

---

## AC-3: Kanban cards show next action as first-class
**Given** I open `ops/kanban.html`
**Then** each card must show:
- role title
- org + location
- role_id (e.g., `R-2026-0006`)
- status column label
- tier badge (Tier A/B/C)
- **Next:** line (derived from `job-pipeline.csv` `next_action`)
- link to source listing

**And** if a CV filename/artefact exists, it must be displayed and clickable (or at minimum shown as text until storage is wired).

### AC-3b (a11y/UX affordance): Horizontal scroll region is discoverable
**Given** I am using keyboard navigation on `ops/kanban.html`
**When** I Tab into the board
**Then** the board itself is focusable and labelled (e.g., `role="region"` + `aria-label="Kanban board (scroll horizontally)"`)

**And** when focused, a visible focus ring appears on the board container (so users discover horizontal scrolling).

---

## AC-4: Agent Queue shows blockers explicitly
**Given** I open `ops/agent-queue.html`
**Then** each task row must show:
- status, priority
- agent owner
- title
- role_id when available

**And** if status is `Blocked`, the row must render a visible blocker reason (not hidden in a hover).

---

## AC-5: Timeline component renders in at least one place
**Given** I open `ops/status.html` (or `ops/activity.html` if created)
**When** there is an events feed available at `ops/events/events-YYYY-MM.jsonl`
**Then** the UI renders a Timeline list from the first N events.

**And** if the events feed is missing
**Then** the UI renders a derived timeline from `job-pipeline.csv` and `agent-tasks.csv` and shows the inline note:
`Event feed unavailable, showing derived activity.`

---

## AC-6: UX artefacts are discoverable from Status
**Given** I open `ops/status.html`
**Then** there are visible links to:
- `ops/ux/JOURNEY_MAPS_V1.md`
- `ops/ux/MASTHEAD_NAV_SPEC_V1.md`
- `ops/ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ops/ux/IA_AND_NAV_V1.md`
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md`

(They may sit under an “Execution Artefacts” list.)

---

## AC-7: CV Preview can load drafts via input or query param
**Given** I open `ops/cv-preview.html`
**Then** I can load draft content into the preview surface by either:
- entering a path into the “Draft file path” field and clicking “Load Draft”, or
- opening a URL like `cv-preview.html?file=outputs/cv/<role_id>/draft.md`

**And** while loading, the UI shows a loading state.

**And** if the file cannot be fetched, the UI shows a readable error message that includes the attempted path.

Non-goals (v1):
- Perfect markdown support.

---

## AC-8: CV Preview default path does not mislead
**Given** I open `ops/cv-preview.html` with no query param
**When** the default path is shown
**Then** it must either:
- point to an example file that exists in the repo/site, or
- be blank with helper text.

Test note (current build):
- The default value is `outputs/cv/R-2026-0017/draft.md` which is unlikely to exist on a fresh publish. This should be updated.

Rationale:
- Avoids a “broken by default” first impression.

---

## AC-9: CV Run generates a correct local command + deep-links to preview
**Given** I open `ops/cv-run.html`
**When** I enter a role key (e.g., `R-2026-0017`) and change inputs
**Then** the page updates a visible command snippet that:
- uses `python3 ops/cv-pipeline/run_cv_deterministic.py`
- writes outputs to `outputs/cv/<role_key>/`

**And** the page provides a link that deep-links to Preview using:
- `cv-preview.html?file=outputs/cv/<role_key>/draft.md`

Non-goals (v1):
- Running code in the browser.

---

## AC-10: Team Ops board (planned) supports intervention-first operations
**Given** I open `ops/team-ops.html`
**Then** the page must:
- include the same global nav pattern (AC-1)
- show a clear page title (`Team Ops`)
- load tasks from `ops/agent-tasks.csv`
- load the CRM status mapping from `ops/crm/status-mapping-v1.json` (when available)

**And** the page must render (v1 minimum):
1) **Health tiles/gauges**
   - in-progress count
   - blocked count
   - overdue count
2) **Blockers module**
   - list of blocked tasks with the blocker reason visible inline
   - each item links to the nearest v1 surface (Agent Queue) until deep-links exist
3) **Activity feed (compact)**
   - prefer events JSONL when present, else derived activity (same rule as AC-5)

**And** the page must support filter via query params (v1):
- `?agent=<name>` filters tasks by agent
- `?status=<status>` filters tasks by status
- `?priority=<priority>` filters tasks by priority
- `?role_id=<role_id>` filters tasks by role_id

Non-goals (v1):
- Perfect historical reporting. This is an intervention surface, not a BI dashboard.
