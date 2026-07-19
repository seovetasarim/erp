import Script from "next/script";
import "./admin-fila.css";
import { AdminBodyShield } from "./AdminBodyShield";
import { Toaster } from "sonner";
import type { PropsWithChildren } from "react";

export default function AdminRootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <link rel="stylesheet" href="/admin-fila/css/sidebar-menu.css" />
      <link rel="stylesheet" href="/admin-fila/css/simplebar.css" />
      <link rel="stylesheet" href="/admin-fila/css/remixicon.css" />
      <link rel="stylesheet" href="/admin-fila/css/style.css" />
      <AdminBodyShield />
      <div id="admin-fila-root">{children}</div>
      <Toaster position="bottom-right" richColors closeButton />
      <Script
        src="/admin-fila/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </>
  );
}
