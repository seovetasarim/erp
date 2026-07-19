import { CHECKOUT_PLANS } from "@/lib/commerce/plans";
import { formatDaysRemaining } from "@/lib/license/duration";

export function formatTry(kurus: number) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    maximumFractionDigits: 0,
  }).format(kurus / 100);
}

export function formatDate(value: string | null | undefined) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export function planLabel(planId: string, billingMode: string) {
  const key = `${planId}-${billingMode === "monthly" ? "monthly" : "lifetime"}`;
  return CHECKOUT_PLANS[key]?.label ?? `${planId} / ${billingMode}`;
}

const ORDER_STATUS: Record<string, string> = {
  pending: "Ödeme Bekliyor",
  paid: "Ödeme Onaylandı",
  failed: "İptal / Başarısız",
  cancelled: "İptal Edildi",
};

const LICENSE_STATUS: Record<string, string> = {
  active: "Aktif",
  expired: "Süresi doldu",
};

const SUBSCRIPTION_STATUS: Record<string, string> = {
  active: "Aktif",
  cancelled: "İptal",
  paused: "Duraklatıldı",
};

const TICKET_STATUS: Record<string, string> = {
  open: "Açık",
  in_progress: "İşlemde",
  answered: "Yanıtlandı",
  closed: "Kapatıldı",
};

export function orderStatusLabel(status: string) {
  return ORDER_STATUS[status] ?? status;
}

export function orderStatusTone(
  status: string,
): "success" | "danger" | "secondary" | "warning" {
  switch (status) {
    case "paid":
      return "success";
    case "failed":
    case "cancelled":
      return "danger";
    case "pending":
    default:
      return "warning";
  }
}

/** @deprecated Use orderStatusTone + FilaBadge */
export function orderStatusClass(status: string) {
  switch (status) {
    case "paid":
      return "text-success bg-success bg-opacity-10 fs-15 fw-normal d-inline-block default-badge";
    case "failed":
    case "cancelled":
      return "text-danger bg-danger bg-opacity-10 fs-15 fw-normal d-inline-block default-badge";
    case "pending":
    default:
      return "text-warning bg-warning bg-opacity-10 fs-15 fw-normal d-inline-block default-badge";
  }
}

export function licenseStatusLabel(status: string) {
  return LICENSE_STATUS[status] ?? status;
}

export function subscriptionStatusLabel(status: string) {
  return SUBSCRIPTION_STATUS[status] ?? status;
}

export function ticketStatusLabel(status: string) {
  return TICKET_STATUS[status] ?? status;
}

export const LICENSE_DURATION_OPTIONS = [
  { value: 30, label: "30 Gün" },
  { value: 90, label: "90 Gün" },
  { value: 365, label: "1 Yıl" },
  { value: null, label: "Süresiz" },
] as const;

export const ADMIN_ASSIGN_PLAN_OPTIONS = Object.entries(CHECKOUT_PLANS).map(
  ([value, plan]) => ({
    value,
    label: plan.label,
  }),
);

export { formatDaysRemaining };
