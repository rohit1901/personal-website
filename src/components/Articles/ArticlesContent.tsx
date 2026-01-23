import { Posts } from "@website/components/Posts";
import Section from "@website/components/Section";
import {
  SubstackItem,
  getSubstackFeed,
  getPosts,
  getFeedByLink,
} from "substack-feed-api";
export const SUBSTACK_FEED_URL = "https://rohitkhanduri.substack.com";
export const getSubstackPosts = async () => {
  try {
    const uriComponent = `${SUBSTACK_FEED_URL}/feed`;
    //const rawRes = await getSubstackFeed(uriComponent);
    const rawRes = await fetch(uriComponent);
    const z = await rawRes.text();
    console.log(z);
    return getPosts(getFeedByLink(z, SUBSTACK_FEED_URL));
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
