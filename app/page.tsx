import {
  Navbar,
  ScheduleList,
  SearchModal,
  StripeCalendar,
} from "@/components";
import { OmsuGroupType, OmsuProfessorType } from "@/types";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicModal = dynamic(
  () => import("@/components/SearchModal").then((modal) => modal.SearchModal),
  {
    ssr: false,
    loading: () => <div>loading </div>,
  }
);

export default function Home() {
  return (
    <main>
      <DynamicModal fullwidth={true} />
    </main>
  );
}
