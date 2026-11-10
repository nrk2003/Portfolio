import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };

/** Social sharing card in the portfolio's visual language: blue grid, cream frame, yellow highlight. */
export function renderOgImage({ kicker, text, highlight }: { kicker: string; text: string; highlight: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          padding: 40,
          backgroundColor: '#0E5FE8',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)',
          backgroundSize: '54px 54px',
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            background: '#F2EDE2',
            borderRadius: 26,
            border: '3px solid #121212',
            padding: '56px 64px',
            color: '#121212',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 56, fontWeight: 900, letterSpacing: -2 }}>nrk.</div>
            <div
              style={{
                display: 'flex',
                fontSize: 22,
                fontWeight: 700,
                border: '3px solid #121212',
                borderRadius: 100,
                padding: '10px 24px',
                background: '#fff',
              }}
            >
              {kicker}
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', fontSize: 68, fontWeight: 900, lineHeight: 1.08, letterSpacing: -2 }}>
            <span style={{ marginRight: 18 }}>{text}</span>
            <span
              style={{
                background: '#F7AC1B',
                border: '3px solid #121212',
                borderRadius: 14,
                padding: '0 16px',
                transform: 'rotate(-1.5deg)',
              }}
            >
              {highlight}
            </span>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {['#1D5DEB', '#F7AC1B', '#F04E23', '#1CB254', '#A868F0'].map((c) => (
              <div key={c} style={{ width: 120, height: 14, borderRadius: 100, background: c, border: '2px solid #121212' }} />
            ))}
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
