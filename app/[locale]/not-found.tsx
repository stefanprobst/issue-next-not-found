import { PageLayout } from "@/components/page-layout";
import { PageTitle } from "@/components/page-title";

/** Must be triggered explicitly by calling `notFound()`. */
export default function LocaleNotFoundPage(props: unknown) {
  return (
    <PageLayout>
      <PageTitle>Localised not found page (locale).</PageTitle>
      <div className="grid gap-y-4">
        <div>Two problems:</div>
        <ol className="grid gap-y-4 list-decimal pl-4">
          <li>
            This page should be in dark mode, but it is not, even though the
            dark mode script lives in <code>app/[locale]/layout.tsx</code>.
          </li>

          <li>
            Params are empty:
            <pre>{JSON.stringify(props, null, 2)}</pre>
          </li>
        </ol>
      </div>
    </PageLayout>
  );
}
