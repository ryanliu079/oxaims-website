"""Inline canonical Oxford SVG artwork so its strokes can respond to scrolling.
Run after editing public/assets/oxford-*.svg or replacing artwork in public HTML.
"""
from copy import deepcopy
from pathlib import Path
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1] / 'public'
NS = 'http://www.w3.org/2000/svg'
ET.register_namespace('', NS)
GEOMETRY = {'path', 'circle', 'ellipse', 'rect', 'line', 'polyline', 'polygon'}

def inline_svg(filename, classes, alt, width, height):
    svg = ET.fromstring((ROOT / 'assets' / filename).read_text())
    definitions = {e.get('id'): e for e in svg.iter() if e.get('id')}
    def flatten(parent):
        for child in list(parent):
            name = child.tag.rsplit('}', 1)[-1]
            if name in {'defs', 'title'}:
                parent.remove(child)
                continue
            if name == 'use':
                key = child.get('href', '').removeprefix('#')
                clone = deepcopy(definitions[key])
                group = ET.Element(f'{{{NS}}}g', {k: v for k, v in child.attrib.items() if k != 'href'})
                group.append(clone)
                index = list(parent).index(child)
                parent.remove(child)
                parent.insert(index, group)
                flatten(group)
            else:
                flatten(child)
            child.attrib.pop('id', None)
        # Separate subpaths so short windows and columns draw at the same pace as outlines.
        for child in list(parent):
            if child.tag.rsplit('}', 1)[-1] != 'path':
                continue
            if child.get('data-static') == 'true':
                continue
            segments = [s for s in re.split(r'(?=M)', child.get('d', '')) if s.strip()]
            if len(segments) > 1:
                index = list(parent).index(child)
                parent.remove(child)
                for offset, d in enumerate(segments):
                    segment = deepcopy(child)
                    segment.set('d', d)
                    parent.insert(index + offset, segment)
    flatten(svg)
    for node in svg.iter():
        node.attrib.pop('id', None)
    svg.attrib.pop('aria-labelledby', None)
    svg.set('class', f'{classes} oxford-art')
    svg.set('data-oxford-art', filename)
    svg.set('width', width)
    svg.set('height', height)
    svg.set('focusable', 'false')
    if 'oxford-panorama' in classes:
        svg.set('preserveAspectRatio', 'xMidYMax meet')
    if alt:
        svg.set('role', 'img')
        svg.set('aria-label', alt)
    else:
        svg.attrib.pop('role', None)
        svg.set('aria-hidden', 'true')
    strokes = [e for e in svg.iter() if e.tag.rsplit('}', 1)[-1] in GEOMETRY and e.get('data-static') != 'true']
    for i, node in enumerate(strokes):
        node.set('class', 'oxford-stroke')
        node.set('pathLength', '1')
        node.set('style', f'--stroke-start:{i / max(1, len(strokes)-1) * .35:.4f}')
    return ET.tostring(svg, encoding='unicode')

for html in ROOT.glob('*.html'):
    text = html.read_text()
    # Restore placeholders first, making repeated runs safe.
    def placeholder(match):
        root = ET.fromstring(match.group(0))
        filename = root.get('data-oxford-art')
        classes = root.get('class', '').replace(' oxford-art', '')
        return f'<img class="{classes}" src="/assets/{filename}" alt="{root.get("aria-label", "")}" width="{root.get("width")}" height="{root.get("height")}">'
    text = re.sub(r'<svg\b[^>]*data-oxford-art="[^"]+".*?</svg>', placeholder, text, flags=re.S)
    def replace(match):
        attrs = dict(re.findall(r'([\w-]+)="([^"]*)"', match.group(0)))
        return inline_svg(attrs['src'].split('/')[-1], attrs.get('class', 'oxford-panorama'), attrs.get('alt', ''), attrs['width'], attrs['height'])
    text = re.sub(r'<img\b[^>]*src="/assets/(?:oxford-skyline|oxford-architecture|radcliffe-camera)\.svg"[^>]*>', replace, text)
    html.write_text(text)
print('Oxford artwork inlined with normalised, staggered strokes.')
