document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll<HTMLElement>(".carousel-card-container");
  const cards = document.querySelectorAll<HTMLElement>(".carousel-card");
  const indicators = document.querySelectorAll<HTMLElement>("[data-indicator]");
  const total = cards.length;

  let current = 0;
  let last = 0;

  injectIndicatorAnimation();

  function updateCarousel() {
    const prev = (current - 1 + total) % total;
    const next = (current + 1) % total;

    containers.forEach((container, index) => {
      container.style.position = "absolute";
      container.style.top = "0";
      container.style.transition = "transform 0.6s ease, opacity 0.6s ease";
      container.style.zIndex = "0";
      container.style.opacity = "0";
      container.style.transform = "translateX(100%) scale(0.85)";

      const link = container.querySelector("a");

      if (index === current) {
        container.style.transform = "translateX(0%) scale(1)";
        container.style.zIndex = "2";
        container.style.opacity = "1";
        if (link) link.style.pointerEvents = "auto";
      } else if (index === prev) {
        container.style.transform = "translateX(-120%) scale(0.85)";
        container.style.zIndex = "1";
        container.style.opacity = "0.6";
        if (link) link.style.pointerEvents = "none";
      } else if (index === next) {
        container.style.transform = "translateX(120%) scale(0.85)";
        container.style.zIndex = "1";
        container.style.opacity = "0.6";
        if (link) link.style.pointerEvents = "none";
      } else {
        if (link) link.style.pointerEvents = "none";
      }
    });

    indicators.forEach((dot, idx) => {
      const isActive = idx === current;
      dot.classList.toggle("bg-white", isActive);
      dot.classList.toggle("bg-gray-400", !isActive);

      dot.classList.remove("dot-animate");
      if (isActive) {
        void dot.offsetWidth; // reiniciar animación
        dot.classList.add("dot-animate");
      }

      // 👇 Clickeable
      dot.onclick = () => {
        if (idx !== current) {
          current = idx;
          updateCarousel();
        }
      };
    });

    // Clic en tarjetas laterales
    containers.forEach((container, index) => {
      container.onclick = (e) => {
        const prev = (current - 1 + total) % total;
        const next = (current + 1) % total;

        if (index === prev || index === next) {
          e.preventDefault();
          current = index;
          updateCarousel();
        }
      };
    });
  }

  function injectIndicatorAnimation() {
    if (document.getElementById("indicator-keyframes")) return;

    const style = document.createElement("style");
    style.id = "indicator-keyframes";
    style.textContent = `
@keyframes dotBounce {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.6); }
  60%  { transform: scale(0.8); }
  100% { transform: scale(1); }
}
.dot-animate {
  animation: dotBounce 0.6s ease-out;
}
`;
    document.head.appendChild(style);
  }
  let startX = 0;

  const viewport = document.getElementById("carousel-viewport");

  viewport?.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  viewport?.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const delta = endX - startX;

    if (Math.abs(delta) > 50) {
      if (delta < 0) {
        current = (current + 1) % total;
      } else {
        current = (current - 1 + total) % total;
      }
      updateCarousel();
    }
  });
  updateCarousel();
});
