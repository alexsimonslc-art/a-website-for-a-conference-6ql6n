// ===== Navigation Logic (replaces React Navigation.tsx) =====
document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.replace(/\/index\.html$/, "/") || "/";
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("data-href");
    if (!href) return;
    const isActive = currentPath === href || (href !== "/" && currentPath.startsWith(href));
    if (isActive) link.classList.add("active");
  });

  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) {
      mobileMenu.classList.remove("mobile-menu-closed");
      mobileMenu.classList.add("mobile-menu-open");
      iconMenu.classList.add("hidden");
      iconClose.classList.remove("hidden");
    } else {
      mobileMenu.classList.remove("mobile-menu-open");
      mobileMenu.classList.add("mobile-menu-closed");
      iconMenu.classList.remove("hidden");
      iconClose.classList.add("hidden");
    }
  }

  menuBtn.addEventListener("click", toggleMenu);

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (isOpen) toggleMenu();
    });
  });
});
