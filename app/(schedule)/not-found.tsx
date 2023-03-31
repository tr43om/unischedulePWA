"use client";
import { useUserStore } from "@/zustandStore";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter, usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();
  const reset = useUserStore((state) => state.reset);
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center ">
      <h1 className="text-9xl font-extrabold tracking-widest dark:text-white">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-primary px-2 text-sm">
        {pathname.includes("professors")
          ? "Преподаватель не найден"
          : "Группа не найдена"}
      </div>
      <button
        className="btn mt-4 gap-2"
        onClick={() => {
          reset();
          router.push("/");
        }}
      >
        <ArrowLeftIcon className=" h-5 w-5" />
        вернуться
      </button>
    </main>
  );
}
