
const norm=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
async function initDirectory(){
 const root=document.querySelector('[data-directory]'); if(!root)return;
 const data=await fetch(root.dataset.source||'/directorio-abogados-colombia/assets/data.json').then(r=>r.json());
 const q=document.querySelector('#filter-q'), city=document.querySelector('#filter-city'), spec=document.querySelector('#filter-spec'), list=document.querySelector('#results'), count=document.querySelector('#result-count');
 const params=new URLSearchParams(location.search); if(params.get('q'))q.value=params.get('q'); if(params.get('ciudad'))city.value=params.get('ciudad');
 const render=()=>{let qq=norm(q.value),cc=city.value,ss=norm(spec.value);let out=data.filter(x=>(!qq||norm(x.n+' '+x.e+' '+x.c).includes(qq))&&(!cc||x.c===cc)&&(!ss||norm(x.e).includes(ss))); count.textContent=`${out.length} resultados`;
 list.innerHTML=out.slice(0,120).map(x=>`<article class="card"><h3><a href="/directorio-abogados-colombia/firmas/${x.s}.html">${escapeHTML(x.n)}</a></h3><div class="meta"><span class="pill">${escapeHTML(x.c)}</span><span class="pill ${x.v==='Sí'?'ok':'warn'}">${x.v==='Sí'?'Registro verificado':'Pendiente de verificación'}</span></div><p>${escapeHTML(x.e||'Servicios legales')}</p><div class="card-footer"><span class="small">${escapeHTML(x.t||'Contacto por completar')}</span><a href="/directorio-abogados-colombia/firmas/${x.s}.html">Ver perfil →</a></div></article>`).join('')||'<div class="empty">No encontramos registros con esos filtros.</div>';
 };
 [q,city,spec].forEach(el=>el.addEventListener(el.tagName==='INPUT'?'input':'change',render));render();
}
function escapeHTML(s){return String(s||'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
document.addEventListener('DOMContentLoaded',initDirectory);
