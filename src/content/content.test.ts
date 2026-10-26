import { describe, expect, it } from "vitest";
import {
  getFeaturedProjects,
  getProjectBySlug,
  projects,
} from "@website/content/projects";
import { primaryNav, secondaryNav } from "@website/content/navigation";
import { site } from "@website/content/site";
import { toArticle } from "@website/types/article";

describe("projects content", () => {
  it("has unique slugs", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every project has required presentation fields", () => {
    for (const project of projects) {
      expect(project.title).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(project.role).toBeTruthy();
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.outcomes.length).toBeGreaterThan(0);
    }
  });

  it("exposes featured projects and looks them up by slug", () => {
    const featured = getFeaturedProjects();
    expect(featured.length).toBeGreaterThan(0);
    expect(featured.every((project) => project.featured)).toBe(true);
    expect(getProjectBySlug(featured[0].slug)).toEqual(featured[0]);
    expect(getProjectBySlug("does-not-exist")).toBeUndefined();
  });

  it("only exposes verified external project URLs", () => {
    const withUrl = projects.filter((project) => project.url);
    expect(withUrl.map((project) => project.slug)).toEqual(["skywink"]);
    for (const project of projects) {
      if (project.url) expect(project.url).toMatch(/^https:\/\//);
    }
  });
});

describe("navigation content", () => {
  it("uses unique hrefs", () => {
    const hrefs = [...primaryNav, ...secondaryNav].map((item) => item.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});

describe("site content", () => {
  it("has a valid email and resume anchors", () => {
    expect(site.email).toContain("@");
    expect(site.resume.en).toMatch(/^https?:\/\//);
    expect(site.resume.de).toMatch(/^https?:\/\//);
  });
});

describe("toArticle", () => {
  it("maps a Substack item to the website Article model", () => {
    const article = toArticle({
      title: "Hello",
      description: "<p>World</p>",
      link: "https://rohitkhanduri.substack.com/p/hello",
      pubDate: "2024-01-02T00:00:00.000Z",
      content: "",
    });
    expect(article).toEqual({
      title: "Hello",
      url: "https://rohitkhanduri.substack.com/p/hello",
      publishedAt: "2024-01-02T00:00:00.000Z",
      summary: "<p>World</p>",
    });
  });

  it("drops items with unexpected or unsafe links", () => {
    for (const link of [
      "https://example.com/p/hello",
      "http://rohitkhanduri.substack.com/p/hello",
      "javascript:alert(1)",
    ]) {
      expect(
        toArticle({
          title: "Hello",
          description: "World",
          link,
          pubDate: "2024-01-02T00:00:00.000Z",
          content: "",
        }),
      ).toBeUndefined();
    }
  });
});
