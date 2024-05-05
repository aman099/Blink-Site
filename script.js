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

//
const navbar = document.querySelector("#nav");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > navbar.offsetHeight - 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// overlay
const navBtn = document.querySelector(".nav-btn");
const overlay = document.querySelector(".overlay");
const navHamSpan = document.querySelector(
  "#nav>.nav-btn>label>span:nth-of-type(1)"
);
const navHamSpan2 = document.querySelector(
  "#nav>.nav-btn>label>span:nth-of-type(2)"
);
const navHamSpan3 = document.querySelector(
  "#nav>.nav-btn>label>span:nth-of-type(3)"
);

navBtn.addEventListener("click", () => {
  overlay.classList.toggle("activate");
  navHamSpan.classList.toggle("activate");
  navHamSpan2.classList.toggle("activate");
  navHamSpan3.classList.toggle("activate");
});
