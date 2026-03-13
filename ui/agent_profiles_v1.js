const AGENTS = [
  {key:'tide', name:'Crabbie', fn:'PM Control Tower', avatar:'ui/assets/crabbie-logo.jpg', taskAgents:['ops']},
  {key:'vantage', name:'Vantage', fn:'UX Strategist / Role Analyst', avatar:'ui/assets/agents/analytics-blue.png', taskAgents:['strategy']},
  {key:'polish', name:'Polish', fn:'UI Designer / Visual Quality', avatar:'ui/assets/agents/design.png', taskAgents:['ui']},
  {key:'forge', name:'Forge', fn:'CV Strategist', avatar:'ui/assets/agents/build-hardhat.png', taskAgents:['build']},
  {key:'ledger', name:'Ledger', fn:'CRM Manager', avatar:'ui/assets/agents/legal-red.png', taskAgents:['crm']},
  {key:'radar', name:'Radar', fn:'Opportunity Scout', avatar:'ui/assets/agents/radar-megaphone.png', taskAgents:['research','jobs']},
  {key:'atlas', name:'Atlas', fn:'Research & Contact Intel', avatar:'ui/assets/agents/ops-blue.png', taskAgents:['research']}
];

const GH_REPO = 'https://github.com/mattkdecide/crabbie-ops-dashboard';
const MS_DAY = 86400000;

function norm(v=''){ return String(v||'').trim().toLowerCase(); }
function parseDate(v=''){
  const raw = String(v||'').trim();
  if(!raw) return null;
  const iso = raw.length <= 10 ? `${raw}T00:00:00Z` : raw;
  const t = Date.parse(iso);
  return Number.isFinite(t) ? t : null;
}
function ageDays(v=''){
  const t = parseDate(v);
  if(t===null) return null;
  return Math.floor((Date.now()-t)/MS_DAY);
}

function parseCsv(text){
  const rows=[]; let row=[]; let cell=''; let q=false;
  for(let i=0;i<text.length;i++){
    const c=text[i], n=text[i+1];
    if(c==='"'){
      if(q && n==='"'){ cell+='"'; i++; }
      else q=!q;
    } else if(c===',' && !q){ row.push(cell); cell=''; }
    else if((c==='\n' || c==='\r') && !q){ if(c==='\r' && n==='\n') i++; row.push(cell); if(row.some(v=>v!=='')) rows.push(row); row=[]; cell=''; }
    else cell+=c;
  }
  if(cell.length || row.length){ row.push(cell); rows.push(row); }
  const head=rows.shift()||[];
  return rows.map(r=>Object.fromEntries(head.map((h,i)=>[h,(r[i]||'').trim()])));
}

async function loadText(path){
  const res = await fetch(path + '?t=' + Date.now(), {cache:'no-store'});
  if(!res.ok) throw new Error(`Failed to load ${path} (${res.status})`);
  return res.text();
}

function classifyWorkload(c){
  if(c.blocked >= 2 && c.blocked >= c.inProgress) return 'blocked-heavy';
  if(c.inProgress > 0) return 'active';
  if(c.approved > 0 || c.backlog > 0) return 'light';
  return 'idle';
}

