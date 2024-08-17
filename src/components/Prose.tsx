import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export function Prose({
  className,
  ...props
}: Readonly<ComponentPropsWithoutRef<"div">>) {
  return (
    <div className={clsx(className, "prose dark:prose-invert")} {...props} />
  );
}
