'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

/** Escape returns to the project list, as it closed the case-study overlay in the original. */
export function EscapeToProjects() {
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape' || e.defaultPrevented) return;
      router.push('/#projects');
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [router]);

  return null;
}
