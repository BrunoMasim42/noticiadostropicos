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