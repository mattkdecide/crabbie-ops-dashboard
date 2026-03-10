// kanban_live_v1.js
// Live Kanban rendering from job-pipeline.csv.
// Uses canonical CRM status mapping when available.
//
// Optional auto-refresh:
// - Add ?refresh_s=60 (or ?autorefresh_s=60) to refresh in-place every N seconds.

import { parseCsv } from './csv_v1.js';

const FALLBACK_STATUS_ALIASES = {
  'cv ready': 'cv_ready',
  'cv-ready': 'cv_ready',
  'cvready': 'cv_ready',
  'ready': 'cv_ready',
  'new': 'new',
  'pinned': 'pinned',
  'hold': 'hold',
  'on hold': 'hold',
  'assessing': 'assessing',
  'applied': 'applied',
  'interview': 'interview',
  'offer': 'offer',
  'rejected': 'rejected',
  'ignored': 'ignored'
};

const FALLBACK_COLUMN_ORDER = [
  'pinned',
  'new',
  'assessing',
  'cv_ready',
  'applied',
  'interview',
  'offer',
  'rejected',
  'hold',
  'ignored'
];

function normaliseKey(raw) {
  return (raw ?? '')
    .trim()
    .toLowerCase()
    .replaceAll(/\s+/g, '_')
    .replaceAll(/[^a-z0-9_]/g, '');
}

function canonicaliseStatus(raw, mapping) {
  const rawTrim = (raw ?? '').trim();
  if (!rawTrim) return 'new';

  const direct = mapping?.mappings?.job_pipeline_csv?.[rawTrim];
  if (direct) return direct;

  const key = normaliseKey(rawTrim);
  return FALLBACK_STATUS_ALIASES[key] ?? key ?? 'new';
}

function getStatusLabel(canonicalKey, mapping) {
  return mapping?.canonical?.pipeline?.[canonicalKey]?.label || canonicalKey;
}

function getColumnOrder(mapping) {
  const order = mapping?.canonical?.pipeline_order;
  if (Array.isArray(order) && order.length) return order;
  return FALLBACK_COLUMN_ORDER;
}

