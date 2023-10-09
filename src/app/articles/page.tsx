import { type Metadata } from "next";

import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import { type ArticleWithSlug, getAllArticles } from "@/lib/articles";
import { formatDate } from "@/lib/formatDate";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Things I've found interesting to write about. Mostly tech related stuff.",
};

export default async function ArticlesIndex() {
  const articles = await getAllArticles();

  return (
    <SimpleLayout
      title="Articles"
      intro="Things I've found curious to write about. Mostly tech related stuff."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
}
