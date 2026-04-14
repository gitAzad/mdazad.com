import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const contentType = 'image/png';

export const size = {
  width: 1200,
  height: 630,
};

export const alt = 'Md Azad - Senior Full Stack Engineer';

export async function GET() {
  const accentCyan = '#22d3ee';
  const contentPaddingX = 72;
  const contentPaddingY = 56;
  const websiteSafeInset = 20;

  return new ImageResponse(
    <div
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#070f1c',
        backgroundImage:
          'linear-gradient(to right, rgba(100, 116, 139, 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(100, 116, 139, 0.14) 1px, transparent 1px)',
        backgroundSize: '56px 56px',
        fontFamily: 'Geist, Inter, ui-sans-serif, system-ui, sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'radial-gradient(circle at 76% 18%, rgba(56, 189, 248, 0.16), transparent 58%)',
        }}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          padding: `${contentPaddingY}px ${contentPaddingX}px`,
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 88,
              height: 88,
              borderRadius: 18,
              background: '#f8fafc',
              border: '1px solid #cbd5e1',
              color: '#0f172a',
              fontSize: 38,
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}
          >
            MA
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                color: '#f8fafc',
                fontSize: 54,
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: '-0.04em',
              }}
            >
              Md Azad
            </div>
            <div
              style={{
                marginTop: 10,
                color: accentCyan,
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              Senior Full Stack Engineer
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: '1000px',
          }}
        >
          <div
            style={{
              color: '#e2e8f0',
              fontSize: 66,
              lineHeight: 1.08,
              fontWeight: 700,
              letterSpacing: '-0.04em',
            }}
          >
            Architecting scalable fintech and enterprise solutions.
          </div>
          <div
            style={{
              marginTop: 18,
              color: '#94a3b8',
              fontSize: 28,
              fontWeight: 500,
              lineHeight: 1.35,
            }}
          >
            Building resilient backends, high-performance APIs, and polished
            frontend experiences.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 12,
            }}
          >
            {['Java Spring Boot', 'Next.js', 'AWS', 'Microservices'].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    display: 'flex',
                    padding: '10px 18px',
                    borderRadius: 999,
                    border: '1px solid rgba(148, 163, 184, 0.35)',
                    background: 'rgba(15, 23, 42, 0.62)',
                    color: '#cbd5e1',
                    fontSize: 20,
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </div>
              ),
            )}
          </div>

          <div
            style={{
              color: accentCyan,
              fontSize: 24,
              fontWeight: 600,
              marginRight: websiteSafeInset,
            }}
          >
            mdazad.com
          </div>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
