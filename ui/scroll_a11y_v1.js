/* scroll_a11y_v1.js
   Purpose: keyboard-accessible horizontal scrolling for scroll regions.

   Applies to:
   - .board[tabindex="0"] (Kanban / queues)
   - .table-wrap[tabindex="0"] (wide tables)

   Key bindings (when region is focused):
   - ← / → : scroll by ~10% viewport width
   - PageUp / PageDown: scroll by ~85% viewport width
   - Home / End: jump to start/end

   Accessibility intent: make horizontal scroll discoverable and operable without a mouse.
*/

(() => {
  const SELECTOR = '.board[tabindex="0"], .table-wrap[tabindex="0"]';

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  const isTextEntry = (el) => {
    if (!el) return false;
    const tag = (el.tagName || '').toLowerCase();
    if (tag === 'textarea') return true;
    if (tag === 'input') {
      const t = (el.getAttribute('type') || '').toLowerCase();
      return !['button', 'submit', 'reset', 'checkbox', 'radio', 'range', 'color', 'file'].includes(t);
    }
    return el.isContentEditable === true;
  };

  const shouldHandle = (region, e) => {
    if (!region) return false;
    if (e.defaultPrevented) return false;
    if (e.altKey || e.ctrlKey || e.metaKey) return false;
    if (isTextEntry(document.activeElement)) return false;
    // Only when this region is focused (avoid stealing arrow keys from elsewhere).
    if (document.activeElement !== region) return false;
    // Only if horizontal scrolling is actually possible.
    return region.scrollWidth > region.clientWidth + 2;
  };

  const prefersReducedMotion = () => {
    try {
      return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    } catch (_) {
      return false;
    }
  };

  const scrollBehavior = () => (prefersReducedMotion() ? 'auto' : 'smooth');

  const scrollByPx = (region, dx) => {
    try {
      region.scrollTo({ left: region.scrollLeft + dx, behavior: scrollBehavior() });
    } catch (_) {
      region.scrollLeft += dx;
    }
  };

  const scrollToEdge = (region, edge) => {
    const left = edge === 'start' ? 0 : region.scrollWidth;
    try {
      region.scrollTo({ left, behavior: scrollBehavior() });
    } catch (_) {
      region.scrollLeft = left;
    }
  };

  const onKeyDown = (e) => {
    const region = e.target && e.target.closest ? e.target.closest(SELECTOR) : null;
    if (!shouldHandle(region, e)) return;

    const vw = clamp(region.clientWidth, 240, 1200);
    const step = Math.round(vw * 0.10);
    const page = Math.round(vw * 0.85);

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        scrollByPx(region, -step);
        return;
      case 'ArrowRight':
        e.preventDefault();
        scrollByPx(region, step);
        return;
      case 'PageUp':
        e.preventDefault();
        scrollByPx(region, -page);
        return;
      case 'PageDown':
        e.preventDefault();
        scrollByPx(region, page);
        return;
      case 'Home':
        e.preventDefault();
        scrollToEdge(region, 'start');
        return;
      case 'End':
        e.preventDefault();
        scrollToEdge(region, 'end');
        return;
      default:
        return;
    }
  };

  // Delegate at document level so dynamically rendered boards/tables are covered.
  document.addEventListener('keydown', onKeyDown, { passive: false });
})();
