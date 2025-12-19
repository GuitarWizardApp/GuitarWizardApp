(() => {
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  $$("#year").forEach(el => el.textContent = String(new Date().getFullYear()));
  const reveal = $$(".reveal");
  if (reveal.length) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) e.target.classList.add("is-in");
    }, { threshold: 0.12 });
    reveal.forEach(el => io.observe(el));
  }
})();