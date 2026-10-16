import type { Project } from "@website/types/project";

/**
 * Selected project content, derived from the verified résumé project records
 * (English résumé id 47). No numeric outcomes or claims have been invented;
 * copy is condensed from the sourced descriptions and highlights.
 */
export const projects: Project[] = [
  {
    slug: "miles-and-more-mobile-platform",
    title: "Miles & More Mobile Platform",
    summary:
      "Architecture ownership and AI-driven evolution of the Miles & More commercial mobile platform and its customer-communication services used by millions of Lufthansa Group customers.",
    role: "Lead Architect — Mobile Platform",
    technologies: [
      "Flutter",
      "OpenShift",
      "GraphQL",
      "Apigee",
      "AWS SES",
      "DynamoDB",
      "CloudWatch",
      "KMS",
      "Jenkins",
      "Azure DevOps",
      "Fastlane",
    ],
    outcomes: [
      "Own the end-to-end target architecture and technical roadmap across Flutter apps, BFF, GraphQL/REST APIs, and an OpenShift-managed microservice landscape.",
      "Established architecture governance for a multi-vendor delivery setup via coding standards, ADRs, and review gates.",
      "Own an AWS SES communication architecture for high-volume customer messaging with CloudWatch, KMS, DynamoDB, and IAM.",
      "Drove AI adoption through PoCs for Hybrid RAG knowledge assistants, engineering copilots, and workflow automation.",
    ],
    featured: true,
  },
  {
    slug: "aws-cloud-architecture-banking-public-sector",
    title: "AWS Cloud Architecture & Migration",
    summary:
      "Cloud architecture and AWS migration initiatives for a major German bank and a federal public-sector client, spanning lift & shift migrations and greenfield platforms in regulated environments.",
    role: "Software Architect — AWS & Enterprise Systems",
    technologies: [
      "AWS",
      "ECS Fargate",
      "API Gateway",
      "Lambda",
      "Aurora",
      "DynamoDB",
      "SQS",
      "SNS",
      "Cognito",
      "Terraform",
      "AWS CDK",
      "CloudFront",
    ],
    outcomes: [
      "Designed and delivered a greenfield AWS platform for a major German bank on a secure multi-account VPC architecture.",
      "Led a lift & shift migration for a federal public-sector client with minimal downtime and full operational handover.",
      "Defined target architectures and 1–3 year AWS roadmaps aligned with the AWS Well-Architected Framework.",
      "Introduced Infrastructure as Code (Terraform, AWS CDK) and CI/CD pipelines to standardize deployments.",
    ],
    featured: true,
  },
  {
    slug: "skywink",
    title: "Skywink",
    summary:
      "Founder and lead engineer of an open-source, privacy-first AI chat platform that runs locally with Ollama or connects to cloud providers with no vendor lock-in.",
    role: "Founder & Lead Engineer",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Vercel AI SDK",
      "Ollama",
      "Docker",
      "Northflank",
    ],
    outcomes: [
      "Architected a full-stack AI chat platform with a unified provider abstraction for Ollama, OpenAI, Mistral AI, and OpenRouter.",
      "Built secure API-key storage (AES-256/RSA), CSRF protection, rate limiting, and role-based access control.",
      "Designed a zero-signup guest mode with localStorage persistence and auto-cleanup.",
      "Integrated streaming AI responses with real-time rendering and conversation export.",
    ],
    featured: true,
    url: "https://skywink.nimbus-tech.de",
    image: undefined,
  },
  {
    slug: "telecom-banking-service-provisioning",
    title: "Telecom & Banking Service Provisioning Platform",
    summary:
      "Tech lead on a Java-based service provisioning platform for banking and telecom clients, covering backend microservices, REST API design, and team delivery.",
    role: "Tech Lead / Software Engineer",
    technologies: [
      "Java",
      "Spring Boot",
      "REST",
      "Oracle",
      "Selenium",
      "JUnit",
      "CI/CD",
    ],
    outcomes: [
      "Led a small team delivering Spring Boot microservices and REST APIs for automated service provisioning and order management.",
      "Designed and optimized Oracle schemas and queries for high-volume transactional data.",
      "Built a Selenium and JUnit regression suite, improving release confidence and reducing manual QA effort.",
    ],
    featured: false,
  },
  {
    slug: "enterprise-banking-modernization",
    title: "Enterprise Banking Application Modernization",
    summary:
      "Tech lead on the modernization of a legacy Java EE banking application, migrating it to a layered Spring MVC and Hibernate architecture.",
    role: "Tech Lead / Senior Engineer",
    technologies: [
      "Java EE",
      "Spring MVC",
      "Hibernate",
      "REST",
      "Design Patterns",
    ],
    outcomes: [
      "Re-architected a monolithic Java EE application into a maintainable layered system.",
      "Designed RESTful API integrations enabling third-party banking system connectivity.",
      "Introduced coding standards, design patterns, and code-review processes across the team.",
      "Mentored junior developers in a regulated enterprise environment.",
    ],
    featured: false,
  },
  {
    slug: "calypso-capital-markets",
    title: "Calypso-Based Capital Markets & Reporting System",
    summary:
      "Software engineer on a Calypso-based capital markets platform for a banking client, covering trade lifecycle management, position keeping, and financial reporting.",
    role: "Software Engineer",
    technologies: ["Calypso", "Java", "SQL", "Banking"],
    outcomes: [
      "Implemented and customized Calypso components for trade lifecycle management, position keeping, and risk reporting.",
      "Built a Java-based reconciliation and reporting module integrated with Calypso data feeds.",
      "Translated financial domain requirements into technical solutions with business analysts.",
    ],
    featured: false,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
