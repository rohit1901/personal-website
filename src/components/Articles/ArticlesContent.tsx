import { Posts } from "@website/components/Posts";
import Section from "@website/components/Section";
import { SUBSTACK_FEED_URL } from "@website/constants";
import { parseSubstackRss } from "@website/lib/rss-feed-parser/substack";
import { SUBSTACK_DATA } from "@website/data";

export const getSubstackPosts = async () => {
  try {
    const uriComponent = `${SUBSTACK_FEED_URL}/feed`;
    const rawXML = await fetch(uriComponent);
    const parsedXML = await rawXML.text();
    const items = parseSubstackRss(parsedXML, {
      fallback: SUBSTACK_DATA,
    });
    return items;
  } catch (error: unknown) {
    console.error(error);
  }
};
export default async function ArticlesContent() {
  const feed = await getSubstackPosts();
  return (
    <Section className="flex-col">
      <div className="flex flex-col lg:w-3/4 w-full mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          Writing about the books I read, the things I learn, and the projects I
          build.
        </h1>
        <div className="mt-6 space-y-7 text-base">
          <span>
            All of my long-form thoughts on the things I’m learning, the books
            I’m reading, and the projects I’m building in a chronological order,
            so you can follow along with my journey.
          </span>
        </div>
      </div>
      <Posts feed={feed} />
    </Section>
  );
}
