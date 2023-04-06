import { BottomNav, Navbar, SearchModal } from "@/components";
import Loading from "./loading";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container relative mx-auto   mb-24 px-4 md:max-w-md lg:max-w-[1200px] ">
      <Suspense fallback={<Loading />}>
        <Navbar />

        <main>{children}</main>
        <BottomNav />
      </Suspense>
    </div>
  );
}
