import type { Scene } from '@/types/project';
import { PixelFace } from '@/components/graphics/PixelSmiley';
import { StageBlockView } from './StageBlocks';
import { WhyBlockView } from './WhyBlocks';

export function SceneView({ scene, index }: { scene: Scene; index: number }) {
  const num = String(index + 1).padStart(2, '0');
  const headingId = `scene-${num}`;
  return (
    <section className={`scene sc-${scene.tone}`} aria-labelledby={headingId}>
      <div className="scene-head">
        <span className="sc-num" aria-hidden="true">
          {num}
        </span>
        <h2 id={headingId}>{scene.title}</h2>
        {scene.tag && <span className="sc-tag">{scene.tag}</span>}
      </div>
      <div className="scene-grid">
        <div className="narrator">
          <div className="avatar" aria-hidden="true">
            <PixelFace expression={scene.face} color={scene.faceColor} />
          </div>
          <div className="bubble">
            {scene.say.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
        <div className="stage">
          {scene.stage.map((b, i) => (
            <StageBlockView key={i} block={b} />
          ))}
        </div>
        <div className="why">
          {scene.why.map((b, i) => (
            <WhyBlockView key={i} block={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
