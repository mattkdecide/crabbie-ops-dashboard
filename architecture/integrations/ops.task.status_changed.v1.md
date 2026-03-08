# Integration Contract: ops.task.status_changed.v1

**Version:** 1

## Intent

Emit a durable event whenever a task changes status. This supports:

- activity timelines ("what changed")
- rebuilding task state from an audit trail
- notification rules (future)

## Transport

- Stored as JSON in `ops/events/events-YYYY-MM.jsonl`
- Wrapped in the standard event envelope:
  - `ops/architecture/schemas/event-envelope.schema.json`

## Payload schema (conceptual)

```json
{
  "task_id": "T-0206",
  "from_status": "in_progress",
  "to_status": "blocked",
  "reason": "Need agreed approach for shared masthead/nav partials",
  "owner": "Rivet",
  "source": "control-tower-api",
  "effective_at": "2026-03-08T11:17:00Z"
}
```

## Validation rules

- `task_id` MUST match `^T-\d{4}$`
- `from_status` MAY be null for first-known state
- `to_status` MUST be one of: `backlog | in_progress | blocked | done`
- If `effective_at` is present, it MUST be <= envelope `occurred_at`

## Mapping to existing artefacts

- `agent-tasks.csv` row: update `status` and optionally append a note.
- `CONTROL_TOWER.md`: can be generated from events by grouping by window.

## Risks

- If humans edit CSV without emitting events, the audit trail becomes incomplete.
- If multiple writers update the same task concurrently, you can get out-of-order events.
  - Mitigation: always include `occurred_at` and use last-write-wins for projection.
