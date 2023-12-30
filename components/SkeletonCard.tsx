import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="m-2">
      <div className="flex items-center space-x-4 p-4 border-[0.5px] rounded-md">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-2 w-[250px]" />
          <Skeleton className="h-2 w-[200px]" />
        </div>
      </div>
    </div>
  );
}
