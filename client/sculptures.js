import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// One GPU context serves all cards. The hero shows only the current WebGL chip.
const elements = [...document.querySelectorAll('[data-sculpture], [data-chip-studio]')];
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const pulseTravelPerMs = .00054;
const pulseCycle = 1.3;
// Screen typefaces; declared before initialise() runs so the canvas textures can use them.
const mono='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace';
const sans='"Source Sans 3", system-ui, sans-serif';
let renderer;
try {
  if (elements.length) initialise();
} catch (error) {
  restoreFallback();
  console.warn('3D studio unavailable; using the lightweight sculptures.', error.message);
}
function restoreFallback() {
  elements.forEach(el => {
    el.classList.remove('studio-ready');
    el.querySelector('.scene-studio-output')?.remove();
    const status = el.querySelector('.chip-loading');
    if (status) status.textContent = 'The interactive model couldn’t load in this browser.';
  });
  renderer?.domElement.remove();
  renderer?.dispose();
}
function initialise() {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(Math.max(devicePixelRatio, 1.5), 2));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.shadowMap.autoUpdate = false;
  const canvas = renderer.domElement;
  canvas.className = 'sculpture-studio-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  // Keep the WebGL canvas offscreen; native per-card canvases scroll and clip with the page.
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const environment = pmrem.fromScene(room, .04);
  room.dispose();
  pmrem.dispose();
  const materials = {
    cream: new THREE.MeshPhysicalMaterial({ color: 0xe7e9f0, roughness: .34, metalness: .04, clearcoat: .3, clearcoatRoughness: .26, envMapIntensity: .9 }),
    navy: new THREE.MeshPhysicalMaterial({ color: 0x181b43, roughness: .27, metalness: .55, clearcoat: .36, envMapIntensity: 1.15 }),
    orange: new THREE.MeshPhysicalMaterial({ color: 0xb8764b, roughness: .3, metalness: .72, clearcoat: .5, clearcoatRoughness: .24, envMapIntensity: .8 }),
    metal: new THREE.MeshStandardMaterial({ color: 0xc8aa69, roughness: .29, metalness: .82, envMapIntensity: 1.1 }),
    glass: new THREE.MeshPhysicalMaterial({ color: 0xd5daf2, roughness: .15, metalness: .22, transparent: true, opacity: .38, clearcoat: 1, depthWrite: false, side: THREE.DoubleSide }),
  };
  const records = elements.map((el, i) => {
    const record = buildScene(el, i, materials, environment.texture);
    const output = document.createElement('canvas');
    output.className = 'scene-studio-output'; output.setAttribute('aria-hidden', 'true');
    record.context = output.getContext('2d', { alpha: true });
    record.output = output; el.appendChild(output);
    return record;
  });
  let frame = 0, previous = 0, dirty = true, disposed = false;
  const resize = () => { dirty = true; schedule(); };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { records.find(record => record.el === entry.target).visible = entry.isIntersecting; });
    dirty = true; schedule();
  });
  records.forEach(record => observer.observe(record.el));
  records.filter(record => record.hover).forEach(record => {
    const target = record.el.closest('.branch-art') || record.el;
    target.addEventListener('pointermove', event => {
      if (event.pointerType !== 'mouse') return;
      const bounds = target.getBoundingClientRect();
      record.hover.x = (event.clientX - bounds.left) / bounds.width - .5;
      record.hover.y = (event.clientY - bounds.top) / bounds.height - .5;
      record.hover.active = true; schedule();
    });
    target.addEventListener('pointerleave', () => { record.hover.active = false; schedule(); });
  });
  function schedule() { if (!frame && !disposed && !document.hidden) frame = requestAnimationFrame(render); }
  function render(time) {
    frame = 0;
    if (disposed || document.hidden) return;
    if (time - previous < 33) { schedule(); return; }
    previous = time;
    const visible = records.filter(record => record.visible);
    if (!dirty && (motion.matches || !visible.length)) return;
    renderer.setScissorTest(false);
    for (const record of visible) {
      const { el, scene, camera, object, light } = record;
      const rect = el.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= innerHeight || rect.width <= 0) continue;
      const aspect = rect.width / rect.height;
      const size = record.kind === 'chip' ? Math.max(2.55, 2.75 / aspect) : record.hover ? record.size : record.kind === 'bridge' ? 2.2 : 1.95;
      camera.left = -size * aspect;
      camera.right = size * aspect;
      camera.top = size;
      camera.bottom = -size;
      camera.updateProjectionMatrix();
      const phase = motion.matches ? 0 : time * .00022 + record.phase;
      if (record.kind === 'chip') {
        const model = el.closest('.maker-model');
        const progress = motion.matches ? 1 : Number(model.style.getPropertyValue('--assembly-progress')) || 0;
        const yaw = parseFloat(model.style.getPropertyValue('--yaw'));
        object.rotation.y = ((Number.isFinite(yaw) ? yaw : -32) + 32) * Math.PI / 180;
        record.chipLayers.forEach(layer => { layer.group.position.y = layer.y + (1 - progress) * layer.lift; });
        el.dataset.renderedAssembly = progress.toFixed(3);
        // Quick, staggered signals follow the copper paths and travel with the board.
        (object.userData.pulses || []).forEach((pulse, index) => {
          const travel = (time * pulseTravelPerMs + index * .27) % pulseCycle;
          pulse.group.visible = !motion.matches && travel < 1;
          if (pulse.group.visible) {
            pulse.dots.forEach((dot, tail) => {
              const point = Math.max(0, travel - tail * .025);
              dot.position.copy(pulse.curve.getPointAt(point));
              dot.position.y += .015;
              dot.material.opacity = Math.sin(Math.PI * travel) * (1 - tail / pulse.dots.length);
            });
          }
        });
        el.dataset.pulsesActive = String(!motion.matches);
        el.dataset.pulsePhase = motion.matches ? '0' : (time * pulseTravelPerMs % pulseCycle).toFixed(3);
      } else if (record.hover) {
        // Project models turn to follow the mouse while it is over the card, then settle back.
        const h = record.hover;
        const targetYaw = h.active ? h.x * 1.5 : Math.sin(phase) * .12;
        const targetPitch = h.active ? h.y * .22 : 0;
        h.yaw += (targetYaw - h.yaw) * (motion.matches ? 1 : .14);
        h.pitch += (targetPitch - h.pitch) * (motion.matches ? 1 : .14);
        object.rotation.y = record.rotation + h.yaw;
        object.rotation.x = h.pitch;
      } else {
        object.rotation.y = record.rotation + Math.sin(phase) * .09 + (parseFloat(el.style.getPropertyValue('--look-x')) || 0) * .013;
        object.rotation.x = (parseFloat(el.style.getPropertyValue('--look-y')) || 0) * .008;
      }
      object.position.y = motion.matches || record.hover ? 0 : Math.sin(phase * 1.3) * .045;
      light.shadow.needsUpdate = true;
      renderer.shadowMap.needsUpdate = true;
      renderer.setSize(Math.ceil(rect.width), Math.ceil(rect.height), false);
      renderer.setViewport(0, 0, rect.width, rect.height);
      renderer.clear();
      renderer.render(scene, camera);
      const source = renderer.domElement;
      if (record.output.width !== source.width || record.output.height !== source.height) {
        record.output.width = source.width; record.output.height = source.height;
      }
      record.context.clearRect(0, 0, source.width, source.height);
      record.context.drawImage(source, 0, 0);
      el.classList.add('studio-ready');
    }
    dirty = false;
    if (visible.length && !motion.matches) schedule();
  }
  const invalidate = () => { dirty = true; schedule(); };
  addEventListener('resize', resize, { passive: true });
  addEventListener('scroll', invalidate, { passive: true });
  addEventListener('pageshow', invalidate);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { cancelAnimationFrame(frame); frame = 0; } else invalidate();
  });
  motion.addEventListener('change', invalidate);
  document.querySelector('.maker-model')?.addEventListener('maker-model-change', invalidate);
  canvas.addEventListener('webglcontextlost', event => {
    event.preventDefault(); disposed = true; cancelAnimationFrame(frame); observer.disconnect(); restoreFallback();
  });
  resize();
}
function buildScene(el, index, materials, environment) {
  const kind = el.hasAttribute('data-chip-studio') ? 'chip' : [...el.classList].find(name => name.startsWith('sculpture-') && name !== 'sculpture-scene').slice(10);
  const projectBranch = ['apps', 'physical', 'research'].includes(kind);
  const scene = new THREE.Scene();
  scene.environment = environment;
  const camera = new THREE.OrthographicCamera(-3, 3, 2.15, -2.15, .1, 50);
  camera.position.set(5.4, 3.9, 6.4);
  if (kind === 'chip') camera.position.set(4.9, 5.8, 6.9);
  else if (projectBranch) camera.position.set(4.4, 3.5, 7.7);
  // Per-model framing keeps each model clear of the torn top edge and visually centred.
  const framing = { apps: [1.05, 2.25, .3], physical: [.85, 1.95, .1], research: [1.02, 2.0, .36] }[kind];
  camera.lookAt(0, kind === 'chip' ? .8 : framing ? framing[0] : .9, 0);
  scene.add(new THREE.HemisphereLight(kind === 'chip' || projectBranch ? 0xfff4df : 0xf5f6ff, 0x101329, 1.4));
  const light = new THREE.DirectionalLight(kind === 'chip' || projectBranch ? 0xffeed5 : 0xf9faff, kind === 'chip' || projectBranch ? 2.1 : 2.6);
  light.position.set(-3, 7, 4);
  light.castShadow = true;
  light.shadow.mapSize.set(kind === 'chip' || projectBranch ? 1024 : 512, kind === 'chip' || projectBranch ? 1024 : 512);
  light.shadow.camera.left = light.shadow.camera.bottom = -4;
  light.shadow.camera.right = light.shadow.camera.top = 4;
  light.shadow.normalBias = .035;
  light.shadow.bias = -.0002;
  light.shadow.radius = 4;
  scene.add(light);
  const rim = new THREE.DirectionalLight(kind === 'chip' || projectBranch ? 0xdce5ee : 0xaaa5ff, kind === 'chip' || projectBranch ? .75 : 1.5);
  rim.position.set(4, 3, -4); scene.add(rim);
  if (kind === 'chip') {
    // Neutral studio illumination lets nickel, solder and gold read as different metals.
    light.color.set(0xfff6e9); light.intensity = 2.5;
    rim.intensity = 1.65;
    const fill = new THREE.DirectionalLight(0xe1ecff, .65);
    fill.position.set(-5, 1, -2); scene.add(fill);
  }
  const object = new THREE.Group(); scene.add(object);
  const mesh = (geometry, material, x = 0, y = 0, z = 0) => {
    const part = new THREE.Mesh(geometry, materials[material]);
    part.position.set(x, y, z); part.castShadow = true; part.receiveShadow = true;
    object.add(part); return part;
  };
  const rounded = (w, h, d, material, x, y, z, radius = .08) => mesh(new RoundedBoxGeometry(w, h, d, 4, radius), material, x, y, z);
  const sphere = (r, material, x, y, z) => mesh(new THREE.SphereGeometry(r, 48, 32), material, x, y, z);
  const ring = (r, t, material, x, y, z) => mesh(new THREE.TorusGeometry(r, t, 24, 96), material, x, y, z);
  // A low rounded display plinth and a receiving surface create grounded shadows.
  if (kind !== 'chip' && !projectBranch) rounded(projectBranch ? 4.2 : 3.4, .16, projectBranch ? 3.1 : 2.65, 'navy', 0, -.04, 0, .075);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), new THREE.ShadowMaterial({ color: 0x010e16, opacity: projectBranch ? .06 : .14 }));
  floor.rotation.x = -Math.PI / 2; floor.position.y = kind === 'chip' ? -.46 : -.135; floor.receiveShadow = true; scene.add(floor);

  let chipLayers = null;
  if (kind === 'chip') {
    chipLayers = buildChipPrototype(object, materials);
  } else if (projectBranch) {
    buildBranchModel(object, kind);
  } else if (kind === 'tools') {
    rounded(2.2, .14, 1.75, 'cream', 0, .23, 0);
    const mid = rounded(1.96, .12, 1.52, 'metal', 0, .75, 0, .05); mid.rotation.y = .12;
    const top = rounded(1.74, .12, 1.28, 'glass', 0, 1.38, 0, .05); top.rotation.y = -.12;
    sphere(.37, 'orange', 0, 1.04, .03);
    for (const x of [-.69, .69]) for (const z of [-.47, .47]) {
      mesh(new THREE.CylinderGeometry(.035, .035, 1.25, 16), 'metal', x, .79, z);
    }
  } else if (kind === 'workshops') {
    [.23, .59, .95].forEach((y, i) => {
      const r = ring(.7 - i * .05, .15, i === 1 ? 'navy' : 'cream', 0, y, 0);
      r.rotation.x = Math.PI / 2;
    });
    sphere(.32, 'orange', .12, 1.41, 0);
    ring(.42, .035, 'metal', -.01, 1.4, 0).rotation.y = .6;
  } else if (kind === 'community' || kind === 'people') {
    const a = ring(.62, .18, 'cream', -.58, .84, .06); a.rotation.y = -.3;
    const b = ring(.62, .18, 'orange', .45, .84, .07); b.rotation.y = .9;
    const c = ring(.55, .16, 'navy', .03, 1.27, -.12); c.rotation.set(.3, -.8, .1);
  } else if (kind === 'hackathon') {
    const knot = mesh(new THREE.TorusKnotGeometry(.66, .19, 160, 24, 2, 3), 'cream', 0, 1.04, 0);
    knot.rotation.set(.1, .3, -.35);
    const orbit = ring(1.15, .035, 'metal', 0, .98, 0); orbit.rotation.x = 1.1;
    sphere(.24, 'orange', .9, .51, .44);
  } else {
    // A continuous round arch gives the architectural motif a sculpted profile.
    const shape = new THREE.Shape();
    shape.moveTo(-1.12, 0); shape.lineTo(-1.12, 1.05);
    shape.absarc(0, 1.05, 1.12, Math.PI, 0, true);
    shape.lineTo(1.12, 0); shape.lineTo(.73, 0); shape.lineTo(.73, 1.05);
    shape.absarc(0, 1.05, .73, 0, Math.PI, false);
    shape.lineTo(-.73, 0); shape.closePath();
    const arch = new THREE.ExtrudeGeometry(shape, { depth: .45, bevelEnabled: true, bevelSegments: 4, steps: 1, bevelSize: .055, bevelThickness: .055, curveSegments: 48 });
    mesh(arch, 'cream', 0, .1, -.3);
    sphere(.38, 'orange', .08, .49, .24);
    const halo = ring(.51, .025, 'metal', .08, .5, .24); halo.rotation.x = 1.25;
  }
  const hover = framing ? { x: 0, y: 0, yaw: 0, pitch: 0, active: false } : null;
  return { el, kind, scene, camera, object, light, phase: index * 1.9, rotation: framing ? framing[2] : -.12, size: framing?.[1], visible: false, hover, chipLayers };
}

