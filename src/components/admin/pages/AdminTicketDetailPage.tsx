"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AdminErrorCard, AdminLoadingCard } from "@/components/admin/AdminPageHelpers";
import { AdminPanelCard } from "@/components/admin/nextadmin/AdminPanelCard";
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
    <div className="flex flex-col gap-4 md:gap-6">
      <Link href="/admin/destek" className="text-sm font-medium text-primary hover:underline">
        ← Destek taleplerine dön
      </Link>

      <AdminPanelCard title={`Talep ${ticket.ticket_code}`}>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm text-dark-5 dark:text-dark-6">Gönderen</p>
            <p className="font-medium text-dark dark:text-white">{ticket.name}</p>
            <p className="text-sm text-dark-5 dark:text-dark-6">{ticket.email}</p>
            {ticket.phone && (
              <p className="text-sm text-dark-5 dark:text-dark-6">{ticket.phone}</p>
            )}
          </div>
          <div>
            <p className="text-sm text-dark-5 dark:text-dark-6">Durum</p>
            <p className="font-medium text-dark dark:text-white">
              {ticketStatusLabel(ticket.status)}
            </p>
            <p className="mt-2 text-sm text-dark-5 dark:text-dark-6">
              Oluşturulma: {formatDate(ticket.created_at)}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-2 text-sm font-medium text-dark dark:text-white">Konu</p>
          <p className="rounded-lg bg-gray-2 px-4 py-3 text-dark dark:bg-dark-2 dark:text-white">
            {ticket.subject}
          </p>
        </div>

        <div className="mt-4">
          <p className="mb-2 text-sm font-medium text-dark dark:text-white">Müşteri Mesajı</p>
          <p className="whitespace-pre-wrap rounded-lg bg-gray-2 px-4 py-3 text-dark dark:bg-dark-2 dark:text-white">
            {ticket.message}
          </p>
        </div>
      </AdminPanelCard>

      <AdminPanelCard title="Yanıt Ver">
        <div className="grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-dark dark:text-white">Durum</span>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-lg border border-stroke bg-transparent px-4 py-3 text-dark outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
            >
              <option value="open">Açık</option>
              <option value="in_progress">İşlemde</option>
              <option value="answered">Yanıtlandı</option>
              <option value="closed">Kapatıldı</option>
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-dark dark:text-white">Admin Yanıtı</span>
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              rows={6}
              placeholder="Müşteriye göndereceğiniz yanıtı yazın…"
              className="rounded-lg border border-stroke bg-transparent px-4 py-3 text-dark outline-none focus:border-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
            />
          </label>

          {ticket.replied_at && (
            <p className="text-sm text-dark-5 dark:text-dark-6">
              Son yanıt: {formatDate(ticket.replied_at)}
              {ticket.replied_by ? ` · ${ticket.replied_by}` : ""}
            </p>
          )}

          <div className="flex items-center gap-3">
            <button
              type="button"
              disabled={saving}
              onClick={save}
              className="rounded-lg bg-primary px-4 py-3 text-sm font-medium text-white transition hover:bg-opacity-90 disabled:opacity-60"
            >
              {saving ? "Kaydediliyor…" : "Yanıtı Kaydet"}
            </button>
            {saved && <span className="text-sm text-green">{saved}</span>}
          </div>
        </div>
      </AdminPanelCard>
    </div>
  );
}
