import React from 'react';
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

export default function ServiceCard({ service, index = 0 }) {
  const IconComponent = iconMap[service.icon] || Code2;
  const numString = String(index + 1).padStart(2, '0');

  return (
    <div
      className="card-glass"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
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
          <IconComponent size={22} />
        </div>
        <span
          style={{
            fontFamily: "'Space Grotesk', monospace",
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: 'rgba(255, 255, 255, 0.3)',
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
          color: '#F5F7FA',
          letterSpacing: '-0.015em',
        }}
      >
        {service.title}
      </h3>

      <p
        style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '0.9375rem',
          color: '#A7B0C0',
          lineHeight: 1.65,
          flexGrow: 1,
          margin: 0,
        }}
      >
        {service.shortDescription}
      </p>

      {/* Subtle bottom indicator line */}
      <div
        style={{
          marginTop: '1.75rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            fontFamily: "'Space Grotesk', monospace",
            color: '#60A5FA',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Explore Capability →
        </span>
      </div>
    </div>
  );
}
