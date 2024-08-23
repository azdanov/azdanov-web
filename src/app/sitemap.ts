import fs from "node:fs";
import path from "node:path";

import type { MetadataRoute } from "next";

interface PageInfo {
  route: string;
  lastModified: Date;
}

function getStaticPageInfo(dir: string): PageInfo[] {
  const pagesDir = path.join(process.cwd(), dir);
  const entries = fs.readdirSync(pagesDir, { withFileTypes: true });

  let pageInfo: PageInfo[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const subDirInfo = getStaticPageInfo(path.join(dir, entry.name));
      pageInfo = pageInfo.concat(subDirInfo);
    } else if (entry.name === "page.tsx") {
      const filePath = path.join(pagesDir, entry.name);
      const stats = fs.statSync(filePath);
      const route = dir === "src/app" ? "" : `${path.relative("src/app", dir)}`;
      pageInfo.push({
        route,
        lastModified: stats.mtime,
      });
    }
  }

  return pageInfo;
}

function extractDateFromMdx(content: string): Date | null {
  const dateMatch = RegExp(
    /date:\s*"(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z)"/,
  ).exec(content);
  if (dateMatch?.[1]) {
    return new Date(dateMatch[1]);
  }
  return null;
}

function getArticleInfo(dir: string, baseRoute = ""): PageInfo[] {
  const articlesDir = path.join(process.cwd(), dir);
  const entries = fs.readdirSync(articlesDir, { withFileTypes: true });

  let articleInfo: PageInfo[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const subDir = path.join(dir, entry.name);
      const subRoute = path.join(baseRoute, entry.name);
      const subDirInfo = getArticleInfo(subDir, subRoute);
      articleInfo = articleInfo.concat(subDirInfo);
    } else if (entry.name === "page.mdx") {
      const filePath = path.join(articlesDir, entry.name);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const extractedDate = extractDateFromMdx(fileContents);
      const route = path.join(
        baseRoute,
        path.dirname(entry.name).split(path.sep).pop() ?? "",
      );
      articleInfo.push({
        route,
        lastModified: extractedDate ?? fs.statSync(filePath).mtime,
      });
    }
  }

  return articleInfo;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Static pages
  const staticPageInfo = getStaticPageInfo("src/app");
  const staticPages = staticPageInfo.map((info) => ({
    url: `${baseUrl}/${info.route}`,
    lastModified: info.lastModified,
    changeFrequency: "monthly" as const,
    priority: info.route === "" ? 1.0 : 0.8,
  }));

  // Blog posts
  const articleInfo = getArticleInfo("src/app/articles");
  const blogPosts = articleInfo.map((info) => ({
    url: `${baseUrl}/articles/${info.route}`,
    lastModified: info.lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
