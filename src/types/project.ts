export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Website presentation model for a selected project. Distinct from the
 * external résumé `Project` schema so the site copy can stand on its own.
 */
export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  technologies: string[];
  outcomes: string[];
  featured: boolean;
  url?: string;
  image?: ProjectImage;
};
