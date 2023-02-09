import Image from "next/image";
import styles from "./page.module.css";
import { StripeCalendar } from "@/components";
import { useScheduleStore } from "@/zustandStore";
import { CurrentDate } from "@/components/CurrentDate";
import { Query, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase.config";

const getSchedule = async () => {
  const ref = query(
    collection(db, `schedule/${"bAXxgsZgS37AQbMD0SSv"}/week_${1}`),
    where("weekday", "==", "понедельник")
  ) as Query<{}>;

  const { docs } = await getDocs(ref);

  const schedule = docs.map((schedule) => {
    return { ...schedule.data(), id: schedule.id };
  });

  return schedule;
};

export default async function Home() {
  const schedule = await getSchedule();

  return (
    <main>
      <StripeCalendar />
      <CurrentDate />
    </main>
  );
}
