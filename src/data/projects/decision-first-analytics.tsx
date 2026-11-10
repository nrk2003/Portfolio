import type { Project } from '@/types/project';

/**
 * NOTE: The metrics and research details in this case study (34 charts, eight interviews,
 * 2.7× / −63% / Top 3 outcomes) are reproduced verbatim from the original design file.
 * Confirm they are real before publishing — the other two case studies explicitly avoid
 * unverified numbers.
 */
export const decisionFirstAnalytics: Project = {
  slug: 'decision-first-analytics',
  category: 'Analytics',
  summary:
    'Dashboards fail when they answer questions nobody asked. This one started with the questions — then designed backwards.',
  role: 'Product Designer',
  timeline: '10 weeks',
  team: 'PM, Data Engineer, 2 Engineers',
  platform: 'Web Dashboard',

  card: {
    kicker: 'Analytics ϟ Case Study',
    title: 'Turning a wall of data into decisions people trust',
    description:
      'Dashboards fail when they answer questions nobody asked. This one started with the questions — then designed backwards.',
    tags: ['Data Viz', 'IA', 'Enterprise UX'],
    bars: [50, 82, 38, 66, 95],
  },

  caseStudy: {
    chip: 'Analytics ϟ Case Study',
    title: { text: 'Turning a wall of data into decisions people', highlight: 'trust.' },
    lede: 'The dashboard had 34 charts and answered none of the questions leadership actually asked. We designed backwards — from decisions to data.',
    cover: { tone: 'c', label: 'Analytics' },
    body: {
      format: 'chapters',
      chapters: [
        {
          title: 'The setting.',
          tone: 1,
          blocks: [
            {
              type: 'p',
              text: (
                <>
                  The analytics module was a feature-request graveyard: every chart someone had ever asked for, all
                  rendered at once. Usage data told the real story —{' '}
                  <b>users visited, scrolled, exported to Excel, and never came back.</b>
                </>
              ),
            },
            { type: 'p', text: "The dashboard wasn't informing decisions; it was outsourcing them to spreadsheets." },
            { type: 'figure', tone: 'c', note: 'Fig 01 — The original 34-chart dashboard' },
          ],
        },
        {
          title: 'The friction.',
          tone: 2,
          blocks: [
            {
              type: 'p',
              text: (
                <>
                  Instead of asking users what charts they wanted, I asked what <b>decisions they made weekly</b> and
                  what they needed to feel confident making them. Eight interviews later, 34 charts collapsed into 5
                  recurring decisions.
                </>
              ),
            },
            {
              type: 'quote',
              text: `"I don't need more data. I need to know if this number is bad, and compared to what."`,
            },
            {
              type: 'insights',
              items: [
                {
                  title: 'Context beats volume',
                  text: 'A number without a benchmark, trend, or threshold is decoration, not information.',
                },
                {
                  title: 'Trust needs provenance',
                  text: 'Users exported to Excel to check the math. The dashboard hid how numbers were computed.',
                },
                {
                  title: 'Decisions have rhythms',
                  text: 'Some questions are Monday questions; some are quarter-end. One layout served neither.',
                },
              ],
            },
          ],
        },
        {
          title: 'The turn.',
          tone: 3,
          blocks: [
            {
              type: 'p',
              text: (
                <>
                  The reframe: <b>design the answers, not the charts.</b> The new IA organized the module around the
                  five decisions, each opening with a plain-language verdict (&quot;Pipeline is healthy, but conversion
                  is slipping in segment B&quot;) backed by the evidence beneath it.
                </>
              ),
            },
            {
              type: 'p',
              text: 'Every metric gained three companions: comparison, trend, and a tap-to-reveal "how this is calculated."',
            },
            { type: 'figure', tone: 'd', note: 'Fig 02 — Decision-first information architecture' },
          ],
        },
        {
          title: 'The craft.',
          tone: 4,
          blocks: [
            {
              type: 'p',
              text: (
                <>
                  Data visualization lives or dies in the small choices. We built a restrained chart vocabulary —{' '}
                  <b>
                    four chart types, one accent color for &quot;needs attention,&quot; and typography doing most of the
                    hierarchy work.
                  </b>
                </>
              ),
            },
            {
              type: 'p',
              text: 'Edge cases got first-class treatment: empty states that teach, loading states that preserve layout, and error states that say what to do next.',
            },
            { type: 'figure', tone: 'c', note: 'Fig 03 — Final decision views & chart system' },
          ],
        },
        {
          title: 'The outcome.',
          tone: 5,
          blocks: [
            {
              type: 'p',
              text: 'Within a quarter, the export-to-Excel workaround dropped sharply — the clearest signal that trust had moved back into the product.',
            },
            {
              type: 'outcomes',
              items: [
                { value: '2.7', unit: '×', label: 'Weekly return visits' },
                { value: '−63', unit: '%', label: 'Excel exports' },
                { value: 'Top 3', label: 'Feature in NPS mentions' },
              ],
            },
            {
              type: 'p',
              text: (
                <>
                  <b>What I&apos;d do differently:</b> prototype with real (messy) data sooner. Clean sample data hid
                  layout problems that only surfaced with 40-character customer names.
                </>
              ),
            },
          ],
        },
      ],
    },
  },
};
