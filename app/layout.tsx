import type { ReactNode } from "react";

/**
 * Required for root not-found page, which otherwise complains about:
 *
 * ```
 * ⨯ app/not-found.tsx
 * not-found.tsx doesn't have a root layout. To fix this error, make sure every page has a root layout.
 * ```
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
