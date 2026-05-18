import { SITE_URL } from './site-url';

/** `public/` köküne koyduğunuz RAR/ZIP kurulum paketi dosya adı (Header, Hero vb. hep buna bağlanır). */
export const DESKTOP_ARCHIVE_HREF = '/Kurulum.rar' as const;
export const DESKTOP_ARCHIVE_FILENAME = 'Kurulum.rar' as const;

/** Schema.org ve kanonik tam indir adresi */
export const DESKTOP_ARCHIVE_ABSOLUTE_URL = `${SITE_URL}${DESKTOP_ARCHIVE_HREF}` as const;
