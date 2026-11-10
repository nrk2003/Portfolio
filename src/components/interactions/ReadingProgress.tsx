'use client';

import { useEffect, useRef } from 'react';

/** Reading-progress bar in the sticky case-study header (original behaviour, now tied to window scroll). */
export function ReadingProgress() {
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (barRef.current) barRef.current.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
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
    <div className="cs-progress" aria-hidden="true">
      <i ref={barRef} />
    </div>
  );
}
