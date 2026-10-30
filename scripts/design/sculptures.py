"""Emit original CSS3D sculptures into the existing presentation cards."""
from pathlib import Path
import re

def block(x,y,z,w,d,h,tone='cream'):
    return f'<span class="sculpture-block tone-{tone}" style="--x:{x}px;--y:{y}px;--z:{z}px;--w:{w}px;--d:{d}px;--h:{h}px"><i class="block-top"></i><i class="block-front"></i><i class="block-left"></i></span>'

def scene(kind):
    b=lambda *a: block(*a)
    parts=[b(0,0,0,220,150,10,'stone')]
    if kind=='apps':
        for row in range(3):
            for col in range(3):
                heights=[[24,24,58],[24,70,58],[38,38,20]]
                tone='orange' if (row,col)==(1,1) else ('navy' if (row+col)%3==0 else 'cream')
                parts.append(b(22+col*59,15+row*40,10,53,34,heights[row][col],tone))
    elif kind in ('physical','tools'):
        parts += [b(25,18,21,170,114,9,'navy'),b(40,28,61,140,94,8,'cream'),b(82,52,91,57,47,38,'orange')]
    elif kind=='research':
        for i,h in enumerate([24,42,34,70,95]):
            parts.append(b(19+i*38,42,10,27,66,h,'orange' if i==4 else ('navy' if i%2 else 'cream')))
    elif kind=='workshops':
        parts += [b(24,19,10,172,112,14,'navy'),b(36,27,38,148,96,11,'cream')]
        for x,y,tone in [(48,37,'cream'),(111,37,'orange'),(48,77,'navy'),(111,77,'cream')]:
            parts.append(b(x,y,68,53,31,17,tone))
    elif kind in ('community','people'):
        parts += [b(27,21,10,44,40,52,'cream'),b(150,21,10,44,40,52,'cream'),b(27,94,10,44,40,52,'navy'),b(150,94,10,44,40,52,'orange'),b(56,49,45,108,56,10,'cream')]
    elif kind=='hackathon':
        for i in range(4):
            parts.append(b(20+i*45,30+i*8,10,38,72-i*5,22+i*23,'orange' if i==3 else ('cream' if i%2==0 else 'navy')))
    elif kind in ('showcase','ideas','bridge'):
        parts += [b(33,38,10,31,68,100,'cream'),b(156,38,10,31,68,100,'cream'),b(33,38,110,154,68,23,'cream'),b(88,52,10,44,44,43,'orange')]
    return f'<div class="sculpture-scene sculpture-{kind}" data-sculpture aria-hidden="true"><span class="sculpture-ground"></span><div class="sculpture-view"><div class="sculpture-stage">'+''.join(parts)+'</div></div><span class="sculpture-rule"></span></div>'

mapping={'branch-apps':'apps','branch-physical':'physical','branch-research':'research','event-workshops':'workshops','event-community':'community','event-hackathon':'hackathon','event-showcase':'showcase','partner-tools':'tools','partner-people':'people','partner-ideas':'ideas'}
for filename in ['index','projects','events','sponsorship']:
    p=Path('public/'+filename+'.html');s=p.read_text()
    for asset,kind in mapping.items():
        s=re.sub(r'<img src="/assets/'+asset+r'\.svg"[^>]*>',lambda m:scene(kind),s)
    if filename=='sponsorship':
        s=re.sub(r'<img src="/assets/partnership-hero\.svg"[^>]*>',lambda m:scene('bridge'),s)
    p.write_text(s)
