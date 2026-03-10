// agent_queue_live_v1.js
// Live Agent Queue rendering from ops/agent-tasks.csv + canonical status mapping.

import { parseCsv } from './csv_v1.js';

const COLUMN_ORDER = ['backlog', 'in_progress', 'review', 'blocked', 'done'];

function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function normaliseKey(raw) {
  return (raw ?? '')
    .trim()
    .toLowerCase()
    .replaceAll(/\s+/g, '_')
    .replaceAll(/[^a-z0-9_]/g, '');
}

function prioBadge(priority) {
  const p = (priority ?? '').trim().toLowerCase();
  if (!p) return '';
  const cls = p === 'high' ? 'badge--prio-high' : p === 'medium' ? 'badge--prio-med' : p === 'low' ? 'badge--prio-low' : '';
  const label = `Priority ${p.charAt(0).toUpperCase()}${p.slice(1)}`;
  return `<span class="badge ${cls}">${escapeHtml(label)}</span>`;
}

function statusBadge(canonicalKey, canonicalLabel) {
  const k = (canonicalKey ?? '').trim();
  if (!k) return '';

  // Keep these coarse and stable; nuance belongs in metadata.
  const cls =
    k === 'done'
      ? 'badge--success'
      : k === 'blocked'
        ? 'badge--danger'
        : k === 'review'
          ? 'badge--warning'
          : k === 'in_progress'
            ? 'badge--info'
            : '';

  const label = canonicalLabel || k;
  return `<span class="badge ${cls}">${escapeHtml(label)}</span>`;
}

function dueBadge(due) {
  const d = (due ?? '').trim();
  if (!d) return '';
  return `<span class="badge">Due ${escapeHtml(d)}</span>`;
}

function cvPreviewLink(roleIdRaw) {
  const id = (roleIdRaw ?? '').trim();
  if (!id) return '';
  const file = `outputs/cv/${encodeURIComponent(id)}/draft.md`;
  const q = encodeURIComponent(file);
  return `<a href="cv-preview.html?file=${q}">CV preview ↗</a>`;
}

function renderCard(t, statusMeta) {
  const title = escapeHtml(t.title || 'Untitled task');
  const taskId = escapeHtml(t.task_id || '');
  const roleIdRaw = (t.role_id ?? '').trim();
  const roleId = escapeHtml(roleIdRaw || '');
  const agent = escapeHtml(t.agent || '');

  const metaParts = [];
  if (agent) metaParts.push(`Agent: ${agent}`);
  if (roleId) metaParts.push(`Role: ${roleId}`);

  const badges = [];
  const status = statusBadge(statusMeta?.key, statusMeta?.label);
  if (status) badges.push(status);

  const prio = prioBadge(t.priority);
  if (prio) badges.push(prio);

  const due = dueBadge(t.due_date);
  if (due) badges.push(due);

  const notes = (t.notes ?? '').trim();

  const links = [];
  const cvPrev = cvPreviewLink(roleIdRaw);
  if (cvPrev) links.push(cvPrev);

  const lines = [];

  const taskIdRaw = (t.task_id ?? '').trim();
  const taskAttr = taskIdRaw
    ? ` data-task-id="${escapeHtml(taskIdRaw)}" id="task-${escapeHtml(taskIdRaw)}"`
    : '';

  lines.push(`<div class="item"${taskAttr}>`);
  lines.push(`  <h3 class="item__title">${taskId ? `${taskId} · ` : ''}${title}</h3>`);
  if (metaParts.length) lines.push(`  <div class="item__meta">${metaParts.join(' · ')}</div>`);
  if (links.length) lines.push(`  <div class="item__small">${links.join(' · ')}</div>`);
  if (badges.length) lines.push(`  <div class="badges">${badges.join('')}</div>`);
  if (notes) lines.push(`  <div class="item__small">Notes: ${escapeHtml(notes)}</div>`);
  lines.push('</div>');
  return lines.join('\n');
}

function renderColumn(statusKey, statusLabel, tasks) {
  const header = `${escapeHtml(statusLabel || statusKey)} (${tasks.length})`;
  const cards = tasks
    .slice()
    .sort((a, b) => (a.task_id || '').localeCompare(b.task_id || ''))
    .map((t) => renderCard(t, { key: statusKey, label: statusLabel }))
    .join('\n');

  return `
  <div class="column">
    <div class="column__shell">
      <h2 class="column__header">${header}</h2>
      ${cards || ''}
    </div>
  </div>`;
}

