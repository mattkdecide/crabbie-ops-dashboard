# Workflow Usage Telemetry Model v1

## Purpose
Create an authoritative per-workflow daily usage view to control API burn.

## Log file
- `ops/usage/workflow-usage-log.csv`

## Per-run fields
- run_at_utc
- workflow_id (e.g., jobs_digest_am, priority_inbox_alerts)
- trigger_type (cron/manual)
- model
- in_tokens
- out_tokens
- total_tokens
- estimated_cost_usd
- api_calls_count
- result_state (ok|no_change|error)
- notes

## Daily rollup fields
- date_utc
- workflow_id
- runs
- api_calls_total
- in_tokens_total
- out_tokens_total
- total_tokens_total
- estimated_cost_usd_total
- no_change_runs
- error_runs

## Top-cost-drivers view
Sort rollup by `estimated_cost_usd_total` descending; report top 5 workflows.

## Initial method (until full instrumentation)
- Approximate API calls by cron run count.
- Approximate token cost by run-class averages from observed cron outputs.
- Mark estimate confidence (`low|medium|high`).
