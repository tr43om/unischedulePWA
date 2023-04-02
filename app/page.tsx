import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <div className="relative z-[2000] bg-indigo-600 px-4 py-3 text-white">
        <p className="lg:text-md text-center text-sm font-medium">
          uniSchedule теперь можно {"  "}
          <Link href="install" className=" underline">
            установить
          </Link>
          {"  "}
          🥳
        </p>
      </div>
    </>
  );
}
