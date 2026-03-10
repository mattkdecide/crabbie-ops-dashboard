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
  const t = Date.parse(iso||'');
  if(!t) return null;
  return (Date.now()-t)/36e5;
}

function clear(node){
  while(node && node.firstChild) node.removeChild(node.firstChild);
}

function mk(tag, attrs){
  const el = document.createElement(tag);
  if(attrs){
    for(const [k,v] of Object.entries(attrs)){
      if(v===undefined || v===null) continue;
      if(k==='class') el.className = String(v);
      else el.setAttribute(k, String(v));
    }
  }
  return el;
}

function card(title, metaText){
  const wrap = mk('div', {class:'item'});
  const h = mk('h3', {class:'item__title'});
  h.textContent = title;
  const meta = mk('div', {class:'item__meta'});
  meta.textContent = metaText;
  wrap.appendChild(h);
  wrap.appendChild(meta);
  return wrap;
}

function linkCard(title, href){
  const wrap = mk('div', {class:'item item--link'});
  const a = mk('a', {class:'item__link', href});
  const h = mk('h3', {class:'item__title'});
  h.textContent = title;
  a.appendChild(h);
  wrap.appendChild(a);
  return wrap;
}

async function initExecDashboard(){
  const el = document.getElementById('execDashboard');
  if(!el) return;

  el.setAttribute('aria-busy', 'true');

  try{
    const csv = await loadText('agent-tasks.csv');
    const rows = parseCsv(csv);

    const by = s => rows.filter(r => (r.status||'').toLowerCase()===s).length;
    const done = by('done');
    const prog = by('in progress') + by('in_progress');
    const blocked = by('blocked');
    const backlog = by('backlog');
    const approved = by('approved');

    const recent24 = rows.filter(r => {
      const u = r.updated_at || r.updatedAt || '';
      if(!u) return false;
      const h = hoursAgo(u);
      return h!==null && h<=24;
    }).length;

    const score = Math.max(0, Math.min(100, Math.round((done*1.2 + prog*0.8 + recent24*0.5 - blocked*1.1) / Math.max(1, rows.length) * 100)));

    clear(el);
    el.appendChild(card('Productivity Score', `${score}/100`));
    el.appendChild(card('Flow Snapshot', `In Progress ${prog} · Done ${done} · Blocked ${blocked} · Approved ${approved} · Backlog ${backlog}`));
    el.appendChild(card('Last 24h Movement', `${recent24} tasks updated`));
    el.appendChild(linkCard('Open Team Queue', 'agent-queue.html'));
    el.appendChild(linkCard('Open Agents + Live Capacity', 'agents.html'));

    const stamp = document.getElementById('execStamp');
    if(stamp) stamp.textContent = 'Live refresh every 60s · Last refresh: ' + new Date().toLocaleTimeString();
  }catch(err){
    clear(el);
    el.appendChild(card('Exec dashboard unavailable', 'Could not load agent-tasks.csv'));
  }finally{
    el.removeAttribute('aria-busy');
  }
}

window.initExecDashboard = function(){
  initExecDashboard();
  if(window.__execDashTimer) clearInterval(window.__execDashTimer);
  window.__execDashTimer = setInterval(initExecDashboard, 60000);
};
