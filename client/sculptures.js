import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// One GPU context serves all cards. The hero shows only the current WebGL chip.
const elements = [...document.querySelectorAll('[data-sculpture], [data-chip-studio]')];
const motion = matchMedia('(prefers-reduced-motion: reduce)');
const pulseTravelPerMs = .00054;
const pulseCycle = 1.3;
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
      const size = record.kind === 'chip' ? Math.max(2.55, 2.75 / aspect) : record.projectLayers ? 2.5 : record.kind === 'bridge' ? 2.2 : 1.95;
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
      } else {
        object.rotation.y = record.rotation + Math.sin(phase) * .09 + (parseFloat(el.style.getPropertyValue('--look-x')) || 0) * .013;
        object.rotation.x = (parseFloat(el.style.getPropertyValue('--look-y')) || 0) * .008;
      }
      if (record.projectLayers) {
        const progress = motion.matches ? 1 : THREE.MathUtils.clamp((innerHeight * .92 - rect.top) / Math.min(innerHeight * .42, 320), 0, 1);
        const eased = progress * progress * (3 - 2 * progress);
        // Leave room above the screen while its layers are still separated.
        camera.top += (1 - eased) * .45;
        camera.lookAt(0, .95 + (1 - eased) * .2, 0);
        camera.updateProjectionMatrix();
        record.projectLayers.forEach(layer => { layer.group.position.y = layer.y + (1 - eased) * layer.lift; });
        el.dataset.assemblyProgress = progress.toFixed(3);
      }
      object.position.y = motion.matches ? 0 : Math.sin(phase * 1.3) * .045;
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
  camera.lookAt(0, kind === 'chip' ? .8 : projectBranch ? .95 : .9, 0);
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

  let projectLayers = null;
  let chipLayers = null;
  if (kind === 'chip') {
    chipLayers = buildChipPrototype(object, materials);
  } else if (projectBranch) {
    projectLayers = buildBranchPrototype(object, materials, kind)[0].layers;
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
  return { el, kind, scene, camera, object, light, phase: index * 1.9, rotation: -.12, visible: false, projectLayers, chipLayers };
}

