# Squad PM Control Tower

**Last updated:** 2026-03-11 UTC
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

2. **T-0205 – CV artefact manifest and output contract (Build) [In Progress]**
   - Finalise predictable role-scoped artefact structure.
   - Ensure manifest, draft, QA, and final-output linkage are consistent and reviewable.
   - This is required for a reliable end-to-end workflow.

3. **T-0204 – Canonical CRM status mapping (CRM) [In Progress]**
   - Implement one source of truth for status mapping.
   - Reduce pipeline ambiguity and support reliable workflow and reporting logic.
   - This is the highest-priority CRM integrity item.

_Next up: T-0316 – updated_at normalisation/backfill, then T-0312 – task discipline and stale-work cleanup._

**T-0312 – Task discipline and control-tower hygiene (Ops) [In Progress]**
- Tighten task states, next-action quality, blocker clarity, and handoff quality.
- Reduce stale work, vague notes, and false In Progress states.
- Keep the board operationally trustworthy.

**T-0501 – CV draft review for active priority role (In Progress)**
- Retain only because the underlying role remains commercially relevant.
- If role relevance drops, convert this task into a reusable CV QA regression task.

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