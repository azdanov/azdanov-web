import "@/styles/tailwind.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { type Metadata } from "next";
import { ReactNode } from "react";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";

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
      <body className="flex h-full bg-white dark:bg-zinc-900 sm:bg-zinc-50 sm:dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
