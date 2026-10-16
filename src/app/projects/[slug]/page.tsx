import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@website/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} — Rohit Khanduri`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="ds-container py-16 md:py-20">
      <Link
        href="/projects"
        className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
      >
        ← All projects
      </Link>

      <header className="mt-8 max-w-prose">
        <p className="text-sm text-accent">{project.role}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            Visit project →
          </a>
        )}
      </header>

      <div className="mt-12 grid gap-12 md:grid-cols-[2fr_1fr]">
        <section>
          <h2 className="text-lg font-semibold text-foreground">What I did</h2>
          <ul className="mt-4 space-y-3">
            {project.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="max-w-prose text-sm leading-relaxed text-muted-foreground"
              >
                {outcome}
              </li>
            ))}
          </ul>
        </section>

        <aside>
          <h2 className="text-lg font-semibold text-foreground">
            Technologies
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
}
