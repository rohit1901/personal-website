import { DE_RESUME, EN_RESUME } from "@website/constants";

export type SocialLink = {
  label: string;
  href: string;
};

export type CallToAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type Capability = {
  title: string;
  description: string;
};

/**
 * Website-level copy and contact details, intentionally independent of the
 * résumé backend. All values are sourced from verified repository/resume data.
 */
export const site = {
  name: "Rohit Khanduri",
  role: "AWS Cloud & Software Architect",
  location: "Frankfurt, Germany",
  email: "r.khanduri@nimbus-tech.de",

  /**
   * Hero copy. The headline states what Rohit does; the intro grounds it in
   * the verified résumé summary (14+ years, AWS, IaC, cloud-native delivery).
   */
  headline: "I design and build secure, scalable cloud platforms on AWS.",
  intro:
    "I'm an AWS-focused Cloud Architect and software engineer with 14+ years designing and delivering cloud systems. I work across AWS Well-Architected architecture, Infrastructure as Code, and cloud-native application development in Node.js, React, and TypeScript — and care about clear trade-offs as much as working software.",

  primaryCta: {
    label: "See selected work",
    href: "#work",
  } satisfies CallToAction,

  secondaryCta: {
    label: "Get in touch",
    href: "#contact",
  } satisfies CallToAction,

  resume: {
    en: EN_RESUME,
    de: DE_RESUME,
  },

  /**
   * Capability themes condensed from the verified résumé skill groups.
   */
  capabilities: [
    {
      title: "Cloud architecture on AWS",
      description:
        "Well-Architected design across multi-account organizations, VPC networking, IAM, and secure, cost-aware platform foundations.",
    },
    {
      title: "Infrastructure as Code",
      description:
        "Terraform, AWS CDK, and CloudFormation with CI/CD pipelines for repeatable, reviewable infrastructure changes.",
    },
    {
      title: "Cloud-native engineering",
      description:
        "Node.js, TypeScript, GraphQL, and event-driven services with containers, serverless, and managed data stores.",
    },
    {
      title: "AI & LLM integration",
      description:
        "Retrieval-augmented generation, provider-agnostic LLM integration, and workflow automation applied to real products.",
    },
  ] satisfies Capability[],

  socials: [
    { label: "GitHub", href: "https://github.com/rohit1901" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rohit-khanduri-9098b84a/",
    },
    { label: "Substack", href: "https://rohitkhanduri.substack.com/" },
  ] satisfies SocialLink[],
};

export type Site = typeof site;
