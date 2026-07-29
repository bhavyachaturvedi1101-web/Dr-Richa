import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Calendar,
  Shield,
  Cpu,
  Activity,
  Award,
  Sparkles,
  Star,
  Heart,
  Smile,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';

/**
 * 3D Slot-Machine Text Roll + Liquid Hover Pill Button
 */
function NavPillButton({
  item,
  isActive,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  children,
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <Link
        to={item.path}
        onClick={onClick}
        style={{
          position: 'relative',
          padding: '0.45rem 1rem',
          borderRadius: '9999px',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
          cursor: 'pointer',
          zIndex: 2,
          outline: 'none',
          transition: 'color 0.25s ease',
        }}
      >
        {/* Active Route Pill Indicator Only */}
        {isActive && (
          <motion.div
            layoutId="navbarActivePill"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, var(--brand-surgical-blue), #0284c7)',
              borderRadius: '9999px',
              boxShadow: '0 4px 14px rgba(37, 151, 208, 0.28)',
              zIndex: -1,
            }}
            transition={{ type: 'spring', stiffness: 450, damping: 30 }}
          />
        )}

        <span
          style={{
            display: 'block',
            fontSize: '0.9rem',
            fontWeight: isActive ? '700' : '600',
            color: isActive
              ? '#ffffff'
              : isHovered
              ? 'var(--brand-surgical-blue)'
              : 'var(--neutral-ink)',
            whiteSpace: 'nowrap',
            transition: 'color 0.2s ease',
          }}
        >
          {item.name}
        </span>

        {children}
      </Link>
    </div>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setDropdownOpen(false);
  };

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
    { name: 'Contact', path: '/contact' },
  ];

  const treatments = [
    { name: 'Root Canal (RCT)', path: '/treatments#rct', icon: Activity, desc: 'Painless microscopic endodontics' },
    { name: 'Dental Implants', path: '/treatments#implants', icon: Cpu, desc: 'Permanent bio-compatible replacements' },
    { name: 'Crowns & Bridges', path: '/treatments#crowns', icon: Award, desc: 'Premium ceramic and zirconia caps' },
    { name: 'Gum Therapy', path: '/treatments#gum', icon: Shield, desc: 'Scaling and laser bleeding gum cure' },
    { name: 'Orthodontics', path: '/treatments#ortho', icon: Smile, desc: 'Clear aligners and traditional braces' },
    { name: 'Teeth Whitening', path: '/treatments#whitening', icon: Sparkles, desc: 'Professional cosmetic bleaching' },
    { name: 'Restoration / Filling', path: '/treatments#restoration', icon: Shield, desc: 'Composite tooth-colored fillings' },
    { name: 'Smile Designing', path: '/treatments#smile', icon: Smile, desc: 'Comprehensive aesthetic smile planning' },
    { name: 'Extraction', path: '/treatments#extraction', icon: X, desc: 'Safe, gentle, aseptic tooth removal' },
    { name: 'Dental Jewellery', path: '/treatments#jewellery', icon: Star, desc: 'Sparkling premium tooth accessories' },
    { name: 'Pedodontics', path: '/treatments#pedodontics', icon: Heart, desc: 'Kid-friendly cavity prevention care' },
  ];

  const isHomePage = location.pathname === '/';
  const showSolidNav = !isHomePage || isScrolled;

  const navBg = showSolidNav
    ? 'rgba(255, 255, 255, 0.94)'
    : 'rgba(255, 255, 255, 0.82)';

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        pointerEvents: 'none',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        .dropdown-item-hover:hover {
          background-color: rgba(37, 151, 208, 0.05) !important;
        }
        .cta-shimmer-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, var(--brand-surgical-blue), #0284c7);
          color: #ffffff !important;
          padding: 0.55rem 1.35rem;
          border-radius: 9999px;
          font-weight: 800;
          font-size: 0.88rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 6px 20px rgba(2, 132, 199, 0.35);
          border: 1px solid rgba(255, 255, 255, 0.25);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cta-shimmer-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(2, 132, 199, 0.45);
        }
        @media (max-width: 1024px) {
          .nav-capsule-container {
            width: 100% !important;
            max-width: 100% !important;
          }
        }
      `}} />

      {/* Full-Width Rectangle Glassmorphism Navbar */}
      <motion.nav
        className="nav-capsule-container"
        style={{
          pointerEvents: 'auto',
          width: '100%',
          backgroundColor: navBg,
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(226, 232, 240, 0.85)',
          borderRadius: '0px',
          boxShadow: showSolidNav
            ? '0 10px 30px -5px rgba(0, 0, 0, 0.12)'
            : '0 4px 20px -5px rgba(0, 0, 0, 0.05)',
          padding: isScrolled ? '0.5rem 4%' : '0.7rem 4%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
          }}
          onClick={closeMenu}
        >
          <motion.div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              flexShrink: 0,
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
          >
            <img
              src="/logo.svg"
              alt="Dental Speciality Centre Logo"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '0.98rem',
                fontWeight: '900',
                color: 'var(--neutral-ink)',
                letterSpacing: '-0.02em',
                lineHeight: '1.1',
              }}
            >
              Dental Speciality Centre
            </span>
            <span
              style={{
                fontSize: '0.6rem',
                fontWeight: '800',
                letterSpacing: '0.12em',
                color: 'var(--brand-surgical-blue)',
                textTransform: 'uppercase',
              }}
            >
              DR. RICHA TIWARI VYAS
            </span>
          </div>
        </Link>

        {/* Desktop Interactive Pill Dock Links */}
        <div
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            position: 'relative',
          }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const isHovered = hoveredLink === link.name;

            if (link.name === 'Treatments') {
              return (
                <div
                  key={link.name}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => {
                    setHoveredLink(link.name);
                    setDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredLink(null);
                    setDropdownOpen(false);
                  }}
                >
                  <NavPillButton
                    item={link}
                    isActive={isActive}
                    isHovered={isHovered}
                    onClick={closeMenu}
                  >
                    <motion.div
                      animate={{ rotate: dropdownOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown
                        size={14}
                        color={isActive && !isHovered ? '#ffffff' : 'var(--neutral-ink)'}
                      />
                    </motion.div>
                  </NavPillButton>

                  {/* Treatments Luxury Dropdown Card */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        style={{
                          position: 'absolute',
                          top: '120%',
                          left: '-180px',
                          width: '640px',
                          backgroundColor: '#ffffff',
                          borderRadius: '24px',
                          boxShadow: '0 25px 60px rgba(0,0,0,0.16)',
                          border: '1px solid #e2e8f0',
                          padding: '1.25rem',
                          zIndex: 2000,
                        }}
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '6px',
                          }}
                        >
                          {treatments.map((t) => {
                            const IconComp = t.icon;
                            return (
                              <Link
                                key={t.name}
                                to={t.path}
                                onClick={closeMenu}
                                className="dropdown-item-hover"
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '12px',
                                  padding: '0.65rem 0.85rem',
                                  borderRadius: '14px',
                                  textDecoration: 'none',
                                  transition: 'background-color 0.2s',
                                }}
                              >
                                <div
                                  style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '10px',
                                    backgroundColor: 'rgba(56, 189, 248, 0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                  }}
                                >
                                  <IconComp size={17} color="var(--brand-surgical-blue)" />
                                </div>
                                <div>
                                  <div
                                    style={{
                                      fontSize: '0.85rem',
                                      fontWeight: '800',
                                      color: 'var(--neutral-ink)',
                                    }}
                                  >
                                    {t.name}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: '0.72rem',
                                      color: 'var(--neutral-charcoal)',
                                      marginTop: '1px',
                                    }}
                                  >
                                    {t.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                        <div
                          style={{
                            marginTop: '0.75rem',
                            paddingTop: '0.75rem',
                            borderTop: '1px solid #f1f5f9',
                            textAlign: 'center',
                          }}
                        >
                          <Link
                            to="/treatments"
                            onClick={closeMenu}
                            style={{
                              fontSize: '0.85rem',
                              fontWeight: '800',
                              color: 'var(--brand-surgical-blue)',
                              textDecoration: 'none',
                            }}
                          >
                            Explore All Specialized Treatments →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <NavPillButton
                key={link.name}
                item={link}
                isActive={isActive}
                isHovered={isHovered}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={closeMenu}
              />
            );
          })}
        </div>

        {/* Desktop Shimmer & Pulse CTA */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center' }}>
          <MagneticButton strength={0.3}>
            <Link to="/contact" className="cta-shimmer-btn">
              <Calendar size={16} />
              <span>Book Appointment</span>
              <ArrowUpRight size={16} />
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-nav"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--neutral-ink)',
          }}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </motion.nav>

      {/* Mobile Glass Drawer Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            style={{
              position: 'fixed',
              top: '80px',
              left: '4%',
              right: '4%',
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              border: '1px solid #e2e8f0',
              borderRadius: '28px',
              padding: '1.5rem',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.16)',
              zIndex: 999,
              pointerEvents: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={closeMenu}
                  style={{
                    padding: '0.85rem 1.25rem',
                    borderRadius: '16px',
                    fontSize: '1rem',
                    fontWeight: isActive ? '800' : '600',
                    color: isActive ? '#ffffff' : 'var(--neutral-ink)',
                    backgroundColor: isActive ? 'var(--brand-surgical-blue)' : 'transparent',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  {link.name}
                </Link>
              );
            })}

            <div style={{ marginTop: '0.75rem' }}>
              <Link
                to="/contact"
                onClick={closeMenu}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, var(--brand-surgical-blue), #0284c7)',
                  color: '#ffffff',
                  padding: '1rem',
                  borderRadius: '16px',
                  fontWeight: '800',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 20px rgba(2, 132, 199, 0.3)',
                }}
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
