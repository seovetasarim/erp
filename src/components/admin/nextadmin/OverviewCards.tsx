"use client";



import { compactFormat } from "@/components/admin/nextadmin/lib/format-number";

import {

  EmailIcon,

  LicenseIcon,

  OrdersIcon,

  UsersIcon,

} from "./icons";

import { OverviewCard } from "./OverviewCard";



type Stats = {

  users: number;

  orders: number;

  licenses: number;

  pendingLicense: number;

  openTickets?: number;

};



export function OverviewCards({ stats }: { stats: Stats }) {

  return (

    <div className="admin-stats-grid">

      <OverviewCard

        label="Kayıtlı Müşteri"

        data={{ value: compactFormat(stats.users), growthRate: stats.users > 0 ? 0.43 : 0 }}

        Icon={UsersIcon}

      />

      <OverviewCard

        label="Ödenen Sipariş"

        data={{ value: compactFormat(stats.orders), growthRate: stats.orders > 0 ? 4.35 : 0 }}

        Icon={OrdersIcon}

      />

      <OverviewCard

        label="Aktif Lisans"

        data={{ value: compactFormat(stats.licenses), growthRate: stats.licenses > 0 ? 2.59 : 0 }}

        Icon={LicenseIcon}

      />

      <OverviewCard

        label="Açık Destek / Lisans Bekliyor"

        data={{

          value: compactFormat((stats.openTickets ?? 0) + stats.pendingLicense),

          growthRate: stats.pendingLicense > 0 ? -0.95 : 0,

        }}

        Icon={EmailIcon}

      />

    </div>

  );

}