async function loadMapping() {
  const res = await fetch('crm/status-mapping-v1.json', { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load crm/status-mapping-v1.json (${res.status})`);
  return res.json();
}

async function loadTasks() {
  const res = await fetch('agent-tasks.csv', { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load agent-tasks.csv (${res.status})`);
  const text = await res.text();
  return parseCsv(text);
}

function canonicaliseStatus(rawStatus, mapping) {
  const raw = (rawStatus ?? '').trim();
  if (!raw) return 'backlog';

  const direct = mapping?.mappings?.agent_tasks_csv?.[raw];
  if (direct) return direct;

  // Fall back to a best-effort normalisation.
  const k = normaliseKey(raw);
  if (k === 'inprogress') return 'in_progress';
  if (k === 'in_progress') return 'in_progress';
  if (k === 'review') return 'review';
  if (k === 'blocked') return 'blocked';
  if (k === 'done') return 'done';
  if (k === 'backlog') return 'backlog';

  return 'backlog';
}

function getStatusLabel(canonicalKey, mapping) {
  return mapping?.canonical?.task?.[canonicalKey]?.label || canonicalKey;
}

function groupByStatus(tasks, mapping) {
  const buckets = new Map();
  for (const t of tasks) {
    const key = canonicaliseStatus(t.status, mapping);
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(t);
  }
  return buckets;
}

function renderBoard(targetEl, buckets, mapping) {
  const known = COLUMN_ORDER.filter((k) => buckets.has(k));
  const unknown = [...buckets.keys()].filter((k) => !COLUMN_ORDER.includes(k)).sort();
  const order = [...known, ...unknown];

  targetEl.innerHTML = order
    .map((k) => renderColumn(k, getStatusLabel(k, mapping), buckets.get(k) || []))
    .join('\n');
}

function refreshSecondsFromQuery() {
  const params = new URLSearchParams(location.search);
  const raw = params.get('refresh_s') || params.get('autorefresh_s') || '';
  const n = Number.parseInt(String(raw), 10);
  if (!Number.isFinite(n) || n <= 0) return 0;
  // Guardrails so someone can’t accidentally DoS themselves.
  return Math.max(10, Math.min(600, n));
}

function setMeta(metaEl, tasksCount, refreshSeconds = 0) {
  const now = new Date();
  const refreshNote = refreshSeconds > 0 ? ` · Auto-refresh: ${refreshSeconds}s` : '';
  metaEl.textContent = `Loaded ${tasksCount} tasks · ${now.toLocaleString()}${refreshNote}`;
}

function highlightTaskFromQuery() {
  const params = new URLSearchParams(location.search);
  const taskId = (params.get('task_id') || params.get('task') || '').trim();
  if (!taskId) return;

  const card = document.querySelector(`[data-task-id="${CSS.escape(taskId)}"]`);
  if (!card) return;

  card.classList.add('item--highlight');

  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  card.scrollIntoView({
    block: 'center',
    inline: 'nearest',
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });

  const firstLink = card.querySelector('a');
  if (firstLink) firstLink.focus({ preventScroll: true });
}

function enableBoardKeyboardScroll(boardEl) {
  if (!boardEl) return;

  boardEl.addEventListener('keydown', (e) => {
    if (e.defaultPrevented) return;
    if (e.target !== boardEl) return;

    const key = e.key;
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const behavior = prefersReducedMotion ? 'auto' : 'smooth';

    const firstCol = boardEl.querySelector?.('.column');
    const step = firstCol ? Math.round(firstCol.getBoundingClientRect().width + 24) : Math.round(boardEl.clientWidth * 0.85);
    const page = Math.max(240, Math.round(boardEl.clientWidth * 0.95));

    if (key === 'ArrowRight') {
      e.preventDefault();
      boardEl.scrollBy({ left: step, top: 0, behavior });
      return;
    }
    if (key === 'ArrowLeft') {
      e.preventDefault();
      boardEl.scrollBy({ left: -step, top: 0, behavior });
      return;
    }
    if (key === 'PageDown') {
      e.preventDefault();
      boardEl.scrollBy({ left: page, top: 0, behavior });
      return;
    }
    if (key === 'PageUp') {
      e.preventDefault();
      boardEl.scrollBy({ left: -page, top: 0, behavior });
      return;
    }
    if (key === 'Home') {
      e.preventDefault();
      boardEl.scrollTo({ left: 0, top: 0, behavior });
      return;
    }
    if (key === 'End') {
      e.preventDefault();
      boardEl.scrollTo({ left: boardEl.scrollWidth, top: 0, behavior });
    }
  });
}

async function boot() {
  const main = document.getElementById('main');
  const board = document.querySelector('[data-agent-queue-board]');
  const meta = document.querySelector('[data-agent-queue-meta]');
  if (!board) return;

  enableBoardKeyboardScroll(board);

  const refreshSeconds = refreshSecondsFromQuery();
  let inFlight = false;

  async function renderOnce({ announce = false } = {}) {
    if (inFlight) return;
    inFlight = true;

    if (main) main.setAttribute('aria-busy', 'true');
    board.setAttribute('aria-busy', 'true');

    if (!announce) {
      board.innerHTML = `<div class="column"><div class="column__shell"><h2 class="column__header">Loading…</h2><div class="item"><div class="item__small">Fetching agent-tasks.csv</div></div></div></div>`;
      if (meta) meta.textContent = 'Loading agent queue…';
    } else {
      // Silent refresh: keep the UI stable, but announce refresh intent.
      if (meta) meta.textContent = 'Refreshing agent queue…';
    }

    try {
      const [mapping, tasks] = await Promise.all([loadMapping(), loadTasks()]);
      const buckets = groupByStatus(tasks, mapping);
      renderBoard(board, buckets, mapping);
      if (meta) setMeta(meta, tasks.length, refreshSeconds);
      highlightTaskFromQuery();
    } catch (err) {
      console.error(err);
      const msg = escapeHtml(err?.message || String(err));
      board.innerHTML = `
        <div class="column">
          <div class="column__shell">
            <h2 class="column__header">Error</h2>
            <div class="item">
              <div class="notice notice--danger" role="alert">${msg}</div>
            </div>
          </div>
        </div>`;
      if (meta) meta.textContent = `Agent queue error: ${err?.message || String(err)}`;
    } finally {
      inFlight = false;
      board.setAttribute('aria-busy', 'false');
      if (main) main.setAttribute('aria-busy', 'false');
    }
  }

  await renderOnce();

  if (refreshSeconds > 0) {
    window.setInterval(() => {
      // Refresh silently (no “Loading…” flash). Meta timestamp updates.
      void renderOnce({ announce: true });
    }, refreshSeconds * 1000);
  }
}

boot();
