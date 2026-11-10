'use client';

import Clarity from '@microsoft/clarity';
import { useEffect } from 'react';

const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

/**
 * Microsoft Clarity (heatmaps, session recordings). Loads one async script after hydration,
 * so it never blocks rendering. Runs only in production builds with a project ID set —
 * local development and builds without the env var send nothing.
 * Clarity tracks App Router client-side navigations on its own; no per-route calls needed.
 */
export function ClarityAnalytics() {
  useEffect(() => {
    if (!projectId || process.env.NODE_ENV !== 'production') return;
    Clarity.init(projectId);
  }, []);

  return null;
}
