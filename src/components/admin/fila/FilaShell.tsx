"use client";

import type { PropsWithChildren } from "react";
import { FilaHeader } from "./FilaHeader";
import { FilaSidebar } from "./FilaSidebar";
import { FilaSidebarProvider } from "./FilaSidebarContext";

export function FilaShell({ children }: PropsWithChildren) {
  return (
    <FilaSidebarProvider>
      <FilaSidebar />
      <div className="container-fluid">
        <div className="main-content d-flex flex-column">
          <FilaHeader />
          <div className="main-content-container overflow-hidden">{children}</div>
        </div>
      </div>
    </FilaSidebarProvider>
  );
}
