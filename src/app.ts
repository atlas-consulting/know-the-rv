import "./styles/main.scss";

class KnowTheRV {
  initialize() {
    console.info("Application initialized");
    this.initMobileMenu();
    this.handleNavElementsActivation();
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
    navLinks?.addEventListener("click", () => {
      const isMobileMenuOpened = navLinks?.classList.contains(mobileCssClass);
      if(isMobileMenuOpened) {
        navLinks?.classList.remove(mobileCssClass)
      }
    });
  }
  startCarousel() {
    let index = 0;
    const slides = document.querySelectorAll(
      ".carousel .carousel-inner .carousel-item"
    );
    setInterval(() => {
      const lastSlide = slides[index];
      index = index + 1 < slides.length ? index + 1 : 0;
      const nextSlide = slides[index];
      lastSlide.classList.remove("animate__slideInRight");
      lastSlide.classList.add("animate__slideOutLeft");
      setTimeout(() => {
        lastSlide.classList.remove("active");
        lastSlide.classList.remove("animate__slideOutLeft");
        nextSlide.classList.add("active");
        nextSlide.classList.add("animate__slideInRight");
      }, 600);
    }, 8000);
  }
  handleNavElementsActivation() {
    const navElements = document.querySelectorAll(".nav-link");
    const viewableEls = ["#home", "#services", "#about-us"]
      .map((id) => document.querySelector(id))
      .filter((el) => !!el);
    const viewportObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const id = entries[0].target.id;
          navElements.forEach((el) => {
            el.getAttribute("href") === `#${id}`
              ? el.classList.add("active")
              : el.classList.remove("active");
          });
        }
      },
      { threshold: [0.3] }
    );
    viewableEls.forEach((el) => viewportObserver.observe(el!));
  }
}

window.onload = function onLoad() {
  new KnowTheRV().initialize();
};
