
const $ = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => [...c.querySelectorAll(s)];

function normalizeText(value=''){
  return value.toString().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
}
function escapeHtml(value=''){
  return value.toString().replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}
function card(item){
  const rating = item.Calificación ? `<span class="inline-flex items-center gap-1 text-sm font-semibold text-amber-700">★ ${item.Calificación}${item.Reseñas ? ` <span class="font-normal text-slate-500">(${item.Reseñas})</span>`:''}</span>` : '';
  const place = [item.Barrio,item.Localidad].filter(Boolean).join(', ') || 'Bogotá';
  const badge = item.Estado === 'Verificado'
    ? '<span class="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">Verificado</span>'
    : '<span class="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">Por confirmar</span>';
  const whatsapp = item.phone_digits ? `<a href="https://wa.me/${item.phone_digits}?text=${encodeURIComponent('Hola, vi tu perfil en Manicuristas Bogotá y quiero consultar disponibilidad.')}" rel="nofollow" target="_blank" class="rounded-xl bg-emerald-600 px-4 py-2.5 text-center text-sm font-bold text-white hover:bg-emerald-700">WhatsApp</a>`:'';
  return `<article class="card-lift flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5">
    <div class="mb-4 flex items-start justify-between gap-3">
      <div class="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-pink-100 text-xl font-black text-pink-700">${escapeHtml(item.Nombre.charAt(0))}</div>
      ${badge}
    </div>
    <h3 class="text-lg font-extrabold tracking-tight text-slate-900"><a class="hover:text-pink-700" href="negocios/${item.slug}.html">${escapeHtml(item.Nombre)}</a></h3>
    <p class="mt-1 text-sm font-medium text-pink-700">${escapeHtml(item.Categoría || 'Manicure y uñas')}</p>
    <p class="mt-3 line-clamp-2 text-sm text-slate-600">${escapeHtml(item.Dirección || place)}</p>
    <div class="mt-3">${rating}</div>
    <div class="mt-auto grid grid-cols-${whatsapp ? '2':'1'} gap-2 pt-5">
      <a href="negocios/${item.slug}.html" class="rounded-xl border border-slate-300 px-4 py-2.5 text-center text-sm font-bold text-slate-800 hover:border-pink-400 hover:text-pink-700">Ver perfil</a>
      ${whatsapp}
    </div>
  </article>`;
}

async function initDirectory(){
  const grid = $('#resultsGrid');
  if(!grid) return;
  const response = await fetch('data/negocios.json');
  const all = await response.json();
  let shown = 12;
  const q = $('#searchInput'), loc = $('#localityFilter'), type = $('#typeFilter'), status = $('#statusFilter'), count = $('#resultCount');
  const load = $('#loadMore');

  [...new Set(all.map(x=>x.Localidad).filter(Boolean))].sort().forEach(v=>loc.insertAdjacentHTML('beforeend',`<option>${escapeHtml(v)}</option>`));
  [...new Set(all.map(x=>x['Tipo de atención']).filter(Boolean))].sort().forEach(v=>type.insertAdjacentHTML('beforeend',`<option>${escapeHtml(v)}</option>`));

  function filtered(){
    const term = normalizeText(q.value);
    return all.filter(x => {
      const hay = normalizeText([x.Nombre,x.Localidad,x.Barrio,x.Dirección,x.Categoría].join(' '));
      return (!term || hay.includes(term))
        && (!loc.value || x.Localidad===loc.value)
        && (!type.value || x['Tipo de atención']===type.value)
        && (!status.value || x.Estado===status.value);
    });
  }
  function render(reset=true){
    if(reset) shown=12;
    const items=filtered();
    count.textContent=`${items.length} resultado${items.length===1?'':'s'}`;
    grid.innerHTML=items.slice(0,shown).map(card).join('') || `<div class="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center"><h3 class="font-bold text-slate-900">No encontramos resultados</h3><p class="mt-2 text-sm text-slate-600">Prueba otra localidad, barrio o nombre.</p></div>`;
    load.hidden=shown>=items.length;
  }
  [q,loc,type,status].forEach(el=>el.addEventListener(el===q?'input':'change',()=>render(true)));
  $('#clearFilters').addEventListener('click',()=>{q.value='';loc.value='';type.value='';status.value='';render(true)});
  load.addEventListener('click',()=>{shown+=12;render(false)});
  render(true);
}
document.addEventListener('DOMContentLoaded',initDirectory);
