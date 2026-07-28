import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Calendar, CheckCircle2, ChevronDown } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  // Parallax transformations for background and floating badges
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const words = ["A", "smile", "you're", "proud", "to", "show."];

  return (
    <section ref={heroRef} style={styles.hero}>
      {/* Background Container with Video loop & Parallax */}
      <motion.div style={{ ...styles.bgWrapper, y: bgY, opacity, willChange: 'transform, opacity' }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 1,
            opacity: 1
          }}
        >
          <source src="https://assets.mixkit.co/videos/39480/39480-720.mp4" type="video/mp4" />
        </video>
        <div style={styles.overlayMain} />
      </motion.div>

      {/* Hero Content Area */}
      <div style={styles.container}>
        <motion.div
          style={styles.content}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Staggered Word-by-Word Title Entrance */}
          <h1 style={styles.title} aria-label="A smile you're proud to show.">
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 28, scale: 0.96 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                style={{
                  display: 'inline-block',
                  marginRight: '0.28em',
                  color: word === 'proud' ? '#38bdf8' : '#ffffff',
                  willChange: 'transform, opacity'
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            style={styles.subtitle}
            variants={itemVariants}
          >
            Indore's trusted clinic for painless microscopic root canals, advanced laser therapies, and cosmetic smiles.
          </motion.p>

          <motion.div
            style={styles.ctas}
            className="hero-ctas"
            variants={itemVariants}
          >
            <MagneticButton strength={0.35}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" style={styles.ctaPrimary}>
                  <Calendar size={18} /> Book Appointment
                </Link>
              </motion.div>
            </MagneticButton>

            <MagneticButton strength={0.35}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="tel:6262178282" style={styles.ctaSecondary}>
                  <Phone size={18} /> Call Specialist
                </a>
              </motion.div>
            </MagneticButton>
          </motion.div>

          {/* Quick Trust Highlights matching reference */}
          <motion.div
            style={styles.trustBar}
            variants={itemVariants}
          >
            <div style={styles.trustItem}>
              <CheckCircle2 size={16} color="#ffffff" />
              <span style={styles.trustText}>5.0 Google Reviews</span>
            </div>
            <div style={styles.trustItem}>
              <CheckCircle2 size={16} color="#ffffff" />
              <span style={styles.trustText}>Painless Modern Care</span>
            </div>
            <div style={styles.trustItem}>
              <CheckCircle2 size={16} color="#ffffff" />
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
    backgroundColor: '#000000',
  },
  bgWrapper: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  overlayMain: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.52)',
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
    letterSpacing: '0.25em',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '700',
    marginBottom: '1.25rem',
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '0.35rem 1rem',
    borderRadius: '999px',
    backdropFilter: 'blur(8px)',
  },
  title: {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: '900',
    lineHeight: '1.15',
    letterSpacing: '-0.02em',
    marginBottom: '1.5rem',
    color: '#ffffff',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: '1.7',
    maxWidth: '650px',
    marginBottom: '2.5rem',
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
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '0.9rem 2.2rem',
    borderRadius: '999px',
    fontWeight: '900',
    fontSize: '0.95rem',
    textDecoration: 'none',
    boxShadow: '0 15px 35px rgba(255, 255, 255, 0.25)',
    transition: 'all 0.3s ease',
  },
  ctaSecondary: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    color: '#ffffff',
    padding: '0.9rem 2.2rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '0.95rem',
    textDecoration: 'none',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.3s ease',
  },
  trustBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  trustText: {
    fontSize: '0.82rem',
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.9)'
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
  },
};
