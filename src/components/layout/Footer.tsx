import Link from "next/link";
import { secondaryNav } from "@website/content/navigation";
import { site } from "@website/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border bg-surface">
      <div className="ds-container flex flex-col gap-8 py-12 md:flex-row md:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">{site.name}</p>
          <p className="text-sm text-muted-foreground">{site.location}</p>
          <a
            href={`mailto:${site.email}`}
            className="inline-block text-sm text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            {site.email}
          </a>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
          <nav aria-label="Secondary" className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Pages
            </p>
            <ul className="space-y-2">
              {secondaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social" className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Elsewhere
            </p>
            <ul className="space-y-2">
              {site.socials.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="ds-container py-6 text-xs text-muted-foreground">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
