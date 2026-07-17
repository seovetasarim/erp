"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export type AuthUser = {
  id: number;
  name: string;
  email: string;
  phone: string;
  customerCode: string;
};

export function useAuthUser() {
  const pathname = usePathname();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me");
      const data = (await res.json()) as { user: AuthUser | null };
      setUser(data.user ?? null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh, pathname]);

  return { user, loading, isLoggedIn: Boolean(user), refresh };
}
