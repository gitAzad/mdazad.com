import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B1120', // Dark Slate 950
          backgroundImage:
            'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      >
        {/* Glow Effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 60%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              fontSize: 40,
              fontWeight: 800,
              color: 'white',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
            }}
          >
            MA
          </div>
        </div>

        <div
          style={{
            fontSize: 70,
            fontWeight: 900,
            background: 'linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 10,
            letterSpacing: '-2px',
          }}
        >
          Md Azad
        </div>

        <div
          style={{
            fontSize: 32,
            color: '#94a3b8',
            fontWeight: 600,
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: 1.4,
          }}
        >
          Architecting Scalable Fintech & Enterprise Solutions
        </div>

        {/* Tech Stack Pills */}
        <div
          style={{
            display: 'flex',
            marginTop: 40,
            gap: 16,
          }}
        >
          {['Java Spring Boot', 'Next.js', 'AWS', 'Microservices'].map(
            (tech) => (
              <div
                key={tech}
                style={{
                  padding: '10px 24px',
                  backgroundColor: 'rgba(30, 41, 59, 0.8)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  borderRadius: '999px',
                  color: '#e2e8f0',
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            )
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
