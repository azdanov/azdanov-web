import Head from "next/head";
import Image from "next/image";

import { Container } from "@/components/Container";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import portraitImage from "@/images/portrait.jpg";
import { SocialLink } from "@/components/Social";
import Link from "next/link";

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Anton Ždanov</title>
        <meta
          name="description"
          content="I’m Anton Ždanov. I live in Tallinn."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Anton Ždanov. I live in Tallinn.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I work with front-end, back-end, database, and infrastructure
                technologies. In my free time, I like to play video games, enjoy
                doing fitness, read books and study to get better at what I do.
              </p>
              <section>
                <p>
                  Here are some of the technologies I've worked with over the
                  years:
                </p>
                <ul className="list-inside list-disc">
                  <li>HTML / CSS / SCSS</li>
                  <li>
                    JavaScript / TypeScript (React.js, Next.js, Vue.js, Angular,
                    Node.js)
                  </li>
                  <li>Java (Spring) / Hibernate</li>
                  <li>C# (.NET) / Entity Framework</li>
                  <li>SQL (MySQL) / RabbitMQ / Redis</li>
                  <li>Go / Python / PHP</li>
                  <li>AWS / Terraform / Docker / Git</li>
                </ul>
                <small>
                  More on my{" "}
                  <Link
                    href="https://www.linkedin.com/in/thezdanov/"
                    className="text-zinc-500 underline hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn profile
                  </Link>
                </small>
              </section>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
                My story
              </h2>
              <p>
                Ever since I was a kid, I was fascinated by video games. I would
                spend hours playing them and submerging myself in their worlds.
                Later on I started learning how to make 3D models, photoshop
                images and create computer music. I really enjoyed experimenting
                and trying out new things.
              </p>
              <p>
                As I got older, I started to learn how to code. Trying to make
                simple websites. Modify a theme for WordPress for a friend. At
                that time it felt very difficult and I didn't really understand
                what I was doing. Often than not I would get stuck and not know
                how to continue.
              </p>
              <p>
                After doing non-IT related jobs for a few years, I decided to
                change my career path and start learning how to code again. This
                time I was determined to learn it properly. I started with
                learning HTML, CSS and JavaScript. Then I moved on to Python,
                PHP, etc. I was learning everything I could get my hands on.
                Probably not the best approach, but it worked for me. I was able
                to get a job as a full-stack developer due to my exposure to
                various languages and frameworks and I've been working as a
                developer ever since.
              </p>
              <p>
                I have experience working with various technologies and
                frameworks, different sized teams and different types of
                projects. With teams that follow agile methodologies and teams
                that don't. I've worked on projects that were built from scratch
                and projects that were about maintaining, extending and
                improving legacy code.
              </p>
              <p>
                In my free time I like to play video games, enjoy doing fitness,
                listen to music, read books and study. I do kettlebell training
                and Brazilian Jiu-Jitsu. I enjoy playing all sorts of games
                without specific preferences. Same about music, as long as it
                sounds good I'm happy. With books I prefer fantasy and sci-fi
                genres.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/azdanov"
                icon={GitHubIcon}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/thezdanov/"
                icon={LinkedInIcon}
                className="mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:anton@azdanov.dev"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                target="_blank"
                rel="noopener noreferrer"
              >
                anton@azdanov.dev
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
