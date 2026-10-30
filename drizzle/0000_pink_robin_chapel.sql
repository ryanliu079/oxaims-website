CREATE TABLE `registrations` (
	`id` text PRIMARY KEY NOT NULL,
	`full_name` text NOT NULL,
	`email` text NOT NULL,
	`course` text DEFAULT '' NOT NULL,
	`interests` text DEFAULT '[]' NOT NULL,
	`created_at` text NOT NULL,
	`consent_at` text NOT NULL,
	`notification_status` text DEFAULT 'pending' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `registrations_email_unique` ON `registrations` (`email`);