import React from 'react';

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? '46rem' : '100%',
        margin: align === 'center' ? '0 auto 4rem' : '0 0 3rem',
        position: 'relative',
        zIndex: 5,
      }}
    >
      {eyebrow && (
        <div style={{ marginBottom: '0.85rem' }}>
          <span className="eyebrow">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2rem, 4.5vw, 2.85rem)',
          fontWeight: 700,
          color: '#F5F7FA',
          letterSpacing: '-0.025em',
          lineHeight: 1.15,
          marginBottom: '1.25rem',
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '1.0625rem',
            color: '#A7B0C0',
            lineHeight: 1.75,
            margin: 0,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
