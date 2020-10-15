import "./styles/main.scss";

class KnowTheRV {
  initialize() {
    console.info("Application initialized");
    this.initMobileMenu();
  }
  initMobileMenu() {
    const navLinks = document.getElementById("navbar-links");
    const icon = document.getElementById("menu-icon");
    const mobileCssClass = "ktrv-menu-open";
    if (!navLinks || !icon) {
      console.warn("Could not find mobile menu element(s)");
    }
    icon?.addEventListener("click", () => {
      const isMobileMenuOpened = navLinks?.classList.contains(mobileCssClass);
      isMobileMenuOpened
        ? navLinks?.classList.remove(mobileCssClass)
        : navLinks?.classList.add(mobileCssClass);
    });
  }
}

window.onload = function onLoad() {
  new KnowTheRV().initialize();
};
