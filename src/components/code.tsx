"use client";

import { Go } from "@/components/snippets/Go";
import { Java } from "@/components/snippets/Java";
import { SQL } from "@/components/snippets/SQL";
import { CSharp } from "@/components/snippets/CSharp";
import { JavaScript } from "@/components/snippets/JavaScript";
import { Ruby } from "@/components/snippets/Ruby";
import { Python } from "@/components/snippets/Python";
import { PHP } from "@/components/snippets/PHP";
import { Prose } from "@/components/Prose";
import clsx from "clsx";

export async function Code() {
  const rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  const languages = {
    Go,
    Java,
    SQL,
    CSharp,
    JavaScript,
    Ruby,
    Python,
    PHP,
  };

  return (
    <div className="mt-16 h-[200px] border border-transparent sm:mt-20 sm:h-[325px]">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {Object.entries(languages)
          .sort(() => Math.random() - 0.5)
          .slice(0, 5)
          .map(([key, Language], index) => (
            <div
              key={key}
              className={clsx(
                "languages relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800 sm:w-72",
                rotations[index % rotations.length],
              )}
            >
              <Prose>
                <Language />
              </Prose>
            </div>
          ))}
      </div>
    </div>
  );
}
