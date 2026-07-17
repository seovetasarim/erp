export function computeExpiryFromDays(durationDays: number | null): string | null {
  if (durationDays == null || durationDays <= 0) return null;
  const expires = new Date();
  expires.setDate(expires.getDate() + durationDays);
  return expires.toISOString();
}

export function getDaysRemaining(expiresAt: string | null): number | null {
  if (!expiresAt) return null;
  const diff = new Date(expiresAt).getTime() - Date.now();
  if (diff <= 0) return 0;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function formatDaysRemaining(expiresAt: string | null) {
  const days = getDaysRemaining(expiresAt);
  if (days === null) return "Süresiz";
  if (days === 0) return "Süresi doldu";
  return `Kalan: ${days} gün`;
}
