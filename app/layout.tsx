"use client";
import "./globals.css";
import { Roboto, IBM_Plex_Sans } from "@next/font/google";
import Script from "next/script";
import { ThemeProviders } from "@/components";

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
        <title>unischedule</title>
      </head>
      <body className={`${plex.className} container mx-auto max-w-md  p-4`}>
        <ThemeProviders data-theme defaultTheme="system" enableSystem>
          {children}
        </ThemeProviders>

        {/* <Script id="theme-script" strategy="beforeInteractive">
          {`const theme = localStorage.getItem('theme') || 'cmyk';
          console.log('theme', theme)
          document.documentElement.dataset.theme = theme;`}
        </Script> */}
      </body>
    </html>
  );
}
