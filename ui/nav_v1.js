(() => {
  const btn = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav-links]');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
})();
