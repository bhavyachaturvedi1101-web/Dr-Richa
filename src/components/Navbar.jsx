import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Smile, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        
        {/* Logo Section */}
        <Link to="/" style={styles.logoWrapper} onClick={closeMenu}>
          <div style={styles.logoIcon}>
            <Smile size={24} color="#ffffff" strokeWidth={2.5} />
          </div>
          <span style={styles.logoText}>Dr. Jain's Dental</span>
        </Link>

        {/* Desktop Links */}
        <div style={styles.links} className="desktop-nav">
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

        {/* Desktop CTA */}
        <div style={styles.ctaWrapper} className="desktop-nav">
          <Link to="/contact" style={styles.ctaButton}>
            Book Appointment
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={toggleMenu} 
          style={styles.hamburger}
          className="mobile-nav"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} color="var(--neutral-ink)" /> : <Menu size={26} color="var(--neutral-ink)" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            style={styles.mobileMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  style={{
                    ...styles.mobileLink,
                    color: isActive ? 'var(--brand-surgical-blue)' : 'var(--neutral-ink)',
                    fontWeight: isActive ? '700' : '500',
                    backgroundColor: isActive ? 'var(--neutral-cloud-gray)' : 'transparent'
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link to="/contact" onClick={closeMenu} style={styles.mobileCta}>
              Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: 'rgba(255, 255, 255, 0.97)',
    backdropFilter: 'blur(12px)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
  },
  container: {
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '1.25rem 4%',
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
    boxShadow: '0 4px 10px rgba(59, 130, 246, 0.2)',
    flexShrink: 0
  },
  logoText: {
    fontSize: '1.3rem',
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
  },
  hamburger: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.25rem',
    borderRadius: '8px'
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: '1rem 1.5rem 1.5rem',
    borderTop: '1px solid var(--neutral-sky-tint)',
    gap: '0.25rem',
    boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
  },
  mobileLink: {
    padding: '0.85rem 1rem',
    borderRadius: '10px',
    fontSize: '1.05rem',
    transition: 'all 0.15s ease'
  },
  mobileCta: {
    marginTop: '0.75rem',
    backgroundColor: 'var(--brand-surgical-blue)',
    color: '#ffffff',
    padding: '1rem',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '1rem',
    textAlign: 'center'
  }
};
