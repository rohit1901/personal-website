import Image from "next/image";
import Link from "next/link";
import type { ResumeSchema } from "@website/types";
import { site } from "@website/content/site";
import { getResumeImageUrl } from "@website/lib";
import { buttonVariants } from "@website/components/ui/button";
import { cn } from "@website/lib/utils";

/**
 * About page view. Uses the résumé summary when available but falls back to
 * website content so the page never renders empty.
 */
export function AboutView({ resume }: { resume?: ResumeSchema }) {
  const basics = resume?.basicInformation;
  const summary = basics?.summary;
  const image = basics?.image;

  return (
    <div className="space-y-14">
      <header className="max-w-prose">
        {image?.src && (
          <Image
            src={getResumeImageUrl(image.src)}
            alt={image.alt || basics?.name || "Profile photo"}
            width={image.width || 128}
            height={image.height || 128}
            className="mb-8 h-32 w-32 rounded-2xl object-cover"
          />
        )}
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About me
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">{site.role}</p>
        <p className="ds-prose mt-6">
          {summary ??
            `I'm an AWS-focused Cloud Architect based in ${site.location}. ${site.intro}`}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/projects" className={buttonVariants()}>
            See my work
          </Link>
          <a
            href={site.resume.en}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Résumé (EN)
          </a>
        </div>
      </header>

      <section>
        <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          What I work on
        </h2>
        <dl className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {site.capabilities.map((capability) => (
            <div key={capability.title}>
              <dt className="text-base font-medium text-foreground">
                {capability.title}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {capability.description}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Elsewhere
        </h2>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a
              href={`mailto:${site.email}`}
              className="text-sm text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              {site.email}
            </a>
          </li>
          {site.socials.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
