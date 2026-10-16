import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@website/content/projects";

export const metadata: Metadata = {
  title: "Projects — Rohit Khanduri",
  description:
    "Selected cloud architecture, platform engineering, and product work by Rohit Khanduri.",
};

export default function Projects() {
  return (
    <div className="ds-container py-16 md:py-20">
      <header className="max-w-prose">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          A selection of the cloud architecture, platform, and product work
          I&apos;ve led or built. Each case study describes the problem, my
          role, and the outcome.
        </p>
      </header>

      <ul className="mt-12 divide-y divide-border border-y border-border">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group flex flex-col gap-2 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold text-foreground group-hover:text-accent">
                  {project.title}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {project.role}
                </span>
              </div>
              <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
              <ul className="flex flex-wrap gap-2 pt-1">
                {project.technologies.slice(0, 6).map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
