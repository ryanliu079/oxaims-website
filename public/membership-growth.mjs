// A target-led planning scenario. Event dates and gains are assumptions, not observations.
export const START_DATE = '2026-10-29';
export const END_DATE = '2027-06-30';
export const START_MEMBERS = 35;
export const TARGET_MEMBERS = 1000;
export const ORGANIC_GAIN = 285;
const DAY_MS = 86400000;
const start = Date.parse(START_DATE + 'T00:00:00Z');
export const LAST_DAY = Math.round((Date.parse(END_DATE + 'T00:00:00Z') - start) / DAY_MS);
export const dayOf = date => Math.round((Date.parse(date + 'T00:00:00Z') - start) / DAY_MS);
export const EVENTS = [
  { date:'2026-11-12', title:'Society promotion', gain:120, detail:'Posts and mailing-list mentions from other Oxford societies help people discover OxAIMS.' },
  { date:'2026-12-01', title:'Launch social', gain:60, detail:'Our first social gives people a chance to meet the society, bring friends and hear what’s coming up.' },
  { date:'2027-01-25', title:'Event with our sponsor', gain:180, detail:'An event with our sponsor brings students together and introduces more people to the society.' },
  { date:'2027-03-06', title:'Software + hardware hackathon', gain:150, detail:'The joint hackathon with Cambridge’s AI for Science Society gives teams a chance to build something together.' },
  { date:'2027-04-20', title:'AI workshops', gain:70, detail:'Starting in 2027: practical sessions on AI tools, GitHub and testing your work. The date shown here is illustrative.' },
  { date:'2027-06-15', title:'Project showcase', gain:100, detail:'The year-end showcase brings projects, guests and new members together.' }
].map(event => ({...event,day:dayOf(event.date)}));
export function projectionAt(value) {
  const day = Math.min(LAST_DAY, Math.max(0, Math.round(Number(value) || 0)));
  const organic = Math.round(ORGANIC_GAIN * day / LAST_DAY);
  const reached = EVENTS.filter(event => event.day <= day);
  const eventGain = reached.reduce((sum,event)=>sum+event.gain,0);
  return { day, members:START_MEMBERS+organic+eventGain, organic, eventGain, latest:reached.at(-1) || null, date:new Date(start+day*DAY_MS) };
}
const shortDate = date => new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',timeZone:'UTC'}).format(date);
const longDate = date => new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(date);

if (typeof document !== 'undefined') document.querySelectorAll('[data-membership-growth]').forEach(root => {
  const slider=root.querySelector('[data-growth-range]');
  const svg=root.querySelector('[data-growth-chart]');
  const future=root.querySelector('[data-growth-future]');
  const select=selector=>root.querySelector(selector);
  const X0=64, X1=866, Y0=48, Y1=366, MAX=1100;
  const x=day=>X0+day/LAST_DAY*(X1-X0);
  const y=members=>Y1-members/MAX*(Y1-Y0);
  const point=(day,members)=>`${x(day).toFixed(2)},${y(members).toFixed(2)}`;
  // Duplicate the x-coordinate at an event to show a real step, not a vague smooth curve.
  const points=[point(0,START_MEMBERS)];
  for(let day=1;day<=LAST_DAY;day++) {
    const state=projectionAt(day), event=EVENTS.find(event=>event.day===day);
    if(event) points.push(point(day,state.members-event.gain));
    points.push(point(day,state.members));
  }
  const path='M'+points.join(' L');
  select('[data-growth-line]').setAttribute('d',path);
  select('[data-growth-plan]').setAttribute('d',path);
  select('[data-growth-area]').setAttribute('d',`${path} L${X1},${Y1} L${X0},${Y1} Z`);
  slider.max=String(LAST_DAY);
  const markers=select('[data-growth-markers]');
  const ns='http://www.w3.org/2000/svg';
  EVENTS.forEach((event,index)=>{
    const circle=document.createElementNS(ns,'circle');
    circle.setAttribute('cx',x(event.day));circle.setAttribute('cy',y(projectionAt(event.day).members));circle.setAttribute('r','5');
    circle.setAttribute('data-growth-marker',String(index)); markers.append(circle);
  });
  const eventButtons=[...root.querySelectorAll('[data-growth-event]')];
  function update(value) {
    const state=projectionAt(value), cursor=x(state.day), height=y(state.members);
    slider.value=String(state.day);
    slider.setAttribute('aria-valuetext',`${longDate(state.date)}: ${state.members.toLocaleString('en-GB')} ${state.day?'projected members':'starting members'}`);
    select('[data-growth-count]').textContent=state.members.toLocaleString('en-GB');
    select('[data-growth-date]').textContent=longDate(state.date);
    select('[data-growth-count-label]').textContent=state.day?'Projected members':'Starting members';
    select('[data-growth-organic]').textContent='+'+state.organic;
    select('[data-growth-event-gain]').textContent='+'+state.eventGain;
    select('[data-growth-percent]').textContent=Math.round(state.members/TARGET_MEMBERS*100)+'% of the target';
    select('[data-growth-progress]').style.width=(state.members/TARGET_MEMBERS*100)+'%';
    select('[data-growth-clip]').setAttribute('width',Math.max(1,cursor-X0));
    select('[data-growth-shade]').setAttribute('x',cursor);
    select('[data-growth-shade]').setAttribute('width',X1-cursor);
    const line=select('[data-growth-cursor]');line.setAttribute('x1',cursor);line.setAttribute('x2',cursor);
    const dot=select('[data-growth-dot]');dot.setAttribute('cx',cursor);dot.setAttribute('cy',height);
    const dateLabel=select('[data-growth-cursor-date]');dateLabel.setAttribute('x',Math.max(112,Math.min(815,cursor)));dateLabel.textContent=shortDate(state.date);
    const latest=state.latest;
    select('[data-growth-event-title]').textContent=latest?latest.title:'Our starting point';
    select('[data-growth-event-copy]').textContent=latest?latest.detail:'35 members, with room for more. Drag across the chart to explore the plan.';
    select('[data-growth-event-label]').textContent=latest?`Most recent assumed boost · +${latest.gain} members`:'29 October 2026';
    eventButtons.forEach((button,i)=>button.setAttribute('aria-pressed',String(EVENTS[i]===latest)));
    [...markers.children].forEach((marker,i)=>{marker.style.opacity=EVENTS[i].day<=state.day?'1':future.checked?'.35':'0';});
    select('[data-growth-plan]').style.opacity=future.checked?'.32':'0';
    root.dataset.selectedDay=String(state.day);
  }
  slider.addEventListener('input',()=>update(slider.value));
  future.addEventListener('change',()=>update(slider.value));
  eventButtons.forEach((button,index)=>button.addEventListener('click',()=>update(EVENTS[index].day)));
  let dragging=null;
  const seek=event=>{
    const rect=svg.getBoundingClientRect();
    const local=(event.clientX-rect.left)/rect.width*900;
    update((local-X0)/(X1-X0)*LAST_DAY);
  };
  svg.addEventListener('pointerdown',event=>{
    if(event.button!==0)return;
    dragging=event.pointerId;svg.setPointerCapture(dragging);seek(event);
  });
  svg.addEventListener('pointermove',event=>{if(dragging===event.pointerId)seek(event);});
  const finish=()=>{dragging=null;};
  svg.addEventListener('pointerup',finish);svg.addEventListener('pointercancel',finish);svg.addEventListener('lostpointercapture',finish);
  root.querySelector('[data-growth-controls]').hidden=false;
  select('.growth-events').hidden=false;
  update(0);
});
