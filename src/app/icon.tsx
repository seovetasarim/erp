import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0b1425',
          borderRadius: 7,
          border: '1.5px solid rgba(59,130,246,0.5)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <div
            style={{
              width: 14,
              height: 2,
              background: '#3b82f6',
              borderRadius: 1,
            }}
          />
          <div
            style={{
              display: 'flex',
              gap: 2,
            }}
          >
            <div style={{ width: 4, height: 10, background: '#3b82f6', borderRadius: 1 }} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                justifyContent: 'space-between',
              }}
            >
              <div style={{ width: 8, height: 2, background: '#3b82f6', borderRadius: 1 }} />
              <div style={{ width: 8, height: 2, background: '#3b82f6', borderRadius: 1 }} />
              <div style={{ width: 8, height: 2, background: '#3b82f6', borderRadius: 1 }} />
            </div>
          </div>
          <div
            style={{
              width: 14,
              height: 2,
              background: '#3b82f6',
              borderRadius: 1,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
