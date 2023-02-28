import { Navbar, ScheduleList, StripeCalendar } from "@/components";

export default async function Home() {
  return (
    <main>
      <Navbar />

      <StripeCalendar />
      <ScheduleList />
    </main>
  );
}
