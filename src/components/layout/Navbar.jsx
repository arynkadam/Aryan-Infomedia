import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about' },
  { label: 'Services',  href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact',   href: '/contact' },
];

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '1.25rem 1.5rem',
        transition: 'padding 0.3s ease',
      }}
    >
      {/* Refined floating pill container inspired by reference */}
      <div
        style={{
          maxWidth: '78rem',
          margin: '0 auto',
          padding: '0.6rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: '9999px',
          backgroundColor: scrolled ? 'rgba(8, 11, 16, 0.85)' : 'rgba(11, 18, 32, 0.65)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: scrolled
            ? '0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(37, 99, 255, 0.15)'
            : '0 8px 24px rgba(0, 0, 0, 0.4)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Brand identity on left */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '1.875rem',
              height: '1.875rem',
              backgroundColor: '#2563FF',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 14px rgba(37, 99, 255, 0.5)',
            }}
          >
            <span style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.9375rem', lineHeight: 1 }}>A</span>
          </div>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              color: '#F5F7FA',
              letterSpacing: '-0.02em',
            }}
          >
            Aryan Infomedia
          </span>
        </Link>

        {/* Center / Right Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="hidden-mobile">
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#FFFFFF' : '#A7B0C0',
                  padding: '0.4rem 0.95rem',
                  borderRadius: '9999px',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.10)' : 'transparent',
                  border: isActive ? '1px solid rgba(255, 255, 255, 0.18)' : '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#A7B0C0';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Light-filled 'Start a Project' CTA Pill */}
          <Link
            href="/contact"
            style={{
              marginLeft: '0.75rem',
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#080B10',
              backgroundColor: '#F5F7FA',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              boxShadow: '0 2px 10px rgba(255, 255, 255, 0.15)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.boxShadow = '0 0 18px rgba(37, 99, 255, 0.4), 0 4px 15px rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F5F7FA';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Start a Project</span>
            <ArrowUpRight size={14} />
          </Link>
        </nav>

        {/* Mobile menu trigger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.25rem',
            color: '#F5F7FA',
          }}
          className="show-mobile"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          style={{
            marginTop: '0.75rem',
            maxWidth: '78rem',
            margin: '0.75rem auto 0',
            backgroundColor: 'rgba(11, 18, 32, 0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '1.25rem',
            padding: '1.25rem 1.5rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.8)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = router.pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'block',
                  padding: '0.75rem 0',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#60A5FA' : '#F5F7FA',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1.25rem',
              fontSize: '0.95rem',
              fontWeight: 700,
              color: '#080B10',
              backgroundColor: '#F5F7FA',
              padding: '0.85rem',
              borderRadius: '9999px',
              textDecoration: 'none',
            }}
          >
            <span>Start a Project</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 821px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