// Static desk objects for the three project branches. They turn with the mouse; nothing assembles.
function buildBranchModel(root, branch) {
  const materials = {
    cream: new THREE.MeshStandardMaterial({color:0xdad3c5,roughness:.54,metalness:.45}),
    navy: new THREE.MeshStandardMaterial({color:0x17232d,roughness:.62,metalness:.15}),
    black: new THREE.MeshStandardMaterial({color:0x10151b,roughness:.7}),
    copper: new THREE.MeshStandardMaterial({color:0xb77f52,roughness:.4,metalness:.8}),
    brass: new THREE.MeshStandardMaterial({color:0xbda570,roughness:.48,metalness:.75}),
    silver: new THREE.MeshStandardMaterial({color:0xb6bdc3,roughness:.38,metalness:.8}),
    graphite: new THREE.MeshStandardMaterial({color:0x2a2f37,roughness:.45,metalness:.6}),
    paper: new THREE.MeshStandardMaterial({color:0xece4d2,roughness:.96}),
    ink: new THREE.MeshStandardMaterial({color:0x58636b,roughness:.9}),
    green: new THREE.MeshStandardMaterial({color:0x24413d,roughness:.78,metalness:.12}),
    led: new THREE.MeshBasicMaterial({color:0x7fe0a8,toneMapped:false}),
  };
  const group = new THREE.Group(); root.add(group);
  const part = (parent, y = 0) => { const g = new THREE.Group(); g.position.y = y; parent.add(g); return g; };
  function mesh(parent,geometry,tone,x=0,y=0,z=0) {const m=new THREE.Mesh(geometry,typeof tone==='string'?materials[tone]:tone);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
  const box=(p,w,h,d,t,x=0,y=0,z=0,r=.03)=>mesh(p,new RoundedBoxGeometry(w,h,d,6,Math.min(r,w/2,h/2,d/2)),t,x,y,z);
  const cylinder=(p,r,h,t,x,y,z,seg=40)=>mesh(p,new THREE.CylinderGeometry(r,r,h,seg),t,x,y,z);
  function line(p,points,t='copper',radius=.009) {return mesh(p,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(v=>new THREE.Vector3(...v)),false,'centripetal'),40,radius,8,false),t);}
  function display(parent,w,h,x,y,z,texture,bezel='cream') {
    box(parent,w,h,.085,bezel,x,y,z,.04);
    box(parent,w-.07,h-.07,.018,'black',x,y,z+.05,.025);
    const face=mesh(parent,new THREE.PlaneGeometry(w-.16,h-.16),new THREE.MeshBasicMaterial({map:texture,toneMapped:false}),x,y,z+.061);face.castShadow=false;
  }
  // A wide, diffused contact shadow grounds the objects without a display pedestal.
  const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=128;
  const sc=shadowCanvas.getContext('2d');const grad=sc.createRadialGradient(64,64,8,64,64,64);grad.addColorStop(0,'rgba(0,0,0,.35)');grad.addColorStop(.55,'rgba(0,0,0,.15)');grad.addColorStop(1,'rgba(0,0,0,0)');sc.fillStyle=grad;sc.fillRect(0,0,128,128);
  const contact=mesh(group,new THREE.PlaneGeometry(branch==='research'?7.4:5.8,4.1),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(shadowCanvas),transparent:true,depthWrite:false}),0,-.095,.1);contact.rotation.x=-Math.PI/2;contact.castShadow=false;contact.receiveShadow=false;

  if(branch==='apps') {
    const body=part(group,.04);
    box(body,3.55,.13,2.3,'cream',0,0,.12,.06);
    box(body,3.45,.025,2.2,'silver',0,-.068,.12,.012);
    for(const z of [-.48,-.22])box(body,.012,.034,.16,'black',-1.776,0,z,.012);
    box(body,.55,.025,.035,'ink',0,.065,1.25,.012);
    const hinge=cylinder(body,.065,3.05,'silver',0,.09,-.9);hinge.rotation.z=Math.PI/2;
    const deck=part(group,.114);
    box(deck,2.96,.018,1.15,'black',0,0,-.27,.04);
    for(let row=0;row<5;row++)for(let col=0;col<12;col++) {
      const x=-1.35+col*.245,z=-.72+row*.225;
      box(deck,.205,.022,.17,'navy',x,.018,z,.018);
      if(row<4)box(deck,.025,.002,.009,'silver',x-.055,.031,z-.04,.003);
    }
    box(deck,1.08,.024,.17,'navy',0,.018,.18,.018);
    box(deck,1.1,.009,.54,'silver',0,.001,.77,.035);
    box(deck,1.07,.01,.51,'cream',0,.004,.77,.03);
    for(const side of [-1,1])for(let i=0;i<20;i++)box(deck,.09,.003,.012,'ink',side*1.58,.004,-.72+i*.055,.004);
    const lid=part(group,.14);
    const pivot=new THREE.Group();pivot.position.z=-.92;pivot.rotation.x=-.17;lid.add(pivot);
    display(pivot,3.55,2.25,0,1.13,0,canvasTexture(1630,1000,drawCodingAgent));
  } else if(branch==='physical') {
    // A desktop robot arm sorting blocks into a tray on a cutting mat, watched by a small camera.
    const mat=part(group,0);
    box(mat,4.1,.05,2.9,'green',0,.025,0,.04);
    for(let i=1;i<10;i++)box(mat,.006,.004,2.7,'ink',-2+i*.4,.052,0,.002);
    for(let i=1;i<7;i++)box(mat,3.9,.004,.006,'ink',0,.052,-1.45+i*.41,.002);
    // A sorting tray already holding two blocks, and loose blocks still to pick.
    const tray=part(group,.05);tray.position.set(1.35,.05,-.55);
    box(tray,1.05,.06,.85,'cream',0,.03,0,.03);
    for(const z of [-.4,.4])box(tray,1.05,.2,.05,'cream',0,.12,z,.02);
    for(const x of [-.5,.5])box(tray,.05,.2,.85,'cream',x,.12,0,.02);
    box(tray,.24,.24,.24,'copper',-.2,.18,-.12,.03);box(tray,.24,.24,.24,'copper',.2,.18,.1,.03);
    [[-1.55,.75,'navy'],[-1.15,1.05,'copper'],[-.15,1.05,'paper']].forEach(([x,z,t])=>box(mat,.24,.24,.24,t,x,.17,z,.03));
    // Arm: base, turntable, shoulder, elbow and wrist are nested so each joint carries the next.
    const base=part(group,.05);base.position.set(-.5,.05,-.55);base.rotation.y=Math.PI/2;
    cylinder(base,.52,.16,'graphite',0,.08,0);
    cylinder(base,.42,.14,'cream',0,.23,0);
    for(const x of [-.17,.17])box(base,.08,.42,.34,'graphite',x,.47,0,.03);
    const shoulder=part(base,.58);shoulder.rotation.x=.6;
    const sj=cylinder(shoulder,.17,.44,'silver',0,0,0);sj.rotation.z=Math.PI/2;
    box(shoulder,.26,1.5,.26,'cream',0,.75,0,.1);
    box(shoulder,.27,.9,.04,'graphite',0,.75,.12,.02);
    const elbow=part(shoulder,1.5);elbow.rotation.x=1.5;
    const ej=cylinder(elbow,.15,.36,'silver',0,0,0);ej.rotation.z=Math.PI/2;
    box(elbow,.21,1.2,.21,'cream',0,.6,0,.08);
    // A loose cable loop between the joints.
    line(elbow,[[.12,.05,-.12],[.18,.4,-.2],[.14,.9,-.14],[.1,1.15,-.06]],'black',.018);
    const wrist=part(elbow,1.2);wrist.rotation.x=1.02;
    const wj=cylinder(wrist,.11,.28,'silver',0,0,0);wj.rotation.z=Math.PI/2;
    cylinder(wrist,.1,.16,'graphite',0,.13,0);
    box(wrist,.42,.08,.16,'graphite',0,.24,0,.025);
    for(const x of [-.155,.155])box(wrist,.045,.32,.12,'silver',x,.42,0,.015);
    box(wrist,.24,.24,.24,'navy',0,.5,0,.03);
    // A small camera on a post gives the arm its eyes.
    const cam=part(group,0);cam.position.set(-1.7,0,-1.05);
    cylinder(cam,.18,.05,'graphite',0,.075,0);
    cylinder(cam,.035,1.4,'silver',0,.8,0);
    const head=part(cam,1.5);head.rotation.set(.5,1.15,0);
    box(head,.34,.22,.24,'graphite',0,0,0,.04);
    const lens=cylinder(head,.08,.08,'black',0,0,.14);lens.rotation.x=Math.PI/2;
    box(head,.035,.035,.02,'led',.12,.07,.125,.008);
  } else {
    // Two angled monitors: a PnL dashboard and a page of model fits.
    const screens=[canvasTexture(1600,960,drawPnl),canvasTexture(1600,960,drawFits)];
    [-1,1].forEach((side,i)=>{
      const arm=part(group,0);arm.position.set(side*1.5,0,-.55);arm.rotation.y=-side*.24;
      box(arm,.95,.05,.62,'graphite',0,.025,.05,.04);
      box(arm,.2,1.05,.1,'graphite',0,.55,-.1,.03);
      display(arm,2.9,1.74,0,1.45,0,screens[i],'graphite');
    });
    const keys=part(group,0);
    box(keys,2.3,.07,.72,'cream',-.1,.035,.85,.05);
    for(let row=0;row<4;row++)for(let col=0;col<13;col++)box(keys,.14,.025,.12,'navy',-1.07+col*.162,.08,.62+row*.155,.015);
    box(keys,.34,.12,.55,'cream',1.6,.06,.92,.1);
    const mug=part(group,0);mug.position.set(-1.95,0,.95);
    cylinder(mug,.22,.48,'paper',0,.24,0);cylinder(mug,.19,.02,'navy',0,.475,0);
    const handle=mesh(mug,new THREE.TorusGeometry(.12,.035,10,24),'paper',-.22,.26,0);handle.rotation.y=Math.PI/2;
    group.scale.setScalar(.92);
  }
}

