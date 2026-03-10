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

## 2026-03-09
- Groomed `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`: introduced explicit grooming state (Draft/Refined/Ready) + expanded requirement format to include edge cases + decision requests.
- Expanded PRD-006 (Activity Timeline) into implementation-ready acceptance criteria and edge cases; captured decision requests (event type enum, retention, derived-when-events-present).
- Added delivery task `T-0305` to `ops/agent-tasks.csv` for Rivet to implement `ops/activity.html` per PRD-006.
- Refreshed Control Tower: marked T-0303 Done; unblocked T-0206 (now In Progress) after masthead/nav copy-paste decision; pulled in AC-8 fix (CV preview default path must not mislead).
- Groomed PRD-005 (Team Operations Board): expanded into implementation-ready acceptance criteria/edge cases; moved Grooming state Refined → Ready.
- Added delivery task `T-0306` to `ops/agent-tasks.csv` for Rivet to implement `ops/team-ops.html` per PRD-005.
- Control Tower refresh (09:36 UTC): captured T-0305 **Backlog → In Progress**, surfaced new delivery work T-0306, and made Team Ops acceptance criteria explicit in Control Tower.
- Groomed PRD-003 (CV Run Flow): expanded into implementation-ready acceptance criteria (artefact set, manifest, QA gate, failure modes) and edge cases; moved Grooming state Refined → Ready.
- Updated delivery task T-0205 notes in `ops/agent-tasks.csv` to align with PRD-003 requirements (manifest + QA gate + PDF overwrite protection).
- Control Tower refresh (15:37 UTC): no new backlog movements since 09:36 capture; re-anchored top priorities to T-0305 (Activity), T-0206 (Nav/links), T-0205 (CV manifest + QA gate).
- Groomed PRD-001: moved Grooming state **Ready → Refined** pending confirmation of canonical required job fields (PRD-001-DR1); added recommendation to externalise required fields list.
- Expanded PRD-002 (Live Kanban From Data) into implementation-ready acceptance criteria and edge cases; added PRD-002-DR1 on status alias mapping source-of-truth.
- Added delivery task `T-0307` to `ops/agent-tasks.csv` to implement PRD-002 hardening (mapping, resilience warnings, perf/a11y guardrails).
- Control Tower refresh (18:40 UTC): captured latest delivery movement **T-0306 In Progress → Review** and **T-0315 In Progress → Done**; reprioritised next 24–48h to Activity (T-0305), CV manifest+QA gate (T-0205), and Team Ops closeout (T-0306).

## 2026-03-10
- Groomed `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md`: expanded PRD-001 (Canonical Job Record + Stage Model) to add schema versioning, machine-readable required fields (`ops/crm/job-record-required-fields-v1.json`), validation/publish gating rules, and recommendations for `closed_reason` enum values.
- Adjusted PRD-006 grooming state: Ready → Refined and added default decisions for event `type` enum, retention window (30 days), and derived-when-events-present behaviour (hide derived when events exist).
- Added continuous BA delivery task T-0312 to `ops/agent-tasks.csv` (Squad Business Analyst Continuous) with status In Progress and today's timestamps; BA cron id: 41e6207f-db96-4527-b7a1-bfe0c5a823b6.
- Updated backlog decision requests: PRD-001 defaults for required fields (`job_id, role_title, company_name, stage, updated_at, source_url?`) and PRD-001-DR2 recommended closed_reason values (`rejected, withdrawn, no_response, role_closed, other`).
- **Control Tower hygiene:** restored missing rows in `ops/agent-tasks.csv` for T-0305/T-0306/T-0307/T-0315 (were referenced in docs but absent in CSV); refreshed `ops/CONTROL_TOWER.md` and recorded CV Preview AC-8 gap (default path must be blank).
- Files updated:
  - `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` (PRD-001 expanded, PRD-006 grooming state changed, PRD-006 defaults added)
  - `ops/agent-tasks.csv` (T-0312 appended; timestamps set to 2026-03-10)
  - `ops/UPDATE_CAPTURE.md` (this entry)

## 2026-03-10 (BA cron run @ 09:38 UTC)
- Groomed backlog:
  - PRD-006 moved **Refined → Ready** (implementation underway; defaults stand unless overridden).
- Expanded PRD-004 into implementation-ready acceptance criteria/edge cases/decisions (nav set, active-state automation, mobile behaviour, resilience).
- Updated BA task tracking row T-0312 notes in `ops/agent-tasks.csv` with this run stamp.
- Files updated:
  - `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` (PRD-004 expanded; PRD-006 moved to Ready)
  - `ops/agent-tasks.csv` (T-0312 run stamp)
  - `ops/UPDATE_CAPTURE.md` (this entry)

## 2026-03-10 (PM Control Tower cron run @ 09:48 UTC)
- Refreshed `ops/CONTROL_TOWER.md` (backlog status movement, top priorities, blockers/decisions, AC updates).
- Aligned PRD-006 delivery status **Backlog → In Progress** in `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` to match active build work (T-0305).

## 2026-03-10 (PM Control Tower cron run @ 12:48 UTC)
- Refreshed `ops/CONTROL_TOWER.md`: captured T-0305 **In Progress → Blocked** per `ops/agent-tasks.csv`, surfaced PRD-007/T-0317 as priority unblock work, and updated blockers/decision requests/AC notes.

## 2026-03-10 (BA cron run @ 12:38 UTC)
- Groomed backlog:
  - Added PRD-007 (CV Preview Loader Hardening + Blank Default) and moved it to **Ready** (implementation-ready AC + edge cases captured).
- Expanded PRD-007 into implementation-ready acceptance criteria, edge cases, dependencies, and decision requests (allowlist + traversal/protocol rejection, query-param safety, size limits).
- Updated `ops/agent-tasks.csv`:
  - T-0312 updated with this run stamp.
  - Added T-0317 (build) to implement PRD-007.
- Files updated:
  - `ops/PRODUCT_REQUIREMENTS_BACKLOG_V1.md` (PRD-007 added)
  - `ops/agent-tasks.csv` (T-0312 updated; T-0317 added)
  - `ops/UPDATE_CAPTURE.md` (this entry)

Next steps / recommended actions:
1. Build Engineer: implement T-0317 (PRD-007) by removing the default `outputs/cv/...` value in `ops/cv-preview.html` and enforcing allowlist + traversal/protocol guards before fetch.
2. Ledger: confirm PRD-001 required fields list (PRD-001-DR1) or accept defaults to unblock Ready movement.
3. Vantage + Build Engineer: confirm PRD-006 decisions (type enum, retention window, derived suppression) or accept defaults.
4. Tide (BA owner): continue daily grooming and move any PRDs whose decisions are confirmed to Ready; keep `ops/agent-tasks.csv` statuses aligned.
5. Ledger + Build Engineer: implement `ops/crm/job-record-required-fields-v1.json` + shared validator (`ops/ui/job_validation_v1.js`) to enforce publish gating rules in PRD-001.
