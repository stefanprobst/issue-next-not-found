import type { ReactNode } from "react";

export function PageLayout(props: { children: ReactNode }) {
  return (
    <main className="grid gap-y-4 content-start p-8 bg-white text-red-600 dark:text-green-400 dark:bg-zinc-900 h-full ">
      {props.children}
    </main>
  );
}
