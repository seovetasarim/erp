"use client";

import Link from "next/link";
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

export default function AdminTicketsPage() {
  const [rows, setRows] = useState<Ticket[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  if (loading) return <AdminLoadingCard title="Destek Talepleri" />;
  if (error) return <AdminErrorCard message={error} />;

  return (
    <AdminPanelCard title="Destek Talepleri">
      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="text-left!">Talep No</TableHead>
            <TableHead className="text-left!">Gönderen</TableHead>
            <TableHead className="text-left!">Konu</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>Tarih</TableHead>
            <TableHead className="text-right!">İşlem</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? (
            <AdminEmptyRow colSpan={6} message="Henüz destek talebi yok." />
          ) : (
            rows.map((row) => (
              <TableRow
                key={row.id}
                className="text-center text-base font-medium text-dark dark:text-white"
              >
                <TableCell className="text-left!">{row.ticket_code}</TableCell>
                <TableCell className="text-left!">
                  <div>{row.name}</div>
                  <div className="text-sm text-dark-5 dark:text-dark-6">{row.email}</div>
                </TableCell>
                <TableCell className="text-left!">{row.subject}</TableCell>
                <TableCell>{ticketStatusLabel(row.status)}</TableCell>
                <TableCell>{formatDate(row.created_at)}</TableCell>
                <TableCell className="text-right!">
                  <Link
                    href={`/admin/destek/${row.id}`}
                    className="rounded-lg border border-primary px-3 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
                  >
                    Görüntüle
                  </Link>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </AdminPanelCard>
  );
}
