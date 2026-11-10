/**
 * Resolves the public site URL without hard-coding a domain.
 * 1. NEXT_PUBLIC_SITE_URL (set this once you have a custom domain)
 * 2. The production URL Vercel injects automatically
 * 3. localhost for development
 */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit);
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return new URL(`https://${vercel}`);
  return new URL(`http://localhost:${process.env.PORT ?? 3000}`);
}
