/** Cookie yazıldıktan sonra tam sayfa geçiş — client router gecikmesi olmaz. */
export function redirectAfterAuth(next?: string) {
  window.location.href = next || "/hesabim";
}
