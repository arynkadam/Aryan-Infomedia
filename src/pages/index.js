import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import ScrollDepthSection from '@/components/layout/ScrollDepthSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import CTAStrip from '@/components/sections/CTAStrip';
import { services } from '@/data/services';
import { ShieldCheck, Cpu, Target, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <Layout
      title="Technology & Digital Marketing Solutions"
      description="Aryan Infomedia provides custom software development, Meta Ads, SEO, business automation, and comprehensive digital marketing for growing and established businesses."
    >
      {/* 1. Hero Section (Stage 01: Hero Gateway) — depth exit on scroll */}
      <ScrollDepthSection sectionId="hero" isFirst>
        <Hero />
      </ScrollDepthSection>

      {/* 2. Core Capabilities (Stage 02: Geometric Expansion) — circular reveal entrance */}
      <ScrollDepthSection sectionId="services" style={{ zIndex: 5, scrollMarginTop: '6rem' }}>
        <section className="section-padding" style={{ position: 'relative', scrollMarginTop: '6rem' }}>
        <div className="container-tight">
          <SectionHeading
            eyebrow="CAPABILITIES // 01"
            title="Integrated Digital & Technology Services"
            description="We bridge the gap between complex software engineering and targeted marketing strategies to provide end-to-end growth."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {/* Explore Capabilities Action Button */}
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link
              href="/services"
              className="btn-secondary btn-explore-capabilities"
              aria-label="Explore all capabilities and comprehensive service specifications"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                fontSize: '0.95rem',
                padding: '0.85rem 2rem',
              }}
            >
              <span>Explore Capabilities</span>
              <ArrowRight size={16} className="btn-explore-arrow" />
            </Link>
          </div>
        </div>
        </section>
      </ScrollDepthSection>

      {/* 3. Why Aryan Infomedia (Stage 03: Structured Matrix) */}
      <ScrollDepthSection sectionId="why-us" style={{ zIndex: 5 }}>
        <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container-tight">
          <SectionHeading
            eyebrow="FOUNDATION // 02"
            title="A Technical Foundation Built for Scalability"
            description="We partner with established organisations seeking modern, reliable technology combined with transparent digital marketing execution."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            <div className="card-glass">
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: 'rgba(37, 99, 255, 0.12)',
                  border: '1px solid rgba(96, 165, 250, 0.3)',
                  color: '#60A5FA',
                  borderRadius: '0.625rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <Cpu size={26} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.85rem', color: '#F5F7FA' }}>
                Engineering-First Mindset
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#A7B0C0', lineHeight: 1.7, margin: 0 }}>
                Every solution, from internal enterprise tools to landing page development, is built with solid software engineering practices, ensuring high speed, security, and maintainability.
              </p>
            </div>

            <div className="card-glass">
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: 'rgba(37, 99, 255, 0.12)',
                  border: '1px solid rgba(96, 165, 250, 0.3)',
                  color: '#60A5FA',
                  borderRadius: '0.625rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <Target size={26} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.85rem', color: '#F5F7FA' }}>
                Targeted Digital Execution
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#A7B0C0', lineHeight: 1.7, margin: 0 }}>
                Our Meta Ads and SEO strategies are focused strictly on business impact and qualified client acquisition, avoiding superficial vanity metrics and social content clutter.
              </p>
            </div>

            <div className="card-glass">
              <div
                style={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: 'rgba(37, 99, 255, 0.12)',
                  border: '1px solid rgba(96, 165, 250, 0.3)',
                  color: '#60A5FA',
                  borderRadius: '0.625rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.85rem', color: '#F5F7FA' }}>
                Continuous Support & Reliability
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#A7B0C0', lineHeight: 1.7, margin: 0 }}>
                Technology requires consistent attention. Our software maintenance and monitoring workflows ensure your operations remain stable, fast, and secure year-round.
              </p>
            </div>
          </div>
        </div>
        </section>
      </ScrollDepthSection>

      {/* 4. Strategic Workflow (Stage 04: Process Trajectory) */}
      <ScrollDepthSection sectionId="approach" style={{ zIndex: 5 }}>
        <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container-tight">
          <SectionHeading
            eyebrow="METHODOLOGY // 03"
            title="Our Strategic Approach"
            description="A disciplined execution framework structured to ensure technical precision and business clarity at every milestone."
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              { step: '01', title: 'Discovery & Audit', desc: 'Comprehensive technical scoping and target audience evaluation before code is written.' },
              { step: '02', title: 'System Architecture', desc: 'Designing modern, scalable software blueprints and conversion funnels.' },
              { step: '03', title: 'Build & Optimise', desc: 'Iterative, high-performance development paired with targeted digital marketing campaign setup.' },
              { step: '04', title: 'Deploy & Support', desc: 'Rigorous quality assurance, smooth production launch, and proactive ongoing maintenance.' },
            ].map((item) => (
              <div
                key={item.step}
                className="card-glass"
                style={{
                  padding: '2rem',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', monospace",
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: 'rgba(96, 165, 250, 0.4)',
                    display: 'block',
                    marginBottom: '1rem',
                  }}
                >
                  {item.step}
                </span>
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.15rem', fontWeight: 700, color: '#F5F7FA', marginBottom: '0.75rem' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#A7B0C0', lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        </section>
      </ScrollDepthSection>

      {/* 5. CTA Consultation Banner (Stage 05: Harmonic Resolution) */}
      <ScrollDepthSection sectionId="contact-cta" isLast style={{ zIndex: 5 }}>
        <CTAStrip />
      </ScrollDepthSection>
    </Layout>
  );
}
