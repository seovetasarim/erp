import type { AuthUser } from "@/hooks/useAuthUser";

const STORAGE_KEY = "dijitalerp_auth_user";
export const AUTH_CHANGED_EVENT = "dijitalerp-auth-changed";

export function getClientAuthUser(): AuthUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export function setClientAuthUser(user: AuthUser | null) {
  if (typeof window === "undefined") return;
  if (user) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } else {
    sessionStorage.removeItem(STORAGE_KEY);
  }
  window.dispatchEvent(new Event(AUTH_CHANGED_EVENT));
}

export function clearClientAuthUser() {
  setClientAuthUser(null);
}