function parseEvidence(updateCaptureText, lookbackDays=7){
  const lines = updateCaptureText.split(/\r?\n/);
  const today = Date.now();
  const rec = new Map(); // task_id -> {output, governance}
  let sectionDate = null;
  let sectionBuf = [];

  function flush(){
    if(!sectionDate || !sectionBuf.length) return;
    const secTime = parseDate(sectionDate);
    if(secTime===null) return;
    if((today-secTime)/MS_DAY > lookbackDays) return;
    const text = sectionBuf.join('\n').toLowerCase();
    const ids = [...new Set((text.match(/t-\d{4}/g)||[]).map(x=>x.toUpperCase()))];
    if(!ids.length) return;

    const output = /(shipped|files changed|implemented|hardened|added .* (allowlist|validation|path)|render|published|write logic|output produced)/.test(text);
    const governance = /(status|title updated|moved back to|backlog capture|decision adjustment|controlled status corrections|scope tightened|deferred)/.test(text);

    ids.forEach(id=>{
      if(!rec.has(id)) rec.set(id,{output:0,governance:0});
      const r = rec.get(id);
      if(output) r.output += 1;
      if(governance) r.governance += 1;
    });
  }

  for(const line of lines){
    const m = line.match(/^##\s+(\d{4}-\d{2}-\d{2})/);
    if(m){
      flush();
      sectionDate = m[1];
      sectionBuf = [];
    }
    if(sectionDate) sectionBuf.push(line);
  }
  flush();
  return rec;
}

function confidence(output7d, governance7d, updated7d){
  if(output7d <= 0) return 'assignment-only';
  if(output7d >= 2 && governance7d <= output7d) return 'evidence-backed';
  if(output7d >= 1 && updated7d <= output7d + 1) return 'evidence-backed';
  return 'mixed';
}

function shortTitle(t=''){ return t.length>64 ? t.slice(0,61)+'…' : t; }

function renderSummary(cards){
  const active = cards.filter(c=>c.inProgress>0).length;
  const blocked = cards.filter(c=>c.blocked>0).length;
  const stale = cards.filter(c=>c.staleActive>0).length;
  const evBacked = cards.filter(c=>c.evidenceMode==='evidence-backed').length;
  const assignOnly = cards.filter(c=>c.evidenceMode==='assignment-only').length;
  const el = document.getElementById('agents-summary');
  if(!el) return;
  el.innerHTML = `
    <div class="item__small"><strong>Agents with active work:</strong> ${active}</div>
    <div class="item__small"><strong>Agents blocked:</strong> ${blocked}</div>
    <div class="item__small"><strong>Agents stale:</strong> ${stale}</div>
    <div class="item__small"><strong>Evidence-backed agents:</strong> ${evBacked}</div>
    <div class="item__small"><strong>Assignment-only agents:</strong> ${assignOnly}</div>
  `;
}

function chipClass(v){
  if(v==='active') return 'badge badge--success';
  if(v==='blocked-heavy') return 'badge badge--warning';
  if(v==='idle') return 'badge';
  return 'badge';
}
function evChipClass(v){
  if(v==='evidence-backed') return 'badge badge--success';
  if(v==='mixed') return 'badge badge--warning';
  return 'badge';
}

function renderCards(metrics){
  const grid = document.getElementById('profiles-grid');
  if(!grid) return;
  grid.innerHTML = '';

  metrics.forEach(m=>{
    const taskFile = `${GH_REPO}/blob/main/agent-tasks.csv`;
    const profileFile = `agents/${m.key}.md`;
    const ghEdit = `${GH_REPO}/edit/main/${profileFile}`;
    const activeTasks = m.tasks.filter(t=>norm(t.status)==='in progress').slice(0,3);
    const activeExtra = Math.max(0, m.tasks.filter(t=>norm(t.status)==='in progress').length - activeTasks.length);
    const blocker = m.tasks.find(t=>norm(t.status)==='blocked');

    const lines = [];
    if(blocker) lines.push(`Top blocker: ${blocker.task_id} ${shortTitle(blocker.title || '')}`);
    if(m.staleActive>0) lines.push(`Needs attention: ${m.staleActive} stale active task(s)`);

    const sec = document.createElement('section');
    sec.className='item';
    sec.innerHTML = `
      <h2 class="item__title"><img class="avatar" src="${m.avatar}" alt="">${m.name}</h2>
      <div class="item__meta">${m.fn}</div>
      <div class="item__small" style="margin-top:6px">
        <span class="${chipClass(m.workloadChip)}">${m.workloadChip}</span>
        <span class="${evChipClass(m.evidenceMode)}">${m.evidenceMode}</span>
      </div>

      <div class="item__small" style="margin-top:8px"><strong>Workload</strong>: In Progress ${m.inProgress} · Blocked ${m.blocked} · Approved ${m.approved} · Backlog ${m.backlog}</div>
      <div class="item__small"><strong>Movement</strong>: Stale active ${m.staleActive} · Updated 24h ${m.updated24h} · Updated 7d ${m.updated7d} · Output 7d ${m.output7d}</div>

      <div class="item__small" style="margin-top:8px"><strong>Current active tasks</strong></div>
      <div class="item__small" data-active-list></div>

      <div class="item__small" style="margin-top:8px"><strong>Blocker / attention</strong></div>
      <div class="item__small" data-attn-list></div>

      <div class="item__small" style="margin-top:10px">
        <a href="agent-detail.html?agent=${encodeURIComponent(m.key)}">Open agent</a> ·
        <a href="${taskFile}" target="_blank" rel="noopener">View tasks</a> ·
        <a href="${ghEdit}" target="_blank" rel="noopener">Edit profile</a>
      </div>
    `;

    const al = sec.querySelector('[data-active-list]');
    if(activeTasks.length===0){
      al.textContent = 'No active tasks.';
    } else {
      al.innerHTML = activeTasks.map(t=>{
        const age = ageDays(t.updated_at);
        const ageTxt = age===null ? '' : ` · ${age}d ago`;
        return `• ${t.task_id} · ${shortTitle(t.title||'')} · ${t.status}${ageTxt}`;
      }).join('<br>') + (activeExtra>0 ? `<br>+${activeExtra} more` : '');
    }

    const at = sec.querySelector('[data-attn-list]');
    at.innerHTML = lines.length ? lines.map(x=>`• ${x}`).join('<br>') : 'No immediate attention flags.';

    grid.appendChild(sec);
  });
}

async function initAgentProfiles(){
  const [taskCsv, updateCapture] = await Promise.all([
    loadText('agent-tasks.csv'),
    loadText('UPDATE_CAPTURE.md')
  ]);

  const tasks = parseCsv(taskCsv);
  const evid = parseEvidence(updateCapture, 7);

  const metrics = AGENTS.map(a=>{
    const mine = tasks.filter(t=>a.taskAgents.includes(norm(t.agent)));
    const inProgress = mine.filter(t=>norm(t.status)==='in progress').length;
    const blocked = mine.filter(t=>norm(t.status)==='blocked').length;
    const approved = mine.filter(t=>norm(t.status)==='approved').length;
    const backlog = mine.filter(t=>norm(t.status)==='backlog').length;

    const staleActive = mine.filter(t=>norm(t.status)==='in progress' && (ageDays(t.updated_at)??0) > 3).length;
    const updated24h = mine.filter(t=>{
      const d=ageDays(t.updated_at); return d!==null && d<=1;
    }).length;
    const updated7d = mine.filter(t=>{
      const d=ageDays(t.updated_at); return d!==null && d<=7;
    }).length;

    let output7d=0, governance7d=0;
    mine.forEach(t=>{
      const e = evid.get((t.task_id||'').toUpperCase());
      if(!e) return;
      output7d += e.output || 0;
      governance7d += e.governance || 0;
    });

    return {
      ...a,
      tasks: mine,
      inProgress, blocked, approved, backlog,
      staleActive, updated24h, updated7d,
      output7d,
      governance7d,
      workloadChip: classifyWorkload({inProgress,blocked,approved,backlog}),
      evidenceMode: confidence(output7d, governance7d, updated7d)
    };
  });

  renderSummary(metrics);
  renderCards(metrics);
}

window.initAgentProfiles = initAgentProfiles;