function buildBranchPrototype(root, sharedMaterials, branch) {
  const materials = {
    cream: new THREE.MeshStandardMaterial({color:0xdad3c5,roughness:.54,metalness:.45}),
    navy: new THREE.MeshStandardMaterial({color:0x17232d,roughness:.62,metalness:.15}),
    black: new THREE.MeshStandardMaterial({color:0x10151b,roughness:.7}),
    copper: new THREE.MeshStandardMaterial({color:0xb77f52,roughness:.4,metalness:.8}),
    brass: new THREE.MeshStandardMaterial({color:0xbda570,roughness:.48,metalness:.75}),
    silver: new THREE.MeshStandardMaterial({color:0xb6bdc3,roughness:.38,metalness:.8}),
    paper: new THREE.MeshStandardMaterial({color:0xece4d2,roughness:.96}),
    ink: new THREE.MeshStandardMaterial({color:0x58636b,roughness:.9}),
    green: new THREE.MeshStandardMaterial({color:0x24413d,roughness:.78,metalness:.12}),
  };
  const group = new THREE.Group(); root.add(group);
  const layers = [];
  function layer(y,lift) { const part=new THREE.Group();part.position.y=y;group.add(part);layers.push({group:part,y,lift});return part; }
  function mesh(parent,geometry,tone,x=0,y=0,z=0) {const m=new THREE.Mesh(geometry,typeof tone==='string'?materials[tone]:tone);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
  const box=(p,w,h,d,t,x=0,y=0,z=0,r=.03)=>mesh(p,new RoundedBoxGeometry(w,h,d,6,Math.min(r,w/2,h/2,d/2)),t,x,y,z);
  const cylinder=(p,r,h,t,x,y,z)=>mesh(p,new THREE.CylinderGeometry(r,r,h,40),t,x,y,z);
  function line(p,points,t='copper',radius=.009) {return mesh(p,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(v=>new THREE.Vector3(...v)),false,'centripetal'),40,radius,8,false),t);}
  function screenTexture(research=false) {
    const c=document.createElement('canvas');c.width=1200;c.height=760;const ctx=c.getContext('2d');
    ctx.fillStyle='#101c28';ctx.fillRect(0,0,1200,760);
    ctx.fillStyle='#1d2a37';ctx.fillRect(0,0,1200,58);
    ['#b9825c','#c6b17d','#6e8b80'].forEach((color,i)=>{ctx.fillStyle=color;ctx.beginPath();ctx.arc(30+i*25,29,7,0,Math.PI*2);ctx.fill();});
    ctx.font='22px sans-serif';ctx.fillStyle='#cbd1d4';ctx.fillText(research?'Research notebook':'Project workspace',145,38);
    ctx.fillStyle='#182531';ctx.fillRect(0,58,210,702);
    ctx.fillStyle='#a5adb5';ctx.font='18px sans-serif';['EXPLORER','notebooks','  analysis.py','  observations','  results','README.md'].forEach((t,i)=>ctx.fillText(t,22,108+i*46));
    if(research) {
      ctx.fillStyle='#e5dfd1';ctx.font='32px sans-serif';ctx.fillText('Exploring the data',255,119);
      ctx.fillStyle='#758590';ctx.font='19px sans-serif';ctx.fillText('Observations / model / comparison',255,154);
      for(let i=0;i<5;i++){ctx.strokeStyle='#2c3a46';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(270,213+i*72);ctx.lineTo(1130,213+i*72);ctx.stroke();}
      for(let series=0;series<2;series++){ctx.strokeStyle=series?'#8ca9ac':'#c49560';ctx.lineWidth=series?3:5;ctx.beginPath();for(let i=0;i<58;i++){const x=280+i*14.5,y=465-i*3.4+Math.sin(i*.72+series)*18+Math.cos(i*.27)*22+series*42;i?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.stroke();}
      for(let i=0;i<3;i++){ctx.fillStyle='#1c2b37';ctx.fillRect(260+i*295,580,270,122);ctx.fillStyle='#85959f';ctx.font='17px sans-serif';ctx.fillText(['SAMPLE','METHOD','OUTPUT'][i],280+i*295,610);ctx.fillStyle='#dfd8c9';ctx.font='23px sans-serif';ctx.fillText(['Time series','Compare & test','Notebook'][i],280+i*295,659);}
    } else {
      const code=['const project = {','  idea: "something useful",','  tools: ["AI", "curiosity"],','  status: "work in progress"','};','','function makeSomething() {','  build(project);','  test();','  tryAgain();','}'];
      ctx.font='22px monospace';code.forEach((t,i)=>{ctx.fillStyle='#50616e';ctx.fillText(String(i+1),234,121+i*43);ctx.fillStyle=i%3===0?'#c59a70':i%3===1?'#9bb5b4':'#d0d2cb';ctx.fillText(t,278,121+i*43);});
      ctx.fillStyle='#e5dfd1';ctx.fillRect(795,90,370,608);ctx.fillStyle='#183044';ctx.fillRect(813,112,334,39);
      ctx.fillStyle='#b98a57';ctx.beginPath();ctx.arc(980,326,89,0,Math.PI*2);ctx.fill();ctx.strokeStyle='#263c4c';ctx.lineWidth=8;ctx.beginPath();ctx.ellipse(980,326,123,44,-.55,0,Math.PI*2);ctx.stroke();
      ctx.fillStyle='#253748';ctx.font='28px sans-serif';ctx.fillText('A small idea.',843,502);ctx.fillStyle='#a19787';ctx.fillRect(844,530,242,6);ctx.fillRect(844,551,190,6);ctx.fillStyle='#be945e';ctx.fillRect(844,597,146,42);
    }
    const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;tex.anisotropy=4;return tex;
  }
  function display(parent,w,h,x,y,z,research) {
    box(parent,w,h,.085,'cream',x,y,z,.04);
    box(parent,w-.07,h-.07,.018,'black',x,y,z+.05,.025);
    const face=mesh(parent,new THREE.PlaneGeometry(w-.18,h-.18),new THREE.MeshBasicMaterial({map:screenTexture(research),toneMapped:false}),x,y,z+.061);face.castShadow=false;
    const cam=mesh(parent,new THREE.SphereGeometry(.015,12,8),'black',x,y+h/2-.04,z+.059);cam.castShadow=false;
  }
  // A wide, diffused contact shadow grounds the objects without a toy display pedestal.
  const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=128;
  const sc=shadowCanvas.getContext('2d');const grad=sc.createRadialGradient(64,64,8,64,64,64);grad.addColorStop(0,'rgba(0,0,0,.35)');grad.addColorStop(.55,'rgba(0,0,0,.15)');grad.addColorStop(1,'rgba(0,0,0,0)');sc.fillStyle=grad;sc.fillRect(0,0,128,128);
  const contact=mesh(group,new THREE.PlaneGeometry(5.8,4.1),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(shadowCanvas),transparent:true,depthWrite:false}),0,-.095,.1);contact.rotation.x=-Math.PI/2;contact.castShadow=false;contact.receiveShadow=false;
  if(branch==='apps') {
    const body=layer(.04,0);
    box(body,3.55,.13,2.3,'cream',0,0,.12,.06);
    box(body,3.45,.025,2.2,'silver',0,-.068,.12,.012);
    // USB-C ports, a front opening and a continuous hinge.
    for(const z of [-.48,-.22])box(body,.012,.034,.16,'black',-1.776,0,z,.012);
    box(body,.55,.025,.035,'ink',0,.065,1.25,.012);
    const hinge=cylinder(body,.065,3.05,'silver',0,.09,-.9);hinge.rotation.z=Math.PI/2;
    const deck=layer(.114,.3);
    box(deck,2.96,.018,1.15,'black',0,0,-.27,.04);
    for(let row=0;row<5;row++)for(let col=0;col<12;col++) {
      const x=-1.35+col*.245,z=-.72+row*.225;
      box(deck,.205,.022,.17,'navy',x,.018,z,.018);
      // Fine key legends, with the same quiet aluminium tone as the shell.
      if(row<4)box(deck,.025,.002,.009,'silver',x-.055,.031,z-.04,.003);
    }
    box(deck,1.08,.024,.17,'navy',0,.018,.18,.018);
    box(deck,1.1,.009,.54,'silver',0,.001,.77,.035);
    box(deck,1.07,.01,.51,'cream',0,.004,.77,.03);
    for(const side of [-1,1])for(let i=0;i<20;i++)box(deck,.09,.003,.012,'ink',side*1.58,.004,-.72+i*.055,.004);
    const lid=layer(.14,.7);
    const pivot=new THREE.Group();pivot.position.z=-.92;pivot.rotation.x=-.19;lid.add(pivot);
    display(pivot,3.55,2.25,0,1.13,0,false);
  } else if(branch==='physical') {
    const enclosure=layer(.1,0);
    box(enclosure,3.25,.2,2.35,'cream',0,0,0,.08);
    box(enclosure,2.99,.022,2.09,'black',0,.111,0,.05);
    for(const x of [-1.38,1.38])for(const z of [-.92,.92])cylinder(enclosure,.06,.21,'brass',x,.18,z);
    const pcb=layer(.28,.48);
    box(pcb,2.94,.045,2.04,'green',0,0,0,.04);
    for(const side of [-1,1])for(let i=0;i<8;i++) {
      const x=-.95+i*.27;
      line(pcb,[[x,.028,side*.92],[x,.028,side*.63],[x*.45,.028,side*.44]],'brass',.007);
      box(pcb,.055,.025,.1,'silver',x,.035,side*.87,.008);
    }
    box(pcb,.92,.12,.85,'black',-.23,.085,.05,.025);
    for(let i=0;i<10;i++)for(const side of [-1,1]){
      box(pcb,.038,.026,.15,'silver',-.61+i*.085,.047,.05+side*.49,.005);
      box(pcb,.15,.026,.035,'silver',-.23+side*.52,.047,-.32+i*.08,.005);
    }
    // A real connector profile and small passive components give the board scale.
    box(pcb,.42,.21,.32,'silver',-1.2,.13,.55,.05);box(pcb,.33,.13,.013,'black',-1.2,.13,.716,.04);
    for(let i=0;i<5;i++){box(pcb,.13,.07,.065,'paper',.64+i*.13,.061,-.55,.012);box(pcb,.03,.075,.07,'silver',.59+i*.13,.063,-.55,.005);}
    for(let i=0;i<3;i++){cylinder(pcb,.095,.2,'black',.72+i*.24,.12,.61);cylinder(pcb,.08,.008,'silver',.72+i*.24,.223,.61);}
    const sensor=layer(.5,.78);
    box(sensor,.77,.045,.74,'navy',.87,0,-.18,.025);
    cylinder(sensor,.25,.13,'silver',.87,.085,-.18);cylinder(sensor,.18,.012,'black',.87,.157,-.18);
    for(let i=0;i<9;i++)for(let j=0;j<9;j++){const x=(i-4)*.035,z=(j-4)*.035;if(x*x+z*z<.025)cylinder(sensor,.009,.004,'ink',.87+x,.165,-.18+z);}
    // A small precision driver makes this an electronics workbench, not a sealed display block.
    const tools=layer(.08,.45);tools.position.x=1.73;tools.rotation.y=-.22;
    const grip=cylinder(tools,.105,.68,'navy',0,.045,.54);grip.rotation.x=Math.PI/2;
    for(let i=0;i<5;i++) {const ring=mesh(tools,new THREE.TorusGeometry(.106,.009,8,32),'ink',0,.045,.31+i*.105);}
    const collar=cylinder(tools,.085,.12,'brass',0,.045,.16);collar.rotation.x=Math.PI/2;
    const shaft=cylinder(tools,.025,.8,'silver',0,.045,-.28);shaft.rotation.x=Math.PI/2;
    box(tools,.045,.018,.13,'silver',0,.045,-.74,.004);
  } else {
    const stand=layer(.015,0);
    box(stand,1.52,.085,1.03,'cream',.1,0,-.45,.08);
    const neck=box(stand,.3,.86,.18,'silver',.1,.46,-.77,.04);neck.rotation.x=-.12;
    const monitor=layer(1.65,.7);
    display(monitor,3.55,2.24,0,0,-.76,true);
    box(monitor,3.4,.035,.03,'silver',0,-1.08,-.7,.01);
    const notebook=layer(.06,.3);notebook.rotation.y=-.18;
    box(notebook,1.67,.12,1.15,'navy',-.6,0,.85,.035);
    box(notebook,1.59,.084,1.08,'paper',-.6,.02,.85,.02);
    for(let i=0;i<5;i++)box(notebook,1.52,.002,.009,'ink',-.6,-.01+i*.012,1.393,.001);
    for(let i=0;i<7;i++)box(notebook,1.12,.002,.007,'ink',-.61,.065,.48+i*.115,.001);
    const pen=cylinder(notebook,.032,1.4,'copper',.58,.1,.85);pen.rotation.x=Math.PI/2;pen.rotation.z=-.13;
    const tip=mesh(notebook,new THREE.ConeGeometry(.032,.16,24),'silver',.58,.1,1.63);tip.rotation.x=Math.PI/2;
    const mouse=box(stand,.47,.18,.71,'cream',1.38,.08,.5,.085);
    box(stand,.013,.008,.24,'ink',1.38,.175,.36,.004);
    cylinder(stand,.025,.065,'black',1.38,.18,.43).rotation.x=Math.PI/2;
  }
  if (branch === 'physical') group.scale.setScalar(1.15);
  return [{branch,group,layers}];
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
