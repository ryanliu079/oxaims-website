import html from '../../../public/project-riffmori.html?raw';
export function GET() { return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } }); }
