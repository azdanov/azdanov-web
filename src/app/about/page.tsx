import { type Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/Container";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { MailIcon } from "@/components/icons/MailIcon";
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
            className="mx-auto max-w-52 -rotate-3 rounded-md bg-zinc-100 object-cover dark:bg-zinc-800 sm:max-w-60 lg:max-w-80"
          />
          <ul className="ml-3 mt-12 sm:ml-6 lg:ml-0">
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
        <article className="order-2 space-y-12 text-base text-zinc-600 dark:text-zinc-400 md:col-span-2 lg:order-first lg:col-span-1 lg:row-span-2">
          <section>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I'm Anton Ždanov.
              <br />I live in <span title="Tallinn, Estonia">Tallinn</span>.
            </h1>
            <div className="mt-6 space-y-7">
              <p>
                I'm a software developer with many years of experience in
                creating web applications.
              </p>
              <p>
                I have worked with various technologies across the front-end,
                back-end, database, and infrastructure layers. Some of the
                projects I'm proud of include a payment widget and a dashboard
                for a financial company, an app for operators to provide
                customers with real-time support, and an app that is used for
                reconciling and keeping the balance of financial transactions.
              </p>
              <p>
                I'm always eager to learn new skills and broaden my knowledge.
              </p>
              <section className="space-y-7">
                <div>
                  <p>
                    Some of the technologies I've worked with or was interested
                    in learning over the years:
                  </p>
                  <ul className="list-inside list-disc">
                    <li>HTML, CSS, SCSS, Tailwind CSS</li>
                    <li>
                      JavaScript, TypeScript, Node.js, React.js, Vue.js, Angular
                    </li>
                    <li>Java, Spring, JDBC, Hibernate</li>
                    <li>C#, .NET. ASP.NET Core, EF Core, Dapper</li>
                    <li>SQL, MySQL, PostgreSQL, RabbitMQ, Redis, gRPC</li>
                    <li>Azure, AWS, Terraform, Serverless, Docker</li>
                    <li>Grafana, Prometheus, Jenkins, GitHub Actions, Git</li>
                  </ul>
                  <p className="mt-3">
                    I'm also familiar with: Go, Python, PHP, C, and a bit of
                    Kubernetes.
                  </p>
                </div>
                <div>
                  <p>Certificates that I have:</p>
                  <ul className="list-inside list-disc">
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
                    <li>
                      <a
                        className="underline"
                        href="https://learn.microsoft.com/api/credentials/share/en-us/azdanov/7D93516BE16A069?sharingId=E18AE6457FBDE5E3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Microsoft Certified: Azure Administrator Associate
                        (AZ-104)
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
                  </ul>
                </div>
              </section>
            </div>
          </section>
          <section className="space-y-7">
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
              learning HTML, CSS and JavaScript. Then I moved on to Python, PHP,
              etc. I was learning everything I could get my hands on. Probably
              not the best approach, but it worked for me. I was able to get a
              job as a software developer due to my exposure to various
              languages and frameworks and I've been working as a developer ever
              since.
            </p>
            <p>
              I have experience working with various technologies and
              frameworks, different sized teams and different types of projects.
              With teams that follow agile methodologies and teams that don't.
              I've worked on projects that were built from scratch and projects
              that were about maintaining, extending and improving legacy code.
            </p>
            <p>
              In my free time I like to play video games, enjoy doing fitness,
              listen to music, read books and study. I do kettlebell training
              and Brazilian Jiu-Jitsu. I enjoy playing all sorts of games
              without specific preferences. Same about music, as long as it
              sounds good I'm happy. With books I prefer fantasy and sci-fi
              genres.
            </p>
          </section>
        </article>
      </div>
    </Container>
  );
}
