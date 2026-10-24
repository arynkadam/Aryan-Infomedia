import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Code2, 
  Globe, 
  BarChart3, 
  TrendingUp, 
  Settings, 
  Zap, 
  Search, 
  Layout as LayoutIcon,
  ArrowRight
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

export default function ServiceCard({ service, index = 0 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const IconComponent = iconMap[service.icon] || Code2;
  const numString = String(index + 1).padStart(2, '0');

  // Meaningful destination: Direct anchor link to the full breakdown on the Services page
  const targetHref = `/services#${service.id}`;

  return (
    <Link
      href={targetHref}
      aria-label={`Explore ${service.title} capabilities`}
      className="card-glass service-card-interactive"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onTouchStart={() => setIsActive(true)}
      onTouchEnd={() => setIsActive(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        textDecoration: 'none',
        cursor: 'pointer',
        outline: isFocused ? '2px solid #3B82F6' : 'none',
        outlineOffset: '4px',
        borderColor: (isHovered || isFocused)
          ? 'rgba(96, 165, 250, 0.45)'
          : 'rgba(255, 255, 255, 0.08)',
        backgroundColor: (isHovered || isFocused)
          ? 'rgba(15, 23, 42, 0.85)'
          : 'rgba(11, 18, 32, 0.55)',
        transform: isActive
          ? 'translateY(-2px) scale(0.995)'
          : (isHovered || isFocused)
          ? 'translateY(-6px) scale(1.015)'
          : 'translateY(0) scale(1)',
        boxShadow: (isHovered || isFocused)
          ? '0 16px 36px -8px rgba(0, 0, 0, 0.7), 0 0 32px -4px rgba(37, 99, 255, 0.25)'
          : 'none',
        transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {/* Top technical metadata label & corner highlight */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.75rem',
        }}
      >
        <div
          style={{
            width: '2.85rem',
            height: '2.85rem',
            backgroundColor: (isHovered || isFocused) ? 'rgba(37, 99, 255, 0.22)' : 'rgba(37, 99, 255, 0.12)',
            border: (isHovered || isFocused) ? '1px solid rgba(96, 165, 250, 0.55)' : '1px solid rgba(96, 165, 250, 0.3)',
            color: '#60A5FA',
            borderRadius: '0.625rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: (isHovered || isFocused) ? '0 0 22px rgba(37, 99, 255, 0.45)' : '0 0 16px rgba(37, 99, 255, 0.2)',
            transform: (isHovered || isFocused) ? 'scale(1.08) rotate(-4deg)' : 'scale(1) rotate(0deg)',
            transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <IconComponent size={22} />
        </div>
        <span
          style={{
            fontFamily: "'Space Grotesk', monospace",
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: (isHovered || isFocused) ? 'rgba(96, 165, 250, 0.7)' : 'rgba(255, 255, 255, 0.3)',
            transition: 'color 0.2s ease',
          }}
        >
          SYS // {numString}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '1.25rem',
          fontWeight: 700,
          marginBottom: '0.85rem',
          color: (isHovered || isFocused) ? '#FFFFFF' : '#F5F7FA',
          letterSpacing: '-0.015em',
          transition: 'color 0.2s ease',
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '0.9375rem',
          color: (isHovered || isFocused) ? '#CBD5E1' : '#A7B0C0',
          lineHeight: 1.65,
          flexGrow: 1,
          margin: 0,
          transition: 'color 0.2s ease',
        }}
      >
        {service.shortDescription}
      </p>

      {/* Interactive indicator with animated arrow */}
      <div
        style={{
          marginTop: '1.75rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            fontFamily: "'Space Grotesk', monospace",
            color: (isHovered || isFocused) ? '#93C5FD' : '#60A5FA',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            transition: 'color 0.2s ease',
          }}
        >
          <span>Explore Capability</span>
          <ArrowRight
            size={14}
            style={{
              transform: (isHovered || isFocused) ? 'translateX(5px)' : 'translateX(0)',
              transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />
        </span>
      </div>
    </Link>
  );
}
