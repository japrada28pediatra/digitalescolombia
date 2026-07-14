
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if(toggle && menu){
    toggle.addEventListener('click', function(){
      const open = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }
  document.querySelectorAll('form[data-lead-form]').forEach(form => {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('nombre') || '';
      const type = data.get('tipo') || 'consulta penal';
      const msg = data.get('mensaje') || '';
      const text = `Hola, soy ${name}. Necesito asesoría por: ${type}. ${msg}`.trim();
      const phone = form.getAttribute('data-whatsapp');
      window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    });
  });
})();
