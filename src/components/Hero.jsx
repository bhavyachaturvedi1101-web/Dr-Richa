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
    hidden: { opacity: 0, y: 30 },
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

      {/* Decorative blobs */}
      <div style={styles.blobTopRight} />
      <div style={styles.blobBottomLeft} />

      <div style={styles.outerContainer} className="responsive-flex-row">
        {/* LEFT: Text Content */}
        <motion.div
          style={styles.textCol}
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

          {/* Subtext */}
          <motion.p style={styles.subtitle} variants={itemVariants}>
            Using <strong>advanced microscopic technology</strong>, we deliver comprehensive treatments for a healthy, confident smile — painlessly and precisely.
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

          {/* Patient trust row */}
          <motion.div style={styles.trustRow} variants={itemVariants}>
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
          </motion.div>

          {/* Trust pills */}
          <motion.div style={styles.pillRow} variants={itemVariants}>
            {['ISO Certified Clinic', 'Painless Modern Care', 'Open 24 Hours'].map((label, i) => (
              <div key={i} style={styles.pill}>
                <CheckCircle2 size={13} color="#0ea5e9" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: Tooth Visual */}
        <motion.div
          style={styles.imageCol}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          {/* Stat card: 98% */}
          <motion.div
            style={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            <span style={styles.statNum}>98%</span>
            <span style={styles.statLabel}>Loyal dental<br/>patients</span>
          </motion.div>

          {/* Consultation ring */}
          <div style={styles.rotatingRing}>
            <svg viewBox="0 0 120 120" width="120" height="120">
              <defs>
                <path id="circle" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
              </defs>
              <text style={{ fontSize: '11.5px', fill: '#0f172a', fontWeight: '700', letterSpacing: '3px' }}>
                <textPath href="#circle">BOOK YOUR CONSULTATION • NOW •&nbsp;</textPath>
              </text>
            </svg>
            <div style={styles.ringArrow}>↗</div>
          </div>

          {/* Main tooth image */}
          <img
            src="/hero_tooth.png"
            alt="Restore Your Smile — Dr. Richa Tiwari"
            style={styles.toothImage}
          />
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'stretch',
    overflow: 'hidden',
    backgroundColor: '#e8f6fc',
  },
  bgGradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, #daf3fb 0%, #c5ecf8 35%, #b5e6f5 60%, #cef0e0 100%)',
    zIndex: 0,
  },
  overlayMain: {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.52)',
    zIndex: 1,
  },
  outerContainer: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '1320px',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6rem 5% 4rem',
    gap: '3rem',
    flexWrap: 'wrap',
  },
  textCol: {
    flex: '1 1 480px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.6rem',
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
    fontSize: 'clamp(2.6rem, 5.5vw, 5rem)',
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
    fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
    color: '#1e4b6a',
    lineHeight: '1.72',
    maxWidth: '540px',
    margin: 0,
  },
  ctas: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  ctaPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '9px',
    backgroundColor: '#0c2340',
    color: '#ffffff',
    padding: '0.95rem 2.2rem',
    borderRadius: '999px',
    fontWeight: '800',
    fontSize: '0.95rem',
    textDecoration: 'none',
    boxShadow: '0 12px 28px rgba(12,35,64,0.25)',
    transition: 'all 0.3s ease',
  },
  ctaSecondary: {
    display: 'inline-flex',
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
  trustRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  avatarGroup: {
    display: 'flex',
    alignItems: 'center',
  },
  avatarImg: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: '2.5px solid #ffffff',
    marginRight: '-10px',
    objectFit: 'cover',
    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
  },
  avatarCount: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#0ea5e9',
    color: '#ffffff',
    fontSize: '0.65rem',
    fontWeight: '900',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2.5px solid #ffffff',
    marginLeft: '4px',
    boxShadow: '0 2px 8px rgba(14,165,233,0.3)',
  },
  trustLabel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  trustRating: {
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
  },
  trustText: {
    fontSize: '0.78rem',
    fontWeight: '600',
    color: '#1e4b6a',
  },
  scrollIndicator: {
    position: 'absolute',
    left: '-20px',
    bottom: '80px',
    zIndex: 4,
    backgroundColor: '#0c2340',
    color: '#ffffff',
    borderRadius: '24px',
    padding: '1rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
    boxShadow: '0 20px 40px rgba(12,35,64,0.3)',
    minWidth: '110px',
  },
  statNum: {
    fontSize: '2.2rem',
    fontWeight: '900',
    lineHeight: '1',
    color: '#38bdf8',
  },
  statLabel: {
    fontSize: '0.72rem',
    fontWeight: '600',
    color: 'rgba(255,255,255,0.75)',
    lineHeight: '1.4',
  },
  rotatingRing: {
    position: 'absolute',
    bottom: '40px',
    right: '20px',
    zIndex: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '120px',
    height: '120px',
    cursor: 'pointer',
    userSelect: 'none',
  },
  ringArrow: {
    position: 'absolute',
    fontSize: '1.4rem',
    fontWeight: '900',
    color: '#0c2340',
    lineHeight: 1,
  },
  waveSvg: {
    display: 'block',
    width: '100%',
    height: '40px',
  },
};
