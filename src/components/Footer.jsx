import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container} className="footer-container">
        <div style={styles.column}>
          <h3 style={styles.title}>Dr. Jain's Dental & Polyclinic</h3>
          <p style={styles.text}>Providing excellent and painless dental care in Mandsaur.</p>
        </div>
        <div style={styles.column}>
          <h4 style={styles.subtitle}>Contact</h4>
          <div style={styles.infoRow}>
            <Phone size={20} color="var(--brand-surgical-blue)" />
            <span style={styles.text}>07947104543</span>
          </div>
          <div style={styles.infoRow}>
            <MapPin size={20} color="var(--brand-surgical-blue)" />
            <span style={styles.text}>173 Dhanmandi Jankupura, Mandsaur, Front Of Dhawaj Office</span>
          </div>
          <div style={styles.infoRow}>
            <Clock size={20} color="var(--brand-surgical-blue)" />
            <span style={styles.text}>Open 24 Hrs, Monday - Sunday</span>
          </div>
        </div>
      </div>
      <div style={styles.bottomBar}>
        <p style={styles.bottomText}>© 2026 Dr. Jain's Multi-speciality Dental and Polyclinic. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'var(--neutral-obsidian)',
    color: 'var(--neutral-paper-white)',
    paddingTop: '4rem',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4rem',
    justifyContent: 'space-between',
    marginBottom: '3rem',
  },
  column: {
    flex: '1 1 300px',
  },
  title: {
    fontSize: '1.5rem',
    color: 'var(--neutral-paper-white)',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '1.25rem',
    color: 'var(--neutral-paper-white)',
    marginBottom: '1.5rem',
  },
  text: {
    color: 'var(--neutral-slate)',
    lineHeight: '1.6',
  },
  infoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
  bottomBar: {
    borderTop: '1px solid var(--neutral-charcoal)',
    padding: '1.5rem 2rem',
    textAlign: 'center',
  },
  bottomText: {
    color: 'var(--neutral-slate)',
    fontSize: '0.875rem',
  }
};
