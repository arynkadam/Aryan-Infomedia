import React from 'react';
import Layout from '@/components/layout/Layout';
import ScrollDepthSection from '@/components/layout/ScrollDepthSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAStrip from '@/components/sections/CTAStrip';
import { CheckCircle2, Users } from 'lucide-react';

export default function About() {
  return (
    <Layout
      title="About Us"
      description="Learn about Aryan Infomedia, our mission, values, and how we deliver robust technology and strategic digital marketing solutions."
    >
      {/* 1. Header Banner */}
      <ScrollDepthSection sectionId="about-header" isFirst>
        <section style={{ paddingTop: '9rem', paddingBottom: '6rem', position: 'relative', zIndex: 5 }}>
          <div className="container-tight" style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: '1rem' }}>
              <span className="eyebrow">
                STUDIO PROFILE // OVERVIEW
              </span>
            </div>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                fontWeight: 800,
                color: '#F5F7FA',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
              }}
            >
              Bridging Technology & Growth Strategy
            </h1>
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1.15rem', color: '#A7B0C0', maxWidth: '44rem', margin: '0 auto', lineHeight: 1.8 }}>
              We are a digital solutions provider serving organisations that require reliable software systems, streamlined operations, and measurable digital acquisition.
            </p>
          </div>
        </section>
      </ScrollDepthSection>

      {/* 2. Mission & Values */}
      <ScrollDepthSection sectionId="mission" style={{ zIndex: 5 }}>
        <section className="section-padding" style={{ position: 'relative' }}>
          <div className="container-tight">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '3.5rem',
                alignItems: 'center',
              }}
            >
              <div>
                <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
                  OUR MISSION // PURPOSE
                </span>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2.25rem', fontWeight: 700, color: '#F5F7FA', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                  Engineering digital tools that create tangible operational value.
                </h2>
                <p style={{ color: '#A7B0C0', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem' }}>
                  Aryan Infomedia was established with a singular objective: to deliver clear-cut technology and marketing services without the ambiguity or vanity metrics typical of modern agencies.
                </p>
                <p style={{ color: '#A7B0C0', lineHeight: 1.8, fontSize: '1rem' }}>
                  We believe in clean code, disciplined system design, and focused digital marketing campaigns that directly impact bottom-line metrics such as lead generation and business efficiency.
                </p>
              </div>

              <div className="card-glass" style={{ padding: '3rem 2.5rem' }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.35rem', fontWeight: 700, color: '#F5F7FA', marginBottom: '1.75rem' }}>
                  Our Operating Principles
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <CheckCircle2 size={20} color="#60A5FA" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <div>
                      <strong style={{ display: 'block', color: '#F5F7FA', fontSize: '0.975rem', marginBottom: '0.25rem' }}>Clarity & Transparency</strong>
                      <span style={{ fontSize: '0.875rem', color: '#A7B0C0', lineHeight: 1.6 }}>We communicate technical concepts simply and report marketing metrics honestly.</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <CheckCircle2 size={20} color="#60A5FA" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <div>
                      <strong style={{ display: 'block', color: '#F5F7FA', fontSize: '0.975rem', marginBottom: '0.25rem' }}>Engineering Precision</strong>
                      <span style={{ fontSize: '0.875rem', color: '#A7B0C0', lineHeight: 1.6 }}>Every website, workflow, and application is architected for stability, speed, and maintainability.</span>
                    </div>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <CheckCircle2 size={20} color="#60A5FA" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <div>
                      <strong style={{ display: 'block', color: '#F5F7FA', fontSize: '0.975rem', marginBottom: '0.25rem' }}>No Vanity Distractions</strong>
                      <span style={{ fontSize: '0.875rem', color: '#A7B0C0', lineHeight: 1.6 }}>We deliberately focus on conversion channels (Meta Ads, SEO) and avoid non-essential social content noise.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ScrollDepthSection>

      {/* 3. Team & Leadership (Transparent Placeholders) */}
      <ScrollDepthSection sectionId="team" style={{ zIndex: 5 }}>
        <section className="section-padding" style={{ position: 'relative' }}>
          <div className="container-tight">
            <SectionHeading
              eyebrow="LEADERSHIP // 02"
              title="The People Behind Aryan Infomedia"
              description="Our team unites experienced technical engineers with strategic digital growth specialists."
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
              }}
            >
              {[1, 2, 3].map((item) => (
                <div key={item} className="card-glass" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                  <div
                    style={{
                      width: '5rem',
                      height: '5rem',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(37, 99, 255, 0.12)',
                      border: '1px solid rgba(96, 165, 250, 0.3)',
                      margin: '0 auto 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#60A5FA',
                      boxShadow: '0 0 20px rgba(37, 99, 255, 0.25)',
                    }}
                  >
                    <Users size={30} />
                  </div>
                  <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#F5F7FA', marginBottom: '0.35rem' }}>
                    [Leadership Profile {item}]
                  </h4>
                  <p style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.8rem', color: '#60A5FA', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    [Executive / Engineering Role]
                  </p>
                  <p style={{ fontSize: '0.875rem', color: '#A7B0C0', margin: 0, lineHeight: 1.6 }}>
                    [Profile details and professional background will be updated once finalised.]
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollDepthSection>

      {/* 4. CTA Consultation Banner */}
      <ScrollDepthSection sectionId="about-cta" isLast style={{ zIndex: 5 }}>
        <CTAStrip />
      </ScrollDepthSection>
    </Layout>
  );
}
