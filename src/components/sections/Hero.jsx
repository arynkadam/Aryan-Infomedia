import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

/**
 * Hero Section — Elevated Digital Studio Experience
 * 
 * Features:
 * 1. Confident oversized typography with cinematic specular glow.
 * 2. Subtle 3D mouse parallax tracking on desktop (disabled on touch / reduced-motion).
 * 3. Staggered reveal entrance animations.
 * 4. Refined tactile buttons with hover, focus-visible, and active click states.
 * 5. Minimalist technical scroll-cue indicator pointing to Capabilities.
 */
export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Detect fine pointer (desktop mouse) vs touch
    const fineMatch = window.matchMedia('(pointer: fine)');
    setIsFinePointer(fineMatch.matches);

    const reduceMatch = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(reduceMatch.matches);

    const handleMouseMove = (e) => {
      if (!fineMatch.matches || reduceMatch.matches) return;
      // Normalise coordinates: -1 (left/top) to +1 (right/bottom)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToServices = (e) => {
    e.preventDefault();
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/services';
    }
  };

  // Parallax offsets
  const auraX = prefersReduced ? 0 : mousePos.x * 24;
  const auraY = prefersReduced ? 0 : mousePos.y * 18;
  const shardLeftX = prefersReduced ? 0 : mousePos.x * -16;
  const shardLeftY = prefersReduced ? 0 : mousePos.y * -12;
  const shardRightX = prefersReduced ? 0 : mousePos.x * 16;
  const shardRightY = prefersReduced ? 0 : mousePos.y * 12;

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        paddingTop: '9.5rem',
        paddingBottom: '6.5rem',
        overflow: 'hidden',
        minHeight: '88vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Interactive 3D Ambient Specular Flare (Mouse Parallax) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          width: '45rem',
          height: '25rem',
          transform: `translate(-50%, -50%) translate3d(${auraX}px, ${auraY}px, 0)`,
          background: 'radial-gradient(ellipse 65% 50% at 50% 50%, rgba(37, 99, 255, 0.18), rgba(96, 165, 250, 0.05) 50%, transparent 80%)',
          pointerEvents: 'none',
          filter: 'blur(45px)',
          zIndex: 1,
          transition: 'transform 0.2s ease-out',
        }}
      />

      {/* Floating Lateral 3D Glass Crystal Accents (Parallax Layer) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '25%',
          left: '4%',
          width: '7rem',
          height: '11rem',
          borderRadius: '1rem',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(37, 99, 255, 0.08) 50%, rgba(11, 18, 32, 0.4) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(96, 165, 250, 0.2)',
          transform: `translate3d(${shardLeftX}px, ${shardLeftY}px, 0) rotate(-14deg)`,
          pointerEvents: 'none',
          zIndex: 2,
          opacity: 0.65,
          transition: 'transform 0.25s ease-out',
        }}
        className="hidden-mobile"
      />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '55%',
          right: '5%',
          width: '8rem',
          height: '12rem',
          borderRadius: '1.25rem',
          background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.15) 0%, rgba(37, 99, 255, 0.10) 50%, rgba(11, 18, 32, 0.5) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.22)',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(37, 99, 255, 0.25)',
          transform: `translate3d(${shardRightX}px, ${shardRightY}px, 0) rotate(12deg)`,
          pointerEvents: 'none',
          zIndex: 2,
          opacity: 0.7,
          transition: 'transform 0.25s ease-out',
        }}
        className="hidden-mobile"
      />

      <div className="container-tight" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
          
          {/* 
            1. Technical Metadata Row (Staggered Entrance Stage 1)
          */}
          <div
            className="hero-enter-1"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '1.25rem',
              marginBottom: '2.5rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <span
                style={{
                  width: '0.45rem',
                  height: '0.45rem',
                  borderRadius: '50%',
                  backgroundColor: '#3B82F6',
                  boxShadow: '0 0 8px #3B82F6',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: "'Space Grotesk', monospace",
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  color: '#60A5FA',
                  textTransform: 'uppercase',
                }}
              >
                SOFTWARE · DIGITAL · AUTOMATION
              </span>
            </div>

            <span
              style={{
                fontFamily: "'Space Grotesk', monospace",
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                color: '#94A3B8',
                textTransform: 'uppercase',
              }}
            >
              BUILT FOR WHAT&apos;S NEXT
            </span>
          </div>

          {/* 
            2. Main Hero Headline (Staggered Entrance Stage 2)
            Oversized uppercase white typography with subtle perspective tilt
          */}
          <h1
            className="hero-enter-2"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.75rem, 8vw, 5.5rem)',
              fontWeight: 800,
              color: '#F5F7FA',
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              marginBottom: '2rem',
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.7), 0 0 50px rgba(37, 99, 255, 0.3)',
            }}
          >
            Aryan Infomedia
          </h1>

          {/* 
            3. Hero Subheading (Staggered Entrance Stage 3)
          */}
          <p
            className="hero-enter-3"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: 'clamp(1.1rem, 2.2vw, 1.25rem)',
              color: '#A7B0C0',
              lineHeight: 1.8,
              maxWidth: '46rem',
              margin: '0 auto 3rem',
              fontWeight: 400,
            }}
          >
            Aryan Infomedia combines software engineering, targeted Meta ads, and conversion-driven digital strategies to help companies modernise operations and accelerate growth.
          </p>

          {/* 
            4. Polished Action Buttons (Staggered Entrance Stage 4)
            - Primary: Discuss Your Project
            - Secondary: Explore Our Services (Smooth-scrolls to Capabilities)
          */}
          <div
            className="hero-enter-4"
            style={{
              display: 'flex',
              gap: '1.25rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/contact"
              className="btn-primary hero-btn-primary"
              aria-label="Discuss your project with our engineering team"
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={18} className="hero-btn-arrow" />
            </Link>

            <a
              href="#services"
              onClick={handleScrollToServices}
              className="btn-secondary hero-btn-secondary"
              aria-label="Explore capabilities and services section"
            >
              <span>Explore Our Services</span>
              <ChevronDown size={17} className="hero-chevron" />
            </a>
          </div>

          {/* 
            5. Key Value Propositions (Staggered Entrance Stage 5)
          */}
          <div
            className="hero-enter-5"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.25rem',
              marginTop: '4.25rem',
              flexWrap: 'wrap',
              color: '#94A3B8',
              fontSize: '0.8125rem',
              fontWeight: 600,
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: '0.04em',
            }}
          >
            <div
              className="hero-pill-badge"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 1.1rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(8px)',
                transition: 'border-color 0.2s ease, background-color 0.2s ease',
              }}
            >
              <CheckCircle2 size={15} color="#3B82F6" />
              <span>Full-Lifecycle Software Development</span>
            </div>

            <div
              className="hero-pill-badge"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 1.1rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(8px)',
                transition: 'border-color 0.2s ease, background-color 0.2s ease',
              }}
            >
              <CheckCircle2 size={15} color="#3B82F6" />
              <span>Performance-Driven Advertising</span>
            </div>

            <div
              className="hero-pill-badge"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 1.1rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(8px)',
                transition: 'border-color 0.2s ease, background-color 0.2s ease',
              }}
            >
              <CheckCircle2 size={15} color="#3B82F6" />
              <span>Enterprise Systems & Automation</span>
            </div>
          </div>

          {/* 
            6. Subtle Technical Scroll Cue Indicator
          */}
          <div
            className="hero-enter-5"
            style={{
              marginTop: '4rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.65rem',
            }}
          >
            <a
              href="#services"
              onClick={handleScrollToServices}
              aria-label="Scroll down to explore capabilities"
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                cursor: 'pointer',
                opacity: 0.7,
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', monospace",
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  color: '#60A5FA',
                  textTransform: 'uppercase',
                }}
              >
                EXPLORE ARCHITECTURE // SCROLL
              </span>
              <div
                style={{
                  width: '1px',
                  height: '2rem',
                  background: 'linear-gradient(to bottom, rgba(96, 165, 250, 0.6), transparent)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  className="scroll-cue-particle"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '40%',
                    backgroundColor: '#60A5FA',
                    boxShadow: '0 0 6px #60A5FA',
                  }}
                />
              </div>
            </a>
          </div>

        </div>
      </div>

      <style>{`
        /* Staggered entrance animations */
        @keyframes heroFadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes particleDrop {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          80% {
            transform: translateY(250%);
            opacity: 0;
          }
          100% {
            transform: translateY(250%);
            opacity: 0;
          }
        }
        .hero-enter-1 {
          animation: heroFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both;
        }
        .hero-enter-2 {
          animation: heroFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both;
        }
        .hero-enter-3 {
          animation: heroFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.32s both;
        }
        .hero-enter-4 {
          animation: heroFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.46s both;
        }
        .hero-enter-5 {
          animation: heroFadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.60s both;
        }
        .scroll-cue-particle {
          animation: particleDrop 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }

        /* Button micro-interactions */
        .hero-btn-primary {
          position: relative;
          overflow: hidden;
        }
        .hero-btn-primary:active {
          transform: scale(0.97) !important;
        }
        .hero-btn-primary:focus-visible {
          outline: 2px solid #2563FF !important;
          outline-offset: 3px !important;
        }
        .hero-btn-primary .hero-btn-arrow {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-btn-primary:hover .hero-btn-arrow {
          transform: translateX(4px);
        }

        .hero-btn-secondary {
          position: relative;
        }
        .hero-btn-secondary:active {
          transform: scale(0.97) !important;
        }
        .hero-btn-secondary:focus-visible {
          outline: 2px solid #60A5FA !important;
          outline-offset: 3px !important;
        }
        .hero-btn-secondary .hero-chevron {
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hero-btn-secondary:hover .hero-chevron {
          transform: translateY(3px);
        }

        .hero-pill-badge:hover {
          border-color: rgba(96, 165, 250, 0.3) !important;
          background-color: rgba(255, 255, 255, 0.06) !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-enter-1, .hero-enter-2, .hero-enter-3, .hero-enter-4, .hero-enter-5 {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
          .scroll-cue-particle {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
