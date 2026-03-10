// activity_live_v1.js
// Activity timeline rendering (events JSONL first; derived fallback to CSVs).
// v1 constraints: static hosting, no directory listing; parse first N lines; show skip/truncation notices.

import { parseCsv } from './csv_v1.js';

const EVENTS_FILE = 'events/events-2026-03.jsonl';
const MAX_EVENTS = 50;
const MAX_RENDER = 50;
const DERIVED_WINDOW_DAYS = 7;

function el(id) {
  return document.getElementById(id);
}

function parseDateUtcish(raw) {
  const s = (raw ?? '').trim();
  if (!s) return null;

  // Date-only → treat as UTC midnight.
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) {
    const d = new Date(`${s}T00:00:00Z`);
    return Number.isNaN(d.getTime()) ? null : d;
  }

  const d = new Date(s);
  return Number.isNaN(d.getTime()) ? null : d;
}

function iso(d) {
  try {
    return d.toISOString();
  } catch {
    return null;
  }
}

function text(node, value) {
  node.textContent = value;
}

function normaliseEnvelope(e) {
  if (e && e.event_type && e.occurred_at && e.data) return e;
  if (e && e.type && e.payload) {
    return {
      ...e,
      event_type: e.type,
      occurred_at: e.occurred_at ?? e.occurredAt,
      data: e.payload
    };
  }
  return null;
}

function legacyPrdLineToItem(line) {
  const occurredAt = line.ts;
  const type = (line.type ?? '').toLowerCase();
  let domain = 'pipeline';
  if (type.includes('task')) domain = 'task';
  else if (type.includes('job')) domain = 'job';
  else if (type.includes('application')) domain = 'application';

  const item = {
    id: `legacy:${occurredAt}:${line.type}:${line.title}`,
    occurredAt,
    domain,
    summary: line.title || line.type || 'Activity',
    actor: line.actor || 'system',
    severity: 'info',
    links: []
  };

  if (Array.isArray(line.refs)) {
    for (const r of line.refs) {
      const href = (r ?? '').trim();
      if (!href) continue;
      // Keep conservative: only link if it looks like a relative HTML/MD/PDF path.
      if (/^(?:[a-z]+:)?\/\//i.test(href)) {
        // External URL: allow, but keep label simple.
        item.links.push({ label: 'ref', href });
      } else {
        item.links.push({ label: 'ref', href });
      }
    }
  }

  return item;
}

function eventToItem(env) {
  const e = normaliseEnvelope(env);
  if (!e) return null;

  const occurredAt = e.occurred_at;
  const d = parseDateUtcish(occurredAt);
  if (!d) return null;

  const eventType = (e.event_type ?? '').trim();
  const data = e.data ?? {};

  let domain = 'pipeline';
  if (eventType.startsWith('crm.job.')) domain = 'job';
  else if (eventType.startsWith('crm.application.')) domain = 'application';
  else if (eventType.startsWith('crm.task.')) domain = 'task';
  else if (eventType.startsWith('pipeline.')) domain = 'pipeline';
  else if (eventType.startsWith('ops.')) domain = 'pipeline';

  let summary = eventType || 'Activity';
  if (data.old_status && data.new_status) {
    summary = `Moved: ${data.old_status} → ${data.new_status}`;
    if (data.entity_label) summary = `${data.entity_label} ${summary}`;
  } else if (data.summary) {
    summary = String(data.summary);
  }

  const detail = data.reason ? String(data.reason) : '';

  let severity = 'info';
  const ns = String(data.new_status ?? '').toLowerCase();
  if (['rejected', 'withdrawn', 'dropped'].includes(ns)) severity = 'danger';
  if (String(data.status ?? '').toLowerCase() === 'blocked') severity = 'danger';

  const actor = data.changed_by || e.producer?.name || '';

  return {
    id: `${eventType}:${occurredAt}:${data.role_id ?? data.task_id ?? ''}`,
    occurredAt: iso(d) ?? occurredAt,
    domain,
    summary,
    detail: detail || undefined,
    actor: actor || undefined,
    severity,
    links: []
  };
}

function parseEventsJsonl(textRaw) {
  const lines = String(textRaw ?? '').split('\n');
  const items = [];
  let invalid = 0;
  let parsedNonEmpty = 0;
  let nonEmptyTotal = 0;

  for (const ln of lines) {
    if (ln.trim()) nonEmptyTotal += 1;
  }

  for (const ln of lines) {
    const s = ln.trim();
    if (!s) continue;
    if (parsedNonEmpty >= MAX_EVENTS) break;

    parsedNonEmpty += 1;

    try {
      const obj = JSON.parse(s);
      // PRD-006 legacy line support.
      if (obj && obj.ts && obj.type && obj.title) {
        items.push(legacyPrdLineToItem(obj));
        continue;
      }

      const item = eventToItem(obj);
      if (item) items.push(item);
      else invalid += 1;
    } catch {
      invalid += 1;
    }
  }

  const truncated = nonEmptyTotal > MAX_EVENTS;
  return { items, invalid, truncated };
}

async function fetchText(path) {
  const res = await fetch(path, { cache: 'no-store' });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return await res.text();
}

