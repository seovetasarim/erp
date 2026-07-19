import { ArrowDownIcon, ArrowUpIcon } from "@/components/admin/nextadmin/assets/icons";
import { cn } from "@/components/admin/nextadmin/lib/utils";
import type { JSX, SVGProps } from "react";

type OverviewCardProps = {
  label: string;
  data: {
    value: number | string;
    growthRate: number;
  };
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export function OverviewCard({ label, data, Icon }: OverviewCardProps) {
  const isDecreasing = data.growthRate < 0;

  return (
    <div className="rounded-[10px] bg-white p-6 shadow-1 dark:bg-gray-dark">
      <Icon />
      <div className="mt-6 flex items-end justify-between">
        <dl>
          <dt className="mb-1.5 text-heading-6 font-bold text-dark dark:text-white">
            {data.value}
          </dt>
          <dd className="text-sm font-medium text-dark-6">{label}</dd>
        </dl>
        <dl
          className={cn(
            "text-sm font-medium",
            isDecreasing ? "text-red" : "text-green",
          )}
        >
          <dt className="flex items-center gap-1.5">
            {Math.abs(data.growthRate)}%
            {isDecreasing ? <ArrowDownIcon aria-hidden /> : <ArrowUpIcon aria-hidden />}
          </dt>
        </dl>
      </div>
    </div>
  );
}
