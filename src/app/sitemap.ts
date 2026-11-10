import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { getSiteUrl } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl().origin;
  return [
    { url: `${base}/`, changeFrequency: 'monthly', priority: 1 },
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
