import type { CSSProperties, ReactNode } from 'react';

/** Rich inline content: plain text or JSX with <b>/<em> emphasis, exactly as in the original copy. */
export type Rich = ReactNode;

/** A headline with one highlighted phrase (rendered as the yellow `.hl` marker). */
export interface HighlightedTitle {
  text: string;
  highlight: string;
}

export type SceneTone = 'yellow' | 'green' | 'blue' | 'purple' | 'orange' | 'red' | 'cream' | 'ink';
export type FaceExpression = 'neutral' | 'happy' | 'surprised' | 'thinking' | 'worried' | 'aha';
export type StatTone = 'red' | 'orange' | 'blue' | 'purple' | 'green' | 'yellow';

/* ---------- Scene format (teardown style) ---------- */

export type StageBlock =
  | {
      type: 'device';
      bar: string;
      /** Greeked wireframe drawn with the primitives in components/case-study/wireframe. */
      screen: ReactNode;
      tight?: boolean;
      screenStyle?: CSSProperties;
    }
  | { type: 'caption'; text: Rich; style?: CSSProperties }
  | {
      type: 'forks';
      items: (
        | { tag: string; tagStyle?: CSSProperties; text: Rich; style?: CSSProperties }
        | { glyph: string; size?: number }
      )[];
    }
  | { type: 'stats'; items: { value: string; label: string; tone: StatTone }[] }
  | {
      type: 'bars';
      title: string;
      sub: string;
      rows: { label: string; value: number; kind: 'claim' | 'reality' }[];
    }
  | { type: 'trap'; from: { value: string; label: string }; to: { value: string; label: string } }
  | { type: 'offers'; items: string[] }
  | { type: 'wins'; items: { who: 'student' | 'edu' | 'industry'; label: string; text: string }[] }
  | { type: 'metrics'; items: { name: string; how: string; measure: string }[] };

export type WhyBlock =
  | { type: 'note'; n: string; text: Rich }
  | { type: 'verdict'; good: boolean; text: Rich }
  | { type: 'principle'; badge: string; title: string; text: Rich };

export interface Scene {
  tone: SceneTone;
  face: FaceExpression;
  faceColor?: string;
  title: string;
  tag?: string;
  /** Narrator speech bubble — one entry per paragraph. */
  say: Rich[];
  stage: StageBlock[];
  why: WhyBlock[];
}

export interface Grade {
  grade: string;
  label: string;
  title: string;
  body: string;
  tactics: { label: string; hot?: boolean }[];
}

/* ---------- Chapter format (classic five-act case study) ---------- */

export type ChapterTone = 1 | 2 | 3 | 4 | 5 | 6;

export type ChapterBlock =
  | { type: 'p'; text: Rich }
  | { type: 'figure'; tone: 'a' | 'b' | 'c' | 'd'; note: string }
  | { type: 'quote'; text: string; label?: string }
  | { type: 'insights'; items: { title: string; text: string }[] }
  | { type: 'outcomes'; items: { value: string; unit?: string; label: string }[] };

export interface Chapter {
  title: string;
  tone: ChapterTone;
  blocks: ChapterBlock[];
}

/* ---------- Project ---------- */

export interface Project {
  slug: string;
  /** Short category, e.g. "Conversational AI". */
  category: string;
  /** One-sentence summary used for SEO descriptions. */
  summary: string;
  role: string;
  timeline: string;
  team: string;
  /** Shown as "Status" when present, otherwise `platform` is shown as "Platform". */
  status?: string;
  platform?: string;
  /** Tools used — not present in the original content; add when available. */
  tools?: string[];

  /** Homepage card. */
  card: {
    kicker: string;
    title: string;
    description: string;
    tags: string[];
    /** Heights (%) of the five bars in the card's mini mock. */
    bars: [number, number, number, number, number];
  };

  /** Case study page. */
  caseStudy: {
    chip: string;
    title: HighlightedTitle;
    lede: string;
    nda?: boolean;
    cover: { tone: 'a' | 'b' | 'c' | 'd'; label: string; content?: ReactNode };
    body:
      | { format: 'scenes'; scenes: Scene[]; grade?: Grade }
      | { format: 'chapters'; chapters: Chapter[] };
  };
}
