import "./globals.css";
import { Roboto, IBM_Plex_Sans } from "@next/font/google";

export const metadata = {
  title: "unischedule",
  description: "OmSU schedule",
};

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
    <html lang="en" data-theme="dracula">
      <head>
        <title>unischedule</title>
      </head>
      <body className={`${plex.className} container mx-auto max-w-md  p-4`}>
        {children}
      </body>
    </html>
  );
}
