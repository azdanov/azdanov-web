import Image, { type ImageProps } from "next/image";

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";

import betpawaLogo from "@/images/logos/betpawa.jpeg";
import pawapayLogo from "@/images/logos/pawapay.jpeg";
import { type ArticleWithSlug, getAllArticles } from "@/lib/articles";
import { formatDate } from "@/lib/formatDate";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { BriefcaseIcon } from "@/components/icons/BriefcaseIcon";
import { IconLink } from "@/components/IconLink";
import { Code } from "@/components/code";

export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 4);

  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software developer, curious learner and fitness enthusiast.
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            Hey, I'm Anton, a software developer based in{" "}
            <span title="Tallinn, Estonia">Tallinn</span>. I work with
            front-end, back-end, database, and infrastructure technologies. In
            my free time, I like to play video games, enjoy doing fitness, read
            books and study to get better at what I do.
          </p>
          <div className="mt-6 flex gap-6">
            <IconLink
              href="https://github.com/azdanov"
              aria-label="Connect on GitHub"
              icon={GitHubIcon}
              target="_blank"
              rel="noopener noreferrer"
            />
            <IconLink
              href="https://www.linkedin.com/in/azdanov/"
              aria-label="Connect on LinkedIn"
              icon={LinkedInIcon}
              target="_blank"
              rel="noopener noreferrer"
            />
            <IconLink
              href="https://twitter.com/thezdanov/"
              aria-label="Connect on Twitter"
              icon={TwitterIcon}
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

function Article({ article }: { article: ArticleWithSlug }) {
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

interface Role {
  company: string;
  title: string;
  logo: ImageProps["src"];
  start: string;
  end: string;
}

function Resume() {
  const resume: Role[] = [
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
    <div className="rounded-md border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role) => (
          <li key={role.company} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={role.logo}
                alt={role.company}
                className="h-7 w-7"
                unoptimized
              />
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
                className="ml-auto text-xs text-zinc-500 dark:text-zinc-400"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="https://www.linkedin.com/in/azdanov/"
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
