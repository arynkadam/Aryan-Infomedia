import React from 'react';
import useScrollDepth from '@/hooks/useScrollDepth';

/**
 * ScrollDepthSection — Wraps content sections in a 3D depth transition plane.
 *
 * Visual & Motion Design:
 * - Circular reveal mask: incoming content emerges through an expanding iris.
 * - Layered depth: scale and translateY create the illusion of physical z-axis movement.
 * - Translucent glass horizon: a glowing hairline divider with cyan/cobalt specular sheen.
 * - Reversible: seamlessly responds in both scroll directions with 1:1 tactile tracking.
 * - Fallbacks: 100% accessible with JS disabled, on SSR, or with prefers-reduced-motion.
 */
export default function ScrollDepthSection({
  sectionId,
  isFirst = false,
  isLast = false,
  className = '',
  style = {},
  children,
  showGlassDivider,
  depthIntensity = 0.05,
}) {
  const { ref, style: depthStyle, maskStyle, progress, isMounted } = useScrollDepth({
    isFirst,
    isLast,
    depthIntensity,
  });

  const shouldShowDivider = showGlassDivider !== undefined ? showGlassDivider : !isFirst;

  return (
    <div
      ref={ref}
      id={sectionId}
      className={className}
      style={{
        position: 'relative',
        ...style,
        ...depthStyle,
        ...maskStyle,
      }}
    >
      {/* 1. Translucent Glass Horizon Line (Appears at transition boundary) */}
      {isMounted && shouldShowDivider && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: `${Math.min(100, Math.max(10, progress * 115))}%`,
            height: '1px',
            background: `linear-gradient(90deg,
              transparent 0%,
              rgba(37, 99, 255, ${0.4 * progress}) 15%,
              rgba(96, 165, 250, ${0.8 * progress}) 50%,
              rgba(255, 255, 255, ${0.6 * progress}) 50%,
              rgba(96, 165, 250, ${0.8 * progress}) 50%,
              rgba(37, 99, 255, ${0.4 * progress}) 85%,
              transparent 100%
            )`,
            boxShadow: progress > 0.1
              ? `0 0 16px rgba(37, 99, 255, ${0.35 * progress}), 0 0 30px rgba(96, 165, 250, ${0.2 * progress})`
              : 'none',
            pointerEvents: 'none',
            zIndex: 10,
            transition: 'width 0.1s ease-out, opacity 0.1s ease-out',
          }}
        />
      )}

      {/* 2. Soft Atmospheric Depth Occlusion at Top Boundary */}
      {isMounted && shouldShowDivider && progress > 0 && progress < 0.98 && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '90px',
            background: `linear-gradient(to bottom,
              rgba(8, 11, 16, ${0.45 * (1 - progress)}),
              transparent
            )`,
            pointerEvents: 'none',
            zIndex: 9,
          }}
        />
      )}

      {children}
    </div>
  );
}
