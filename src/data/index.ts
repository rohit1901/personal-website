//TODO: Add Projects, interests, and skills
import {GitHubOwner, GitHubRepo, ResumeSchema} from "@website/types";

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
export const INSTAGRAM_DATA = {
    data: [
        {
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/57068590_273438423597084_7870065538816493372_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=8LVP77LkXYcAb6eVSPT&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA1kS9ohgDp_nrRYRiGtcfMO8xsFL4uehgChxZ-utjuTw&oe=661E18C2',
            id: '18058069585016173'
        },
        {
            caption: "Let's LOL!\n.\n.\n.\n.\n#rains #germany #mittweida #laughing",
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/43694330_308661579724741_6663384286458973401_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=yDP4Yoi5H70Ab6uSYXm&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBGZByAgAryA81baASHQ1OGEXwByO3qZp13CwJLitKCDQ&oe=661E00CB',
            id: '17919429322230855'
        },
        {
            caption: '12 years and counting..\n' +
                '.\n' +
                '.\n' +
                '.\n' +
                '.\n' +
                '#newdelhi #friends #12yearsoffriendship',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/43054768_336205006954797_8395465613788286485_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=G3DyWVfKQjIAb7hOlok&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB0dbw5uoNpiTlM4zz7z3yGjc4rgL_oW52YfhaKRFSYWA&oe=661DF267',
            id: '17913190153227951'
        },
        {
            caption: "Red sky at night - Sailor's delight!\n" +
                '.\n' +
                '.\n' +
                '.\n' +
                '.\n' +
                '.\n' +
                '#mittweida #redsky #redskyatnight #sailorsdelight #nofilter',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/40361439_542177269574591_9009201588950270670_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=LbIwsGRM83MAb6UZtx8&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCEkQ7guypsiUa3jEecy2YoygQXA_wTthaOWxFK0zY65A&oe=661DF37A',
            id: '17979744076055882'
        },
        {
            caption: 'There was a different kind of calm here..\n' +
                '.\n' +
                '.\n' +
                '.\n' +
                '#nyhavn #nyhavncanal #copenhagen',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/41494987_508701519590932_7181022766941019267_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=B1hLhJbvGc8Ab7IBDT4&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCSltorCFFlH3l4JyY-IUXE6W88pv4U4TbdQ1tLkdDFPQ&oe=661DF2AF',
            id: '17949331087183025'
        },
        {
            caption: '#stopclimatechange #dontbeafossilfool',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/40094869_477815899390074_2391051373720988977_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=7d7zSuTVMMoAb4xvNKg&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBlRqVBuNaI-cgJTumCcAeYXFT2hTqtixx_jPxMGMDKlw&oe=661E00F2',
            id: '17917626463200646'
        },
        {
            caption: '#christiansborgpalace',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/40639263_404318430101305_7516528665530845795_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=qyc_SqhTQ5YAb7yJ3Np&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAD-oil7WirnGodSeC-C86-0O7n6aMelGzayiJ-_dQx_g&oe=661DF0CC',
            id: '17945630296164985'
        },
        {
            caption: '#churchofoursaviour',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/40193652_2159392234348838_9095836382361352536_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=LLEKqLa0w8EAb5mvXnt&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfB9zDXZWEVaT6hUaNqEs3GYLS4TVeLtsdhSVp6L1v57sg&oe=661DF452',
            id: '17978092714051876'
        },
        {
            caption: "Goodbyes are always hard! I've spent a week with this beautiful Belarusian child and his family.\n" +
                'Tried to teach me how to speak Belarusian, \n' +
                'Always came up running to me whenever I got back, laughed, ate, played with me.\n' +
                'Spasibo, Valentin.\n' +
                '#palmademallorca #elarenal',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/38202197_199563817577868_715212733112385536_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=Q9QSgbD5FNcAb5jOFui&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDj4zVKt21pj9AWqUf5jnQfr7aB97sQKHMaw7Iql6F5lw&oe=661E1D17',
            id: '17967813055019685'
        },
        {
            caption: '#catedraldemallorca',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/37890083_419752131880582_1532431042583986176_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=6pvtGUK8NNoAb6gqHWS&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDnkuzkEXP4MG75KvzqHvolPo-9aav5Kzm-Cge68AVCeg&oe=661E0351',
            id: '17937515701155718'
        },
        {
            caption: "It's a pleasure to see such beauty! #catedraldemallorca",
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/38081053_246146779339223_7035437652421640192_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=LFbH_P7FkkgAb6cPpbQ&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAN257pm6OkZm_29myeFaRZGRnjtPQtyJTewy9eScWJ8A&oe=661E1C32',
            id: '17850277432304072'
        },
        {
            caption: 'My ride for the next 5 days! #minicooper #palmademallorca #españa',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/37726144_352838681984759_4442995594419503104_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=9TwwBF_J1TYAb44OCl0&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBjyu17Wrv9bg4EdUYR5E2nIgh-CYb6MR2C4YYBbhhxdg&oe=661E14CD',
            id: '17936252641164183'
        },
        {
            caption: 'Nothing can be more serene than this! #embalssamentdecuber #palmademallorca',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/37927455_217782128903746_345248450712961024_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=NQZB14FNtr4Ab4zc7z9&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAwGa4MvAabEaPzkZeUsqhmwMyo7C8y0zb2Gc2g_Ue7hQ&oe=661DF6FF',
            id: '17858445862279898'
        },
        {
            caption: 'The goofy lunch talks! Why so serious, @lars_grimmer??',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/37570310_1065285996968744_8007370888737456128_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=8Ng8K5zr2LgAb673yfX&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfApXXA-t18ryw1PYGegC03IY-avd_n2yRDLoVgitDOY2A&oe=661DF072',
            id: '17963286028058994'
        },
        {
            caption: 'Life is full of risks anyway; Why not take them and let life surprise you?',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/36784764_1062706343888585_1599204083091111936_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=9TJPzxMQB8UAb5YetCC&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfD92NpzBU2w8LjobThEfTrdGJPDya3EV6LC7OW1khRi2w&oe=661DF5B8',
            id: '17961599095040977'
        },
        {
            caption: '#parcdelaciutadella #barcelona',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/36807336_1611558948967042_441091766909665280_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ilkym3m1TZoAb5Wmt7V&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAklLzOc_2EG0Kdn5jUAb4goA0rUtSPD5CF9EUd_KRbAw&oe=661E1E5E',
            id: '17963278639042539'
        },
        {
            caption: 'How do I relax after work? Well, I strum my Guitar! 🎸🎶',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/36661219_643141349392995_6523815002023919616_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=6-cypjz8hG8Ab5k9adk&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAryH8hVhKkcsQUvCEL21v6sGisUi_a3awYCyAWCs8GVg&oe=661DEDCE',
            id: '17945962171105359'
        },
        {
            caption: 'The sky! Danke @el_larrso',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/34650427_217389792320196_3594589676280741888_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=q6mmm7CxPDsAb7WlSzY&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfA20OQXZBEwaPpwD3QFiJdR4ohh1HKm5s0-gy0JqRoQyg&oe=661E1B20',
            id: '17920388299173782'
        },
        {
            caption: 'First Indian Lunch zusammen!',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/34266287_205047423345738_1521099183690350592_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=5TVJZVedEVQAb6shsQf&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfC0GJwssvo5DRFhi6dc7EA_mpVzcG022tj0vp1VECT65w&oe=661E03EE',
            id: '17944304866072880'
        },
        {
            caption: "Always scared but tells the world that she's born brave!",
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/33963098_195037934466831_5846317231436201984_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=r_Nwgq1EHc0Ab72bKr_&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBXw0sHTjQCtgZZHJMQz--Y0DhheIJcu4GWSvV3PGPysA&oe=661DF91D',
            id: '17929998631080593'
        },
        {
            caption: 'The happy faces after the "chilli" is right!',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/32677886_228453101252148_2962511223502929920_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=4bc5sB8fMZsAb668HtI&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDX-kkDjFSpYHCVSjGCq5JVDKlPGt08ogDk3dwIXJaESw&oe=661E031E',
            id: '17941591234064908'
        },
        {
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/31908283_206267596842033_6443987099182956544_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=bwv26AVBOK0Ab4kSbrd&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCPGjbKGo-HSSrP2lIOR4N0aG-ODl9WGG5HjdWZV8pjQg&oe=661E0C65',
            id: '17946461515058820'
        },
        {
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/31076359_404012726734515_8525109971996639232_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=z3Xuua3SidYAb57wOwf&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfARGQgdyeYNp9jQc13SKBT-YA4rLQ1xscGM1DgjbwhOzw&oe=661DFBAC',
            id: '17910411964175652'
        },
        {
            caption: 'Swag!',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/30922201_866008490263894_4752226784395657216_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=jbZmBMNPMIMAb4vAOx3&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfD6S_GyL1mOjq9WyH4qX-wZkjhc6peb3W7GaC-xrk5tfQ&oe=661E131D',
            id: '17881380106223814'
        },
        {
            caption: '#campnou #barcelona',
            media_url: 'https://scontent-dus1-1.cdninstagram.com/v/t51.2885-15/30894207_856951621173789_301493007528493056_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=7nDCbPx92xkAb5W7cdv&_nc_ht=scontent-dus1-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAdb8zc_7lM_lX9Dx6wZojYWZgqmfxoPNwLdC-HK_3Plw&oe=661DEEB6',
            id: '17941876609007783'
        }
    ],
    paging: {
        cursors: {
            before: 'QVFIUnZAYWVBYVkV0bWpIYXBiQWJvczkxTEhBYVlpNGFMb1ExdmktTUJEMUFrZAHNwSkdPVWR5dS0xVC1OTVprc3gwYUNZASmlWNWRTQnRZAWlYwVTkyS2tXLUxB',
            after: 'QVFIUlp5YW1pSTlTQkduZAVk2Nm90T0ZAtQ3lDcWVBZAEtOdkRsOXltQ0gwMnY5NnBoMVBGS0hlOWhKWXVmR0czRUUxQUxtTU9GUFllMlFIN1NsWmluUkhQd3lB'
        },
        next: 'https://graph.instagram.com/v19.0/17841400194973298/media?fields=caption,media_url&access_token=IGQWRNaXQ1OWtqSHRTRHo5M19HZA2FXY0NrRFU4d2xDeEJ2WENoMHFHblFRSExmV1NrSHFETFJEeWFXeHdpSndPSV9IMlR5YVFMVG5ocmVPQjBPWHk2RGU5YmdKZA2ZAGNEVsb0hybmNKdDZATQ3NIUGJvQ2QxSWVGWUUZD&limit=25&after=QVFIUlp5YW1pSTlTQkduZAVk2Nm90T0ZAtQ3lDcWVBZAEtOdkRsOXltQ0gwMnY5NnBoMVBGS0hlOWhKWXVmR0czRUUxQUxtTU9GUFllMlFIN1NsWmluUkhQd3lB'
    }
}
export const GITHUB_DATA: GitHubRepo[] = [
    {
        url: 'https://github.com/rohit1901/admin-little-fern',
        title: 'GitHub - rohit1901/admin-little-fern: Administration nextjs app for the little-fern website (CMS)',
        description: 'Administration nextjs app for the little-fern website (CMS) - rohit1901/admin-little-fern',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/762145544/86d84761-8f99-4cbb-86eb-43f631ab285e'
    },
    {
        url: 'https://github.com/rohit1901/angular-form-util',
        title: 'GitHub - rohit1901/angular-form-util: This Repo contains a Boilerplate Angular application with Jasmine Tests for a utility function',
        description: 'This Repo contains a Boilerplate Angular application with Jasmine Tests for a utility function - rohit1901/angular-form-util',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/660114529/398e456a-5a81-4ba1-8477-fa8baa07853c'
    },
    {
        url: 'https://github.com/rohit1901/appointify',
        title: 'GitHub - rohit1901/appointify: Appointify - Calendar Application',
        description: 'Appointify - Calendar Application. Contribute to rohit1901/appointify development by creating an account on GitHub.',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/622876134/51805939-9314-450d-ae65-87a685f93437'
    },
    {
        url: 'https://github.com/rohit1901/appointify-mask',
        title: 'GitHub - rohit1901/appointify-mask: NEXT.js Frontend for the appointify application',
        description: 'NEXT.js Frontend for the appointify application. Contribute to rohit1901/appointify-mask development by creating an account on GitHub.',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/624298226/8d85e8fe-16b5-4469-85b7-02ef04359052'
    },
    {
        url: 'https://github.com/rohit1901/ast-shaking',
        title: 'GitHub - rohit1901/ast-shaking: Abstract Syntax Trees and a shaking implementation',
        description: 'Abstract Syntax Trees and a shaking implementation  - GitHub - rohit1901/ast-shaking: Abstract Syntax Trees and a shaking implementation',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/559978175/75309ca8-3288-4bf5-9584-9d5e1bc8dc03'
    },
    {
        url: 'https://github.com/rohit1901/crawlee-playground',
        title: 'GitHub - rohit1901/crawlee-playground: A Crawlee playground for web crawling functionalities, managing the crawling parameters, and handling different types of rules for web scraping.',
        description: 'A Crawlee playground for web crawling functionalities, managing the crawling parameters, and handling different types of rules for web scraping. - rohit1901/crawlee-playground',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/738498325/a59850b8-fbcf-47d3-a49c-b88cec55fe19'
    },
    {
        url: 'https://github.com/rohit1901/docker-basics',
        title: 'GitHub - rohit1901/docker-basics: A simple Docker Repo for beginners',
        description: 'A simple Docker Repo for beginners. Contribute to rohit1901/docker-basics development by creating an account on GitHub.',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/729814092/dd9d887b-59fe-441f-824d-f0c7437fd189'
    },
    {
        url: 'https://github.com/rohit1901/e-paper',
        title: 'GitHub - rohit1901/e-paper: An e-paper micropython example for displaying custom messages on Waveshare 3.7 e-ink e-paper module using a Raspberry Pi Pico W',
        description: 'An e-paper micropython example for displaying custom messages on Waveshare 3.7 e-ink e-paper module using a Raspberry Pi Pico W - rohit1901/e-paper',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/627861407/ff35fa74-83c7-48ff-a87d-698796f54009'
    },
    {
        url: 'https://github.com/rohit1901/little-fern-party',
        title: 'GitHub - rohit1901/little-fern-party: Little Fern PartyKit Server',
        description: 'Little Fern PartyKit Server. Contribute to rohit1901/little-fern-party development by creating an account on GitHub.',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/775141539/3a4b1de3-410d-46be-9501-56dd2eb72f95'
    },
    {
        url: 'https://github.com/rohit1901/mockable',
        title: 'GitHub - rohit1901/mockable: Mockable automates the mock generation process while maintaining type safety and ease of use.',
        description: 'Mockable automates the mock generation process while maintaining type safety and ease of use. - rohit1901/mockable',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/680783688/94fe838e-497a-4305-9878-3d571094adda'
    },
    {
        url: 'https://github.com/rohit1901/personal-website',
        title: 'GitHub - rohit1901/personal-website: My Personal Website',
        description: 'My Personal Website. Contribute to rohit1901/personal-website development by creating an account on GitHub.',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/783240483/e24eb8ba-7bdb-412c-a940-4ad59613bcd4'
    },
    {
        url: 'https://github.com/rohit1901/personal-website-gql-server',
        title: 'GitHub - rohit1901/personal-website-gql-server: A GQL Server for my website',
        description: 'A GQL Server for my website. Contribute to rohit1901/personal-website-gql-server development by creating an account on GitHub.',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://opengraph.githubassets.com/ffefba0baae79bc5a66eaf21c3e4861612f59e36ff7d14d3ad96975a14bd33ab/rohit1901/personal-website-gql-server'
    },
    {
        url: 'https://github.com/rohit1901/py-cluster',
        title: 'GitHub - rohit1901/py-cluster: Classifier and Cluster Analysis in Data Science',
        description: 'Classifier and Cluster Analysis in Data Science. Contribute to rohit1901/py-cluster development by creating an account on GitHub.',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/692059466/2ca95d60-d18f-42c4-a8ef-aece371cd936'
    },
    {
        url: 'https://github.com/rohit1901/rohit1901',
        title: 'GitHub - rohit1901/rohit1901: Config files for my GitHub profile.',
        description: 'Config files for my GitHub profile. Contribute to rohit1901/rohit1901 development by creating an account on GitHub.',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/560025678/def9a003-197e-4fd8-8f3d-c609083d16a4'
    },
    {
        url: 'https://github.com/rohit1901/starter-schematics',
        title: 'GitHub - rohit1901/starter-schematics: A collection of angular schematics',
        description: 'A collection of angular schematics. Contribute to rohit1901/starter-schematics development by creating an account on GitHub.',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/560813535/7fa3436e-a430-45c0-b742-d2d630db84a5'
    },
    {
        url: 'https://github.com/rohit1901/ts-gen-typeguards',
        title: 'GitHub - rohit1901/ts-gen-typeguards: A Typescript Library which generates type guard functions',
        description: 'A Typescript Library which generates type guard functions - rohit1901/ts-gen-typeguards',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/664820593/1269b0dd-27fb-49b9-a9c8-16f730708f98'
    },
    {
        url: 'https://github.com/rohit1901/ts-raw-utils',
        title: 'GitHub - rohit1901/ts-raw-utils: A set of utils for ts projects',
        description: 'A set of utils for ts projects. Contribute to rohit1901/ts-raw-utils development by creating an account on GitHub.',
        icon: 'https://github.githubassets.com/favicons/favicon.svg',
        image: 'https://repository-images.githubusercontent.com/660198829/e681297c-c767-4529-9011-bbca62faa408'
    }
]
export const GITHUB_OWNER: GitHubOwner = {
    login: 'rohit1901',
    avatar_url: 'https://avatars.githubusercontent.com/u/7346344?v=4',
    html_url: 'https://github.com/rohit1901',
}
