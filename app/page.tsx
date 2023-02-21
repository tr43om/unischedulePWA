import {
  Navbar,
  ScheduleList,
  StripeCalendar,
  CurrentDate,
  ViewToggle,
} from "@/components";

import { CalendarControls } from "@/components/CalendarControls";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex justify-between">
        <CurrentDate />
        <CalendarControls />
      </div>

      <StripeCalendar />
      <ViewToggle />
      <ScheduleList />
    </main>
  );
}
