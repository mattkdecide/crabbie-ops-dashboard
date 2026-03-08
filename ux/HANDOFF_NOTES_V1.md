# UX Handoff Notes v1 (Build + Design)

Owner: UX (Vantage)
Last updated: 2026-03-08

This is a practical handoff note intended to reduce ambiguity for build work.

---

## 1) What to implement next (in order)
### 1.1 Implement the masthead (copy-paste first)
Source spec: `ops/ux/MASTHEAD_NAV_SPEC_V1.md`

Target pages:
- `ops/status.html`
- `ops/kanban.html`
- `ops/agent-queue.html`
- `ops/cv-preview.html`

Implementation approach (static HTML v1):
- Replace current `.topbar` blocks with a masthead component.
- If a shared partial is not available, accept **copy-paste duplication** for v1 but keep the markup identical.
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

### 1.3 Add UX artefact links to Status (small but high-leverage)
Target file: `ops/status.html`

Current reality:
- Status links `ux/JOURNEY_MAPS_V1.md` but does **not** yet link the rest of the UX pack.

Add links for:
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
1) **Create `ops/activity.html`**
   - Must include masthead (AC-1) and a page title `Activity`.
   - Must render a `<ol class="timeline">` list.
   - Data source order:
     1. if `ops/events/events-YYYY-MM.jsonl` exists → render first 50 lines
     2. else → render derived activity from CSVs (below)

2) **Add compact module to `ops/status.html`**
   - Heading: `What changed` + link `View all →` to `activity.html`.
   - Render first 10 items using the same Timeline markup.
   - Empty state copy (exact): `No recent activity.`

Derived activity rules (fallback):
- From `ops/agent-tasks.csv`: create an item per row where `updated_at` is within last 7 days.
  - `entity_type=task`, `entity_id=task_id`
  - summary: `${status}: ${title}` (include `role_id` prefix if present)
  - href: `agent-queue.html` (v1), later deep-link by id
- From `ops/job-pipeline.csv`: create an item per row where `updated_at` (or `last_action` date if that is all we have) is within last 7 days.
  - `entity_type=job`, `entity_id=role_id`
  - summary: `${status}: ${title}` + `Next: ${next_action}` when present
  - href: `kanban.html` (v1)

Acceptance check:
- Satisfies `ops/ux/ACCEPTANCE_CRITERIA_V1.md` AC-5 (event feed OR derived activity fallback).

### 1.5 CV Preview UX tightening (quick wins)
Target file: `ops/cv-preview.html`

Current reality:
- Draft loader exists (input + fetch + lightweight markdown rendering).
- Query param supported: `?file=outputs/cv/<role_id>/draft.md`.
- Default path currently points to a role folder that may not exist.

Build asks:
- Set default to blank (or to a known-good demo file that exists in repo).
- If hosted publicly, consider restricting load paths to `outputs/cv/**` only.

Acceptance reference:
- `ops/ux/ACCEPTANCE_CRITERIA_V1.md` (AC-7, AC-8)

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
- **Static duplication risk:** masthead copied into 4 pages can drift.
  - Mitigation: keep markup identical, consider a small build step later.
- **Event feed risk:** JSONL parsing in browser may be slow for large files.
  - Mitigation: only read first N lines in v1; add an index/precompute step later.
- **Draft loader risk:** unrestricted `fetch()` paths can leak files in some hosting contexts.
  - Mitigation: restrict to `outputs/cv/**` and enforce same-origin only.
