export const dynamic = 'force-dynamic';

// Keep old browser tabs from reporting success or continuing to FormSubmit.
// Existing registrations remain available in the private admin and CSV export.
export async function GET() {
  return Response.json({ acceptingSignups: false, registrationUrl: '/join#signup' }, { headers: { 'Cache-Control': 'no-store' } });
}
export async function POST() {
  return Response.json({ error: 'We’ve moved to Google Forms. Refresh this page, then choose “Register your interest” to sign up.' }, { status: 410, headers: { 'Cache-Control': 'no-store' } });
}
