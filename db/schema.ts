import { sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core';
export const registrations = sqliteTable('registrations', {
  id: text('id').primaryKey(),
  fullName: text('full_name').notNull(),
  email: text('email').notNull(),
  course: text('course').notNull().default(''),
  interests: text('interests').notNull().default('[]'),
  createdAt: text('created_at').notNull(),
  consentAt: text('consent_at').notNull(),
  notificationStatus: text('notification_status').notNull().default('pending'),
}, table => [uniqueIndex('registrations_email_unique').on(table.email)]);
