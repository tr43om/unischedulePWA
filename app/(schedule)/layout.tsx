import { Navbar, StripeCalendar } from "@/components";
import { OmsuGroupType, OmsuProfessorType } from "@/types";

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
