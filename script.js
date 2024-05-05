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

// Animation on scroll
const heroSubTitle1 = document.querySelector(
  ".hero-section .left .hero-subtitle"
);
const heroSubTitle2 = document.querySelector(
  ".hero-section .left .hero-subtitle.para"
);
const heroSubTitle3 = document.querySelector("#hero-3 .left .hero-subtitle");
const heroSubTitle4 = document.querySelector("#hero-4 .left .hero-subtitle");
const heroSubTitle5 = document.querySelector("#hero-5 .left .hero-subtitle");

const options2 = {};
const observer2 = new IntersectionObserver(function (entries, observer2) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      heroSubTitle1.classList.add("visible");
    } else {
      heroSubTitle1.classList.remove("visible");
    }
  });
}, options2);
observer2.observe(heroSubTitle1);

const options3 = {};
const observer3 = new IntersectionObserver(function (entries, observer3) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      heroSubTitle2.classList.add("visible");
    } else {
      heroSubTitle2.classList.remove("visible");
    }
  });
}, options3);
observer3.observe(heroSubTitle2);

const options4 = {};
const observer4 = new IntersectionObserver(function (entries, observer4) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      heroSubTitle3.classList.add("visible");
    } else {
      heroSubTitle3.classList.remove("visible");
    }
  });
}, options4);
observer4.observe(heroSubTitle3);

const options5 = {};
const observer5 = new IntersectionObserver(function (entries, observer5) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      heroSubTitle4.classList.add("visible");
    } else {
      heroSubTitle4.classList.remove("visible");
    }
  });
}, options5);
observer5.observe(heroSubTitle4);

const options6 = {};
const observer6 = new IntersectionObserver(function (entries, observer6) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      heroSubTitle5.classList.add("visible");
    } else {
      heroSubTitle5.classList.remove("visible");
    }
  });
}, options6);
observer6.observe(heroSubTitle5);
