import { Head, Html, Main, NextScript } from "next/document";

const modeScript = `
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  updateMode();
  darkModeMediaQuery.addEventListener("change", updateModeWithoutTransitions);
  window.addEventListener("storage", updateModeWithoutTransitions);

  function updateMode() {
    const isSystemDarkMode = darkModeMediaQuery.matches;
    const isDarkMode =
      window.localStorage.isDarkMode === "true" ||
      (!("isDarkMode" in window.localStorage) && isSystemDarkMode);

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    }
  }

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add("[&_*]:!transition-none");
    window.setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none");
    }, 0);
  }

  function updateModeWithoutTransitions() {
    disableTransitionsTemporarily();
    updateMode();
  }
`;

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link
          rel="alternate"
          type="application/rss+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.xml`}
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/rss/feed.json`}
        />
        <link
          rel="apple-touch-icon"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/favicon.svg`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/favicon.png`}
        />
        <link
          rel="manifest"
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/site.webmanifest`}
        />
        <meta name="msapplication-TileColor" content="#fbbf24" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
