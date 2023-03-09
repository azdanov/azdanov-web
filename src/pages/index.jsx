import Head from "next/head";
import Image from "next/image";
import clsx from "clsx";
import { IconLink } from "@/components/Social";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import betpawaLogo from "@/images/logos/betpawa.jpeg";
import pawapayLogo from "@/images/logos/pawapay.jpeg";
import { formatDate } from "@/lib/formatDate";
import { generateRssFeed } from "@/lib/generateRssFeed";
import { getAllArticles } from "@/lib/getAllArticles";
import Go from "@/components/snippets/go.mdx";
import Java from "@/components/snippets/java.mdx";
import CSharp from "@/components/snippets/csharp.mdx";
import JavaScript from "@/components/snippets/javascript.mdx";
import Python from "@/components/snippets/python.mdx";
import PHP from "@/components/snippets/php.mdx";
import Ruby from "@/components/snippets/ruby.mdx";
import Sql from "@/components/snippets/sql.mdx";
import { Prose } from "@/components/Prose";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

function Resume() {
  const resume = [
    {
      company: "pawaPay",
      title: "Software Engineer",
      logo: pawapayLogo,
      start: "2021",
      end: "2023",
    },
    {
      company: "betPawa",
      title: "Full-Stack Developer",
      logo: betpawaLogo,
      start: "2019",
      end: "2021",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-md shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt={role.company} className="h-7 w-7" />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="https://www.linkedin.com/in/thezdanov/"
        variant="secondary"
        className="group mt-6 w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        More on LinkedIn
      </Button>
    </div>
  );
}

function Code() {
  const rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    setLanguages(
      [Python, Go, CSharp, JavaScript, Java, PHP, Ruby, Sql]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .slice(0, 5)
    );
  }, []);

  return (
    <div className="mt-16 h-[200px] border border-transparent sm:mt-20 sm:h-[325px]">
      <Transition
        className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"
        show={languages.length > 0}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {languages.map((Language, index) => (
          <div
            key={index}
            className={clsx(
              "languages relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
              rotations[index % rotations.length]
            )}
          >
            <Prose>
              <Language />
            </Prose>
          </div>
        ))}
      </Transition>
    </div>
  );
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Anton Ždanov - Full-stack developer</title>
        <meta
          name="description"
          content="Hey, I’m Anton, a full-stack developer based in Tallinn. I work with
            front-end, back-end, database, and infrastructure technologies. In
            my free time, I like to play video games, enjoy doing fitness, read
            books and study to get better at what I do."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Full-stack developer, curious learner and fitness enthusiast.
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Hey, I’m Anton, a full-stack developer based in Tallinn. I work with
            front-end, back-end, database, and infrastructure technologies. In
            my free time, I like to play video games, enjoy doing fitness, read
            books and study to get better at what I do.
          </p>
          <div className="mt-6 flex gap-6">
            <IconLink
              href="https://github.com/azdanov"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              target="_blank"
              rel="noopener noreferrer"
            />
            <IconLink
              href="https://www.linkedin.com/in/thezdanov/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </Container>
      <Code />
      <Container className="mt-24 md:mt-20">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === "production") {
    await generateRssFeed();
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  };
}
