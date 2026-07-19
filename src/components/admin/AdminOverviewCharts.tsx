"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ApexOptions } from "apexcharts";
import { FilaCard } from "@/components/admin/fila/FilaUi";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Stats = {
  users: number;
  orders: number;
  licenses: number;
  pendingLicense: number;
  openTickets: number;
};

type OrderLite = {
  status: string;
  amount_kurus: number;
  created_at: string;
  plan_id: string;
  billing_mode: string;
};

type LicenseLite = {
  status: string;
  created_at: string;
  billing_mode: string;
};

function last7DayLabels() {
  const labels: string[] = [];
  const now = new Date();
  for (let i = 6; i >= 0; i -= 1) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    labels.push(
      d.toLocaleDateString("tr-TR", { day: "2-digit", month: "short" }),
    );
  }
  return labels;
}

function dayKey(value: string) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toISOString().slice(0, 10);
}

function buildLast7Counts(items: Array<{ created_at: string }>) {
  const map = new Map<string, number>();
  const now = new Date();
  for (let i = 6; i >= 0; i -= 1) {
    const d = new Date(now);
    d.setDate(now.getDate() - i);
    map.set(d.toISOString().slice(0, 10), 0);
  }
  for (const item of items) {
    const key = dayKey(item.created_at);
    if (map.has(key)) map.set(key, (map.get(key) || 0) + 1);
  }
  return Array.from(map.values());
}

function useChartWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const next = Math.floor(el.getBoundingClientRect().width);
      if (next > 0) setWidth(next);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return { ref, width };
}

function ChartFrame({
  type,
  series,
  options,
  height = 300,
}: {
  type: "area" | "donut" | "bar";
  series: ApexOptions["series"];
  options: ApexOptions;
  height?: number;
}) {
  const { ref, width } = useChartWidth();

  return (
    <div className="admin-chart-body" ref={ref}>
      {width > 0 ? (
        <Chart
          type={type}
          height={height}
          width={width}
          series={series as never}
          options={{
            ...options,
            chart: {
              ...options.chart,
              width,
              height,
              parentHeightOffset: 0,
              redrawOnParentResize: true,
              redrawOnWindowResize: true,
            },
          }}
        />
      ) : null}
    </div>
  );
}

const baseChart: ApexOptions["chart"] = {
  toolbar: { show: false },
  fontFamily: "Outfit, sans-serif",
  zoom: { enabled: false },
  animations: { enabled: true, speed: 500 },
};

