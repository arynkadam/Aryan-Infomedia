import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTAStrip() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '7rem 0',
        zIndex: 5,
      }}
    >
      <div className="container-tight">
        <div
          style={{
            position: 'relative',
            borderRadius: '1.25rem',
            padding: '4.5rem 2rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(37, 99, 255, 0.12) 0%, rgba(11, 18, 32, 0.75) 50%, rgba(8, 11, 16, 0.95) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.14)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 40px rgba(37, 99, 255, 0.2)',
            overflow: 'hidden',
          }}
        >
          {/* Subtle top corner tech markers */}
          <span style={{ position: 'absolute', top: '1rem', left: '1.25rem', fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.3)', letterSpacing: '0.12em' }}>
            INIT // PROJECT.START
          </span>
          <span style={{ position: 'absolute', top: '1rem', right: '1.25rem', fontFamily: "'Space Grotesk', monospace", fontSize: '0.7rem', color: '#60A5FA', letterSpacing: '0.12em' }}>
            STATUS // READY
          </span>

          <div style={{ maxWidth: '42rem', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: '#F5F7FA',
                fontSize: 'clamp(2rem, 4.5vw, 2.85rem)',
                fontWeight: 700,
                marginBottom: '1.25rem',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
              }}
            >
              Ready to elevate your technology and marketing?
            </h2>

            <p
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: '#A7B0C0',
                fontSize: '1.125rem',
                margin: '0 auto 2.5rem',
                lineHeight: 1.75,
              }}
            >
              Schedule a consultation with our team to explore tailored software development, business automation, and high-impact digital marketing.
            </p>

            <Link href="/contact" className="btn-primary">
              <span>Schedule a Consultation</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
