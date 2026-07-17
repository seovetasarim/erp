"use client";

import { useEffect } from "react";

export function AdminBodyShield() {
  useEffect(() => {
    document.body.classList.add("admin-nextadmin-active");
    return () => document.body.classList.remove("admin-nextadmin-active");
  }, []);

  return null;
}
