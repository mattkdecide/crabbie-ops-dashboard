# Squad PM Control Tower

**Last updated:** 2026-03-14 04:00 UTC
**Directive basis:** `ops/DIRECTIVE_TO_CRABBIE.md`, `ops/TASK_LIFECYCLE_RULES.md`, `ops/HANDOFF_FORMAT.md`

## 0) Priority reset (active)

Execution is now anchored to:
1. End-to-end CV workflow hardening
2. CRM integrity
3. Task lifecycle discipline
4. Supporting ops/UI/architecture work only when it directly unblocks 1–3

Non-destructive preservation remains in force for existing infrastructure.

---

## 1) Backlog reassessment against directive

### In-scope (keep active now)
- **CV workflow hardening:** T-0205, T-0317, T-0501
- **CRM integrity:** T-0204, T-0316
- **Task discipline/control quality:** T-0312

### Deprioritised (retain, do not actively expand now)
- Platform/UI expansion not directly tied to CV/CRM/task discipline:
  - T-0101, T-0102, T-0103, T-0104, T-0105, T-0106
  - T-0206, T-0301, T-0302, T-0306, T-0307
- Non-core integrations/research:
  - T-0111, T-0112, T-0113, T-0114, T-0115, T-0116, T-0117

### Paused role-specific tracks (remain blocked, no active spend)
- T-0001 to T-0006 (u&u / Metro chain)

---

## 2) Drift and correction

Recent drift has included:
- dashboard and platform work advancing ahead of core workflow hardening,
- UI and navigation improvements being treated as active delivery when they are supporting work,
- continuous streams remaining active without strong linkage to current top priorities,
- and multiple tasks sitting in In Progress without enough evidence of meaningful movement.

Correction now in force:
- workflow hardening first,
- CRM integrity second,
- task discipline third,
- supporting platform work only when it directly unblocks those priorities.

---

## 3) Top 3 priorities (next 24–48h)

1. **T-0317 – CV Preview hardening (Build) [In Progress]**
   - Make preview safe and reliable.
   - Remove broken-by-default path behaviour.
   - Enforce output allowlist, safe loader behaviour, and clear error states.
   - This is the highest-priority workflow hardening item.

2. **T-0205 – CV artefact manifest and output contract (Build) [Approved]**
   - Finalise predictable role-scoped artefact structure.
   - Ensure manifest, draft, QA, and final-output linkage are consistent and reviewable.
   - This is required for a reliable end-to-end workflow.
   - **Current discipline rule:** keep as `Approved` until there is a concrete execution update, then move to `In Progress` with evidence in notes.

3. **T-0204 – Canonical CRM status mapping (CRM) [Approved]**
   - Implement one source of truth for status mapping.
   - Reduce pipeline ambiguity and support reliable workflow and reporting logic.
   - This is the highest-priority CRM integrity item.
   - **Discipline rule:** keep as `Approved` until there is a concrete implementation update, then move to `In Progress` with evidence.

_Next up: T-0316 – updated_at normalisation/backfill, then T-0312 – task discipline and stale-work cleanup._

## 3b) Heartbeat check (2026-03-14 04:00 UTC)

## 3c) Heartbeat check (2026-03-14 08:00 UTC)

### Movement since last update
- No new execution evidence recorded in `agent-tasks.csv` since 04:00 UTC.

### Integrity fix applied
- CONTROL_TOWER top-priority list now aligns with board truth: **T-0204 is `Approved`** (not `In Progress`) until concrete implementation evidence exists.

### Staleness / next-action flags
- **T-0317 (In Progress, updated_at 2026-03-12)** is nearing the 3-day stale threshold; needs a concrete “what changed” note or move to `Review` once hardening is landed.
- **T-0205 (Approved, updated_at 2026-03-12)** will become stale soon as a high-priority Approved item; either start with an evidence-backed first step (then move to `In Progress`) or explicitly de-prioritise.

### Movement since last update
- **Board truth tightened:** reconciled stale/mismatched statuses in `ops/agent-tasks.csv` to match `TASK_LIFECYCLE_RULES.md`.
  - T-0204: **In Progress → Approved** (stale; awaiting concrete implementation evidence).
  - T-0312: **In Progress → Approved** (stale; next hygiene sweep explicitly defined).
  - T-0501: **In Progress → Backlog** (role-specific, stale; reframed as future reusable QA regression).
  - T-0306: **In Progress → Backlog** (deferred post-Phase-1; eliminate board drift).

