import { BottomNav, Navbar, SearchModal } from "@/components";
import Loading from "./loading";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="container mx-auto mb-24  px-4 md:max-w-md lg:max-w-[1600px] ">
      <Suspense fallback={<Loading />}>
        <Navbar />
        {children}
        <BottomNav />
      </Suspense>
    </main>
  );
}
