
const DATA_URL='/data/contadores.json';
const PAGE_SIZE=18;
let all=[], filtered=[], page=1;
function norm(s){return (s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
function card(x){return `<article class="card"><span class="badge">${x.city}</span><h3><a href="${x.url}">${x.name}</a></h3><p class="meta">${x.category}</p><div class="actions"><a class="btn alt" href="${x.url}">Ver perfil</a></div></article>`}
function render(){
 const grid=document.querySelector('#results'); if(!grid)return;
 const start=(page-1)*PAGE_SIZE; grid.innerHTML=filtered.slice(start,start+PAGE_SIZE).map(card).join('');
 document.querySelector('#count').textContent=`${filtered.length} resultados`;
 const pages=Math.ceil(filtered.length/PAGE_SIZE); const p=document.querySelector('#pagination'); p.innerHTML='';
 for(let i=1;i<=pages;i++){if(i>1&&i<page-2){if(i===2)p.innerHTML+='<span>…</span>';continue}if(i<pages&&i>page+2){if(i===pages-1)p.innerHTML+='<span>…</span>';continue}
 const b=document.createElement('button');b.textContent=i;b.className=i===page?'active':'';b.onclick=()=>{page=i;render();scrollTo({top:250,behavior:'smooth'})};p.appendChild(b)}
}
function apply(){
 const q=norm(document.querySelector('#q')?.value);const city=document.querySelector('#city')?.value||'';
 filtered=all.filter(x=>(!q||norm(x.name+' '+x.category+' '+x.city).includes(q))&&(!city||x.city===city));page=1;render()
}
fetch(DATA_URL).then(r=>r.json()).then(d=>{all=d;filtered=d;document.querySelector('#q')?.addEventListener('input',apply);document.querySelector('#city')?.addEventListener('change',apply);render()});
