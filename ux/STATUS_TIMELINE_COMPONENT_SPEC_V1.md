# Status / Event Timeline Component Spec v1

Owner: UX Agent (Vantage)
Consumers: Build (Rivet), Data/CRM (Ledger)
Status: Draft (implementation-ready v1)

## 1) Objective
Provide a single, consistent timeline component to show “what changed” for a job/application/task, with an audit trail that can be rendered across Ops pages.

This solves:
- invisible state changes (currently buried in CSV diffs and notes)
- inconsistent status naming across CSV/UI/DB
- lack of an Activity view that aggregates changes

## 2) Sources of truth (v1)
1. **Events JSONL** (preferred): `ops/events/events-YYYY-MM.jsonl`
   - MUST follow `ops/architecture/EVENT_MODEL_V1.md` + `ops/architecture/schemas/*`
2. **CSV fallback** (until events exist everywhere):
   - `ops/job-pipeline.csv` (job status + last_action/next_action)
   - `ops/agent-tasks.csv` (task status)

Rule: if events exist for an entity, render timeline from events; otherwise, render a minimal “derived timeline” from CSV `updated_at` + `notes`.

Events file selection (v1, static build constraint):
- Do not attempt directory listing in-browser.
- Fetch a known file for the current month first (e.g., `events/events-2026-03.jsonl`).
- If that fetch fails, fall back to derived activity.
- (Later) add a small precomputed index (e.g., `ops/events/index.json`) to make this dynamic.

## 3) Where it appears (initial placements)
- Job detail drawer/modal (from Pipeline/Kanban)
- CV run page header section (show run start/completion + QA acknowledgement)
- Agent task detail view
- Activity page (global feed, filterable)
- Team Ops board (compact activity module + “what changed” context)

## 4) Component anatomy
### A) Header row
- Title: `Activity`
- Filters (optional per context):
  - Event type (Job/Application/Task/Pipeline)
  - Time range (24h, 7d, 30d)
- “Copy link” (deep link to this timeline section)

### B) Timeline items (each item)
Fields:
- **Timestamp** (relative + absolute on hover): `2h ago` + `2026-03-08 08:20 UTC`
- **Badge** (event type): `Job`, `Application`, `Task`, `CV Run`
- **Primary line** (plain language):
  - `Job moved: Shortlisted → Dropped`
  - `Task blocked: waiting on recruiter response`
  - `CV run completed (success)`
- **Secondary line** (details, optional): reason, link to artefact, who changed it
- **Meta** (right aligned, optional): actor `agent:ledger` / `human:matt`

Interaction:
- Collapsed by default after N items (e.g., 10), with “Show more”.
- Items with artefacts show a link icon and open in a new tab.

## 5) Data contract (UI adapter)
### Input (normalised record)
Build should implement a small adapter that maps either:
- event envelope objects (preferred), or
- CSV-derived records
into:
```ts
type TimelineItem = {
  id: string
  occurredAt: string // RFC3339
  domain: 'job'|'application'|'task'|'pipeline'
  summary: string
  detail?: string
  actor?: string
  severity?: 'info'|'warning'|'danger'
  links?: { label: string, href: string }[]
}
```

### Mapping rules (events → TimelineItem)
- `event_type` prefix maps to `domain`.
- `data.old_status`/`data.new_status` produce the “moved” summary line.
- `data.reason` maps to `detail`.
- `producer.name` or `data.changed_by` maps to `actor`.
- `severity`:
  - `danger` when `new_status` is a terminal negative (`rejected`, `withdrawn`, `dropped`) or `TaskStatus=blocked`
  - `warning` for `drafting` / `interviewing` (attention needed)
  - otherwise `info`

### CSV fallback rules (until full eventing)
- Job row change: synthesise `summary` from `status` and `last_action`.
- Task row change: synthesise `summary` from `status` + `notes` prefix.
- Set `severity=warning` when `next_action` contains “Assess/Prep/Chase”, else `info`.

