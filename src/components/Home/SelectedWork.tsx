import Link from "next/link";
import type { Project } from "@website/types/project";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="gradient-ring flex animate-fade-in-up flex-col rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-muted hover:shadow-xl"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <h3 className="text-lg font-semibold text-foreground">
        <Link
          href={`/projects/${project.slug}`}
          className="rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="text-gradient">{project.title}</span>
        </Link>
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{project.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.technologies.slice(0, 6).map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function SelectedWork({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section id="work" className="ds-container scroll-mt-20 py-16">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Selected work
          </h2>
          <span aria-hidden className="gradient-bar mt-2 block" />
        </div>
        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          All projects →
        </Link>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
