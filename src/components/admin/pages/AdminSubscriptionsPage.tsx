"use client";

import { useEffect, useState } from "react";
import {
  AdminEmptyRow,
  AdminErrorCard,
  AdminLoadingCard,
} from "@/components/admin/AdminPageHelpers";
import { FilaCard, FilaTable } from "@/components/admin/fila/FilaUi";
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

export default function AdminSubscriptionsPage({
  initialSubscriptions,
}: {
  initialSubscriptions?: Subscription[];
}) {
  const hasInitial = initialSubscriptions !== undefined;
  const [rows, setRows] = useState<Subscription[]>(initialSubscriptions ?? []);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(!hasInitial);

  useEffect(() => {
    if (hasInitial) return;
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
  }, [hasInitial]);

  if (loading) return <AdminLoadingCard title="Abonelikler" />;
  if (error) return <AdminErrorCard message={error} />;

  return (
    <FilaCard title="Aylık Abonelikler">
      <FilaTable>
        <thead>
          <tr>
            <th>Müşteri</th>
            <th>Plan</th>
            <th>Durum</th>
            <th>Otomatik Yenileme</th>
            <th>Sonraki Yenileme</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <AdminEmptyRow colSpan={5} message="Henüz abonelik yok." />
          ) : (
            rows.map((row) => (
              <tr key={row.id}>
                <td>
                  <div className="fw-medium text-secondary">{row.name}</div>
                  <div className="fs-13 text-body">
                    {row.customer_code} · {row.email}
                  </div>
                </td>
                <td>{planLabel(row.plan_id, row.billing_mode)}</td>
                <td>{subscriptionStatusLabel(row.status)}</td>
                <td>{row.auto_renew ? "Açık" : "Kapalı"}</td>
                <td>{formatDate(row.next_renewal_at)}</td>
              </tr>
            ))
          )}
        </tbody>
      </FilaTable>
    </FilaCard>
  );
}
