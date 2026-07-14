
const CONFIG = {
  phoneDigits: "573001234567",
  defaultMessage: "Hola, necesito reparar un electrodoméstico en Medellín. ¿Me pueden ayudar?"
};

function buildWhatsAppUrl(message) {
  return `https://wa.me/${CONFIG.phoneDigits}?text=${encodeURIComponent(message || CONFIG.defaultMessage)}`;
}

document.querySelectorAll("[data-whatsapp]").forEach((el) => {
  const msg = el.getAttribute("data-message") || CONFIG.defaultMessage;
  el.setAttribute("href", buildWhatsAppUrl(msg));
});

const toggle = document.querySelector(".mobile-toggle");
const menu = document.querySelector(".menu");
if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

document.querySelectorAll(".wa-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get("nombre") || "Cliente";
    const sector = data.get("sector") || "Medellín";
    const appliance = data.get("electrodomestico") || "electrodoméstico";
    const issue = data.get("problema") || "Necesito diagnóstico técnico";
    const message = `Hola, soy ${name}. Necesito reparación de ${appliance} en ${sector}. Problema: ${issue}.`;
    window.location.href = buildWhatsAppUrl(message);
  });
});

document.querySelectorAll("[data-current-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
