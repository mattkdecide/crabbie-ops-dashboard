# Architect Review Pack (Crabbie Ops)

Last updated: 2026-03-11 UTC

## 1) Canonical sources (authoritative)

- `CONTROL_TOWER.md` — priorities, blockers, decisions, acceptance status
- `UPDATE_CAPTURE.md` — chronological shipped-change log
- `agent-tasks.csv` — execution tasks and ownership
- `job-pipeline.csv` — role pipeline records and stage state
- `events/events-2026-03.jsonl` — event stream for activity/read models

## 2) Surface confidence (current)

### High confidence
- `kanban.html`
- `agent-queue.html`
- `activity.html`

These are operationally useful and read from live CSV/events files.

### Medium confidence
- `status.html`

Good orientation layer and artefact navigator, but mostly static/curated cards.

### Low confidence
- `read_models/v1/status_summary.json`

Currently manual-seeded/stale. Not reliable for telemetry truth.

## 3) Known gaps

- Read-model freshness pipeline is not fully automated yet.
- `updated_at` normalisation/backfill still in-flight (PRD-008 dependency).
- CV run/preview flow still being hardened for stronger UX and QA predictability.

## 4) Suggested architect review order

1. `CONTROL_TOWER.md`
2. `UPDATE_CAPTURE.md`
3. `agent-tasks.csv` + `job-pipeline.csv`
4. `activity.html`
5. `architecture/INTEGRATION_CONTRACTS_V1.md`
6. `architecture/openapi/control-tower-api.v1.yaml`

## 5) Companion web page

- `architect-review.html` (human-readable navigation page)
