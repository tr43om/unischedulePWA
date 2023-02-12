"use client";
import "./globals.css";
import { Roboto, IBM_Plex_Sans } from "@next/font/google";
import { BottomNav } from "@/components";
import { useAppearanceStore } from "../zustandStore/appearanceStore/index";

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
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${plex.className} container mx-auto max-w-md p-4`}>
        {children}
      </body>
    </html>
  );
}
