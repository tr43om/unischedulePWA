import { SkeletonScheduleCard } from "@/components";

export default function Loading() {
  return (
    <div>
      <div className="mb-10 h-4 w-20 animate-pulse rounded-lg bg-gray-400"></div>
      <div className="mt-5 grid gap-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <SkeletonScheduleCard key={i} />
        ))}
      </div>
    </div>
  );
}
