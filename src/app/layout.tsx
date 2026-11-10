import type { Metadata, Viewport } from 'next';
import { Archivo, Archivo_Black } from 'next/font/google';
import { site } from '@/data/site';
import { getSiteUrl } from '@/lib/site-url';
import { RevealObserver } from '@/components/interactions/RevealObserver';
import { ClarityAnalytics } from '@/components/analytics/ClarityAnalytics';
import '@/styles/base.css';

/*
 * Fonts are self-hosted by next/font and registered under their real family names, which the
 * stylesheet tokens reference directly (--display / --sans in base.css). The tokens deliberately
 * avoid next/font's size-adjusted fallback so glyphs Archivo lacks (→ ↓ ↗ ✳) fall back to plain
 * sans-serif exactly as in the original design — otherwise widths shift.
 */
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-archivo',
  display: 'swap',
});

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo-black',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.title,
  authors: [{ name: site.name }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.title,
    title: site.title,
    description: site.description,
    url: '/',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description },
};

export const viewport: Viewport = {
  themeColor: '#0E5FE8',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${archivoBlack.variable}`} data-scroll-behavior="smooth">
      <body>
        <a href="#home" className="skip-link">
          Skip to content
        </a>
        {children}
        <RevealObserver />
        <ClarityAnalytics />
        <noscript>
          <style>{'.reveal{opacity:1;transform:none}'}</style>
        </noscript>
      </body>
    </html>
  );
}
