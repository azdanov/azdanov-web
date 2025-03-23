import "@/styles/tailwind.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3777E1" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? ""),
  title: {
    template: "%s - Anton Ždanov",
    default: "Anton Ždanov - Software Developer",
  },
  description:
    "Hey, I'm Anton, a software developer based in Tallinn. I work with front-end, back-end, database, and infrastructure technologies. In my free time, I like to play video games, enjoy doing fitness, read books and study to get better at what I do.",
  alternates: {
    canonical: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? ""),
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

const sans = localFont({
  src: "../fonts/AtkinsonHyperlegibleNextVF-Variable.woff2",
  variable: "--sans",
});

const mono = localFont({
  src: "../fonts/AtkinsonHyperlegibleMonoVF-Variable.woff2",
  variable: "--mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} overflow-y-scroll font-sans antialiased`}
      suppressHydrationWarning
    >
      <body className="flex bg-white sm:bg-zinc-50 dark:bg-zinc-900 sm:dark:bg-black">
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
