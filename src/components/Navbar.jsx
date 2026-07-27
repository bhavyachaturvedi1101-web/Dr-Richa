import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Calendar, Shield, Cpu, Activity, Award, Sparkles, Star, Heart, Smile } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' }
  ];

  // Treatments ordered row-by-row for a perfect 2-column layout mapping:
  // Row 1: Root Canal (RCT) | Dental Implants
  // Row 2: Crowns & Bridges | Gum Therapy
  // Row 3: Orthodontics | Teeth Whitening
  // Row 4: Restoration of Teeth / Filling | Smile Designing
  // Row 5: Extraction | Dental Jewellery
  // Row 6: Pedodontics / Child Dentistry
  const treatments = [
    { name: 'Root Canal (RCT)', path: '/treatments#rct', icon: Activity, desc: 'Painless microscopic endodontics' },
    { name: 'Dental Implants', path: '/treatments#implants', icon: Cpu, desc: 'Permanent bio-compatible replacements' },
    { name: 'Crowns & Bridges', path: '/treatments#crowns', icon: Award, desc: 'Premium ceramic and zirconia caps' },
    { name: 'Gum Therapy', path: '/treatments#gum', icon: Shield, desc: 'Scaling and laser bleeding gum cure' },
    { name: 'Orthodontics', path: '/treatments#ortho', icon: Smile, desc: 'Clear aligners and traditional braces' },
    { name: 'Teeth Whitening', path: '/treatments#whitening', icon: Sparkles, desc: 'Professional cosmetic bleaching' },
    { name: 'Restoration of Teeth / Filling', path: '/treatments#restoration', icon: Shield, desc: 'Composite tooth-colored fillings' },
    { name: 'Smile Designing', path: '/treatments#smile', icon: Smile, desc: 'Comprehensive aesthetic smile planning' },
    { name: 'Extraction', path: '/treatments#extraction', icon: X, desc: 'Safe, gentle, aseptic tooth removal' },
    { name: 'Dental Jewellery', path: '/treatments#jewellery', icon: Star, desc: 'Sparkling premium tooth accessories' },
    { name: 'Pedodontics / Child Dentistry', path: '/treatments#pedodontics', icon: Heart, desc: 'Kid-friendly cavity prevention care' }
  ];

  // Navbar color scheme: solid on subpages, scroll-responsive on homepage
  const isHomePage = location.pathname === '/';
  const showSolidNav = !isHomePage || isScrolled;

  const navBg = showSolidNav ? 'rgba(255, 255, 255, 0.98)' : 'rgba(7, 8, 10, 0.2)';
  const navBorder = showSolidNav ? '1px solid rgba(0,0,0,0.06)' : '1px solid rgba(255,255,255,0.08)';
  const navShadow = showSolidNav ? '0 10px 30px -10px rgba(0,0,0,0.08)' : 'none';
  const logoTextClr = showSolidNav ? 'var(--neutral-ink)' : '#ffffff';
  const linkTextClr = showSolidNav ? 'var(--neutral-charcoal)' : 'rgba(255,255,255,0.85)';

  return (
    <nav style={{
      ...styles.nav,
      backgroundColor: navBg,
      borderBottom: navBorder,
      boxShadow: navShadow,
    }}>
      <style dangerouslySetInnerHTML={{__html: `
        .dropdown-item-hover:hover {
          background-color: rgba(37, 151, 208, 0.04) !important;
        }
      `}} />
      <div style={styles.container}>
        
        {/* Logo Section */}
        <Link to="/" style={styles.logoWrapper} onClick={closeMenu}>
          <motion.div 
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              flexShrink: 0
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logo.svg" alt="Dental Speciality Centre Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </motion.div>
          <div style={styles.logoTextWrapper}>
            <span style={{ ...styles.logoText, color: logoTextClr }}>Dental Speciality Centre</span>
            <span style={styles.logoSub}>DR. RICHA TIWARI VYAS</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={styles.links} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            
            // Treatments dropdown integration
            if (link.name === 'Treatments') {
              return (
                <div 
                  key={link.name} 
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    style={{
                      ...styles.link,
                      color: dropdownOpen ? 'var(--brand-surgical-blue)' : linkTextClr,
                      fontWeight: isActive ? '700' : '500',
                      borderBottom: isActive ? '2px solid var(--brand-surgical-blue)' : '2px solid transparent',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      paddingBottom: '0.25rem'
                    }}
                  >
                    Treatments
                    <ChevronDown size={14} style={{
                      transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }} />
                  </button>

                  {/* Treatments Dropdown Card */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        style={styles.dropdownCard}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                      >
                        <div style={styles.dropdownGrid}>
                          {treatments.map((t) => {
                            const IconComp = t.icon;
                            return (
                              <Link
                                key={t.name}
                                to={t.path}
                                onClick={closeMenu}
                                className="dropdown-item-hover"
                                style={styles.dropdownItem}
                              >
                                <div style={styles.dropdownIconWrapper}>
                                  <IconComp size={16} color="var(--brand-surgical-blue)" />
                                </div>
                                <div>
                                  <div style={styles.dropdownItemTitle}>{t.name}</div>
                                  <div style={styles.dropdownItemDesc}>{t.desc}</div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <div style={styles.dropdownFooter}>
                          <Link to="/treatments" onClick={closeMenu} style={styles.allServicesLink}>
                            View All Specialized Treatments →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link 
                key={link.name} 
                to={link.path} 
                style={{
                  ...styles.link, 
                  color: isActive ? 'var(--brand-surgical-blue)' : linkTextClr,
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" style={styles.ctaButton}>
              <Calendar size={16} /> Book Appointment
            </Link>
          </motion.div>
        </div>

        {/* Mobile Hamburger */}
        <button 
          onClick={toggleMenu} 
          style={{
            ...styles.hamburger,
            backgroundColor: showSolidNav ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.1)'
          }}
          className="mobile-nav"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} color={showSolidNav ? 'var(--neutral-ink)' : '#ffffff'} />
          ) : (
            <Menu size={24} color={showSolidNav ? 'var(--neutral-ink)' : '#ffffff'} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            style={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
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
            <div style={{ padding: '0.5rem 1rem', borderLeft: '3px solid var(--brand-surgical-blue)', margin: '0.5rem 1rem 0.25rem' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--neutral-slate)', fontWeight: 'bold', letterSpacing: '0.05em' }}>Specialties</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                {treatments.map((t) => (
                  <Link key={t.name} to={t.path} onClick={closeMenu} style={{ fontSize: '0.9rem', color: 'var(--neutral-charcoal)', textDecoration: 'none' }}>
                    • {t.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/contact" onClick={closeMenu} style={styles.mobileCta}>
              <Calendar size={18} /> Book Appointment
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    backdropFilter: 'blur(16px)',
  },
  container: {
    maxWidth: '1440px',
    margin: '0 auto',
    padding: '0.9rem 6%',
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
    borderRadius: '12px',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 14px rgba(37, 151, 208, 0.3)',
    flexShrink: 0
  },
  logoTextWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  logoText: {
    fontSize: '1.2rem',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    lineHeight: '1.1',
    whiteSpace: 'nowrap'
  },
  logoSub: {
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: 'var(--brand-surgical-blue)',
    fontWeight: '700',
    marginTop: '2px'
  },
  links: {
    display: 'flex',
    gap: '2.5rem',
    alignItems: 'center'
  },
  link: {
    fontSize: '0.95rem',
    transition: 'color 0.25s ease',
    textDecoration: 'none',
    paddingBottom: '0.25rem'
  },
  dropdownCard: {
    position: 'absolute',
    top: '100%',
    left: '-20px',
    width: '680px',
    backgroundColor: '#f0f7fd',
    borderRadius: '24px',
    padding: '1.25rem',
    boxShadow: '0 20px 45px rgba(37,151,208,0.08)',
    border: '1px solid #cce3f5',
    marginTop: '0.8rem',
    zIndex: 1010
  },
  dropdownGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4px'
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '0.6rem 0.8rem',
    borderRadius: '12px',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
  },
  dropdownIconWrapper: {
    width: '28px',
    height: '28px',
    borderRadius: '6px',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  dropdownItemTitle: {
    fontSize: '0.82rem',
    fontWeight: '700',
    color: 'var(--neutral-ink)'
  },
  dropdownItemDesc: {
    fontSize: '0.7rem',
    color: 'var(--neutral-charcoal)',
    marginTop: '1px'
  },
  dropdownFooter: {
    marginTop: '0.5rem',
    paddingTop: '0.75rem',
    borderTop: '1px solid rgba(0,0,0,0.05)',
    textAlign: 'center'
  },
  allServicesLink: {
    fontSize: '0.82rem',
    fontWeight: '700',
    color: 'var(--brand-surgical-blue)',
    textDecoration: 'none'
  },
  ctaWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  ctaButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'var(--brand-surgical-blue)',
    color: '#ffffff',
    padding: '0.7rem 1.4rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '0.9rem',
    textDecoration: 'none',
    boxShadow: '0 4px 14px rgba(37, 151, 208, 0.3)',
    whiteSpace: 'nowrap'
  },
  hamburger: {
    display: 'none',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '10px',
    transition: 'background-color 0.2s'
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderTop: '1px solid rgba(0,0,0,0.06)',
    padding: '1rem 0',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
  },
  mobileLink: {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'all 0.2s'
  },
  mobileCta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    margin: '1rem 2rem 0.5rem',
    backgroundColor: 'var(--brand-surgical-blue)',
    color: '#ffffff',
    padding: '0.85rem',
    borderRadius: '12px',
    fontWeight: '700',
    fontSize: '0.95rem',
    textAlign: 'center',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(37, 151, 208, 0.2)'
  }
};

