import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

/**
 * Büyük paketleri repoda/Vercel build’inde tutmak zorsa kurulum dosyasını (örn. GitHub Release) yükle ve bu env’yi doldur.
 * Ziyaretçi `/kurulum.rar` isterken sunucu 302 ile gerçek indirme adresine yönlendirir (adres çubuğu CDN/GitHub’a dönebilir).
 * Vercel: Project → Settings → Environment Variables → `KURULUM_ZIP_REDIRECT_URL`.
 */
export function middleware(request: NextRequest) {
  const raw = process.env.KURULUM_ZIP_REDIRECT_URL?.trim();
  if (!raw) return NextResponse.next();
  if (!isHttpsOrHttp(raw)) return NextResponse.next();
  if (request.nextUrl.pathname === '/kurulum.rar') {
    return NextResponse.redirect(raw, 302);
  }
  return NextResponse.next();
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
