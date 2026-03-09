# Job Triage Controls Spec v1 (Kanban)

Owner: UX (Vantage)
Consumers: Build (Rivet), Data/CRM (Ledger)
Status: Draft (implementation-ready v1)
Last updated: 2026-03-09

## 1) Objective
Make job triage decisions fast, explicit, and auditable directly from the Pipeline board (`ops/kanban.html`), without burying decisions in free-text notes.

This solves:
- triage decisions hidden in `notes`
- status drift (human labels vs canonical statuses)
- too many clicks to move a role between “Assessing / Hold / Ignored / Pinned”

## 2) Scope (v1)
In scope:
- UI control pattern on each Kanban card
- keyboard-first interactions
- deterministic write-back contract to `ops/job-pipeline.csv` (via existing scripts/agents; UI does not need to write files in-browser)

Out of scope:
- server-side persistence
- multi-user conflict resolution

## 3) Primary artefacts
- Pipeline data: `ops/job-pipeline.csv`
- Status mapping: `ops/crm/status-mapping-v1.json` and `ops/crm/STATUS_MAPPING_V1.md`
- Acceptance criteria: `ops/ux/ACCEPTANCE_CRITERIA_V1.md`

## 4) Control pattern (per card)
### 4.1 Visual pattern
A compact segmented control (or button row) on each card:
- **Assessing** (default triage)
- **Pinned** (top priority)
- **Hold** (pause, revisit)
- **Ignored** (drop)

Placement (v1): under the status badge and above “Next:” line.

Copy rules:
- Use these exact labels: `Assessing`, `Pinned`, `Hold`, `Ignored`.

### 4.2 State rules
- Exactly one triage state is active at a time.
- Active state is expressed with:
  - `aria-pressed="true"` on the selected button, and
  - a visible style change (not colour-only).

### 4.3 Keyboard interactions (v1)
When focus is within a card:
- `1` → set `Pinned`
- `2` → set `Assessing`
- `3` → set `Hold`
- `4` → set `Ignored`

When focus is on a triage button:
- Arrow keys move between options.
- Enter/Space selects.

A11y:
- Buttons must be reachable via Tab.
- Each card has a labelled grouping (e.g., `<div role="group" aria-label="Triage">`).

## 5) Write-back contract (for scripts/agents)
UI action must be representable as a single deterministic update to the corresponding row in `ops/job-pipeline.csv`.

Minimum fields to update:
- `status` (human label: one of Pinned/Assessing/Hold/Ignored)
- `updated_at` (RFC3339 preferred; date-only acceptable) **(new column, see handoff UX-005/Section 7)**
- `last_action` (human-readable: e.g., `2026-03-09 triage: Hold`)
- optional: `next_action` (may be cleared or adjusted)

Eventing (when Ledger wiring lands):
- Emit `crm.job.status_changed.v1` with old/new status normalised via `status-mapping-v1.json`.

## 6) Empty and error states
- If a card has no triage state (unexpected), default the UI display to `Assessing` and show a small inline note: `Triage not set`.
- If write-back fails (future), show a toast/notice: `Could not update pipeline. Try again.`

## 7) Build handoff (concrete)
**Handoff item UX-004:** Add triage controls to Kanban cards (UI only)

Deliverables:
1) Update `ops/kanban.html` card template to include the triage control group.
2) Implement client-side state toggling (pure UI) so users can see the selected state immediately.
3) Add `data-role-id` attributes to cards to support future wiring.

Acceptance criteria:
- Meets `AC-10` in `ops/ux/ACCEPTANCE_CRITERIA_V1.md`.
- Works with keyboard only.

Dependencies:
- None for UI-only v1.

**Handoff item UX-005:** Add `updated_at` column to `ops/job-pipeline.csv` writes (enables Activity + audit)

Deliverables:
- Add `updated_at` field to CSV schema and ensure any writer updates it whenever `status/next_action/notes` changes.

Dependencies:
- Any pipeline writers/agents that touch `ops/job-pipeline.csv`.

## 8) Blockers / open questions
- `ops/job-pipeline.csv` column set is not enforced; need a single schema source (lightweight) to prevent drift.
- Decide whether Kanban triage updates also auto-manage `next_action` (e.g., when Ignored, clear next_action).
