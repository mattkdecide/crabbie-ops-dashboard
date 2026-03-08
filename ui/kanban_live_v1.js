// kanban_live_v1.js
// Live Kanban rendering from job-pipeline.csv.
// Uses canonical CRM status mapping when available.

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

function renderCard(role) {
  const title = escapeHtml(role.title || 'Untitled role');
  const company = escapeHtml(role.company || '');
  const location = escapeHtml(role.location || '');
  const meta = [company, location].filter(Boolean).join(' · ');

  const lines = [];
  lines.push(`<div class="item">`);
  lines.push(`  <h3 class="item__title">${title}</h3>`);
  if (meta) lines.push(`  <div class="item__meta">${meta}</div>`);

  const quickLinks = [];
  const link = safeLink(role.url);
  if (link) quickLinks.push(link);
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

function groupByStatus(jobs, mapping) {
  const buckets = new Map();
  for (const job of jobs) {
    const key = canonicaliseStatus(job.status, mapping);
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(job);
  }
  return buckets;
}

function renderBoard(targetEl, buckets, mapping) {
  const statuses = new Set([...buckets.keys()]);
  const columnOrder = getColumnOrder(mapping);
  const ordered = [...columnOrder.filter((s) => statuses.has(s))];
  // Append any unknown statuses at the end.
  for (const s of [...statuses].sort()) {
    if (!ordered.includes(s)) ordered.push(s);
  }

  targetEl.innerHTML = ordered
    .map((k) => renderColumn(getStatusLabel(k, mapping), buckets.get(k) || []))
    .join('\n');
}

function setMeta(metaEl, jobsCount) {
  const now = new Date();
  metaEl.textContent = `Loaded ${jobsCount} roles · ${now.toLocaleString()}`;
}

async function boot() {
  const board = document.querySelector('[data-kanban-board]');
  const meta = document.querySelector('[data-kanban-meta]');
  if (!board) return;

  board.innerHTML = `<div class="column"><div class="column__shell"><h2 class="column__header">Loading…</h2><div class="item"><div class="item__small">Fetching job-pipeline.csv</div></div></div></div>`;

  try {
    const [mapping, jobs] = await Promise.all([loadMapping(), loadJobs()]);
    const buckets = groupByStatus(jobs, mapping);
    renderBoard(board, buckets, mapping);
    if (meta) setMeta(meta, jobs.length);
  } catch (err) {
    console.error(err);
    board.innerHTML = `<div class="column"><div class="column__shell"><h2 class="column__header">Error</h2><div class="item"><div class="item__small">${escapeHtml(err?.message || String(err))}</div></div></div></div>`;
  }
}

boot();
