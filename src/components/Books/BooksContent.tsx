import { Book } from "@website/components/Books/Book";
import Section from "@website/components/Section";
import { GOODREADS_FEED_URL } from "@website/constants";
import { GOODREADS_DATA } from "@website/data";
import { READING_STATES, parseGoodreadsRss } from "substack-feed-api";
export default async function BooksContent() {
  const goodreadsRawFeed = await fetch(GOODREADS_FEED_URL);
  const goodreadsStates = parseGoodreadsRss(await goodreadsRawFeed.text(), {
    fallback: GOODREADS_DATA,
  });

  return (
    <Section className="flex-col">
      <div className="flex flex-col xl:w-3/4 2xl:w-3/4 w-full mb-10">
        <h1 className="text-4xl font-bold tracking-tight w-3/4">
          Books that I&apos;m reading, I&apos;ve read, want to read, and a lot
          of other things related to books.
        </h1>
        <div className="mt-6 space-y-7 text-base">
          <span>
            Here are some of the books that I&apos;ve read, am reading, or want
            to read. I&apos;m always looking for new books to read, so if you
            have any recommendations, feel free to reach out to me.
          </span>
        </div>
      </div>
      {READING_STATES.map((readingState) => (
        <Book
          key={readingState}
          books={goodreadsStates
            .filter((state) => readingState === state.status)
            .map((state) => state.book)}
          status={readingState}
        />
      ))}
    </Section>
  );
}
