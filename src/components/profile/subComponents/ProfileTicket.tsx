"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { formatDate, ticketStatusLabel } from "@/lib/admin/labels";

type Ticket = {
  id: number;
  ticketCode: string;
  subject: string;
  message: string;
  status: string;
  adminReply: string | null;
  repliedAt: string | null;
  createdAt: string;
};

const topics = [
  "Kurulum Desteği",
  "Lisans / Satın Alma",
  "Teknik Destek",
  "E-Fatura",
  "Fatura / Adres",
  "Diğer",
];

function ticketStatusClass(status: string) {
  switch (status) {
    case "answered":
      return "is-answered";
    case "closed":
      return "is-closed";
    case "in_progress":
      return "is-progress";
    default:
      return "is-open";
  }
}

const ProfileTicket = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [subject, setSubject] = useState(topics[0]);
  const [message, setMessage] = useState("");

  const loadTickets = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/support/tickets");
      const data = (await res.json()) as { tickets?: Ticket[]; error?: string };
      if (res.status === 401) {
        setTickets([]);
        return;
      }
      if (!res.ok) throw new Error(data.error || "Talepler yüklenemedi.");
      setTickets(data.tickets ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Talepler yüklenemedi.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTickets();
  }, [loadTickets]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/support/tickets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, message, source: "profile" }),
      });
      const data = (await res.json()) as { error?: string; ticketCode?: string };
      if (!res.ok) throw new Error(data.error || "Talep oluşturulamadı.");

      setSuccess(
        data.ticketCode
          ? `Talebiniz alındı. Talep no: ${data.ticketCode}`
          : "Talebiniz alındı.",
      );
      setMessage("");
      setSubject(topics[0]);
      setShowForm(false);
      await loadTickets();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Talep oluşturulamadı.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div className="profile__info">Destek talepleri yükleniyor…</div>;
  }

  return (
    <div className="profile__info">
      <div className="profile__section-head">
        <div>
          <h3 className="profile__info-title">Destek Talepleri</h3>
          <p className="profile__section-desc">
            Kurulum, lisans ve teknik konularda talep oluşturun. Yanıtlar burada görünür.
          </p>
        </div>
        {!showForm && (
          <button
            type="button"
            className="tp-login-btn profile__section-btn"
            onClick={() => {
              setShowForm(true);
              setError("");
              setSuccess("");
            }}
          >
            Yeni Talep
          </button>
        )}
      </div>

      {error && <p className="profile__form-error">{error}</p>}
      {success && <p className="profile__form-success">{success}</p>}

      {showForm && (
        <form className="profile__ticket-form" onSubmit={handleSubmit}>
          <div className="profile__input-box">
            <label className="profile__field-label">Konu</label>
            <div className="profile__input">
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              >
                {topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="profile__input-box">
            <label className="profile__field-label">Mesajınız</label>
            <div className="profile__input">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Sorununuzu veya talebinizi kısaca açıklayın"
                rows={5}
                required
              />
            </div>
          </div>

          <div className="profile__form-actions">
            <button type="submit" className="tp-login-btn" disabled={saving}>
              {saving ? "Gönderiliyor…" : "Talep Gönder"}
            </button>
            <button
              type="button"
              className="tp-logout-btn"
              onClick={() => setShowForm(false)}
            >
              İptal
            </button>
          </div>
        </form>
      )}

      {tickets.length === 0 && !showForm ? (
        <>
          <p>Henüz destek talebiniz yok.</p>
          <p className="profile__empty-hint">
            Yeni talep oluşturarak ekibimize ulaşabilirsiniz.
          </p>
        </>
      ) : (
        <div className="profile__ticket-list">
          {tickets.map((ticket) => (
            <article className="profile__ticket-card" key={ticket.id}>
              <div className="profile__ticket-card-head">
                <div>
                  <strong>{ticket.ticketCode}</strong>
                  <span>{ticket.subject}</span>
                </div>
                <span
                  className={`profile__ticket-status ${ticketStatusClass(ticket.status)}`}
                >
                  {ticketStatusLabel(ticket.status)}
                </span>
              </div>
              <p className="profile__ticket-message">{ticket.message}</p>
              <p className="profile__ticket-meta">
                Oluşturulma: {formatDate(ticket.createdAt)}
              </p>
              {ticket.adminReply && (
                <div className="profile__ticket-reply">
                  <strong>Destek yanıtı</strong>
                  <p>{ticket.adminReply}</p>
                  {ticket.repliedAt && (
                    <span>{formatDate(ticket.repliedAt)}</span>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      )}

      {!showForm && (
        <p className="profile__empty-hint mt-20">
          Acil durumlar için{" "}
          <Link href="/iletisim">iletişim sayfasını</Link> da kullanabilirsiniz.
        </p>
      )}
    </div>
  );
};

export default ProfileTicket;
