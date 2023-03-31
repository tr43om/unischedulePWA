import {
  BottomNav,
  Navbar,
  SearchModal,
  StripeCalendar,
  ViewToggle,
} from "@/components";

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
      <SearchModal />
    </>
  );
}
