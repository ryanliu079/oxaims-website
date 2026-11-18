// Draws the "Why join" mind map as if someone is sketching it with a pencil.
(() => {
  const map = document.querySelector('.idea-map');
  if (!map || !('IntersectionObserver' in window)) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const $ = (sel, root = map) => root.querySelector(sel);
  const $$ = (sel, root = map) => [...root.querySelectorAll(sel)];
  const visible = el => el && el.getClientRects().length > 0;
  const SPEED = .95; // fraction of the base timings below
  const ease = t => t < .5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2;

  // Pencil, tip at bottom-left of its box.
  const pencil = document.createElement('div');
  pencil.className = 'idea-pencil';
  pencil.setAttribute('aria-hidden', 'true');
  pencil.innerHTML = '<svg viewBox="0 0 58 58" width="58" height="58"><g transform="rotate(-45 29 29)"><path d="M29 2h8v40h-8z" fill="#d7b369" stroke="#171c3b" stroke-width="1.6" stroke-linejoin="round"/><path d="M29 2h8v5h-8z" fill="#c9746b" stroke="#171c3b" stroke-width="1.6"/><path d="M29 7h8v3h-8z" fill="#b6bdc3" stroke="#171c3b" stroke-width="1.2"/><path d="M29 42h8l-4 12z" fill="#efd9b0" stroke="#171c3b" stroke-width="1.6" stroke-linejoin="round"/><path d="M31.6 50h2.8L33 54z" fill="#171c3b"/></g></svg>';
  map.appendChild(pencil);
  // In the rotated drawing, the tip lands roughly here inside the 58px box.
  const TIP = { x: 8, y: 50 };

  let pen = null;
  function place(p) {
    if (!p) return;
    pen = p;
    pencil.style.transform = `translate(${p.x - TIP.x}px, ${p.y - TIP.y}px)`;
  }
  function local(x, y) {
    const r = map.getBoundingClientRect();
    return { x: x - r.left, y: y - r.top };
  }
  function pathPoint(path, len) {
    const pt = path.getPointAtLength(len), m = path.getScreenCTM();
    if (!m) return null;
    return local(m.a * pt.x + m.c * pt.y + m.e, m.b * pt.x + m.d * pt.y + m.f);
  }

  // Step builders. Each returns { dur, start(), update(t) -> pen point }.
  const steps = [];
  const hide = [];

  function drawPaths(paths, dur) {
    paths = paths.filter(p => p.getTotalLength);
    const lens = paths.map(p => p.getTotalLength());
    const total = lens.reduce((a, b) => a + b, 0) || 1;
    paths.forEach((p, i) => { hide.push(() => { p.style.strokeDasharray = lens[i] + ' ' + (lens[i] + 2); p.style.strokeDashoffset = lens[i]; }); });
    let stops = []; let acc = 0;
    lens.forEach(l => { stops.push(acc / total); acc += l; });
    steps.push({
      dur,
      start: () => paths[0] && pathPoint(paths[0], 0),
      update(t) {
        let at = t * total, pt = null;
        paths.forEach((p, i) => {
          const off = stops[i] * total, d = Math.min(Math.max(at - off, 0), lens[i]);
          p.style.strokeDashoffset = lens[i] - d;
          if (at >= off && at <= off + lens[i]) pt = pathPoint(p, d);
        });
        if (t >= 1) paths.forEach(p => { p.style.strokeDasharray = ''; p.style.strokeDashoffset = ''; });
        return pt;
      },
    });
  }

  function writeLine(el, dur) {
    hide.push(() => { el.style.clipPath = 'inset(-20% 100% -20% -2%)'; });
    const at = t => { const r = el.getBoundingClientRect(); return local(r.left + r.width * t, r.top + r.height * (.72 + Math.sin(t * 40) * .1)); };
    steps.push({
      dur,
      start: () => at(0),
      update(t) {
        el.style.clipPath = t >= 1 ? '' : `inset(-20% ${100 - t * 100}% -20% -2%)`;
        return at(t);
      },
    });
  }

  function writeWords(el, dur) {
    const words = [];
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const s = document.createElement('span'); s.className = 'idea-word-ink'; s.textContent = part; frag.appendChild(s); words.push(s);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && n.tagName !== 'svg') walk(n);
      });
    };
    walk(el);
    const at = (w, f) => { const r = w.getBoundingClientRect(); return local(r.left + r.width * f, r.top + r.height * .75); };
    steps.push({
      dur,
      start: () => words[0] && at(words[0], 0),
      update(t) {
        const n = words.length, pos = t * n, i = Math.min(Math.floor(pos), n - 1);
        words.forEach((w, k) => { w.style.opacity = k <= i || t >= 1 ? 1 : 0; });
        return words[i] && at(words[i], pos - i);
      },
    });
  }

  function then(fn) { steps.push({ dur: 0, start: () => null, update() { fn(); return null; } }); }

  // Build the sketch in drawing order: you, then each helper, then the twist.
  const arrowsDesktop = $('.idea-arrows-desktop'), arrowsMobile = $('.idea-arrows-mobile');
  const arrows = () => $$('.idea-arrow', visible(arrowsMobile) && getComputedStyle(arrowsMobile).display !== 'none' ? arrowsMobile : arrowsDesktop);
  const allArrows = $$('.idea-arrow');
  const ghost = $('.idea-arrow-ghost');
  const you = $('.idea-you');

  drawPaths($$('.idea-sketch path', you), .9);
  writeLine($('h3', you), .55);
  drawPaths([$('.idea-ring path', you)], .7);
  // The four helpers are sticky notes: they slap on one after another and each arrow follows.
  const notes = ['.idea-people', '.idea-funding', '.idea-support', '.idea-tools'].map(sel => $(sel));
  hide.push(() => notes.forEach(n => n.classList.add('note-waiting')));
  const GAP = .26, ARROW = .55;
  let noteArrows = null;
  steps.push({
    dur: GAP * 3 + .2 + ARROW,
    realTime: true,
    start() { noteArrows = arrows(); return null; },
    update(t) {
      const s = t * this.dur;
      notes.forEach((n, i) => {
        if (s >= i * GAP) n.classList.remove('note-waiting');
        const p = noteArrows[i]; if (!p) return;
        const l = p.getTotalLength(), k = Math.min(Math.max((s - i * GAP - .2) / ARROW, 0), 1);
        p.style.strokeDasharray = l + ' ' + (l + 2); p.style.strokeDashoffset = l - l * k;
      });
      return null;
    },
  });
  then(() => { if (ghost) ghost.style.opacity = ''; });
  drawPaths([$('.idea-strike path', you)], .3);
  writeLine($('.idea-fix', you), .45);
  const caption = $('.idea-caption');
  drawPaths([$('svg path', caption)], .35);
  writeWords($('span', caption), .8);

  hide.push(() => {
    allArrows.forEach(p => { const l = p.getTotalLength() || 400; p.style.strokeDasharray = l + ' ' + (l + 2); p.style.strokeDashoffset = l; });
    if (ghost) ghost.style.opacity = '0';
  });

  // Hide everything that will be drawn, then wait for the map to scroll into view.
  map.classList.add('is-drawing');
  hide.forEach(fn => fn());

  let started = false;
  const io = new IntersectionObserver(entries => {
    if (started || !entries.some(e => e.isIntersecting)) return;
    started = true; io.disconnect(); run();
  }, { threshold: .3 });
  io.observe(map);

  function run() {
    let i = -1, step = null, elapsed = 0, last = null, travel = null;
    pencil.classList.add('is-on');
    const next = () => {
      i++; step = steps[i]; elapsed = 0;
      if (!step) return false;
      const to = step.start && step.start();
      travel = pen && to ? { from: pen, to, t: 0, dur: Math.min(.18, Math.hypot(to.x - pen.x, to.y - pen.y) / 2600 + .05) } : null;
      if (!pen && to) place(to);
      if (to) pencil.classList.add('is-on');
      return true;
    };
    next();
    const frame = now => {
      const dt = last == null ? 0 : Math.min((now - last) / 1000, .05);
      last = now;
      if (travel) {
        travel.t += dt / travel.dur;
        const k = ease(Math.min(travel.t, 1));
        place({ x: travel.from.x + (travel.to.x - travel.from.x) * k, y: travel.from.y + (travel.to.y - travel.from.y) * k - Math.sin(k * Math.PI) * 18 });
        if (travel.t >= 1) travel = null;
        requestAnimationFrame(frame); return;
      }
      elapsed += dt;
      const t = step.dur ? Math.min(elapsed / (step.dur * (step.realTime ? 1 : SPEED)), 1) : 1;
      const pt = step.update(t);
      pencil.classList.toggle('is-on', !!pt);
      place(pt);
      if (t >= 1 && !next()) { finish(); return; }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }
  function finish() {
    map.classList.remove('is-drawing');
    $$('.idea-word-ink').forEach(w => { w.style.opacity = ''; });
    $$('.note-waiting').forEach(n => n.classList.remove('note-waiting'));
    $$('path').forEach(p => { p.style.strokeDasharray = ''; p.style.strokeDashoffset = ''; });
    if (pen) place({ x: pen.x + 40, y: pen.y - 30 });
    pencil.classList.remove('is-on');
    setTimeout(() => pencil.remove(), 600);
  }
})();
