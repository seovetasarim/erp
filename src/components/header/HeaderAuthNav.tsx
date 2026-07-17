"use client";

import Link from "next/link";
import { useAuthUser } from "@/hooks/useAuthUser";

export default function HeaderAuthNav() {
  const { isLoggedIn, loading } = useAuthUser();

  if (isLoggedIn) {
    return (
      <Link href="/hesabim" className="tp-header-auth-link">
        Hesabım
      </Link>
    );
  }

  return (
    <>
      <Link href="/giris" className="tp-header-auth-link">
        Giriş
      </Link>
      <Link
        href="/kayit"
        className="tp-header-auth-link tp-header-auth-link--register ml-15"
      >
        Kayıt Ol
      </Link>
    </>
  );
}
