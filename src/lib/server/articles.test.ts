import { afterEach, describe, expect, it, vi } from "vitest";

const { parseSubstackRss } = vi.hoisted(() => ({ parseSubstackRss: vi.fn() }));

vi.mock("substack-feed-api", () => ({
  parseSubstackRss: (...args: unknown[]) => parseSubstackRss(...args),
}));

const { getArticles } = await import("@website/lib/server/articles");
const { SUBSTACK_DATA } = await import("@website/data");

function mockFetch(implementation: typeof fetch) {
  vi.stubGlobal("fetch", vi.fn(implementation));
}

afterEach(() => {
  vi.unstubAllGlobals();
  parseSubstackRss.mockReset();
  vi.restoreAllMocks();
});

describe("getArticles", () => {
  it("returns parsed items on success", async () => {
    const items = [{ title: "Hello", link: "https://example.test/a" }];
    mockFetch(async () => new Response("<rss/>", { status: 200 }));
    parseSubstackRss.mockReturnValueOnce(items);
    await expect(getArticles()).resolves.toEqual(items);
  });

  it("falls back to the bundled feed on HTTP error", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    mockFetch(async () => new Response("nope", { status: 500 }));
    await expect(getArticles()).resolves.toEqual(SUBSTACK_DATA);
  });

  it("falls back to the bundled feed on an empty feed", async () => {
    mockFetch(async () => new Response("<rss/>", { status: 200 }));
    parseSubstackRss.mockReturnValueOnce([]);
    await expect(getArticles()).resolves.toEqual(SUBSTACK_DATA);
  });

  it("falls back to the bundled feed when parsing throws", async () => {
    vi.spyOn(console, "error").mockImplementation(() => {});
    mockFetch(async () => new Response("<not-rss/>", { status: 200 }));
    parseSubstackRss.mockImplementationOnce(() => {
      throw new Error("malformed feed");
    });
    await expect(getArticles()).resolves.toEqual(SUBSTACK_DATA);
  });
});
