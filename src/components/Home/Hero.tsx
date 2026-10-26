import Image from "next/image";
import Link from "next/link";
import type { ResumeImage } from "@website/types";
import { site } from "@website/content/site";
import { getResumeImageUrl } from "@website/lib";
import { buttonVariants } from "@website/components/ui/button";
import { cn } from "@website/lib/utils";

/**
 * Homepage hero. Copy is local site content; the portrait comes from the
 * résumé backend when available and falls back to the bundled avatar, so the
 * section never renders empty if GraphQL is unreachable.
 */
export function Hero({ image }: { image?: ResumeImage }) {
  return (
    <section className="relative isolate overflow-hidden ds-container pt-20 pb-16 md:pt-28 md:pb-24">
      <div
        aria-hidden
        className="ds-aurora absolute -top-40 -left-40 -z-10 h-[36rem] w-[36rem] rounded-full blur-3xl"
      />

      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <p className="animate-fade-in-up text-sm font-medium text-accent">
            {site.name}
          </p>
          <p
            className="mt-1 animate-fade-in-up text-sm text-muted-foreground"
            style={{ animationDelay: "60ms" }}
          >
            {site.role}
          </p>

          <h1
            className="mt-6 max-w-3xl animate-fade-in-up text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl"
            style={{ animationDelay: "120ms" }}
          >
            <span className="ds-gradient-text">{site.headline}</span>
          </h1>

          <p
            className="ds-prose mt-6 animate-fade-in-up"
            style={{ animationDelay: "180ms" }}
          >
            {site.intro}
          </p>

          <div
            className="mt-8 flex animate-fade-in-up flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Link href={site.primaryCta.href} className={buttonVariants()}>
              {site.primaryCta.label}
            </Link>
            <Link
              href={site.secondaryCta.href}
              className={cn(buttonVariants({ variant: "secondary" }))}
            >
              {site.secondaryCta.label}
            </Link>
          </div>

          <ul
            className="mt-8 flex animate-fade-in-up flex-wrap gap-x-6 gap-y-2"
            style={{ animationDelay: "300ms" }}
          >
            {site.socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto lg:mx-0">
          <div
            aria-hidden
            className="ds-aurora absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
          />
          <div
            className="gradient-ring relative aspect-[4/5] w-60 animate-fade-in-up overflow-hidden rounded-2xl border border-border bg-surface shadow-xl sm:w-64 lg:w-72"
            style={{ animationDelay: "180ms" }}
          >
            <Image
              src={getResumeImageUrl(image?.src)}
              alt={image?.alt || site.name}
              fill
              priority
              quality={90}
              sizes="(min-width: 1024px) 18rem, (min-width: 640px) 16rem, 15rem"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
