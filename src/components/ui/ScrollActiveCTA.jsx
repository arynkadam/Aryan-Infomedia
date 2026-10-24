import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';

/**
 * ScrollActiveCTA — Contextual floating Call-to-Action
 *
 * Requirements:
 * - Appears after the visitor has spent 10 seconds of ACTIVE scrolling.
 * - Pausing / idle reading does not count toward active scrolling.
 * - Prominently slides in from the bottom-right corner with a sleek spring animation.
 * - Visible dismiss button (X) with smooth slide-out transition.
 * - Once dismissed, suppressed for the remainder of the session.
 * - Accessible: Escape key support, screen-reader attributes, prefers-reduced-motion.
 */
export default function ScrollActiveCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  
  const activeMsRef = useRef(0);
  const isScrollingRef = useRef(false);
  const pauseTimerRef = useRef(null);
  const tickerRef = useRef(null);

  useEffect(() => {
    // Check if dismissed previously in this browser session
    try {
      if (typeof window !== 'undefined') {
        const dismissed = sessionStorage.getItem('aryan_cta_dismissed');
        if (dismissed === 'true') {
          setIsDismissed(true);
          return;
        }
      }
    } catch {
      // sessionStorage unavailable or restricted
    }

    // Expose console testing helpers
    if (typeof window !== 'undefined') {
      window.__showAryanCTA = () => {
        setIsDismissed(false);
        setIsClosing(false);
        setIsVisible(true);
      };
      window.__resetAryanCTA = () => {
        try { sessionStorage.removeItem('aryan_cta_dismissed'); } catch {}
        activeMsRef.current = 0;
        isScrollingRef.current = false;
        setIsDismissed(false);
        setIsClosing(false);
        setIsVisible(false);
        console.log('[Aryan CTA] Reset successful. Scroll for 10 seconds to trigger or call __showAryanCTA()');
      };
    }

    const TARGET_ACTIVE_TIME_MS = 10000; // 10 seconds of active scrolling as requested
    const PAUSE_THRESHOLD_MS = 1500;    // If no scroll for 1.5s, active scrolling is paused

    const onUserScroll = () => {
      isScrollingRef.current = true;

      // Reset the pause timer on every scroll event
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
      }

      // If user stops scrolling for > 1.5s, mark as paused
      pauseTimerRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, PAUSE_THRESHOLD_MS);
    };

    // Listen to all scroll interaction events
    window.addEventListener('scroll', onUserScroll, { passive: true });
    window.addEventListener('wheel', onUserScroll, { passive: true });
    window.addEventListener('touchmove', onUserScroll, { passive: true });

    // Tick every 200ms: accumulate real-time seconds only while actively scrolling
    tickerRef.current = setInterval(() => {
      if (isScrollingRef.current) {
        activeMsRef.current += 200;

        if (activeMsRef.current >= TARGET_ACTIVE_TIME_MS) {
          setIsVisible(true);
          // Cleanup listeners and ticker once triggered
          clearInterval(tickerRef.current);
          window.removeEventListener('scroll', onUserScroll);
          window.removeEventListener('wheel', onUserScroll);
          window.removeEventListener('touchmove', onUserScroll);
        }
      }
    }, 200);

    return () => {
      window.removeEventListener('scroll', onUserScroll);
      window.removeEventListener('wheel', onUserScroll);
      window.removeEventListener('touchmove', onUserScroll);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      if (tickerRef.current) clearInterval(tickerRef.current);
    };
  }, []);

  // Support Escape key to dismiss
  useEffect(() => {
    if (!isVisible) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  const handleDismiss = () => {
    setIsClosing(true);
    try {
      sessionStorage.setItem('aryan_cta_dismissed', 'true');
    } catch {
      // sessionStorage unavailable
    }
    setTimeout(() => {
      setIsVisible(false);
      setIsDismissed(true);
    }, 300);
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <aside
      role="dialog"
      aria-label="Project consultation prompt"
      aria-live="polite"
      className="scroll-active-cta-panel"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        maxWidth: '24rem',
        backgroundColor: 'rgba(11, 18, 32, 0.96)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(96, 165, 250, 0.45)',
        borderRadius: '1.125rem',
        padding: '1.5rem',
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.9), 0 0 45px rgba(37, 99, 255, 0.35)',
        animation: isClosing
          ? 'ctaSlideOutDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          : 'ctaSlideInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
    >
      {/* Top Header Row with status badge & dismiss button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <span
            style={{
              width: '0.5rem',
              height: '0.5rem',
              borderRadius: '50%',
              backgroundColor: '#3B82F6',
              boxShadow: '0 0 10px #3B82F6',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontFamily: "'Space Grotesk', monospace",
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#60A5FA',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            INQUIRY // ACTIVE CUE
          </span>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss inquiry notification"
          style={{
            background: 'none',
            border: 'none',
            color: '#94A3B8',
            cursor: 'pointer',
            padding: '0.35rem',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '0.375rem',
            transition: 'color 0.15s ease, background-color 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#94A3B8';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <X size={17} />
        </button>
      </div>

      {/* Main Copy */}
      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '1.2rem',
          fontWeight: 700,
          color: '#F5F7FA',
          margin: '0 0 0.4rem',
          letterSpacing: '-0.015em',
          lineHeight: 1.3,
        }}
      >
        Have a project in mind?
      </h3>

      <p
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '0.9rem',
          color: '#A7B0C0',
          lineHeight: 1.6,
          margin: '0 0 1.25rem',
        }}
      >
        Let&apos;s turn your ideas into something exceptional.
      </p>

      {/* Action Button */}
      <div>
        <Link
          href="/contact"
          onClick={handleDismiss}
          className="btn-primary"
          style={{
            width: '100%',
            padding: '0.75rem 1.25rem',
            fontSize: '0.9rem',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            borderRadius: '9999px',
          }}
        >
          <span>Discuss Your Project</span>
          <ArrowRight size={15} />
        </Link>
      </div>

      <style>{`
        @keyframes ctaSlideInUp {
          0% {
            opacity: 0;
            transform: translateY(120px) scale(0.92);
          }
          65% {
            opacity: 1;
            transform: translateY(-8px) scale(1.02);
          }
          85% {
            transform: translateY(3px) scale(0.99);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes ctaSlideOutDown {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(100px) scale(0.92);
          }
        }
        @media (max-width: 640px) {
          .scroll-active-cta-panel {
            bottom: 1.25rem !important;
            left: 1rem !important;
            right: 1rem !important;
            max-width: none !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .scroll-active-cta-panel {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </aside>
  );
}
