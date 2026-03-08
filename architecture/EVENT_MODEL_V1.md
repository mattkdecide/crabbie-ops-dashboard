# Event Model v1 (Ops Control Tower)

**Last updated:** 2026-03-08

## Purpose
Create a small, consistent event model so the Control Tower (status page, dashboard worker, future automation) can consume changes across:
- **CRM** (jobs, applications, tasks)
- **CV pipeline** runs (artefacts + QA)
- **Agent/task board** updates (CSV-driven now, DB-driven later)

This increment defines:
1) a **standard event envelope**,
2) a minimum set of **domain events**,
3) **integration contracts** (JSON Schemas), and
4) **migration notes + risks**.

The intent is to support both:
- **File-first** (events written as JSONL in repo, consumed by dashboard-worker.js), and
- **DB-first later** (outbox table + pub/sub), without changing event shapes.

---

## 1) Event envelope (contract)
All events MUST conform to `ops/architecture/schemas/event-envelope.schema.json`.

### Envelope fields
- `spec_version` (string): fixed `"1.0"` for this version.
- `event_id` (string, UUID): unique per event.
- `event_type` (string): namespaced, dot-delimited.
- `occurred_at` (string, RFC3339 UTC): when the change happened.
- `producer` (object): component metadata.
- `subject` (object): domain entity reference.
- `correlation_id` (string, optional): tie together a pipeline run, an ingestion batch, etc.
- `idempotency_key` (string, optional): stable key for de-dupe when replaying.
- `data` (object): event payload; validated by per-event schema.

### Naming convention
`<domain>.<entity>.<action>.v<major>`

Examples:
- `crm.job.status_changed.v1`
- `crm.application.status_changed.v1`
- `crm.task.status_changed.v1`
- `pipeline.cv_run.completed.v1`

---

## 2) Canonical status taxonomy (referenced by events)
This is **not** the full mapping spec (that is T-0204), but events should emit canonical values from day 1.

### JobStatus (v1)
- `identified`
- `shortlisted`
- `dropped`

### ApplicationStatus (v1)
- `not_started`
- `drafting`
- `submitted`
- `interviewing`
- `offer`
- `rejected`
- `withdrawn`

### TaskStatus (v1)
- `backlog`
- `in_progress`
- `blocked`
- `done`

**Rule:** CSV/DB/UI may keep their local labels, but event payloads MUST normalise to these canonical enums.

---

## 3) Minimum domain events (v1)

### A) CRM status change events
These are the highest leverage because they drive dashboards, reminders, and reporting.

1. `crm.job.status_changed.v1`
2. `crm.application.status_changed.v1`
3. `crm.task.status_changed.v1`

Each payload includes:
- `old_status`, `new_status` (canonical)
- `reason` (optional, short string)
- `changed_by` (optional, actor reference, e.g. `"agent:ledger"`, `"human:matt"`)

### B) Pipeline run events
4. `pipeline.cv_run.completed.v1`

Payload includes:
- `role_id`
- `run_id`
- `manifest_path` (expected by T-0205)
- `artefacts` (optional inline summary; full detail remains in manifest)
- `qa_path` (optional convenience pointer)
- `result` (`success|partial|failed`)

---

## 4) Storage and transport (pragmatic v1)

### File-first transport (now)
Write events to:
- `ops/events/events-YYYY-MM.jsonl`

One JSON object per line. This supports:
- cheap append-only writes,
- easy git diff/audit,
- replay by re-processing the log.

### DB outbox (later)
When moving to SQLite/Postgres for CRM, add an `event_outbox` table and ensure writes are:
- transactionally consistent (domain update + outbox insert in same txn),
- published asynchronously to a message bus or file sink.

---

## 5) Integration contracts (schemas)
Schemas live at:
- `ops/architecture/schemas/`

Defined in this increment:
- `event-envelope.schema.json`
- `crm.job.status_changed.v1.schema.json`
- `crm.application.status_changed.v1.schema.json`
- `crm.task.status_changed.v1.schema.json`
- `pipeline.cv_run.completed.v1.schema.json`

---

## 6) Migration notes

### Migration step 1 (no DB changes)
- Add `ops/events/` directory.
- Start emitting events from scripts/agents that already touch CSV/HTML.
- Dashboard worker can ingest JSONL as an additional source of truth.

### Migration step 2 (status normalisation)
- Wherever a status is written (CSV row update, DB update, UI), add a normalisation step that maps to canonical enums before emitting.
- Keep emitting `old_status` and `new_status` in canonical form even if storage keeps legacy text.

### Migration step 3 (CRM schema alignment)
- In `crm-schema-v0.sql`, `jobs.status`, `applications.status`, `tasks.status` currently hold legacy values.
- Plan: introduce new columns (or a check constraint) aligned to canonical enums, then backfill.
  - Example: add `jobs.status_v1` and keep `jobs.status` as legacy during migration.

---

## 7) Risks and mitigations

1) **Status drift (multiple sources of truth)**
- Risk: CSV/DB/UI disagree; events become unreliable.
- Mitigation: enforce canonical enum emission and central mapping table (T-0204) with automated tests.

2) **Duplicate events during replay**
- Risk: JSONL replay double-counts.
- Mitigation: `event_id` uniqueness + consumer de-dupe using `idempotency_key`.

3) **Leaky identifiers / unstable IDs**
- Risk: CSV rows don’t have stable IDs.
- Mitigation: define `subject` as `(type, id)` where `id` is stable: `job:<db_id>` or `job:<hash(url)>` until DB IDs exist.

4) **Schema versioning pain**
- Risk: hard to evolve events.
- Mitigation: version in `event_type` suffix (`.v1`, `.v2`) and avoid breaking changes; add fields only.

---

## Appendix: Example event (job status change)
```json
{
  "spec_version": "1.0",
  "event_id": "2f4b1d24-9c2b-4a90-820f-9c45b16c5b2f",
  "event_type": "crm.job.status_changed.v1",
  "occurred_at": "2026-03-08T08:20:00Z",
  "producer": {"name": "ledger", "version": "0.1"},
  "subject": {"type": "job", "id": "job:123"},
  "correlation_id": "run:cv:role_0042:20260308T0818Z",
  "idempotency_key": "job:123:status:identified->shortlisted",
  "data": {
    "old_status": "identified",
    "new_status": "shortlisted",
    "reason": "High-fit role confirmed",
    "changed_by": "agent:ledger"
  }
}
```
