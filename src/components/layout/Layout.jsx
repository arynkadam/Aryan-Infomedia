import Navbar from './Navbar';
import Footer from './Footer';
import ContinuousAtmosphereBackground from './ContinuousAtmosphereBackground';
import ScrollActiveCTA from '@/components/ui/ScrollActiveCTA';
import Head from 'next/head';

export default function Layout({ children, title, description }) {
  const pageTitle = title
    ? `${title} — Aryan Infomedia`
    : 'Aryan Infomedia — Technology & Digital Marketing';

  const pageDesc =
    description ||
    'Aryan Infomedia combines software development and digital marketing to help established brands grow online and operate more efficiently.';

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#080B10', color: '#F5F7FA' }}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
      </Head>

      {/* 
        Continuous atmospheric canvas with floating 3D glass geometry & technical grid.
        Sits permanently in the background across all pages and content sections.
      */}
      <ContinuousAtmosphereBackground />

      {/* Slim pill-shaped floating navigation */}
      <Navbar />

      {/* 
        Main content flow. Transparent background ensures uninterrupted continuity 
        of the 3D glass background canvas underneath.
      */}
      <main style={{ position: 'relative', zIndex: 1, minHeight: '80vh' }}>
        {children}
      </main>

      {/* 
        Footer is the singular deliberate visual contrast with soft light background,
        sitting comfortably atop the page termination.
      */}
      <Footer />

      {/* Contextual floating CTA triggered after 20 seconds of active scrolling */}
      <ScrollActiveCTA />
    </div>
  );
}
