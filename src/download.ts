import { SITE_URL } from './site-url';

/**
 * `public/` kökündeki kurulum paketi. Windows’ta zip bazen “sıkıştırılmış klasör” görünür; URL’de uzantı küçük harf olmalı (`/kurulum.zip`).
 * Sunucu (Linux/Vercel) büyük/küçük harfe duyarlıdır — Explorer’da görünen dosya adıyla birebir aynı olun.
 */
export const DESKTOP_ARCHIVE_HREF = '/kurulum.zip' as const;
export const DESKTOP_ARCHIVE_FILENAME = 'kurulum.zip' as const;

/** Schema.org ve kanonik tam indir adresi */
export const DESKTOP_ARCHIVE_ABSOLUTE_URL = `${SITE_URL}${DESKTOP_ARCHIVE_HREF}` as const;
