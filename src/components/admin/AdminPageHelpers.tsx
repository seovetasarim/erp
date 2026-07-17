"use client";

import { AdminPanelCard } from "@/components/admin/nextadmin/AdminPanelCard";

export function AdminLoadingCard({ title = "Yükleniyor" }: { title?: string }) {
  return (
    <AdminPanelCard title={title}>
      <p className="text-dark-5 dark:text-dark-6">Veriler getiriliyor…</p>
    </AdminPanelCard>
  );
}

export function AdminErrorCard({ message }: { message: string }) {
  return (
    <AdminPanelCard title="Hata">
      <p className="text-red">{message}</p>
    </AdminPanelCard>
  );
}

export function AdminEmptyRow({ colSpan, message }: { colSpan: number; message: string }) {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className="py-10 text-center text-base font-medium text-dark-5 dark:text-dark-6"
      >
        {message}
      </td>
    </tr>
  );
}
