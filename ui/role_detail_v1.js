function parseCsv(text){
  const rows=[]; let row=[]; let cell=''; let q=false;
  for(let i=0;i<text.length;i++){
    const c=text[i], n=text[i+1];
    if(c==='"'){ if(q&&n==='"'){cell+='"'; i++;} else q=!q; }
    else if(c===','&&!q){ row.push(cell); cell=''; }
    else if((c==='\n'||c==='\r')&&!q){ if(c==='\r'&&n==='\n') i++; row.push(cell); if(row.some(v=>v!=='')) rows.push(row); row=[]; cell=''; }
    else cell+=c;
  }
  if(cell.length||row.length){ row.push(cell); rows.push(row); }
  const h=rows.shift()||[];
  return rows.map(r=>Object.fromEntries(h.map((k,i)=>[k,(r[i]||'').trim()])));
}

async function loadText(path){
  const src=[path,`https://raw.githubusercontent.com/mattkdecide/crabbie-ops-dashboard/main/${path}`];
  let lastErr=null;
  for(const s of src){
    try{
      const r=await fetch(s+'?t='+Date.now(),{cache:'no-store'});
      if(!r.ok){ lastErr=new Error(`${path} ${r.status}`); continue; }
      return await r.text();
    }catch(e){ lastErr=e; }
  }
  throw lastErr || new Error(`Failed: ${path}`);
}

function esc(s=''){ return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function byId(id){ return document.getElementById(id); }

async function exists(path){
  try{ const r=await fetch(path+'?t='+Date.now(),{method:'HEAD',cache:'no-store'}); if(r.ok) return true; }catch(_){ }
  try{ const r=await fetch(path+'?t='+Date.now(),{cache:'no-store'}); return r.ok; }catch(_){ return false; }
}

(async function init(){
  const status=byId('rdStatus');
  const roleId = new URLSearchParams(location.search).get('role_id') || '';
  if(!roleId){
    status.textContent='Missing role_id query parameter. Open from pipeline with ?role_id=...';
    return;
  }
  try{
    const [rolesCsv, runsCsv, histCsv] = await Promise.all([
      loadText('job-pipeline.csv'),
      loadText('cv-runs.csv').catch(()=>''),
      loadText('role-history.csv').catch(()=>''),
    ]);

    const roles=parseCsv(rolesCsv);
    const role=roles.find(r => (r.role_id||'')===roleId);
    if(!role){ status.textContent=`Role not found: ${roleId}`; return; }

    status.textContent=`Loaded ${roleId} (read-only hosted mode).`;

    byId('roleRecord').innerHTML =
      `Role: <strong>${esc(role.role_id)}</strong><br>`+
      `Company: ${esc(role.company||'—')}<br>`+
      `Title: ${esc(role.title||'—')}<br>`+
      `Location: ${esc(role.location||'—')}<br>`+
      `Status: ${esc(role.status||'—')}<br>`+
      `Priority: ${esc(role.priority||'—')}<br>`+
      `Fit score: ${esc(role.fit_score||'—')}<br>`+
      `Updated: ${esc(role.updated_at||'—')}`;

    const intake = role.input_file || `inputs/jobs/${roleId}/intake.txt`;
    byId('roleSource').innerHTML =
      `Source: ${role.link ? `<a href="${esc(role.link)}" target="_blank" rel="noopener">open listing ↗</a>` : '—'}<br>`+
      `Intake reference: <span class="mono">${esc(intake)}</span>`;

    const runs = runsCsv ? parseCsv(runsCsv).filter(r => (r.role_id||'')===roleId) : [];
    const latestRun = runs[0] || null;
    const manifestPath = `outputs/cv/${roleId}/manifest.json`;

    byId('cvStimulus').innerHTML =
      `Source CVs used: ${latestRun?.source_cvs ? esc(latestRun.source_cvs) : 'Not yet captured in current hosted record.'}<br>`+
      `Stimulus file: <span class="mono">${esc(intake)}</span><br>`+
      `CV run records: ${runs.length}`;

    const draftPath = latestRun?.draft_path || `outputs/cv/${roleId}/draft.md`;
    const pdfPath = latestRun?.pdf_path || `outputs/cv/${roleId}/final.pdf`;
    const draftOk = await exists(draftPath);
    const pdfOk = await exists(pdfPath);

    byId('latestArtefacts').innerHTML =
      `Draft: ${draftOk ? `<a href="cv-preview.html?file=${encodeURIComponent(draftPath)}">open preview</a>` : 'missing'} (<span class="mono">${esc(draftPath)}</span>)<br>`+
      `PDF: ${pdfOk ? `<a href="${esc(pdfPath)}" target="_blank" rel="noopener">open pdf ↗</a>` : 'missing'} (<span class="mono">${esc(pdfPath)}</span>)<br>`+
      `Run CV link: <a href="cv-run.html?role_key=${encodeURIComponent(roleId)}">open cv-run</a><br>`+
      `Manifest: <span class="mono">${esc(manifestPath)}</span>`;

    byId('lifecycleState').innerHTML =
      `Application state: ${esc(role.status||'—')}<br>`+
      `Next action: ${esc(role.next_action||'—')}<br>`+
      `Follow-up date: ${esc(role.follow_up_date||'—')}<br>`+
      `Closed reason: ${esc(role.closed_reason||'—')}`;

    const hist = histCsv ? parseCsv(histCsv).filter(h => (h.role_id||'')===roleId) : [];
    if(!hist.length){
      byId('roleHistory').innerHTML =
        `No role-history entries yet for ${esc(roleId)}.<br>`+
        `Current state snapshot: ${esc(role.status||'—')} @ ${esc(role.updated_at||'—')}.`;
    } else {
      byId('roleHistory').innerHTML = hist.slice(0,8).map(h =>
        `• ${esc(h.changed_at||'—')} — ${esc(h.event_type||'update')} — ${esc(h.from_status||'')} → ${esc(h.to_status||'')} ${h.note?`(${esc(h.note)})`:''}`
      ).join('<br>');
    }
  }catch(e){
    status.textContent=`Could not load role detail: ${e.message}`;
  }
})();