import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Award } from 'lucide-react';

export default function Footer() {

  return (
    <footer style={styles.footer}>
      {/* Wave transition from white page content */}
      <div style={styles.wave}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={styles.waveSvg}>
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#07080a" />
        </svg>
      </div>

      <div style={styles.inner}>
        <div style={styles.grid} className="footer-container">
          
          {/* Brand Info */}
          <div style={styles.brand}>
            <div style={styles.logoRow}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img src="/logo.svg" alt="Dental Speciality Centre Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span style={styles.logoText}>Dental Speciality Centre</span>
            </div>
            <p style={styles.tagline}>
              Providing high-end dental care, painless laser therapies, and microscopic treatments in Indore. Experience medicine with hospitality.
            </p>
            <div style={styles.certBlock}>
              <Award size={14} color="var(--brand-surgical-blue)" />
              <span style={styles.certText}>Licensed Aesthetic Clinic & Dental Surgery</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={styles.colTitle}>Resources</h4>
            {[
              { label: 'Home', to: '/' },
              { label: 'About Us', to: '/about' },
              { label: 'Treatments', to: '/treatments' },
              { label: 'Contact', to: '/contact' },
            ].map((l) => (
              <div key={l.label} style={{ marginBottom: '0.75rem' }}>
                <Link to={l.to} style={styles.navLink}>{l.label}</Link>
              </div>
            ))}
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={styles.colTitle}>Get In Touch</h4>
            <div style={styles.infoRow}>
              <Phone size={16} color="var(--brand-surgical-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={styles.infoText}>6262178282</span>
            </div>
            <div style={styles.infoRow}>
              <MapPin size={16} color="var(--brand-surgical-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={styles.infoText}>F 9, 10, BCM CITY, Khandelwal Nagar, Janki Nagar, Indore</span>
            </div>
            <div style={styles.infoRow}>
              <Clock size={16} color="var(--brand-surgical-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={styles.infoText}>Open 24 Hrs, Monday – Sunday</span>
            </div>
          </div>

        </div>

        {/* Local SEO keywords */}
        <div style={styles.seoFooter}>
          <p style={styles.seoTitle}>Popular Treatments in Indore</p>
          <p style={styles.seoText}>
            Root Canal Treatment in Indore | Microscopic RCT Indore | Laser Dentistry Indore | Clear Aligners in Indore | Braces Indore | Kids Dentist in Indore | Dental Crowns & Bridges Indore | Tooth Extraction Indore | Emergency Dentist Indore | Painless Dental Clinic Indore | Cosmetic smile makeover Indore
          </p>
        </div>

        {/* Bottom Credits */}
        <div style={styles.bottom}>
          <p style={styles.bottomText}>© 2026 Dental Speciality Centre Indore. All rights reserved.</p>
          <p style={styles.creditsText}>Designed and Developed with Advanced AI Support.</p>
        </div>
      </div>

    </footer>
  );
}


const styles = {
  footer: {
    backgroundColor: '#07080a',
    position: 'relative',
    zIndex: 10,
  },
  wave: {
    lineHeight: 0,
    backgroundColor: '#ffffff',
  },
  waveSvg: {
    display: 'block',
    width: '100%',
    height: '40px',
  },
  inner: {
    padding: '5rem 6% 3rem',
    maxWidth: '1440px',
    margin: '0 auto',
  },
  grid: {
    display: 'flex',
    gap: '4rem',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '4rem',
  },
  brand: {
    flex: '1 1 320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logoIcon: {
    backgroundColor: 'var(--brand-surgical-blue)',
    borderRadius: '10px',
    padding: '0.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '-0.02em',
  },
  tagline: {
    color: '#8b8b9a',
    fontSize: '0.92rem',
    lineHeight: '1.6',
  },
  certBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '0.5rem',
  },
  certText: {
    fontSize: '0.75rem',
    color: '#a0a0b0',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  colTitle: {
    color: '#ffffff',
    fontSize: '1rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    letterSpacing: '0.02em',
  },
  navLink: {
    color: '#8b8b9a',
    fontSize: '0.95rem',
    textDecoration: 'none',
    transition: 'color 0.25s',
  },
  infoRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    marginBottom: '1.25rem',
  },
  infoText: {
    color: '#8b8b9a',
    fontSize: '0.9rem',
    lineHeight: '1.55',
  },
  // SEO Links
  seoFooter: {
    borderTop: '1px solid rgba(255,255,255,0.06)',
    paddingTop: '2.5rem',
    marginBottom: '2.5rem',
  },
  seoTitle: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: '#ffffff',
    fontWeight: '700',
    marginBottom: '0.75rem',
  },
  seoText: {
    fontSize: '0.82rem',
    color: '#555565',
    lineHeight: '1.75',
  },
  bottom: {
    borderTop: '1px solid rgba(255,255,255,0.06)',
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  bottomText: {
    color: '#555565',
    fontSize: '0.85rem',
  },
  creditsText: {
    color: '#444454',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
};


