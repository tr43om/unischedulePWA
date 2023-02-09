import Image from "next/image";
import styles from "./page.module.css";
import { StripeCalendar } from "@/components";
import { useScheduleStore } from "@/zustandStore";

export default function Home() {
  return (
    <main>
      <StripeCalendar />
    </main>
  );
}
