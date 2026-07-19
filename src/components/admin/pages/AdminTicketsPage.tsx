"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AdminEmptyRow,
  AdminErrorCard,
  AdminLoadingCard,
} from "@/components/admin/AdminPageHelpers";
import { FilaCard, FilaTable } from "@/components/admin/fila/FilaUi";
import { formatDate, ticketStatusLabel } from "@/lib/admin/labels";

type Ticket = {
  id: number;
  ticket_code: string;
  name: string;
  email: string;
  subject: string;
  status: string;
  created_at: string;
};

export default function AdminTicketsPage({
  initialTickets,
}: {
  initialTickets?: Ticket[];
}) {
  const hasInitial = initialTickets !== undefined;
  const [rows, setRows] = useState<Ticket[]>(initialTickets ?? []);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(!hasInitial);

  useEffect(() => {
    if (hasInitial) return;
    fetch("/api/admin/tickets")
      .then(async (res) => {
        const json = (await res.json()) as { tickets?: Ticket[]; error?: string };
        if (!res.ok) throw new Error(json.error || "Veri yüklenemedi.");
        setRows(json.tickets ?? []);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Veri yüklenemedi.");
      })
      .finally(() => setLoading(false));
  }, [hasInitial]);

  if (loading) return <AdminLoadingCard title="Destek Talepleri" />;
  if (error) return <AdminErrorCard message={error} />;

  return (
    <FilaCard title="Destek Talepleri">
      <FilaTable>
        <thead>
          <tr>
            <th>Talep No</th>
            <th>Gönderen</th>
            <th>Konu</th>
            <th>Durum</th>
            <th>Tarih</th>
            <th className="text-end">İşlem</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <AdminEmptyRow colSpan={6} message="Henüz destek talebi yok." />
          ) : (
            rows.map((row) => (
              <tr key={row.id}>
                <td className="fw-medium text-secondary">{row.ticket_code}</td>
                <td>
                  <div className="fw-medium text-secondary">{row.name}</div>
                  <div className="fs-13 text-body">{row.email}</div>
                </td>
                <td>{row.subject}</td>
                <td>{ticketStatusLabel(row.status)}</td>
                <td>{formatDate(row.created_at)}</td>
                <td className="text-end">
                  <Link
                    href={`/admin/destek/${row.id}`}
                    className="admin-btn admin-btn-outline"
                  >
                    Görüntüle
                  </Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </FilaTable>
    </FilaCard>
  );
}
