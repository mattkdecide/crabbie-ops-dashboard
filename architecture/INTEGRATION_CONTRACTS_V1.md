# Integration Contracts V1 (Ops Control Tower)

**Last updated:** 2026-03-08

## Purpose

Define a small, explicit contract layer between:

- **Producers**: agents/tools that create or mutate operational data (tasks, status changes, CV runs, CRM events)
- **Consumers**: static dashboard pages (`status.html`, `kanban.html`, `agent-queue.html`, etc.), workers (`dashboard-worker.js`), and future automations

V1 is intentionally minimal: it standardises *how data is read and appended* without forcing an immediate rewrite of the existing CSV/MD/HTML artefacts.

---

## Contract set (V1)

### 1) HTTP API: Control Tower API (read-mostly)

- **Spec**: `ops/architecture/openapi/control-tower-api.v1.yaml`
- **Style**: REST + JSON, versioned via URL prefix: `/v1/...`
- **Auth**: `X-Api-Key` (optional in local dev; required when exposed beyond localhost)

The API is the canonical integration surface for UI and for agent-side automation.

### 2) Event stream: JSONL append-only (local-first)

- **Envelope**: `ops/architecture/schemas/event-envelope.schema.json`
- **Storage**: `ops/events/events-YYYY-MM.jsonl`
- **Semantics**: append-only; ordering by `occurred_at` (ISO8601) then `event_id`

This stream feeds activity timeline components and acts as the “audit trail” for API-derived state.

---

## Data domains and canonical identifiers

### Task

- `task_id`: `T-XXXX`
- `owner`: agent/person handle (e.g., `Forge`, `Ledger`)
- `status`: `Backlog | In Progress | Blocked | Done` (see `ops/crm/STATUS_MAPPING_V1.md`)

### CV Run

- `role_id`: stable identifier for a role target (preferred over role title)
- `run_id`: immutable run instance identifier

### CRM

- `job_id`, `application_id` (UUIDs)

---

## Integration patterns

### UI pages

UI pages should prefer:

1. **GET** API endpoints for state (`/v1/tasks`, `/v1/agents`, `/v1/status-summary`)
2. **GET** `/v1/events` for timeline
3. Fall back to reading static sources directly only if API is not available

### Agents

Agents/tools should:

- mutate state via **POST** endpoints, which in turn:
  - validate payloads
  - write state to the current storage backend
  - append an event to JSONL

---

## Migration notes (from current repo state)

### Current state

- Operational truth is scattered across:
  - `ops/agent-tasks.csv` (tasks)
  - `ops/agent-roster.yaml` (agents)
  - `ops/UPDATE_CAPTURE.md` and other MD pages (summaries)
  - `ops/architecture/schemas/*.json` (events schemas)

### V1 migration (safe, incremental)

1. **Add API as a thin façade over existing files**
   - Read tasks from `agent-tasks.csv`
   - Read agents from `agent-roster.yaml`
   - Read events from `ops/events/*.jsonl` (if present)

2. **Start writing events on every mutation**
   - When a task status changes, append `ops.task.status_changed.v1` for Control Tower task-board changes (schema: `ops/architecture/schemas/ops.task.status_changed.v1.schema.json`).
   - Use `crm.task.status_changed.v1` only when the task is a CRM task entity (schema: `ops/architecture/schemas/crm.task.status_changed.v1.schema.json`).

3. **Gradually move writes off CSV**
   - Introduce `ops/data/tasks.sqlite` or `ops/data/tasks.json` as the API write target
   - Keep CSV as an export for humans until UI fully swaps to API

---

## Key risks

- **Dual-write drift**: if both UI and humans edit CSV while API writes elsewhere, state diverges.
  - Mitigation: API becomes the *only writer*; CSV becomes export-only.
- **Identifier mismatch**: task rows missing stable IDs or duplicates (already noted: duplicate `T-0302`).
  - Mitigation: enforce `task_id` uniqueness in API validation.
- **Security posture**: exposing API beyond localhost without auth leaks operational data.
  - Mitigation: bind to localhost by default; require API key and TLS when remote.
- **Over-engineering**: adding API too early could slow shipping.
  - Mitigation: read-only endpoints first; mutation endpoints only for high-value workflows.
