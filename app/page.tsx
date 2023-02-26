export const metadata = {
  title: "unischedule",
  description: "OmSU schedule",
};

import {
  Navbar,
  ScheduleList,
  StripeCalendar,
  CurrentDate,
  CalendarControls,
  ViewToggle,
  ResultsFor,
} from "@/components";

export default async function Home() {
  return (
    <main>
      <Navbar />

      <StripeCalendar />
      {/* <ViewToggle /> */}
      <ResultsFor />
      <ScheduleList />
    </main>
  );
}
