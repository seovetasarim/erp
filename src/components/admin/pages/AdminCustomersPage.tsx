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
  ADMIN_ASSIGN_PLAN_OPTIONS,
  formatDate,
  LICENSE_DURATION_OPTIONS,
} from "@/lib/admin/labels";

type Customer = {
  id: number;
  customer_code: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  license_count: number;
  order_count: number;
};

export default function AdminCustomersPage() {
  const [rows, setRows] = useState<Customer[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<number | null>(null);
  const [modalCustomer, setModalCustomer] = useState<Customer | null>(null);
  const [planKey, setPlanKey] = useState(ADMIN_ASSIGN_PLAN_OPTIONS[0]?.value ?? "");
  const [durationDays, setDurationDays] = useState<number | null>(30);
  const [sendEmail, setSendEmail] = useState(true);
  const [modalError, setModalError] = useState("");

  async function load() {
    const res = await fetch("/api/admin/customers");
    const json = (await res.json()) as { customers?: Customer[]; error?: string };
    if (!res.ok) throw new Error(json.error || "Veri yüklenemedi.");
    setRows(json.customers ?? []);
  }

  useEffect(() => {
    load()
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Veri yüklenemedi.");
      })
      .finally(() => setLoading(false));
  }, []);

  function openAssignModal(customer: Customer) {
    setModalCustomer(customer);
    setPlanKey(ADMIN_ASSIGN_PLAN_OPTIONS[0]?.value ?? "");
    setDurationDays(30);
    setSendEmail(true);
    setModalError("");
  }

  function closeModal() {
    setModalCustomer(null);
    setModalError("");
  }

  async function assignProduct() {
    if (!modalCustomer) return;
    setBusyId(modalCustomer.id);
    setModalError("");

    const res = await fetch("/api/admin/customers/assign", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: modalCustomer.id,
        planKey,
        durationDays,
        sendEmail,
      }),
    });

    const json = (await res.json()) as { error?: string };
    if (!res.ok) {
      setModalError(json.error || "Lisans tanımlanamadı.");
      setBusyId(null);
      return;
    }

    closeModal();
    await load();
    setBusyId(null);
  }

  async function deleteCustomer(customer: Customer) {
    if (
      !window.confirm(
        `${customer.name} (${customer.email}) ve tüm sipariş/lisans kayıtları kalıcı olarak silinsin mi?`,
      )
    ) {
      return;
    }

    setBusyId(customer.id);
    try {
      const res = await fetch(`/api/admin/customers/${customer.id}`, {
        method: "DELETE",
      });
      const json = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Silinemedi.");
      await load();
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Silinemedi.");
    } finally {
      setBusyId(null);
    }
  }

  if (loading) return <AdminLoadingCard title="Müşteriler" />;
  if (error) return <AdminErrorCard message={error} />;

  return (
    <>
      <AdminPanelCard title="Kayıtlı Müşteriler">
        <Table>
          <TableHeader>
            <TableRow className="border-none uppercase [&>th]:text-center">
              <TableHead className="text-left!">Müşteri Kodu</TableHead>
              <TableHead className="text-left!">Ad Soyad</TableHead>
              <TableHead className="text-left!">E-posta</TableHead>
              <TableHead>Telefon</TableHead>
              <TableHead>Sipariş</TableHead>
              <TableHead>Lisans</TableHead>
              <TableHead>Kayıt Tarihi</TableHead>
              <TableHead className="text-right! min-w-[200px]">İşlem</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <AdminEmptyRow colSpan={8} message="Henüz kayıtlı müşteri yok." />
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
                  <TableCell>{row.order_count}</TableCell>
                  <TableCell>{row.license_count}</TableCell>
                  <TableCell>{formatDate(row.created_at)}</TableCell>
                  <TableCell className="text-right!">
                    <div className="admin-row-actions">
                      <button
                        type="button"
                        disabled={busyId === row.id}
                        onClick={() => openAssignModal(row)}
                        className="admin-btn admin-btn-primary"
                      >
                        Lisans Tanı
                      </button>
                      <button
                        type="button"
                        disabled={busyId === row.id}
                        onClick={() => deleteCustomer(row)}
                        className="admin-btn admin-btn-danger"
                      >
                        Sil
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </AdminPanelCard>

      {modalCustomer && (
        <div className="admin-modal-backdrop" role="presentation" onClick={closeModal}>
          <div
            className="admin-modal"
            role="dialog"
            aria-labelledby="assign-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="assign-modal-title" className="admin-modal-title">
              Lisans / Ürün Tanı
            </h3>
            <p className="admin-modal-sub">
              {modalCustomer.name} · {modalCustomer.email}
            </p>

            <label className="admin-modal-field">
              <span>Paket</span>
              <select value={planKey} onChange={(event) => setPlanKey(event.target.value)}>
                {ADMIN_ASSIGN_PLAN_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="admin-modal-field">
              <span>Lisans süresi</span>
              <select
                value={durationDays === null ? "lifetime" : String(durationDays)}
                onChange={(event) => {
                  const value = event.target.value;
                  setDurationDays(value === "lifetime" ? null : Number(value));
                }}
              >
                {LICENSE_DURATION_OPTIONS.map((option) => (
                  <option
                    key={option.label}
                    value={option.value === null ? "lifetime" : String(option.value)}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="admin-modal-check">
              <input
                type="checkbox"
                checked={sendEmail}
                onChange={(event) => setSendEmail(event.target.checked)}
              />
              <span>Müşteriye lisans e-postası gönder</span>
            </label>

            {modalError && <p className="admin-modal-error">{modalError}</p>}

            <div className="admin-modal-actions">
              <button type="button" className="admin-modal-cancel" onClick={closeModal}>
                Vazgeç
              </button>
              <button
                type="button"
                disabled={busyId === modalCustomer.id}
                className="admin-modal-submit"
                onClick={assignProduct}
              >
                {busyId === modalCustomer.id ? "Kaydediliyor…" : "Lisansı Tanımla"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
