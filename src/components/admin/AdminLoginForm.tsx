"use client";

import DijitalErpLogo from "@/components/brand/DijitalErpLogo";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = (await res.json()) as { error?: string };
    if (!res.ok) {
      setError(data.error || "Giriş başarısız.");
      setLoading(false);
      return;
    }

    router.replace("/admin");
    router.refresh();
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-shell">
        <aside className="admin-login-brand">
          <DijitalErpLogo href="/" variant="light" size="lg" />

          <div className="admin-login-brand-copy">
            <span className="admin-login-eyebrow">Yönetim Paneli</span>
            <h1>Sipariş, lisans ve müşteri yönetimi tek yerde.</h1>
            <p>
              Manuel sipariş onayı, lisans üretimi ve destek talepleri için güvenli
              yönetici girişi.
            </p>
          </div>

          <ul className="admin-login-points">
            <li>Sipariş onaylama ve lisans tanımlama</li>
            <li>Müşteri ve abonelik takibi</li>
            <li>Destek talebi yanıtlama</li>
          </ul>
        </aside>

        <div className="admin-login-panel">
          <div className="admin-login-panel-head">
            <h2>Oturum aç</h2>
            <p>Yönetici kullanıcı adı ve şifrenizle panele giriş yapın.</p>
          </div>

          <form className="admin-login-form" onSubmit={onSubmit}>
            <label className="admin-login-field">
              <span>Kullanıcı adı</span>
              <input
                id="admin_username"
                name="username"
                type="text"
                placeholder="admin"
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </label>

            <label className="admin-login-field">
              <span>Şifre</span>
              <input
                id="admin_password"
                name="password"
                type="password"
                placeholder="Yönetici şifreniz"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>

            {error && <p className="admin-login-error">{error}</p>}

            <button type="submit" className="admin-login-submit" disabled={loading}>
              {loading ? "Giriş yapılıyor…" : "Panele Giriş Yap"}
            </button>
          </form>

          <div className="admin-login-footer">
            <Link href="/">← Ana siteye dön</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
