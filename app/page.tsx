import {
  Navbar,
  ScheduleList,
  SearchBar,
  StripeCalendar,
  ViewToggle,
} from "@/components";
import { CurrentDate } from "@/components/CurrentDate";

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
