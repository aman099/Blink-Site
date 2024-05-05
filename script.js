const linkEls = document.querySelectorAll("nav > ul li a");
const sectionEls = document.querySelectorAll(".hero-section");

let currentSection = "hero-1";

document.addEventListener("scroll", () => {
  sectionEls.forEach((sectionEl) => {
    if (scrollY >= sectionEl.offsetTop - sectionEl.clientHeight / 2) {
      currentSection = sectionEl.id;
    }
  });

  linkEls.forEach((linkEl) => {
    if (linkEl.href.includes(currentSection)) {
      document.querySelector(".active").classList.remove("active");
      linkEl.classList.add("active");
    }
  });
});
