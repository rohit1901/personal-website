"use client";
import { ContentText } from "@website/components/ContentText";
import { formatDate, getBlogPosts } from "@website/lib";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { SubstackItem } from "substack-feed-api";

export const Post = (item?: SubstackItem) => {
  const pathname = usePathname();
  if (!item) return null;
  return (
    <ContentText
      className={`post flex ${pathname === "/" ? "flex-col" : "flex-row"} items-baseline rounded-2xl p-6 transition-all lg:ml-4`}
    >
      <div className="z-10 mb-3 mr-4 flex flex-row items-center">
        <span className="rounded-full text-sm">{formatDate(item.pubDate)}</span>
      </div>
      <div className="flex flex-col w-2/3">
        <h2 className="font-semibold tracking-tight text-sm">
          <Link href={item.link}>
            <span className="sm:rounded-2xl"></span>
            <span className="relative z-10">{item.title}</span>
          </Link>
        </h2>
        <p className="mt-2 text-sm">{item.description}</p>
        <Link
          href={item.link}
          className="mt-4 flex items-center font-medium read-article-link text-sm"
        >
          Read article
          <FaArrowRight className=" ml-1" />
        </Link>
      </div>
    </ContentText>
  );
};
// TODO: See the BooksContent server component. See ./Books/BooksContent.tsx BooksContent.tsx
export const Posts = ({ feed }: { feed?: SubstackItem[] }) => {
  const pathname = usePathname();
  return (
    <aside className="lg:w-3/4 w-full flex flex-col space-y-10 mr-2 border-l justify-evenly">
      {getBlogPosts(feed, pathname)?.map((item, index) => (
        <Post key={`item.guid-${index}`} {...item} />
      ))}
    </aside>
  );
};
