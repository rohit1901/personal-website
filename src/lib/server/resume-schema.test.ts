import { afterEach, describe, expect, it, vi } from "vitest";
import {
  normalizeCertificate,
  normalizeResume,
  parseResume,
  reportResumeValidationFailure,
  toJsonResume,
  validateResumeDocument,
} from "@website/lib/server/resume-schema";

function rawResume(overrides: Record<string, unknown> = {}) {
  return {
    id: "47",
    language: { id: "1", label: "English", value: "en" },
    basicInformation: {
      id: "b1",
      name: "Rohit Khanduri",
      label: "AWS Cloud & Software Architect",
      image: {
        src: "/assets/resume/avatar.png",
        alt: "Rohit Khanduri",
        width: 240,
        height: 300,
        fill: true,
      },
      email: "r.khanduri@nimbus-tech.de",
      summary: "Cloud architect.",
      location: {
        id: "l1",
        city: "Frankfurt",
        region: "Hesse",
        countryCode: "DE",
      },
      profiles: [
        { id: "p1", network: "GitHub", url: "https://github.com/rohit1901" },
      ],
    },
    work: [
      {
        id: "w1",
        name: "Miles & More GmbH",
        position: "Manager IT",
        url: "https://example.test/job",
        startDate: "2025-01-01T00:00:00.000Z",
        endDate: null,
        summary: "Mobile platform architecture.",
        highlights: [{ id: "h1", value: "Led the platform team" }],
        image: { src: "/assets/resume/work.png" },
        language: { id: "1", label: "English" },
      },
    ],
    education: [
      {
        id: "e1",
        institution: "Example University",
        area: "Computer Science",
        studyType: "Bachelor",
        startDate: "2008",
        endDate: "2012",
      },
    ],
    awards: [
      { id: "a1", title: "Cloud Award", awarder: "AWS", date: "2024-01-01" },
    ],
    skills: [
      { id: "s1", name: "Cloud", keywords: "AWS, Terraform, AWS", level: "x" },
    ],
    ...overrides,
  };
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe("normalizeResume", () => {
  it("projects the backend shape onto the lean view model", () => {
    const resume = normalizeResume(rawResume());
    expect(resume).toBeDefined();
    expect(resume?.basicInformation.name).toBe("Rohit Khanduri");
    expect(resume?.basicInformation.image).toEqual({
      src: "/assets/resume/avatar.png",
      alt: "Rohit Khanduri",
      width: 240,
      height: 300,
    });
    expect(resume?.work[0]?.highlights).toEqual(["Led the platform team"]);
    expect(resume?.work[0]?.startDate).toBe("2025-01-01");
    expect(resume?.skills[0]?.keywords).toEqual(["AWS", "Terraform"]);
  });

  it("drops optional values that fail their local checks", () => {
    const resume = normalizeResume(
      rawResume({
        basicInformation: {
          name: "Rohit Khanduri",
          email: "not-an-email",
          image: { src: "javascript:alert(1)", width: -1 },
          location: {},
        },
        work: [
          {
            name: "Employer",
            startDate: "2025-13-40",
            endDate: "not-a-date",
            highlights: [{ value: "Kept" }, { value: 42 }, null, "Also kept"],
          },
        ],
      }),
    );

    expect(resume?.basicInformation.email).toBeUndefined();
    expect(resume?.basicInformation.image).toBeUndefined();
    expect(resume?.basicInformation.location).toBeUndefined();
    expect(resume?.work[0]).toMatchObject({
      name: "Employer",
      startDate: undefined,
      endDate: undefined,
      highlights: ["Kept", "Also kept"],
    });
  });

  it("requires id, name, and language", () => {
    expect(normalizeResume({ language: { label: "English" } })).toBeUndefined();
    expect(
      normalizeResume({
        id: "47",
        language: { label: "English" },
        basicInformation: { name: "   " },
      }),
    ).toBeUndefined();
    expect(
      normalizeResume({
        id: "47",
        basicInformation: { name: "Rohit Khanduri" },
      }),
    ).toBeUndefined();
  });

  it("rejects non-array sections instead of silently flattening them", () => {
    expect(
      normalizeResume(rawResume({ skills: { name: "Cloud" } })),
    ).toBeUndefined();
    expect(normalizeResume(rawResume({ work: "one job" }))).toBeUndefined();
  });
});

describe("parseResume", () => {
  it("accepts a valid record", () => {
    expect(parseResume(rawResume())?.id).toBe("47");
  });

  it("drops malformed records without throwing", () => {
    expect(parseResume(null)).toBeUndefined();
    expect(parseResume({ id: "47" })).toBeUndefined();
    expect(parseResume(rawResume({ work: { name: "bad" } }))).toBeUndefined();
  });
});

describe("toJsonResume", () => {
  it("builds a canonical JSON Resume projection", () => {
    const resume = normalizeResume(rawResume());
    if (!resume) throw new Error("fixture should normalize");

    const canonical = toJsonResume(resume) as {
      basics: {
        name: string;
        image: string;
        custom: { website: { id: string; language: string } };
      };
      work: Array<{ name: string; highlights: string[] }>;
      skills: Array<{ name: string; keywords: string[] }>;
    };

    expect(canonical.basics.name).toBe("Rohit Khanduri");
    expect(canonical.basics.image).toBe("/assets/resume/avatar.png");
    expect(canonical.basics.custom.website).toMatchObject({
      id: "47",
      language: "English",
    });
    expect(canonical.work[0]?.name).toBe("Miles & More GmbH");
    expect(canonical.work[0]?.highlights).toEqual(["Led the platform team"]);
    expect(canonical.skills[0]?.keywords).toEqual(["AWS", "Terraform"]);
  });
});

describe("validateResumeDocument", () => {
  it("returns the canonical schema error paths", () => {
    const errors = validateResumeDocument({
      basics: { name: "Rohit Khanduri", url: "not a url" },
      work: [{ highlights: [{ value: "objects are not canonical" }] }],
    });

    expect(errors.length).toBeGreaterThan(0);
    const fields = errors.map((error) => error.property);
    expect(fields).toContain("instance.basics.url");
    expect(fields).toContain("instance.work[0].highlights[0]");
  });

  it("never logs error messages or instance values", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});

    reportResumeValidationFailure("resume", [
      {
        property: "instance.basics.url",
        message: "secret-value is not a valid uri",
      },
    ]);

    const logged = JSON.stringify(spy.mock.calls);
    expect(logged).toContain("instance.basics.url");
    expect(logged).not.toContain("secret-value");
  });
});

describe("normalizeCertificate", () => {
  it("maps and validates a certificate relation", () => {
    expect(
      normalizeCertificate({
        resume: { id: "47" },
        certification: {
          id: "c1",
          title: "AWS Solutions Architect",
          description: "Associate",
          link: "https://example.test/cert",
          image: { src: "/ignored.png" },
        },
      }),
    ).toEqual({
      id: "c1",
      title: "AWS Solutions Architect",
      description: "Associate",
      link: "https://example.test/cert",
    });
  });

  it("keeps the certificate but drops an unsafe link", () => {
    expect(
      normalizeCertificate({
        certification: {
          id: "c1",
          title: "Legacy certificate",
          description: "No longer verifiable",
          link: "http://example.test/cert",
        },
      }),
    ).toEqual({
      id: "c1",
      title: "Legacy certificate",
      description: "No longer verifiable",
      link: "",
    });
  });

  it("rejects entries without a certification title", () => {
    expect(normalizeCertificate(null)).toBeUndefined();
    expect(
      normalizeCertificate({ certification: { id: "c1" } }),
    ).toBeUndefined();
  });
});