### Current staleness / integrity flags (per TASK_LIFECYCLE_RULES)
- **T-0317 (In Progress, updated_at 2026-03-12)** approaches stale threshold next; needs a concrete “what changed” note or a move to Review once hardening lands.
- **T-0205 (Approved, updated_at 2026-03-12)** remains the next highest-leverage CV workflow hardening item. Start only with a concrete execution step (then move to In Progress with evidence).

### Status mismatch
- Previously observed mismatch on **T-0306** has been corrected in `agent-tasks.csv` (now Backlog + deferred note).
---

## 4) Top 5 tasks that most directly harden end-to-end CV workflow

1. **T-0317** — secure and predictable preview input/output path handling.
2. **T-0205** — standardize artefact set (draft/qa/manifest/final) and reduce operator ambiguity.
3. **T-0204** — ensure status writes are canonical across CV stages.
4. **T-0316** — restore timestamp integrity for reliable pipeline recency and stage confidence.
5. **T-0501** — formalize QA pass/fail checks as reusable regression, not ad hoc review.

---

## 5) Stale / vague / misassigned tasks — proposed corrections

### Reassignment / scope corrections
- **T-0010 (ops, In Progress)** → **Backlog** unless directly generating CV/CRM/task-discipline signal; otherwise noise.
- **T-0301 (strategy, In Progress)** → **Backlog** (deprioritized; not a direct Phase 1 unblocker).
- **T-0302 (ui, In Progress)** → **Backlog** (same reason).
- **T-0307 (build, In Progress)** → **Backlog** unless explicitly required to support CV/CRM integrity this sprint.

### Clarify or close
- **T-0501** notes are too role-specific; reframe note to: “Convert review into reusable CV QA regression case + acceptance checks.”
- **T-0206** currently “In Progress” but non-core; set to **Backlog** with note: “Resume post-Phase-1 unless direct unblock needed.”
- **T-0306** remains blocked and non-core; keep **Blocked** with explicit defer note, no active effort.

### Keep blocked (valid)
- **T-0001..T-0006** keep **Blocked** with explicit “Paused by directive sequence, not cancelled.”

---

## 5) 7-day execution plan

### Day 1
- Move T-0317 and T-0204 into active execution.
- Confirm corrected task states and update capture entries.

### Day 2
- Harden CV Preview safety and default behaviour.
- Reduce broken-by-default behaviour in the preview path.

### Day 3
- Tighten artefact manifest/output contract for role-scoped CV runs.
- Confirm predictable linkage across draft, QA, manifest, and final outputs.

### Day 4
- Implement canonical CRM status mapping.
- Remove ambiguous status interpretation paths.

### Day 5
- Normalise updated_at handling and improve pipeline truthfulness.
- Reduce stale or misleading recency signals.

### Day 6
- Apply stale-task cleanup and handoff-quality corrections across active tasks.
- Reduce false In Progress and weak notes.

### Day 7
- Run one end-to-end dry run of the CV workflow and record gaps.
- Use findings to define the next hardening pass.

---

## 6) Enforcement note

No new architecture, dashboard, API, read-model, or platform expansion work should be pulled forward unless it directly removes a blocker to:
- CV workflow hardening,
- CRM integrity,
- or task discipline.

---

## 3d) Heartbeat check (2026-03-15 00:00 UTC)

### Movement since last update
- No new execution evidence recorded in `agent-tasks.csv` since 2026-03-14 08:00 UTC.

### Staleness flags (per TASK_LIFECYCLE_RULES)
- **T-0317 (In Progress, updated_at 2026-03-12)** is now stale (>=3 days). Either (a) record concrete execution evidence (commit/ref, file list, deployed change) and move to **Review**, or (b) move back to **Approved** with a crisp first step to restart.
- **T-0205 (Approved, updated_at 2026-03-12)** is now stale as a high-priority Approved item. Either start with a concrete first implementation step (then move to **In Progress** with evidence), or explicitly de-prioritise.

### Still-valid top priorities (next 24–48h)
1. **T-0317** CV Preview hardening (safety + blank default).
2. **T-0205** CV artefact manifest/output contract.
3. **T-0204** Canonical CRM status mapping.

### Decisions needed
- None yet, unless Matt wants to explicitly pause/de-scope T-0205 or re-order priorities.