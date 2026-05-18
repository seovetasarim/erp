/** GitHub Release’taki dosya adıyla birebir (büyük/küçük harf dahil) aynı olmalı. */
export const INSTALLER_ASSET_FILENAME = 'kurulum.rar' as const;

/**
 * Repoda büyük arşiv tutmadan doğrudan indirme: en son (latest) release’a bu adla eklediğin dosya.
 * Env gerekmez; release yoksa veya dosya adı farklıysa 404 olur — GitHub’da düzelt.
 */
export const INSTALLER_GITHUB_LATEST_DOWNLOAD_URL =
  `https://github.com/seovetasarim/erp/releases/latest/download/${INSTALLER_ASSET_FILENAME}` as const;
