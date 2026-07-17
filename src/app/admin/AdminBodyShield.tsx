"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AdminBodyShield() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (isLoginPage) {
      document.body.classList.remove("admin-nextadmin-active");
      return;
    }

    document.body.classList.add("admin-nextadmin-active");
    return () => document.body.classList.remove("admin-nextadmin-active");
  }, [isLoginPage]);

  return null;
}
