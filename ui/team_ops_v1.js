const COLUMNS = ['Backlog','Approved','In Progress','Blocked','Review','Done'];
const STALE_DAYS = 3;
let TASKS = [];
let PENDING = new Map();
let EDIT_ID = null;

function norm(v=''){ return String(v||'').trim().toLowerCase(); }
function nowIso(){ return new Date().toISOString(); }
function esc(s=''){ return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function parseDate(v=''){ const d=Date.parse((v||'').length<=10?`${v}T00:00:00Z`:v); return Number.isFinite(d)?d:null; }
function ageDays(v=''){ const t=parseDate(v); if(t===null) return null; return Math.floor((Date.now()-t)/86400000); }

function parseCsv(text){
  const rows=[]; let row=[]; let cell=''; let q=false;
  for(let i=0;i<text.length;i++){
    const c=text[i], n=text[i+1];
    if(c==='"'){ if(q&&n==='"'){cell+='"';i++;} else q=!q; }
    else if(c===','&&!q){ row.push(cell); cell=''; }
    else if((c==='\n'||c==='\r')&&!q){ if(c==='\r'&&n==='\n') i++; row.push(cell); if(row.some(v=>v!=='')) rows.push(row); row=[]; cell=''; }
    else cell+=c;
  }
  if(cell.length||row.length){ row.push(cell); rows.push(row); }
  const h=rows.shift()||[];
  return rows.map(r=>Object.fromEntries(h.map((k,i)=>[k,(r[i]||'').trim()])));
}

async function loadTasks(){
  const srcs=['agent-tasks.csv','https://raw.githubusercontent.com/mattkdecide/crabbie-ops-dashboard/main/agent-tasks.csv'];
  let err=null;
  for(const s of srcs){
    try{
      const r=await fetch(s+'?t='+Date.now(),{cache:'no-store'});
      if(!r.ok){ err=new Error(`${s} ${r.status}`); continue; }
      return parseCsv(await r.text());
    }catch(e){ err=e; }
  }
  throw err||new Error('load failed');
}

function canonicalStatus(s){
  const x=norm(s);
  if(x==='in_progress'||x==='in progress') return 'In Progress';
  if(x==='backlog') return 'Backlog';
  if(x==='approved') return 'Approved';
  if(x==='blocked') return 'Blocked';
  if(x==='review') return 'Review';
  if(x==='done') return 'Done';
  return 'Backlog';
}

function workloadNoteRequired(toStatus, notes){
  const n=(notes||'').trim();
  if(toStatus==='Blocked' && n.length<8) return 'Blocked requires a clear blocker note.';
  if(toStatus==='In Progress' && n.length<12) return 'In Progress requires a meaningful next-action note.';
  return null;
}

function setStatus(msg){ document.getElementById('opsStatus').textContent=msg; }

function queuePatch(taskId, patch){
  const prev=PENDING.get(taskId)||{};
  PENDING.set(taskId,{...prev,...patch});
  render();
}
function clearPatch(taskId){ PENDING.delete(taskId); render(); }

async function persistPatch(taskId){
  const t=TASKS.find(x=>x.task_id===taskId); if(!t) return;
  const patch=PENDING.get(taskId); if(!patch) return;

  const merged={...t,...patch};
  const check=workloadNoteRequired(canonicalStatus(merged.status), merged.notes);
  if(check){ setStatus(check); return; }

  try{
    const res=await fetch('/api/task-update',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({
      task_id: taskId,
      patch,
      last_editor:'Matt',
      append_audit:true
    })});
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    setStatus(`Saved ${taskId}`);
    TASKS=await loadTasks();
    PENDING.delete(taskId);
    render();
  }catch(e){
    setStatus(`Save failed for ${taskId}: ${e.message}. (Write API not available yet on this host)`);
  }
}

function openEdit(taskId){
  const task=TASKS.find(x=>x.task_id===taskId); if(!task) return;
  const patch=PENDING.get(taskId)||{};
  EDIT_ID=taskId;
  document.getElementById('editTitle').textContent=`Edit ${taskId}`;
  document.getElementById('editNotes').value=patch.notes ?? task.notes ?? '';
  document.getElementById('editAgent').value=patch.agent ?? task.agent ?? 'build';
  document.getElementById('editPriority').value=patch.priority ?? task.priority ?? 'Medium';
  document.getElementById('editDialog').showModal();
}

