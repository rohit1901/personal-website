import { getBooks } from "@website/lib/server/books";
import { NO_DESCRIPTION } from "@website/constants";
import {
  getCoverImage,
  getReadingSectionHeading,
  stripHtmlTags,
} from "@website/lib";
import type { GoodreadsReadingStatus } from "substack-feed-api";
import Image from "next/image";

const READING_SECTIONS: GoodreadsReadingStatus[] = [
  "IS_READING",
  "FINISHED",
  "WANTS_TO_READ",
];

export default async function BooksContent() {
  const states = await getBooks();

  return (
    <div className="space-y-12">
      <header className="max-w-prose">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Books
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Books I&apos;m reading, have read, and want to read. I&apos;m always
          looking for recommendations — feel free to reach out.
        </p>
      </header>

      {READING_SECTIONS.map((status) => {
        const books = states
          .filter((state) => state.status === status)
          .map((state) => state.book);

        if (books.length === 0) return null;

        return (
          <section key={status}>
            <h2 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              {getReadingSectionHeading(status)}
            </h2>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {books.map((book) => (
                <li
                  key={`${book.title}-${book.cover}`}
                  className="flex flex-col gap-4 py-6 sm:flex-row"
                >
                  <Image
                    src={getCoverImage(book.cover)}
                    alt={`Cover of ${book.title}`}
                    width={80}
                    height={120}
                    className="h-[120px] w-20 rounded-md object-cover"
                  />
                  <div className="min-w-0">
                    <h3 className="text-base font-medium text-foreground">
                      {book.title}
                    </h3>
                    {book.authors && book.authors.length > 0 && (
                      <p className="mt-1 text-sm italic text-muted-foreground">
                        {book.authors.map((author) => author.name).join(", ")}
                      </p>
                    )}
                    <p className="mt-2 line-clamp-4 max-w-prose text-sm leading-relaxed text-muted-foreground">
                      {stripHtmlTags(book.description, NO_DESCRIPTION)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
