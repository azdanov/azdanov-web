import { type Metadata } from "next";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";

import "@/styles/tailwind.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s - Anton Ždanov",
    default: "Anton Ždanov - Software Developer",
  },
  description:
    "Hey, I'm Anton, a software developer based in Tallinn. I work with front-end, back-end, database, and infrastructure technologies. In my free time, I like to play video games, enjoy doing fitness, read books and study to get better at what I do.",
  alternates: {
    types: {
      "application/rss+xml": `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
