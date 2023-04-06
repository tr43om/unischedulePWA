import dynamic from "next/dynamic";
import Loading from "./loading";

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

export default async function Home() {
  return <DynamicModal />;
}
