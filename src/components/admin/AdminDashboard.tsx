"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AdminEmptyRow,
  AdminErrorCard,
  AdminLoadingCard,
} from "@/components/admin/AdminPageHelpers";
import { AdminOverviewCharts } from "@/components/admin/AdminOverviewCharts";
import { FilaCard, FilaStatCard, FilaTable } from "@/components/admin/fila/FilaUi";
import {
  formatDate,
  formatTry,
  licenseStatusLabel,
  orderStatusClass,
  orderStatusLabel,
  planLabel,
} from "@/lib/admin/labels";

type Overview = {
  stats: {
    users: number;
    orders: number;
    licenses: number;
    pendingLicense: number;
    openTickets: number;
  };
  recentOrders: Array<{
    id: number;
    merchant_oid: string;
    plan_id: string;
    billing_mode: string;
    amount_kurus: number;
    status: string;
    email_sent_at: string | null;
    email: string;
    name: string;
    customer_code: string;
    created_at: string;
  }>;
  recentLicenses: Array<{
    id: number;
    license_key: string;
    plan_id: string;
    billing_mode: string;
    expires_at: string | null;
    status: string;
    email: string;
    customer_code: string;
  }>;
};

export default function AdminDashboard() {
  const [data, setData] = useState<Overview | null>(null);
  const [error, setError] = useState("");
  const [busyId, setBusyId] = useState<number | null>(null);

  async function load() {
    const res = await fetch("/api/admin/overview");
    const json = (await res.json()) as Overview & { error?: string };
    if (!res.ok) {
      setError(json.error || "Veri yüklenemedi.");
      return;
    }
    setData(json);
  }

  useEffect(() => {
    load().catch(() => setError("Veri yüklenemedi."));
  }, []);

  async function resendEmail(orderId: number) {
    setBusyId(orderId);
    await fetch("/api/admin/resend-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderId }),
    });
    await load();
    setBusyId(null);
  }

  async function extendLicense(licenseId: number) {
    setBusyId(licenseId);
    await fetch("/api/admin/extend-license", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ licenseId, months: 1 }),
    });
    await load();
    setBusyId(null);
  }

  if (error) return <AdminErrorCard message={error} />;
  if (!data) return <AdminLoadingCard title="Yönetim Paneli" />;

  return (
    <>
      <div className="row g-3 admin-stats-row">
        <div className="col-sm-6 col-xl-3">
          <FilaStatCard
            label="Kayıtlı Müşteri"
            value={data.stats.users}
            icon="group"
            tone="info"
          />
        </div>
        <div className="col-sm-6 col-xl-3">
          <FilaStatCard
            label="Ödenen Sipariş"
            value={data.stats.orders}
            icon="shopping_basket"
            tone="primary"
          />
        </div>
        <div className="col-sm-6 col-xl-3">
          <FilaStatCard
            label="Aktif Lisans"
            value={data.stats.licenses}
            icon="key"
            tone="success"
          />
        </div>
        <div className="col-sm-6 col-xl-3">
          <FilaStatCard
            label="Destek / Bekleyen"
            value={(data.stats.openTickets ?? 0) + data.stats.pendingLicense}
            icon="support_agent"
            tone="warning"
            hint={`Destek: ${data.stats.openTickets ?? 0} · Lisans bekleyen: ${data.stats.pendingLicense}`}
          />
        </div>
      </div>

      <AdminOverviewCharts
        stats={data.stats}
        orders={data.recentOrders}
        licenses={data.recentLicenses}
      />

      <FilaCard
        title="Son Siparişler"
        footer={
          <Link href="/admin/siparisler" className="text-primary text-decoration-none fw-medium">
            Tüm siparişler →
          </Link>
        }
      >
        <FilaTable>
          <thead>
            <tr>
              <th>No</th>
              <th>Müşteri</th>
              <th>Plan</th>
              <th>Tutar</th>
              <th>Durum</th>
              <th>E-posta</th>
              <th className="text-end">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {data.recentOrders.length === 0 ? (
              <AdminEmptyRow colSpan={7} message="Henüz sipariş yok." />
            ) : (
              data.recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="text-body">#{order.id}</td>
                  <td>
                    <div className="fw-medium text-secondary">{order.name}</div>
                    <div className="fs-14 text-body">{order.email}</div>
                  </td>
                  <td>{planLabel(order.plan_id, order.billing_mode)}</td>
                  <td>{formatTry(order.amount_kurus)}</td>
                  <td>
                    <span className={orderStatusClass(order.status)}>
                      {orderStatusLabel(order.status)}
                    </span>
                  </td>
                  <td>{order.email_sent_at ? "Gönderildi" : "Bekliyor"}</td>
                  <td className="text-end">
                    {order.status === "paid" && (
                      <button
                        type="button"
                        disabled={busyId === order.id}
                        onClick={() => resendEmail(order.id)}
                        className="admin-btn admin-btn-primary"
                      >
                        Tekrar Gönder
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </FilaTable>
      </FilaCard>

      <FilaCard
        title="Son Lisanslar"
        footer={
          <Link href="/admin/lisanslar" className="text-primary text-decoration-none fw-medium">
            Tüm lisanslar →
          </Link>
        }
      >
        <FilaTable>
          <thead>
            <tr>
              <th>No</th>
              <th>Müşteri</th>
              <th>Anahtar</th>
              <th>Bitiş</th>
              <th>Durum</th>
              <th className="text-end">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {data.recentLicenses.length === 0 ? (
              <AdminEmptyRow colSpan={6} message="Henüz lisans yok." />
            ) : (
              data.recentLicenses.map((license) => (
                <tr key={license.id}>
                  <td className="text-body">#{license.id}</td>
                  <td>
                    <div className="fw-medium text-secondary">{license.customer_code}</div>
                    <div className="fs-14 text-body">{license.email}</div>
                  </td>
                  <td>
                    <code className="fs-13">{license.license_key}</code>
                  </td>
                  <td>
                    {license.expires_at ? formatDate(license.expires_at) : "Ömür boyu"}
                  </td>
                  <td>{licenseStatusLabel(license.status)}</td>
                  <td className="text-end">
                    {license.billing_mode === "monthly" && (
                      <button
                        type="button"
                        disabled={busyId === license.id}
                        onClick={() => extendLicense(license.id)}
                        className="admin-btn admin-btn-outline"
                      >
                        +1 Ay
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </FilaTable>
      </FilaCard>
    </>
  );
}
