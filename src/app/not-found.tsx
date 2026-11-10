import Link from 'next/link';
import type { Metadata } from 'next';
import { PixelFace } from '@/components/graphics/PixelSmiley';
import '@/styles/case-study.css';

export const metadata: Metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <div className="case-page">
      <div className="cs-frame">
        <main id="home" tabIndex={-1} className="cs-hero" style={{ textAlign: 'center' }}>
          <div className="avatar" aria-hidden="true" style={{ margin: '0 auto 22px' }}>
            <PixelFace expression="surprised" />
          </div>
          <div className="chip">404 ϟ</div>
          <h1 style={{ margin: '0 auto' }}>
            This page wandered <span className="hl">off.</span>
          </h1>
          <p className="cs-lede" style={{ margin: '18px auto 30px' }}>
            The link may be old, or the page may have moved.
          </p>
          <Link href="/" className="btn">
            Back to the homepage ↗
          </Link>
        </main>
      </div>
    </div>
  );
}
