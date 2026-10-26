import { afterEach, describe, expect, it, vi } from "vitest";
import { ExternalServiceError } from "@website/lib/server/graphql";

const { requestGraphQL } = vi.hoisted(() => ({ requestGraphQL: vi.fn() }));

vi.mock("@website/lib/server/graphql", async (importOriginal) => {
  const actual =
    await importOriginal<typeof import("@website/lib/server/graphql")>();
  return { ...actual, requestGraphQL };
});

const { getResumes, getResumeByLanguage, getResumeWithCertifications } =
  await import("@website/lib/server/resume");

function resume(overrides: Record<string, unknown> = {}) {
  return {
    id: "47",
    language: { id: "1", label: "English", value: "en" },
    basicInformation: { id: "b1", name: "Rohit Khanduri" },
    ...overrides,
  };
}

afterEach(() => {
  requestGraphQL.mockReset();
  vi.restoreAllMocks();
});

describe("getResumes", () => {
  it("returns only usable resumes", async () => {
    requestGraphQL.mockResolvedValueOnce({
      resumes: [
        resume(),
        { id: "no-basics" },
        resume({ id: "bad-sections", work: "not-an-array" }),
        null,
      ],
    });
    const result = await getResumes();
    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe("47");
  });

  it("returns an empty list when the request fails", async () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    requestGraphQL.mockRejectedValueOnce(
      new ExternalServiceError("graphql", "http", "boom", { status: 500 }),
    );
    await expect(getResumes()).resolves.toEqual([]);
    expect(spy).toHaveBeenCalled();
  });

  it("returns an empty list when the payload shape is wrong", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    requestGraphQL.mockResolvedValueOnce({ resumes: "not-an-array" });
    await expect(getResumes()).resolves.toEqual([]);
  });
});

describe("getResumeByLanguage", () => {
  it("selects the matching language", async () => {
    requestGraphQL.mockResolvedValueOnce({
      resumes: [
        resume({ id: "48", language: { id: "2", label: "German" } }),
        resume({ id: "47" }),
      ],
    });
    const result = await getResumeByLanguage("English");
    expect(result?.id).toBe("47");
  });

  it("never selects another person's résumé for the same language", async () => {
    requestGraphQL.mockResolvedValueOnce({
      resumes: [
        resume({
          id: "99",
          basicInformation: { id: "b99", name: "Florian Zeidler" },
        }),
        resume(),
      ],
    });

    const result = await getResumeByLanguage("English");
    expect(result?.id).toBe("47");
  });

  it("matches names and languages case-insensitively", async () => {
    requestGraphQL.mockResolvedValueOnce({
      resumes: [resume({ language: { id: "1", label: "english" } })],
    });
    const result = await getResumeByLanguage("ENGLISH");
    expect(result?.id).toBe("47");
  });

  it("returns undefined when no resume matches", async () => {
    requestGraphQL.mockResolvedValueOnce({ resumes: [resume()] });
    await expect(getResumeByLanguage("Klingon")).resolves.toBeUndefined();
  });
});

describe("getResumeWithCertifications", () => {
  it("attaches mapped certifications", async () => {
    requestGraphQL
      .mockResolvedValueOnce({ resumes: [resume()] })
      .mockResolvedValueOnce({
        resumeCertifications: [
          {
            resume: { id: "47" },
            certification: {
              id: "c1",
              title: "AWS Solutions Architect",
              description: "Associate",
              link: "https://example.test/cert",
              image: { src: "/cert.png", alt: "AWS" },
            },
          },
          {
            resume: { id: "99" },
            certification: { id: "c2", title: "Other person" },
          },
        ],
      });

    const result = await getResumeWithCertifications("English");
    expect(result?.certificates).toHaveLength(1);
    expect(result?.certificates[0]?.title).toBe("AWS Solutions Architect");
  });

  it("renders untrusted certificate links as text", async () => {
    requestGraphQL
      .mockResolvedValueOnce({ resumes: [resume()] })
      .mockResolvedValueOnce({
        resumeCertifications: [
          {
            resume: { id: "47" },
            certification: {
              id: "c1",
              title: "Legacy certificate",
              description: "Issued by someone",
              link: "http://example.test/cert",
            },
          },
        ],
      });

    const result = await getResumeWithCertifications("English");
    expect(result?.certificates).toEqual([
      {
        id: "c1",
        title: "Legacy certificate",
        description: "Issued by someone",
        link: "",
      },
    ]);
  });

  it("degrades to an empty certification list on failure", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    requestGraphQL
      .mockResolvedValueOnce({ resumes: [resume()] })
      .mockRejectedValueOnce(new Error("network"));

    const result = await getResumeWithCertifications("English");
    expect(result?.id).toBe("47");
    expect(result?.certificates).toEqual([]);
  });
});
