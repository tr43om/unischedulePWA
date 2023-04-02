import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Announcement } from "@/components";

export default async function Home() {
  return (
    <Announcement>
      uniSchedule теперь можно {"  "}
      <Link href="install" className=" underline">
        установить
      </Link>
      {"  "}
      🥳
    </Announcement>
  );
}
