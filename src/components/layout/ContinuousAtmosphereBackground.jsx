import React from 'react';
import Scroll3DCanvas from './Scroll3DCanvas';

/**
 * ContinuousAtmosphereBackground
 * Mounts the high-performance Scroll3DCanvas with the deep atmospheric gradient
 * and architectural technical grid. Sits fixed across all sections.
 */
export default function ContinuousAtmosphereBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        backgroundColor: '#080B10',
      }}
    >
      {/* 1. Deep Atmospheric Gradient Base */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 90% 60% at 50% -10%, rgba(37, 99, 255, 0.16), transparent 70%),
            radial-gradient(ellipse 60% 50% at 95% 30%, rgba(30, 64, 175, 0.12), transparent 60%),
            radial-gradient(ellipse 60% 50% at 5% 70%, rgba(37, 99, 255, 0.10), transparent 60%),
            linear-gradient(180deg, #080B10 0%, #0A0F1A 40%, #0B1220 80%, #080B10 100%)
          `,
        }}
      />

      {/* 2. Delicate Architectural Technical Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: 0.8,
        }}
      />

      {/* 3. Real-time Scroll-Driven 3D Canvas Engine */}
      <Scroll3DCanvas />

      {/* 4. Fine Grain Noise texture overlay for cinematic polish */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.035,
          backgroundImage: `radial-gradient(circle, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}
