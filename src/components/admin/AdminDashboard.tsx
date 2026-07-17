"use client";



import Link from "next/link";

import { useEffect, useState } from "react";

import { AdminPanelCard } from "@/components/admin/nextadmin/AdminPanelCard";

import { OverviewCards } from "@/components/admin/nextadmin/OverviewCards";

import {

  Table,

  TableBody,

  TableCell,

  TableHead,

  TableHeader,

  TableRow,

} from "@/components/admin/nextadmin/ui/table";

import {

  AdminEmptyRow,

  AdminErrorCard,

  AdminLoadingCard,

} from "@/components/admin/AdminPageHelpers";

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

      <OverviewCards stats={data.stats} />



      <div className="mt-4 flex flex-col gap-4 md:mt-6 md:gap-6 2xl:mt-9 2xl:gap-7.5">

        <AdminPanelCard title="Son Siparişler">

          <Table>

            <TableHeader>

              <TableRow className="border-none uppercase [&>th]:text-center">

                <TableHead className="min-w-[80px] text-left!">No</TableHead>

                <TableHead className="text-left!">Müşteri</TableHead>

                <TableHead>Plan</TableHead>

                <TableHead>Tutar</TableHead>

                <TableHead>Durum</TableHead>

                <TableHead>E-posta</TableHead>

                <TableHead className="text-right!">İşlem</TableHead>

              </TableRow>

            </TableHeader>

            <TableBody>

              {data.recentOrders.length === 0 ? (

                <AdminEmptyRow colSpan={7} message="Henüz sipariş yok." />

              ) : (

                data.recentOrders.map((order) => (

                  <TableRow

                    key={order.id}

                    className="text-center text-base font-medium text-dark dark:text-white"

                  >

                    <TableCell className="text-left!">{order.id}</TableCell>

                    <TableCell className="text-left!">

                      <div>{order.name}</div>

                      <div className="text-sm text-dark-5 dark:text-dark-6">{order.email}</div>

                    </TableCell>

                    <TableCell>{planLabel(order.plan_id, order.billing_mode)}</TableCell>

                    <TableCell>{formatTry(order.amount_kurus)}</TableCell>

                    <TableCell>
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${orderStatusClass(order.status)}`}
                      >
                        {orderStatusLabel(order.status)}
                      </span>
                    </TableCell>

                    <TableCell>{order.email_sent_at ? "Gönderildi" : "Bekliyor"}</TableCell>

                    <TableCell className="text-right!">

                      {order.status === "paid" && (

                        <button

                          type="button"

                          disabled={busyId === order.id}

                          onClick={() => resendEmail(order.id)}

                          className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white transition hover:bg-opacity-90 disabled:opacity-60"

                        >

                          Tekrar Gönder

                        </button>

                      )}

                    </TableCell>

                  </TableRow>

                ))

              )}

            </TableBody>

          </Table>

          <div className="mt-4 text-right">

            <Link href="/admin/siparisler" className="text-sm font-medium text-primary hover:underline">

              Tüm siparişler →

            </Link>

          </div>

        </AdminPanelCard>



        <AdminPanelCard title="Son Lisanslar">

          <Table>

            <TableHeader>

              <TableRow className="border-none uppercase [&>th]:text-center">

                <TableHead className="min-w-[80px] text-left!">No</TableHead>

                <TableHead className="text-left!">Müşteri</TableHead>

                <TableHead className="text-left!">Anahtar</TableHead>

                <TableHead>Bitiş</TableHead>

                <TableHead>Durum</TableHead>

                <TableHead className="text-right!">İşlem</TableHead>

              </TableRow>

            </TableHeader>

            <TableBody>

              {data.recentLicenses.length === 0 ? (

                <AdminEmptyRow colSpan={6} message="Henüz lisans yok." />

              ) : (

                data.recentLicenses.map((license) => (

                  <TableRow

                    key={license.id}

                    className="text-center text-base font-medium text-dark dark:text-white"

                  >

                    <TableCell className="text-left!">{license.id}</TableCell>

                    <TableCell className="text-left!">

                      <div>{license.customer_code}</div>

                      <div className="text-sm text-dark-5 dark:text-dark-6">{license.email}</div>

                    </TableCell>

                    <TableCell className="text-left!">

                      <code className="text-xs">{license.license_key}</code>

                    </TableCell>

                    <TableCell>

                      {license.expires_at ? formatDate(license.expires_at) : "Ömür boyu"}

                    </TableCell>

                    <TableCell>{licenseStatusLabel(license.status)}</TableCell>

                    <TableCell className="text-right!">

                      {license.billing_mode === "monthly" && (

                        <button

                          type="button"

                          disabled={busyId === license.id}

                          onClick={() => extendLicense(license.id)}

                          className="rounded-lg border border-primary px-3 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-white disabled:opacity-60"

                        >

                          +1 Ay

                        </button>

                      )}

                    </TableCell>

                  </TableRow>

                ))

              )}

            </TableBody>

          </Table>

          <div className="mt-4 text-right">

            <Link href="/admin/lisanslar" className="text-sm font-medium text-primary hover:underline">

              Tüm lisanslar →

            </Link>

          </div>

        </AdminPanelCard>

      </div>

    </>

  );

}

