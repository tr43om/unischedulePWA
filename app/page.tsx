import Loading from "./loading";

import { SearchModal } from "@/components";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      <SearchModal />
    </main>
  );
}
