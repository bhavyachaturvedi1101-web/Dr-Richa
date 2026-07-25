import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Smile } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.wave}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#07080a" />
        </svg>
      </div>
      <div style={styles.inner}>
        <div style={styles.grid} className="footer-container">
          {/* Brand */}
          <div style={styles.brand}>
            <div style={styles.logoRow}>
              <div style={styles.logoIcon}><Smile size={22} color="#fff" strokeWidth={2.5} /></div>
              <span style={styles.logoText}>Dr. Jain's Dental</span>
            </div>
            <p style={styles.tagline}>Providing excellent and painless dental care in Mandsaur since 2020.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={styles.colTitle}>Quick Links</h4>
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Services', to: '/services' },
              { label: 'Contact', to: '/contact' },
            ].map((l) => (
              <div key={l.label} style={{ marginBottom: '0.6rem' }}>
                <Link to={l.to} style={styles.navLink}>{l.label}</Link>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={styles.colTitle}>Contact</h4>
            <div style={styles.infoRow}><Phone size={16} color="var(--brand-surgical-blue)" /><span style={styles.infoText}>07947104543</span></div>
            <div style={styles.infoRow}><MapPin size={16} color="var(--brand-surgical-blue)" /><span style={styles.infoText}>173 Dhanmandi Jankupura, Mandsaur, Front Of Dhawaj Office</span></div>
            <div style={styles.infoRow}><Clock size={16} color="var(--brand-surgical-blue)" /><span style={styles.infoText}>Open 24 Hrs, Monday – Sunday</span></div>
          </div>
        </div>

        <div style={styles.bottom}>
          <p style={styles.bottomText}>© 2026 Dr. Jain's Multi-Speciality Dental and Polyclinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#07080a',
  },
  wave: {
    lineHeight: 0,
    backgroundColor: '#f8fbfe',
  },
  inner: {
    padding: '4rem 2rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  grid: {
    display: 'flex',
    gap: '4rem',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  brand: {
    flex: '1 1 280px',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1rem',
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
    fontSize: '0.95rem',
    lineHeight: '1.6',
  },
  colTitle: {
    color: '#ffffff',
    fontSize: '1rem',
    fontWeight: '700',
    marginBottom: '1.25rem',
    letterSpacing: '-0.01em',
  },
  navLink: {
    color: '#8b8b9a',
    fontSize: '0.95rem',
    textDecoration: 'none',
    transition: 'color 0.2s',
  },
  infoRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    marginBottom: '1rem',
  },
  infoText: {
    color: '#8b8b9a',
    fontSize: '0.9rem',
    lineHeight: '1.5',
  },
  bottom: {
    borderTop: '1px solid #1e1e2a',
    paddingTop: '1.5rem',
    textAlign: 'center',
  },
  bottomText: {
    color: '#555565',
    fontSize: '0.85rem',
  },
};
