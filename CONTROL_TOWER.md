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

## 2) Drift from Phase 1 priority order

Current drift detected:
1. Excess effort in dashboard/platform framing vs core workflow reliability.
2. UI/nav enhancement work running ahead of CV pipeline hardening.
3. Continuous BA/UX/UI loops not tightly constrained to workflow unblockers.
4. Task system contains stale or ambiguous “In Progress” states not tied to measurable Phase 1 movement.

Correction applied in this control tower: active stack narrowed to CV + CRM + lifecycle discipline.

---

## 3) Corrected priority stack (next 24–72h)

1. **T-0317 (build, Approved)** — CV Preview hardening (blank default, strict allowlist, traversal/protocol reject, safe load states)
2. **T-0205 (build, In Progress)** — CV artefact manifest output + deterministic output contract
3. **T-0204 (crm, Approved)** — canonical CRM status mapping implementation and enforcement
4. **T-0316 (crm, Backlog -> pull forward)** — `updated_at` normalization/backfill for pipeline truthfulness
5. **T-0501 (build, In Progress)** — convert from one-off review to QA regression test harness for CV workflow

Support discipline:
- **T-0312 (ops, In Progress)** only for stale-task cleanup, handoff quality, and blocker clarity tied to items 1–5.

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

## 6) 7-day execution plan (directive-aligned)

## Day 1
- Land T-0317 fully (preview hardening).
- Add explicit handoff packet for T-0205 using `HANDOFF_FORMAT.md`.

## Day 2
- Complete T-0205 manifest contract and output structure checks.
- Validate deterministic command → artefact path consistency.

## Day 3
- Complete T-0204 canonical mapping enforcement across CV stage writes.
- Run mapping verification against current `job-pipeline.csv` + `agent-tasks.csv`.

## Day 4
- Execute T-0316 `updated_at` normalization + backfill safely.
- Produce before/after verification note and anomaly list.

## Day 5
- Rework T-0501 into reusable CV QA regression suite (pass/fail + threshold report).
- Ensure QA outputs are linked to artefacts and status changes.

## Day 6
- Task discipline sweep:
  - stale In Progress cleanup,
  - explicit next-action enforcement,
  - blocker reason normalization,
  - owner clarity check.

## Day 7
- End-to-end dry run on at least 2 real roles:
  - URL/paste intake → extraction → mapping → draft → QA gate → artefacts → CRM update.
- Publish short evidence report: what improved in reliability and where manual effort was reduced.

Success condition for the 7-day window:
- demonstrable improvement in core workflow reliability,
- cleaner CRM truth,
- tighter task lifecycle with reduced ambiguity.

---

## 7) Enforcement rule for this sprint

No architecture/dashboard/platform scope expansion unless directly required to unblock:
- CV workflow hardening,
- CRM integrity,
- or task lifecycle discipline.

If a proposed item does not pass the directive expansion test, defer it.