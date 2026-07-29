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
      setIsScrolled(window.scrollY > 40);
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
    { name: 'About', path: '/about' },
    { name: 'Treatments', path: '/treatments' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Case Studies', path: '/case-studies' }
  ];

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

  const isHomePage = location.pathname === '/';

  return (
    <header style={{
      ...styles.navHeader,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(12, 35, 64, 0.06)' : 'none',
      boxShadow: isScrolled ? '0 10px 30px rgba(12,35,64,0.06)' : 'none',
    }}>
      <style dangerouslySetInnerHTML={{
        __html: `
        .dropdown-item-hover:hover {
          background-color: rgba(14, 165, 233, 0.08) !important;
        }
        .pill-nav-link {
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 600;
          color: #334155;
          padding: 6px 14px;
          border-radius: 999px;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .pill-nav-link:hover {
          color: #0c2340 !important;
          background-color: rgba(255, 255, 255, 0.9);
        }
        .pill-nav-link.active-pill {
          background-color: #fdfbf7 !important;
          color: #0c2340 !important;
          box-shadow: 0 2px 10px rgba(12, 35, 64, 0.08);
          font-weight: 700 !important;
        }
      `}} />
      
      <div style={styles.container}>

        {/* Left Side: Brand Title & Logo (Matching Reference Image "auriex" position) */}
        <Link 
          to="/" 
          style={{
            ...styles.logoWrapper, 
            backgroundColor: (!isHomePage && !isScrolled) ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            padding: (!isHomePage && !isScrolled) ? '4px 16px 4px 4px' : '0',
            borderRadius: (!isHomePage && !isScrolled) ? '50px' : '0'
          }} 
          onClick={closeMenu}
        >
          <motion.div
            style={styles.logoIconCircle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logo.svg" alt="Dental Speciality Centre Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </motion.div>
          <div style={styles.logoTextWrapper}>
            <span style={styles.logoTitleText}>Dental Speciality</span>
            <span style={styles.logoSubText}>DR. RICHA TIWARI VYAS</span>
          </div>
        </Link>

        {/* Center & Right: Floating Glass Navigation Pill (Matching Reference Navbar Layout) */}
        <div style={styles.floatingPillWrapper} className="desktop-nav">
          
          {/* Navigation Links inside Pill */}
          <div style={styles.pillLinksGroup}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              if (link.name === 'Treatments') {
                return (
                  <div
                    key={link.name}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={isActive ? 'pill-nav-link active-pill' : 'pill-nav-link'}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: dropdownOpen ? '#0ea5e9' : undefined
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
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
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
                                    <IconComp size={15} color="#0ea5e9" />
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
                  className={isActive ? 'pill-nav-link active-pill' : 'pill-nav-link'}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Pill Button inside Navbar (Matching Reference Image "Book a Session" Button) */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <Link to="/contact" style={styles.pillCtaButton}>
              <Calendar size={15} /> Book Appointment
            </Link>
          </motion.div>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          style={styles.hamburger}
          className="mobile-nav"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} color="#0c2340" />
          ) : (
            <Menu size={24} color="#0c2340" />
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
                    color: isActive ? '#0ea5e9' : '#0c2340',
                    fontWeight: isActive ? '700' : '500',
                    backgroundColor: isActive ? 'rgba(14,165,233,0.06)' : 'transparent'
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
            <div style={{ padding: '0.5rem 1rem', borderLeft: '3px solid #0ea5e9', margin: '0.5rem 1rem 0.25rem' }}>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#64748b', fontWeight: 'bold', letterSpacing: '0.05em' }}>Specialties</span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                {treatments.map((t) => (
                  <Link key={t.name} to={t.path} onClick={closeMenu} style={{ fontSize: '0.9rem', color: '#334155', textDecoration: 'none' }}>
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
    </header>
  );
}

const styles = {
  navHeader: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
    padding: '0.8rem 3.5vw 0.8rem 3.5vw',
    boxSizing: 'border-box',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none',
  },
  logoIconCircle: {
    width: '42px',
    height: '42px',
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdfbf7',
    boxShadow: '0 4px 12px rgba(12, 35, 64, 0.08)',
    flexShrink: 0,
  },
  logoTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoTitleText: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: '1.25rem',
    fontWeight: '700',
    letterSpacing: '-0.02em',
    color: '#0c2340',
    lineHeight: '1.1',
    whiteSpace: 'nowrap',
  },
  logoSubText: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '0.62rem',
    textTransform: 'uppercase',
    letterSpacing: '0.18em',
    color: '#0ea5e9',
    fontWeight: '800',
    marginTop: '2px',
  },
  // Floating glass pill housing links and right action button (Matching reference image)
  floatingPillWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.9)',
    borderRadius: '999px',
    padding: '7px 8px 7px 18px',
    boxShadow: '0 12px 35px rgba(12, 35, 64, 0.09)',
  },
  pillLinksGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.2rem',
  },
  pillCtaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    backgroundColor: '#0c2340',
    color: '#ffffff',
    padding: '0.65rem 1.4rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '0.88rem',
    textDecoration: 'none',
    boxShadow: '0 6px 18px rgba(12, 35, 64, 0.22)',
    whiteSpace: 'nowrap',
    transition: 'all 0.25s ease',
  },
  dropdownCard: {
    position: 'absolute',
    top: 'calc(100% + 14px)',
    right: '-80px',
    width: '640px',
    backgroundColor: '#fdfbf7',
    borderRadius: '24px',
    padding: '1.2rem',
    boxShadow: '0 20px 50px rgba(12,35,64,0.14)',
    border: '1px solid rgba(14,165,233,0.15)',
    zIndex: 1020,
  },
  dropdownGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4px',
  },
  dropdownItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '0.55rem 0.75rem',
    borderRadius: '12px',
    textDecoration: 'none',
    transition: 'background-color 0.2s',
  },
  dropdownIconWrapper: {
    width: '28px',
    height: '28px',
    borderRadius: '8px',
    backgroundColor: 'rgba(14,165,233,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  dropdownItemTitle: {
    fontSize: '0.82rem',
    fontWeight: '700',
    color: '#0c2340',
  },
  dropdownItemDesc: {
    fontSize: '0.68rem',
    color: '#64748b',
    marginTop: '1px',
  },
  dropdownFooter: {
    marginTop: '0.5rem',
    paddingTop: '0.7rem',
    borderTop: '1px solid rgba(0,0,0,0.05)',
    textAlign: 'center',
  },
  allServicesLink: {
    fontSize: '0.82rem',
    fontWeight: '700',
    color: '#0ea5e9',
    textDecoration: 'none',
  },
  hamburger: {
    display: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid rgba(255,255,255,0.9)',
    cursor: 'pointer',
    padding: '0.5rem',
    borderRadius: '999px',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 12px rgba(12,35,64,0.08)',
  },
  mobileMenu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fdfbf7',
    borderRadius: '20px',
    marginTop: '0.75rem',
    padding: '1rem 0',
    maxHeight: '80vh',
    overflowY: 'auto',
    boxShadow: '0 12px 35px rgba(12,35,64,0.12)',
    border: '1px solid rgba(14,165,233,0.15)',
  },
  mobileLink: {
    padding: '0.75rem 2rem',
    fontSize: '0.98rem',
    textDecoration: 'none',
    transition: 'all 0.2s',
  },
  mobileCta: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    margin: '1rem 2rem 0.5rem',
    backgroundColor: '#0c2340',
    color: '#ffffff',
    padding: '0.85rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '0.95rem',
    textAlign: 'center',
    textDecoration: 'none',
    boxShadow: '0 6px 18px rgba(12, 35, 64, 0.25)',
  }
};