export function AdminOverviewCharts({
  stats,
  orders,
  licenses,
}: {
  stats: Stats;
  orders: OrderLite[];
  licenses: LicenseLite[];
}) {
  const labels7 = useMemo(() => last7DayLabels(), []);
  const orderSeries7 = useMemo(() => buildLast7Counts(orders), [orders]);
  const licenseSeries7 = useMemo(() => buildLast7Counts(licenses), [licenses]);

  const statusCounts = useMemo(() => {
    const counts = { paid: 0, pending: 0, failed: 0, cancelled: 0 };
    for (const order of orders) {
      if (order.status in counts) {
        counts[order.status as keyof typeof counts] += 1;
      }
    }
    return counts;
  }, [orders]);

  const areaOptions: ApexOptions = useMemo(
    () => ({
      chart: { ...baseChart, type: "area" },
      colors: ["#0f79f3", "#00cae3"],
      dataLabels: { enabled: false },
      stroke: { curve: "smooth", width: 3 },
      fill: {
        type: "gradient",
        gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0.05 },
      },
      grid: {
        borderColor: "#eaecf2",
        strokeDashArray: 4,
        padding: { left: 8, right: 8 },
      },
      xaxis: {
        categories: labels7,
        labels: {
          style: { colors: "#919aa3", fontSize: "13px", fontFamily: "Outfit" },
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        min: 0,
        tickAmount: 4,
        labels: {
          style: { colors: "#919aa3", fontSize: "13px", fontFamily: "Outfit" },
          formatter: (v) => String(Math.round(v)),
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        fontSize: "13px",
        fontFamily: "Outfit",
        labels: { colors: "#919aa3" },
        markers: { size: 6 },
        itemMargin: { horizontal: 12, vertical: 0 },
      },
      tooltip: { theme: "light" },
    }),
    [labels7],
  );

  const donutOptions: ApexOptions = useMemo(
    () => ({
      chart: { ...baseChart, type: "donut" },
      labels: ["Müşteri", "Sipariş", "Lisans", "Destek"],
      colors: ["#00cae3", "#0f79f3", "#2ed47e", "#ffb264"],
      legend: {
        position: "bottom",
        fontSize: "13px",
        fontFamily: "Outfit",
        labels: { colors: "#919aa3" },
        itemMargin: { horizontal: 10, vertical: 4 },
      },
      dataLabels: { enabled: false },
      plotOptions: {
        pie: {
          donut: {
            size: "72%",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "13px",
                fontFamily: "Outfit",
                color: "#919aa3",
              },
              value: {
                show: true,
                fontSize: "22px",
                fontWeight: 600,
                fontFamily: "Outfit",
                color: "#2b2a3f",
              },
              total: {
                show: true,
                label: "Toplam",
                fontSize: "13px",
                fontFamily: "Outfit",
                color: "#919aa3",
                formatter: () =>
                  String(
                    stats.users +
                      stats.orders +
                      stats.licenses +
                      (stats.openTickets ?? 0),
                  ),
              },
            },
          },
        },
      },
      stroke: { width: 0 },
    }),
    [stats],
  );

  const barOptions: ApexOptions = useMemo(
    () => ({
      chart: { ...baseChart, type: "bar" },
      colors: ["#2ed47e", "#ffb264", "#e74c3c", "#919aa3"],
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: "48%",
          distributed: true,
        },
      },
      dataLabels: { enabled: false },
      legend: { show: false },
      grid: {
        borderColor: "#eaecf2",
        strokeDashArray: 4,
        padding: { left: 8, right: 8 },
      },
      xaxis: {
        categories: ["Ödendi", "Bekliyor", "Başarısız", "İptal"],
        labels: {
          style: { colors: "#919aa3", fontSize: "13px", fontFamily: "Outfit" },
        },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        min: 0,
        tickAmount: 4,
        labels: {
          style: { colors: "#919aa3", fontSize: "13px", fontFamily: "Outfit" },
          formatter: (v) => String(Math.round(v)),
        },
      },
      tooltip: { theme: "light" },
    }),
    [],
  );

  return (
    <div className="row g-3 admin-charts-row">
      <div className="col-xl-5">
        <FilaCard title="Son 7 Gün — Sipariş & Lisans" className="admin-chart-card mb-0">
          <ChartFrame
            type="area"
            height={300}
            series={[
              { name: "Sipariş", data: orderSeries7 },
              { name: "Lisans", data: licenseSeries7 },
            ]}
            options={areaOptions}
          />
        </FilaCard>
      </div>
      <div className="col-md-6 col-xl-3">
        <FilaCard title="Genel Dağılım" className="admin-chart-card mb-0">
          <ChartFrame
            type="donut"
            height={300}
            series={[
              stats.users,
              stats.orders,
              stats.licenses,
              stats.openTickets ?? 0,
            ]}
            options={donutOptions}
          />
        </FilaCard>
      </div>
      <div className="col-md-6 col-xl-4">
        <FilaCard title="Sipariş Durumları" className="admin-chart-card mb-0">
          <ChartFrame
            type="bar"
            height={300}
            series={[
              {
                name: "Adet",
                data: [
                  statusCounts.paid || stats.orders,
                  statusCounts.pending,
                  statusCounts.failed,
                  statusCounts.cancelled,
                ],
              },
            ]}
            options={barOptions}
          />
        </FilaCard>
      </div>
    </div>
  );
}
