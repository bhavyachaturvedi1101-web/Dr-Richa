import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smile } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        
        {/* Logo Section */}
        <Link to="/" style={styles.logoWrapper}>
          <div style={styles.logoIcon}>
            <Smile size={24} color="#ffffff" strokeWidth={2.5} />
          </div>
          <span style={styles.logoText}>Dr. Jain's Dental</span>
        </Link>

        {/* Links Section */}
        <div style={styles.links}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={link.name} 
                to={link.path} 
                style={{
                  ...styles.link, 
                  color: isActive ? 'var(--brand-surgical-blue)' : 'var(--neutral-charcoal)',
                  fontWeight: isActive ? '700' : '500',
                  borderBottom: isActive ? '2px solid var(--brand-surgical-blue)' : '2px solid transparent'
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Section (Optional but adds professional feel) */}
        <div style={styles.ctaWrapper}>
          <Link to="/contact" style={styles.ctaButton}>
            Book Appointment
          </Link>
        </div>

      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(12px)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    borderBottom: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
  },
  container: {
    maxWidth: '1440px', // Wider professional container
    margin: '0 auto',
    padding: '1.25rem 4%', // Dynamic wide padding
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none'
  },
  logoIcon: {
    backgroundColor: 'var(--brand-surgical-blue)',
    borderRadius: '10px',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(59, 130, 246, 0.2)'
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    letterSpacing: '-0.02em',
    whiteSpace: 'nowrap'
  },
  links: {
    display: 'flex',
    gap: '2.5rem',
    alignItems: 'center'
  },
  link: {
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    paddingBottom: '0.25rem'
  },
  ctaWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  ctaButton: {
    backgroundColor: 'var(--brand-surgical-blue)',
    color: '#ffffff',
    padding: '0.75rem 1.5rem',
    borderRadius: '999px',
    fontWeight: '600',
    fontSize: '0.95rem',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
    transition: 'transform 0.2s',
    whiteSpace: 'nowrap'
  }
};
