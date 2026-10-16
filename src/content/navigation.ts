export type NavItem = {
  label: string;
  href: string;
};

/**
 * Primary navigation — work-first ordering.
 * Single source of truth for header (desktop + mobile).
 */
export const primaryNav: NavItem[] = [
  { label: "Work", href: "/projects" },
  { label: "Writing", href: "/articles" },
  { label: "About", href: "/about" },
];

/**
 * Secondary navigation — shown in the footer.
 */
export const secondaryNav: NavItem[] = [
  { label: "Books", href: "/books" },
  { label: "Résumé", href: "/resume" },
];

export const allNav: NavItem[] = [...primaryNav, ...secondaryNav];
