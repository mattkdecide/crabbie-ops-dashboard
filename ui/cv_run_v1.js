// cv_run_v1.js
// CV Run page logic: generate deterministic pipeline command + wire links.
// Pulls role metadata from job-pipeline.csv when available.

import { parseCsv } from './csv_v1.js';

function $(id) {
  return document.getElementById(id);
}

function setDisabledLink(a, href, enabledLabel) {
  if (!a) return;
  if (!href) {
    a.setAttribute('href', '#');
    a.setAttribute('aria-disabled', 'true');
    return;
  }
  a.setAttribute('href', href);
  a.removeAttribute('aria-disabled');
  if (enabledLabel) a.textContent = enabledLabel;
}

function buildCommand() {
  const roleKey = ($('roleKey')?.value || '').trim() || 'R-2026-XXXX';
  const title = ($('title')?.value || '').trim() || 'Untitled role';
  const inputFile = ($('inputFile')?.value || '').trim() || `inputs/jobs/${roleKey}/intake.txt`;
  const profile = ($('profile')?.value || 'pass').trim();

  const safeTitle = title.replaceAll('"', '\\"');
  const cmd = `python3 ops/cv-pipeline/run_cv_deterministic.py --role-key ${roleKey} --title "${safeTitle}" --input-file ${inputFile} --profile ${profile}`;

  const cmdEl = $('cmd');
  if (cmdEl) cmdEl.textContent = cmd;

  const draftPath = `outputs/cv/${roleKey}/draft.md`;
  const pdfPath = `outputs/cv/${roleKey}/final.pdf`;

  const outDraft = $('outDraft');
  if (outDraft) outDraft.textContent = draftPath;
  const outPdf = $('outPdf');
  if (outPdf) outPdf.textContent = pdfPath;

  // Output quick links (enabled/disabled after a check).
  const draftBtn = $('openDraftBtn');
  const pdfBtn = $('openPdfBtn');
  // Always set the hrefs; we keep aria-disabled until the existence check succeeds.
  setDisabledLink(draftBtn, draftPath);
  setDisabledLink(pdfBtn, pdfPath);

  const badges = $('outputBadges');
  if (badges) badges.innerHTML = '';

  const previewLink = $('previewLink');
  if (previewLink) {
    const q = encodeURIComponent(draftPath);
    previewLink.setAttribute('href', `cv-preview.html?file=${q}`);
  }

  const kanbanLink = $('kanbanLink');
  if (kanbanLink) kanbanLink.setAttribute('href', `kanban.html?role_id=${encodeURIComponent(roleKey)}`);

  return cmd;
}

async function copyCommand() {
  const cmd = buildCommand();
  const btn = $('copyBtn');
  const live = $('copyStatus');
  const notice = $('copyNotice');

  try {
    await navigator.clipboard.writeText(cmd);

    const prev = btn?.textContent;
    if (btn) btn.textContent = 'Copied';
    if (live) live.textContent = 'Command copied to clipboard.';
    if (notice) notice.hidden = true;

    window.setTimeout(() => {
      if (btn && prev) btn.textContent = prev;
      if (live) live.textContent = '';
    }, 900);
  } catch (_) {
    if (live) live.textContent = 'Clipboard copy failed. Select and copy manually.';
    if (notice) {
      notice.textContent = 'Clipboard copy failed (browser permission or insecure context). Select the command and copy manually.';
      notice.hidden = false;
    }
  }
}

async function fetchExists(path) {
  const url = String(path || '').trim();
  if (!url) return false;

  // Some static hosts don’t support HEAD. Try HEAD first, then fall back to GET.
  try {
    const head = await fetch(url, { method: 'HEAD', cache: 'no-store' });
    if (head.ok) return true;
    if (head.status === 404) return false;
    // If HEAD returns a weird status, fall through to GET.
  } catch (_) {
    // Ignore and try GET.
  }

  try {
    const res = await fetch(url, { cache: 'no-store' });
    return !!res.ok;
  } catch (_) {
    return false;
  }
}

function renderOutputBadges({ draftOk, pdfOk } = {}) {
  const el = $('outputBadges');
  if (!el) return;

  const mk = (ok, label) => {
    const cls = ok ? 'badge badge--success' : 'badge badge--danger';
    const text = ok ? `${label}: available` : `${label}: missing`;
    return `<span class="${cls}">${text}</span>`;
  };

  el.innerHTML = [mk(!!draftOk, 'Draft'), mk(!!pdfOk, 'PDF')].join('');
}

