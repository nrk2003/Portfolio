import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getNextProject, getProject, getProjectIndex, plainTitle, projects } from '@/data/projects';
import { CaseStudyView } from '@/components/case-study/CaseStudyView';
import '@/styles/case-study.css';

type Params = { slug: string };

/** Every case study is pre-rendered at build time; unknown slugs 404. */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = plainTitle(project);
  const description = project.caseStudy.lede;
  const url = `/projects/${project.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: 'article', title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <CaseStudyView project={project} index={getProjectIndex(slug)} next={getNextProject(slug)} />;
}
