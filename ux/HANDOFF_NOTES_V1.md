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

### 1.3 Add UX artefact links to Status
Status currently links Journey Maps and Design Roadmap.
Add links for:
- `ux/MASTHEAD_NAV_SPEC_V1.md`
- `ux/STATUS_TIMELINE_COMPONENT_SPEC_V1.md`
- `ux/IA_AND_NAV_V1.md`
- `ux/ACCEPTANCE_CRITERIA_V1.md`

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
