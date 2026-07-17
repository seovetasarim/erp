/** DijitalERP kurulum indirme — GitHub release üzerinden yönlendirilir (giriş gerekir) */
export const DIJITAL_ERP_DOWNLOAD_HREF = "/api/download";
export const DIJITAL_ERP_DOWNLOAD_FILENAME = "dijitalerp.rar";
export const DIJITAL_ERP_GITHUB_RELEASE_URL =
  "https://github.com/seovetasarim/erp/releases/latest";

export function getDownloadLoginHref() {
  return `/giris?next=${encodeURIComponent(DIJITAL_ERP_DOWNLOAD_HREF)}`;
}

export function getDownloadRegisterHref() {
  return `/kayit?next=${encodeURIComponent(DIJITAL_ERP_DOWNLOAD_HREF)}`;
}

export function formatDownloadCount(value: number): string {
  return new Intl.NumberFormat("tr-TR").format(value);
}
