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
    <FilaCard title="Lisanslar">
      <FilaTable>
        <thead>
          <tr>
            <th>Müşteri</th>
            <th>Lisans Anahtarı</th>
            <th>Plan</th>
            <th>Bitiş</th>
            <th>Durum</th>
            <th className="text-end">İşlem</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <AdminEmptyRow colSpan={6} message="Henüz lisans yok." />
          ) : (
            rows.map((license) => (
              <tr key={license.id}>
                <td>
                  <div className="fw-medium text-secondary">{license.customer_code}</div>
                  <div className="fs-13 text-body">{license.email}</div>
                </td>
                <td>
                  <code className="fs-13">{license.license_key}</code>
                </td>
                <td>{planLabel(license.plan_id, license.billing_mode)}</td>
                <td>
                  <div>
                    {license.expires_at ? formatDate(license.expires_at) : "Ömür boyu"}
                  </div>
                  <div className="fs-13 text-body">
                    {formatDaysRemaining(license.expires_at)}
                  </div>
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
                      +1 Ay Uzat
                    </button>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </FilaTable>
    </FilaCard>
  );
}
