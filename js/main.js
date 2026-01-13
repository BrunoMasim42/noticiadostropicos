const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        // efeito em cascata
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
  el.dataset.delay = index * 150; // delay progressivo
  observer.observe(el);
});
