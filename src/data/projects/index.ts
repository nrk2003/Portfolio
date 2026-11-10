import type { Project } from '@/types/project';
import { conversationalAi } from './conversational-ai';
import { firsttrail } from './firsttrail';
import { decisionFirstAnalytics } from './decision-first-analytics';

/**
 * All projects, in display order. To add a project: create a data file in this
 * folder and add it here — the homepage card and /projects/[slug] page are generated.
 */
export const projects: Project[] = [conversationalAi, firsttrail, decisionFirstAnalytics];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectIndex(slug: string): number {
  return projects.findIndex((p) => p.slug === slug);
}

/** The "next story" shown at the end of a case study (wraps around). */
export function getNextProject(slug: string): Project {
  const i = getProjectIndex(slug);
  return projects[(i + 1) % projects.length];
}

/** Plain-text headline for metadata, e.g. "Teaching an AI to change its mind". */
export function plainTitle(p: Project): string {
  const { text, highlight } = p.caseStudy.title;
  return `${text} ${highlight}`.replace(/[.\s]+$/, '');
}
