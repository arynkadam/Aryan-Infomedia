import React from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAStrip from '@/components/sections/CTAStrip';
import { services } from '@/data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { 
  Code2, 
  Globe, 
  BarChart3, 
  TrendingUp, 
  Settings, 
  Zap, 
  Search, 
  Layout as LayoutIcon 
} from 'lucide-react';

const iconMap = {
  Code2,
  Globe,
  BarChart3,
  TrendingUp,
  Settings,
  Zap,
  Search,
  Layout: LayoutIcon,
};

export default function ServicesPage() {
  return (
    <Layout
      title="Services & Capabilities"
      description="Explore Aryan Infomedia's core services: Software development, website development, Meta Ads, digital marketing, SEO, maintenance, and automation."
    >
      {/* 1. Page Header */}
      <section style={{ paddingTop: '9rem', paddingBottom: '6rem', position: 'relative', zIndex: 5 }}>
        <div className="container-tight" style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span className="eyebrow">
              SPECIALISED CAPABILITIES // ALL SYSTEMS
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
            Specialised Technology & Digital Services
          </h1>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1.15rem', color: '#A7B0C0', maxWidth: '44rem', margin: '0 auto', lineHeight: 1.8 }}>
            Every service we deliver is designed to help organisations build robust technical infrastructure, automate operations, and acquire customers effectively.
          </p>
        </div>
      </section>

      {/* 2. Detailed Services Listing with Architectural Glass Panels */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 5 }}>
        <div className="container-tight">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Code2;
              const numString = String(index + 1).padStart(2, '0');

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="card-glass"
                  style={{
                    padding: '3rem 2.5rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '3rem',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <div
                        style={{
                          width: '3.25rem',
                          height: '3.25rem',
                          backgroundColor: 'rgba(37, 99, 255, 0.12)',
                          border: '1px solid rgba(96, 165, 250, 0.3)',
                          color: '#60A5FA',
                          borderRadius: '0.625rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 0 16px rgba(37, 99, 255, 0.2)',
                        }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.8rem', color: '#60A5FA', letterSpacing: '0.12em', fontWeight: 600 }}>
                        CAPABILITY // {numString}
                      </span>
                    </div>

                    <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.85rem', fontWeight: 700, color: '#F5F7FA', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                      {service.title}
                    </h2>
                    <p style={{ fontSize: '1.05rem', color: '#A7B0C0', lineHeight: 1.75, marginBottom: '2rem' }}>
                      {service.description}
                    </p>
                    <Link href="/contact" className="btn-secondary">
                      <span>Inquire About This Service</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'rgba(8, 11, 16, 0.6)',
                      padding: '2.25rem',
                      borderRadius: '0.75rem',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 700, color: '#F5F7FA', marginBottom: '1.25rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      Key Features & Deliverables:
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', color: '#A7B0C0' }}>
                        <CheckCircle2 size={18} color="#60A5FA" style={{ flexShrink: 0 }} />
                        <span>Dedicated planning & architectural scoping</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', color: '#A7B0C0' }}>
                        <CheckCircle2 size={18} color="#60A5FA" style={{ flexShrink: 0 }} />
                        <span>Modern technology standards & clean code</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', color: '#A7B0C0' }}>
                        <CheckCircle2 size={18} color="#60A5FA" style={{ flexShrink: 0 }} />
                        <span>Transparent reporting and milestone checkpoints</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9375rem', color: '#A7B0C0' }}>
                        <CheckCircle2 size={18} color="#60A5FA" style={{ flexShrink: 0 }} />
                        <span>Ongoing maintenance, security, and continuity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTAStrip />
    </Layout>
  );
}
