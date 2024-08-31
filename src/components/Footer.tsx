"use client";

import Link from "next/link";
import type { ReactNode } from "react";

import { ContainerInner, ContainerOuter } from "@/components/Container";

function NavLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: ReactNode;
}>) {
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
    <footer className="mt-20 flex-none md:mt-32">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-10 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200 sm:flex-row">
              <div className="flex gap-6">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/projects">Projects</NavLink>
              </div>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hidden transition hover:text-blue-500 dark:hover:text-blue-400 sm:block"
              >
                Back to top
              </button>
            </div>
            <div className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-400 sm:text-left">
              <NavLink href="/privacy">Privacy Policy</NavLink>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