function canvasTexture(width, height, draw) {
  const c=document.createElement('canvas');c.width=width;c.height=height;
  draw(c.getContext('2d'),width,height);
  const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=8;return tex;
}
function seeded(seed) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function roundRect(ctx,x,y,w,h,r,fill,stroke,width=2) {
  ctx.beginPath();ctx.roundRect(x,y,w,h,r);
  if(fill){ctx.fillStyle=fill;ctx.fill();}
  if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=width;ctx.stroke();}
}
function titleBar(ctx,w,label) {
  ctx.fillStyle='#1b2029';ctx.fillRect(0,0,w,64);
  ['#e0695a','#e2b354','#62b46d'].forEach((color,i)=>{ctx.fillStyle=color;ctx.beginPath();ctx.arc(34+i*30,32,9,0,Math.PI*2);ctx.fill();});
  ctx.fillStyle='#9aa3ae';ctx.font='26px ui-monospace, Menlo, monospace';ctx.textAlign='center';ctx.fillText(label,w/2,41);ctx.textAlign='left';
}

// A coding-agent session in a terminal on the left, the app it is building on the right.
function drawCodingAgent(ctx,w,h) {
  ctx.fillStyle='#14161b';ctx.fillRect(0,0,w,h);
  titleBar(ctx,w,'~/revision-planner — claude');
  const orange='#d97757', text='#e9e4da', dim='#8b919b', green='#7cc28a';
  roundRect(ctx,34,92,846,128,14,null,orange,3);
  // A small asterisk mark stands in for the agent's spinner glyph.
  ctx.strokeStyle=orange;ctx.lineWidth=6;ctx.lineCap='round';
  for(let i=0;i<4;i++){const a=i*Math.PI/4;ctx.beginPath();ctx.moveTo(78-Math.cos(a)*17,140-Math.sin(a)*17);ctx.lineTo(78+Math.cos(a)*17,140+Math.sin(a)*17);ctx.stroke();}
  ctx.font=`600 34px ${mono}`;ctx.fillStyle=text;ctx.fillText('Welcome to Claude Code',112,152);
  ctx.font=`24px ${mono}`;ctx.fillStyle=dim;ctx.fillText('cwd: ~/revision-planner',112,196);
  const dot=(y,color)=>{ctx.fillStyle=color;ctx.beginPath();ctx.arc(52,y-10,9,0,Math.PI*2);ctx.fill();};
  const elbow=y=>{ctx.strokeStyle=dim;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(78,y-30);ctx.lineTo(78,y-10);ctx.lineTo(96,y-10);ctx.stroke();};
  let y=290;
  ctx.font=`30px ${mono}`;ctx.fillStyle=dim;ctx.fillText('>',36,y);ctx.fillStyle=text;ctx.fillText('build a revision planner for',70,y);
  y+=44;ctx.fillText('my college',70,y);
  y+=74;dot(y,text);ctx.fillText("I'll add a week view with",80,y);
  y+=44;ctx.fillText('study blocks.',80,y);
  y+=70;dot(y,green);ctx.fillStyle=text;ctx.fillText('Write',80,y);ctx.fillStyle=dim;ctx.fillText('(src/Planner.tsx)',182,y);
  y+=46;elbow(y);ctx.fillStyle=dim;ctx.font=`26px ${mono}`;ctx.fillText('Wrote 128 lines',108,y);
  y+=62;ctx.font=`30px ${mono}`;dot(y,green);ctx.fillStyle=text;ctx.fillText('Bash',80,y);ctx.fillStyle=dim;ctx.fillText('(npm test)',164,y);
  y+=46;elbow(y);ctx.font=`26px ${mono}`;ctx.fillStyle=green;ctx.fillText('12 tests passed',108,y);
  y+=66;ctx.font=`30px ${mono}`;ctx.fillStyle=orange;ctx.fillText('* Polishing the layout…',36,y);
  roundRect(ctx,34,h-110,846,74,12,null,'#4a505a',3);
  ctx.fillStyle=dim;ctx.fillText('>',58,h-62);ctx.fillStyle=text;ctx.fillRect(92,h-88,16,34);
  // The live preview of the app.
  const px=920,py=92,pw=w-px-34,ph=h-py-36;
  roundRect(ctx,px,py,pw,ph,18,'#f4f0e7');
  ctx.save();ctx.beginPath();ctx.roundRect(px,py,pw,ph,18);ctx.clip();
  ctx.fillStyle='#e2dccf';ctx.fillRect(px,py,pw,58);ctx.restore();
  roundRect(ctx,px+150,py+12,pw-190,34,17,'#f8f5ee');
  ctx.fillStyle='#7c7568';ctx.font=`22px ${sans}`;ctx.fillText('localhost:3000',px+172,py+37);
  ctx.fillStyle='#1d2433';ctx.font=`700 50px ${sans}`;ctx.fillText('Week 3',px+40,py+132);
  ctx.fillStyle='#8a8272';ctx.font=`26px ${sans}`;ctx.fillText('Hilary term · 14 hours planned',px+40,py+172);
  const days=['Mon','Tue','Wed','Thu','Fri'], colW=(pw-80)/5;
  const blocks=[[[0,2,'#d9864f'],[3,4,'#2f3e66']],[[1,3,'#5e9c8f']],[[0,1,'#2f3e66'],[2,5,'#d6b25e']],[[1,2,'#d9864f'],[3,5,'#5e9c8f']],[[0,3,'#2f3e66']]];
  days.forEach((d,i)=>{
    const x=px+40+i*colW;
    ctx.fillStyle='#6f6858';ctx.font=`600 24px ${sans}`;ctx.fillText(d,x+8,py+228);
    ctx.fillStyle='#e8e2d5';ctx.fillRect(x+4,py+246,colW-8,420);
    blocks[i].forEach(([a,b,color])=>roundRect(ctx,x+10,py+256+a*82,colW-20,(b-a)*82-12,10,color));
  });
  ctx.fillStyle='#1d2433';ctx.font=`600 26px ${sans}`;ctx.fillText('68% of the week done',px+40,py+ph-58);
  roundRect(ctx,px+40,py+ph-40,pw-80,16,8,'#e2dccf');roundRect(ctx,px+40,py+ph-40,(pw-80)*.68,16,8,'#d9864f');
}

