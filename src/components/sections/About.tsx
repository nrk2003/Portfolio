import { about, banners, beliefs } from '@/data/site';
import { Banner } from '@/components/ui/Banner';
import { Highlight } from '@/components/ui/Highlight';
import { PixelSmiley } from '@/components/graphics/PixelSmiley';

const delays = ['', ' d1', ' d2'];

export function About() {
  return (
    <section id="about" style={{ marginTop: 18 }} aria-labelledby="about-title">
      <Banner tone="yellow" id="about-title">
        {banners.about}
      </Banner>

      <div className="belief-grid">
        {beliefs.map((b, i) => (
          <div key={b.title} className={`belief bl-${i + 1} reveal${delays[i] ?? ''}`}>
            <div className="b-pill">
              <span className="n">{i + 1}</span> {b.pill}
            </div>
            <h3>{b.title}</h3>
            <p>{b.text}</p>
          </div>
        ))}
      </div>

      <div className="about-split reveal">
        <div className="about-photo">
          <PixelSmiley className="face" color="#F2EDE2" />
          <div className="loc">{about.location}</div>
        </div>
        <div className="about-copy">
          <h3>
            <Highlight title={about.headline} />
          </h3>
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="fact-row">
            {about.facts.map((f) => (
              <div key={f.l} className="fact">
                <div className="n">{f.n}</div>
                <div className="l">{f.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
