"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AdminErrorCard, AdminLoadingCard } from "@/components/admin/AdminPageHelpers";
import { FilaCard } from "@/components/admin/fila/FilaUi";
import { formatDate, ticketStatusLabel } from "@/lib/admin/labels";

type Ticket = {
  id: number;
  ticket_code: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  status: string;
  admin_reply: string | null;
  replied_at: string | null;
  replied_by: string | null;
  created_at: string;
};

export default function AdminTicketDetailPage({ ticketId }: { ticketId: number }) {
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("open");
  const [reply, setReply] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState("");

  async function load() {
    const res = await fetch(`/api/admin/tickets/${ticketId}`);
    const json = (await res.json()) as { ticket?: Ticket; error?: string };
    if (!res.ok) throw new Error(json.error || "Talep yüklenemedi.");
    setTicket(json.ticket ?? null);
    setStatus(json.ticket?.status ?? "open");
    setReply(json.ticket?.admin_reply ?? "");
  }

  useEffect(() => {
    load()
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Talep yüklenemedi.");
      })
      .finally(() => setLoading(false));
  }, [ticketId]);

  async function save() {
    setSaving(true);
    setSaved("");
    const res = await fetch(`/api/admin/tickets/${ticketId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, adminReply: reply }),
    });
    const json = (await res.json()) as { ticket?: Ticket; error?: string };
    setSaving(false);
    if (!res.ok) {
      setError(json.error || "Kaydedilemedi.");
      return;
    }
    setTicket(json.ticket ?? null);
    setSaved("Yanıt kaydedildi.");
  }

  if (loading) return <AdminLoadingCard title="Destek Talebi" />;
  if (error) return <AdminErrorCard message={error} />;
  if (!ticket) return <AdminErrorCard message="Talep bulunamadı." />;

  return (
    <>
      <div className="mb-3">
        <Link href="/admin/destek" className="text-primary text-decoration-none fw-medium">
          ← Destek taleplerine dön
        </Link>
      </div>

      <FilaCard title={`Talep ${ticket.ticket_code}`}>
        <div className="row g-4">
          <div className="col-md-6">
            <p className="fs-14 text-secondary mb-1">Gönderen</p>
            <p className="fw-medium text-secondary mb-0">{ticket.name}</p>
            <p className="fs-14 text-body mb-0">{ticket.email}</p>
            {ticket.phone ? <p className="fs-14 text-body mb-0">{ticket.phone}</p> : null}
          </div>
          <div className="col-md-6">
            <p className="fs-14 text-secondary mb-1">Durum</p>
            <p className="fw-medium text-secondary mb-0">{ticketStatusLabel(ticket.status)}</p>
            <p className="fs-14 text-body mt-2 mb-0">
              Oluşturulma: {formatDate(ticket.created_at)}
            </p>
          </div>
        </div>

        <div className="mt-4">
          <p className="fs-14 fw-medium text-secondary mb-2">Konu</p>
          <div className="bg-body-bg rounded-10 p-3 text-secondary">{ticket.subject}</div>
        </div>

        <div className="mt-3">
          <p className="fs-14 fw-medium text-secondary mb-2">Müşteri Mesajı</p>
          <div
            className="bg-body-bg rounded-10 p-3 text-secondary"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {ticket.message}
          </div>
        </div>
      </FilaCard>

      <FilaCard title="Yanıt Ver">
        <div className="mb-20">
          <label className="label fs-16 mb-2" htmlFor="ticket-status">
            Durum
          </label>
          <select
            id="ticket-status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="form-select"
          >
            <option value="open">Açık</option>
            <option value="in_progress">İşlemde</option>
            <option value="answered">Yanıtlandı</option>
            <option value="closed">Kapatıldı</option>
          </select>
        </div>

        <div className="mb-20">
          <label className="label fs-16 mb-2" htmlFor="ticket-reply">
            Admin Yanıtı
          </label>
          <textarea
            id="ticket-reply"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            rows={6}
            placeholder="Müşteriye göndereceğiniz yanıtı yazın…"
            className="form-control"
          />
        </div>

        {ticket.replied_at ? (
          <p className="fs-14 text-secondary mb-3">
            Son yanıt: {formatDate(ticket.replied_at)}
            {ticket.replied_by ? ` · ${ticket.replied_by}` : ""}
          </p>
        ) : null}

        <div className="d-flex align-items-center gap-3">
          <button
            type="button"
            disabled={saving}
            onClick={save}
            className="btn btn-primary text-white"
          >
            {saving ? "Kaydediliyor…" : "Yanıtı Kaydet"}
          </button>
          {saved ? <span className="text-success fs-14">{saved}</span> : null}
        </div>
      </FilaCard>
    </>
  );
}
