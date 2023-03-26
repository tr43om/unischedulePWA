import "./globals.css";
import { IBM_Plex_Sans } from "@next/font/google";
import { AnalyticsWrapper, ThemeProviders } from "@/components";
import Script from "next/script";
const plex = IBM_Plex_Sans({
  weight: ["400", "700"],
  subsets: ["cyrillic-ext", "latin-ext"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />

        <title>unischedule</title>
      </head>
      <body
        className={`${plex.className} container mx-auto px-8  md:max-w-md lg:max-w-[1600px]`}
      >
        <AnalyticsWrapper />
        {/* <ServiceWorkerWrapper /> */}
        <ThemeProviders data-theme defaultTheme="cmyk" enableSystem>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
