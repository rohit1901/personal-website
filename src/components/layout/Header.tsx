"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { primaryNav } from "@website/content/navigation";
import { site } from "@website/content/site";
import { ThemeToggle } from "@website/components/layout/ThemeToggle";
import { cn } from "@website/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 block h-px w-full bg-gradient-accent opacity-40"
      />
      <div className="ds-container flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(pathname, item.href) ? "page" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive(pathname, item.href)
                  ? "text-foreground font-medium"
                  : "text-muted-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.resume.en}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Résumé
          </a>
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <HiOutlineX className="h-5 w-5" aria-hidden />
            ) : (
              <HiOutlineMenu className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-border bg-background md:hidden"
        >
          <ul className="ds-container flex flex-col py-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={
                    isActive(pathname, item.href) ? "page" : undefined
                  }
                  className={cn(
                    "block rounded-md px-3 py-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive(pathname, item.href)
                      ? "text-foreground font-medium"
                      : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.resume.en}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block rounded-md px-3 py-3 text-base text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Résumé
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
