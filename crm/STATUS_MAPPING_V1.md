# Canonical CRM Status Mapping v1

**Purpose:** Provide a single source of truth for status taxonomy across:
- DB (SQLite schema v0 and future schema)
- CSV/task tracker (`ops/agent-tasks.csv`)
- UI badges/filters (ops.mattkain.com)
- Event model (`crm.*.status_changed.v1`)

**Design principles**
1. **Small, durable enums** (avoid UI-only nuance).
2. **Separate entity lifecycles** (Job ≠ Application ≠ Task).
3. **Canonical keys are lowercase snake_case** (stable for code + events).
4. **UI labels can change** without breaking data.

---

## 1) Canonical enums

### 1.0 Ops pipeline status (`ops.pipeline.status`)
Operational Kanban status for `ops/job-pipeline.csv`. This is a **UI/ops view** (not the durable CRM job/application lifecycle), but it needs a canonical key set so the UI can be mapped deterministically.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `pinned` | Pinned | Manually pinned at top of pipeline. | no |
| `new` | New | Captured, not yet assessed. | no |
| `assessing` | Assessing | Screening / role fit assessment in progress. | no |
| `cv_ready` | CV Ready | Tailored CV is prepared and ready to apply. | no |
| `applied` | Applied | Application submitted. | no |
| `interview` | Interview | In an interview loop. | no |
| `offer` | Offer | Offer received. | yes |
| `rejected` | Rejected | Rejected by employer. | yes |
| `hold` | Hold | Paused (timing, dependency, or decision). | no |
| `ignored` | Ignored | Explicitly not pursuing. | yes |

**Implementation note:** `ops.pipeline.status` is intentionally separate from `crm.job.status` and `crm.application.status` (Sections 1.1 and 1.2). The Kanban can evolve without forcing CRM migrations.

### 1.1 Job status (`crm.job.status`)
Jobs represent *opportunities* (roles) irrespective of whether an application has been started.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `identified` | Identified | Role found and captured. | no |
| `shortlisted` | Shortlisted | Worth pursuing, actively being worked. | no |
| `dropped` | Dropped | No longer pursuing. | yes |

**Allowed transitions**
- `identified` → `shortlisted` | `dropped`
- `shortlisted` → `dropped`
- `dropped` → (none)

---

### 1.2 Application status (`crm.application.status`)
Applications represent the *execution track* for a given job.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `not_started` | Not started | No application artefacts created yet. | no |
| `drafting` | Drafting | CV/CL being tailored, but not submitted. | no |
| `submitted` | Submitted | Application submitted. | no |
| `interviewing` | Interviewing | Any live interview loop (incl. screening). | no |
| `offer` | Offer | Offer received. | yes |
| `rejected` | Rejected | Explicit rejection received. | yes |
| `withdrawn` | Withdrawn | We withdrew / stopped mid-process. | yes |

**Allowed transitions**
- `not_started` → `drafting` | `withdrawn`
- `drafting` → `submitted` | `withdrawn`
- `submitted` → `interviewing` | `rejected` | `withdrawn`
- `interviewing` → `offer` | `rejected` | `withdrawn`
- `offer` → (none)
- `rejected` → (none)
- `withdrawn` → (none)

---

### 1.3 Task status (`crm.task.status`)
Tasks represent work items (ops tasks, follow-ups, artefact prep) that can exist independently of jobs.

| key | UI label (default) | Meaning | Terminal |
|---|---|---|---|
| `backlog` | Backlog | Not started. | no |
| `in_progress` | In progress | Actively being worked. | no |
| `review` | Review | Pending review/approval/QA before continuing. | no |
| `blocked` | Blocked | Cannot proceed due to dependency/decision. | no |
| `done` | Done | Completed. | yes |

**Allowed transitions**
- `backlog` → `in_progress` | `review` | `blocked` | `done`
- `in_progress` → `review` | `blocked` | `done`
- `review` → `in_progress` | `blocked` | `done`
- `blocked` → `in_progress` | `review` | `done`
- `done` → (none)

---

## 2) Mapping tables

### 2.1 DB schema v0 (legacy) → canonical

#### `ops/crm-schema-v0.sql` :: `jobs.status`
Legacy comment: `new|shortlisted|applied|interview|closed`

| legacy | canonical |
|---|---|
| `new` | `identified` |
| `shortlisted` | `shortlisted` |
| `applied` | `shortlisted` *(application state belongs on application)* |
| `interview` | `shortlisted` *(application state belongs on application)* |
| `closed` | `dropped` |

#### `ops/crm-schema-v0.sql` :: `applications.status`
Legacy comment: `draft|submitted|responded|rejected|offer`

| legacy | canonical |
|---|---|
| `draft` | `drafting` |
| `submitted` | `submitted` |
| `responded` | `interviewing` |
| `offer` | `offer` |
| `rejected` | `rejected` |

#### `ops/crm-schema-v0.sql` :: `tasks.status`
Legacy default: `open`

| legacy | canonical |
|---|---|
| `open` | `backlog` |

---

### 2.2 CSV task system (`ops/agent-tasks.csv`) → canonical Task status

| CSV value | canonical |
|---|---|
| `Backlog` | `backlog` |
| `In Progress` | `in_progress` |
| `Review` | `review` |
| `Approved` | `review` *(treated as review-state)* |
| `Blocked` | `blocked` |
| `Done` | `done` |

### 2.3 Pipeline CSV (`ops/job-pipeline.csv`) → canonical Ops pipeline status

| CSV value | canonical |
|---|---|
| `Pinned` | `pinned` |
| `New` | `new` |
| `Assessing` | `assessing` |
| `CV Ready` | `cv_ready` |
| `Applied` | `applied` |
| `Interview` | `interview` |
| `Offer` | `offer` |
| `Rejected` | `rejected` |
| `Hold` | `hold` |
| `Ignored` | `ignored` |

---

## 3) UI badge defaults

- `identified` → neutral/grey
- `shortlisted` → primary/blue
- `dropped` → muted/grey (or danger/red if explicitly rejected)

- `not_started` → neutral/grey
- `drafting` → warning/amber
- `submitted` → primary/blue
- `interviewing` → accent/purple
- `offer` → success/green
- `rejected` → danger/red
- `withdrawn` → muted/grey

- `backlog` → neutral/grey
- `in_progress` → primary/blue
- `review` → warning/amber
- `blocked` → warning/amber
- `done` → success/green

---

## 4) Migration note (lightweight)

If/when we migrate existing SQLite rows or import CSVs:
1. **Do not overwrite raw legacy values** on day 1.
2. Create a one-off transform (or view) that maps legacy → canonical using Section 2.
3. Once consumers are updated, backfill canonical values and constrain columns to enum set.

---

## 5) Implementation notes (for builders)

- Canonical keys should be used in events:
  - `crm.job.status_changed.v1` uses `identified|shortlisted|dropped`
  - `crm.application.status_changed.v1` uses `not_started|drafting|submitted|interviewing|offer|rejected|withdrawn`
  - `crm.task.status_changed.v1` uses `backlog|in_progress|blocked|done`

- If a UI needs more nuance (e.g., “Phone screen”, “Final round”), represent it as **metadata** on the event, not a new status key.
