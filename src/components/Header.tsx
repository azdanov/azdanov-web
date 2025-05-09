"use client";

import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import {
  type ComponentPropsWithoutRef,
  type ReactNode,
  useEffect,
  useState,
} from "react";

import { Container } from "@/components/Container";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { MoonIcon } from "@/components/icons/MoonIcon";
import { SunIcon } from "@/components/icons/SunIcon";

export function Header() {
  return (
    <header className="pointer-events-none relative z-50 flex flex-col">
      <div className="top-0 z-10 h-16 pt-6">
        <Container className="w-full">
          <div className="relative flex gap-4">
            <div className="flex flex-1">
              <Logo />
            </div>
            <div className="flex flex-1 justify-end md:justify-center">
              <MobileNavigation className="pointer-events-auto sm:hidden" />
              <DesktopNavigation className="pointer-events-auto hidden sm:block" />
            </div>
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto">
                <ModeToggle />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

function MobileNavItem({
  href,
  children,
}: Readonly<{
  href: string;
  children: ReactNode;
}>) {
  return (
    <li>
      <PopoverButton as={Link} href={href} className="block py-2">
        {children}
      </PopoverButton>
    </li>
  );
}

function MobileNavigation(
  props: Readonly<ComponentPropsWithoutRef<typeof Popover>>,
) {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center rounded-xs bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 backdrop-blur-sm dark:bg-zinc-900 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-xs duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-black/80"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-xs bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
          </PopoverButton>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            <MobileNavItem href="/">Home</MobileNavItem>
            <MobileNavItem href="/about">About</MobileNavItem>
            <MobileNavItem href="/articles">Articles</MobileNavItem>
            <MobileNavItem href="/projects">Projects</MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  );
}

function NavItem({
  href,
  children,
}: Readonly<{
  href: string;
  children: ReactNode;
}>) {
  const isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-blue-500 dark:text-blue-400"
            : "hover:text-blue-500 dark:hover:text-blue-400",
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-2 bottom-[6px] h-px rounded bg-blue-500/80 dark:bg-blue-400/80" />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(props: Readonly<ComponentPropsWithoutRef<"nav">>) {
  return (
    <nav {...props}>
      <ul className="flex bg-white/90 px-3 font-medium text-zinc-800 backdrop-blur-sm dark:bg-zinc-900 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/articles">Articles</NavItem>
        <NavItem href="/projects">Projects</NavItem>
      </ul>
    </nav>
  );
}

function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      className="group bg-white/90 px-3 py-2 backdrop-blur-sm transition dark:bg-zinc-900 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-blue-50 [@media(prefers-color-scheme:dark)]:stroke-blue-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-blue-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-blue-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-blue-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-blue-500 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400" />
    </button>
  );
}

function Logo({
  className,
  ...props
}: Readonly<Omit<ComponentPropsWithoutRef<typeof Link>, "href">>) {
  return (
    <div className="relative">
      <Link
        href="/"
        aria-label="Home"
        className={clsx(
          className,
          "pointer-events-auto block h-10 w-11 rounded-xs bg-blue-500 text-center font-medium text-white dark:bg-blue-500/90",
        )}
        {...props}
      >
        <span className="absolute right-1 bottom-1 text-2xl leading-[1.5rem]">
          AZ
        </span>
      </Link>
    </div>
  );
}
