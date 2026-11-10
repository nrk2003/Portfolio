import Link from 'next/link';
import type { Project } from '@/types/project';
import { projects } from '@/data/projects';
import { Highlight } from '@/components/ui/Highlight';
import { ReadingProgress } from '@/components/interactions/ReadingProgress';
import { EscapeToProjects } from '@/components/interactions/EscapeToProjects';
import { SceneView } from './SceneView';
import { GradeCard } from './GradeCard';
import { ChapterView } from './ChapterView';

const cellStyle = { border: '1.5px solid var(--ink)', borderRadius: 7, background: 'var(--cream)' };

/** Fallback cover when a project has no custom cover content. */
function DefaultCover() {
  return (
    <div className="mock" aria-hidden="true">
      <div style={{ height: 9, borderRadius: 100, background: 'var(--ink)', width: '50%', marginBottom: 10 }} />
      <div
        style={{
          width: '100%',
          height: 110,
          border: '1.5px dashed var(--ink)',
          borderRadius: 10,
          display: 'grid',
          gridTemplateColumns: '1fr 2.3fr',
          gap: 10,
          padding: 10,
          background: '#fff',
        }}
      >
        <i style={cellStyle} />
        <i style={cellStyle} />
      </div>
    </div>
  );
}

export function CaseStudyView({ project, index, next }: { project: Project; index: number; next: Project }) {
  const cs = project.caseStudy;
  const pad = (n: number) => String(n).padStart(2, '0');
  const meta = [
    { k: 'Role', v: project.role },
    { k: 'Timeline', v: project.timeline },
    { k: 'Team', v: project.team },
    project.status ? { k: 'Status', v: project.status } : { k: 'Platform', v: project.platform ?? '—' },
  ];

  return (
    <div className="case-page">
      <EscapeToProjects />
      <div className="cs-frame">
        <header className="cs-top">
          <Link href="/#projects" className="back-btn">
            ← Back to projects
          </Link>
          <span className="cs-crumb">
            Case Study <em>{pad(index + 1)}</em>&nbsp; of {pad(projects.length)}
          </span>
          <ReadingProgress />
        </header>

        <main id="home" tabIndex={-1}>
          <div className="cs-hero">
            <div className="chip">{cs.chip}</div>
            <h1>
              <Highlight title={cs.title} />
            </h1>
            <p className="cs-lede">{cs.lede}</p>
            {cs.nda && (
              <div className="cs-nda">
                <span aria-hidden="true">🔒</span> Client anonymised under NDA — every visual here is a redrawn,
                greeked wireframe. No real product UI, copy or data is shown.
              </div>
            )}
            <dl className="cs-meta">
              {meta.map((m) => (
                <div key={m.k} className="m">
                  <dt className="k">{m.k}</dt>
                  <dd className="v">{m.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={`cs-cover fg-${cs.cover.tone}`}>
            <span className="pv-tag">{cs.cover.label}</span>
            <div>{cs.cover.content ?? <DefaultCover />}</div>
          </div>

          <div className="cs-body">
            {cs.body.format === 'scenes' ? (
              <>
                {cs.body.scenes.map((s, i) => (
                  <SceneView key={s.title} scene={s} index={i} />
                ))}
                {cs.body.grade && <GradeCard grade={cs.body.grade} />}
              </>
            ) : (
              cs.body.chapters.map((ch, i) => <ChapterView key={ch.title} chapter={ch} index={i} />)
            )}
          </div>
        </main>

        <nav className="cs-next" aria-label="Next case study">
          <div className="chip">Next story ϟ</div>
          <h2>
            <Link href={`/projects/${next.slug}`}>
              <Highlight title={next.caseStudy.title} />
            </Link>
          </h2>
          <div className="cs-next-actions">
            <Link href={`/projects/${next.slug}`} className="btn">
              Read next case study ↗
            </Link>
            <Link href="/#projects" className="btn ghost">
              Back to all projects
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
