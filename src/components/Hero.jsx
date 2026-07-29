import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Calendar, CheckCircle2, ArrowUpRight, Star } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section style={styles.hero}>
      {/* Gradient background */}
      <div style={styles.bgGradient} />

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
          {/* Main Headline */}
          <motion.h1 style={styles.title} variants={itemVariants} className="huge-title">
            Restore <span style={styles.accentUnderline}>Your True</span>{' '}
            <span style={styles.accentBlue}>Smile</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p style={styles.subtitle} variants={itemVariants}>
            Using <strong>advanced microscopic technology</strong>, we deliver comprehensive treatments for a healthy, confident smile — painlessly and precisely.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div style={styles.ctas} variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: '0 18px 38px rgba(56,189,248,0.35)' }}
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
                <Phone size={17} />
                Call Specialist
              </a>
            </motion.div>
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
            <span style={styles.statLabel}>Loyal dental<br />patients</span>
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
  blobTopRight: {
    position: 'absolute',
    top: '-120px',
    right: '-100px',
    width: '520px',
    height: '520px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(56,189,248,0.22) 0%, transparent 70%)',
    zIndex: 0,
  },
  blobBottomLeft: {
    position: 'absolute',
    bottom: '-80px',
    left: '-80px',
    width: '380px',
    height: '380px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
    zIndex: 0,
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
  eyebrowBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(255,255,255,0.75)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(14,165,233,0.3)',
    padding: '6px 18px',
    borderRadius: '999px',
    fontSize: '0.8rem',
    fontWeight: '700',
    color: '#0369a1',
    letterSpacing: '0.05em',
    alignSelf: 'flex-start',
    boxShadow: '0 4px 14px rgba(14,165,233,0.12)',
  },
  eyebrowDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#0ea5e9',
    boxShadow: '0 0 8px rgba(14,165,233,0.6)',
    display: 'inline-block',
    flexShrink: 0,
  },
  title: {
    fontSize: 'clamp(2.6rem, 5.5vw, 5rem)',
    fontWeight: '900',
    lineHeight: '1.05',
    letterSpacing: '-0.03em',
    color: '#0c2340',
    margin: 0,
  },
  accentUnderline: {
    position: 'relative',
    display: 'inline',
    color: '#0c2340',
    textDecoration: 'none',
  },
  accentBlue: {
    color: '#0ea5e9',
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
    gap: '9px',
    backgroundColor: 'rgba(255,255,255,0.7)',
    backdropFilter: 'blur(10px)',
    color: '#0c2340',
    padding: '0.95rem 2.2rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '0.95rem',
    textDecoration: 'none',
    border: '1px solid rgba(14,165,233,0.35)',
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
  pillRow: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'rgba(255,255,255,0.75)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(14,165,233,0.2)',
    padding: '5px 14px',
    borderRadius: '999px',
    fontSize: '0.78rem',
    fontWeight: '700',
    color: '#0369a1',
    boxShadow: '0 2px 8px rgba(14,165,233,0.08)',
  },
  // Right column
  imageCol: {
    flex: '1 1 420px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '480px',
  },
  toothImage: {
    width: '100%',
    maxWidth: '540px',
    height: 'auto',
    objectFit: 'contain',
    position: 'relative',
    zIndex: 2,
    filter: 'drop-shadow(0 40px 60px rgba(14,165,233,0.25))',
  },
  statCard: {
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
};
