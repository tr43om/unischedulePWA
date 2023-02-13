import {
  Navbar,
  ScheduleList,
  SearchBar,
  StripeCalendar,
  CurrentDate,
  ViewToggle,
  SearchModal,
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
