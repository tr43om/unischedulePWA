// "use client";
import dynamic from "next/dynamic";
import Loading from "./loading";
import { useEffect } from "react";
import { useRouter, redirect } from "next/navigation";
import { useUserStore } from "@/zustandStore";

const DynamicModal = dynamic(
  () =>
    import("@/components/search/SearchModal").then(
      (modal) => modal.SearchModal
    ),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

export default function Home() {
  // const { groupId, professorId } = useUserStore((state) => state);
  // const redirectRoute = groupId
  //   ? `groups/${groupId}`
  //   : professorId
  //   ? `professors/${professorId}`
  //   : "";

  // useEffect(() => {
  //   if (groupId || professorId) {
  //     redirect(redirectRoute);
  //   }
  // }, []);
  return (
    <main>
      <DynamicModal fullwidth={true} />
    </main>
  );
}
