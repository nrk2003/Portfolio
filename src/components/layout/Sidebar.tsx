import { nav, site } from '@/data/site';
import { MaybeLink } from '@/components/ui/MaybeLink';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <a href="#home" className="wordmark">
        {site.name}
        <small>{site.role}</small>
      </a>
      <nav className="side-nav" aria-label="Sections">
        {nav.map((item) => (
          <a key={item.href} href={item.href} className={`nav-card nc-${item.tone}`}>
            <div className="top">
              <span aria-hidden="true">{item.num}</span>
              <span className="arr" aria-hidden="true">
                ↗
              </span>
            </div>
            <div className="lbl">{item.label}</div>
          </a>
        ))}
      </nav>
      <a href="#contact" className="nav-cta">
        Let&apos;s talk
      </a>
      <div className="side-foot">
        <MaybeLink href={site.socials.linkedin} className="pill" label="LinkedIn">
          in
        </MaybeLink>
        <MaybeLink href={site.socials.dribbble} className="pill" label="Dribbble">
          Ⓓ
        </MaybeLink>
        <MaybeLink href={`mailto:${site.email}`} className="pill" label="Email">
          ✉
        </MaybeLink>
      </div>
    </aside>
  );
}
