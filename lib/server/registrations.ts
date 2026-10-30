import { env } from 'cloudflare:workers';
import { getChatGPTUser } from '../../app/chatgpt-auth';
import { getDb } from '../../db';
import { registrations } from '../../db/schema';
import { desc } from 'drizzle-orm';
export const interestOptions = ['Workshops', 'Projects', 'Hackathons', 'Helping organise'];
export function sameOrigin(request: Request) {
  const origin = request.headers.get('origin');
  const url = new URL(request.url);
  return Boolean(origin && origin === url.origin);
}
export function validateRegistration(input: unknown) {
  if (!input || typeof input !== 'object') return null;
  const value = input as Record<string, unknown>;
  const fullName = typeof value.fullName === 'string' ? value.fullName.trim() : '';
  const email = typeof value.email === 'string' ? value.email.trim().toLowerCase() : '';
  const course = typeof value.course === 'string' ? value.course.trim() : '';
  if (!fullName || fullName.length > 100 || /[\r\n<>]/.test(fullName)) return null;
  if (email.length > 254 || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) return null;
  if (course.length > 150 || /[\r\n<>]/.test(course)) return null;
  if (value.consent !== true) return null;
  if (!Array.isArray(value.interests) || value.interests.length > 4 || value.interests.some(item => typeof item !== 'string' || !interestOptions.includes(item))) return null;
  return { fullName, email, course, interests: [...new Set(value.interests)] as string[] };
}
export async function isRegistrationAdmin() {
  const user = await getChatGPTUser();
  if (!user) return false;
  return Boolean(env.SIGNUP_ADMIN_EMAIL && user.email.toLowerCase() === env.SIGNUP_ADMIN_EMAIL.trim().toLowerCase());
}
export async function listRegistrations() {
  return getDb().select().from(registrations).orderBy(desc(registrations.createdAt)).limit(5000);
}
export function csvCell(value: string) {
  const safe = /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
  return `"${safe.replaceAll('"', '""')}"`;
}
