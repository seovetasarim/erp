import { SITE_URL } from './site-url';

/**
 * Varsayılan: `public/kurulum.zip` → `/kurulum.zip`. Zip’i repoda tutmak istemiyorsan (GitHub boyut/LFS);
 * build’de `NEXT_PUBLIC_DESKTOP_ARCHIVE_URL` ile tam veya kök-yol URL ver (örn. Hostinger’da yüklediğin dosya).
 *
 * Sunucuda büyük/küçük harf duyarlıdır; dosya adı URL ile birebir eşleşmeli (`kurulum.zip`).
 */
function resolveDesktopArchive() {
  const raw = process.env.NEXT_PUBLIC_DESKTOP_ARCHIVE_URL?.trim();
  if (!raw) {
    return {
      href: '/kurulum.zip' as const,
      filename: 'kurulum.zip' as const,
      absolute: `${SITE_URL}/kurulum.zip` as const,
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
  const filename = (segment.includes('?') ? segment.split('?')[0] : segment) || 'kurulum.zip';

  return { href, filename, absolute };
}

const archive = resolveDesktopArchive();

/** `<a href>` ve benzeri göreli veya tam indir adresi */
export const DESKTOP_ARCHIVE_HREF = archive.href;
export const DESKTOP_ARCHIVE_FILENAME = archive.filename;

/** Schema.org ve kanonik tam indir adresi */
export const DESKTOP_ARCHIVE_ABSOLUTE_URL = archive.absolute;
