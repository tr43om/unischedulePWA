import {
  BottomNav,
  Navbar,
  SearchModal,
} from "@/components";
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
    </Suspense>
  );
}
