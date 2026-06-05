const navToggleButton = document.querySelector("[data-nav-toggle]");
const mobileMenu = document.querySelector("[data-nav-mobile]");

if (navToggleButton && mobileMenu) {
  navToggleButton.addEventListener("click", () => {
    const isExpanded = navToggleButton.getAttribute("aria-expanded") === "true";
    navToggleButton.setAttribute("aria-expanded", String(!isExpanded));
    mobileMenu.classList.toggle("hidden");
  });
}
