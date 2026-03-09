# Persistent Masthead Navigation Spec v1

Owner: UX Agent (Vantage)  
Consumers: Design (Polish), Build (Rivet)  
Status: Ready for implementation

## 1) Objective
Create a persistent masthead that gives immediate orientation and control across all ops pages.

Success criteria:
- User can identify location and next action in <1 second.
- Navigation is consistent across Dashboard, Kanban, Agent Queue, CV Preview, and future pages (Activity, Team Ops).
- Supports keyboard-first usage and mobile responsiveness.

## 2) Information Architecture
Masthead zones:

### Left zone
- Product mark/name: `Crabbie Ops`
- Context label (small): `Employment Pod` (future: workspace switcher)

### Centre zone (primary navigation)
Tabs (ordered):
1. Pipeline
2. Agents
3. UX
4. Design
5. Roadmap
6. Activity

Rules:
- Current page tab has active style + underline.
- Tabs are persistent on desktop; collapse to menu on mobile.

### Right zone
- Global search trigger (icon + `/` hint)
- Primary action button: `+ New`
- Live sync indicator: `Updated <time>`
- User/profile avatar (future controls)

## 3) Live Signal Badges
Each nav item can show concise operational state:
- Pipeline: open jobs count
- Agents: active/in-progress tasks count
- Roadmap: blockers count
- Activity: new events since last view

Badge style:
- Use semantic token variants (info/warning/danger)
- Keep compact, non-distracting

## 4) Interaction Model
Desktop:
- Masthead sticky at top; always visible.
- Height token: `--topbar-h` (default 72px).

Mobile:
- Left: logo/title
- Right: search + menu
- Tabs move into slide-over menu
- Keep one persistent primary CTA (`+ New`)

Keyboard shortcuts:
- `/` focus search
- `g p` pipeline
- `g a` agents
- `g r` roadmap
- `g x` activity
- `n` create new task/job

Focus/accessibility:
- Use `--focus-strong`
- No focus suppression
- Tab order left→centre→right

## 5) Visual Design Constraints (handoff to Design)
- Reuse existing tokens from `ops/ui/STYLE_TOKENS_V1.css`
- Reuse component primitives from `ops/ui/COMPONENTS_V1.css`
- Keep masthead low-noise: one title, one context label, one CTA
- Active tab should be obvious without relying on colour alone

## 6) Build Handoff (implementation tasks)
1. Implement masthead markup (copy-paste is acceptable for static v1).
2. Inject the same masthead into (current build surfaces):
   - `ops/index.html` (Home)
   - `ops/status.html` (operational launchpad/status board)
   - `ops/kanban.html`
   - `ops/agent-queue.html`
   - `ops/agents.html`
   - `ops/cv-preview.html`
   - `ops/api-usage.html`
   - `ops/cv-run.html`
3. Inject into planned surfaces when created (no special-case nav later):
   - `ops/activity.html`
   - `ops/team-ops.html`
4. Home link rule (avoid broken nav):
   - Masthead logo/title link SHOULD go to `index.html` when present (current build).
   - If `index.html` is not available in an environment, fall back to `status.html`.
5. Active-tab + mobile menu behaviour:
   - Prefer the existing script `ops/ui/nav_v1.js` to set `aria-current="page"` and apply `.btn--primary` based on URL.
   - Do not hard-code active styles per page if `nav_v1.js` is present.
6. Optional enhancements (v1+):
   - Keyboard shortcut listener.
   - Badge data adapter (initially from CSV counts, later DB/API).

## 7) Definition of Done
- Same masthead rendered on all major pages.
- Active nav state correct by page.
- Search opens from icon and `/`.
- Keyboard routes functional.
- Mobile menu functional and readable.
- Accessibility check passed (focus, contrast, tab flow).
