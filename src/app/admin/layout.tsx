import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";
import "./admin.css";
import { AdminBodyShield } from "./AdminBodyShield";
import { SidebarProvider } from "@na/components/Layouts/sidebar/sidebar-context";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import type { PropsWithChildren } from "react";

export default function AdminRootLayout({ children }: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <AdminBodyShield />
      <div id="admin-nextadmin-root" className="font-sans antialiased">
        <SidebarProvider>{children}</SidebarProvider>
        <Toaster position="bottom-right" richColors closeButton />
      </div>
    </ThemeProvider>
  );
}
