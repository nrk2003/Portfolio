import type { StageBlock } from '@/types/project';

function Legend() {
  return (
    <div className="gv-legend">
      <span>
        <i className="claim" aria-hidden="true" /> What institutions report or provide
      </span>
      <span>
        <i className="reality" aria-hidden="true" /> What students actually experience
      </span>
    </div>
  );
}

/** Centre column of a scene: device wireframes and data visualisations. */
export function StageBlockView({ block }: { block: StageBlock }) {
  switch (block.type) {
    case 'device':
      return (
        <div className="device">
          <div className="dev-bar">
            <i aria-hidden="true" />
            <i aria-hidden="true" />
            <i aria-hidden="true" />
            <span>{block.bar}</span>
          </div>
          <div className={`dev-screen${block.tight ? ' tight' : ''}`} style={block.screenStyle}>
            {block.screen}
          </div>
        </div>
      );

    case 'caption':
      return (
        <div className="dev-cap" style={block.style}>
          {block.text}
        </div>
      );

    case 'forks':
      return (
        <div className="forks">
          {block.items.map((item, i) =>
            'glyph' in item ? (
              <div
                key={i}
                style={{ textAlign: 'center', fontFamily: 'var(--display)', fontSize: item.size ?? 15 }}
                aria-hidden="true"
              >
                {item.glyph}
              </div>
            ) : (
              <div key={i} className="fork" style={item.style}>
                <span className="ft" style={item.tagStyle}>
                  {item.tag}
                </span>{' '}
                {item.text}
              </div>
            ),
          )}
        </div>
      );

    case 'stats':
      return (
        <div className="statrow">
          {block.items.map((s) => (
            <div key={s.value + s.label} className={`stat-tile st-${s.tone}`}>
              <div className="st-n">{s.value}</div>
              <div className="st-l">{s.label}</div>
            </div>
          ))}
        </div>
      );

    case 'bars':
      return (
        <figure className="viz">
          <figcaption>
            <div className="viz-title">{block.title}</div>
            <div className="viz-sub">{block.sub}</div>
          </figcaption>
          {block.rows.map((r) => (
            <div key={r.label} className="gv-row">
              <div>
                <span className="gv-label">{r.label}</span>
                <div
                  className="gv-track"
                  role="meter"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={r.value}
                  aria-label={r.label}
                >
                  <span className={`gv-fill ${r.kind}`} style={{ width: `${r.value}%` }} />
                </div>
              </div>
              <div className="gv-val">{r.value}%</div>
            </div>
          ))}
          <Legend />
        </figure>
      );

    case 'trap':
      return (
        <div className="trapviz">
          <div className="trap-stage">
            <div className="ts-n">{block.from.value}</div>
            <div className="ts-l">{block.from.label}</div>
          </div>
          <div className="trap-arrow" aria-hidden="true">
            →
          </div>
          <div className="trap-stage dark">
            <div className="ts-n">{block.to.value}</div>
            <div className="ts-l">{block.to.label}</div>
          </div>
        </div>
      );

    case 'offers':
      return (
        <ol className="offergrid">
          {block.items.map((text, i) => (
            <li key={text} className={`offer-card oc-${(i % 5) + 1}`}>
              <span className="oc-n" aria-hidden="true">
                {i + 1}
              </span>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      );

    case 'wins':
      return (
        <div className="winstri">
          {block.items.map((w) => (
            <div key={w.label} className="win-card">
              <span className={`wc-tag wc-${w.who}`}>{w.label}</span>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      );

    case 'metrics':
      return (
        <div className="metricgrid">
          {block.items.map((m) => (
            <div key={m.name} className="metric-row">
              <div className="mr-name">{m.name}</div>
              <div className="mr-how">
                {m.how}
                <em>{m.measure}</em>
              </div>
            </div>
          ))}
        </div>
      );
  }
}
