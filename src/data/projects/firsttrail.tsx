import type { Project } from '@/types/project';
import { CardText, PCard } from '@/components/case-study/wireframe';

export const firsttrail: Project = {
  slug: 'firsttrail',
  category: 'Self-Initiated Venture',
  summary:
    'FIRSTTRAIL — a work-simulation platform for the gap between what college teaches and what industry expects.',
  role: 'Founder & Product Designer',
  timeline: 'Ongoing',
  team: 'Self-initiated',
  status: 'Concept — in validation',

  card: {
    kicker: 'Self-Initiated Venture ϟ Case Study',
    title: 'FIRSTTRAIL — where knowledge becomes experience',
    description:
      '4 years in college, lakhs in debt, and still no clue what to do to make a living. A work-simulation platform for the gap between what college teaches and what industry expects.',
    tags: ['Product Strategy', 'EdTech', 'Founder'],
    bars: [65, 45, 88, 52, 70],
  },

  caseStudy: {
    chip: 'Self-Initiated Venture ϟ Teardown',
    title: { text: 'Where knowledge is applied and learning becomes', highlight: 'experience.' },
    lede: '4 years in college, Lakhs in debt and still no clue what to do to make a living!',
    cover: {
      tone: 'b',
      label: 'FIRSTTRAIL',
      content: (
        <div style={{ textAlign: 'center', padding: '14px 20px' }}>
          <div
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(38px,6vw,74px)',
              lineHeight: 1,
              letterSpacing: '-.02em',
              color: 'var(--cream)',
            }}
          >
            FIRSTTRAIL
          </div>
          <div
            style={{
              display: 'inline-block',
              marginTop: 18,
              background: 'var(--cream)',
              border: '1.5px solid var(--ink)',
              borderRadius: 100,
              padding: '9px 20px',
              fontWeight: 700,
              fontSize: 13,
            }}
          >
            Where knowledge is applied and learning becomes experience.
          </div>
        </div>
      ),
    },
    body: {
      format: 'scenes',
      scenes: [
        {
          tone: 'red',
          face: 'worried',
          title: 'Four years. Lakhs in debt. No clue.',
          tag: 'The hook',
          say: [
            <>
              4 years in college, Lakhs in debt and still <b>no clue what to do to make a living!</b>
            </>,
            'I was there. Millions still are.',
          ],
          stage: [
            {
              type: 'stats',
              items: [
                { value: '4 yrs', label: 'of study', tone: 'red' },
                { value: '₹ lakhs', label: 'of debt', tone: 'red' },
                { value: '0', label: 'clarity on what comes next', tone: 'red' },
              ],
            },
          ],
          why: [
            {
              type: 'verdict',
              good: false,
              text: 'The transaction students signed up for — time and money in, a career out — quietly stopped clearing.',
            },
          ],
        },
        {
          tone: 'orange',
          face: 'neutral',
          title: 'The promise they enrolled for.',
          tag: 'Expectation',
          say: [
            <>
              Students join college <b>believing they will land a job!</b>
            </>,
            "The one's with connections and hold land jobs while the ones who excelled in classrooms are still struggling to find their path.",
            'They feel defeated and underconfident.',
          ],
          stage: [
            {
              type: 'forks',
              items: [
                { tag: 'Connections', tagStyle: { background: 'var(--green)', color: '#fff' }, text: 'Lands the job' },
                {
                  tag: 'Top of the class',
                  tagStyle: { background: 'var(--red)', color: '#fff' },
                  text: 'Still searching',
                },
              ],
            },
            { type: 'caption', text: 'Merit and outcome have come apart' },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 What this costs',
              title: 'Confidence, not just placement',
              text: 'The students who did exactly what the system asked of them are the ones most shaken when it fails to pay out. That is a confidence problem before it is an employment problem.',
            },
          ],
        },
        {
          tone: 'yellow',
          face: 'surprised',
          title: 'Everyone thinks they are ready.',
          tag: 'The readiness gap',
          say: [
            <>
              89% of educators say students are workforce-ready, yet <b>48% of graduates feel unprepared</b> to even
              apply for entry-level jobs.
            </>,
            <em key="e">Same cohort. Opposite sides of the desk.</em>,
          ],
          stage: [
            {
              type: 'bars',
              title: 'The readiness gap',
              sub: 'Two measures of the same cohort',
              rows: [
                { label: 'Educators who say students are workforce-ready', value: 89, kind: 'claim' },
                { label: 'Graduates who feel unprepared to even apply', value: 48, kind: 'reality' },
              ],
            },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 Why it persists',
              title: 'Nobody is measuring the same thing',
              text: "Institutions measure completion. Students measure how they feel walking into an interview. Neither side sees the other's number, so neither side knows the gap exists.",
            },
          ],
        },
        {
          tone: 'cream',
          face: 'thinking',
          title: 'Taught confidently. Taught the wrong thing.',
          tag: 'Skills mismatch',
          say: [
            'Employers want practical, job-specific skills; educators emphasise soft skills.',
            <>
              <b>56% of unprepared grads</b> say job-specific skills are their biggest gap.
            </>,
          ],
          stage: [
            {
              type: 'stats',
              items: [
                {
                  value: '56%',
                  label: 'of unprepared grads say job-specific skills are their biggest gap',
                  tone: 'orange',
                },
              ],
            },
            {
              type: 'forks',
              items: [
                {
                  tag: 'Educators teach',
                  tagStyle: { background: 'var(--blue)', color: '#fff' },
                  text: 'Soft skills, theory',
                },
                {
                  tag: 'Employers want',
                  tagStyle: { background: 'var(--orange)', color: '#fff' },
                  text: 'Practical, job-specific skill',
                },
              ],
            },
          ],
          why: [
            {
              type: 'verdict',
              good: false,
              text: 'Both sides are working hard. They are just optimising for different outputs, and the student absorbs the difference.',
            },
          ],
        },
        {
          tone: 'red',
          face: 'worried',
          title: 'So they stop applying.',
          tag: 'The confidence collapse',
          say: [
            <>
              53% didn&apos;t apply to entry-level jobs because they felt underqualified — <b>up from 48%</b>.
            </>,
            '77% think employers expect more experience than is reasonable.',
            '91% have felt pressure to accept any available job rather than one that fits them.',
          ],
          stage: [
            {
              type: 'stats',
              items: [
                { value: '53%', label: "didn't apply — felt underqualified (up from 48%)", tone: 'red' },
                { value: '77%', label: 'think employers expect more experience than is reasonable', tone: 'red' },
                { value: '91%', label: 'felt pressure to accept any job rather than one that fits', tone: 'red' },
              ],
            },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 Principle',
              title: 'Self-selection out',
              text: 'The damage is not rejection — it is the application never sent. By the time a student is filtering themselves out of roles they could do, no amount of employer-side fixing reaches them.',
            },
          ],
        },
        {
          tone: 'purple',
          face: 'surprised',
          title: 'And the ground is moving.',
          tag: 'AI disruption',
          say: [
            <>
              Employment for 22–25-year-olds in highly AI-exposed jobs is <b>~19% below trend</b> — driven mainly by
              fewer hires, not layoffs.
            </>,
            '58% of the Class of 2026 say they need stronger AI skills. Only 28% say their program meaningfully integrated AI.',
          ],
          stage: [
            {
              type: 'bars',
              title: 'The AI skills gap',
              sub: 'What the Class of 2026 needs vs. what their programmes delivered',
              rows: [
                { label: 'Say they need stronger AI skills', value: 58, kind: 'reality' },
                { label: 'Say their program meaningfully integrated AI', value: 28, kind: 'claim' },
              ],
            },
            {
              type: 'stats',
              items: [
                { value: '~19%', label: 'below trend — employment for 22–25s in AI-exposed jobs', tone: 'purple' },
                { value: '39%', label: 'of core skills will change by 2030', tone: 'purple' },
              ],
            },
          ],
          why: [
            {
              type: 'verdict',
              good: false,
              text: 'The entry rung is being removed faster than curricula can be rewritten. A four-year degree now outlives the skills it was built on.',
            },
          ],
        },
        {
          tone: 'blue',
          face: 'thinking',
          title: 'Entry-level now requires experience.',
          tag: 'The paradox',
          say: [
            <>
              Universities pass on knowledge in theories but industry expects people with <b>experience applying</b>{' '}
              the learnt knowledge.
            </>,
            'That is the whole catch, in one sentence.',
          ],
          stage: [
            {
              type: 'device',
              bar: 'industry view',
              screen: (
                <PCard n="“">
                  <CardText lh={1.5}>
                    A Bayer India HR head says freshers struggle with real-world problem-solving and critical thinking
                    due to over-reliance on theory.
                  </CardText>
                </PCard>
              ),
            },
            {
              type: 'stats',
              items: [
                {
                  value: '85.8%',
                  label: 'of recruiters rate years of experience as very or extremely valuable',
                  tone: 'blue',
                },
                { value: '35%', label: 'of "entry-level" roles required 3+ years of experience', tone: 'blue' },
                {
                  value: '~20%',
                  label: 'less pay for "entry-level" roles needing 2+ years, across 3M+ postings',
                  tone: 'red',
                },
              ],
            },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 The catch',
              title: 'You need the job to get the job',
              text: 'When "entry-level" is redefined to require three years, the only ladder left runs through people you already know. That is precisely the advantage the students without connections do not have.',
            },
          ],
        },
        {
          tone: 'ink',
          face: 'worried',
          faceColor: '#F7AC1B',
          title: 'And then the trap closes.',
          tag: 'The long shadow',
          say: [
            '52% of graduates are underemployed a year after graduating.',
            <b key="b">73% of those who start underemployed are still underemployed ten years later.</b>,
            <em key="e">The first job is not a first step. It is a sorting hat.</em>,
          ],
          stage: [
            {
              type: 'trap',
              from: { value: '52%', label: 'underemployed a year after graduating' },
              to: { value: '73%', label: 'of them are still underemployed 10 years later' },
            },
          ],
          why: [
            {
              type: 'verdict',
              good: false,
              text: (
                <>
                  A bad first match is not a bad year. It compounds for a decade — which is why the intervention has to
                  happen <b>before</b> the first job, not after.
                </>
              ),
            },
          ],
        },
        {
          tone: 'orange',
          face: 'thinking',
          title: 'See the gap?',
          tag: 'The thesis',
          say: [
            'See the gap?',
            <>
              I was there, and <b>millions are still stuck</b>.
            </>,
            'That is why, I had to build —',
          ],
          stage: [
            {
              type: 'forks',
              items: [
                {
                  tag: 'University gives',
                  tagStyle: { background: 'var(--blue)', color: '#fff' },
                  text: 'Knowledge, in theory',
                },
                {
                  tag: 'Industry expects',
                  tagStyle: { background: 'var(--red)', color: '#fff' },
                  text: 'Experience applying it',
                },
                {
                  tag: 'Nobody owns',
                  tagStyle: { background: 'var(--ink)', color: 'var(--cream)' },
                  text: 'The bridge between them',
                  style: { background: 'var(--yellow)' },
                },
              ],
            },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 The opening',
              title: 'The bridge is unowned',
              text: 'Universities are not incentivised to build it and employers will not pay to train before hiring. That unowned middle is the product.',
            },
          ],
        },
        {
          tone: 'green',
          face: 'aha',
          title: 'Introducing FIRSTTRAIL.',
          tag: 'The product',
          say: [
            <>
              Introducing <b>&quot;FIRSTTRAIL&quot;</b>
            </>,
            'Where knowledge is applied and learning becomes experience.',
            <em key="e">Not a roleplay tool — a work simulation with a mentor beside you.</em>,
          ],
          stage: [
            {
              type: 'device',
              bar: 'firsttrail',
              screenStyle: { alignItems: 'center', padding: '36px 16px', gap: 14 },
              screen: (
                <>
                  <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(26px,3.6vw,44px)', lineHeight: 1 }}>
                    FIRSTTRAIL
                  </div>
                  <div className="dev-cap" style={{ background: 'var(--yellow)' }}>
                    Where knowledge is applied and learning becomes experience
                  </div>
                </>
              ),
            },
          ],
          why: [
            {
              type: 'verdict',
              good: true,
              text: (
                <>
                  A safe place to find out what you are suited for, and to get industry-grade exposure,{' '}
                  <b>before it counts</b>.
                </>
              ),
            },
          ],
        },
        {
          tone: 'yellow',
          face: 'happy',
          title: 'What it actually does.',
          tag: 'Offerings',
          say: [
            'Five things, in order of how a student meets them.',
            <>
              The last one is the point:{' '}
              <b>choose a path that suits their abilities and skills and head on with confidence.</b>
            </>,
          ],
          stage: [
            {
              type: 'offers',
              items: [
                'Explore roles before committing to one path with interactive role simulations with real work.',
                'Build confidence by presenting work with the team and getting in depth feedback.',
                'Get continuous guidance from a personal coach and stay updated on the trends.',
                'Every trail documented into a portfolio with proof.',
                'Choose a path that suits their abilities and skills and head on with confidence.',
              ],
            },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 Design stance',
              title: 'Supplement, never replace',
              text: 'Students keep working on their own projects. The platform is the safe room they come back to — to rehearse, to be reviewed, and eventually to outgrow.',
            },
          ],
        },
        {
          tone: 'blue',
          face: 'happy',
          title: 'And the student always wins.',
          tag: 'The flywheel',
          say: [
            'Let students get into a path where their skills are best suited and where their passion lies.',
            'And let knowledge be passed on…',
            'So educators can make informed decisions regarding curriculum based on students performance while the industry gets workforce that can do the job!',
          ],
          stage: [
            {
              type: 'wins',
              items: [
                {
                  who: 'student',
                  label: 'Student',
                  text: 'Gets into a path where their skills are best suited and where their passion lies.',
                },
                {
                  who: 'edu',
                  label: 'Educator',
                  text: 'Makes informed decisions regarding curriculum based on students performance.',
                },
                { who: 'industry', label: 'Industry', text: 'Gets a workforce that can do the job.' },
              ],
            },
          ],
          why: [
            {
              type: 'verdict',
              good: true,
              text: (
                <>
                  <b>And the student always wins!</b> Every other party only benefits downstream of that.
                </>
              ),
            },
          ],
        },
        {
          tone: 'purple',
          face: 'neutral',
          title: 'How I will know it worked.',
          tag: 'Success metrics',
          say: [
            <>
              The product succeeds for a student when they leave with <b>direction</b>, the <b>confidence</b> to act
              on it, and the <b>readiness</b> to engage the industry directly.
            </>,
            'Measured by survey and interview — not by time spent in the app.',
          ],
          stage: [
            {
              type: 'metrics',
              items: [
                {
                  name: 'Role Clarity',
                  how: "Student can name the role they want, explain why, and name the roles they've ruled out.",
                  measure: 'Survey before and after — % who move from unclear to clear',
                },
                {
                  name: 'Increased Confidence',
                  how: 'Student believes they can perform in that role.',
                  measure: 'Self-rated confidence, before and after — % showing an increase',
                },
                {
                  name: 'Industry Readiness',
                  how: 'Student understands what the work actually involves and can meet its expectations.',
                  measure: 'Survey and interview, corroborated by employer feedback',
                },
                {
                  name: 'Employment',
                  how: 'Student secures a job in the role they identified.',
                  measure: 'Placement records and follow-up interview',
                },
              ],
            },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 Deliberate omission',
              title: 'No engagement metrics',
              text: 'Time-in-app would reward a student who stays stuck. The first three measures are read within the programme; the fourth confirms whether they held true.',
            },
          ],
        },
      ],
      grade: {
        grade: '0→1',
        label: 'Stage',
        title: 'A gap I lived through, costed out in other people’s data.',
        body: 'This is a concept in validation, not a shipped product — so the honest claim is the argument, not the outcome. What I can defend: the problem is evidenced from four directions, the product maps onto each one, and success is defined before a single screen was designed.',
        tactics: [
          { label: 'Problem evidenced', hot: true },
          { label: 'Four stakeholders mapped' },
          { label: 'Success defined pre-build', hot: true },
          { label: 'Not yet validated with students' },
          { label: 'Sources pending citation' },
        ],
      },
    },
  },
};
