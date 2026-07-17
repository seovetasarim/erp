"use client";

import { cn } from "@na/lib/utils";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./map"), { ssr: false });

export function RegionLabels({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "min-h-0 overflow-hidden rounded-[10px] bg-white p-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        className,
      )}
    >
      <h2 className="mb-7 text-body-2xlg font-bold text-dark dark:text-white">
        Region labels
      </h2>

      <Map />
    </div>
  );
}