function tierBadge(tier) {
  const t = (tier ?? '').trim().toUpperCase();
  if (!t) return '';
  return `<span class="badge badge--tier">Tier ${escapeHtml(t)}</span>`;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function safeLink(url) {
  const u = (url ?? '').trim();
  if (!u) return '';
  return `<a href="${escapeHtml(u)}" target="_blank" rel="noopener">Open listing ↗</a>`;
}

function cvPreviewLink(roleId) {
  const id = (roleId ?? '').trim();
  if (!id) return '';
  const file = `outputs/cv/${encodeURIComponent(id)}/draft.md`;
  const q = encodeURIComponent(file);
  return `<a href="cv-preview.html?file=${q}">CV preview ↗</a>`;
}

function cvRunLink(roleId, title) {
  const id = (roleId ?? '').trim();
  if (!id) return '';

  const params = new URLSearchParams();
  params.set('role_key', id);
  if ((title ?? '').trim()) params.set('title', (title ?? '').trim());

  return `<a href="cv-run.html?${escapeHtml(params.toString())}">Run CV ↗</a>`;
}

function renderCard(role) {
  const title = escapeHtml(role.title || 'Untitled role');
  const company = escapeHtml(role.company || '');
  const location = escapeHtml(role.location || '');
  const meta = [company, location].filter(Boolean).join(' · ');

  const roleId = (role.role_id ?? '').trim();
  const roleAttr = roleId ? ` data-role-id="${escapeHtml(roleId)}" id="role-${escapeHtml(roleId)}"` : '';

  const lines = [];
  lines.push(`<div class="item"${roleAttr}>`);
  lines.push(`  <h3 class="item__title">${title}</h3>`);
  if (meta) lines.push(`  <div class="item__meta">${meta}</div>`);

  const quickLinks = [];
  const link = safeLink(role.url);
  if (link) quickLinks.push(link);

  const run = cvRunLink(role.role_id, role.title);
  if (run) quickLinks.push(run);

  const cvPrev = cvPreviewLink(role.role_id);
  if (cvPrev) quickLinks.push(cvPrev);

  if (quickLinks.length) lines.push(`  <div class="item__small">${quickLinks.join(' · ')}</div>`);

  const badges = [];
  const tier = tierBadge(role.fit_tier);
  if (tier) badges.push(tier);
  if (badges.length) lines.push(`  <div class="badges">${badges.join('')}</div>`);

  if (role.role_id) lines.push(`  <div class="item__small">ID: ${escapeHtml(role.role_id)}</div>`);
  if (role.cv_file) lines.push(`  <div class="item__small">CV: ${escapeHtml(role.cv_file)}</div>`);
  if (role.next_action) lines.push(`  <div class="item__small">Next: ${escapeHtml(role.next_action)}</div>`);

  lines.push(`</div>`);
  return lines.join('\n');
}

function renderColumn(statusLabel, roles) {
  const header = `${escapeHtml(statusLabel)} (${roles.length})`;
  const cards = roles
    .slice()
    .sort((a, b) => (a.role_id || '').localeCompare(b.role_id || ''))
    .map(renderCard)
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

async function loadJobs() {
  const res = await fetch('job-pipeline.csv', { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to load job-pipeline.csv (${res.status})`);
  const text = await res.text();
  return parseCsv(text);
}

async function loadAll() {
  const [mapping, jobs] = await Promise.all([loadMapping(), loadJobs()]);
  return { mapping, jobs };
}

function groupByStatus(jobs, mapping) {
  const buckets = new Map();
  for (const job of jobs) {
    const key = canonicaliseStatus(job.status, mapping);
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(job);
  }
  return buckets;
}

function hideEmptyColumnsFromQuery() {
  const params = new URLSearchParams(location.search);
  const v = (params.get('hide_empty') || params.get('hide_empty_columns') || '').trim();
  if (!v) return false;
  return v === '1' || v.toLowerCase() === 'true' || v.toLowerCase() === 'yes';
}

function renderBoard(targetEl, buckets, mapping) {
  const statuses = new Set([...buckets.keys()]);
  const columnOrder = getColumnOrder(mapping);
  const hideEmpty = hideEmptyColumnsFromQuery();

  // Default: render the full canonical pipeline so the board is stable even when a column has 0 roles.
  // Opt-in: ?hide_empty=1 to only show columns that currently contain roles.
  const ordered = hideEmpty ? [...columnOrder.filter((s) => statuses.has(s))] : [...columnOrder];

  // Append any unknown statuses at the end.
  for (const s of [...statuses].sort()) {
    if (!ordered.includes(s)) ordered.push(s);
  }

  targetEl.innerHTML = ordered
    .map((k) => renderColumn(getStatusLabel(k, mapping), buckets.get(k) || []))
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

function setMeta(metaEl, jobsCount, refreshSeconds = 0) {
  const now = new Date();
  const refreshNote = refreshSeconds > 0 ? ` · Auto-refresh: ${refreshSeconds}s` : '';
  const hideEmpty = hideEmptyColumnsFromQuery();
  const columnsNote = hideEmpty ? ' · Columns: non-empty only' : ' · Columns: full pipeline';
  metaEl.textContent = `Loaded ${jobsCount} roles · ${now.toLocaleString()}${refreshNote}${columnsNote}`;
}

function highlightRoleFromQuery() {
  const params = new URLSearchParams(location.search);
  const roleId = (params.get('role_id') || params.get('role_key') || '').trim();
  if (!roleId) return;

  const card = document.querySelector(`[data-role-id="${CSS.escape(roleId)}"]`);
  if (!card) return;

  card.classList.add('item--highlight');

  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  card.scrollIntoView({
    block: 'center',
    inline: 'nearest',
    behavior: prefersReducedMotion ? 'auto' : 'smooth'
  });

  // If the card contains a link, make keyboard navigation nicer.
  const firstLink = card.querySelector('a');
  if (firstLink) firstLink.focus({ preventScroll: true });
}

// Keyboard horizontal scrolling is implemented generically in ui/scroll_a11y_v1.js
// so boards and tables share consistent behaviour.

async function boot() {
  const main = document.getElementById('main');
  const board = document.querySelector('[data-kanban-board]');
  const meta = document.querySelector('[data-kanban-meta]');
  if (!board) return;


  const refreshSeconds = refreshSecondsFromQuery();
  let inFlight = false;

  async function renderOnce({ announce = false } = {}) {
    if (inFlight) return;
    inFlight = true;

    if (main) main.setAttribute('aria-busy', 'true');
    board.setAttribute('aria-busy', 'true');

    if (!announce) {
      board.innerHTML = `<div class="column"><div class="column__shell"><h2 class="column__header">Loading…</h2><div class="item"><div class="item__small">Fetching job-pipeline.csv</div></div></div></div>`;
      if (meta) meta.textContent = 'Loading pipeline…';
    } else {
      // Silent refresh: keep the UI stable, but announce refresh intent.
      if (meta) meta.textContent = 'Refreshing pipeline…';
    }

    try {
      const { mapping, jobs } = await loadAll();
      const buckets = groupByStatus(jobs, mapping);
      renderBoard(board, buckets, mapping);
      if (meta) setMeta(meta, jobs.length, refreshSeconds);
      highlightRoleFromQuery();
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
      if (meta) meta.textContent = `Pipeline error: ${err?.message || String(err)}`;
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
