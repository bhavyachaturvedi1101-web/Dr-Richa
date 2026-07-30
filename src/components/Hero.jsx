import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Calendar, ArrowUpRight, Star, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section style={styles.heroSection} className="hero-section-responsive">
      {/* Outer Framed Hero Container */}
      <div style={styles.heroFrame} className="hero-frame-responsive">
        
        {/* Soft Ambient Pastel Glow Blobs */}
        <div style={styles.glowTopLeft} />
        <div style={styles.glowBottomLeft} />
        <div style={styles.glowTopRight} />

        {/* FULL HERO BACKGROUND IMAGE: Seamlessly blended female dentist examination photo on right */}
        <div style={styles.bgImageWrapper} className="hero-bg-wrapper-responsive">
          <img
            src="/female_dentist_hero_blend.png"
            alt="Dr. Richa Tiwari Vyas — Gentle Dental Care"
            style={styles.bgImage}
            className="hero-bg-image-responsive"
          />
          <div style={styles.bgOverlay} className="hero-bg-overlay-responsive" />
        </div>

        {/* Hero Card Inner Grid Layout */}
        <div style={styles.heroContainer} className="hero-container-responsive">
          
          {/* ALL CONTENT STACKED ON LEFT SIDE */}
          <motion.div
            style={styles.leftCol}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Mobile Badge - Expert Dental Care */}
            <motion.div className="hero-mobile-badge" variants={itemVariants}>
              <div className="hero-mobile-badge-icon">
                <ShieldCheck size={14} color="#ffffff" strokeWidth={3} />
              </div>
              <span className="hero-mobile-badge-text">EXPERT DENTAL CARE</span>
            </motion.div>

            {/* Main Headline - Positioned Upside at Top Left */}
            <motion.h1 style={styles.titleSerif} variants={itemVariants} className="hero-title-responsive">
              Gentle care,<br />
              genuine hearts,<br />
              confident <br className="mobile-only-br" /><span style={{ color: '#0ea5e9', position: 'relative', display: 'inline-block' }}>smiles.
                <svg className="hero-smile-svg" viewBox="0 0 100 20" style={{ overflow: 'visible' }}>
                  <path d="M5 5 Q 50 20 95 5" fill="none" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h1>

            {/* Subtitle Tagline */}
            <motion.p style={styles.titleTagline} className="hero-tagline-responsive" variants={itemVariants}>
              Restore <span style={{ color: '#0ea5e9' }}>Your True</span> Smile
            </motion.p>

            {/* Description Text */}
            <motion.p style={styles.subtitle} className="hero-desc-responsive" variants={itemVariants}>
              We surpass standard care to deliver a seamless, stress-free experience, prioritizing your comfort, confidence, and lasting oral wellness.
            </motion.p>

            <motion.p style={styles.subtitleSecondary} className="hero-desc-secondary-responsive" variants={itemVariants}>
              Using <strong>advanced microscopic technology</strong>, we deliver comprehensive treatments — painlessly and precisely.
            </motion.p>

            {/* Action Buttons */}
            <motion.div style={styles.ctas} variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: '0 18px 38px rgba(12,35,64,0.35)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Link to="/contact" style={styles.ctaPrimary}>
                  <Calendar size={17} />
                  Book Appointment
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <a href="tel:6262178282" style={styles.ctaSecondary}>
                  <Phone size={16} />
                  Call Specialist
                </a>
              </motion.div>
            </motion.div>

            {/* Patient Ratings */}
            <motion.div style={styles.trustWrapper} variants={itemVariants}>
              <div style={styles.trustRow}>
                <div style={styles.avatarGroup}>
                  {[
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80',
                    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80',
                    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80',
                  ].map((src, i) => (
                    <img key={i} src={src} alt="Patient" style={{ ...styles.avatarImg, zIndex: 3 - i }} />
                  ))}
                  <div style={styles.avatarCount}>+2k</div>
                </div>
                <div style={styles.trustLabel}>
                  <div style={styles.trustRating}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <span style={styles.trustText}>Over 4,000+ loyal dental patients</span>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

