import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { INSTALLER_GITHUB_LATEST_DOWNLOAD_URL } from './installer-remote';

/**
 * Eski/kitaplık URL: `/kurulum.rar` → varsayılan GitHub latest indir (env ile üzerine yazılabilir).
 */
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname !== '/kurulum.rar') return NextResponse.next();
  const raw = process.env.KURULUM_ZIP_REDIRECT_URL?.trim() || INSTALLER_GITHUB_LATEST_DOWNLOAD_URL;
  if (!isHttpsOrHttp(raw)) return NextResponse.next();
  return NextResponse.redirect(raw, 302);
}

function isHttpsOrHttp(value: string): boolean {
  try {
    const u = new URL(value);
    return u.protocol === 'https:' || u.protocol === 'http:';
  } catch {
    return false;
  }
}

export const config = {
  matcher: '/kurulum.rar',
};
