import { banners, playground, type PlayArt } from '@/data/site';
import { Banner } from '@/components/ui/Banner';
import { PixelSmiley } from '@/components/graphics/PixelSmiley';
import { PixelScatter } from '@/components/graphics/PixelScatter';

function Art({ art }: { art: PlayArt }) {
  switch (art) {
    case 'ball':
      return (
        <div className="pg-art" aria-hidden="true">
          <div className="ball" />
        </div>
      );
    case 'pixels':
      return (
        <div className="pg-art px-grid-holder" aria-hidden="true">
          <div className="px-grid">
            <PixelScatter count={14} cols={10} rows={7} cell={16} className="px-cell" seed={7} />
          </div>
        </div>
      );
    case 'cursor':
      return (
        <div className="pg-art" aria-hidden="true">
          <div className="cursor" />
        </div>
      );
    case 'eq':
      return (
        <div className="pg-art" aria-hidden="true">
          <div className="eq">
            {Array.from({ length: 7 }, (_, i) => (
              <i key={i} />
            ))}
          </div>
        </div>
      );
    case 'smiley':
      return <PixelSmiley className="smile-mini" color="#F7AC1B" />;
    case 'type':
      return (
        <div className="pg-art" aria-hidden="true">
          <div className="aa">Aa</div>
        </div>
      );
  }
}

export function Playground() {
  return (
    <section id="playground" style={{ marginTop: 18 }} aria-labelledby="playground-title">
      <Banner tone="purple" id="playground-title">
        {banners.playground}
      </Banner>
      <div className="play-wrap reveal">
        <ul className="play-grid">
          {playground.map((item, i) => (
            <li key={item.title} className={`play-card pg-${i + 1}`}>
              <Art art={item.art} />
              <h3>{item.title}</h3>
              <small>{item.kind}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
