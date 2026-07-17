"use client";

import { CloseEyeIcon, OpenEyeIcon } from "@/svg/EyeIcons";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextParam = searchParams?.get("next");
  const loginHref = nextParam
    ? `/giris?next=${encodeURIComponent(nextParam)}`
    : "/giris";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const password = String(form.get("password") || "");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Kayıt başarısız.");

      const next = searchParams?.get("next") || "/fiyatlandirma#paketler";
      router.push(next);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Kayıt başarısız.");
    } finally {
      setLoading(false);
    }
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="tp-login-wrapper">
        <div className="tp-login-top text-center mb-30">
          <h3 className="tp-login-title">DijitalERP&apos;ye Kayıt Ol</h3>
          <p>
            Zaten hesabınız var mı?{" "}
            <span>
              <Link href={loginHref}>Giriş yapın</Link>
            </span>
          </p>
        </div>

        <div className="tp-login-option">
          <div className="tp-login-input-wrapper">
            <div className="tp-login-input-box">
              <div className="tp-login-input-title">
                <label htmlFor="name">Ad Soyad</label>
              </div>
              <div className="tp-login-input">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Adınız Soyadınız"
                  autoComplete="name"
                  required
                />
              </div>
            </div>

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
                <label htmlFor="phone">
                  Cep Telefonu <span className="text-danger">*</span>
                </label>
              </div>
              <div className="tp-login-input">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="05XX XXX XX XX"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  pattern="05[0-9]{9}"
                  minLength={11}
                  maxLength={11}
                  title="Geçerli bir cep numarası girin (05XXXXXXXXX)"
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
                  autoComplete="new-password"
                  required
                  minLength={6}
                />
                <div
                  onClick={togglePassword}
                  className="tp-login-input-eye"
                  id="password-show-toggle"
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

          <div className="tp-login-suggetions d-sm-flex align-items-center justify-content-between mb-20">
            <div className="tp-login-remeber">
              <input id="remeber" type="checkbox" />
              <label htmlFor="remeber">
                <Link href="/hizmet-sartlari" target="_blank">Hizmet Şartları</Link> ve{" "}
                <Link href="/gizlilik-politikasi" target="_blank">Gizlilik Politikası</Link>
                &apos;nı kabul ediyorum.
              </label>
            </div>
          </div>

          <div className="tp-login-bottom">
            {error && <p className="text-danger mb-15">{error}</p>}
            <button type="submit" className="tp-login-btn w-100" disabled={loading}>
              {loading ? "Kayıt olunuyor…" : "Kayıt Ol"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
