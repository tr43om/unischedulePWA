import "./globals.css";
import { Roboto, IBM_Plex_Sans } from "@next/font/google";
import Script from "next/script";
import { AnalyticsWrapper, ThemeProviders } from "@/components";

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
        <meta name="theme-color" content="#fff" />
        <title>unischedule</title>
      </head>
      <body className={`${plex.className} container mx-auto max-w-md  p-4`}>
        <AnalyticsWrapper />
        <ThemeProviders data-theme defaultTheme="dracula" enableSystem>
          {children}
        </ThemeProviders>

        <Script id="serviceworker-script">
          {`window.addEventListener("load", async () => {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("/sw.js");
      console.log("sw SUCCESS");
    } catch (e) {
      console.log("sw error");
    }
  }
});`}
        </Script>
      </body>
    </html>
  );
}
