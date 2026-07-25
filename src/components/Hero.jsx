import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Calendar, Star, CheckCircle2, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <>
      {/* ── HERO: full-screen with overlay ── */}
      <section style={styles.hero}>
        <img src="/clinic_interior.png" alt="Dr. Jain's Dental Clinic" style={styles.bgImage} />
        <div style={styles.overlay} />

        <motion.div
          style={styles.content}
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p
            style={styles.eyebrow}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          >
            — Mandsaur · Est. Local Practice
          </motion.p>

          <motion.h1
            style={styles.title}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            Gentle care for a smile<br />
            you're <span style={styles.accent}>proud</span> to show.
          </motion.h1>

          <motion.p
            style={styles.subtitle}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            Dr. Jain's Multi-Speciality Dental and Polyclinic — Mandsaur's trusted neighbourhood dentist.
            Quality treatment, honest advice, and painless care.
          </motion.p>

          <motion.div
            style={styles.ctas}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <Link to="/contact" style={styles.ctaPrimary}>
              <Calendar size={18} /> Book Appointment
            </Link>
            <a href="tel:07947104543" style={styles.ctaSecondary}>
              <Phone size={18} /> Call Now
            </a>
          </motion.div>

          <motion.div
            style={styles.trustBar}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, delay: 0.5 } } }}
          >
            <span style={styles.trustItem}>
              <Star size={16} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
              <Star size={16} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
              <Star size={16} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
              <Star size={16} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
              <Star size={16} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
              &nbsp;4.5 on Google
            </span>
            <span style={styles.divider}>|</span>
            <span style={styles.trustItem}><CheckCircle2 size={16} /> Painless, modern care</span>
            <span style={styles.divider}>|</span>
            <span style={styles.trustItem}><Clock size={16} /> Open 24 Hrs</span>
          </motion.div>
        </motion.div>

        {/* Wave SVG divider */}
        <div style={styles.wave}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '80px' }}>
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={styles.statsBar}>
        <div style={styles.statsContainer} className="stats-grid">
          {[
            { num: '4+', label: 'Years of Experience' },
            { num: '24/7', label: 'Emergency Services' },
            { num: '₹100', label: 'Consultation Fee' },
            { num: '100%', label: 'Painless Treatment' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              style={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span style={styles.statNum}>{stat.num}</span>
              <span style={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

const styles = {
  hero: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  bgImage: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,30,60,0.65) 0%, rgba(0,30,60,0.55) 100%)',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '860px',
    padding: '0 2rem',
    paddingBottom: '80px',
  },
  eyebrow: {
    color: '#7dd3fa',
    fontSize: '0.95rem',
    fontWeight: '600',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
  },
  title: {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: '1.15',
    marginBottom: '1.5rem',
    letterSpacing: '-0.02em',
  },
  accent: {
    color: '#7dd3fa',
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: '1.15rem',
    color: 'rgba(255,255,255,0.85)',
    lineHeight: '1.7',
    marginBottom: '2.5rem',
    maxWidth: '600px',
    margin: '0 auto 2.5rem',
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
    gap: '0.5rem',
    backgroundColor: 'var(--brand-surgical-blue)',
    color: '#ffffff',
    padding: '0.9rem 2rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '1rem',
    textDecoration: 'none',
    boxShadow: '0 4px 20px rgba(37,151,208,0.4)',
  },
  ctaSecondary: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(10px)',
    color: '#ffffff',
    padding: '0.9rem 2rem',
    borderRadius: '999px',
    fontWeight: '600',
    fontSize: '1rem',
    textDecoration: 'none',
    border: '1px solid rgba(255,255,255,0.3)',
  },
  trustBar: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '1rem',
  },
  trustItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    color: 'rgba(255,255,255,0.9)',
    fontSize: '0.9rem',
    fontWeight: '500',
  },
  divider: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: '1rem',
  },
  wave: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    zIndex: 3,
  },
  // Stats bar
  statsBar: {
    backgroundColor: '#ffffff',
    padding: '3rem 2rem',
    borderBottom: '1px solid #e8f4fd',
  },
  statsContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '2rem',
    textAlign: 'center',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
    alignItems: 'center',
  },
  statNum: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--brand-surgical-blue)',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: '0.9rem',
    color: 'var(--neutral-charcoal)',
    fontWeight: '500',
  },
};
