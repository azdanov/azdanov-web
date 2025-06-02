import { Metadata } from "next";
import Link from "next/link";

import { SimpleLayout } from "@/components/SimpleLayout";
import { TopicBadge } from "@/components/TopicBadge";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects and contributions by azdanov",
};

// Revalidate every 24 hours
export const revalidate = 86400;

type Repository = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  language: string;
  topics: string[];
  fork: boolean;
  languages: Record<string, number>;
};

async function getGitHubRepos() {
  const username = process.env.GITHUB_USERNAME ?? "azdanov";
  const token = process.env.GITHUB_TOKEN;

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=30`,
      {
        headers: {
          Authorization: token ? `token ${token}` : "",
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate },
      },
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const repos: Repository[] = await response.json();

    const sortedRepos = repos
      .toSorted((a, b) => {
        const dateA = new Date(a.updated_at).getTime();
        const dateB = new Date(b.updated_at).getTime();
        const dateDiff = dateB - dateA;

        if (dateDiff !== 0) return dateDiff;
        return b.stargazers_count - a.stargazers_count;
      })
      .slice(0, 15);

    const reposWithLanguages = await Promise.all(
      sortedRepos.map(async (repo) => {
        try {
          const langResponse = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/languages`,
            {
              headers: {
                Authorization: token ? `token ${token}` : "",
                Accept: "application/vnd.github.v3+json",
              },
              next: { revalidate },
            },
          );

          if (langResponse.ok) {
            const languages = await langResponse.json();
            return { ...repo, languages };
          }

          return { ...repo, languages: {} };
        } catch (error) {
          console.error(`Error fetching languages for ${repo.name}:`, error);
          return { ...repo, languages: {} };
        }
      }),
    );

    return reposWithLanguages;
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return [];
  }
}

function getLanguagePercentages(languages: Record<string, number>) {
  const total = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);

  if (total === 0) return {};

  return Object.entries(languages).reduce(
    (acc, [lang, bytes]) => {
      acc[lang] = Math.round((bytes / total) * 100);
      return acc;
    },
    {} as Record<string, number>,
  );
}

function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    JavaScript: "bg-yellow-300",
    TypeScript: "bg-blue-500",
    HTML: "bg-orange-600",
    CSS: "bg-blue-400",
    Python: "bg-green-600",
    Java: "bg-red-700",
    PHP: "bg-purple-600",
    Ruby: "bg-red-600",
    Go: "bg-blue-300",
    Rust: "bg-orange-800",
    C: "bg-gray-600",
    "C++": "bg-pink-600",
    "C#": "bg-green-700",
    Kotlin: "bg-purple-500",
    default: "bg-gray-500",
  };

  return colors[language] || colors.default;
}

export default async function ProjectsPage() {
  const repositories = await getGitHubRepos();

  return (
    <SimpleLayout
      title="Projects"
      intro={
        <>
          Over the years, I have worked on various small projects that helped me
          learn new things. It's difficult to choose which ones I like most, but
          here are {repositories.length} recent projects on GitHub,
          automatically updated based on my latest activity. You can find more
          at
          <Link
            href="https://github.com/azdanov"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-100 dark:hover:text-blue-400"
          >
            github.com/azdanov
          </Link>
          .
        </>
      }
    >
      {repositories.length === 0 ? (
        <div className="my-8 text-center text-zinc-600 dark:text-zinc-400">
          No repositories found.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repositories.map((repo) => {
            const languagePercentages = getLanguagePercentages(repo.languages);
            const sortedLanguages = Object.entries(languagePercentages).sort(
              ([, pctA], [, pctB]) => pctB - pctA,
            );

            return (
              <div
                key={repo.id}
                className="overflow-hidden rounded-lg border border-zinc-200 shadow-md dark:border-zinc-700/40 dark:bg-zinc-800/50"
              >
                <div className="flex h-full flex-col justify-between p-6">
                  <div>
                    <h2 className="mb-2 inline-flex items-center text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                      <Link
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition hover:text-blue-500 dark:hover:text-blue-400"
                      >
                        {repo.name}
                      </Link>
                      {repo.fork && (
                        <small className="ml-2 text-sm text-zinc-500">
                          (fork)
                        </small>
                      )}
                    </h2>
                    <p className="h-20 overflow-hidden text-zinc-600 dark:text-zinc-400">
                      {repo.description || "No description provided"}
                    </p>
                  </div>

                  <div className="grow">
                    {Object.keys(repo.languages).length > 0 && (
                      <div className="mb-3">
                        <div className="flex h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
                          {sortedLanguages.map(([lang, percentage]) => (
                            <div
                              key={lang}
                              className={`${getLanguageColor(lang)}`}
                              style={{ width: `${percentage}%` }}
                              title={`${lang}: ${percentage}%`}
                            />
                          ))}
                        </div>
                        <div className="mt-2 flex flex-wrap">
                          {sortedLanguages
                            .slice(0, 3)
                            .map(([lang, percentage]) => (
                              <span
                                key={lang}
                                className="mr-3 inline-flex items-center text-xs text-zinc-600 dark:text-zinc-400"
                              >
                                <span
                                  className={`mr-1 h-2 w-2 rounded-full ${getLanguageColor(lang)}`}
                                ></span>
                                {lang} {percentage}%
                              </span>
                            ))}
                          {sortedLanguages.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{sortedLanguages.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {repo.topics && repo.topics.length > 0 && (
                      <div className="mb-3 flex flex-wrap">
                        {repo.topics.slice(0, 5).map((topic) => (
                          <TopicBadge key={topic} topic={topic} />
                        ))}
                        {repo.topics.length > 5 && (
                          <span className="ml-2 self-center text-xs text-zinc-500 dark:text-zinc-500">
                            +{repo.topics.length - 5} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
                    <div className="flex items-center">
                      <svg
                        className="mr-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <span title="Stargazers count">
                        {repo.stargazers_count}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="mr-1 h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5 3a1 1 0 011-1h8a1 1 0 011 1v2h3a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1h3V3zm1 2v2h8V5H6z" />
                      </svg>
                      <span title="Fork count">{repo.forks_count}</span>
                    </div>
                    <div>
                      Updated: {new Date(repo.updated_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </SimpleLayout>
  );
}
