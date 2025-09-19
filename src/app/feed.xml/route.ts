import * as cheerio from "cheerio";
import { Feed } from "feed";

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    throw Error("Missing NEXT_PUBLIC_SITE_URL environment variable");
  }

  const author = {
    name: "Anton Ždanov",
    email: "anton@azdanov.dev",
  };

  const feed = new Feed({
    title: author.name,
    description: `Personal website of ${author.name}`,
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  });

  const articleIds = require
    .context("../articles", true, /\/page\.mdx$/)
    .keys()
    .filter((key: string) => key.startsWith("./"))
    .map((key: string) => key.slice(2).replace(/\/page\.mdx$/, ""));

  const articleUrls = articleIds.map((id) => ({
    id,
    url: new URL(`/articles/${id}`, siteUrl).toString(),
  }));

  const items = await Promise.all(
    articleUrls.map(async ({ id, url }) => {
      try {
        const res = await fetch(url);
        if (!res.ok) return null;

        const html = await res.text();
        const $ = cheerio.load(html);

        const article = $("article").first();
        const title = article.find("h1").first().text().trim();
        const date = article.find("time").first().attr("datetime");
        const content = article.find("[data-mdx-content]").first().html() ?? "";

        if (!title || !date) return null;

        const publicUrl = `${siteUrl}/articles/${id}`;
        return {
          title,
          id: publicUrl,
          link: publicUrl,
          content,
          author: [author],
          contributor: [author],
          date: new Date(date),
        };
      } catch {
        return null;
      }
    }),
  );

  items
    .filter((x): x is NonNullable<typeof x> => Boolean(x))
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .forEach((item) => feed.addItem(item));

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      "content-type": "application/xml",
      "cache-control": "public, s-maxage=31556952",
    },
  });
}
