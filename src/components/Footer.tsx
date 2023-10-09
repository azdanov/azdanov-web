"use client";

import Link from "next/link";

import { ContainerInner, ContainerOuter } from "@/components/Container";
import { ReactNode } from "react";

function NavLink({ href, children }: { href: string; children: ReactNode }) {
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
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200 sm:flex-row">
              <div className="flex gap-6">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
              </div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="transition hover:text-blue-500 dark:hover:text-blue-400"
              >
                Back to top
              </button>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
