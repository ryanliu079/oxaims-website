const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (menuButton.getAttribute('aria-expanded') === 'true') { closeMenu(); menuButton.focus(); }
});
document.addEventListener('click', event => {
  if (!document.querySelector('.site-header').contains(event.target)) closeMenu();
});

// The model follows the page automatically. Device reduced motion takes priority.
const systemMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const model = document.querySelector('.maker-model');
if (model) {
  const stage = model.querySelector('.model-stage');
  const scrollSpace = model.closest('.model-scroll-space');
  let progress = -1;
  let scrollStart = 0;
  let scrollDistance = 220;
  let scrollFrame = 0;
  let yaw = -32;
  let drag = null;
  function setAssembly(value) {
    const next = Math.max(0, Math.min(1, value));
    if (next === progress) return;
    progress = next;
    model.style.setProperty('--assembly-progress', progress.toFixed(4));
    model.dispatchEvent(new Event('maker-model-change'));
  }
  function updateFromScroll() {
    scrollFrame = 0;
    if (systemMotion.matches) return;
    setAssembly((window.scrollY - scrollStart) / scrollDistance);
  }
  function queueScrollUpdate() {
    if (!scrollFrame && !systemMotion.matches) scrollFrame = requestAnimationFrame(updateFromScroll);
  }
  function measureScene() {
    scrollSpace.style.setProperty('--model-height', `${model.offsetHeight}px`);
    scrollDistance = parseFloat(getComputedStyle(scrollSpace).getPropertyValue('--scroll-distance')) || 220;
    const top = parseFloat(getComputedStyle(model).top) || 112;
    scrollStart = Math.max(0, scrollSpace.getBoundingClientRect().top + window.scrollY - top);
    queueScrollUpdate();
  }
  function refreshMotion() {
    const reduced = systemMotion.matches;
    document.documentElement.classList.toggle('reduce-motion', reduced);
    if (reduced && scrollFrame) { cancelAnimationFrame(scrollFrame); scrollFrame = 0; }
    scrollSpace.classList.toggle('scroll-enabled', !reduced);
    model.classList.toggle('is-scroll-linked', !reduced);
    if (reduced) setAssembly(1); else if (progress < 0) setAssembly(0);
    measureScene();
  }
  function rotate(delta) { yaw += delta; model.style.setProperty('--yaw', `${yaw}deg`); model.dispatchEvent(new Event('maker-model-change')); }
  stage.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); rotate(event.key === 'ArrowLeft' ? -20 : 20); }
  });
  stage.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    drag = { x: event.clientX, yaw }; stage.setPointerCapture(event.pointerId); model.classList.add('is-dragging');
  });
  stage.addEventListener('pointermove', event => {
    if (!drag) return;
    yaw = drag.yaw + (event.clientX - drag.x) * .35; model.style.setProperty('--yaw', `${yaw}deg`); model.dispatchEvent(new Event('maker-model-change'));
  });
  function finishDrag() { drag = null; model.classList.remove('is-dragging'); }
  stage.addEventListener('pointerup', finishDrag); stage.addEventListener('pointercancel', finishDrag); stage.addEventListener('lostpointercapture', finishDrag);
  window.addEventListener('scroll', queueScrollUpdate, { passive: true });
  window.addEventListener('resize', measureScene, { passive: true });
  systemMotion.addEventListener('change', refreshMotion);
  if ('ResizeObserver' in window) new ResizeObserver(measureScene).observe(model);
  refreshMotion();
} else {
  const refreshMotion = () => document.documentElement.classList.toggle('reduce-motion', systemMotion.matches);
  refreshMotion(); systemMotion.addEventListener('change', refreshMotion);
}

// Only animate sculptures while visible; pointer movement adds a little depth.
const sculptures = [...document.querySelectorAll('[data-sculpture]')];
if (sculptures.length) {
  if ('IntersectionObserver' in window) {
    const visibility = new IntersectionObserver(entries => {
      entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting));
    }, { rootMargin: '30px' });
    sculptures.forEach(scene => visibility.observe(scene));
  } else {
    sculptures.forEach(scene => scene.classList.add('is-visible'));
  }
  sculptures.forEach(scene => {
    let frame = 0;
    scene.addEventListener('pointermove', event => {
      if (systemMotion.matches || event.pointerType !== 'mouse') return;
      if (frame) cancelAnimationFrame(frame);
      const bounds = scene.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      frame = requestAnimationFrame(() => {
        scene.style.setProperty('--look-x', `${(x * 10).toFixed(2)}deg`);
        scene.style.setProperty('--look-y', `${(-y * 7).toFixed(2)}deg`);
        frame = 0;
      });
    });
    scene.addEventListener('pointerleave', () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      scene.style.removeProperty('--look-x');
      scene.style.removeProperty('--look-y');
    });
  });
}

// Curated prompts work locally and do not need a chatbot or an API.
// If the 3D bundle fails to download, keep the hero message truthful.
window.addEventListener('error', event => {
  if (event.target instanceof HTMLScriptElement && event.target.getAttribute('src')?.startsWith('/sculptures-3d.js')) {
    const status = document.querySelector('[data-chip-studio] .chip-loading');
    if (status) status.textContent = 'The interactive model couldn’t load. Please refresh to try again.';
  }
}, true);
