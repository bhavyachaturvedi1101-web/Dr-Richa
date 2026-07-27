import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Calendar, Star, CheckCircle2, Clock, ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section style={styles.hero}>
      {/* Background Container with Ken Burns effect */}
      <div style={styles.bgWrapper}>
        <motion.img 
          src="/clinic_interior.png" 
          alt="Dental Speciality Centre Interior" 
          style={styles.bgImage}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.85 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
        />
        {/* Modern dark gradient overlays */}
        <div style={styles.overlayMain} />
        <div style={styles.overlaySide} />
      </div>

      {/* Hero Content Area */}
      <div style={styles.container}>
        <motion.div
          style={styles.content}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span 
            style={styles.eyebrow}
            variants={itemVariants}
          >
            Indore, Madhya Pradesh
          </motion.span>
          
          <motion.h1 
            style={styles.title}
            variants={itemVariants}
          >
            Gentle care for a smile<br />
            you're <span style={styles.accent}>proud</span> to show.
          </motion.h1>

          <motion.p 
            style={styles.subtitle}
            variants={itemVariants}
          >
            Dental Speciality Centre — Indore's trusted neighborhood clinic. 
            Providing high-precision microscopic RCT, painless lasers, and absolute comfort.
          </motion.p>

          <motion.div 
            style={styles.ctas} 
            className="hero-ctas"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" style={styles.ctaPrimary}>
                <Calendar size={18} /> Book Appointment
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="tel:6262178282" style={styles.ctaSecondary}>
                <Phone size={18} /> Call Specialist
              </a>
            </motion.div>
          </motion.div>

          {/* Quick Trust Highlights */}
          <motion.div 
            style={styles.trustBar}
            variants={itemVariants}
          >
            <div style={styles.trustItem}>
              <div style={styles.starsWrapper}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
                ))}
              </div>
              <span style={styles.trustText}>5.0 on Google Review</span>
            </div>
            <span style={styles.divider}>•</span>
            <div style={styles.trustItem}>
              <CheckCircle2 size={16} color="var(--brand-surgical-blue)" />
              <span style={styles.trustText}>Painless Modern Care</span>
            </div>
            <span style={styles.divider}>•</span>
            <div style={styles.trustItem}>
              <Clock size={16} color="var(--brand-surgical-blue)" />
              <span style={styles.trustText}>Open 24 Hours</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Downward Arrow Scroll Indicator */}
      <motion.div 
        style={styles.scrollIndicator}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <ChevronDown size={28} color="#ffffff" style={{ opacity: 0.7 }} />
      </motion.div>

      {/* Bottom Wave SVG for smooth section merger */}
      <div style={styles.waveWrapper}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={styles.waveSvg}>
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#07080a',
  },
  bgWrapper: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  overlayMain: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(7, 8, 10, 0.75) 0%, rgba(7, 8, 10, 0.5) 50%, rgba(7, 8, 10, 0.85) 100%)',
    zIndex: 1,
  },
  overlaySide: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 80% 20%, rgba(37, 151, 208, 0.15) 0%, transparent 60%)',
    zIndex: 1,
  },
  container: {
    maxWidth: '1440px',
    width: '100%',
    margin: '0 auto',
    padding: '0 6%',
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    textAlign: 'center',
    maxWidth: '860px',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  eyebrow: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    color: 'var(--brand-surgical-blue)',
    fontWeight: '700',
    marginBottom: '1.25rem',
    display: 'inline-block',
    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
  },
  title: {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: '800',
    lineHeight: '1.15',
    letterSpacing: '-0.02em',
    marginBottom: '1.5rem',
    textShadow: '0 4px 20px rgba(0,0,0,0.6)'
  },
  accent: {
    color: 'var(--brand-surgical-blue)',
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: 'rgba(255, 255, 255, 0.85)',
    lineHeight: '1.7',
    maxWidth: '650px',
    marginBottom: '2.5rem',
    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
  },
  ctas: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '3rem',
  },
  ctaPrimary: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'var(--brand-surgical-blue)',
    color: '#ffffff',
    padding: '0.9rem 2.2rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '0.95rem',
    textDecoration: 'none',
    boxShadow: '0 6px 20px rgba(37, 151, 208, 0.4)',
    transition: 'all 0.3s ease',
  },
  ctaSecondary: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(12px)',
    color: '#ffffff',
    padding: '0.9rem 2.2rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '0.95rem',
    textDecoration: 'none',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
  },
  trustBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.25rem',
    flexWrap: 'wrap',
    padding: '0.75rem 1.5rem',
    borderRadius: '999px',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    border: '1px solid rgba(255, 255, 255, 0.06)',
    backdropFilter: 'blur(8px)',
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  starsWrapper: {
    display: 'flex',
    gap: '2px',
  },
  trustText: {
    fontSize: '0.82rem',
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.9)'
  },
  divider: {
    color: 'rgba(255, 255, 255, 0.2)',
    fontSize: '0.8rem',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '80px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    cursor: 'pointer',
  },
  waveWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 3,
    lineHeight: 0,
  },
  waveSvg: {
    display: 'block',
    width: '100%',
    height: '40px',
  }
};
