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
import { formatDate } from "@/lib/admin/labels";

type Customer = {
  id: number;
  customer_code: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
};

export default function AdminCustomersPage() {
  const [rows, setRows] = useState<Customer[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/customers")
      .then(async (res) => {
        const json = (await res.json()) as { customers?: Customer[]; error?: string };
        if (!res.ok) throw new Error(json.error || "Veri yüklenemedi.");
        setRows(json.customers ?? []);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Veri yüklenemedi.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <AdminLoadingCard title="Müşteriler" />;
  if (error) return <AdminErrorCard message={error} />;

  return (
    <AdminPanelCard title="Kayıtlı Müşteriler">
      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="text-left!">Müşteri Kodu</TableHead>
            <TableHead className="text-left!">Ad Soyad</TableHead>
            <TableHead className="text-left!">E-posta</TableHead>
            <TableHead>Telefon</TableHead>
            <TableHead>Kayıt Tarihi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? (
            <AdminEmptyRow colSpan={5} message="Henüz kayıtlı müşteri yok." />
          ) : (
            rows.map((row) => (
              <TableRow
                key={row.id}
                className="text-center text-base font-medium text-dark dark:text-white"
              >
                <TableCell className="text-left!">{row.customer_code}</TableCell>
                <TableCell className="text-left!">{row.name}</TableCell>
                <TableCell className="text-left!">{row.email}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{formatDate(row.created_at)}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </AdminPanelCard>
  );
}
