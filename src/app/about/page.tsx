import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/Container";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { MastodonIcon } from "@/components/icons/MastodonIcon";
import { SocialLink } from "@/components/SocialLink";
import portraitImage from "@/images/portrait.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm Anton Ždanov. I live in Tallinn. I'm a software engineer, and I'm passionate about building products that make people's lives better.",
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-24">
      <div className="grid grid-cols-1 gap-y-14 md:grid-flow-col md:grid-rows-[auto_1fr] lg:gap-y-12">
        <aside className="order-1 grid sm:grid-cols-2 lg:grid-cols-1 lg:pl-20">
          <Image
            priority
            src={portraitImage}
            alt="Anton Ždanov sitting in front of a laptop and smiling."
            className="mx-auto max-w-52 -rotate-3 rounded-md bg-zinc-100 object-cover sm:max-w-60 lg:max-w-80 dark:bg-zinc-800"
          />
          <ul className="mt-12 ml-3 sm:ml-6 lg:ml-0">
            <SocialLink
              href="https://github.com/azdanov"
              icon={GitHubIcon}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/azdanov/"
              icon={LinkedInIcon}
              className="mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
            </SocialLink>
            <span className="sr-only">
              <SocialLink
                href="https://mastodon.social/@azdanov"
                icon={MastodonIcon}
                className="mt-4"
                target="_blank"
                rel="me noopener noreferrer"
              >
                Connect on Mastodon
              </SocialLink>
            </span>
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
        </aside>
        <article className="order-2 space-y-12 text-base text-zinc-600 md:col-span-2 lg:order-first lg:col-span-1 lg:row-span-2 dark:text-zinc-400">
          <section className="mb-6">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              I'm Anton Ždanov.
              <br />I live in <span title="Tallinn, Estonia">Tallinn</span>.
            </h1>
            <div className="mt-6 space-y-6">
              <p>
                I'm a software developer with many years of experience in
                creating web applications. <br /> I have worked with various
                technologies across the front end, back end, database, and
                infrastructure layers.
              </p>
              <p>
                I'm always eager to learn new skills and broaden my knowledge.
              </p>
            </div>
          </section>
          <section className="space-y-7">
            <div className="space-y-4">
              <p>Technologies I've worked with or am actively exploring:</p>

              <div className="overflow-x-auto">
                <table className="table-auto divide-y divide-zinc-100 dark:divide-zinc-700/40">
                  <thead>
                    <tr className="divide-x divide-zinc-100 dark:divide-zinc-700/40">
                      <th className="pr-3 pb-2 pl-0 text-left font-bold">
                        Category
                      </th>
                      <th className="pb-2 pl-3 text-left font-bold">
                        Technologies
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100 dark:divide-zinc-700/40">
                    <tr className="divide-x divide-zinc-100 dark:divide-zinc-700/40">
                      <td className="py-2 pr-3 pl-0 font-semibold">Frontend</td>
                      <td className="py-2 pl-3">
                        HTML, CSS, JavaScript, TypeScript, React.js, Next.js,
                        Tailwind CSS, shadcn/ui
                      </td>
                    </tr>
                    <tr className="divide-x divide-zinc-100 dark:divide-zinc-700/40">
                      <td className="py-2 pl-0 font-semibold">Backend</td>
                      <td className="py-2 pl-3">
                        Java, Spring, Spring Boot, Quarkus, JDBC, Hibernate,
                        Node.js, Bun
                      </td>
                    </tr>
                    <tr className="divide-x divide-zinc-100 dark:divide-zinc-700/40">
                      <td className="py-2 pr-3 pl-0 font-semibold">
                        Data &<br /> Integration
                      </td>
                      <td className="py-2 pl-3">
                        SQL, MySQL, PostgreSQL, Hashicorp Vault, Keycloak,
                        RabbitMQ, REST, gRPC, OpenAPI, SOAP
                      </td>
                    </tr>
                    <tr className="divide-x divide-zinc-100 dark:divide-zinc-700/40">
                      <td className="pt-2 pr-3 pl-0 font-semibold">
                        DevOps &<br /> Infrastructure
                      </td>
                      <td className="pt-2 pl-3">
                        Kubernetes, Docker, Terraform, Helm, Grafana,
                        Prometheus, GitLab/GitHub Actions, Jenkins, Git
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <p>Certificates that I have:</p>
              <ul className="list-inside list-disc">
                <li>
                  <a
                    className="underline"
                    href="https://www.credly.com/badges/991bf428-28a3-42ee-b3bf-c6857b8e0392"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CKAD: Certified Kubernetes Application Developer
                  </a>
                </li>
                <li>
                  <a
                    className="underline"
                    href="https://learn.microsoft.com/api/credentials/share/en-us/azdanov/7D93516BE16A069?sharingId=E18AE6457FBDE5E3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft Certified: Azure Administrator Associate (AZ-104)
                  </a>
                </li>
                <li>
                  <a
                    className="underline"
                    href="https://learn.microsoft.com/api/credentials/share/en-us/azdanov/8A43495F02BE1A3E?sharingId=E18AE6457FBDE5E3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft Certified: Azure Developer Associate (AZ-204)
                  </a>
                </li>
                <li>
                  <a
                    className="underline"
                    href="https://learn.microsoft.com/api/credentials/share/en-us/azdanov/294B5745E8FCEC01?sharingId=E18AE6457FBDE5E3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft Certified: Azure Fundamentals (AZ-900)
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="space-y-7">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
              My Story
            </h2>
            <p>
              Ever since I was a kid, I have been fascinated by video games. I
              would spend hours playing them and immersing myself in their
              worlds. Later on, I started learning how to make 3D models,
              Photoshop images, and create computer music. I really enjoyed
              experimenting and trying out new things.
            </p>
            <p>
              As I got older, I started to learn how to code, trying to make
              simple websites and modify a theme for WordPress for a friend. At
              that time, it felt very difficult, and I didn't really understand
              what I was doing. More often than not, I would get stuck and not
              know how to continue.
            </p>
            <p>
              After doing non-IT-related jobs for a few years, I decided to
              change my career path and start learning how to code again. This
              time, I was determined to learn it properly. I started with HTML,
              CSS, and JavaScript. Then I moved on to Python, PHP, and more. I
              was learning everything I could get my hands on. It was probably
              not the best approach, but it worked for me. I was able to get a
              job as a software developer due to my exposure to various
              languages and frameworks, and I've been working as a developer
              ever since.
            </p>
            <p>
              I have experience working with various technologies and
              frameworks, different-sized teams, and different types of
              projects, with teams that follow agile methodologies and teams
              that don't. I've worked on projects that were built from scratch
              and projects that involved maintaining, extending, and improving
              legacy code.
            </p>
            <p>
              In my free time, I like to play video games, enjoy fitness, listen
              to music, read books, and study. I do kettlebell training and
              Brazilian Jiu-Jitsu. I enjoy playing all sorts of games without
              specific preferences. The same goes for music; as long as it
              sounds good, I'm happy. With books, I prefer fantasy and sci-fi
              genres.
            </p>
          </section>
        </article>
      </div>
    </Container>
  );
}
