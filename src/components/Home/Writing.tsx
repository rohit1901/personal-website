import Link from "next/link";
import type { Article } from "@website/types/article";
import { formatDate, stripHtmlTags } from "@website/lib";

export function Writing({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <section id="writing" className="ds-container scroll-mt-20 py-16">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Writing
          </h2>
          <span aria-hidden className="gradient-bar mt-2 block" />
        </div>
        <Link
          href="/articles"
          className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          All articles →
        </Link>
      </div>

      <ul className="mt-8 divide-y divide-border border-y border-border">
        {articles.map((article) => (
          <li key={article.url}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-1 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              <time className="text-xs text-muted-foreground">
                {formatDate(article.publishedAt)}
              </time>
              <span className="text-base font-medium text-foreground group-hover:text-accent">
                {article.title}
              </span>
              {article.summary && (
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {stripHtmlTags(article.summary)}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
