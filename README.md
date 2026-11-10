# nrk. — Product Design Portfolio

A personal product-design portfolio built with **Next.js (App Router)**, **React** and **TypeScript**, deployed on **Vercel**.

The visual design is a faithful conversion of the original hand-built HTML/CSS/JS frontend, kept for reference in
[`design-reference/portfolio-units-style.html`](design-reference/portfolio-units-style.html). That file is the source of truth for the design.

---

## Quick start

Requires **Node.js 20.9+** (Node 22 LTS recommended).

```bash
npm install
npm run dev        # http://localhost:3000
```

| Command             | What it does                                 |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start the development server                 |
| `npm run build`     | Create a production build                    |
| `npm run start`     | Serve the production build (after `build`)   |
| `npm run typecheck` | Run the TypeScript compiler without emitting |

---

## Project structure

```text
design-reference/          Original single-file HTML design (reference only, not served)
src/
├── app/
│   ├── layout.tsx         Root layout: fonts, metadata, skip link, scroll-reveal observer
│   ├── page.tsx           Homepage (composes the section components)
│   ├── projects/[slug]/   Case-study route (statically generated per project) + OG image
│   ├── not-found.tsx      404 page
│   ├── opengraph-image.tsx Social sharing image (generated at build time)
│   ├── icon.svg           Favicon (pixel smiley)
│   ├── sitemap.ts         /sitemap.xml
│   └── robots.ts          /robots.txt
├── components/
│   ├── layout/            Sidebar
│   ├── sections/          Homepage sections (Ticker, Hero, Projects, Playground, Writing, About, Contact)
│   ├── projects/          Project card
│   ├── case-study/        Case-study renderer: scenes, chapters, grade card, wireframe primitives
│   ├── graphics/          Server-rendered SVG art (perspective tunnel, pixel faces, pixel scatter)
│   ├── interactions/      The only client components: reveal-on-scroll, kinetic text, reading progress, Esc-to-close
│   └── ui/                Banner, Highlight, MaybeLink
├── data/
│   ├── site.ts            All homepage copy, nav, links, email
│   └── projects/          One file per case study + index.ts (order, lookups)
├── lib/                   Site URL resolution, seeded random, OG image renderer
├── styles/                base.css (tokens, shell, a11y) · home.css · case-study.css
└── types/project.ts       Typed content model for projects and case studies
```

### Styling

The original stylesheet was carried over with its class names unchanged and split into three global files:
`base.css` (design tokens, frame, sidebar, shared components), `home.css` and `case-study.css`. Colours, radii and
fonts are CSS custom properties on `:root` in `base.css`. Fonts (Archivo, Archivo Black) are self-hosted via
`next/font`.

### JavaScript

Almost everything is server-rendered static HTML. The generated graphics (tunnel, pixel smileys, confetti) are computed at
build time. Only four tiny client components ship JS: scroll reveal, the kinetic text strip, the case-study reading-progress
bar and the Escape-key shortcut.

---

## Editing content

### Homepage copy, links and email

Edit [`src/data/site.ts`](src/data/site.ts). Social profile URLs are empty placeholders. Fill them in and the
sidebar/footer pills become real links. Until then they render as non-clickable labels instead of dead `#` links.
Articles accept an optional `href` once published.

### Adding a project / case study

1. Create `src/data/projects/my-project.tsx` exporting a `Project` (see [`src/types/project.ts`](src/types/project.ts)).
2. Add it to the array in [`src/data/projects/index.ts`](src/data/projects/index.ts).

That's it: the homepage card, `/projects/my-project`, its metadata, OG image and sitemap entry are generated.
Case studies support two body formats:

- **`scenes`**: the teardown style (narrator bubble · stage · "why" column). Stage blocks include device wireframes,
  forks, stat tiles, bar charts, the trap visual, offer/win/metric grids. "Why" blocks are notes, verdicts and principles.
- **`chapters`**: the classic five-act style (paragraphs, figures, quotes, insights, outcome band).

Device wireframes are drawn with the primitives in
[`components/case-study/wireframe.tsx`](src/components/case-study/wireframe.tsx).

---

## Deploying

### 1. Push to GitHub

```bash
# create an empty repo on github.com first (no README/licence), then:
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 2. Import into Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repository.
2. Vercel detects Next.js automatically. Keep the default build settings (`npm run build`, output handled by Vercel).
3. Click **Deploy**.

Every push to `main` then deploys to production, and every pull request gets a preview URL.

### 3. Custom domain (optional)

Add the domain under **Project → Settings → Domains**, then set the environment variable
`NEXT_PUBLIC_SITE_URL=https://your-domain.com` under **Settings → Environment Variables** and redeploy. This is used for
canonical URLs, Open Graph URLs, the sitemap and robots.txt. Without it, the Vercel production URL is used automatically.
See [`.env.example`](.env.example).

---

## Analytics (Microsoft Clarity)

Heatmaps and session recordings via [`@microsoft/clarity`](https://www.npmjs.com/package/@microsoft/clarity),
initialised in [`components/analytics/ClarityAnalytics.tsx`](src/components/analytics/ClarityAnalytics.tsx).

1. Create a project at [clarity.microsoft.com](https://clarity.microsoft.com) and copy its ID (Settings → Overview).
2. In Vercel → **Settings → Environment Variables**, add `NEXT_PUBLIC_CLARITY_PROJECT_ID` for Production, then redeploy
   (`NEXT_PUBLIC_` values are baked in at build time).

It runs only in production builds with the ID set, so local development sends nothing.

## Accessibility & SEO notes

- Semantic landmarks, a skip-to-content link, visible `:focus-visible` outlines and a single `h1` per page.
- `prefers-reduced-motion` disables the ticker, bobbing arrows, reveals and the kinetic scroll.
- Content stays visible without JavaScript (`<noscript>` disables the reveal-on-scroll hiding).
- Per-page titles, descriptions, canonical URLs, Open Graph/Twitter cards, generated OG images, sitemap and robots.txt.
