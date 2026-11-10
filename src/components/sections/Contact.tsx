import { contact, site } from '@/data/site';
import { PixelScatter } from '@/components/graphics/PixelScatter';
import { MaybeLink } from '@/components/ui/MaybeLink';

export function Contact() {
  return (
    <>
      <section className="panel cta-panel" id="contact" style={{ marginTop: 18 }} aria-labelledby="contact-title">
        <div className="chip">{contact.chip}</div>
        <h2 id="contact-title">{contact.headline}</h2>
        <a href={`mailto:${site.email}`} className="btn">
          {contact.cta}
        </a>
        <div className="pixel-floor" aria-hidden="true">
          <PixelScatter count={46} cols={50} rows={7} cell={26} className="px-confetti" seed={26} />
          <div className="giant">{site.name}</div>
          <div className="giant g-right">{contact.year}</div>
        </div>
      </section>

      <footer className="foot-row">
        <span>{contact.footnote}</span>
        <div className="links">
          <MaybeLink href={site.socials.linkedin}>LinkedIn</MaybeLink>
          <MaybeLink href={site.socials.dribbble}>Dribbble</MaybeLink>
          <MaybeLink href={site.socials.github}>GitHub</MaybeLink>
          <MaybeLink href={`mailto:${site.email}`}>Email</MaybeLink>
        </div>
      </footer>
    </>
  );
}
