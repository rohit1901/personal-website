export type Feed = {
    author: string,
    description: string,
    image: string,
    link: string,
    title: string
    url: string
}
export type FeedItem = {
    author: string,
    categories: string[],
    content: string,
    description: string,
    enclosure: {
        link: string
        type: string
    },
    guid: string,
    link: string,
    pubDate: string,
    thumbnail: string,
    title: string
}
export type GitHubRepo = {
    description: string,
    icon: string,
    image: string,
    title: string,
    url: string,
    login?: string,
    avatar_url?: string,
    html_url?: string
}
export type GitHubOwner = Pick<GitHubRepo, "login" | "avatar_url" | "html_url">
export type RssToJSON = {
    feed: Feed,
    items: FeedItem[],
    status: "ok" | "error" | "loading" | "unknown" | "timeout" | "invalid" | "missing"
}
export type InstagramMedia = {
    caption: string,
    media_url: string,
}
export type LiteralProfile = {
    id: string
    name: string
    bio: string
    handle: string
    image: string
}
export type LiteralSecrets = {
    token: string
    createdOn: Date
    expiresOn: Date
}
export type BookAuthor = {
    name: string
}
export type LiteralBook = {
    title: string,
    description: string
    cover: string
    authors?: BookAuthor[]
}
export type LiteralReadingStatus = "IS_READING" | "FINISHED" | "WANTS_TO_READ"
export type LiteralReadingState = {
    book: LiteralBook,
    status: LiteralReadingStatus,
}

/**
 * @see https://jsonresume.org/schema/
 * JSON Resume Schema types
 */
export interface Location {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
}

export interface Profile {
    network: string;
    username: string;
    url: string;

    [k: string]: any;
}

export interface Basics {
    name: string;
    label: string;
    image: string;
    email: string;
    phone: string;
    url: string;
    summary: string;
    location: Location;
    profiles: Profile[];
}

export interface Work {
    name: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
    image?: string;
    date?: string;
}

export interface Volunteer {
    organization: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

export interface Education {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
    courses: string[];
}

export interface Award {
    title: string;
    date: string;
    awarder: string;
    summary: string;
    url?: string;
}

export interface Certificate {
    name: string;
    date: string;
    issuer: string;
    url: string;
}

export interface Publication {
    name: string;
    publisher: string;
    releaseDate: string;
    url: string;
    summary: string;
}

export interface Skill {
    name: string;
    level: string;
    keywords: string[];
}

export interface Language {
    language: string;
    fluency: string;
}

export interface Interest {
    name: string;
    keywords: string[];
}

export interface Reference {
    name: string;
    reference: string;
}

export interface Project {
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    highlights: string[];
    url: string;
}

export interface ResumeSchema {
    basics: Basics;
    work: Work[];
    volunteer: Volunteer[];
    education: Education[];
    awards: Award[];
    certificates: Certificate[];
    publications: Publication[];
    skills: Skill[];
    languages: Language[];
    interests: Interest[];
    references: Reference[];
    projects: Project[];
}