import { articles, banners } from '@/data/site';
import { Banner } from '@/components/ui/Banner';

export function Writing() {
  return (
    <section id="writing" style={{ marginTop: 18 }} aria-labelledby="writing-title">
      <Banner tone="green" id="writing-title">
        {banners.writing}
      </Banner>
      <div className="article-list reveal">
        {articles.map((a, i) => {
          const inner = (
            <>
              <span className="a-num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
              </div>
              <div className="a-meta">
                <b>
                  <span>{a.topic}</span>
                </b>
                {a.readTime}
              </div>
            </>
          );
          // Articles without a published URL render as plain rows (the original used href="#").
          return a.href ? (
            <a key={a.title} href={a.href} className="article">
              {inner}
            </a>
          ) : (
            <article key={a.title} className="article">
              {inner}
            </article>
          );
        })}
      </div>
    </section>
  );
}
