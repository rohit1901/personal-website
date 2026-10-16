import { site } from "@website/content/site";

/**
 * Closing call-to-action band on the homepage. The `id="contact"` anchor is
 * provided by the shared footer, so this links there.
 */
export function ContactCta() {
  return (
    <section className="ds-container py-20">
      <div className="relative isolate overflow-hidden rounded-xl border border-border bg-surface p-8 md:p-12">
        <div
          aria-hidden
          className="ds-aurora absolute -top-24 -right-24 -z-10 h-72 w-72 rounded-full blur-3xl"
        />
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Let&apos;s build something{" "}
          <span className="text-gradient">reliable</span>.
        </h2>
        <p className="ds-prose mt-4">
          I&apos;m happy to talk cloud architecture, platform engineering, or a
          specific problem you&apos;re working through.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={`mailto:${site.email}`}
            className="text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            {site.email}
          </a>
          <a
            href={site.resume.en}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            Résumé (EN)
          </a>
          <a
            href={site.resume.de}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            Lebenslauf (DE)
          </a>
        </div>
      </div>
    </section>
  );
}