## 6) Empty, loading, and error states
- Empty: `No activity yet. Changes will appear here as jobs and tasks update.`
- Loading: skeleton list (3 items).
- Error (events file missing): show fallback CSV-derived timeline with an inline note: `Event feed unavailable, showing derived activity.`

## 7) Accessibility + keyboard
- Timeline is a list (`role=list`) with items (`role=listitem`).
- Links are reachable via tab; no click-only interactions.
- Timestamp hover detail also available via focus.

## 8) Build handoff (concrete)
**Handoff item UX-000:** Add deep-link support for timeline items (entity targeting)

Goal: make every timeline item navigable to a stable destination, even before full job/task detail views exist.

Deliverables:
- Activity page supports query param `?entity=<domain>:<id>` and auto-applies an entity filter + scrolls to first matching item.
- Timeline adapter emits `links` with `href` values aligned to:
  - `activity.html?entity=job:<role_id>`
  - `activity.html?entity=task:<task_id>`

Acceptance criteria:
1. Opening `activity.html?entity=task:T-0305` filters to that task’s items and shows a small inline chip: `Filtered: task T-0305`.
2. If no matches exist, page shows: `No activity found for this entity.` and clears the filter with one click.

Dependencies:
- `ops/activity.html` exists (see Rivet work item T-0305).

**Handoff item UX-001:** Implement `renderTimeline(items)` component and `timelineAdapter`.

Acceptance criteria:
1. Given a small hard-coded array of `TimelineItem`, renders correctly in `ops/status.html` (or a dedicated `ops/activity.html`).
2. Adapter can parse a sample JSONL file (first N non-empty lines) into `TimelineItem[]`.
3. Items support optional links and severity badges.

Dependencies:
- `ops/events/` directory and at least one JSONL file.
  - Seed created: `ops/events/events-2026-03.jsonl`.
- Data hygiene: `ops/job-pipeline.csv` does not yet carry `updated_at`, so derived timeline will use `last_action` until `updated_at` is added.

**Handoff item UX-002:** Implement derived-activity generator (CSV fallback) as a pure function.

Goal: keep fallback logic deterministic and testable, so derived rules do not drift between pages.

Input:
- parsed rows from `ops/agent-tasks.csv`
- parsed rows from `ops/job-pipeline.csv`

Output:
- `TimelineItem[]` sorted desc by `occurredAt`

Rules (v1):
- Tasks (`ops/agent-tasks.csv`):
  - occurredAt: `updated_at` (assume `YYYY-MM-DD` is UTC midnight if no time is present)
  - domain: `task`
  - id: `task:${task_id}`
  - summary: `${status}: ${title}` (prefix with `${role_id} · ` when role_id exists)
  - severity: `danger` when status=`Blocked`; `info` otherwise
  - link: `{label:'Agent Queue', href:'agent-queue.html'}`
- Jobs (`ops/job-pipeline.csv`):
  - occurredAt: prefer `updated_at` when present; else use `last_action` if it is parseable as a date; else omit row
  - domain: `job`
  - id: `job:${role_id}`
  - summary: `${status}: ${title}` plus ` • Next: ${next_action}` when next_action exists
  - severity: `warning` when next_action contains `Assess`/`Prep`/`Chase` (case-insensitive); `info` otherwise
  - link: `{label:'Pipeline', href:'kanban.html'}`

Acceptance criteria:
1. With a small fixture CSV (2 tasks, 2 jobs), generator returns stable output ordering.
2. Missing/blank timestamps do not crash; row is skipped with a console warn.
3. When `ops/events/` fetch fails, UI renders derived items and shows the inline note from Section 6.

## 9) Open questions / blockers
- Where should event ingestion live (client-side fetch vs server-side precompute in `dashboard-worker.js`)?
- Decide whether Activity is a dedicated page (`/activity`) or embedded on Pipeline + Agents first.
