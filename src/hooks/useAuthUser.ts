"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  AUTH_CHANGED_EVENT,
  getClientAuthUser,
  setClientAuthUser,
} from "@/lib/auth/clientSession";

export type AuthUser = {
  id: number;
  name: string;
  email: string;
  phone: string;
  customerCode: string;
};

function readInitialAuthState() {
  const cached = getClientAuthUser();
  return {
    user: cached,
    loading: !cached,
  };
}

export function useAuthUser() {
  const pathname = usePathname();
  const [user, setUser] = useState<AuthUser | null>(() => readInitialAuthState().user);
  const [loading, setLoading] = useState(() => readInitialAuthState().loading);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me", {
        credentials: "include",
        cache: "no-store",
      });
      const data = (await res.json()) as { user: AuthUser | null };
      const nextUser = data.user ?? null;
      setUser(nextUser);
      setClientAuthUser(nextUser);
    } catch {
      setUser(null);
      setClientAuthUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const cached = getClientAuthUser();
    if (cached) {
      setUser(cached);
      setLoading(false);
    }
    refresh();
  }, [refresh, pathname]);

  useEffect(() => {
    const syncFromStorage = () => {
      const cached = getClientAuthUser();
      setUser(cached);
      setLoading(!cached);
    };
    window.addEventListener(AUTH_CHANGED_EVENT, syncFromStorage);
    return () => window.removeEventListener(AUTH_CHANGED_EVENT, syncFromStorage);
  }, []);

  return { user, loading, isLoggedIn: Boolean(user), refresh };
}