function chartFrame(ctx,x,y,w,h,title,value) {
  roundRect(ctx,x,y,w,h,12,'#131a24','#232c38',2);
  ctx.fillStyle='#8f9aa8';ctx.font=`24px ${sans}`;ctx.fillText(title,x+22,y+38);
  if(value){ctx.fillStyle='#e6edf3';ctx.font=`600 24px ${mono}`;ctx.textAlign='right';ctx.fillText(value,x+w-22,y+38);ctx.textAlign='left';}
  ctx.strokeStyle='#202935';ctx.lineWidth=1.5;
  for(let i=1;i<4;i++){ctx.beginPath();ctx.moveTo(x+18,y+56+i*(h-74)/4);ctx.lineTo(x+w-18,y+56+i*(h-74)/4);ctx.stroke();}
}
function plotLine(ctx,values,x,y,w,h,color,width,fill) {
  const min=Math.min(...values),max=Math.max(...values),span=max-min||1;
  const px=i=>x+i/(values.length-1)*w, py=v=>y+h-(v-min)/span*h;
  ctx.beginPath();values.forEach((v,i)=>i?ctx.lineTo(px(i),py(v)):ctx.moveTo(px(i),py(v)));
  if(fill){ctx.save();ctx.lineTo(x+w,y+h);ctx.lineTo(x,y+h);ctx.closePath();const g=ctx.createLinearGradient(0,y,0,y+h);g.addColorStop(0,fill);g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fill();ctx.restore();ctx.beginPath();values.forEach((v,i)=>i?ctx.lineTo(px(i),py(v)):ctx.moveTo(px(i),py(v)));}
  ctx.strokeStyle=color;ctx.lineWidth=width;ctx.lineJoin='round';ctx.stroke();
}

