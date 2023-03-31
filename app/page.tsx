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
 
  return (
    <main>
      <DynamicModal fullwidth={true} />
    </main>
  );
}
