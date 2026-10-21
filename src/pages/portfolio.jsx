import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import CTAStrip from '@/components/sections/CTAStrip';
import { Briefcase, ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Software Development', 'Websites', 'Digital Marketing', 'Automation'];

const placeholderProjects = [
  {
    id: 1,
    title: '[Enterprise Operational Portal]',
    category: 'Software Development',
    summary: '[Internal workflow automation and management system developed for corporate logistics.]',
    status: 'Project Case Study — Coming Soon',
  },
  {
    id: 2,
    title: '[Corporate Web Platform]',
    category: 'Websites',
    summary: '[Modern, accessible website architecture built with high-performance Next.js and SEO structure.]',
    status: 'Project Case Study — Coming Soon',
  },
  {
    id: 3,
    title: '[Performance Lead Generation]',
    category: 'Digital Marketing',
    summary: '[Integrated Meta Ads campaign and dedicated landing pages driving targeted B2B client acquisition.]',
    status: 'Project Case Study — Coming Soon',
  },
  {
    id: 4,
    title: '[Automated Pipeline Management]',
    category: 'Automation',
    summary: '[Multi-department data synchronisation and automated notification routing system.]',
    status: 'Project Case Study — Coming Soon',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? placeholderProjects
    : placeholderProjects.filter(p => p.category === activeCategory);

  return (
    <Layout
      title="Portfolio & Case Studies"
      description="Explore our work in software engineering, website development, digital marketing, and automated business operations."
    >
      {/* 1. Page Header */}
      <section style={{ paddingTop: '9rem', paddingBottom: '6rem', position: 'relative', zIndex: 5 }}>
        <div className="container-tight" style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span className="eyebrow">
              SELECTED WORKS // ARCHIVE
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
            Selected Solutions & Case Studies
          </h1>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1.15rem', color: '#A7B0C0', maxWidth: '44rem', margin: '0 auto', lineHeight: 1.8 }}>
            A showcase of software platforms, custom websites, and digital marketing programs built for businesses and established brands.
          </p>
        </div>
      </section>

      {/* 2. Filter & Grid */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 5 }}>
        <div className="container-tight">
          {/* Category Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.65rem',
              marginBottom: '4rem',
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    backgroundColor: isActive ? '#F5F7FA' : 'rgba(255, 255, 255, 0.04)',
                    color: isActive ? '#080B10' : '#A7B0C0',
                    border: isActive ? '1px solid #FFFFFF' : '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '0.55rem 1.4rem',
                    borderRadius: '9999px',
                    fontFamily: "'Manrope', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {filteredProjects.map((project) => (
              <div key={project.id} className="card-glass" style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    height: '13rem',
                    backgroundColor: 'rgba(8, 11, 16, 0.7)',
                    borderRadius: '0.625rem',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.75rem',
                    color: '#60A5FA',
                  }}
                >
                  <Briefcase size={36} style={{ marginBottom: '0.75rem' }} />
                  <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', color: '#94A3B8' }}>
                    {project.status}
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span className="eyebrow" style={{ fontSize: '0.725rem' }}>
                    {project.category}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.3rem', fontWeight: 700, color: '#F5F7FA', marginBottom: '0.85rem' }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#A7B0C0', lineHeight: 1.7, flexGrow: 1, margin: '0 0 1.75rem' }}>
                  {project.summary}
                </p>

                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
                  <span style={{ fontSize: '0.8125rem', color: '#64748B', fontStyle: 'italic' }}>
                    Full case study documentation will be published upon client release.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </Layout>
  );
}
