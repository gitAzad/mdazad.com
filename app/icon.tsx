import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        background: '#f8fafc',
        border: '1px solid #cbd5e1',
        borderRadius: 8,
        color: '#0f172a',
        fontFamily: 'Geist, Inter, ui-sans-serif, system-ui, sans-serif',
        fontSize: 18,
        fontWeight: 800,
        letterSpacing: '-0.02em',
      }}
    >
      MA
    </div>,
    {
      ...size,
    },
  );
}
