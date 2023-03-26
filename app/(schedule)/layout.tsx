import { Navbar, StripeCalendar, ViewToggle } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <StripeCalendar />
      {children}
    </>
  );
}
