import { getProject, projects } from '@/data/projects';
import { ogSize, renderOgImage } from '@/lib/og-image';

export const size = ogSize;
export const contentType = 'image/png';
export const alt = 'Case study by nrk.';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return renderOgImage({ kicker: 'Case Study', text: 'nrk.', highlight: 'Product Designer' });
  return renderOgImage({ kicker: `${project.category} · Case Study`, ...project.caseStudy.title });
}