function withinDays(d, days) {
  const now = Date.now();
  const ms = days * 24 * 60 * 60 * 1000;
  return (now - d.getTime()) <= ms;
}

function deriveFromCsv(taskRows, jobRows) {
  const out = [];

  for (const r of taskRows) {
    const d = parseDateUtcish(r.updated_at);
    if (!d || !withinDays(d, DERIVED_WINDOW_DAYS)) continue;
    const rolePrefix = r.role_id ? `${r.role_id} · ` : '';
    out.push({
      id: `task:${r.task_id}`,
      occurredAt: iso(d) ?? r.updated_at,
      domain: 'task',
      summary: `${rolePrefix}${r.status}: ${r.title}`,
      detail: r.notes || undefined,
      severity: String(r.status).toLowerCase() === 'blocked' ? 'danger' : 'info',
      links: [{ label: 'Agent Queue', href: 'agent-queue.html' }]
    });
  }

  for (const r of jobRows) {
    const d = parseDateUtcish(r.updated_at || r.last_action);
    if (!d || !withinDays(d, DERIVED_WINDOW_DAYS)) continue;
    const next = (r.next_action ?? '').trim();
    const nextSuffix = next ? ` • Next: ${next}` : '';
    const na = next.toLowerCase();
    const severity = (na.includes('assess') || na.includes('prep') || na.includes('chase')) ? 'warning' : 'info';
    out.push({
      id: `job:${r.role_id}`,
      occurredAt: iso(d) ?? (r.updated_at || r.last_action),
      domain: 'job',
      summary: `${r.status}: ${r.title}${nextSuffix}`,
      detail: r.notes || undefined,
      severity,
      links: [{ label: 'Pipeline', href: 'kanban.html' }]
    });
  }

  out.sort((a, b) => (new Date(b.occurredAt)).getTime() - (new Date(a.occurredAt)).getTime());
  return out;
}

function renderNotice(container, msg) {
  const div = document.createElement('div');
  div.className = 'notice';
  div.setAttribute('role', 'status');
  text(div, msg);
  container.appendChild(div);
}

function renderTimeline(container, items) {
  const list = document.createElement('ol');
  list.className = 'timeline';

  for (const it of items.slice(0, MAX_RENDER)) {
    const li = document.createElement('li');

    const card = document.createElement('div');
    card.className = 'item';

    const h = document.createElement('h3');
    h.className = 'item__title';
    text(h, it.summary);

    const meta = document.createElement('p');
    meta.className = 'item__meta';
    const parts = [];
    parts.push(`${it.domain.toUpperCase()} · ${it.occurredAt.replace('T', ' ').replace('Z', ' UTC')}`);
    if (it.actor) parts.push(`by ${it.actor}`);
    text(meta, parts.join(' · '));

    card.appendChild(h);
    card.appendChild(meta);

    if (it.detail) {
      const p = document.createElement('p');
      p.className = 'item__sub';
      text(p, it.detail);
      card.appendChild(p);
    }

    if (Array.isArray(it.links) && it.links.length) {
      const links = document.createElement('p');
      links.className = 'item__actions';

      for (const l of it.links) {
        const a = document.createElement('a');
        a.className = 'btn';
        a.href = l.href;
        a.rel = 'noopener';
        text(a, l.label);
        links.appendChild(a);
      }
      card.appendChild(links);
    }

    li.appendChild(card);
    list.appendChild(li);
  }

  container.appendChild(list);
}

async function main() {
  const root = el('activityRoot');
  const meta = el('activityMeta');
  const out = el('activityOut');

  root?.setAttribute('aria-busy', 'true');
  if (meta) text(meta, 'Loading activity…');

  // 1) Try events JSONL.
  try {
    const txt = await fetchText(EVENTS_FILE);
    const parsed = parseEventsJsonl(txt);

    if (meta) text(meta, `Source: events (${EVENTS_FILE})`);

    if (parsed.invalid > 0) renderNotice(out, `${parsed.invalid} lines skipped (invalid JSON).`);
    if (parsed.truncated) renderNotice(out, `Showing first 50 events.`);

    parsed.items.sort((a, b) => (new Date(b.occurredAt)).getTime() - (new Date(a.occurredAt)).getTime());
    if (parsed.items.length === 0) renderNotice(out, 'No recent activity.');
    else renderTimeline(out, parsed.items);

    root?.setAttribute('aria-busy', 'false');
    return;
  } catch (e) {
    // Fall through to derived.
    if (meta) text(meta, 'Event feed unavailable, showing derived activity.');
  }

  // 2) Derived fallback.
  try {
    const [tasksText, jobsText] = await Promise.all([
      fetchText('agent-tasks.csv'),
      fetchText('job-pipeline.csv')
    ]);

    const tasks = parseCsv(tasksText);
    const jobs = parseCsv(jobsText);

    const derived = deriveFromCsv(tasks, jobs);
    if (derived.length === 0) renderNotice(out, 'No recent activity.');
    else renderTimeline(out, derived);
  } catch (e) {
    renderNotice(out, `Could not load activity: ${e?.message || e}`);
  } finally {
    root?.setAttribute('aria-busy', 'false');
  }
}

main();
