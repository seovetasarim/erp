/** Oturum cookie'si yazıldıktan sonra API indirme rotası tam sayfa yüklenmeli. */
export function redirectAfterAuth(next: string, router: { push: (url: string) => void; refresh: () => void }) {
  const target = next || "/hesabim";
  if (target.startsWith("/api/")) {
    window.location.href = target;
    return;
  }
  router.push(target);
  router.refresh();
}
