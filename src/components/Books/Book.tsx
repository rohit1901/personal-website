import { PhoneHidden } from "@website/components/Phone/PhoneHidden";
import { NO_DESCRIPTION } from "@website/constants";
import {
  getCoverImage,
  getReadingSectionHeading,
  stripHtmlTags,
} from "@website/lib";
import {
  GoodreadsBook,
  GoodreadsReadingStatus,
} from "@website/lib/rss-feed-parser/goodreads";
import Image from "next/image";

type BookProps = {
  books: GoodreadsBook[];
  status: GoodreadsReadingStatus;
};
const getCommaSeparatedAuthors = (authors: GoodreadsBook["authors"]) => {
  return authors?.map((author, i) => (
    <span key={`${author.name}-${i}`} className="mr-2">
      {author.name}
      {authors?.length - 1 !== i && ","}
    </span>
  ));
};
const CommaSeparatedAuthors = ({
  authors,
}: {
  authors: GoodreadsBook["authors"];
}) => {
  return (
    <div className="inline-flex font-semibold italic">
      {getCommaSeparatedAuthors(authors)}
    </div>
  );
};
type BookCoverProps = {
  cover?: string;
};
const BookCover = ({ cover }: BookCoverProps) => {
  return (
    <Image
      src={getCoverImage(cover)}
      alt="Book Cover"
      width={200}
      height={300}
      className="py-6 pl-0 md:pl-6 lg:pl-6 xl:pl-6 2xl:pl-6 rounded-l-xl object-cover mx-auto"
    />
  );
};
export const Book = ({ books, status }: BookProps) => {
  return (
    <div className="collapse collapse-plus my-4">
      <input
        type="radio"
        name="my-accordion-1"
        defaultChecked={status === "IS_READING"}
      />
      <h2 className="text-2xl font-bold tracking-tight collapse-title">
        {getReadingSectionHeading(status)}
      </h2>
      <div className="flex flex-col xl:w-3/4 2xl:w-3/4 w-full collapse-content">
        {books.map((book) => (
          <div className="card card-side border my-2" key={book.title}>
            <BookCover cover={book.cover} />
            <PhoneHidden className="card-body w-1/2">
              <h1 className="card-title">{book.title}</h1>
              <div className="inline-flex">
                <CommaSeparatedAuthors authors={book.authors} />
              </div>
              <div className="space-y-7 max-h-52 overflow-hidden">
                <span className="line-clamp-6">
                  {stripHtmlTags(book.description, NO_DESCRIPTION)}
                </span>
              </div>
            </PhoneHidden>
          </div>
        ))}
      </div>
    </div>
  );
};
