import { BottomNav, Navbar, SearchModal } from "@/components";
import Loading from "./loading";
import { Suspense } from "react";

import dynamic from "next/dynamic";

const DynamicModal = dynamic(
  () =>
    import("@/components/search/SearchModal").then(
      (modal) => modal.SearchModal
    ),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

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
        <DynamicModal />
        <BottomNav />
      </Suspense>
    </div>
  );
}
