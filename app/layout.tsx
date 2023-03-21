import "./globals.css";
import { Roboto, IBM_Plex_Sans } from "@next/font/google";
import Script from "next/script";
import {
  AnalyticsWrapper,
  Navbar,
  ServiceWorkerWrapper,
  StripeCalendar,
  ThemeProviders,
} from "@/components";

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
      <body className={`${plex.className} container mx-auto max-w-md  p-4`}>
        <AnalyticsWrapper />
        {/* <ServiceWorkerWrapper /> */}
        <ThemeProviders data-theme defaultTheme="cmyk" enableSystem>
          {children}
        </ThemeProviders>
      </body>
    </html>
  );
}
