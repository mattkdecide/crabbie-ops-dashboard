# API Usage Tracker v1

Purpose: provide visible run-rate tracking for model/API usage and cost trend.

## Budget target
- POC target: <= USD 2/day

## Tracked metrics
- In tokens
- Out tokens
- Total tokens
- Estimated cost (USD)
- Top contributing jobs/streams

## Current status
- Tracker initialized.
- Next increment: automate ingestion from cron run stats/events into `usage/api-usage-log.csv`.

## Data source
- `usage/api-usage-log.csv`

## Notes
- This is now wired into the Ops status/navigation pages so run-rate visibility is first-class.
