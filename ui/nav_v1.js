(() => {
  // Progressive enhancement hook (lets CSS keep nav visible when JS is disabled).
  document.documentElement.classList.add('js');

  // Keep sticky offsets accurate even when the topbar height changes (wraps, font load, etc).
  const topbar = document.querySelector('.topbar');
  const setTopbarHeightVar = () => {
    if (!topbar) return;
    const h = Math.max(56, Math.round(topbar.getBoundingClientRect().height || 0));
    document.documentElement.style.setProperty('--topbar-h', `${h}px`);
  };
  setTopbarHeightVar();
  if (typeof ResizeObserver !== 'undefined' && topbar) {
    const ro = new ResizeObserver(() => setTopbarHeightVar());
    ro.observe(topbar);
  } else {
    window.addEventListener('resize', () => setTopbarHeightVar(), { passive: true });
  }

  const btn = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav-links]');
  if (!nav) return;

  // Ensure nav has an id so the toggle can reference it.
  if (!nav.id) nav.id = `nav-${Math.random().toString(16).slice(2)}`;
  if (btn) btn.setAttribute('aria-controls', nav.id);

  const setExpanded = (next) => {
    if (!btn) return;
    btn.setAttribute('aria-expanded', String(next));
    nav.classList.toggle('is-open', !!next);
  };

  // 1) Mobile menu toggle behaviour
  if (btn) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      setExpanded(!expanded);
    });

    // Escape closes the menu.
    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape') return;
      if (btn.getAttribute('aria-expanded') === 'true') {
        setExpanded(false);
        btn.focus();
      }
    });

    // Click outside closes the menu (small screens).
    document.addEventListener('click', (e) => {
      if (btn.getAttribute('aria-expanded') !== 'true') return;
      const t = e.target;
      if (t instanceof Node && (nav.contains(t) || btn.contains(t))) return;
      setExpanded(false);
    });

    // When a nav link is activated, close the menu.
    nav.addEventListener('click', (e) => {
      const a = e.target && e.target.closest ? e.target.closest('a') : null;
      if (!a) return;
      setExpanded(false);
    });
  }

  // 2) Active link semantics (avoid copy-paste “btn--primary” per page)
  try {
    const current = (location.pathname.split('/').pop() || '').toLowerCase();
    const links = Array.from(nav.querySelectorAll('a[href]'));
    for (const a of links) {
      const href = (a.getAttribute('href') || '').split('#')[0].split('?')[0].toLowerCase();
      const isActive = href === current;
      if (isActive) {
        a.setAttribute('aria-current', 'page');
        a.classList.add('btn--primary');
      } else {
        a.removeAttribute('aria-current');
        // Do not remove btn--primary if a page hard-coded it; only remove the one we applied.
        // (We can’t reliably detect origin, so we keep it if already present.)
      }
    }
  } catch (_) {
    // no-op
  }
})();
