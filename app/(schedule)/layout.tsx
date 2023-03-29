import { Navbar, StripeCalendar, ViewToggle } from "@/components";
import { Suspense } from "react";
import Loading from "../loading";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
