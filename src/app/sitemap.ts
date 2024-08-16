import fs from "fs";
import { MetadataRoute } from "next";
import path from "path";

function getArticleSlugs(dir: string): string[] {
  const articlesDir = path.join(process.cwd(), dir);
  const entries = fs.readdirSync(articlesDir, { withFileTypes: true });

  let slugs: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const yearSlugs = getArticleSlugs(path.join(dir, entry.name));
      slugs = slugs.concat(yearSlugs.map((slug) => `${entry.name}/${slug}`));
    } else if (entry.name === "page.mdx") {
      slugs.push(
        path.dirname(path.join(dir, entry.name)).split(path.sep).pop() || "",
      );
    }
  }

  return slugs;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Static pages
  const staticPages = ["", "/about", "/projects", "/articles"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog posts
  const articleSlugs = getArticleSlugs("src/app/articles");
  const blogPosts = articleSlugs.map((slug) => ({
    url: `${baseUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
