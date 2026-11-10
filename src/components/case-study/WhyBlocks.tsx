import type { WhyBlock } from '@/types/project';

/** Right column of a scene: numbered notes, verdicts and design principles. */
export function WhyBlockView({ block }: { block: WhyBlock }) {
  switch (block.type) {
    case 'note':
      return (
        <div className="note">
          <span className="nn">
            {block.n}
          </span>
          <p>{block.text}</p>
        </div>
      );
    case 'verdict':
      return (
        <div className={`verdict ${block.good ? 'good' : 'bad'}`}>
          <span className="vi" aria-hidden="true">
            {block.good ? '✓' : '✕'}
          </span>
          <span className="sr-only">{block.good ? 'Works: ' : 'Problem: '}</span>
          <div>{block.text}</div>
        </div>
      );
    case 'principle':
      return (
        <div className="principle">
          <span className="pr-badge">{block.badge}</span>
          <h3>{block.title}</h3>
          <p>{block.text}</p>
        </div>
      );
  }
}
