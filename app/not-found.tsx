import "tailwindcss/tailwind.css";

import type { ReactNode } from "react";

import { PageLayout } from "@/components/page-layout";
import { PageTitle } from "@/components/page-title";

export default function RootNotFoundPage({
  children,
}: {
  children: ReactNode;
}) {
  const locale = "en";

  return (
    <html className="h-full" lang={locale} suppressHydrationWarning>
      <body className="h-full">
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.dataset.colorScheme = "dark";`,
          }}
        />
        <PageLayout>
          <PageTitle>Root not found page</PageTitle>
        </PageLayout>
      </body>
    </html>
  );
}
