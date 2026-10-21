import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { companyInfo } from '@/data/services';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Software Development & Management',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout
      title="Contact Us"
      description="Get in touch with Aryan Infomedia to discuss your software engineering, digital marketing, or business automation requirements."
    >
      {/* 1. Header Banner */}
      <section style={{ paddingTop: '9rem', paddingBottom: '6rem', position: 'relative', zIndex: 5 }}>
        <div className="container-tight" style={{ textAlign: 'center' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span className="eyebrow">
              COMMUNICATIONS // INQUIRY
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
            Let&apos;s Discuss Your Next Initiative
          </h1>
          <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1.15rem', color: '#A7B0C0', maxWidth: '44rem', margin: '0 auto', lineHeight: 1.8 }}>
            Whether you need custom software, managed advertising, or automated business workflows, our team is ready to evaluate your requirements.
          </p>
        </div>
      </section>

      {/* 2. Contact Information & Form */}
      <section className="section-padding" style={{ position: 'relative', zIndex: 5 }}>
        <div className="container-tight">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '4rem',
            }}
          >
            {/* Direct Contact Info */}
            <div>
              <span className="eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}>
                DIRECT ACCESS // ENQUIRIES
              </span>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '2.1rem', fontWeight: 700, color: '#F5F7FA', marginBottom: '1.5rem', lineHeight: 1.2 }}>
                We respond within one business day.
              </h2>
              <p style={{ color: '#A7B0C0', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1.05rem' }}>
                Reach out directly via our official channels or use the enquiry form. All discussions are treated with strict confidentiality.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                  <div
                    style={{
                      width: '3rem',
                      height: '3rem',
                      backgroundColor: 'rgba(37, 99, 255, 0.12)',
                      border: '1px solid rgba(96, 165, 250, 0.3)',
                      borderRadius: '0.625rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#60A5FA',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={22} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#F5F7FA', fontSize: '1rem', marginBottom: '0.25rem', fontFamily: "'Space Grotesk', sans-serif" }}>
                      Email Inquiries
                    </strong>
                    <span style={{ color: '#A7B0C0', fontSize: '0.95rem' }}>{companyInfo.email}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                  <div
                    style={{
                      width: '3rem',
                      height: '3rem',
                      backgroundColor: 'rgba(37, 99, 255, 0.12)',
                      border: '1px solid rgba(96, 165, 250, 0.3)',
                      borderRadius: '0.625rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#60A5FA',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={22} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#F5F7FA', fontSize: '1rem', marginBottom: '0.25rem', fontFamily: "'Space Grotesk', sans-serif" }}>
                      Phone Consultation
                    </strong>
                    <span style={{ color: '#A7B0C0', fontSize: '0.95rem' }}>{companyInfo.phone}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                  <div
                    style={{
                      width: '3rem',
                      height: '3rem',
                      backgroundColor: 'rgba(37, 99, 255, 0.12)',
                      border: '1px solid rgba(96, 165, 250, 0.3)',
                      borderRadius: '0.625rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#60A5FA',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={22} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#F5F7FA', fontSize: '1rem', marginBottom: '0.25rem', fontFamily: "'Space Grotesk', sans-serif" }}>
                      Location / Office
                    </strong>
                    <span style={{ color: '#A7B0C0', fontSize: '0.95rem' }}>{companyInfo.address}, {companyInfo.city}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiries Form in High-Tech Glass Panel */}
            <div className="card-glass" style={{ padding: '3rem 2.5rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle2 size={48} color="#60A5FA" style={{ margin: '0 auto 1.5rem' }} />
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.65rem', fontWeight: 700, color: '#F5F7FA', marginBottom: '0.85rem' }}>
                    Inquiry Transmitted
                  </h3>
                  <p style={{ color: '#A7B0C0', lineHeight: 1.7, maxWidth: '24rem', margin: '0 auto 1.75rem' }}>
                    Thank you for reaching out to Aryan Infomedia. This preview submission has been registered.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                    style={{ fontSize: '0.875rem' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.35rem', fontWeight: 700, color: '#F5F7FA', marginBottom: '0.25rem' }}>
                    Transmit an Inquiry
                  </h3>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#F5F7FA', marginBottom: '0.45rem', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        fontSize: '0.95rem',
                        backgroundColor: 'rgba(8, 11, 16, 0.8)',
                        color: '#F5F7FA',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#F5F7FA', marginBottom: '0.45rem', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        fontSize: '0.95rem',
                        backgroundColor: 'rgba(8, 11, 16, 0.8)',
                        color: '#F5F7FA',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#F5F7FA', marginBottom: '0.45rem', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>
                      PRIMARY SERVICE OF INTEREST
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        fontSize: '0.95rem',
                        backgroundColor: '#0B1220',
                        color: '#F5F7FA',
                        outline: 'none',
                      }}
                    >
                      <option value="Software Development & Management">Software Development & Management</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Meta Ads Management">Meta Ads Management</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Software Maintenance & Support">Software Maintenance & Support</option>
                      <option value="Business Automation">Business Automation</option>
                      <option value="SEO">SEO</option>
                      <option value="Landing Pages & Lead Generation">Landing Pages & Lead Generation</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#F5F7FA', marginBottom: '0.45rem', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.04em' }}>
                      PROJECT REQUIREMENTS *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Provide brief details on your organisation's current requirements, timelines, or goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        fontSize: '0.95rem',
                        backgroundColor: 'rgba(8, 11, 16, 0.8)',
                        color: '#F5F7FA',
                        outline: 'none',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ marginTop: '0.5rem', width: '100%' }}>
                    <span>Transmit Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
