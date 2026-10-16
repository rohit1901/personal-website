import Link from "next/link";
import { site } from "@website/content/site";

/**
 * Short "how I work" section grounded in the verified résumé skill groups.
 */
export function Capabilities() {
  return (
    <section className="ds-container py-16">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            What I do
          </h2>
          <span aria-hidden className="gradient-bar mt-2 block" />
        </div>
        <Link
          href="/about"
          className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          More about me →
        </Link>
      </div>

      <dl className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
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
  );
}