// Left monitor: cumulative PnL, drawdown, daily returns and headline statistics.
function drawPnl(ctx,w,h) {
  const rand=seeded(7);
  ctx.fillStyle='#0c1118';ctx.fillRect(0,0,w,h);titleBar(ctx,w,'pnl_dashboard.ipynb');
  const returns=[],pnl=[],dd=[];let total=0,peak=0;
  for(let i=0;i<160;i++){const r=(rand()-.38)*1.6-(rand()<.035?2.4:0);returns.push(r);total+=r;pnl.push(total);peak=Math.max(peak,total);dd.push(total-peak);}
  chartFrame(ctx,28,86,1080,500,'Cumulative PnL','+£12,480');
  plotLine(ctx,pnl,50,160,1036,400,'#4cc38a',5,'rgba(76,195,138,.35)');
  chartFrame(ctx,28,602,1080,160,'Drawdown','−4.8%');
  plotLine(ctx,dd,50,660,1036,86,'#e5534b',3,'rgba(229,83,75,.4)');
  chartFrame(ctx,28,778,1080,158,'Daily returns');
  returns.forEach((r,i)=>{ctx.fillStyle=r>0?'#4cc38a':'#e5534b';const bh=Math.min(Math.abs(r)*22,58);ctx.fillRect(52+i*6.45,r>0?868-bh:868,4.4,bh);});
  const stats=[['Sharpe','2.14','#e6edf3'],['Annual return','18.2%','#4cc38a'],['Max drawdown','−4.8%','#e5534b'],['Win rate','57%','#e6edf3'],['Volatility','8.5%','#e6edf3']];
  stats.forEach(([label,value,color],i)=>{
    const y=86+i*172;roundRect(ctx,1128,y,444,156,12,'#131a24','#232c38',2);
    ctx.fillStyle='#8f9aa8';ctx.font=`24px ${sans}`;ctx.fillText(label,1152,y+44);
    ctx.fillStyle=color;ctx.font=`600 58px ${mono}`;ctx.fillText(value,1150,y+122);
  });
}

