export type ResumeImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Language = {
  id?: string;
  label: string;
  value?: string;
};

export type ResumeLocation = {
  city?: string;
  region?: string;
};

export interface Basics {
  id?: string;
  name: string;
  label?: string;
  image?: ResumeImage;
  email?: string;
  summary?: string;
  location?: ResumeLocation;
  language?: Language;
}

export interface Work {
  id?: string;
  name: string;
  position?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights: string[];
}

export interface Education {
  id?: string;
  institution: string;
  area?: string;
  studyType?: string;
  startDate?: string;
  endDate?: string;
}

export interface Award {
  id?: string;
  title: string;
  awarder?: string;
  date?: string;
}

export interface Certificate {
  id: string;
  title: string;
  description: string;
  link: string;
}

export interface Skill {
  id?: string;
  name: string;
  keywords: string[];
}

export interface ResumeSchema {
  id: string;
  basicInformation: Basics;
  work: Work[];
  education: Education[];
  awards: Award[];
  certificates: Certificate[];
  skills: Skill[];
  language?: Language;
}
