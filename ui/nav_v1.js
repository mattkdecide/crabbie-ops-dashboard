(() => {
  const btn = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav-links]');
  if (!nav) return;

  // Ensure nav has an id so the toggle can reference it.
  if (!nav.id) nav.id = `nav-${Math.random().toString(16).slice(2)}`;
  if (btn) btn.setAttribute('aria-controls', nav.id);

  // NOTE: the nav is only "collapsible" when the toggle button is actually visible.
  // If we set aria-hidden while the toggle is display:none (desktop), screen readers
  // can lose access to the primary nav even though it is visible.
  const isCollapsible = () => {
    if (!btn) return false;
    try {
      return window.getComputedStyle(btn).display !== 'none';
    } catch (_) {
      return false;
    }
  };

  const syncDesktopA11y = () => {
    if (isCollapsible()) return;
    // Desktop: nav should always be available to assistive tech.
    nav.removeAttribute('aria-hidden');
    nav.classList.remove('is-open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  };

  const setExpanded = (next) => {
    if (!btn) return;
    if (!isCollapsible()) {
      syncDesktopA11y();
      return;
    }

    const wasOpen = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(next));
    nav.classList.toggle('is-open', !!next);

    // Mobile: hide collapsed nav from assistive tech.
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

  // Initialise a11y state.
  syncDesktopA11y();
  if (btn && isCollapsible()) setExpanded(btn.getAttribute('aria-expanded') === 'true');

  // Keep aria-hidden semantics correct when crossing breakpoints (mobile ↔ desktop).
  // We avoid matchMedia here because the source of truth is actual toggle visibility.
  try {
    window.addEventListener('resize', () => {
      requestAnimationFrame(() => {
        if (!btn) {
          syncDesktopA11y();
          return;
        }
        if (!isCollapsible()) {
          syncDesktopA11y();
        } else {
          // Mobile: ensure aria-hidden matches expanded state.
          setExpanded(btn.getAttribute('aria-expanded') === 'true');
        }
      });
    });
  } catch (_) {
    // no-op
  }

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
