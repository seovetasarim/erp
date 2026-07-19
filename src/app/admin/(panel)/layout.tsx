import { FilaShell } from "@/components/admin/fila/FilaShell";
import type { PropsWithChildren } from "react";

export default function AdminPanelLayout({ children }: PropsWithChildren) {
  return <FilaShell>{children}</FilaShell>;
}