// Right monitor: a regression fit, a fitted distribution, a correlation matrix and price candles.
function drawFits(ctx,w,h) {
  const rand=seeded(21);const gauss=()=>{let s=0;for(let i=0;i<6;i++)s+=rand();return s-3;};
  ctx.fillStyle='#0c1118';ctx.fillRect(0,0,w,h);titleBar(ctx,w,'model_fits.ipynb');
  const cw=(w-84)/2,ch=(h-128)/2,cells=[[28,86],[56+cw,86],[28,114+ch],[56+cw,114+ch]];
  // Regression with a confidence band.
  let [x,y]=cells[0];chartFrame(ctx,x,y,cw,ch,'OLS fit','β = 0.82  R² = 0.61');
  const ox=x+40,oy=y+ch-30,sw=cw-80,sh=ch-110;
  ctx.fillStyle='rgba(217,150,90,.18)';ctx.beginPath();ctx.moveTo(ox,oy-sh*.12);ctx.lineTo(ox+sw,oy-sh*.78);ctx.lineTo(ox+sw,oy-sh*.98);ctx.lineTo(ox,oy-sh*.3);ctx.fill();
  for(let i=0;i<70;i++){const t=rand();const v=.2+.68*t+gauss()*.09;ctx.fillStyle='#6ca0dc';ctx.beginPath();ctx.arc(ox+t*sw,oy-Math.min(Math.max(v,0),1)*sh,6,0,Math.PI*2);ctx.fill();}
  ctx.strokeStyle='#e0975a';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(ox,oy-sh*.21);ctx.lineTo(ox+sw,oy-sh*.88);ctx.stroke();
  // Histogram of returns with a fitted normal curve.
  [x,y]=cells[1];chartFrame(ctx,x,y,cw,ch,'Return distribution','σ = 1.03');
  const bins=new Array(24).fill(0);for(let i=0;i<900;i++){const b=Math.floor((gauss()+3)/6*24);if(b>=0&&b<24)bins[b]++;}
  const top=Math.max(...bins),bw=(cw-80)/24,base=y+ch-30,hh=ch-110;
  bins.forEach((n,i)=>{ctx.fillStyle='#3d6e9e';ctx.fillRect(x+40+i*bw+2,base-n/top*hh,bw-4,n/top*hh);});
  ctx.strokeStyle='#e0975a';ctx.lineWidth=5;ctx.beginPath();
  for(let i=0;i<=100;i++){const z=-3+i*.06;const px=x+40+i/100*(cw-80),py=base-Math.exp(-z*z/2)*hh*.98;i?ctx.lineTo(px,py):ctx.moveTo(px,py);}ctx.stroke();
  // Correlation heatmap.
  [x,y]=cells[2];chartFrame(ctx,x,y,cw,ch,'Factor correlation');
  const n=8,size=Math.min((cw-80)/n,(ch-90)/n),hx=x+(cw-size*n)/2,hy=y+60;
  for(let i=0;i<n;i++)for(let j=0;j<n;j++){
    const c=i===j?1:Math.sin((i+1)*(j+2)*1.7)*.8;const a=Math.abs(c);
    ctx.fillStyle=c>0?`rgba(224,151,90,${.15+a*.85})`:`rgba(108,160,220,${.15+a*.85})`;
    ctx.fillRect(hx+i*size+2,hy+j*size+2,size-4,size-4);
  }
  // Price candles with a moving average.
  [x,y]=cells[3];chartFrame(ctx,x,y,cw,ch,'FTSE 100 · 1h','8,214.6');
  let p=50;const candles=[];for(let i=0;i<34;i++){const o=p;p+=gauss()*2.2+.25;const hi=Math.max(o,p)+rand()*2.4,lo=Math.min(o,p)-rand()*2.4;candles.push([o,p,hi,lo]);}
  const all=candles.flat(),mn=Math.min(...all),mx=Math.max(...all),cy=v=>y+ch-30-(v-mn)/(mx-mn)*(ch-110),step=(cw-80)/candles.length;
  candles.forEach(([o,c,hi,lo],i)=>{const cx=x+40+i*step+step/2,col=c>=o?'#4cc38a':'#e5534b';ctx.strokeStyle=col;ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(cx,cy(hi));ctx.lineTo(cx,cy(lo));ctx.stroke();ctx.fillStyle=col;ctx.fillRect(cx-step*.32,Math.min(cy(o),cy(c)),step*.64,Math.max(Math.abs(cy(o)-cy(c)),3));});
  ctx.strokeStyle='#e2b354';ctx.lineWidth=4;ctx.beginPath();
  candles.forEach((_,i)=>{const s=candles.slice(Math.max(0,i-5),i+1);const m=s.reduce((a,c)=>a+c[1],0)/s.length;const px=x+40+i*step+step/2;i?ctx.lineTo(px,cy(m)):ctx.moveTo(px,cy(m));});ctx.stroke();
}

