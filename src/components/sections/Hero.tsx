import { hero } from '@/data/site';
import { Tunnel } from '@/components/graphics/Tunnel';
import { Highlight } from '@/components/ui/Highlight';

export function Hero() {
  return (
    <section className="panel hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="hero-chip">
          <span className="dot" aria-hidden="true" /> {hero.chip}
        </div>
        <h1 id="hero-title">
          <Highlight title={hero.headline} />
        </h1>
        <p>{hero.body}</p>
        <div className="hero-actions">
          <a href={hero.primary.href} className="btn">
            {hero.primary.label}
          </a>
          <a href={hero.secondary.href} className="btn ghost">
            {hero.secondary.label}
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <Tunnel />
      </div>
    </section>
  );
}
