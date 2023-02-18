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
import { OmsuGroupType } from "../types/index";

// const getGroups = async () => {
//   const res = await fetch(
//     "https://eservice.omsu.ru/schedule/backend/dict/groups"
//   );

//   const { data }: { data: OmsuGroupType[] } = await res.json();

//   const groups = data.map((group) => {
//     if (group.name.split("-")[1]) {
//       const year = Number(group.name.split("-")[1][0]);
//       const course = Number((22 - year).toString()[1]) + 1;
//       return { ...group, course };
//     }

//     return group;
//   });

//   return groups;
// };

// const getSchedule = async () => {
//   const res = await fetch(
//     "https://eservice.omsu.ru/schedule/backend/schedule/group/1342"
//   );

//   const data = await res.json();

//   return data;
// };

// const getProfessors = async () => {
//   const res = await fetch(
//     "https://eservice.omsu.ru/schedule/backend/dict/tutors"
//   );

//   const data = await res.json();

//   return data;
// };

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
