import Link from 'next/link';
import { companyInfo } from '@/data/services';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'Home',      href: '/' },
    { label: 'About Us',  href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact',   href: '/contact' },
  ],
  Services: [
    { label: 'Software Development', href: '/services' },
    { label: 'Website Development',  href: '/services' },
    { label: 'Meta Ads Management',  href: '/services' },
    { label: 'Digital Marketing',    href: '/services' },
    { label: 'SEO',                  href: '/services' },
    { label: 'Business Automation',  href: '/services' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        backgroundColor: '#F8FAFC',
        color: '#0F172A',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 -20px 40px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* Upper subtle separator band */}
      <div style={{ borderBottom: '1px solid #E2E8F0', padding: '1.25rem 0' }}>
        <div className="container-tight" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', color: '#64748B', textTransform: 'uppercase' }}>
            Aryan Infomedia Studio · Worldwide Operations
          </span>
          <span style={{ fontFamily: "'Space Grotesk', monospace", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', color: '#2563FF', textTransform: 'uppercase' }}>
            System Status: Active
          </span>
        </div>
      </div>

      {/* Main light-contrast footer content */}
      <div
        className="container-tight"
        style={{
          paddingTop: '4.5rem',
          paddingBottom: '3.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3.5rem',
        }}
      >
        {/* Brand column */}
        <div style={{ gridColumn: 'span 1' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', textDecoration: 'none' }}>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: '#2563FF',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(37, 99, 255, 0.35)',
              }}
            >
              <span style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1rem' }}>A</span>
            </div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.125rem', color: '#0F172A', letterSpacing: '-0.02em' }}>
              Aryan Infomedia
            </span>
          </Link>
          <p style={{ fontSize: '0.925rem', lineHeight: 1.7, color: '#475569', maxWidth: '22rem', margin: '0 0 1.5rem' }}>
            Engineering bespoke software, automated workflows, and high-impact Meta advertising for established brands and modern enterprises.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#2563FF', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.04em' }}>
            <span>SOFTWARE · DIGITAL · AUTOMATION</span>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.8125rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#0F172A',
                marginBottom: '1.5rem',
              }}
            >
              {heading}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: '0.9rem',
                      color: '#475569',
                      textDecoration: 'none',
                      transition: 'color 0.15s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2563FF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div>
          <h4
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.8125rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#0F172A',
              marginBottom: '1.5rem',
            }}
          >
            Direct Contact
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.9rem', color: '#475569' }}>{companyInfo.email}</span>
            <span style={{ fontSize: '0.9rem', color: '#475569' }}>{companyInfo.phone}</span>
            <span style={{ fontSize: '0.9rem', color: '#475569' }}>{companyInfo.city}</span>
          </div>
          <div style={{ marginTop: '1.75rem' }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: '#FFFFFF',
                backgroundColor: '#0F172A',
                padding: '0.625rem 1.35rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2563FF';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#0F172A';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid #E2E8F0',
          padding: '1.5rem 0',
        }}
      >
        <div
          className="container-tight"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <p style={{ fontSize: '0.85rem', color: '#64748B', margin: 0 }}>
            © {year} Aryan Infomedia. All rights reserved.
          </p>
          <p style={{ fontSize: '0.85rem', color: '#64748B', margin: 0, fontFamily: "'Space Grotesk', monospace" }}>
            PRECISION ENGINEERING · STRATEGIC GROWTH
          </p>
        </div>
      </div>
    </footer>
  );
}
