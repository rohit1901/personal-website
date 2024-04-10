import {ResumeSchema} from "@website/types";

export const GITHUB_PUBLIC_REPOS_URL = "https://api.github.com/users/rohit1901/repos";
export const INSTAGRAM_MEDIA_URL = "https://graph.instagram.com/me/media?fields=caption,media_url&access_token=";
export const GRAPHQL_URL = "http://localhost:4000/graphql";
//TODO: Add Projects, interests, and skills
export const RESUME: ResumeSchema = {
    basics: {
        name: "Rohit Khanduri",
        label: "Software Architect",
        image: "/portfolio/profile.pic.svg",
        email: "rohit.khanduri@hotmail.com",
        url: "https://www.rohit.khanduri.de",
        summary: `With over a decade of successful tenure in software development, 
        I bring a robust background as a distinguished Software Architect specializing in Microservice Architecture. 
        My expertise spans the entire software development lifecycle, enriched further by extensive experience in agile methodologies, particularly Scrum. 
        Notably, my international project involvements across Germany, France, India, Japan
        and beyond have honed my prowess in leading diverse software teams, showcasing my ability to collaborate seamlessly across borders.
        I aim to contribute my expertise in fostering innovation, leveraging technology stacks, 
        and driving the evolution of the tech landscape as a Software Architect.
        My academic foundation includes a Master of Science in Applied Mathematics for Network and Data Science 
        from Hochschule Mittweida, Germany, and a Bachelor of Technology in Computer Science from Gautam Buddh Technical University in India.`,
        location: {
            address: "Frankfurt am Main, Germany",
            postalCode: "60326",
            city: "Frankfurt am Main",
            countryCode: "DE",
            region: "Hessen"
        },
        profiles: [
            {
                network: "LinkedIn",
                url: "https://www.linkedin.com/in/rohit-khanduri-9098b84a/"
            },
            {
                network: "Github",
                url: "https://github.com/rohit1901",
            },
            {
                network: "Twitter",
                url: "https://twitter.com/JohnnyD78310768",
            },
            {
                network: "Instagram",
                url: "https://www.instagram.com/johnny.drama.chase/",
            },
            {
                network: "Substack",
                url: "https://rohitkhanduri.substack.com/",
            }
        ],
    },
    work: [
        {
            name: "Adesso SE",
            location: "Frankfurt am Main, Germany",
            position: "Software Architect",
            url: "https://www.adesso.de/",
            description: `Adesso SE is a German IT service provider with more than 10,000 employees.`,
            startDate: "08-2020",
            summary: `As a Software Architect and a Consultant, I am responsible for the design and implementation of Software Solutions for our clients.
                I am also responsible for the technical leadership of the development team and occassionally review the architecture of the existing systems.`,
            highlights: [
                "A part of  the Adesso Talent Pool as a high potential employee",
                "Successfully led the development of new microservice architectures for clients",
                "Mentored junior developers and interns",
                "Conducted workshops and training sessions for the various teams"
            ],
            image: "/portfolio/assets/adesso.png",
        },
        {
            name: "Finatix GmbH",
            location: "Leipzig, Germany",
            position: "Software Engineer (Working Student)",
            url: "https://www.finatix.de/",
            description: `Finatix GmbH is a German IT service provider.`,
            startDate: "09-2019",
            endDate: "07-2020",
            summary: `As a Software Engineer, I was responsible for the development of new features for the existing software solutions.
                I was also responsible for the maintenance of the existing software solutions.`,
            highlights: [
                "Developed new features for the existing software solutions",
                "Maintained the existing software solutions",
            ],
            image: "/portfolio/assets/finatix.png",
        },
        {
            name: "Peak Performance Apps GmbH",
            location: "Leipzig, Germany",
            position: "Software Engineer (Working Student)",
            url: "https://appsfactory.de/",
            description: `Peak Performance Apps GmbH (Subsidiary of Appsfactory GmbH) is a German IT service provider.`,
            startDate: "05-2019",
            endDate: "08-2019",
            summary: `As a Software Engineer, I was responsible for the development of new features for the existing software solutions.
                I was also responsible for the maintenance of the existing software solutions.`,
            highlights: [
                "Developed new features for the existing software solutions",
                "Maintained the existing software solutions",
            ],
            image: "/portfolio/assets/ppa.png",
        },
        {
            name: "Appsfactory GmbH",
            location: "Leipzig, Germany",
            position: "Software Engineer (Working Student)",
            url: "https://appsfactory.de/",
            description: `Appsfactory GmbH is a German IT service provider.`,
            startDate: "12-2017",
            endDate: "04-2019",
            summary: `As a Software Engineer, I was responsible for the development of new features for the existing software solutions.
                I was also responsible for the maintenance of the existing software solutions.`,
            highlights: [
                "Developed new features for the existing software solutions",
                "Maintained the existing software solutions",
            ],
            image: "/portfolio/assets/appsfactory.ico",
        },
        {
            name: "Iris Software Inc. (SSA Infosystems Pvt. Ltd.)",
            location: "Noida, India",
            position: "Team Lead/ Software Engineer",
            url: "https://www.ssa-infosystems.com/",
            description: `Iris Software Inc. is a multinational IT service provider.`,
            startDate: "09-2016",
            endDate: "10-2017",
            summary: `As a Team Lead, I was responsible for the development of new features for the existing software solutions, 
                mentoring junior developers and interns, conducting workshops and training sessions for the various teams. 
                Conducted code reviews and was responsible for the technical leadership of the development team.`,
            highlights: [
                "Frontend (UI) Team Lead for 11 frontend developers",
                "Making technical decisions",
                "Responsible for developing new features",
                "Responsible for upgrading Angular version from 1 to 2",
                "Conducting code reviews and quality checks",
                "Regular and direct customer communication"
            ],
            image: "/portfolio/assets/iris.jpeg",
        },
        {
            name: "Virtusa Corp.",
            location: "Noida, India",
            position: "Business Analyst/ Software Engineer",
            url: "https://www.virtusa.com/",
            description: `Virtusa Corp. is multinational IT service provider.`,
            startDate: "02-2015",
            endDate: "08-2016",
            summary: `As a Business Analyst, I was responsible for the requirement gathering,
                preparing the requirement documents, preparing the wireframes, preparing the user stories,
                preparing the acceptance criteria and conducting the UAT. As a Software Engineer, I was responsible for the 
                development of new features for the existing software solutions.`,
            highlights: [
                "Planning and execution of business and requirement analyses",
                "Software development of new functionalities",
                "Developing complete functionalities from Java REST endpoints to fully functional AngularJS components."
            ],
            image: "/portfolio/assets/virtusa.jpeg",
        },
        {
            name: "Genpact Headstrong Capital Markets",
            location: "Noida, India",
            position: "Software Engineer",
            url: "https://www.genpact.com/",
            description: `Genpact Headstrong Capital Markets is a multinational IT service provider.`,
            startDate: "11-2013",
            endDate: "01-2015",
            summary: `As a Software Engineer, I was responsible for the development of new features for the existing software solutions.`,
            highlights: [
                "Developing new features for the existing software solutions",
                "Developing new functionalities in Calypso"
            ],
            image: "/portfolio/assets/genpact.jpeg",
        },
        {
            name: "NEC Technologies India Pvt. Ltd.",
            location: "Noida, India",
            position: "L3 Support Engineer/ Software Engineer",
            url: "https://in.nec.com/",
            description: `NEC Technologies India Pvt. Ltd. is a multinational IT service provider.`,
            startDate: "08-2012",
            endDate: "10-2013",
            summary: `As a L3 Support Engineer, I was responsible for the support of the existing software solutions.
                As a Software Engineer, I was responsible for the development of new features for the existing software solutions.`,
            highlights: [
                "Supporting the existing software solutions",
                "Developing new features for the existing software solutions"
            ],
            image: "/portfolio/assets/nec.png",
        }
    ],
    volunteer: [
        {
            organization: "Robin Hood Army",
            position: "Volunteer",
            url: "https://robinhoodarmy.com/",
            startDate: "08-2014",
            endDate: "07-2017",
            summary: `As a Volunteer, I was responsible for the distribution of food to the needy people.`,
            highlights: [
                "Distributed food to the needy people",
                "Conducted food distribution drives"
            ]
        }
    ],
    education: [
        {
            institution: "Hochsch ule Mittweida",
            location: "Mittweida, Germany",
            area: "Applied Mathematics for Network and Data Science",
            studyType: "Master",
            startDate: "10-2017",
            endDate: "09-2019"
        },
        {
            institution: "Gautam Buddh Technical University",
            location: "Noida, India",
            area: "Computer Science",
            studyType: "Bachelor",
            startDate: "08-2008",
            endDate: "06-2012"
        },
    ],
    awards: [
        {
            title: "Adesso Talent Pool",
            date: "08-2020",
            awarder: "Adesso SE",
            summary: `Adesso Talent Pool is an exclusive program designed to recognize and reward employees
                for their exceptional work performance and strong work ethics. 
                This exclusive promotion initiative aimed to identify and appreciate individuals with 
                the potential to propel the company forward, offering unique opportunities for networking and professional growth within adesso.`
        },
        {
            title: "Certificate of Appreciation",
            date: "07-2017",
            awarder: "SSA Infosystems Pvt. Ltd.",
            summary: `Certificate of Appreciation is an award that is granted to employees 
                who've worked exceptionally well and have won accolades from the client.`
        },
        {
            title: "Round of Applause",
            date: "07-2017",
            awarder: "SSA Infosystems Pvt. Ltd.",
            summary: "Round of Applause is an award that is granted to employees who've worked exceptionally well in a particular month."
        },
        {
            title: "Top Talent",
            date: "08-2015",
            awarder: "Virtusa Corp.",
            summary: "Top Talent for the successful completion of the project."
        }
    ],
    publications: [
        {
            name: "Fraud Detection using Machine Learning",
            publisher: "Hochschule Mittweida",
            releaseDate: "12-2018",
            url: "https://monami.hs-mittweida.de/frontdoor/index/index/year/2023/docId/13759",
            summary: `Fraud detection is a critical issue in the financial sector.
                This paper presents a machine learning approach to detect fraud in the financial sector.`
        }
    ],
    languages: [
        {
            language: "English",
            fluency: "Professional working proficiency"
        },
        {
            language: "German",
            fluency: "Elementary proficiency"
        },
        {
            language: "Hindi",
            fluency: "Native proficiency"
        }
    ],
    meta: [
        {
            canonical: "https://www.rohit.khanduri.de",
            version: "1.0.0",
            lastModified: "2021-08-06",
        }
    ]
}
export const WEBSITE: ResumeSchema = {
    ...RESUME,
    basics: {
        ...RESUME.basics,
        label: "Software Architect, Consultant, and an amateur Goofball.",
        summary: `I’m a Mathematician interested in AI/ML, Software Architecture, Java, Python, and all things JS!
            I love to read, write, and code. I’m currently working as a Software Architect at Adesso SE.
            In my free time, I write articles and review books that I've read, work on side projects, and contribute to open-source.
            Oh, and I love to work out and play video games!`,
    }
}
export * from "./queries";