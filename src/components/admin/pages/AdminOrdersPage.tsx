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
  formatTry,
  LICENSE_DURATION_OPTIONS,
  orderStatusClass,
  orderStatusLabel,
  planLabel,
} from "@/lib/admin/labels";

type Order = {
  id: number;
  merchant_oid: string;
  plan_id: string;
  billing_mode: string;
  amount_kurus: number;
  status: string;
  email_sent_at: string | null;
  license_count: number;
  name: string;
  email: string;
  customer_code: string;
  created_at: string;
};

export default function AdminOrdersPage() {
  const [rows, setRows] = useState<Order[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<number | null>(null);
  const [modalOrder, setModalOrder] = useState<Order | null>(null);
  const [durationDays, setDurationDays] = useState<number | null>(30);
  const [sendEmail, setSendEmail] = useState(true);
  const [modalError, setModalError] = useState("");

  async function load() {
    const res = await fetch("/api/admin/orders");
    const json = (await res.json()) as { orders?: Order[]; error?: string };
    if (!res.ok) throw new Error(json.error || "Veri yüklenemedi.");
    setRows(json.orders ?? []);
  }

  useEffect(() => {
    load()
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Veri yüklenemedi.");
      })
      .finally(() => setLoading(false));
  }, []);

  function openGenerateModal(order: Order) {
    setModalOrder(order);
    setDurationDays(30);
    setSendEmail(true);
    setModalError("");
  }

  function closeModal() {
    setModalOrder(null);
    setModalError("");
  }

  async function generateLicense() {
    if (!modalOrder) return;
    setBusyId(modalOrder.id);
    setModalError("");

    const res = await fetch("/api/admin/licenses/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId: modalOrder.id,
        durationDays,
        sendEmail,
      }),
    });

    const json = (await res.json()) as { error?: string };
    if (!res.ok) {
      setModalError(json.error || "Lisans üretilemedi.");
      setBusyId(null);
      return;
    }

    closeModal();
    await load();
    setBusyId(null);
  }

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

  if (loading) return <AdminLoadingCard title="Siparişler" />;
  if (error) return <AdminErrorCard message={error} />;

  return (
    <>
      <AdminPanelCard title="Satın Almalar / Siparişler">
        <Table>
          <TableHeader>
            <TableRow className="border-none uppercase [&>th]:text-center">
              <TableHead className="text-left!">Sipariş</TableHead>
              <TableHead className="text-left!">Müşteri</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Tutar</TableHead>
              <TableHead>Durum</TableHead>
              <TableHead>Lisans</TableHead>
              <TableHead>E-posta</TableHead>
              <TableHead className="text-right!">İşlem</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 ? (
              <AdminEmptyRow colSpan={8} message="Henüz sipariş yok." />
            ) : (
              rows.map((order) => {
                const hasLicense = Number(order.license_count) > 0;
                return (
                  <TableRow
                    key={order.id}
                    className="text-center text-base font-medium text-dark dark:text-white"
                  >
                    <TableCell className="text-left!">
                      <div>#{order.id}</div>
                      <div className="text-xs text-dark-5 dark:text-dark-6">{order.merchant_oid}</div>
                    </TableCell>
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
                    <TableCell>
                      {order.status === "paid" ? (
                        hasLicense ? (
                          <span className="text-green-dark">Verildi ({order.license_count})</span>
                        ) : (
                          <span className="text-yellow-dark-2">Bekliyor</span>
                        )
                      ) : (
                        "—"
                      )}
                    </TableCell>
                    <TableCell>
                      {hasLicense ? (order.email_sent_at ? "Gönderildi" : "Bekliyor") : "—"}
                    </TableCell>
                    <TableCell className="text-right!">
                      {order.status === "paid" && !hasLicense && (
                        <button
                          type="button"
                          disabled={busyId === order.id}
                          onClick={() => openGenerateModal(order)}
                          className="rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white transition hover:bg-opacity-90 disabled:opacity-60"
                        >
                          Lisans Üret
                        </button>
                      )}
                      {order.status === "paid" && hasLicense && (
                        <button
                          type="button"
                          disabled={busyId === order.id}
                          onClick={() => resendEmail(order.id)}
                          className="rounded-lg border border-primary px-3 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-white disabled:opacity-60"
                        >
                          E-posta Gönder
                        </button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </AdminPanelCard>

      {modalOrder && (
        <div className="admin-modal-backdrop" role="presentation" onClick={closeModal}>
          <div
            className="admin-modal"
            role="dialog"
            aria-labelledby="license-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="license-modal-title" className="admin-modal-title">
              Lisans Üret — Sipariş #{modalOrder.id}
            </h3>
            <p className="admin-modal-sub">
              {modalOrder.name} · {planLabel(modalOrder.plan_id, modalOrder.billing_mode)}
            </p>

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
                İptal
              </button>
              <button
                type="button"
                disabled={busyId === modalOrder.id}
                className="admin-modal-submit"
                onClick={generateLicense}
              >
                {busyId === modalOrder.id ? "Üretiliyor…" : "Lisansı Oluştur"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
