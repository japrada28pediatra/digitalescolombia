
const state={items:[],filtered:[],page:1,perPage:24};
const $=s=>document.querySelector(s);
const esc=s=>(s||"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
function normalize(s){return (s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}
function render(){
 const q=normalize($("#search").value), city=$("#city").value, dept=$("#department").value, cat=$("#category").value;
 state.filtered=state.items.filter(x=>{
  const hay=normalize([x.nombre,x["categoría"],x.ciudad,x.departamento,x.servicios].join(" "));
  return (!q||hay.includes(q))&&(!city||x.ciudad===city)&&(!dept||x.departamento===dept)&&(!cat||x["categoría"]===cat);
 });
 const pages=Math.max(1,Math.ceil(state.filtered.length/state.perPage)); if(state.page>pages) state.page=1;
 const start=(state.page-1)*state.perPage, chunk=state.filtered.slice(start,start+state.perPage);
 $("#resultsCount").textContent=`${state.filtered.length} proveedores encontrados`;
 $("#cards").innerHTML=chunk.length?chunk.map(x=>`
 <article class="card">
   <span class="badge">${esc(x["categoría"])}</span>
   <h3>${esc(x.nombre)}</h3>
   <div class="meta"><span>📍 ${esc(x.ciudad)}, ${esc(x.departamento)}</span>${x.telefono?`<span>☎ ${esc(x.telefono)}</span>`:""}</div>
   <div class="card-actions">
      <a class="link-btn primary" href="proveedores/${encodeURIComponent(x.slug)}.html">Ver ficha</a>
      ${x["sitio web"]?`<a class="link-btn" rel="nofollow noopener" target="_blank" href="${/^https?:\/\//i.test(x["sitio web"])?x["sitio web"]:"https://"+x["sitio web"]}">Sitio web</a>`:""}
   </div>
 </article>`).join(""):`<div class="empty">No se encontraron proveedores con esos filtros.</div>`;
 let buttons="";
 const max=7, from=Math.max(1,state.page-3), to=Math.min(pages,from+max-1);
 if(state.page>1) buttons+=`<button class="page-btn" data-page="${state.page-1}">‹</button>`;
 for(let i=from;i<=to;i++)buttons+=`<button class="page-btn ${i===state.page?"active":""}" data-page="${i}">${i}</button>`;
 if(state.page<pages) buttons+=`<button class="page-btn" data-page="${state.page+1}">›</button>`;
 $("#pagination").innerHTML=buttons;
 document.querySelectorAll("[data-page]").forEach(b=>b.onclick=()=>{state.page=+b.dataset.page;render();window.scrollTo({top:document.querySelector("#directorio").offsetTop-80,behavior:"smooth"})});
}
fetch("data/businesses.json").then(r=>r.json()).then(items=>{
 state.items=items;
 const fill=(id,key)=>{const values=[...new Set(items.map(x=>x[key]).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"es"));$(id).innerHTML='<option value="">Todos</option>'+values.map(v=>`<option>${esc(v)}</option>`).join("")};
 fill("#city","ciudad");fill("#department","departamento");fill("#category","categoría");
 ["#search","#city","#department","#category"].forEach(s=>$(s).addEventListener(s==="#search"?"input":"change",()=>{state.page=1;render()}));
 render();
});
