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

## 3) Where it appears (initial placements)
- Job detail drawer/modal (from Pipeline/Kanban)
- CV run page header section (show run start/completion + QA acknowledgement)
- Agent task detail view
- Activity page (global feed, filterable)

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
**Handoff item UX-001:** Implement `renderTimeline(items)` component and `timelineAdapter`.

Acceptance criteria:
1. Given a small hard-coded array of `TimelineItem`, renders correctly in `ops/status.html` and/or `ops/activity.html`.
2. Adapter can parse a sample JSONL file (first N lines) into `TimelineItem[]`.
3. Items support optional links and severity badges.

**Handoff item UX-002:** URL-param filtering contract (static-first, progressive enhancement).

Why: lets Matt share a focused view without adding complex UI state management.

Contract (v1):
- `activity.html?domain=task` filters to a single domain.
- `activity.html?days=1|7|30` restricts items to last N days (apply only when `occurredAt` is parseable).
- Multiple params can combine: `?domain=job&days=7`.

Acceptance criteria:
1. With hard-coded items, filtering works client-side.
2. If params are absent or invalid, default is “all domains” and “7 days”.
3. Filtering does not break the CSV-derived fallback mode.

**Handoff item UX-003:** JSONL discovery + tolerant parsing (pick “latest” events file).

Why: build should not require a hard-coded month to show activity.

Contract (v1):
- Look for `events/events-*.jsonl`.
- Choose the lexicographically highest filename (works with `events-YYYY-MM.jsonl`).
- Fetch it, then parse **first N non-empty lines** (`N=50` default).
- Count invalid JSON lines and surface a small inline warning (`3 lines skipped`).

Implementation note (static hosting reality): browsers cannot list directories. v1 options:
- Maintain a small hard-coded candidate list in `activity.html` (acceptable for now), or
- Add an `events/index.json` manifest later.

Dependencies:
- `ops/events/` directory and at least one JSONL file.
  - Seed created: `ops/events/events-2026-03.jsonl`.
- Data hygiene: `ops/job-pipeline.csv` does not yet carry `updated_at`, so derived timeline will use `last_action` until `updated_at` is added (see `ops/ux/HANDOFF_NOTES_V1.md` 1.8).

## 9) Open questions / blockers
- Where should event ingestion live (client-side fetch vs server-side precompute in `dashboard-worker.js`)?
- Activity page does not yet exist (`ops/activity.html`). Build task is queued (`T-0311`).
- `ops/job-pipeline.csv` missing `updated_at` makes derived job activity timestamps lossy until added (see `ops/ux/HANDOFF_NOTES_V1.md` 1.8).
