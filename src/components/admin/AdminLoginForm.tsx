"use client";

import { CloseEyeIcon, OpenEyeIcon } from "@/svg/EyeIcons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AdminLoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    <form onSubmit={onSubmit}>
      <div className="tp-login-wrapper admin-login-card">
        <div className="tp-login-top text-center mb-30">
          <span className="admin-login-badge">Yönetim Paneli</span>
          <h3 className="tp-login-title">Yönetici Girişi</h3>
          <p>
            Müşteri hesabınız mı var?{" "}
            <span>
              <Link href="/giris">Müşteri girişi</Link>
            </span>
          </p>
        </div>

        <div className="tp-login-option">
          <div className="tp-login-input-wrapper">
            <div className="tp-login-input-box">
              <div className="tp-login-input-title">
                <label htmlFor="admin_username">Yönetici kullanıcı adı</label>
              </div>
              <div className="tp-login-input">
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
              </div>
            </div>

            <div className="tp-login-input-box">
              <div className="tp-login-input-title">
                <label htmlFor="admin_password">Şifre</label>
              </div>
              <div className="tp-login-input p-relative">
                <input
                  id="admin_password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Yönetici şifreniz"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <div
                  className="tp-login-input-eye"
                  onClick={() => setShowPassword((prev) => !prev)}
                  role="button"
                  aria-label="Şifreyi göster veya gizle"
                >
                  <span className="open-eye" style={{ display: showPassword ? "none" : "block" }}>
                    <OpenEyeIcon />
                  </span>
                  <span className="open-close" style={{ display: showPassword ? "block" : "none" }}>
                    <CloseEyeIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="admin-login-note mb-30">
            Bu alan yalnızca yetkili yönetici hesapları içindir. Sipariş onayı, lisans tanımlama
            ve destek yönetimi buradan yapılır.
          </p>

          <div className="tp-login-bottom">
            {error && <p className="text-danger mb-15">{error}</p>}
            <button type="submit" className="tp-login-btn w-100" disabled={loading}>
              {loading ? "Giriş yapılıyor…" : "Yönetim Paneline Giriş"}
            </button>
          </div>

          <div className="admin-login-footer text-center mt-30">
            <Link href="/">← Ana siteye dön</Link>
          </div>
        </div>
      </div>
    </form>
  );
}
