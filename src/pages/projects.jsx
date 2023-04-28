import Head from "next/head";

import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";

const projects = [
  {
    name: "ReactxNet",
    initials: "RxN",
    description:
      "My first big venture into .NET and EF Core. UI is made with React.js, which I know. It's an app about organizing events. For hosting I used Fly.io.",
    link: { href: "https://github.com/azdanov/ReactxNet", label: "github.com" },
  },
  {
    name: "AWS Terraform Static Website Demo",
    initials: "AWS",
    description:
      "I have wanted to figure out how could I host a static website on AWS with Terraform using S3 and CloudFront. Something similar to Vercel or Netlify.",
    link: {
      href: "https://github.com/azdanov/aws-terraform-static-website-demo",
      label: "github.com",
    },
  },
  {
    name: "Film API",
    initials: "API",
    description:
      "Exploring Go and PostgreSQL to create a minimal REST API for movies. Caddy is used as a reverse proxy and for automatic HTTPS.",
    link: { href: "https://github.com/azdanov/filmapi", label: "github.com" },
  },
  {
    name: "Spring Fresh Ads",
    initials: "SFA",
    description:
      "An advertisement website made in Spring Boot hosted on Heroku with Email support, Stripe for payments and i18n support.",
    link: {
      href: "https://github.com/azdanov/spring-fresh-ads",
      label: "github.com",
    },
  },
  {
    name: "CS50",
    initials: "CS50",
    description:
      "This is where it all started, CS50: an Introduction to Computer Science from Harvard. I even had a chance to program in C.",
    link: { href: "https://github.com/azdanov/CS50", label: "github.com" },
  },
];

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Anton Ždanov</title>
        <meta name="description" content="Personal Projects" />
      </Head>
      <SimpleLayout
        title="Personal Projects"
        intro="Over the years, I have worked on various small projects that helped me learn new things. It's difficult to choose which ones I like most, but here are some of them.
        They are all open-source, so feel free to explore the code and get some inspiration or insights for your learning or projects."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
                  <span className="text-sm font-medium leading-none text-white">
                    {project.initials}
                  </span>
                </span>
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-blue-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  );
}
