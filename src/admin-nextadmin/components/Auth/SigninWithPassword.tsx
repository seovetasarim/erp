"use client";

import { PasswordIcon } from "@na/assets/icons";
import InputGroup from "@na/components/FormElements/InputGroup";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

export default function SigninWithPassword() {
  const router = useRouter();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = (await res.json()) as { error?: string };
      if (!res.ok) {
        throw new Error(json.error || "Giriş başarısız.");
      }

      router.push("/admin");
      router.refresh();
      toast.success("Giriş başarılı");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Giriş başarısız";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup
        type="text"
        label="Kullanıcı Adı"
        className="mb-4 [&_input]:py-3.75"
        placeholder="admin"
        name="username"
        handleChange={handleChange}
        value={data.username}
        icon={<PasswordIcon />}
      />

      <InputGroup
        type="password"
        label="Şifre"
        className="mb-5 [&_input]:py-3.75"
        placeholder="Şifrenizi girin"
        name="password"
        handleChange={handleChange}
        value={data.password}
        icon={<PasswordIcon />}
      />

      <div className="mb-4.5">
        <button
          type="submit"
          disabled={loading}
          className="hover:bg-opacity-90 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition disabled:cursor-not-allowed disabled:opacity-70"
        >
          Giriş Yap
          {loading && (
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent dark:border-primary dark:border-t-transparent" />
          )}
        </button>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </form>
  );
}
