"use client";

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
      <div className="text-center mb-4">
        <img
          src="/admin-fila/images/logo-icon.png"
          alt="DijitalERP"
          width={40}
          height={40}
          className="mb-3"
        />
        <h3 className="fs-26 fw-medium" style={{ marginBottom: 6 }}>
          Yönetici Girişi
        </h3>
        <p className="fs-16 text-secondary lh-1-8 mb-0">
          Müşteri hesabınız mı var?{" "}
          <Link href="/giris" className="text-primary text-decoration-none">
            Müşteri girişi
          </Link>
        </p>
      </div>

      <div className="mb-20">
        <label className="label fs-16 mb-2" htmlFor="admin_username">
          Yönetici kullanıcı adı
        </label>
        <div className="form-floating">
          <input
            id="admin_username"
            name="username"
            type="text"
            className="form-control"
            placeholder="admin"
            autoComplete="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <label htmlFor="admin_username">Kullanıcı adı *</label>
        </div>
      </div>

      <div className="mb-20">
        <label className="label fs-16 mb-2" htmlFor="admin_password">
          Şifre
        </label>
        <div className="form-group" id="password-show-hide">
          <div className="password-wrapper position-relative password-container">
            <input
              id="admin_password"
              name="password"
              type={showPassword ? "text" : "password"}
              className="form-control text-secondary password"
              placeholder="Yönetici şifreniz *"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <i
              className={`${showPassword ? "ri-eye-line" : "ri-eye-off-line"} password-toggle-icon translate-middle-y top-50 position-absolute text-secondary`}
              style={{ color: "#A9A9C8", fontSize: 22, right: 15 }}
              aria-hidden="true"
              onClick={() => setShowPassword((prev) => !prev)}
              role="button"
            />
          </div>
        </div>
      </div>

      <p className="fs-14 text-secondary mb-4">
        Bu alan yalnızca yetkili yönetici hesapları içindir. Sipariş onayı, lisans
        tanımlama ve destek yönetimi buradan yapılır.
      </p>

      {error ? <p className="text-danger mb-3">{error}</p> : null}

      <div className="mb-4">
        <button
          type="submit"
          className="btn btn-primary fw-normal text-white w-100"
          style={{ paddingTop: 18, paddingBottom: 18 }}
          disabled={loading}
        >
          {loading ? "Giriş yapılıyor…" : "Yönetim Paneline Giriş"}
        </button>
      </div>

      <div className="text-center">
        <Link href="/" className="text-secondary text-decoration-none fs-15">
          ← Ana siteye dön
        </Link>
      </div>
    </form>
  );
}
