'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/** Red strip whose oversized text slides horizontally as the page scrolls (original behaviour). */
export function KineticStrip({ text, children }: { text: string; children?: ReactNode }) {
  const panelRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    const el = textRef.current;
    if (!panel || !el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const r = panel.getBoundingClientRect();
      const progress = 1 - Math.min(Math.max((r.top + r.height) / (window.innerHeight + r.height), 0), 1);
      const range = el.scrollWidth - r.width;
      el.style.transform = `translateX(${-progress * Math.max(range, 0)}px)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="panel kinetic" ref={panelRef} aria-hidden="true">
      {children}
      <div className="kinetic-text" ref={textRef}>
        {text}
      </div>
    </section>
  );
}
