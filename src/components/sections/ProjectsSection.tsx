import { banners } from '@/data/site';
import { projects } from '@/data/projects';
import { Banner } from '@/components/ui/Banner';
import { ProjectCard } from '@/components/projects/ProjectCard';

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <Banner tone="red" id="projects-title">
        {banners.projects}
      </Banner>
      <div className="proj-grid">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
