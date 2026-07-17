"use client";

import { Logo } from "@/components/admin/nextadmin/logo";
import Link from "next/link";
import Image from "next/image";
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
    <div className="flex min-h-screen flex-wrap items-center">
      <div className="w-full xl:w-1/2">
        <div className="mx-auto w-full max-w-[570px] p-4 sm:p-12.5 xl:p-15">
          <SigninForm
            username={username}
            password={password}
            error={error}
            loading={loading}
            onSubmit={onSubmit}
            onUsernameChange={setUsername}
            onPasswordChange={setPassword}
          />
        </div>
      </div>

      <div className="hidden w-full p-6 xl:block xl:w-1/2">
        <div className="custom-gradient-1 overflow-hidden rounded-2xl px-15 pt-12.5 dark:bg-dark-2! dark:bg-none">
          <Link className="mb-10 inline-block" href="/">
            <Image
              className="hidden dark:block"
              src="/admin-nextadmin/logos/logo.svg"
              alt="Logo"
              width={176}
              height={32}
            />
            <Image
              className="dark:hidden"
              src="/admin-nextadmin/logos/logo-dark.svg"
              alt="Logo"
              width={176}
              height={32}
            />
          </Link>
          <p className="mb-3 text-xl font-medium text-dark dark:text-white">
            Yönetici hesabınıza giriş yapın
          </p>
          <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
            Hoş geldiniz!
          </h1>
          <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
            Sipariş, lisans ve e-posta yönetimi için oturum açın.
          </p>
          <div className="mt-31">
            <Image
              src="/admin-nextadmin/images/grids/grid-02.svg"
              alt=""
              width={405}
              height={325}
              className="mx-auto dark:opacity-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SigninForm({
  username,
  password,
  error,
  loading,
  onSubmit,
  onUsernameChange,
  onPasswordChange,
}: {
  username: string;
  password: string;
  error: string;
  loading: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onUsernameChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
}) {
  return (
    <>
      <div className="mb-8">
        <Logo />
      </div>

      <p className="mb-3 text-xl font-medium text-dark dark:text-white">
        Yönetici hesabınıza giriş yapın
      </p>
      <h1 className="mb-6 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
        Hoş geldiniz!
      </h1>

      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label
            htmlFor="admin_username"
            className="mb-2.5 block font-medium text-dark dark:text-white"
          >
            Kullanıcı adı
          </label>
          <input
            id="admin_username"
            name="username"
            type="text"
            placeholder="admin"
            autoComplete="username"
            value={username}
            onChange={(e) => onUsernameChange(e.target.value)}
            required
            className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark-2 w-full rounded-lg border bg-transparent px-5 py-3.75 outline-none transition dark:text-white"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="admin_password"
            className="mb-2.5 block font-medium text-dark dark:text-white"
          >
            Şifre
          </label>
          <input
            id="admin_password"
            name="password"
            type="password"
            placeholder="Yönetici şifreniz"
            autoComplete="current-password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            required
            className="border-stroke focus:border-primary dark:border-dark-3 dark:bg-dark-2 w-full rounded-lg border bg-transparent px-5 py-3.75 outline-none transition dark:text-white"
          />
        </div>

        <div className="mb-4.5">
          <button
            type="submit"
            disabled={loading}
            className="hover:bg-opacity-90 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Giriş yapılıyor…" : "Panele Giriş Yap"}
          </button>
        </div>

        {error && <p className="text-sm text-red">{error}</p>}
      </form>

      <div className="mt-6 text-center">
        <Link href="/" className="text-primary hover:underline">
          ← Siteye dön
        </Link>
      </div>
    </>
  );
}
