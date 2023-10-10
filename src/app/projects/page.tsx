import { type Metadata } from "next";

import { Card } from "@/components/Card";
import { LinkIcon } from "@/components/icons/LinkIcon";
import { SimpleLayout } from "@/components/SimpleLayout";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects of Anton Ždanov, some things that I've made.",
};

export default function Projects() {
  return (
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
              <Card.Link
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </Card.Link>
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
  );
}

const projects = [
  {
    name: "NeStoReX",
    initials: "NoX",
    description:
      "A store made in .NET and EF Core. UI is made with React.js and Redux Toolkit. Payments are handled by Stripe. Hosting is on Fly.io.",
    link: { href: "https://github.com/azdanov/NeStoReX", label: "github.com" },
  },
  {
    name: "ReactxNet",
    initials: "RxN",
    description:
      "An app about organizing events made in .NET and EF Core. UI is made with React.js. For hosting I used Fly.io.",
    link: { href: "https://github.com/azdanov/ReactxNet", label: "github.com" },
  },
  {
    name: "AWS Terraform Static Website Demo",
    initials: "AWS",
    description:
      "Hosting a static website on AWS with Terraform using S3 and CloudFront.",
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
      "CS50: an Introduction to Computer Science from Harvard, this is where I started learning programming. I even had a chance to write in C.",
    link: { href: "https://github.com/azdanov/CS50", label: "github.com" },
  },
];
