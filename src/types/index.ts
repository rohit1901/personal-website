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
export interface ResumeSchema {
    basics?: {
        name?: string;
        /**
         * e.g. Web Developer
         */
        label?: string;
        /**
         * URL (as per RFC 3986) to a image in JPEG or PNG format
         */
        image?: string;
        /**
         * e.g. thomas@gmail.com
         */
        email?: string;
        /**
         * Phone numbers are stored as strings so use any format you like, e.g. 712-117-2923
         */
        phone?: string;
        /**
         * URL (as per RFC 3986) to your website, e.g. personal homepage
         */
        url?: string;
        /**
         * Write a short 2-3 sentence biography about yourself
         */
        summary?: string;
        location?: {
            /**
             * To add multiple address lines, use
             * . For example, 1234 Glücklichkeit Straße
             * Hinterhaus 5. Etage li.
             */
            address?: string;
            postalCode?: string;
            city?: string;
            /**
             * code as per ISO-3166-1 ALPHA-2, e.g. US, AU, IN
             */
            countryCode?: string;
            /**
             * The general region where you live. Can be a US state, or a province, for instance.
             */
            region?: string;
            [k: string]: any;
        };
        /**
         * Specify any number of social networks that you participate in
         */
        profiles?: {
            /**
             * e.g. Facebook or Twitter
             */
            network?: string;
            /**
             * e.g. neutralthoughts
             */
            username?: string;
            /**
             * e.g. http://twitter.example.com/neutralthoughts
             */
            url?: string;
            [k: string]: any;
        }[];
        [k: string]: any;
    };
    work?: {
        /**
         * e.g. Facebook
         */
        name?: string;
        /**
         * e.g. Menlo Park, CA
         */
        location?: string;
        /**
         * e.g. Social Media Company
         */
        description?: string;
        /**
         * e.g. Software Engineer
         */
        position?: string;
        /**
         * e.g. http://facebook.example.com
         */
        url?: string;
        /**
         * resume.json uses the ISO 8601 date standard e.g. 2014-06-29
         */
        startDate?: string;
        /**
         * e.g. 2012-06-29
         */
        endDate?: string;
        /**
         * Give an overview of your responsibilities at the company
         */
        summary?: string;
        /**
         * Specify multiple accomplishments
         */
        highlights?: string[];
        [k: string]: any;
    }[];
    volunteer?: {
        /**
         * e.g. Facebook
         */
        organization?: string;
        /**
         * e.g. Software Engineer
         */
        position?: string;
        /**
         * e.g. http://facebook.example.com
         */
        url?: string;
        /**
         * resume.json uses the ISO 8601 date standard e.g. 2014-06-29
         */
        startDate?: string;
        /**
         * e.g. 2012-06-29
         */
        endDate?: string;
        /**
         * Give an overview of your responsibilities at the company
         */
        summary?: string;
        /**
         * Specify accomplishments and achievements
         */
        highlights?: string[];
        [k: string]: any;
    }[];
    education?: {
        /**
         * e.g. Massachusetts Institute of Technology
         */
        institution?: string;
        /**
         * e.g. Arts
         */
        area?: string;
        /**
         * e.g. Bachelor
         */
        studyType?: string;
        /**
         * e.g. 2014-06-29
         */
        startDate?: string;
        /**
         * e.g. 2012-06-29
         */
        endDate?: string;
        /**
         * grade point average, e.g. 3.67/4.0
         */
        gpa?: string;
        /**
         * List notable courses/subjects
         */
        courses?: string[];
        url?: string;
        [k: string]: any;
    }[];
    /**
     * Specify any awards you have received throughout your professional career
     */
    awards?: {
        /**
         * e.g. One of the 100 greatest minds of the century
         */
        title?: string;
        /**
         * e.g. 1989-06-12
         */
        date?: string;
        /**
         * e.g. Time Magazine
         */
        awarder?: string;
        /**
         * e.g. Received for my work with Quantum Physics
         */
        summary?: string;
        [k: string]: any;
    }[];
    /**
     * Specify your publications through your career
     */
    publications?: {
        /**
         * e.g. The World Wide Web
         */
        name?: string;
        /**
         * e.g. IEEE, Computer Magazine
         */
        publisher?: string;
        /**
         * e.g. 1990-08-01
         */
        releaseDate?: string;
        /**
         * e.g. http://www.computer.org.example.com/csdl/mags/co/1996/10/rx069-abs.html
         */
        url?: string;
        /**
         * Short summary of publication. e.g. Discussion of the World Wide Web, HTTP, HTML.
         */
        summary?: string;
        [k: string]: any;
    }[];
    /**
     * List out your professional skill-set
     */
    skills?: {
        /**
         * e.g. Web Development
         */
        name?: string;
        /**
         * e.g. Master
         */
        level?: string;
        /**
         * List some keywords pertaining to this skill
         */
        keywords?: string[];
        [k: string]: any;
    }[];
    /**
     * List any other languages you speak
     */
    languages?: {
        /**
         * e.g. English, Spanish
         */
        language?: string;
        /**
         * e.g. Fluent, Beginner
         */
        fluency?: string;
        [k: string]: any;
    }[];
    interests?: {
        /**
         * e.g. Philosophy
         */
        name?: string;
        keywords?: string[];
        [k: string]: any;
    }[];
    /**
     * List references you have received
     */
    references?: {
        /**
         * e.g. Timothy Cook
         */
        name?: string;
        /**
         * e.g. Joe blogs was a great employee, who turned up to work at least once a week. He exceeded my expectations when it came to doing nothing.
         */
        reference?: string;
        [k: string]: any;
    }[];
    /**
     * Specify career projects
     */
    projects?: {
        /**
         * e.g. The World Wide Web
         */
        name?: string;
        /**
         * Short summary of project. e.g. Collated works of 2017.
         */
        description?: string;
        /**
         * Specify multiple features
         */
        highlights?: string[];
        /**
         * Specify special elements involved
         */
        keywords?: string[];
        /**
         * resume.json uses the ISO 8601 date standard e.g. 2014-06-29
         */
        startDate?: string;
        /**
         * e.g. 2012-06-29
         */
        endDate?: string;
        /**
         * e.g. http://www.computer.org/csdl/mags/co/1996/10/rx069-abs.html
         */
        url?: string;
        /**
         * Specify your role on this project or in company
         */
        roles?: string[];
        /**
         * Specify the relevant company/entity affiliations e.g. 'greenpeace', 'corporationXYZ'
         */
        entity?: string;
        /**
         *  e.g. 'volunteering', 'presentation', 'talk', 'application', 'conference'
         */
        type?: string;
        [k: string]: any;
    }[];
    /**
     * The schema version and any other tooling configuration lives here
     */
    meta?: {
        /**
         * URL (as per RFC 3986) to latest version of this document
         */
        canonical?: string;
        /**
         * A version field which follows semver - e.g. v1.0.0
         */
        version?: string;
        /**
         * Using ISO 8601 with YYYY-MM-DDThh:mm:ss
         */
        lastModified?: string;
        [k: string]: any;
    };
}

export type Profile = {
    /**
     * e.g. Facebook or Twitter
     */
    network?: string;
    /**
     * e.g. neutralthoughts
     */
    username?: string;
    /**
     * e.g. http://twitter.example.com/neutralthoughts
     */
    url?: string;
    [k: string]: any;
};