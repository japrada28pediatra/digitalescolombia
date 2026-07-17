
const b=document.getElementById('menuBtn'),n=document.getElementById('mobileNav');
if(b&&n){b.addEventListener('click',()=>n.classList.toggle('hidden'))}
function sendWA(e){
  e.preventDefault();
  const name=document.getElementById('name')?.value||'';
  const phone=document.getElementById('phone')?.value||'';
  const service=document.getElementById('service')?.value||'';
  const message=document.getElementById('message')?.value||'';
  const text=`Hola FEMSALUD, soy ${name}. Teléfono: ${phone}. Servicio: ${service}. ${message}`;
  window.open('https://wa.me/573182348469?text='+encodeURIComponent(text),'_blank');
}
