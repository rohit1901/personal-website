import { ImageProps } from "next/image";
export type Maybe<T> = T | null | undefined;
export type GitHubRepo = {
  description: string;
  icon: string;
  image: string;
  title: string;
  url: string;
  login?: string;
  avatar_url?: string;
  html_url?: string;
};
export type InstagramMedia = {
  caption?: string;
  media_url?: string;
  id: string;
};
export type InstagramError = {
  code: number;
  message: string;
  type: string;
  fbtrace_id: string;
};
export type Slug = {
  label: "resume" | "navigation" | "about" | "certification";
  id: string;
};
export type ResumeImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  fill?: boolean;
  preview?: string;
  type?: Slug;
};

/**
 * @see https://jsonresume.org/schema/
 * JSON Resume Schema types
 */
export interface Location {
  id: string;
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
  language: Language;
}

export interface Profile {
  id: string;
  network: string;
  username: string;
  url: string;

  [k: string]: any;
}

export interface Basics {
  id: string;
  name: string;
  label: string;
  image: ResumeImage;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
  profiles: Profile[];
  profilesCount: number;
  language?: Language;
}

export interface Work {
  id: string;
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string;
  image?: string;
  date?: string;
  language?: Language;
}

export interface Volunteer {
  id: string;
  organization: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: string;
  language?: Language;
}

export interface Education {
  id: string;
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score: string;
  courses: string;
  language?: Language;
}

export interface Award {
  id: string;
  title: string;
  date: string;
  awarder: string;
  summary: string;
  url?: string;
  language?: Language;
}

export interface Certificate {
  id: string;
  title: string;
  description: string;
  link: string;
  image: ResumeImage;
  language?: Language;
}

export interface Publication {
  id: string;
  name: string;
  publisher: string;
  releaseDate: string;
  url: string;
  summary: string;
  language?: Language;
}

export interface Skill {
  id: string;
  name: string;
  level: string;
  keywords: string[];
}

export interface Language {
  id: string;
  label: string;
  value: string;
}

export interface Interest {
  id: string;
  name: string;
  keywords: string[];
}

export interface Reference {
  id: string;
  name: string;
  reference: string;
}

export interface Project {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights: string;
  url: string;
}

export interface ResumeLanguage {
  id: string;
  language: Language["label"];
  fluency: string;
  uiLanguage: Maybe<Language>;
}

export interface ResumeSchema {
  id: string;
  title: string;
  basicInformation: Basics;
  work: Work[];
  workCount?: number;
  volunteer: Volunteer[];
  volunteerCount?: number;
  education: Education[];
  educationCount?: number;
  awards: Award[];
  awardsCount?: number;
  certificates: Certificate[];
  certificatesCount?: number;
  publications: Publication[];
  publicationsCount?: number;
  skills: Skill[];
  skillsCount?: number;
  resumeLanguages: ResumeLanguage[];
  resumeLanguagesCount?: number;
  language?: Language;
  interests: Interest[];
  interestsCount?: number;
  references: Reference[];
  referencesCount?: number;
  projects: Project[];
  projectsCount?: number;
  createdAt: string;
  updatedAt: string;
}

export type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};
