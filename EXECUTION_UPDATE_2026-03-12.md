# Execution Update

Date: 2026-03-12 UTC
Sources: `ops/CONTROL_TOWER.md`, `ops/agent-tasks.csv`, `ops/UPDATE_CAPTURE.md`

## 1. Top 5 active tasks

- **task_id:** T-0317  
  **title:** CV Preview: blank default + path allowlist + traversal/protocol hardening  
  **current status:** In Progress  
  **owner:** build  
  **one-line next action:** Remove default draft path in `ops/cv-preview.html` and enforce `outputs/cv/**` allowlist + traversal/protocol rejection.

- **task_id:** T-0205  
  **title:** Wire CV pipeline artefact manifest output  
  **current status:** In Progress  
  **owner:** build  
  **one-line next action:** Validate and evidence manifest/draft/qa/final linkage across a fresh deterministic run and update task notes with output paths.

- **task_id:** T-0204  
  **title:** Implement canonical CRM status mapping spec  
  **current status:** In Progress  
  **owner:** crm  
  **one-line next action:** Complete mapping enforcement checks across `job-pipeline.csv` and `agent-tasks.csv`, then record verification evidence.

- **task_id:** T-0501  
  **title:** CV draft review for active priority role  
  **current status:** In Progress  
  **owner:** build  
  **one-line next action:** Complete active-role draft review for `R-2026-TEST-EY` and capture pass/fail outcome.

- **task_id:** T-0312  
  **title:** Task discipline, stale-task cleanup, handoff quality, and control-tower hygiene  
  **current status:** In Progress  
  **owner:** ops  
  **one-line next action:** Run stale-task sweep and tighten vague notes/next actions on active tasks.

## 2. What changed since the last meaningful update

- `agent-tasks.csv` last meaningful status update remains **2026-03-11 final board hygiene pass**:
  - T-0316 moved Backlog → Approved
  - T-0312 title tightened
  - T-0501 confirmed commercially live (status unchanged In Progress)
- `CONTROL_TOWER.md` has been revised and now reflects:
  - drift/correction wording,
  - top 3 priority ordering,
  - updated 7-day plan,
  - enforcement note.
- No newer status-change entries are recorded in `UPDATE_CAPTURE.md` after the 2026-03-11 final board hygiene entry.

## 3. Evidence of progress on priority tasks

- **T-0317**
  - **what changed:** Task status was moved to In Progress, but core acceptance item is still unmet (default draft path still present).
  - **which files changed:** `ops/agent-tasks.csv` (status), `ops/CONTROL_TOWER.md` (priority framing); `ops/cv-preview.html` still shows default `value='outputs/cv/R-2026-0017/draft.md'`.
  - **genuinely moving:** **Partially** (administrative movement; implementation incomplete).
  - **recommended state:** **Remain In Progress**.

- **T-0205**
  - **what changed:** Manifest support exists in deterministic pipeline code, but task board evidence has not been refreshed.
  - **which files changed:** `ops/cv-pipeline/run_cv_deterministic.py` contains manifest write logic; task row in `ops/agent-tasks.csv` still `updated_at=2026-03-07`.
  - **genuinely moving:** **No clear recent movement evidence** in task tracking.
  - **recommended state:** **Move to Backlog** if no fresh execution evidence is added immediately; otherwise keep In Progress with updated notes/evidence.

- **T-0204**
  - **what changed:** Status moved to In Progress; mapping file exists and is used by live board scripts.
  - **which files changed:** `ops/crm/status-mapping-v1.json`, `ops/ui/kanban_live_v1.js`, `ops/ui/agent_queue_live_v1.js`, plus `ops/agent-tasks.csv` status update.
  - **genuinely moving:** **Yes**, but current note is still generic.
  - **recommended state:** **Remain In Progress**.

## 4. Board hygiene check

- **stale In Progress tasks:**
  - **T-0205** (`updated_at=2026-03-07`) is stale by lifecycle rule.

- **vague notes:**
  - **T-0204** note is vague (“Decision approved by Matt; proceed with implementation.”) and lacks concrete next action/evidence.
  - **T-0205** note is minimal for an In Progress task (“role_id keyed outputs + qa.json”) without current execution evidence.

- **tasks that should be reassigned:**
  - None clearly require reassignment from current file evidence.

- **tasks that should be Approved next:**
  - **T-0316** is already correctly in Approved and is the clear next-ready queue item.
  - No additional tasks are clearly qualified for Approved from current evidence.

## 5. Decisions needed from Matt

- Confirm handling for **T-0205** stale state:
  - keep In Progress and require immediate evidence update, **or**
  - move to Backlog until active execution resumes.
- Confirm whether **T-0501** should stay role-specific (commercially live) or be converted to reusable QA regression if role priority changes.
