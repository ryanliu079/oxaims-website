import { writeFile } from 'node:fs/promises';
// Seeded, uneven tears keep the silhouettes stable and avoid a repeating zigzag.
for (const [name,w,h,seed] of [['card',600,280,81],['note',400,140,157]]) {
 let state=seed;
 const random=()=>{state=(Math.imul(state,1664525)+1013904223)>>>0;return state/4294967296;};
 const points=[];
 const top=[],bottom=[];
 let drift=0;
 for(let x=5;x<w-4;x+=3){
  drift=Math.max(-4,Math.min(4,drift+(random()-.5)*3));
  top.push([x,9+drift+(random()-.5)*4]);
 }
 drift=0;
 for(let x=w-5;x>4;x-=3){
  drift=Math.max(-4,Math.min(4,drift+(random()-.5)*3));
  bottom.push([x,h-9+drift+(random()-.5)*4]);
 }
 points.push(...top);
 for(let y=16;y<h-16;y+=4)points.push([w-5+(random()-.5)*4,y]);
 points.push(...bottom);
 for(let y=h-16;y>15;y-=4)points.push([5+(random()-.5)*4,y]);
 const path=p=>p.map(([x,y],i)=>`${i?'L':'M'}${x.toFixed(2)} ${y.toFixed(2)}`).join(' ')+'Z';
 const outer=path(points);
 const inner=path(points.map(([x,y])=>[w/2+(x-w/2)*(1-7/w),h/2+(y-h/2)*(1-6/h)]));
 const defs='<defs><filter id="fibres" x="-3%" y="-5%" width="106%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".14 .32" numOctaves="3" seed="12" result="grain"/><feDisplacementMap in="SourceGraphic" in2="grain" scale="2.2" xChannelSelector="R" yChannelSelector="G"/></filter></defs>';
 const svg=body=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">${defs}${body}</svg>`;
 await writeFile(`public/assets/torn-${name}-mask.svg`,svg(`<path fill="white" filter="url(#fibres)" d="${outer}"/>`));
 await writeFile(`public/assets/torn-${name}-fibres.svg`,svg(`<path fill="#ede2c6" filter="url(#fibres)" fill-rule="evenodd" d="${outer} ${inner}"/><path d="${outer}" stroke="#fff8e4" stroke-width=".8" stroke-opacity=".55" fill="none" filter="url(#fibres)"/>`));
}
