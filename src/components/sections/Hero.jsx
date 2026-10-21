import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '9rem',
        paddingBottom: '8rem',
        overflow: 'hidden',
      }}
    >
      <div className="container-tight">
        <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          
          {/* 
            Technical Metadata Row:
            Left: "SOFTWARE · DIGITAL · AUTOMATION"
            Right: "BUILT FOR WHAT'S NEXT"
            Separated by a fine horizontal rule as requested
          */}
          <div
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
            Main Hero Headline: Confident, oversized uppercase white typography
            occupying the primary width on wide screens.
          */}
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.75rem, 8vw, 5.5rem)',
              fontWeight: 800,
              color: '#F5F7FA',
              letterSpacing: '-0.035em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              marginBottom: '2rem',
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.7), 0 0 40px rgba(37, 99, 255, 0.25)',
            }}
          >
            Aryan Infomedia
          </h1>

          {/* Existing Subheading preserved 100% word-for-word */}
          <p
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
            Call-to-Action Buttons:
            Primary: light-filled pill "Discuss Your Project"
            Secondary: transparent, thin-bordered pill "Explore Our Services"
          */}
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">
              <span>Discuss Your Project</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="btn-secondary">
              <span>Explore Our Services</span>
            </Link>
          </div>

          {/* Key Value Propositions with subtle technical pill badges */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1.5rem',
              marginTop: '4.5rem',
              flexWrap: 'wrap',
              color: '#94A3B8',
              fontSize: '0.8125rem',
              fontWeight: 600,
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: '0.04em',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <CheckCircle2 size={15} color="#3B82F6" />
              <span>Full-Lifecycle Software Development</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <CheckCircle2 size={15} color="#3B82F6" />
              <span>Performance-Driven Advertising</span>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              <CheckCircle2 size={15} color="#3B82F6" />
              <span>Enterprise Systems & Automation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
