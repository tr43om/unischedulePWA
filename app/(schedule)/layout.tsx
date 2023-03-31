import {
  BottomNav,
  Navbar,
  SearchModal,
  StripeCalendar,
  ViewToggle,
} from "@/components";
import dynamic from "next/dynamic";
import Loading from "./loading";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      {children}
      <BottomNav />
      <SearchModal />
    </Suspense>
  );
}
