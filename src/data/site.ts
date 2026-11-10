/**
 * Site-wide content. Everything here is copied from the original design
 * (design-reference/portfolio-units-style.html). Items marked TODO were
 * placeholders (`href="#"`) in the original and need real values.
 */

export const site = {
  name: 'nrk.',
  role: 'Product Designer',
  title: 'nrk. — Product Designer',
  description:
    'UX designer turned product builder. I turn messy problems into systems that feel effortless — from first insight to shipped interface.',
  location: 'Kerala, India',

  /** From the original "Start a conversation" button. Confirm this inbox is live. */
  email: 'hello@nrk.design',

  /**
   * TODO: add real profile URLs. Links with an empty href render as inert
   * labels (no dead `#` links), keeping the original visual.
   */
  socials: {
    linkedin: '',
    dribbble: '',
    github: '',
  },
} as const;

export const nav = [
  { href: '#projects', num: '01', label: 'Projects', tone: 1 },
  { href: '#playground', num: '02', label: 'Playground', tone: 2 },
  { href: '#writing', num: '03', label: 'Blogs & Articles', tone: 3 },
  { href: '#about', num: '04', label: 'About Me', tone: 4 },
] as const;

export const ticker = [
  'Product Strategy',
  'Systems Thinking',
  'Interaction Design',
  'B2B SaaS',
  'Design Systems',
  'Rapid Prototyping',
  'UX Research',
];

export const hero = {
  chip: 'Available for senior product roles',
  headline: { text: "I design products people don't want to", highlight: 'put down.' },
  body: site.description,
  primary: { href: '#projects', label: 'See my work ↗' },
  secondary: { href: '#about', label: "Who's nrk?" },
};

export const kinetic = 'how I think about product ✳ how I think about product';

export const banners = {
  projects: "Problems I've had the joy of solving.",
  playground: 'Where I break things on purpose.',
  writing: 'Thinking out loud.',
  about: 'Why nrk hits different.',
};

export type PlayArt = 'ball' | 'pixels' | 'cursor' | 'eq' | 'smiley' | 'type';

export const playground: { title: string; kind: string; art: PlayArt }[] = [
  { title: 'Elastic interactions', kind: 'Motion study', art: 'ball' },
  { title: 'Generative pixels', kind: 'Creative code', art: 'pixels' },
  { title: 'Custom cursors', kind: 'Micro-interaction', art: 'cursor' },
  { title: 'Sound-reactive visuals', kind: 'WebAudio', art: 'eq' },
  { title: 'Pixel-art systems', kind: 'Illustration', art: 'smiley' },
  { title: 'Kinetic typography', kind: 'Type study', art: 'type' },
];

/**
 * Articles had `href="#"` in the original. Add an `href` once an article is
 * published; until then the row renders without a link.
 */
export const articles: { title: string; excerpt: string; topic: string; readTime: string; href?: string }[] = [
  {
    title: 'Why your onboarding is really a trust problem',
    excerpt: "Users don't abandon setup because it's long. They abandon it because they stop believing it will pay off.",
    topic: 'Product Thinking',
    readTime: '6 min read',
  },
  {
    title: 'Design systems are social systems first',
    excerpt: "The hardest component to build isn't the button. It's the agreement about what the button means.",
    topic: 'Systems',
    readTime: '8 min read',
  },
  {
    title: 'The case for designing the boring parts beautifully',
    excerpt: 'Empty states, error messages, loading screens — the moments nobody demos are the moments users remember.',
    topic: 'Craft',
    readTime: '5 min read',
  },
  {
    title: 'From UX designer to product builder',
    excerpt: 'What changed when I stopped handing off designs and started owning outcomes.',
    topic: 'Career',
    readTime: '7 min read',
  },
];

export const beliefs = [
  {
    pill: 'For people',
    title: 'Every screen is a conversation',
    text: 'With a real person having a real day. I design for how it feels to be on the other side of the interface.',
  },
  {
    pill: 'By systems',
    title: 'One good screen is luck',
    text: 'A hundred consistent ones is a system. I build the underlying logic, not just the surface.',
  },
  {
    pill: 'With craft',
    title: 'The last 10% is the product',
    text: 'The easing curve, the empty state, the word choice — where good products become loved ones.',
  },
];

export const about = {
  location: '📍 Kerala, India — designing for the world',
  headline: { text: "Hello, I'm a designer who", highlight: 'builds.' },
  paragraphs: [
    'I started in UX, fell in love with the whole product — the strategy, the systems, the shipping. Now I work across the full arc: from the first messy question to the last polished pixel.',
    'My background is B2B SaaS, where complexity is the default and clarity is the craft. I believe the best products feel less like tools and more like good instincts.',
  ],
  facts: [
    { n: 'B2B', l: 'SaaS Focus' },
    { n: '0→1', l: 'Product Builder' },
    { n: '∞', l: 'Curiosity' },
  ],
};

export const contact = {
  chip: 'Next chapter ϟ',
  headline: "Let's build something people love to use.",
  cta: 'Start a conversation ↗',
  footnote: 'Designed & built with care — no templates were harmed',
  year: '©26',
};
