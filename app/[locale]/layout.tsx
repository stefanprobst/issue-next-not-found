import "tailwindcss/tailwind.css";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html className="h-full" lang={locale} suppressHydrationWarning>
      <body className="h-full">
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.dataset.colorScheme = "dark";`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
