async function loadText(path){
  const r = await fetch(path + '?t=' + Date.now(), {cache:'no-store'});
  if(!r.ok) throw new Error('Failed: '+path);
  return r.text();
}

function parseCsv(text){
  const rows=[]; let row=[]; let cell=''; let q=false;
  for(let i=0;i<text.length;i++){
    const c=text[i], n=text[i+1];
    if(c==='"'){
      if(q && n==='"'){ cell+='"'; i++; } else q=!q;
    } else if(c===',' && !q){ row.push(cell); cell=''; }
    else if((c==='\n' || c==='\r') && !q){ if(c==='\r' && n==='\n') i++; row.push(cell); if(row.some(v=>v!=='')) rows.push(row); row=[]; cell=''; }
    else cell+=c;
  }
  if(cell.length || row.length){ row.push(cell); rows.push(row); }
  const head=rows.shift()||[];
  return rows.map(r=>Object.fromEntries(head.map((h,i)=>[h,(r[i]||'').trim()])));
}

function hoursAgo(iso){
  const t = Date.parse(iso||''); if(!t) return null;
  return (Date.now()-t)/36e5;
}

async function initExecDashboard(){
  const el = document.getElementById('execDashboard');
  if(!el) return;
  try{
    const csv = await loadText('agent-tasks.csv');
    const rows = parseCsv(csv);
    const by = s => rows.filter(r => (r.status||'').toLowerCase()===s).length;
    const done = by('done'), prog = by('in progress') + by('in_progress'), blocked = by('blocked'), backlog = by('backlog'), approved = by('approved');
    const recent24 = rows.filter(r => {
      const u = r.updated_at || r.updatedAt || ''; if(!u) return false;
      const h = hoursAgo(u); return h!==null && h<=24;
    }).length;

    const score = Math.max(0, Math.min(100, Math.round((done*1.2 + prog*0.8 + recent24*0.5 - blocked*1.1) / Math.max(1, rows.length) * 100)));

    el.innerHTML = `
      <div class='item'><h3 class='item__title'>Productivity Score</h3><div class='item__meta'>${score}/100</div></div>
      <div class='item'><h3 class='item__title'>Flow Snapshot</h3><div class='item__meta'>In Progress ${prog} · Done ${done} · Blocked ${blocked} · Approved ${approved} · Backlog ${backlog}</div></div>
      <div class='item'><h3 class='item__title'>Last 24h Movement</h3><div class='item__meta'>${recent24} tasks updated</div></div>
      <div class='item item--link'><a class='item__link' href='agent-queue.html'><h3 class='item__title'>Open Team Queue</h3></a></div>
      <div class='item item--link'><a class='item__link' href='agents.html'><h3 class='item__title'>Open Agents + Live Capacity</h3></a></div>
    `;

    const stamp = document.getElementById('execStamp');
    if(stamp) stamp.textContent = 'Live refresh every 60s · Last refresh: ' + new Date().toLocaleTimeString();
  }catch(err){
    el.innerHTML = `<div class='item'><h3 class='item__title'>Exec dashboard unavailable</h3><div class='item__meta'>Could not load agent-tasks.csv</div></div>`;
  }
}

window.initExecDashboard = function(){
  initExecDashboard();
  if(window.__execDashTimer) clearInterval(window.__execDashTimer);
  window.__execDashTimer = setInterval(initExecDashboard, 60000);
};
