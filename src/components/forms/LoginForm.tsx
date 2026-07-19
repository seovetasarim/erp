"use client";

import { CloseEyeIcon, OpenEyeIcon } from "@/svg/EyeIcons";
import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { redirectAfterAuth } from "@/lib/auth/redirectAfterAuth";
import { setClientAuthUser } from "@/lib/auth/clientSession";
import type { AuthUser } from "@/hooks/useAuthUser";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const nextParam = searchParams?.get("next");
  const registerHref = nextParam
    ? `/kayit?next=${encodeURIComponent(nextParam)}`
    : "/kayit";

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "");
    const password = String(form.get("password") || "");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const data = (await res.json()) as { error?: string; user?: AuthUser };
      if (!res.ok) throw new Error(data.error || "Giriş başarısız.");

      if (data.user) setClientAuthUser(data.user);

      const next = searchParams?.get("next") || "/hesabim";
      redirectAfterAuth(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Giriş başarısız.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="tp-login-wrapper">
        <div className="tp-login-top text-center mb-30">
          <h3 className="tp-login-title">DijitalERP&apos;ye Giriş Yap</h3>
          <p>
            Hesabınız yok mu?{" "}
            <span>
              <Link href={registerHref}>Ücretsiz hesap oluşturun</Link>
            </span>
          </p>
        </div>

        <div className="tp-login-option">
          <div className="tp-login-input-wrapper">
            <div className="tp-login-input-box">
              <div className="tp-login-input-title">
                <label htmlFor="email">E-posta Adresiniz</label>
              </div>
              <div className="tp-login-input">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ornek@mail.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="tp-login-input-box">
              <div className="tp-login-input-title">
                <label htmlFor="tp_password">Şifre</label>
              </div>
              <div className="tp-login-input p-relative">
                <input
                  id="tp_password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="En az 6 karakter"
                  autoComplete="current-password"
                  required
                />
                <div
                  className="tp-login-input-eye"
                  id="password-show-toggle"
                  onClick={togglePassword}
                  role="button"
                  aria-label="Şifreyi göster veya gizle"
                >
                  <span
                    id="open-eye"
                    className="open-eye"
                    style={{ display: showPassword ? "none" : "block" }}
                  >
                    <OpenEyeIcon />
                  </span>
                  <span
                    id="close-eye"
                    className="open-close"
                    style={{ display: showPassword ? "block" : "none" }}
                  >
                    <CloseEyeIcon />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-30">
            <div className="tp-login-remeber">
              <input id="remeber" type="checkbox" />
              <label htmlFor="remeber">Beni hatırla</label>
            </div>
            <div className="tp-login-forgot">
              <Link href="#">Şifremi unuttum</Link>
            </div>
          </div>

          <div className="tp-login-bottom">
            {error && <p className="text-danger mb-15">{error}</p>}
            <button type="submit" className="tp-login-btn w-100" disabled={loading}>
              {loading ? "Giriş yapılıyor…" : "Giriş Yap"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
