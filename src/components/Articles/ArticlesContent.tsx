import { getArticles } from "@website/lib/server/articles";
import { toArticle, type Article } from "@website/types/article";
import { SUBSTACK_FEED_URL } from "@website/constants";
import { formatDate, stripHtmlTags } from "@website/lib";

export default async function ArticlesContent() {
  const articles = (await getArticles())
    .map(toArticle)
    .filter((article): article is Article => article !== undefined);

  return (
    <div className="space-y-12">
      <header className="max-w-prose">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Writing
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Long-form thoughts on the things I&apos;m learning, the books I&apos;m
          reading, and the projects I&apos;m building — in chronological order.
        </p>
        <a
          href={SUBSTACK_FEED_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          Subscribe on Substack →
        </a>
      </header>

      {articles.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No articles available right now.
        </p>
      ) : (
        <ul className="divide-y divide-border border-y border-border">
          {articles.map((article) => (
            <li key={article.url}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                <time className="text-xs text-muted-foreground">
                  {formatDate(article.publishedAt)}
                </time>
                <span className="text-lg font-medium text-foreground group-hover:text-accent">
                  {article.title}
                </span>
                {article.summary && (
                  <span className="max-w-prose text-sm leading-relaxed text-muted-foreground">
                    {stripHtmlTags(article.summary)}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
