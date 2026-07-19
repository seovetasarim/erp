import { PaymentsOverview } from "@na/components/Charts/payments-overview";
import { UsedDevices } from "@na/components/Charts/used-devices";
import { WeeksProfit } from "@na/components/Charts/weeks-profit";
import { createTimeFrameExtractor } from "@na/utils/timeframe-extractor";
import { Suspense } from "react";
import { OverviewCardsGroup } from "./_components/overview-cards";
import { OverviewCardsSkeleton } from "./_components/overview-cards/skeleton";
import { RegionLabels } from "./_components/region-labels";

type PropsType = {
  searchParams: Promise<{
    selected_time_frame?: string;
  }>;
};

export default async function Home({ searchParams }: PropsType) {
  const { selected_time_frame } = await searchParams;
  const extractTimeFrame = createTimeFrameExtractor(selected_time_frame);

  return (
    <>
      <Suspense fallback={<OverviewCardsSkeleton />}>
        <OverviewCardsGroup />
      </Suspense>

      <div className="mt-4 grid grid-cols-12 items-start gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">
        <PaymentsOverview
          className="col-span-12 lg:col-span-6"
          key={extractTimeFrame("payments_overview")}
          timeFrame={extractTimeFrame("payments_overview")?.split(":")[1]}
        />

        <WeeksProfit
          key={extractTimeFrame("weeks_profit")}
          timeFrame={extractTimeFrame("weeks_profit")?.split(":")[1]}
          className="col-span-12 lg:col-span-6"
        />

        <div className="col-span-12 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-6">
          <UsedDevices
            className="h-full"
            key={extractTimeFrame("used_devices")}
            timeFrame={extractTimeFrame("used_devices")?.split(":")[1]}
          />

          <RegionLabels className="h-full" />
        </div>
      </div>
    </>
  );
}
