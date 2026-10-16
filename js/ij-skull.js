/* Interaction Jackson skull. Uses the four supplied SVG exports unchanged.
   Add with: <script src="js/ij-skull.js" defer></script>
   https://developer.mozilla.org/en-US/docs/Web/SVG/Guides/Scripting */
(() => {
  'use strict';

  const SETTINGS = {
    blinkMin: 6000,
    blinkMax: 12000,
    sleepyAfter: 30000,
    smileMin: 20000,
    smileMax: 40000,
    smileDuration: 1400,
    occasionalSmile: true,
    closeDuration: 75,
    openDuration: 125
  };
  const ARTWORK = {
  "outline": {
    "d": "M22.0529 59.4594C11.2183 57.7861 3.9238 49.4198 3.11925 37.869C2.10016 26.1562 7.67834 13.7957 17.3329 7.69646C23.5011 3.75622 31.0102 2.35284 38.1438 3.27043C48.1738 3.81019 57.882 10.1254 63.7283 19.3553C69.3602 28.2613 70.6474 37.2213 66.6247 46.6131C63.2992 54.3856 57.1847 58.4878 48.6565 59.7832C47.9725 62.5611 48.6754 67.9644 44.1469 67.9644C39.6183 67.9644 39.5667 63.5747 39.6456 59.9991C39.2472 63.4252 39.5383 67.9644 34.9256 67.7177C30.3375 67.7177 31.0969 63.0144 30.9565 60.5389C30.5325 63.81 30.7487 68.2035 26.3719 68.2035C21.9188 68.2035 22.0969 63.0144 22.0529 59.4594Z",
    "fill": "white",
    "stroke-width": "4.8",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke": "black"
  },
  "eyes": {
    "neutral": "M31.2277 45.4652C31.6568 50.1611 28.5459 54.0473 24.1477 54.3172C19.6959 54.5871 16.3168 51.5105 15.8877 46.9765C15.405 42.2806 18.355 38.1784 22.3241 37.6926C26.615 37.2069 30.745 40.6073 31.2277 45.4652ZM55.525 45.5191C55.3641 49.8372 51.9314 53.2377 47.5332 53.2917C43.3495 53.3996 40.0241 50.431 39.8095 46.5447C39.5414 42.1187 43.0814 38.1784 46.8895 37.7466C51.0732 37.2608 55.7395 40.6613 55.525 45.5191Z",
    "happy": "M19.8346 48.6128C19.0976 49.155 18.024 48.6546 18.2863 47.7781C20.2859 41.0988 29.3597 41.0349 31.6507 47.5864C31.961 48.4737 30.8562 49.0029 30.0958 48.4502C26.8297 46.0766 23.2086 46.1308 19.8346 48.6128ZM41.4859 48.4502C40.7255 49.0029 39.6207 48.4737 39.931 47.5864C42.222 41.0349 51.2958 41.0988 53.2953 47.7781C53.5577 48.6546 52.4841 49.155 51.7471 48.6128C48.373 46.1308 44.7519 46.0766 41.4859 48.4502Z",
    "angry": "M17.7818 41.776C17.773 40.411 19.1977 39.5737 20.4468 40.1242L30.98 44.7659C31.7054 45.0856 32.1946 45.8071 32.0872 46.5925C31.5341 50.6391 28.3828 52.9841 24.4362 52.5456C20.202 52.1221 17.8215 47.9912 17.7818 41.776ZM53.8189 41.776C53.8276 40.411 52.403 39.5737 51.1539 40.1242L40.6207 44.7659C39.8953 45.0856 39.4061 45.8071 39.5134 46.5925C40.0666 50.6391 43.2179 52.9841 47.1644 52.5456C51.3986 52.1221 53.7791 47.9912 53.8189 41.776Z",
    "sleepy": "M18.9255 47.6045C18.2204 46.4221 19.4479 45.2512 20.8136 45.4239C23.4773 45.7608 26.141 45.7608 28.8047 45.4239C30.1705 45.2512 31.3979 46.4221 30.6928 47.6045C28.1884 51.804 21.4299 51.804 18.9255 47.6045ZM40.6866 47.6045C39.9814 46.4221 41.2089 45.2512 42.5747 45.4239C45.2384 45.7608 47.902 45.7608 50.5657 45.4239C51.9315 45.2512 53.1589 46.4221 52.4538 47.6045C49.9494 51.804 43.1909 51.804 40.6866 47.6045Z"
  }
};

  function init() {
    const image = document.querySelector('img[data-ij-skull]') ||
      [...document.querySelectorAll('header img')].find(img => {
        try { return new URL(img.getAttribute('src'), document.baseURI).pathname.endsWith('/ij-skull.svg'); }
        catch { return false; }
      });
    if (!image) return;

    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    const imageOnly = new Set(['src', 'srcset', 'sizes', 'alt', 'loading', 'decoding', 'fetchpriority', 'crossorigin', 'referrerpolicy']);
    for (const attr of image.attributes) {
      if (!imageOnly.has(attr.name)) svg.setAttribute(attr.name, attr.value);
    }
    svg.setAttribute('xmlns', ns);
    svg.setAttribute('viewBox', '0 0 72 72');
    svg.setAttribute('width', image.getAttribute('width') || '72');
    svg.setAttribute('height', image.getAttribute('height') || '72');
    svg.setAttribute('data-ij-skull', '');
    svg.setAttribute('focusable', 'false');
    svg.style.display = 'block';
    const accessibleName = image.getAttribute('aria-label') ?? image.getAttribute('alt') ?? 'Jackson’s skull';
    if (accessibleName) {
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', accessibleName);
    } else {
      svg.setAttribute('aria-hidden', 'true');
    }
    const outline = document.createElementNS(ns, 'path');
    for (const [key, value] of Object.entries(ARTWORK.outline)) outline.setAttribute(key, value);
    const eyes = document.createElementNS(ns, 'path');
    eyes.setAttribute('fill', 'black');
    eyes.setAttribute('data-ij-skull-eyes', '');
    svg.append(outline, eyes);
    image.replaceWith(svg);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = !('IntersectionObserver' in window);
    let hoverMood = null;
    let focusMood = null;
    let sleepy = false;
    let smiling = false;
    let lastActivity = performance.now();
    let current = 'neutral';
    let desired = 'neutral';
    let animation = 0;
    let animationToken = 0;
    let busy = false;
    let blinkTimer = 0;
    let sleepTimer = 0;
    let smileTimer = 0;
    let smileEndTimer = 0;

    const randomDelay = (min, max) => min + Math.random() * (max - min);
    const canAnimate = () => visible && !document.hidden && !reducedMotion.matches;
    // Direct interaction wins over inactivity and occasional smiles.
    const mood = () => hoverMood === 'angry' || focusMood === 'angry' ? 'angry' :
      focusMood || hoverMood || (sleepy ? 'sleepy' : smiling ? 'happy' : 'neutral');

    function paint(state) {
      current = state;
      eyes.setAttribute('d', ARTWORK.eyes[state]);
      svg.setAttribute('data-expression', state);
    }
    function cancelAnimation() {
      animationToken++;
      cancelAnimationFrame(animation);
      animation = 0;
      busy = false;
      eyes.removeAttribute('transform');
    }
    function change(state, blink = false) {
      desired = state;
      if (busy && !blink) return; // Finish closing; choose the latest state while shut.
      if (state === current && !blink) return;
      if (!canAnimate()) {
        cancelAnimation();
        paint(state);
        return;
      }
      cancelAnimation();
      busy = true;
      const token = animationToken;
      const start = performance.now();
      const shut = SETTINGS.closeDuration;
      const total = shut + SETTINGS.openDuration;
      let switched = false;
      function tick(now) {
        if (token !== animationToken) return;
        const elapsed = now - start;
        let scale;
        if (elapsed < shut) {
          scale = 1 - Math.pow(elapsed / shut, 2);
        } else {
          if (!switched) { paint(desired); switched = true; }
          const t = Math.min(1, (elapsed - shut) / SETTINGS.openDuration);
          scale = 1 - Math.pow(1 - t, 3);
        }
        // Fixed pivot for every expression prevents the eyes jumping vertically.
        eyes.setAttribute('transform', `translate(0 46) scale(1 ${scale}) translate(0 -46)`);
        if (elapsed < total) animation = requestAnimationFrame(tick);
        else {
          eyes.removeAttribute('transform');
          animation = 0;
          busy = false;
          if (desired !== current) change(desired);
        }
      }
      animation = requestAnimationFrame(tick);
    }
    const refresh = () => change(mood());

    function scheduleBlink() {
      clearTimeout(blinkTimer);
      blinkTimer = 0;
      if (!canAnimate()) return;
      blinkTimer = setTimeout(() => {
        if (!busy && mood() !== 'sleepy') change(mood(), true);
        scheduleBlink();
      }, randomDelay(SETTINGS.blinkMin, SETTINGS.blinkMax));
    }
    function scheduleSleep() {
      clearTimeout(sleepTimer);
      sleepTimer = 0;
      if (!canAnimate()) return;
      const remaining = SETTINGS.sleepyAfter - (performance.now() - lastActivity);
      sleepTimer = setTimeout(() => {
        sleepTimer = 0;
        if (performance.now() - lastActivity >= SETTINGS.sleepyAfter) {
          sleepy = true;
          refresh();
        } else scheduleSleep();
      }, Math.max(1, remaining));
    }
    function scheduleSmile() {
      clearTimeout(smileTimer);
      smileTimer = 0;
      if (!canAnimate() || !SETTINGS.occasionalSmile) return;
      smileTimer = setTimeout(() => {
        if (!sleepy && !hoverMood && !focusMood) {
          smiling = true;
          refresh();
          smileEndTimer = setTimeout(() => {
            smiling = false;
            smileEndTimer = 0;
            refresh();
          }, SETTINGS.smileDuration);
        }
        scheduleSmile();
      }, randomDelay(SETTINGS.smileMin, SETTINGS.smileMax));
    }
    function activity() {
      lastActivity = performance.now();
      const changed = sleepy || smiling;
      sleepy = false;
      smiling = false;
      clearTimeout(smileEndTimer);
      smileEndTimer = 0;
      if (changed) refresh();
      if (!sleepTimer && canAnimate()) scheduleSleep();
    }
    function reactionFor(element, keyboard = false) {
      if (!(element instanceof Element)) return null;
      if (element === svg || svg.contains(element)) return 'angry';
      const link = element.closest('a[href]');
      if (link?.contains(svg)) return keyboard ? 'angry' : null;
      const custom = element.closest('[data-skull-mood]')?.getAttribute('data-skull-mood');
      if (custom && Object.hasOwn(ARTWORK.eyes, custom)) return custom;
      const href = link?.getAttribute('href')?.trim();
      return href && href !== '#' ? 'happy' : null;
    }
    function clearTimers() {
      clearTimeout(blinkTimer);
      clearTimeout(sleepTimer);
      clearTimeout(smileTimer);
      clearTimeout(smileEndTimer);
      blinkTimer = sleepTimer = smileTimer = smileEndTimer = 0;
    }
    function availabilityChanged() {
      clearTimers();
      cancelAnimation();
      lastActivity = performance.now();
      sleepy = false;
      smiling = false;
      if (document.hidden || !visible) hoverMood = null;
      else if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        hoverMood = svg.matches(':hover') ? 'angry' : reactionFor(document.querySelector('a[href]:hover'));
      }
      focusMood = reactionFor(document.activeElement, true);
      desired = mood();
      paint(desired);
      scheduleBlink();
      scheduleSleep();
      scheduleSmile();
    }

    document.addEventListener('pointerover', event => {
      if (event.pointerType === 'touch') return;
      hoverMood = reactionFor(event.target);
      activity();
      refresh();
    });
    document.addEventListener('pointerout', event => {
      if (event.pointerType === 'touch') return;
      hoverMood = reactionFor(event.relatedTarget);
      activity();
      refresh();
    });
    document.addEventListener('focusin', event => {
      focusMood = reactionFor(event.target, true);
      activity();
      refresh();
    });
    document.addEventListener('focusout', event => {
      focusMood = reactionFor(event.relatedTarget, true);
      activity();
      refresh();
    });
    document.addEventListener('pointermove', activity, {passive: true});
    document.addEventListener('pointerdown', activity, {passive: true});
    document.addEventListener('keydown', activity);
    window.addEventListener('scroll', activity, {passive: true, capture: true});
    document.addEventListener('visibilitychange', availabilityChanged);
    reducedMotion.addEventListener('change', availabilityChanged);

    paint('neutral');
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        const nextVisible = entries[0].isIntersecting;
        if (visible !== nextVisible) {
          visible = nextVisible;
          availabilityChanged();
        }
      }).observe(svg);
    } else availabilityChanged();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once: true});
  else init();
})();
