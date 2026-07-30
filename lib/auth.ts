import { betterAuth } from "better-auth";
import { pool } from "@/lib/db";

const getBaseURL = () => {
  if (process.env.BETTER_AUTH_URL) {
    return process.env.BETTER_AUTH_URL;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.V0_RUNTIME_URL) {
    return process.env.V0_RUNTIME_URL;
  }
  // Fallback for local development
  return "http://localhost:3000";
};

const getTrustedOrigins = () => {
  const origins: string[] = [];

  // Development origins
  if (process.env.NODE_ENV === "development") {
    origins.push(
      "http://localhost:3000",
      "http://localhost",
      "http://127.0.0.1:3000",
      "http://127.0.0.1",
    );
  }

  // V0 Runtime
  if (process.env.V0_RUNTIME_URL) {
    origins.push(process.env.V0_RUNTIME_URL);
  }

  // Vercel preview/production URLs
  if (process.env.VERCEL_URL) {
    origins.push(`https://${process.env.VERCEL_URL}`);
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    origins.push(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }

  // Custom domain
  if (process.env.BETTER_AUTH_URL) {
    origins.push(process.env.BETTER_AUTH_URL);
  }

  return origins;
};

export const auth = betterAuth({
  database: pool,
  baseURL: getBaseURL(),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  trustedOrigins: getTrustedOrigins(),
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  ...(process.env.NODE_ENV === "development"
    ? {
        advanced: {
          // In dev (v0 preview iframe), force cross-site cookies so the
          // session cookie is stored by the browser.
          defaultCookieAttributes: {
            sameSite: "none" as const,
            secure: true,
          },
          skipCSRFCheck: true,
          disableCSRFCheck: true,
        },
      }
    : {}),
});
