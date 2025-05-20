export const initMobileMenuToggle = () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const menuOverlay = document.getElementById("menu-overlay");

  const openMenu = () => {
    navMenu?.classList.remove("translate-x-full");
    navMenu?.classList.add("translate-x-0");
    menuToggle?.setAttribute("aria-expanded", "true");
    if (menuOverlay) {
      menuOverlay.classList.remove("opacity-0", "pointer-events-none");
      menuOverlay.classList.add("opacity-60");
    }
  };

  const closeMenu = () => {
    navMenu?.classList.remove("translate-x-0");
    navMenu?.classList.add("translate-x-full");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuOverlay) {
      menuOverlay.classList.add("opacity-0", "pointer-events-none");
      menuOverlay.classList.remove("opacity-60");
    }
  };

  const toggleMenu = () => {
    const isOpen = navMenu?.classList.contains("translate-x-0");
    isOpen ? closeMenu() : openMenu();
  };

  // 🛡️ Forzar estado cerrado inmediato al iniciar en mobile (evita parpadeo)
  if (navMenu && window.matchMedia("(max-width: 768px)").matches) {
    navMenu.classList.remove("translate-x-0");
    navMenu.classList.add("translate-x-full");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuOverlay) {
      menuOverlay.classList.add("opacity-0", "pointer-events-none");
      menuOverlay.classList.remove("opacity-60");
    }
  }

  const handleResizeNavClose = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      closeMenu();
    }
  };

  menuToggle?.addEventListener("click", toggleMenu);
  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", handleResizeNavClose);
  });
  menuOverlay?.addEventListener("click", closeMenu);

  // 🧹 Limpieza para navegación entre páginas (SPA) o bfcache
  window.addEventListener("pagehide", () => {
    menuToggle?.removeEventListener("click", toggleMenu);
    navMenu?.querySelectorAll("a").forEach((link) => {
      link.removeEventListener("click", handleResizeNavClose);
    });
    menuOverlay?.removeEventListener("click", closeMenu);
  });
};

// 🚀 Ejecutar inmediatamente
initMobileMenuToggle();
