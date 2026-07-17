"use client";

import { useAuthUser } from "@/hooks/useAuthUser";
import {
  DIJITAL_ERP_DOWNLOAD_HREF,
  getDownloadLoginHref,
} from "@/constants/download";

export function useDownloadHref() {
  const { isLoggedIn, loading } = useAuthUser();

  if (loading) {
    return getDownloadLoginHref();
  }

  return isLoggedIn ? DIJITAL_ERP_DOWNLOAD_HREF : getDownloadLoginHref();
}
