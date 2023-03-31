import { BottomNav, Navbar, StripeCalendar, ViewToggle } from "@/components";
import dynamic from "next/dynamic";
import Loading from "./loading";

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
    <>
      <Navbar />
      {children}
      <BottomNav />
      <DynamicModal />
    </>
  );
}
