import assert from "assert";
import * as cheerio from "cheerio";
import { Feed } from "feed";

export async function GET(req: Request) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!siteUrl) {
    throw Error("Missing NEXT_PUBLIC_SITE_URL environment variable");
  }

  let author = {
    name: "Anton Ždanov",
    email: "anton@azdanov.dev",
  };

  let feed = new Feed({
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

  let articleIds = require
    .context("../articles", true, /\/page\.mdx$/)
    .keys()
    .filter((key) => key.startsWith("./"))
    .map((key) => key.slice(2).replace(/\/page\.mdx$/, ""));

  for (let id of articleIds) {
    let url = String(new URL(`/articles/${id}`, req.url));
    const html = await (await fetch(url)).text();
    const $ = cheerio.load(html);

    const publicUrl = `${siteUrl}/articles/${id}`;
    const article = $("article").first();
    const title = article.find("h1").first().text();
    const date = article.find("time").first().attr("datetime");
    const content = article.find("[data-mdx-content]").first().html();

    assert(typeof title === "string");
    assert(typeof date === "string");
    assert(typeof content === "string");

    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      content,
      author: [author],
      contributor: [author],
      date: new Date(date),
    });
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      "content-type": "application/xml",
      "cache-control": "s-maxage=31556952",
    },
  });
}