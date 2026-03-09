# Update Capture

## 2026-03-03

## 2026-03-08
- Matt approved decision bundle (1-7): CRM stage model and triage structure, shared static nav approach, two-phase subagent plan, restart u&u role track only, Jobgether no-go, AUSTRAC-style role deprioritisation, CV preview path restriction to `outputs/cv/**`.
- Master project brief ingested and anchored to `ops/master-project-brief.md`.
- System audit complete (agents/memory/tools/files/runtime).
- Gap analysis complete.
- Execution roadmap created: `ops/EXECUTION_PLAN_2026-03-03.md`.
- CV pipeline design created: `ops/cv-pipeline/README.md`.
- CRM schema v0 created: `ops/crm-schema-v0.sql`.
- Model/cost routing strategy created: `ops/MODEL_COST_STRATEGY.md`.

## 2026-03-08
- Control Tower created: `ops/CONTROL_TOWER.md` (priorities, blockers/decisions, acceptance criteria, and backlog status movement).
- Shipped live data wiring for `ops/kanban.html`: now renders directly from `ops/job-pipeline.csv` via `ops/ui/kanban_live_v1.js` (+ `ops/ui/csv_v1.js`).
- Shipped live data wiring for `ops/agent-queue.html`: now renders directly from `ops/agent-tasks.csv` via `ops/ui/agent_queue_live_v1.js`, using canonical CRM task status mapping from `ops/crm/status-mapping-v1.json`.
- Extended canonical CRM task status enum to include `review` (supports CSV statuses `Review` and `Approved`).
- UI surface iteration pass: responsive layout + a11y affordances (skip-link target/focus), standardised sticky offset vars, and tightened CSS/design language docs (`ops/status.html`, `ops/agent-queue.html`, `ops/cv-preview.html`, `ops/ui/*`).
- Control Tower refreshed: reflected `T-0206` as **Blocked** pending nav reuse decision; added decision request on static masthead implementation approach.
- Control Tower refreshed again: marked decisions resolved (taxonomy + nav copy/paste), captured `T-0204` as **Approved** and `T-0303` as **In Progress**, and updated priority stack accordingly.

## 2026-03-09
- Groomed requirements backlog to explicit Draft/Refined/Ready grooming states and standardised canonical requirement format: `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`.
- Expanded PRD-006 (Activity Timeline) into implementation-ready acceptance criteria + edge cases, including JSONL discovery, CSV fallback derivation rules, and explicit decision requests.
- Control Tower refresh: marked T-0303 Done; unblocked T-0206 (nav + artefact links) and moved to In Progress; added read-model drift hygiene decision ask; reiterated CV Preview default-path AC fix.

## Next Publishing Goal
- Expose/update a live web status view that includes:
  1. latest increment log,
  2. CV pipeline stage status,
  3. project Gantt timeline.

## UI Direction Captured (Builder screenshots)
- Dark, premium, low-noise interface with neon accent and soft glow connectors.
- Node-based orchestration visual language: orchestrator at centre with branching specialist agents.
- Clear hierarchy: strategist/planner layer above execution worker layer.
- Rounded cards/chips, subtle depth, restrained motion, high-contrast focal elements.
- Split utility + control layout in admin views: left rail list, right detail pane, tabbed sections.
- Product intent: make multi-agent workflow legible and confidence-inducing, not merely decorative.
- Additional reference direction captured: explicit memory controls/surfaces (memory flush/search/session-memory), visible security-scan trust indicators for downloadable modules, structured memory architecture views, and simple system-overview diagrams for onboarding/explainability.
- Additional workflow references captured: meeting-to-actions pipeline with approval gating (human-in-loop before task creation), RAG knowledge-base pipeline (multi-source ingest -> embed -> SQLite+vectors -> plain-English query), and advisory-council pattern (parallel specialist analyses plus synthesiser and feedback loop).
- Additional ops references captured: automated DB discovery/backups with encryption and retention, health monitoring heartbeat/checklist, config/doc drift monitoring, and update notification pattern in chat. Self-update actions remain explicit-approval only.
