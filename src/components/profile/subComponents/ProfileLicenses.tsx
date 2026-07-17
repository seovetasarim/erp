"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { formatDaysRemaining } from "@/lib/license/duration";

type LicenseItem = {
  id: number;
  key: string;
  planId: string;
  billingMode: string;
  maxPcs: number;
  expiresAt: string | null;
  status: string;
  createdAt: string;
};

const planNames: Record<string, string> = {
  starter: "Başlangıç",
  pro: "Profesyonel",
};

function formatDate(value: string | null) {
  if (!value) return "Süresiz";
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

const ProfileLicenses = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [customerCode, setCustomerCode] = useState("");
  const [remoteUrl, setRemoteUrl] = useState("");
  const [licenses, setLicenses] = useState<LicenseItem[]>([]);

  useEffect(() => {
    fetch("/api/licenses")
      .then(async (res) => {
        const data = (await res.json()) as {
          customerCode?: string;
          remoteUrl?: string;
          licenses?: LicenseItem[];
          error?: string;
        };
        if (!res.ok) throw new Error(data.error || "Lisanslar yüklenemedi.");
        setCustomerCode(data.customerCode || "");
        setRemoteUrl(data.remoteUrl || "");
        setLicenses(data.licenses || []);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="profile__info">Lisanslar yükleniyor…</div>;
  }

  if (error) {
    return (
      <div className="profile__info">
        <p>{error}</p>
        <Link href="/giris">Giriş yapın</Link>
      </div>
    );
  }

  return (
    <div className="profile__info">
      <h3 className="profile__info-title">Lisanslarım</h3>

      <div className="it-license-remote-box mb-30">
        <h4>ERP uzaktan lisans ayarı</h4>
        <p>
          DijitalERP uygulamasında Ayarlar → Lisans bölümüne şu bilgileri girin.
          Aylık paketlerde süre dolunca otomatik kilit devreye girer.
        </p>
        <ul>
          <li>
            <strong>Müşteri kodu:</strong> {customerCode || "—"}
          </li>
          <li>
            <strong>Uzak lisans URL:</strong>{" "}
            <code>{remoteUrl || "—"}</code>
          </li>
        </ul>
      </div>

      {licenses.length === 0 ? (
        <div className="it-license-empty">
          <p>Henüz lisansınız yok.</p>
          <Link href="/fiyatlandirma">Paket satın al</Link>
        </div>
      ) : (
        <div className="it-license-list">
          {licenses.map((license) => (
            <article key={license.id} className="it-license-card">
              <div className="it-license-card-head">
                <span>{planNames[license.planId] || license.planId}</span>
                <em className={license.status === "active" ? "is-active" : ""}>
                  {license.status === "active" ? "Aktif" : "Süresi doldu"}
                </em>
              </div>
              <code className="it-license-key">{license.key}</code>
              <div className="it-license-meta">
                <span>
                  {license.billingMode === "monthly" ? "Aylık kiralama" : "Tek seferlik"}
                </span>
                <span className="it-license-countdown">{formatDaysRemaining(license.expiresAt)}</span>
                <span>Bitiş: {formatDate(license.expiresAt)}</span>
                <span>{license.maxPcs} bilgisayar</span>
              </div>
              {license.billingMode === "monthly" && (
                <Link
                  className="it-license-renew"
                  href={`/odeme?paket=${license.planId === "starter" ? "baslangic" : "profesyonel"}&odeme=aylik&yenile=1`}
                >
                  Lisansı yenile
                </Link>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileLicenses;
