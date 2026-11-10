import type { Project } from '@/types/project';
import { CardText, ChatLine, Glyph, Hotspot, KillBtn, Ln, MoodTag, PCard, Step } from '@/components/case-study/wireframe';

const editIcon = { background: 'var(--yellow)', color: 'var(--ink)' };

export const conversationalAi: Project = {
  slug: 'teaching-an-ai-to-change-its-mind',
  category: 'Conversational AI',
  summary:
    'A conversational-AI training platform had one problem: the avatar got emotionally stuck. The brief arrived as a solution — my job was to find the problem underneath it.',
  role: 'UX & Interaction Design',
  timeline: '~2 weeks',
  team: 'Me + design leads + client stakeholders',
  status: 'Ongoing — in feasibility validation',

  card: {
    kicker: 'Conversational AI ϟ Case Study',
    title: 'Teaching an AI to change its mind',
    description:
      'An AI avatar that got emotionally stuck. The brief arrived as a solution — my job was to find the problem underneath it.',
    tags: ['UX Design', 'Interaction Design', 'AI Product'],
    bars: [40, 75, 55, 92, 60],
  },

  caseStudy: {
    chip: 'Conversational AI ϟ Teardown',
    title: { text: 'Teaching an AI to', highlight: 'change its mind.' },
    lede: 'A conversational-AI training platform had one problem: the avatar got emotionally stuck. The brief arrived as a solution — my job was to find the problem underneath it.',
    nda: true,
    cover: {
      tone: 'a',
      label: 'AI Product Design',
      content: (
        <div style={{ textAlign: 'center', padding: '10px 20px' }}>
          <div
            style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(26px,3.4vw,42px)',
              lineHeight: 1.1,
              maxWidth: '20ch',
              margin: '0 auto',
            }}
          >
            A 12-scene teardown of one design decision
          </div>
          <div
            style={{
              display: 'inline-block',
              marginTop: 16,
              background: 'var(--cream)',
              border: '1.5px solid var(--ink)',
              borderRadius: 100,
              padding: '8px 18px',
              fontWeight: 700,
              fontSize: 12,
            }}
          >
            ⏱ 6 min read · 12 scenes · 6 principles
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
          title: 'Meet the avatar that cannot calm down.',
          tag: 'The problem',
          say: [
            'This is a platform where you rehearse hard conversations with an AI — angry customers, tough feedback, tense negotiations.',
            <>
              Watch what happens when the learner does <b>everything right</b>.
            </>,
            <em key="e">Spoiler: nothing happens.</em>,
          ],
          stage: [
            {
              type: 'device',
              bar: 'roleplay · live session',
              tight: true,
              screen: (
                <>
                  <ChatLine side="them" face="😠">
                    <MoodTag mood="angry">Angry</MoodTag>
                    <Ln w={95} />
                    <Ln w={70} />
                  </ChatLine>
                  <ChatLine side="me" face="🙂">
                    <Ln w={85} />
                  </ChatLine>
                  <ChatLine side="them" face="😠">
                    <MoodTag mood="angry">Angry</MoodTag>
                    <Ln w={90} />
                  </ChatLine>
                  <ChatLine side="me" face="🙂">
                    <Ln w={70} />
                  </ChatLine>
                  <ChatLine side="them" face="😠">
                    <MoodTag mood="angry">Angry</MoodTag>
                    <Ln w={95} />
                    <Ln w={55} />
                  </ChatLine>
                  <Hotspot n="1" style={{ top: '8%', right: '10%' }} />
                </>
              ),
            },
            { type: 'caption', text: 'Greeked — five turns in, the mood never moves' },
          ],
          why: [
            {
              type: 'note',
              n: '1',
              text: 'The learner showed empathy, apologised, offered a fix. The avatar stayed angry through all of it.',
            },
            {
              type: 'verdict',
              good: false,
              text: 'No emotional movement means no feedback. The learner cannot tell what worked — so they stop trying.',
            },
          ],
        },
        {
          tone: 'orange',
          face: 'thinking',
          title: 'Why it got stuck.',
          tag: 'Diagnosis',
          say: [
            <>
              The scenario was the <b>only context</b> the model had. One paragraph, read fresh every single turn.
            </>,
            'No memory of an arc — because there was no arc to remember.',
          ],
          stage: [
            {
              type: 'device',
              bar: 'what the model sees',
              screen: (
                <>
                  <PCard n="S">
                    <Ln w={85} />
                    <Ln w={55} />
                  </PCard>
                  <Glyph>↓ every turn ↓</Glyph>
                  <PCard n="AI" variant="bad">
                    <MoodTag mood="angry">Angry</MoodTag>
                  </PCard>
                  <Glyph>↺</Glyph>
                </>
              ),
            },
            { type: 'caption', text: 'One scenario in, one emotion out, forever' },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 Principle',
              title: 'Mental Models',
              text: 'People carry an internal model of how conversations behave — tension rises, then eases when you say the right thing. When a system contradicts that model, users do not adapt to it. They conclude it is broken and disengage.',
            },
          ],
        },
        {
          tone: 'yellow',
          face: 'surprised',
          title: 'The brief arrived pre-solved.',
          tag: 'The ask',
          say: [
            'The client had already reasoned their way to an answer and handed it over:',
            <b key="b">&quot;Add an AI step that splits the conversation into phases.&quot;</b>,
            'That is a solution. I needed the problem under it.',
          ],
          stage: [
            {
              type: 'device',
              bar: 'the brief',
              screen: (
                <>
                  <Ln w={95} />
                  <Ln w={85} />
                  <PCard style={{ borderWidth: 2 }}>
                    <Ln w={70} blur={false} style={{ background: 'var(--ink)' }} />
                    <Ln w={40} />
                  </PCard>
                  <Ln w={90} />
                  <Ln w={55} />
                  <Hotspot n="1" style={{ top: '40%', left: -11 }} />
                </>
              ),
            },
            { type: 'caption', text: 'Greeked — the one line that carried two different needs' },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 Principle',
              title: 'Problem Framing',
              text: "A brief written as a solution hides the constraint that produced it. Accepting it as written means designing to someone else's first guess rather than to the actual problem.",
            },
            {
              type: 'note',
              n: '1',
              text: 'Two needs were tangled in one sentence — and they pull in opposite directions.',
            },
          ],
        },
        {
          tone: 'purple',
          face: 'thinking',
          title: 'Two needs pulling apart.',
          tag: 'The tension',
          say: [
            <>
              <b>One:</b> stop the AI looping.
            </>,
            <>
              <b>Two:</b> let creators shape and trust the result.
            </>,
            'Hand the AI full control and creators lose theirs. Hand creators full control and the arc falls apart. The whole project lives in that gap.',
          ],
          stage: [
            {
              type: 'forks',
              items: [
                {
                  tag: 'AI decides',
                  tagStyle: { background: 'var(--blue)', color: '#fff' },
                  text: 'Coherent arc · creator has no say',
                },
                { glyph: '⟷', size: 20 },
                {
                  tag: 'Human decides',
                  tagStyle: { background: 'var(--orange)', color: '#fff' },
                  text: 'Full control · arc breaks silently',
                },
              ],
            },
            { type: 'caption', text: 'The axis every decision had to sit on' },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 Principle',
              title: 'Automation vs. Autonomy',
              text: 'Automation is only accepted where the user keeps a meaningful veto. The design question is never "how much should the AI do" — it is "where does the human get to disagree, and do they have enough information to."',
            },
          ],
        },
        {
          tone: 'blue',
          face: 'neutral',
          title: 'Where the step belongs.',
          tag: 'Information architecture',
          say: [
            'By step six, the AI already knows the persona, the scenario, the context and the learning goals.',
            'That is the first moment it can draft something worth reading.',
            <em key="e">Any earlier and it is guessing.</em>,
          ],
          stage: [
            {
              type: 'device',
              bar: 'customize roleplay',
              tight: true,
              screen: (
                <>
                  <div className="stepper">
                    <Step n="1">Persona</Step>
                    <Step n="2">Scenario</Step>
                    <Step n="3">Context for the AI</Step>
                    <Step n="4">Learning goals</Step>
                    <Step n="5">Documents</Step>
                    <Step n="6" on>
                      Conversation phases
                    </Step>
                    <Step n="7">Review &amp; publish</Step>
                  </div>
                  <Hotspot n="1" style={{ top: '69%', right: '4%' }} />
                </>
              ),
            },
            { type: 'caption', text: 'Late enough to be informed, early enough to be edited' },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 Principle',
              title: 'Progressive Disclosure',
              text: 'Complex setup survives when each step only asks for what the previous steps have earned. Placing generation last turns a 40-field form into a draft the user reacts to instead of authors.',
            },
            {
              type: 'note',
              n: '1',
              text: (
                <>
                  Generation sits <em>before</em> review, never after — so the creator always gets the last word.
                </>
              ),
            },
          ],
        },
        {
          tone: 'red',
          face: 'surprised',
          title: 'Then I found the hole.',
          tag: 'Failure mode',
          say: [
            'Creators can edit any phase. So here is the sequence nobody had named:',
            'Edit phase 2. Close the tab. Publish.',
            <>
              Phase 3&apos;s exit condition now contradicts phase 2 — and <b>nobody finds out</b> until a learner is
              mid-roleplay in a scenario that argues with itself.
            </>,
          ],
          stage: [
            {
              type: 'device',
              bar: 'conversation phases',
              tight: true,
              screen: (
                <>
                  <PCard n="1">
                    <Ln w={85} />
                    <Ln w={55} />
                  </PCard>
                  <PCard n="2" variant="good">
                    <MoodTag mood="calm">Edited · calm</MoodTag>
                    <Ln w={70} />
                  </PCard>
                  <PCard n="3" variant="bad">
                    <MoodTag mood="angry">Expects · angry</MoodTag>
                    <Ln w={85} />
                  </PCard>
                  <PCard n="4" variant="dim">
                    <Ln w={70} />
                  </PCard>
                  <Hotspot n="1" style={{ top: '33%', left: -11 }} />
                  <Hotspot n="2" style={{ top: '55%', left: -11 }} />
                </>
              ),
            },
            { type: 'caption', text: 'Greeked — phase 2 was softened, phase 3 never got the memo' },
          ],
          why: [
            { type: 'note', n: '1', text: 'The creator softens phase 2 to "calm".' },
            {
              type: 'note',
              n: '2',
              text: 'Phase 3 still waits for an angry customer to de-escalate. It can never trigger.',
            },
            {
              type: 'principle',
              badge: '📌 Principle',
              title: 'Error Prevention · Nielsen #5',
              text: 'The best error message is the one never needed. Where a mistake is silent and only surfaces downstream, prevention has to be designed in — detection after publish is already too late.',
            },
          ],
        },
        {
          tone: 'green',
          face: 'happy',
          title: 'The safety net.',
          tag: 'The core decision',
          say: [
            <>
              So the AI re-reads your edits and flags the contradiction <b>before</b> you publish.
            </>,
            'Three ways out: accept the fix, edit it yourself, or ignore it entirely.',
            'Still your call. You just cannot make it blind.',
          ],
          stage: [
            {
              type: 'device',
              bar: 'review your edits',
              tight: true,
              screen: (
                <>
                  <PCard n="1">
                    <Ln w={85} />
                  </PCard>
                  <PCard n="2" variant="bad">
                    <Ln w={90} />
                    <Ln w={55} />
                  </PCard>
                  <div
                    style={{
                      border: '1.5px dashed var(--red)',
                      borderRadius: 10,
                      padding: '9px 11px',
                      background: 'rgba(227,49,42,.07)',
                      display: 'flex',
                      gap: 9,
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span style={{ flex: 1, fontSize: 11, fontWeight: 700, minWidth: 130 }}>
                      ⚠ AI found an inconsistency in your edit
                    </span>
                    <span style={{ display: 'flex', gap: 5 }}>
                      <KillBtn style={{ background: 'var(--ink)', color: 'var(--cream)' }}>Accept fix</KillBtn>
                      <KillBtn>Edit</KillBtn>
                      <KillBtn>Ignore</KillBtn>
                    </span>
                  </div>
                  <PCard n="3">
                    <Ln w={70} />
                  </PCard>
                  <Hotspot n="1" style={{ top: '46%', right: -11 }} />
                </>
              ),
            },
            { type: 'caption', text: 'Greeked — flag, then three exits' },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 Principle',
              title: 'User Control & Freedom · Nielsen #3',
              text: 'A guardrail that cannot be overruled becomes a wall users route around. Offering "ignore" alongside "accept" keeps authority with the human while making the consequence visible.',
            },
            {
              type: 'verdict',
              good: true,
              text: 'This reframes human and AI as collaborators with a safety net between them — not a handoff where whoever touched it last wins.',
            },
            {
              type: 'note',
              n: '1',
              text: 'The risk surfaced in an internal peer review. Recognising what it meant for the flow, and redesigning around it, was my contribution.',
            },
          ],
        },
        {
          tone: 'orange',
          face: 'thinking',
          title: 'Removing the buttons everyone expects.',
          tag: 'Restraint',
          say: [
            'Add a phase. Reorder. Delete.',
            <>
              Every power user wants these three. I argued to <b>remove all of them</b> — and the client came with me.
            </>,
          ],
          stage: [
            {
              type: 'device',
              bar: 'phase controls',
              screenStyle: { alignItems: 'center', padding: '30px 16px' },
              screen: (
                <>
                  <div className="killrow">
                    <KillBtn killed>+ Add phase</KillBtn>
                    <KillBtn killed>↕ Reorder</KillBtn>
                    <KillBtn killed>🗑 Delete</KillBtn>
                  </div>
                  <div style={{ height: 10 }} />
                  <div className="killrow">
                    <KillBtn style={{ background: 'var(--green)', color: '#fff' }}>✎ Edit within a phase</KillBtn>
                  </div>
                </>
              ),
            },
            { type: 'caption', text: 'Three affordances cut, one kept' },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 Principle',
              title: "Hick's Law",
              text: 'Every added control costs decision time for every user, including those who never touch it. A control that can silently corrupt the output costs more than it returns.',
            },
            {
              type: 'note',
              n: '1',
              text: 'Reordering forces the AI to re-reason the whole arc. Rewriting generated structure by hand risks drifting the entire scenario — and live re-generation was genuinely hard to implement.',
            },
            {
              type: 'verdict',
              good: true,
              text: 'Fewer options, more trust. Creators can edit within a phase; they cannot fracture the arc.',
            },
          ],
        },
        {
          tone: 'purple',
          face: 'aha',
          title: '"Creator" turned out to be two people.',
          tag: 'The reframe',
          say: [
            <>
              I stopped asking <em>how</em> editing should work and asked <b>who</b> was editing.
            </>,
            'A trainer building a graded exercise. And a learner who just wants to practise a different angle.',
            'Same button. Opposite needs. The learner would have overwritten the master copy everyone else depends on.',
          ],
          stage: [
            {
              type: 'forks',
              items: [
                { tag: 'Trainer', tagStyle: { background: 'var(--yellow)' }, text: 'Owns the master → edits it directly' },
                {
                  tag: 'Learner',
                  tagStyle: { background: 'var(--purple)' },
                  text: 'Duplicates → edits their own copy',
                },
                {
                  tag: 'Unsure creator',
                  tagStyle: { background: 'var(--green)', color: '#fff' },
                  text: 'Publishes → practises → edits after',
                },
              ],
            },
            { type: 'caption', text: 'Three paths, one protected master' },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 Principle',
              title: 'Principle of Least Astonishment',
              text: "A shared object that silently changes for everyone when one person edits it is the most expensive surprise an app can deliver. Duplicate-to-edit makes the blast radius match the user's expectation of it.",
            },
            {
              type: 'note',
              n: '1',
              text: 'The third path only surfaced because I had mapped the whole platform: sometimes the creator does not know the right phases until they have felt them.',
            },
          ],
        },
        {
          tone: 'yellow',
          face: 'happy',
          title: 'The thirty-second win.',
          tag: 'Craft',
          say: [
            'Final polish pass. An edit icon on every row of the Review & Publish screen.',
            'Trivial to build. Removes a hunt back through six steps.',
          ],
          stage: [
            {
              type: 'device',
              bar: 'review & publish',
              tight: true,
              screen: (
                <>
                  {([70, 90, 55, 85] as const).map((w) => (
                    <PCard key={w} n="✎" nStyle={editIcon} numAfter>
                      <Ln w={w} />
                    </PCard>
                  ))}
                  <Hotspot n="1" style={{ top: '6%', right: -11 }} />
                </>
              ),
            },
            { type: 'caption', text: 'Greeked — jump back in from anywhere' },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 Principle',
              title: 'Recognition Over Recall · Nielsen #6',
              text: 'Make the action visible at the point of doubt. A creator scanning a summary should not have to remember which step held the thing they want to change.',
            },
          ],
        },
        {
          tone: 'green',
          face: 'happy',
          title: 'Then the scope grew.',
          tag: 'Trust signal',
          say: [
            'The client was impressed enough to hand me four more flows.',
            <>
              Because I had mapped the whole platform before touching a frame, I kept seeing{' '}
              <b>the same flaw wearing different costumes</b>.
            </>,
          ],
          stage: [
            {
              type: 'device',
              bar: 'four more flows',
              screenStyle: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9 },
              screen: (
                <>
                  <PCard>
                    <Ln w={85} />
                    <Ln w={55} />
                  </PCard>
                  <PCard>
                    <Ln w={70} />
                    <Ln w={85} />
                  </PCard>
                  <PCard>
                    <Ln w={90} />
                    <Ln w={40} />
                  </PCard>
                  <PCard>
                    <Ln w={55} />
                    <Ln w={70} />
                  </PCard>
                </>
              ),
            },
            { type: 'caption', text: 'Upload instructions · adaptive edit · share anytime · hints' },
          ],
          why: [
            {
              type: 'verdict',
              good: false,
              text: (
                <>
                  <b>The root cause, four times over:</b> the product was built for a happy path. Real users deviate —
                  and the flow had no answer when they did.
                </>
              ),
            },
            {
              type: 'note',
              n: '1',
              text: 'Hints were the hardest. Every conditional trigger made the flow more fragile, so the answer was a subtle button that is simply always there.',
            },
          ],
        },
        {
          tone: 'cream',
          face: 'neutral',
          title: 'Where it actually stands.',
          tag: 'Honest outcome',
          say: [
            'It has not shipped yet. I would rather tell you what is true than invent a number.',
            'The signals that genuinely exist today are below. The metrics go here once it is live.',
          ],
          stage: [
            {
              type: 'device',
              bar: 'status',
              tight: true,
              screen: (
                <>
                  <PCard n="✓" variant="good">
                    <CardText>Scope expanded mid-project, on client request</CardText>
                  </PCard>
                  <PCard n="✓" variant="good">
                    <CardText>Driven by real customer feedback, customers in the pipeline</CardText>
                  </PCard>
                  <PCard n="✓" variant="good">
                    <CardText>A further module already secured</CardText>
                  </PCard>
                  <PCard n="…">
                    <CardText>In feasibility validation · UI design is the agreed next phase</CardText>
                  </PCard>
                </>
              ),
            },
            { type: 'caption', text: 'No impact metrics yet — the build has not shipped' },
          ],
          why: [
            {
              type: 'principle',
              badge: '📌 What I would do next',
              title: 'The backlog I left behind',
              text: "Mapping the whole platform left me with a list of UX inconsistencies outside this project's scope. Some small, some structural. That is the work I would most want to pick up — once you have seen the whole system, you cannot un-see where its seams are.",
            },
          ],
        },
      ],
      grade: {
        grade: 'A−',
        label: 'My own take',
        title: 'A solution-shaped brief went in. A reframed problem came back.',
        body: 'A failure mode caught before it could ship, a deliberate reduction in flexibility for the sake of coherence, and a flow architecture that finally accounts for how people actually use the product. Marked down only because none of it is live yet — until it ships, this is a well-argued hypothesis.',
        tactics: [
          { label: 'Error Prevention', hot: true },
          { label: 'Progressive Disclosure' },
          { label: "Hick's Law" },
          { label: 'User Control & Freedom', hot: true },
          { label: 'Recognition Over Recall' },
          { label: 'Least Astonishment' },
        ],
      },
    },
  },
};
