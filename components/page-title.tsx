import type { ReactNode } from "react";

export function PageTitle(props: { children: ReactNode }) {
  const { children } = props;

  return <h1 className="text-2xl">{children}</h1>;
}
