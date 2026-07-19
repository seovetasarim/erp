"use client";

import { FilaCard } from "@/components/admin/fila/FilaUi";

export function AdminLoadingCard({ title = "Yükleniyor" }: { title?: string }) {
  return (
    <FilaCard title={title}>
      <p className="text-secondary mb-0">Veriler getiriliyor…</p>
    </FilaCard>
  );
}

export function AdminErrorCard({ message }: { message: string }) {
  return (
    <FilaCard title="Hata">
      <p className="text-danger mb-0">{message}</p>
    </FilaCard>
  );
}

export function AdminEmptyRow({
  colSpan,
  message,
}: {
  colSpan: number;
  message: string;
}) {
  return (
    <tr>
      <td colSpan={colSpan} className="text-center text-secondary py-5">
        {message}
      </td>
    </tr>
  );
}
