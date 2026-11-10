'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Adds `.in` to `.reveal` elements as they scroll into view (original behaviour).
 * Mounted once in the root layout; re-scans when the route changes.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
