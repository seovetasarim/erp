import { SITE_URL } from './site-url';

/**
 * Varsayılan: `public/kurulum.rar` → `/kurulum.rar` (WinRAR arşivi).
 * Büyük paket için: Vercel’de `KURULUM_ZIP_REDIRECT_URL` = GitHub Release vb. doğrudan indir (+ middleware yönlendirir).
 * Ya da `NEXT_PUBLIC_DESKTOP_ARCHIVE_URL` ile tam adres.
 *
 * Sunucuda büyük/küçük harf duyarlıdır; dosya adı URL ile birebir eşleşmeli (`kurulum.rar`).
 */
function resolveDesktopArchive() {
  const raw = process.env.NEXT_PUBLIC_DESKTOP_ARCHIVE_URL?.trim();
  if (!raw) {
    return {
      href: '/kurulum.rar' as const,
      filename: 'kurulum.rar' as const,
      absolute: `${SITE_URL}/kurulum.rar` as const,
    };
  }
  const href =
    raw.startsWith('http://') || raw.startsWith('https://')
      ? raw
      : raw.startsWith('/')
        ? raw
        : `/${raw}`;
  const absolute = href.startsWith('http') ? href : `${SITE_URL}${href}`;
  const segment = href.split(/[/\\]/).filter(Boolean).pop() ?? '';
  const filename = (segment.includes('?') ? segment.split('?')[0] : segment) || 'kurulum.rar';

  return { href, filename, absolute };
}

const archive = resolveDesktopArchive();

/** `<a href>` ve benzeri göreli veya tam indir adresi */
export const DESKTOP_ARCHIVE_HREF = archive.href;
export const DESKTOP_ARCHIVE_FILENAME = archive.filename;

/** Schema.org ve kanonik tam indir adresi */
export const DESKTOP_ARCHIVE_ABSOLUTE_URL = archive.absolute;
