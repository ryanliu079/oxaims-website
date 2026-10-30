declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    BUCKET?: R2Bucket;
    SIGNUP_ADMIN_EMAIL?: string;
    SIGNUP_NOTIFICATION_EMAIL?: string;
  }
}
