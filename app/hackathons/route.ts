import html from '../../public/hackathons.html?raw';
export function GET() { return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } }); }
