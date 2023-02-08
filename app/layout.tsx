import "./globals.css";
import { Roboto } from "@next/font/google";
import { BottomNav } from "@/components";

const roboto = Roboto({
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
      <body className={`${roboto.className} container mx-auto p-4`}>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
