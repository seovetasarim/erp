"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function AdminBodyShield() {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    document.body.classList.add("bg-body-bg");
    document.body.classList.remove("admin-nextadmin-active");

    if (isLoginPage) {
      document.body.removeAttribute("sidebar-data-theme");
    }

    return () => {
      document.body.classList.remove("bg-body-bg");
    };
  }, [isLoginPage]);

  return null;
}
