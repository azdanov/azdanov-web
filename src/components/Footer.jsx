import Link from "next/link";

import { Container } from "@/components/Container";

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-blue-500 dark:hover:text-blue-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
              </div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-sm transition hover:text-blue-500 dark:hover:text-blue-400"
              >
                Back to top
              </button>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}
