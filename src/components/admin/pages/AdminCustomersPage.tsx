"use client";

import { useEffect, useState } from "react";
import {
  AdminEmptyRow,
  AdminErrorCard,
  AdminLoadingCard,
} from "@/components/admin/AdminPageHelpers";
import { FilaCard, FilaTable } from "@/components/admin/fila/FilaUi";
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

export default function AdminCustomersPage({
  initialCustomers,
}: {
  initialCustomers?: Customer[];
}) {
  const hasInitial = initialCustomers !== undefined;
  const [rows, setRows] = useState<Customer[]>(initialCustomers ?? []);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(!hasInitial);
  const [busyId, setBusyId] = useState<number | null>(null);
  const [modalCustomer, setModalCustomer] = useState<Customer | null>(null);
  const [planKey, setPlanKey] = useState(ADMIN_ASSIGN_PLAN_OPTIONS[0]?.value ?? "");
  const [licenseKey, setLicenseKey] = useState("");
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
    if (hasInitial) return;
    load()
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Veri yüklenemedi.");
      })
      .finally(() => setLoading(false));
  }, [hasInitial]);

  function openAssignModal(customer: Customer) {
    setModalCustomer(customer);
    setPlanKey(ADMIN_ASSIGN_PLAN_OPTIONS[0]?.value ?? "");
    setLicenseKey("");
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

    const trimmedKey = licenseKey.trim();
    if (!trimmedKey) {
      setModalError("Lisans anahtarı girin.");
      return;
    }

    setBusyId(modalCustomer.id);
    setModalError("");

    const res = await fetch("/api/admin/customers/assign", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: modalCustomer.id,
        planKey,
        licenseKey: trimmedKey,
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
      <FilaCard title="Kayıtlı Müşteriler">
        <FilaTable>
          <thead>
            <tr>
              <th>Müşteri Kodu</th>
              <th>Ad Soyad</th>
              <th>E-posta</th>
              <th>Telefon</th>
              <th>Sipariş</th>
              <th>Lisans</th>
              <th>Kayıt Tarihi</th>
              <th className="text-end">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <AdminEmptyRow colSpan={8} message="Henüz kayıtlı müşteri yok." />
            ) : (
              rows.map((row) => (
                <tr key={row.id}>
                  <td className="fw-medium text-secondary">{row.customer_code}</td>
                  <td>{row.name}</td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.order_count}</td>
                  <td>{row.license_count}</td>
                  <td>{formatDate(row.created_at)}</td>
                  <td className="text-end">
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
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </FilaTable>
      </FilaCard>

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
              <span>Lisans anahtarı</span>
              <input
                type="text"
                value={licenseKey}
                onChange={(event) => setLicenseKey(event.target.value)}
                placeholder="Örn. DERP-XXXXXXXXXX-XXXXXXXXXX"
                autoComplete="off"
                spellCheck={false}
              />
            </label>

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
