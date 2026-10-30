import { isRegistrationAdmin, listRegistrations, csvCell } from '../../../lib/server/registrations';
export const dynamic = 'force-dynamic';
export async function GET(request: Request) {
  if (!await isRegistrationAdmin()) return Response.json({ error: 'Authorised committee access is required.' }, { status: 403, headers: { 'Cache-Control': 'no-store' } });
  const rows = await listRegistrations();
  if (new URL(request.url).searchParams.get('format') === 'csv') {
    const csv = [['Name','Email','Course','Interests','Registered at','Email status'], ...rows.map(row => [row.fullName, row.email, row.course, JSON.parse(row.interests).join(', '), row.createdAt, row.notificationStatus])].map(row => row.map(csvCell).join(',')).join('\r\n');
    return new Response('\uFEFF' + csv, { headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="OxAIMS-signups.csv"', 'Cache-Control': 'no-store' } });
  }
  return Response.json({ rows }, { headers: { 'Cache-Control': 'no-store' } });
}