async function checkOutputs() {
  const roleKey = ($('roleKey')?.value || '').trim() || 'R-2026-XXXX';
  const draftPath = `outputs/cv/${roleKey}/draft.md`;
  const pdfPath = `outputs/cv/${roleKey}/final.pdf`;

  const btn = $('checkOutputsBtn');
  const prev = btn?.textContent;
  if (btn) btn.textContent = 'Checking…';

  const [draftOk, pdfOk] = await Promise.all([fetchExists(draftPath), fetchExists(pdfPath)]);

  // Enable/disable quick links.
  const draftBtn = $('openDraftBtn');
  const pdfBtn = $('openPdfBtn');

  if (draftBtn) {
    if (draftOk) draftBtn.removeAttribute('aria-disabled');
    else draftBtn.setAttribute('aria-disabled', 'true');
  }
  if (pdfBtn) {
    if (pdfOk) pdfBtn.removeAttribute('aria-disabled');
    else pdfBtn.setAttribute('aria-disabled', 'true');
  }

  renderOutputBadges({ draftOk, pdfOk });

  if (btn) btn.textContent = prev || 'Check outputs';
}

function applyPipelineDefaults(roleKey, pipelineIndex) {
  const meta = pipelineIndex.get(roleKey);
  if (!meta) return;

  const titleEl = $('title');
  if (
    titleEl &&
    (!titleEl.value || titleEl.value.trim() === '' || titleEl.value.includes('General Manager, Growth and Transformation'))
  ) {
    if (meta.title) titleEl.value = meta.title;
  }

  const inputEl = $('inputFile');
  if (inputEl) {
    const fallback = `inputs/jobs/${roleKey}/intake.txt`;
    inputEl.value = meta.inputFile || fallback;
  }
}

async function loadPipelineIndex(pipelineIndex) {
  try {
    const res = await fetch('job-pipeline.csv', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    const rows = parseCsv(text);
    if (!Array.isArray(rows) || rows.length === 0) return;

    for (const r of rows) {
      const role = String(r.role_id || '').trim();
      if (!role) continue;
      pipelineIndex.set(role, {
        title: String(r.title || '').trim(),
        inputFile: String(r.input_file || '').trim()
      });
    }

    const dl = $('roleKeyList');
    if (dl) {
      dl.innerHTML = '';
      for (const [role, meta] of pipelineIndex.entries()) {
        const opt = document.createElement('option');
        opt.value = role;
        const label = meta.title ? ` ${meta.title}` : '';
        opt.label = `${role}${label}`;
        dl.appendChild(opt);
      }
    }
  } catch (_) {
    // Silent: file:// context or missing CSV should not break CV Run.
  }
}

function hydrateFromQuery() {
  const params = new URLSearchParams(location.search);
  const rk = params.get('role_key');
  if (rk && $('roleKey')) {
    $('roleKey').value = rk;
    if ($('inputFile')) $('inputFile').value = `inputs/jobs/${rk}/intake.txt`;
  }
  const t = params.get('title');
  if (t && $('title')) $('title').value = t;
}

function wireInputs(pipelineIndex) {
  const roleKeyEl = $('roleKey');
  const titleEl = $('title');
  const inputEl = $('inputFile');
  const profileEl = $('profile');

  for (const el of [titleEl, inputEl, profileEl]) {
    if (!el) continue;
    el.addEventListener('input', buildCommand);
    el.addEventListener('change', buildCommand);
  }

  if (roleKeyEl) {
    const onRoleChange = () => {
      const rk = (roleKeyEl.value || '').trim();
      if (rk) applyPipelineDefaults(rk, pipelineIndex);
      buildCommand();
    };

    roleKeyEl.addEventListener('input', onRoleChange);
    roleKeyEl.addEventListener('change', onRoleChange);
  }

  const copyBtn = $('copyBtn');
  if (copyBtn) copyBtn.addEventListener('click', copyCommand);

  const checkBtn = $('checkOutputsBtn');
  if (checkBtn) checkBtn.addEventListener('click', () => void checkOutputs());
}

async function boot() {
  const pipelineIndex = new Map();

  hydrateFromQuery();
  wireInputs(pipelineIndex);

  await loadPipelineIndex(pipelineIndex);

  const rk = ($('roleKey')?.value || '').trim();
  if (rk) applyPipelineDefaults(rk, pipelineIndex);

  buildCommand();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => void boot());
} else {
  void boot();
}
