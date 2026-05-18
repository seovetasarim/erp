import { INSTALLER_ASSET_FILENAME, INSTALLER_GITHUB_LATEST_DOWNLOAD_URL } from './installer-remote';
import { SITE_URL } from './site-url';

/**
 * Varsayılan: GitHub `latest` release’taki `kurulum.rar` — tıklayınca doğrudan indirme (Vercel env şart değil).
 * İstersen `NEXT_PUBLIC_DESKTOP_ARCHIVE_URL` ile başka bir URL’ye geç.
 */
function resolveDesktopArchive() {
  const raw = process.env.NEXT_PUBLIC_DESKTOP_ARCHIVE_URL?.trim();
  if (!raw) {
    return {
      href: INSTALLER_GITHUB_LATEST_DOWNLOAD_URL,
      filename: INSTALLER_ASSET_FILENAME,
      absolute: INSTALLER_GITHUB_LATEST_DOWNLOAD_URL,
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
  const filename = (segment.includes('?') ? segment.split('?')[0] : segment) || INSTALLER_ASSET_FILENAME;

  return { href, filename, absolute };
}

const archive = resolveDesktopArchive();

/** `<a href>` ve benzeri göreli veya tam indir adresi */
export const DESKTOP_ARCHIVE_HREF = archive.href;
export const DESKTOP_ARCHIVE_FILENAME = archive.filename;

/** Schema.org ve kanonik tam indir adresi */
export const DESKTOP_ARCHIVE_ABSOLUTE_URL = archive.absolute;
