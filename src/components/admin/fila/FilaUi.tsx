"use client";

import type { PropsWithChildren, ReactNode } from "react";

export function FilaCard({
  title,
  children,
  footer,
  className = "",
}: PropsWithChildren<{
  title?: string;
  footer?: ReactNode;
  className?: string;
}>) {
  return (
    <div
      className={`card bg-white p-20 rounded-10 border border-white ${className || "mb-4"}`.trim()}
    >
      {title ? (
        <div className="d-flex justify-content-between align-items-center mb-3 flex-shrink-0">
          <h3 className="mb-0 fs-18 fw-medium">{title}</h3>
        </div>
      ) : null}
      {children}
      {footer ? <div className="mt-3 text-end flex-shrink-0">{footer}</div> : null}
    </div>
  );
}

export function FilaTable({ children }: PropsWithChildren) {
  return (
    <div className="default-table-area">
      <div className="table-responsive">
        <table className="table align-middle w-100 mb-0">{children}</table>
      </div>
    </div>
  );
}

export function FilaStatCard({
  label,
  value,
  icon,
  tone = "primary",
  hint,
}: {
  label: string;
  value: string | number;
  icon: string;
  tone?: "primary" | "info" | "success" | "warning" | "danger";
  hint?: string;
}) {
  return (
    <div className={`card bg-white p-20 rounded-10 border border-white h-100 admin-stat-card admin-stat-card--${tone}`}>
      <div className="d-flex align-items-center">
        <div className="flex-grow-1">
          <h3 className="mb-10 fs-16">{label}</h3>
          <h2 className="fs-26 fw-medium mb-0 lh-1">{value}</h2>
          {hint ? <p className="mb-0 fs-13 mt-2 text-secondary">{hint}</p> : null}
        </div>
        <div className="flex-shrink-0 ms-3">
          <div className={`admin-stat-icon bg-${tone} text-white`}>
            <span className="material-symbols-outlined">{icon}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FilaBadge({
  children,
  tone = "primary",
}: PropsWithChildren<{
  tone?: "primary" | "success" | "danger" | "warning" | "secondary" | "info";
}>) {
  return (
    <span
      className={`text-${tone} bg-${tone} bg-opacity-10 fs-15 fw-normal d-inline-block default-badge`}
    >
      {children}
    </span>
  );
}

export function FilaPageTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4">
      <h2 className="fs-24 fw-medium mb-1">{title}</h2>
      {subtitle ? <p className="text-secondary mb-0">{subtitle}</p> : null}
    </div>
  );
}
