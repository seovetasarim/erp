"use client";

import { useEffect, useState } from "react";
import {
  AdminEmptyRow,
  AdminErrorCard,
  AdminLoadingCard,
} from "@/components/admin/AdminPageHelpers";
import { FilaCard, FilaTable } from "@/components/admin/fila/FilaUi";
import {
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

  async function orderAction(
    order: Order,
    action: "approve" | "cancel" | "delete" | "delete-force",
  ) {
    setBusyId(order.id);

    try {
      if (action === "delete" || action === "delete-force") {
        const force = action === "delete-force";
        if (
          force &&
          !window.confirm(
            "Bu siparişe bağlı lisanslar da silinecek. Devam edilsin mi?",
          )
        ) {
          setBusyId(null);
          return;
        }
        if (
          !force &&
          !window.confirm(`Sipariş #${order.id} kalıcı olarak silinsin mi?`)
        ) {
          setBusyId(null);
          return;
        }

        const res = await fetch(
          `/api/admin/orders/${order.id}${force ? "?force=1" : ""}`,
          { method: "DELETE" },
        );
        const json = (await res.json()) as { error?: string };
        if (!res.ok) {
          if (
            !force &&
            json.error?.includes("lisans var") &&
            window.confirm(
              "Bu siparişte lisans kaydı var. Lisanslarla birlikte silinsin mi?",
            )
          ) {
            await orderAction(order, "delete-force");
            return;
          }
          throw new Error(json.error || "Silinemedi.");
        }
      } else {
        const res = await fetch(`/api/admin/orders/${order.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action }),
        });
        const json = (await res.json()) as { error?: string };
        if (!res.ok) throw new Error(json.error || "İşlem başarısız.");
      }

      await load();
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "İşlem başarısız.");
    } finally {
      setBusyId(null);
    }
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
      <FilaCard title="Satın Almalar / Siparişler">
        <FilaTable>
          <thead>
            <tr>
              <th>Sipariş</th>
              <th>Müşteri</th>
              <th>Plan</th>
              <th>Tutar</th>
              <th>Durum</th>
              <th>Lisans</th>
              <th>E-posta</th>
              <th className="text-end">İşlem</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <AdminEmptyRow colSpan={8} message="Henüz sipariş yok." />
            ) : (
              rows.map((order) => {
                const hasLicense = Number(order.license_count) > 0;
                const isPending = order.status === "pending";
                const isPaid = order.status === "paid";
                const canDelete =
                  order.status === "pending" ||
                  order.status === "cancelled" ||
                  order.status === "failed" ||
                  isPaid;

                return (
                  <tr key={order.id}>
                    <td>
                      <div className="fw-medium text-secondary">#{order.id}</div>
                      <div className="fs-13 text-body">{order.merchant_oid}</div>
                    </td>
                    <td>
                      <div className="fw-medium text-secondary">{order.name}</div>
                      <div className="fs-13 text-body">{order.email}</div>
                    </td>
                    <td>{planLabel(order.plan_id, order.billing_mode)}</td>
                    <td>{formatTry(order.amount_kurus)}</td>
                    <td>
                      <span className={orderStatusClass(order.status)}>
                        {orderStatusLabel(order.status)}
                      </span>
                    </td>
                    <td>
                      {isPaid ? (
                        hasLicense ? (
                          <span className="text-success">
                            Verildi ({order.license_count})
                          </span>
                        ) : (
                          <span className="text-warning">Bekliyor</span>
                        )
                      ) : (
                        "—"
                      )}
                    </td>
                    <td>
                      {hasLicense
                        ? order.email_sent_at
                          ? "Gönderildi"
                          : "Bekliyor"
                        : "—"}
                    </td>
                    <td className="text-end">
                      <div className="admin-row-actions">
                        {isPending && (
                          <>
                            <button
                              type="button"
                              disabled={busyId === order.id}
                              onClick={() => orderAction(order, "approve")}
                              className="admin-btn admin-btn-success"
                            >
                              Onayla
                            </button>
                            <button
                              type="button"
                              disabled={busyId === order.id}
                              onClick={() => orderAction(order, "cancel")}
                              className="admin-btn admin-btn-muted"
                            >
                              İptal
                            </button>
                          </>
                        )}
                        {isPaid && !hasLicense && (
                          <button
                            type="button"
                            disabled={busyId === order.id}
                            onClick={() => openGenerateModal(order)}
                            className="admin-btn admin-btn-primary"
                          >
                            Lisans Üret
                          </button>
                        )}
                        {isPaid && hasLicense && (
                          <button
                            type="button"
                            disabled={busyId === order.id}
                            onClick={() => resendEmail(order.id)}
                            className="admin-btn admin-btn-outline"
                          >
                            E-posta
                          </button>
                        )}
                        {canDelete && (
                          <button
                            type="button"
                            disabled={busyId === order.id}
                            onClick={() => orderAction(order, "delete")}
                            className="admin-btn admin-btn-danger"
                          >
                            Sil
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </FilaTable>
      </FilaCard>

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
              {modalOrder.name} ·{" "}
              {planLabel(modalOrder.plan_id, modalOrder.billing_mode)}
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
                Vazgeç
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
