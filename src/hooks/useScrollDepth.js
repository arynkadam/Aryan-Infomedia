import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * useScrollDepth — Scroll-driven 3D depth transition hook
 *
 * Implements a continuous 3D depth plane transition:
 * - Natural 1:1 scroll synchronisation in both scroll directions (down and up).
 * - Outgoing section subtly recedes into the background (slight scale down, lift, gentle dim).
 * - Incoming section emerges through expanding circular reveal, forward scale, and parallax translateY.
 * - Zero scroll-jacking, zero trapped sections, zero layout thrashing.
 * - 100% SSR & accessibility safe: content defaults to fully visible if JS/animations are disabled.
 * - Respects prefers-reduced-motion: falls back to simple opacity crossfade.
 */
export default function useScrollDepth(options = {}) {
  const {
    // Threshold where entrance transition starts (fraction of viewport from top)
    enterStart = 0.90,
    // Threshold where entrance transition completes
    enterEnd = 0.20,
    // Maximum scale delta for depth illusion (subtle, restrained)
    depthIntensity = 0.05,
    // Whether this is the first section (Hero) — exits on scroll down, returns on scroll up
    isFirst = false,
    // Whether this is the last section — doesn't animate out
    isLast = false,
  } = options;

  const ref = useRef(null);
  const rafRef = useRef(null);

  // SSR / accessibility safe: start mounted as false so server-rendered HTML is 100% visible
  const [isMounted, setIsMounted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
    const mqHandler = (e) => setPrefersReduced(e.matches);
    mq.addEventListener('change', mqHandler);

    return () => mq.removeEventListener('change', mqHandler);
  }, []);

  const calculate = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const vh = window.innerHeight || 800;

    let p = 1;

    if (isFirst) {
      // Hero section: fully visible at top (p = 1).
      // As user scrolls down, rect.top becomes negative, p smoothly drops from 1 toward 0.
      // Reverses naturally when scrolling back up.
      const scrollPastTop = Math.max(0, -rect.top);
      const exitDistance = Math.min(rect.height * 0.75, vh * 0.85);
      const exitProgress = Math.min(1, Math.max(0, scrollPastTop / exitDistance));
      p = 1 - exitProgress;
    } else {
      // Incoming section: starts entering when its top reaches enterStart * vh
      // Fully entered when its top reaches enterEnd * vh
      const topRatio = rect.top / vh;
      if (topRatio >= enterStart) {
        p = 0;
      } else if (topRatio <= enterEnd) {
        p = 1;
      } else {
        p = (enterStart - topRatio) / (enterStart - enterEnd);
      }
      p = Math.max(0, Math.min(1, p));
    }

    setProgress(p);
  }, [isFirst, enterStart, enterEnd]);

  useEffect(() => {
    if (!isMounted) return;

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(calculate);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    
    // Immediate calculation after mount
    calculate();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMounted, calculate]);

  // If not mounted yet (SSR / bots / JS disabled): return neutral, fully accessible styles
  if (!isMounted) {
    return {
      ref,
      style: {},
      maskStyle: {},
      progress: 1,
      isMounted: false,
    };
  }

  // prefers-reduced-motion fallback: gentle opacity crossfade only, no transforms or clip-paths
  if (prefersReduced) {
    return {
      ref,
      style: {
        opacity: Math.max(0.2, progress),
        transition: 'opacity 0.25s ease-out',
      },
      maskStyle: {},
      progress,
      isMounted: true,
    };
  }

  // Smooth easing curve (easeInOutQuad) for natural physical momentum
  const eased = progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;

  // 3D Depth transform parameters
  let scale = 1;
  let translateY = 0;
  let opacity = 1;

  if (isFirst) {
    // Hero recedes subtly: scales from 1.0 down to ~0.95, lifts up slightly (-15px), dims to 0.2
    scale = 1 - (1 - eased) * depthIntensity;
    translateY = (1 - eased) * -16;
    opacity = Math.max(0.15, eased * 1.05);
  } else {
    // Incoming section emerges: scales up from ~0.95 to 1.0, translateY from 35px to 0px
    scale = 1 - (1 - eased) * depthIntensity;
    translateY = (1 - eased) * 35;
    opacity = Math.max(0.05, Math.min(1, eased * 1.3));
  }

  // Circular reveal mask:
  // Expands outward from center (50% 42%).
  // Reaches 130% radius by progress 0.90, fully covering corners before removal to prevent any visual pop.
  let maskStyle = {};
  if (!isFirst && progress < 0.92) {
    const radius = Math.min(130, (eased / 0.92) * 130);
    maskStyle = {
      clipPath: `circle(${radius}% at 50% 42%)`,
      WebkitClipPath: `circle(${radius}% at 50% 42%)`,
    };
  }

  return {
    ref,
    style: {
      opacity,
      transform: `scale3d(${scale.toFixed(4)}, ${scale.toFixed(4)}, 1) translate3d(0, ${translateY.toFixed(2)}px, 0)`,
      transformOrigin: isFirst ? 'center 70%' : 'center top',
      willChange: 'transform, opacity',
      transition: 'transform 0.08s ease-out, opacity 0.08s ease-out',
    },
    maskStyle,
    progress,
    isMounted: true,
  };
}