const styles = {
  heroSection: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: '#f4f9fc',
    padding: '65px 2vw 2vw 2vw',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroFrame: {
    position: 'relative',
    width: '100%',
    maxWidth: '1440px',
    minHeight: 'calc(100vh - 85px)',
    borderRadius: '32px',
    overflow: 'hidden',
    backgroundColor: '#e6f3f7',
    background: 'linear-gradient(145deg, #dceef4 0%, #e2f4f8 40%, #e4f5ed 75%, #ebebc4 100%)',
    boxShadow: '0 25px 60px -15px rgba(12,35,64,0.12), 0 0 0 1px rgba(255,255,255,0.7) inset',
    display: 'flex',
    alignItems: 'center',
  },
  glowTopLeft: {
    position: 'absolute',
    top: '-80px',
    left: '-80px',
    width: '480px',
    height: '480px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(185, 230, 205, 0.75) 0%, rgba(185, 230, 205, 0) 70%)',
    pointerEvents: 'none',
    zIndex: 1,
  },
  glowBottomLeft: {
    position: 'absolute',
    bottom: '-100px',
    left: '-60px',
    width: '520px',
    height: '520px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(238, 236, 168, 0.85) 0%, rgba(238, 236, 168, 0) 70%)',
    pointerEvents: 'none',
    zIndex: 1,
  },
  glowTopRight: {
    position: 'absolute',
    top: '-60px',
    right: '-60px',
    width: '480px',
    height: '480px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(195, 235, 245, 0.8) 0%, rgba(195, 235, 245, 0) 70%)',
    pointerEvents: 'none',
    zIndex: 1,
  },
  bgImageWrapper: {
    position: 'absolute',
    inset: 0,
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    pointerEvents: 'none',
    overflow: 'hidden',
  },
  bgImage: {
    width: '70%',
    maxWidth: '1100px',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 15%',
    opacity: 0.95,
    WebkitMaskImage: 'radial-gradient(ellipse 85% 95% at 75% 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 92%)',
    maskImage: 'radial-gradient(ellipse 85% 95% at 75% 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 92%)',
    filter: 'contrast(1.02) brightness(1.02)',
  },
  bgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, rgba(226, 244, 248, 0.94) 0%, rgba(226, 244, 248, 0.55) 45%, transparent 100%)',
    pointerEvents: 'none',
  },
  heroContainer: {
    position: 'relative',
    zIndex: 3,
    width: '100%',
    padding: '2.5rem 3.5rem',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.9rem',
    maxWidth: '580px',
  },
  titleSerif: {
    fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontSize: 'clamp(2.6rem, 5.2vw, 4.8rem)',
    fontWeight: '800',
    lineHeight: '1.06',
    letterSpacing: '-0.035em',
    color: '#151515',
    margin: 0,
  },
  titleTagline: {
    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
    fontSize: 'clamp(1rem, 1.35vw, 1.15rem)',
    fontWeight: '700',
    color: '#1a3854',
    margin: 0,
    letterSpacing: '0.01em',
  },
  subtitle: {
    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
    fontSize: 'clamp(0.95rem, 1.25vw, 1.08rem)',
    fontWeight: '500',
    lineHeight: '1.65',
    color: '#0c2340',
    margin: '0.2rem 0 0 0',
    letterSpacing: '-0.01em',
    maxWidth: '540px',
  },
  subtitleSecondary: {
    fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
    fontSize: '0.86rem',
    fontWeight: '400',
    lineHeight: '1.58',
    color: '#1e3a5f',
    margin: 0,
    maxWidth: '540px',
  },
  ctas: {
    display: 'flex',
    gap: '0.85rem',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: '0.3rem',
  },
  ctaPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#0c2340',
    color: '#ffffff',
    padding: '0.88rem 1.9rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '0.92rem',
    textDecoration: 'none',
    boxShadow: '0 10px 24px rgba(12,35,64,0.25)',
    transition: 'all 0.3s ease',
  },
  ctaSecondary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#fdfbf7',
    color: '#0c2340',
    padding: '0.88rem 1.7rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '0.92rem',
    textDecoration: 'none',
    border: '1px solid rgba(12,35,64,0.18)',
    boxShadow: '0 4px 12px rgba(12,35,64,0.06)',
    transition: 'all 0.3s ease',
  },
  trustWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    marginTop: '0.2rem',
    paddingTop: '1rem',
    borderTop: '1px solid rgba(12, 35, 64, 0.1)',
    maxWidth: '540px',
  },
  trustRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.85rem',
  },
  avatarGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  avatarImg: {
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    border: '2px solid #ffffff',
    marginRight: '-10px',
    objectFit: 'cover',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  },
  avatarCount: {
    width: '34px',
    height: '34px',
    borderRadius: '50%',
    backgroundColor: '#0ea5e9',
    color: '#ffffff',
    fontSize: '0.65rem',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #ffffff',
    marginLeft: '4px',
    boxShadow: '0 2px 6px rgba(14,165,233,0.3)',
  },
  trustLabel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  trustRating: {
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
  },
  trustText: {
    fontSize: '0.76rem',
    fontWeight: '700',
    color: '#0c2340',
  },
};
