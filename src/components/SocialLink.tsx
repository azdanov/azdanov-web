import clsx from "clsx";
import Link from "next/link";
import { ComponentType, ReactNode } from "react";

export function SocialLink({
  className,
  href,
  children,
  target,
  rel,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
  target?: string;
  rel?: string;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        target={target}
        rel={rel}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-blue-500 dark:text-zinc-200 dark:hover:text-blue-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-blue-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}