// The original four-layer chip, with the same exploded-to-assembled proportions.
function buildChipPrototype(root, sharedMaterials) {
  // Fine brushed nickel, solder mask and plated contacts, at the original scale.
  const grain = document.createElement('canvas'); grain.width = grain.height = 256;
  const grainPen = grain.getContext('2d');
  const pixels = grainPen.createImageData(256, 256);
  let seed = 173;
  for (let i = 0; i < pixels.data.length; i += 4) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const value = 175 + (seed % 55);
    pixels.data.set([value, value, value, 255], i);
  }
  grainPen.putImageData(pixels, 0, 0);
  const grainMap = new THREE.CanvasTexture(grain);
  grainMap.wrapS = grainMap.wrapT = THREE.RepeatWrapping;
  grainMap.repeat.set(3, 3);
  const brushed = document.createElement('canvas'); brushed.width = brushed.height = 512;
  const brushPen = brushed.getContext('2d');
  brushPen.fillStyle = '#9b9b9b'; brushPen.fillRect(0, 0, 512, 512);
  for (let y = 0; y < 512; y++) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const shade = 120 + seed % 65;
    brushPen.strokeStyle = `rgb(${shade},${shade},${shade})`;
    brushPen.beginPath(); brushPen.moveTo(0, y); brushPen.lineTo(512, y); brushPen.stroke();
  }
  const brushMap = new THREE.CanvasTexture(brushed);
  const materials = {
    ...sharedMaterials,
    cream: new THREE.MeshPhysicalMaterial({ color: 0xcbd0d2, roughness: .23, metalness: .94, bumpMap: brushMap, bumpScale: .0012, envMapIntensity: 1.65, clearcoat: .18 }),
    navy: new THREE.MeshPhysicalMaterial({ color: 0x0c2330, roughness: .32, metalness: .15, bumpMap: grainMap, bumpScale: .0012, clearcoat: .65, clearcoatRoughness: .2, envMapIntensity: 1.25 }),
    orange: new THREE.MeshStandardMaterial({ color: 0xba7549, roughness: .22, metalness: .95, envMapIntensity: 1.45 }),
    metal: new THREE.MeshStandardMaterial({ color: 0xd9b769, roughness: .19, metalness: 1, envMapIntensity: 1.7 }),
    substrate: new THREE.MeshStandardMaterial({ color: 0x12191d, roughness: .48, metalness: .08 }),
    solder: new THREE.MeshStandardMaterial({ color: 0xc6cbd1, roughness: .22, metalness: .95, envMapIntensity: 1.4 }),
    ceramic: new THREE.MeshStandardMaterial({ color: 0x6c5d48, roughness: .5, metalness: .05 })
  };
  root.userData.pulses = [];
  const layers = [];
  function layer(y, lift) {
    const group = new THREE.Group(); group.position.y = y; root.add(group);
    layers.push({ group, y, lift }); return group;
  }
  function mesh(parent, geometry, material, x = 0, y = 0, z = 0) {
    const part = new THREE.Mesh(geometry, typeof material === 'string' ? materials[material] : material);
    part.position.set(x, y, z); part.castShadow = true; part.receiveShadow = true;
    parent.add(part); return part;
  }
  const box = (parent, w, h, d, tone, x, y, z, radius = .08) => mesh(parent, new RoundedBoxGeometry(w, h, d, 5, radius), tone, x, y, z);
  function bolts(parent, y) {
    for (const x of [-1.38, 1.38]) for (const z of [-1.38, 1.38]) {
      mesh(parent, new THREE.CylinderGeometry(.079, .079, .008, 32), 'substrate', x, y -.009, z);
      mesh(parent, new THREE.CylinderGeometry(.059, .066, .028, 32), 'solder', x, y, z);
      box(parent, .062, .003, .011, 'substrate', x, y + .015, z, .002);
      box(parent, .011, .003, .062, 'substrate', x, y + .015, z, .002);
    }
  }
  function trace(parent, points) {
    const curve = new THREE.CurvePath();
    points.slice(1).forEach((p, i) => curve.add(new THREE.LineCurve3(new THREE.Vector3(...points[i]), new THREE.Vector3(...p))));
    mesh(parent, new THREE.TubeGeometry(curve, 32, .006, 8, false), 'metal');
    const group = new THREE.Group(); parent.add(group);
    const dots = Array.from({ length: 6 }, (_, i) => {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(i ? .017 : .027, 12, 8), new THREE.MeshBasicMaterial({ color: i ? 0xe5b65f : 0xfff1c7, transparent: true, depthWrite: false, toneMapped: false }));
      group.add(dot); return dot;
    });
    root.userData.pulses.push({ group, dots, curve });
  }
  const base = layer(.32, -.65);
  box(base, 3.38, .11, 3.38, 'cream', 0, 0, 0, .045);
  box(base, 3.27, .022, 3.27, 'substrate', 0, -.06, 0, .035);
  box(base, 2.62, .018, 2.62, 'metal', 0, .064, 0, .025);
  box(base, 2.48, .019, 2.48, 'cream', 0, .075, 0, .02);
  bolts(base, .09);

  const board = layer(.5, 0);
  box(board, 3.3, .095, 3.3, 'navy', 0, 0, 0, .035);
  // Visible laminate edge and small plated through-holes make the PCB tangible.
  box(board, 3.29, .012, 3.29, 'orange', 0, -.024, 0, .03);
  box(board, 3.3, .018, 3.3, 'navy', 0, -.038, 0, .03);
  for (let i = 0; i < 12; i++) {
    const p = -1.2 + i * .218;
    for (const sign of [-1, 1]) {
      for (const [x,z] of [[p,sign*1.49],[sign*1.49,p]]) {
        const via = mesh(board, new THREE.RingGeometry(.012, .024, 12), 'metal', x, .049, z);
        via.rotation.x = -Math.PI / 2; via.castShadow = false;
      }
    }
  }
  // Decoupling capacitors and their soldered terminations surround the package.
  for (const sign of [-1, 1]) for (let i = 0; i < 5; i++) {
    const p = -.48 + i * .24;
    for (const [x,z,rotate] of [[p,sign*.94,false],[sign*.94,p,true]]) {
      const component = new THREE.Group(); component.position.set(x,.065,z);
      component.rotation.y = rotate ? Math.PI/2 : 0; board.add(component);
      box(component,.11,.045,.055,'ceramic',0,0,0,.006);
      for (const end of [-1,1]) box(component,.026,.048,.06,'solder',end*.05,0,0,.005);
    }
  }
  const silk = document.createElement('canvas'); silk.width = silk.height = 1024;
  const silkPen = silk.getContext('2d');
  silkPen.strokeStyle = '#b7c6c2'; silkPen.lineWidth = 2; silkPen.globalAlpha = .5;
  silkPen.strokeRect(283,283,458,458);
  silkPen.font = '18px monospace'; silkPen.fillStyle = '#d1dbd6';
  silkPen.fillText('OxAIMS / MAKER BOARD',100,860);
  silkPen.font = '13px monospace'; silkPen.fillText('REV 01',100,884);
  for(let i=0;i<5;i++) { silkPen.fillText(`C${i+1}`,360+i*74,242); silkPen.fillText(`R${i+1}`,360+i*74,797); }
  silkPen.beginPath(); silkPen.moveTo(280,280);silkPen.lineTo(305,280);silkPen.lineTo(280,305);silkPen.closePath();silkPen.fill();
  const silkMap = new THREE.CanvasTexture(silk); silkMap.colorSpace = THREE.SRGBColorSpace;
  const print = mesh(board,new THREE.PlaneGeometry(3.3,3.3),new THREE.MeshBasicMaterial({map:silkMap,transparent:true,depthWrite:false}),0,.05,0);
  print.rotation.x = -Math.PI/2; print.castShadow = false;
  for (const sign of [-1, 1]) {
    trace(board, [[-1.6, .056, sign * .66], [-1.05, .056, sign * .66], [-.72, .056, sign * .3], [-.48, .056, sign * .3]]);
    trace(board, [[1.6, .056, sign * .66], [1.05, .056, sign * .66], [.72, .056, sign * .3], [.48, .056, sign * .3]]);
    trace(board, [[sign * .74, .056, -1.61], [sign * .74, .056, -1.08], [sign * .32, .056, -.65]]);
    trace(board, [[sign * .74, .056, 1.61], [sign * .74, .056, 1.08], [sign * .32, .056, .65]]);
    mesh(board, new THREE.CylinderGeometry(.035, .035, .012, 20), 'metal', sign * 1.05, .065, .66);
  }
  bolts(board, .065);

  const chip = layer(.65, .45);
  box(chip, 1.25, .06, 1.25, 'substrate', 0, -.005, 0, .022);
  box(chip, 1.16, .028, 1.16, 'orange', 0, .036, 0, .025);
  box(chip, 1.06, .105, 1.06, 'cream', 0, .095, 0, .037);
  for (let i = 0; i < 10; i++) {
    const p = -.48 + i * .107;
    for (const sign of [-1, 1]) {
      box(chip, .032, .022, .18, 'metal', p, -.016, sign * .65, .005);
      box(chip, .18, .022, .032, 'metal', sign * .65, -.016, p, .005);
      box(chip, .035, .037, .042, 'solder', p, -.027, sign * .73, .005);
      box(chip, .042, .037, .035, 'solder', sign * .73, -.027, p, .005);
    }
  }
  const lettering = document.createElement('canvas'); lettering.width = lettering.height = 512;
  const pen = lettering.getContext('2d');
  const typeTexture = new THREE.CanvasTexture(lettering); typeTexture.colorSpace = THREE.SRGBColorSpace;
  function writeChipLabel() {
    pen.clearRect(0, 0, 512, 512);
    pen.fillStyle = '#424c50'; pen.textAlign = 'left'; pen.textBaseline = 'middle';
    pen.font = '600 76px sans-serif'; pen.fillText('OxAIMS', 63, 210);
    pen.font = '24px monospace'; pen.fillText('MAKER SERIES', 66, 280);
    pen.font = '19px monospace'; pen.fillText('OXA-01   /   REV A', 66, 325);
    pen.beginPath(); pen.arc(70,80,9,0,Math.PI*2); pen.fill();
    // Laser-style matrix marking, kept quiet at normal viewing size.
    for(let y=0;y<8;y++)for(let x=0;x<8;x++)if((x*y+x+y)%3!==0)pen.fillRect(345+x*7,354+y*7,5,5);
    typeTexture.needsUpdate = true;
    document.querySelector('.maker-model')?.dispatchEvent(new Event('maker-model-change'));
  }
  writeChipLabel();
  const type = mesh(chip, new THREE.PlaneGeometry(.98, .98), new THREE.MeshStandardMaterial({ map: typeTexture, transparent: true, depthWrite: false, roughness:.5, metalness:.55, polygonOffset:true, polygonOffsetFactor:-1 }), 0, .148, 0);
  type.rotation.x = -Math.PI / 2; type.castShadow = false;

  const lid = layer(.85, 1.15);
  const lidMaterial = new THREE.MeshPhysicalMaterial({color:0xb6cbd8,transparent:true,opacity:.12,roughness:.08,metalness:.3,clearcoat:1,clearcoatRoughness:.07,envMapIntensity:1.8,depthWrite:false,side:THREE.FrontSide});
  const cover = box(lid, 3.32, .035, 3.32, lidMaterial, 0, 0, 0, .035); cover.castShadow = false;
  for (const p of [-1.49, 1.49]) {
    box(lid, 2.96, .025, .025, 'metal', 0, .041, p, .01);
    box(lid, .025, .025, 2.96, 'metal', p, .041, 0, .01);
  }
  bolts(lid, .055);
  return layers;
}
