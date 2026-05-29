import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'DijitalERP — Ücretsiz Offline ERP, Stok Takip ve Cari Yönetim Programı';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg,#0f172a 0%,#1e3a8a 55%,#2563eb 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 22,
              background: 'linear-gradient(135deg,#3b82f6,#1d4ed8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 56,
              fontWeight: 800,
              boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
            }}
          >
            D
          </div>
          <div style={{ display: 'flex', fontSize: 48, fontWeight: 800, letterSpacing: -1 }}>
            DijitalERP
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 44,
            fontSize: 66,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -2,
            maxWidth: 1000,
          }}
        >
          Ücretsiz Offline ERP, Stok Takip ve Cari Yönetim
        </div>

        <div style={{ display: 'flex', marginTop: 28, fontSize: 30, color: '#cbd5e1', maxWidth: 920 }}>
          Windows için indirin · Veriler bilgisayarınızda · Aboneliksiz tek seferlik lisans
        </div>

        <div style={{ display: 'flex', marginTop: 46, gap: 16 }}>
          {['%100 Offline', 'E-Fatura', 'KOBİ ERP', '0532 166 76 97'].map((t) => (
            <div
              key={t}
              style={{
                display: 'flex',
                fontSize: 24,
                fontWeight: 600,
                padding: '12px 24px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.12)',
                border: '1px solid rgba(255,255,255,0.28)',
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
