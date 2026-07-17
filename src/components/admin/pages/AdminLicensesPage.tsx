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
  formatDaysRemaining,
  licenseStatusLabel,
  planLabel,
} from "@/lib/admin/labels";

type License = {
  id: number;
  license_key: string;
  plan_id: string;
  billing_mode: string;
  expires_at: string | null;
  status: string;
  email: string;
  customer_code: string;
};

export default function AdminLicensesPage() {
  const [rows, setRows] = useState<License[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<number | null>(null);

  async function load() {
    const res = await fetch("/api/admin/licenses");
    const json = (await res.json()) as { licenses?: License[]; error?: string };
    if (!res.ok) throw new Error(json.error || "Veri yüklenemedi.");
    setRows(json.licenses ?? []);
  }

  useEffect(() => {
    load()
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Veri yüklenemedi.");
      })
      .finally(() => setLoading(false));
  }, []);

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

  if (loading) return <AdminLoadingCard title="Lisanslar" />;
  if (error) return <AdminErrorCard message={error} />;

  return (
    <AdminPanelCard title="Lisanslar">
      <Table>
        <TableHeader>
          <TableRow className="border-none uppercase [&>th]:text-center">
            <TableHead className="text-left!">Müşteri</TableHead>
            <TableHead className="text-left!">Lisans Anahtarı</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Bitiş</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead className="text-right!">İşlem</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.length === 0 ? (
            <AdminEmptyRow colSpan={6} message="Henüz lisans yok." />
          ) : (
            rows.map((license) => (
              <TableRow
                key={license.id}
                className="text-center text-base font-medium text-dark dark:text-white"
              >
                <TableCell className="text-left!">
                  <div>{license.customer_code}</div>
                  <div className="text-sm text-dark-5 dark:text-dark-6">{license.email}</div>
                </TableCell>
                <TableCell className="text-left!">
                  <code className="text-xs">{license.license_key}</code>
                </TableCell>
                <TableCell>{planLabel(license.plan_id, license.billing_mode)}</TableCell>
                <TableCell>
                  <div>{license.expires_at ? formatDate(license.expires_at) : "Ömür boyu"}</div>
                  <div className="text-xs text-dark-5 dark:text-dark-6">
                    {formatDaysRemaining(license.expires_at)}
                  </div>
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
                      +1 Ay Uzat
                    </button>
                  )}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </AdminPanelCard>
  );
}
