const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});


document.getElementById("year").textContent = new Date().getFullYear();


// CONTADOR DE VISUALIZAÇÕES
let views = localStorage.getItem('siteViews');

if (views === null) {
    views = 1;
} else {
    views = parseInt(views) + 1;
}

localStorage.setItem('siteViews', views);

document.getElementById('viewCount').textContent = views;


// o mesmo Intersection Observer do código anterior já cobre a nova seção
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        entry.target.style.transitionDelay = `${delay}ms`;
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -100px 0px"
  }
);

revealElements.forEach((el, index) => {
  el.dataset.delay = index * 150;
  observer.observe(el);
});
