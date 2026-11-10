import Link from 'next/link';
import type { Project } from '@/types/project';

/** Homepage project row. Visual colour cycles blue → green → purple by position, as in the original. */
export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { card } = project;
  const num = String(index + 1).padStart(2, '0');
  return (
    <article className="proj reveal" aria-labelledby={`proj-${project.slug}`}>
      <div className={`proj-visual pjv-${(index % 3) + 1}`} aria-hidden="true">
        <span className="big-num">{num}</span>
        <div className="mock">
          <div className="m-bar" />
          <div className="m-row">
            <div className="m-cell" />
            <div className="m-cell" />
            <div className="m-cell" />
          </div>
          <div className="m-wide">
            {card.bars.map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
      <div className="proj-info">
        <div className="kick">{card.kicker}</div>
        <h3 id={`proj-${project.slug}`}>{card.title}</h3>
        <p>{card.description}</p>
        <ul className="tags" aria-label="Disciplines">
          {card.tags.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <div>
          <Link href={`/projects/${project.slug}`} className="btn" aria-label={`Read the story: ${card.title}`}>
            Read the story ↗
          </Link>
        </div>
      </div>
    </article>
  );
}
