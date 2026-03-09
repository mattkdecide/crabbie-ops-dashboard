(() => {
  const btn = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav-links]');
  if (!nav) return;

  // Ensure nav has an id so the toggle can reference it.
  if (!nav.id) nav.id = `nav-${Math.random().toString(16).slice(2)}`;
  if (btn) btn.setAttribute('aria-controls', nav.id);

  const setExpanded = (next) => {
    if (!btn) return;

    const wasOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(next));
    nav.classList.toggle('is-open', !!next);

    // Hide collapsed nav from assistive tech when the toggle is in play (mobile pattern).
    // On desktop, the toggle is display:none, but keeping aria-hidden synced is harmless.
    nav.setAttribute('aria-hidden', String(!next));

    // Focus management: when opening, move focus into the menu (first link).
    // When closing, if focus was inside the nav, return it to the toggle.
    try {
      const active = document.activeElement;
      if (next && !wasOpen) {
        requestAnimationFrame(() => {
          const firstLink = nav.querySelector('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
          if (firstLink && firstLink.focus) firstLink.focus();
        });
      } else if (!next && wasOpen) {
        if (active && nav.contains(active)) btn.focus();
      }
    } catch (_) {
      // no-op
    }
  };

  // Initialise aria-hidden to match the current expanded state.
  if (btn) setExpanded(btn.getAttribute('aria-expanded') === 'true');

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