function archiveTask(taskId){
  const task=TASKS.find(x=>x.task_id===taskId); if(!task) return;
  const reason=prompt(`Archive ${taskId}: add short reason`, 'No longer relevant in current phase');
  if(reason===null) return;
  const note=(task.notes?task.notes+' | ':'')+`ARCHIVE: ${reason}`;
  queuePatch(taskId,{status:'Done',closed_reason:'archived',notes:note});
}

function renderCard(t){
  const patch=PENDING.get(t.task_id)||{};
  const cur={...t,...patch};
  const d=ageDays(cur.updated_at); const age=d===null?'':` · ${d}d`;
  const pending=PENDING.has(t.task_id);

  return `<div class="item task-card ${pending?'is-pending':''}" draggable="true" data-task-id="${esc(t.task_id)}">
    <div class="item__title">${esc(cur.task_id)} · ${esc(cur.title||'')}</div>
    <div class="item__small">${esc(cur.status)} · ${esc(cur.agent||'')} · ${esc(cur.priority||'')}${age}</div>
    <div class="task-actions">
      <button class="btn" data-edit="${esc(t.task_id)}">Edit</button>
      <button class="btn" data-archive="${esc(t.task_id)}">Archive</button>
    </div>
    ${pending?`<div class="task-pending item__small">Pending change
      <div class="task-actions"><button class="btn btn--primary" data-save="${esc(t.task_id)}">Save</button><button class="btn" data-undo="${esc(t.task_id)}">Undo</button></div>
    </div>`:''}
  </div>`;
}

function render(){
  const board=document.getElementById('board');
  const by={}; COLUMNS.forEach(c=>by[c]=[]);
  TASKS.forEach(t=>{
    const patch=PENDING.get(t.task_id)||{};
    const s=canonicalStatus(patch.status||t.status);
    by[s].push(renderCard(t));
  });

  board.innerHTML=COLUMNS.map(c=>`<section class="column" data-col="${c}"><div class="column__shell"><h2 class="column__header">${c}</h2>${by[c].join('')||'<div class="item"><div class="item__small">No tasks</div></div>'}</div></section>`).join('');

  board.querySelectorAll('.task-card').forEach(el=>{
    el.addEventListener('dragstart',e=>{ el.classList.add('dragging'); e.dataTransfer.setData('text/plain',el.dataset.taskId); });
    el.addEventListener('dragend',()=>el.classList.remove('dragging'));
  });
  board.querySelectorAll('.column').forEach(col=>{
    col.addEventListener('dragover',e=>e.preventDefault());
    col.addEventListener('drop',e=>{
      e.preventDefault();
      const id=e.dataTransfer.getData('text/plain');
      const to=col.dataset.col;
      const task=TASKS.find(x=>x.task_id===id); if(!task) return;
      if(canonicalStatus(task.status)===to) return;
      queuePatch(id,{status:to});
      setStatus(`Queued move ${id} -> ${to}. Save to persist or Undo to discard.`);
    });
  });

  board.querySelectorAll('[data-save]').forEach(b=>b.onclick=()=>persistPatch(b.dataset.save));
  board.querySelectorAll('[data-undo]').forEach(b=>b.onclick=()=>clearPatch(b.dataset.undo));
  board.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>openEdit(b.dataset.edit));
  board.querySelectorAll('[data-archive]').forEach(b=>b.onclick=()=>archiveTask(b.dataset.archive));
}

document.getElementById('editForm').addEventListener('submit',e=>{
  const dialog=document.getElementById('editDialog');
  const submitter=e.submitter?.value;
  if(submitter!=='save') return;
  e.preventDefault();
  const notes=document.getElementById('editNotes').value;
  const agent=document.getElementById('editAgent').value;
  const priority=document.getElementById('editPriority').value;
  queuePatch(EDIT_ID,{notes,agent,priority});
  dialog.close();
  setStatus(`Queued edit for ${EDIT_ID}. Save to persist.`);
});

document.getElementById('editDialog').addEventListener('close',()=>{ EDIT_ID=null; });

(async function init(){
  try{
    setStatus('Loading tasks…');
    TASKS=(await loadTasks()).map(t=>({...t,status:canonicalStatus(t.status)}));
    render();
    setStatus('Loaded. Drag cards, then Save or Undo each pending change.');
  }catch(e){
    setStatus('Could not load tasks: '+e.message);
  }
})();