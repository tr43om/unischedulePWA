import {
  Navbar,
  ScheduleList,
  StripeCalendar,
  CurrentDate,
  CalendarControls,
  ViewToggle,
} from "@/components";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-between">
        <CurrentDate />
        <CalendarControls />
      </div>

      <StripeCalendar />
      {/* <ViewToggle /> */}
      <ScheduleList />
    </main>
  );
}
