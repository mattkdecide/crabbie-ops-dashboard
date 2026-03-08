async function loadCsv(path){
  const res = await fetch(path + '?t=' + Date.now(), { cache: 'no-store' });
  if(!res.ok) throw new Error('Failed to load ' + path);
  return res.text();
}

function parseCsv(text){
  const rows=[]; let row=[]; let cell=''; let q=false;
  for(let i=0;i<text.length;i++){
    const c=text[i], n=text[i+1];
    if(c==='"'){
      if(q && n==='"'){ cell+='"'; i++; }
      else q=!q;
    } else if(c===',' && !q){ row.push(cell); cell=''; }
    else if((c==='\n' || c==='\r') && !q){
      if(c==='\r' && n==='\n') i++;
      row.push(cell); if(row.some(v=>v!=='')) rows.push(row); row=[]; cell='';
    } else cell+=c;
  }
  if(cell.length || row.length){ row.push(cell); rows.push(row); }
  const head=rows.shift()||[];
  return rows.map(r=>Object.fromEntries(head.map((h,i)=>[h,(r[i]||'').trim()])));
}

function normOwner(v=''){ return v.trim().toLowerCase(); }
function normStatus(v=''){ return v.trim().toLowerCase(); }

function utilisation(items){
  const total = items.length;
  const inProg = items.filter(x=>['in progress','in_progress'].includes(normStatus(x.status))).length;
  const blocked = items.filter(x=>normStatus(x.status)==='blocked').length;
  const backlog = items.filter(x=>normStatus(x.status)==='backlog').length;
  let pct = 0;
  if(total>0) pct = Math.min(100, Math.round(((inProg + blocked*0.85 + backlog*0.45)/total)*100));
  return {total,inProg,blocked,backlog,pct};
}

function colour(p){
  if(p>=85) return 'danger';
  if(p>=65) return 'warning';
  return 'success';
}

function renderGauge(container, u){
  container.innerHTML = `
    <div class="cap-row">
      <div class="cap-meta">Capacity</div>
      <div class="cap-val">${u.pct}%</div>
    </div>
    <div class="cap-track" role="img" aria-label="Capacity ${u.pct}%">
      <div class="cap-fill ${colour(u.pct)}" style="width:${u.pct}%"></div>
    </div>
    <div class="cap-sub">In Progress ${u.inProg} · Blocked ${u.blocked} · Backlog ${u.backlog} · Total ${u.total}</div>
  `;
}

async function initAgentCapacity(){
  try{
    const csv = await loadCsv('agent-tasks.csv');
    const rows = parseCsv(csv);
    const boxes = [...document.querySelectorAll('[data-agent-owner]')];
    boxes.forEach(el=>{
      const owner = normOwner(el.getAttribute('data-agent-owner')||'');
      const mine = rows.filter(r=> normOwner(r.owner||r.Owner||'')===owner);
      renderGauge(el, utilisation(mine));
    });
  }catch(e){
    console.warn(e);
  }
}

window.initAgentCapacity = initAgentCapacity;