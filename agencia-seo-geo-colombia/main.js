const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const glow = document.querySelector(".cursor-glow");

if (window.lucide) {
  lucide.createIcons();
}

const startHeroSlider = () => {
  const hero = document.querySelector(".hero-swiper");
  const slides = [...document.querySelectorAll(".hero-swiper .swiper-slide")];
  const pagination = document.querySelector(".hero-pagination");
  const previous = document.querySelector(".hero-prev");
  const next = document.querySelector(".hero-next");
  let activeIndex = 0;
  let timer;

  if (!hero || !slides.length || !pagination || !previous || !next) return;

  pagination.innerHTML = "";

  const dots = slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.className = "hero-fallback-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Ver mensaje ${index + 1}`);
    dot.addEventListener("click", () => setActive(index));
    pagination.appendChild(dot);
    return dot;
  });

  const setActive = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === activeIndex);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === activeIndex);
    });
  };

  const advance = () => setActive(activeIndex + 1);

  previous.addEventListener("click", () => setActive(activeIndex - 1));
  next.addEventListener("click", () => setActive(activeIndex + 1));
  setActive(0);
  timer = window.setInterval(advance, 4200);

  hero.addEventListener("pointerenter", () => window.clearInterval(timer));
  hero.addEventListener("pointerleave", () => {
    timer = window.setInterval(advance, 4200);
  });
};

startHeroSlider();

if (window.Swiper) {
  new Swiper(".services-swiper", {
    slidesPerView: 1.08,
    spaceBetween: 16,
    speed: 700,
    navigation: {
      nextEl: ".services-next",
      prevEl: ".services-prev",
    },
    breakpoints: {
      640: { slidesPerView: 2.15 },
      980: { slidesPerView: 3.25 },
      1180: { slidesPerView: 4 },
    },
  });

  new Swiper(".results-swiper", {
    slidesPerView: 1.08,
    spaceBetween: 16,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 3200,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      720: { slidesPerView: 2.15 },
      1100: { slidesPerView: 3.15 },
    },
  });
}

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("is-open"));
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
});

window.addEventListener("pointermove", (event) => {
  if (!glow) return;
  if (!window.gsap) {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
    return;
  }
  gsap.to(glow, {
    x: event.clientX,
    y: event.clientY,
    duration: 0.45,
    ease: "power3.out",
  });
});

if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".hero-media img", {
    scale: 1.09,
    yPercent: 5,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

gsap.utils.toArray(".reveal").forEach((element) => {
  gsap.fromTo(
    element,
    { y: 42, opacity: 0, filter: "blur(10px)" },
    {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 84%",
      },
    }
  );
});

gsap.utils.toArray("[data-counter]").forEach((counter) => {
  const value = Number(counter.dataset.counter);
  gsap.to(counter, {
    innerText: value,
    duration: 1.7,
    snap: { innerText: 1 },
    ease: "power2.out",
    scrollTrigger: {
      trigger: counter,
      start: "top 88%",
    },
  });
});

gsap.utils.toArray(".service-card, .result-card, .process-step, .insight-board article").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(0, 208, 132, 0.18), transparent 11rem),
      rgba(19, 24, 23, 0.74)
    `;
  });

  card.addEventListener("pointerleave", () => {
    card.style.background = "";
  });
});

}

document.querySelectorAll("[data-counter]").forEach((counter) => {
  if (!window.gsap) counter.textContent = counter.dataset.counter;
});

document.querySelector(".contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.querySelector("span").textContent = "Diagnóstico solicitado";
  button.querySelector("i").setAttribute("data-lucide", "check");
  if (window.lucide) {
    lucide.createIcons();
  }
});
