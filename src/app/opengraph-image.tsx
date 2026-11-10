import { hero, site } from '@/data/site';
import { ogSize, renderOgImage } from '@/lib/og-image';

export const alt = site.title;
export const size = ogSize;
export const contentType = 'image/png';

export default function Image() {
  return renderOgImage({ kicker: site.role, ...hero.headline });
}
