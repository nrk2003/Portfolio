import type { Chapter, ChapterBlock } from '@/types/project';

function Block({ block }: { block: ChapterBlock }) {
  switch (block.type) {
    case 'p':
      return <p>{block.text}</p>;
    case 'figure':
      return (
        <figure className={`cs-figure fg-${block.tone}`}>
          <div className="wire" aria-hidden="true">
            <i />
            <i />
          </div>
          <figcaption className="fig-note">{block.note}</figcaption>
        </figure>
      );
    case 'quote':
      return (
        <blockquote className="callout" data-label={block.label}>
          {block.text}
        </blockquote>
      );
    case 'insights':
      return (
        <div className="insight-grid">
          {block.items.map((ins, i) => (
            <div key={ins.title} className="insight">
              <span className="i-num">Insight {String(i + 1).padStart(2, '0')}</span>
              <h3>{ins.title}</h3>
              <p>{ins.text}</p>
            </div>
          ))}
        </div>
      );
    case 'outcomes':
      return (
        <div className="outcome-band">
          {block.items.map((o) => (
            <div key={o.label} className="outcome">
              <div className="o-n">
                {o.value}
                {o.unit && <small>{o.unit}</small>}
              </div>
              <div className="o-l">{o.label}</div>
            </div>
          ))}
        </div>
      );
  }
}

export function ChapterView({ chapter, index }: { chapter: Chapter; index: number }) {
  return (
    <section className="cs-chapter">
      <div className={`chapter-banner ch-${chapter.tone}`}>
        <span className="cn" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2>{chapter.title}</h2>
        <span className="dd" aria-hidden="true">
          ↓↓
        </span>
      </div>
      <div className="chapter-content">
        {chapter.blocks.map((b, i) => (
          <Block key={i} block={b} />
        ))}
      </div>
    </section>
  );
}
