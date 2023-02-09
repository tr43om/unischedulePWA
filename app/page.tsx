import Image from "next/image";
import styles from "./page.module.css";
import { StripeCalendar } from "@/components";
import { useScheduleStore } from "@/zustandStore";
import { CurrentDate } from "@/components/CurrentDate";

export default async function Home() {
  return (
    <main>
      <StripeCalendar />
      <CurrentDate />
    </main>
  );
}
