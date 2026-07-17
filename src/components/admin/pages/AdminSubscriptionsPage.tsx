"use client";

import { useEffect, useState } from "react";
import {
  AdminEmptyRow,
  AdminErrorCard,
  AdminLoadingCard,
} from "@/components/admin/AdminPageHelpers";
import { AdminPanelCard } from "@/components/admin/nextadmin/AdminPanelCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/admin/nextadmin/ui/table";
import {
  formatDate,
  planLabel,
  subscriptionStatusLabel,
} from "@/lib/admin/labels";

type Subscription = {
  id: number;
  plan_id: string;
  billing_mode: string;
  status: string;
  auto_renew: number;
  next_renewal_at: string | null;
  name: string;
  email: string;
  customer_code: string;
  updated_at: string;
};

export default function AdminSubscriptionsPage() {
  const [rows, setRows] = useState<Subscription[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/subscriptions")
      .then(async (res) => {
        const json = (await res.json()) as {
          subscriptions?: Subscription[];
          error?: string;
        };
        if (!res.ok) throw new Error(json.error || "Veri yüklenemedi.");
        setRows(json.subscriptions ?? []);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Veri yüklenemedi.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <AdminLoadingCard title="Abonelikler" />;
  if (error) return <AdminErrorCard message={error} />;

  return (
    <AdminPanelCard title="Aylık Abonelikler">
      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="text-left!">Müşteri</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>Otomatik Yenileme</TableHead>
            <TableHead>Sonraki Yenileme</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? (
            <AdminEmptyRow colSpan={5} message="Henüz abonelik yok." />
          ) : (
            rows.map((row) => (
              <TableRow
                key={row.id}
                className="text-center text-base font-medium text-dark dark:text-white"
              >
                <TableCell className="text-left!">
                  <div>{row.name}</div>
                  <div className="text-sm text-dark-5 dark:text-dark-6">
                    {row.customer_code} · {row.email}
                  </div>
                </TableCell>
                <TableCell>{planLabel(row.plan_id, row.billing_mode)}</TableCell>
                <TableCell>{subscriptionStatusLabel(row.status)}</TableCell>
                <TableCell>{row.auto_renew ? "Açık" : "Kapalı"}</TableCell>
                <TableCell>{formatDate(row.next_renewal_at)}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </AdminPanelCard>
  );
}
