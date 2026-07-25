import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section style={styles.heroSection} className="hero-section">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
        style={styles.content}
      >
        <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} style={styles.title} className="hero-title">
          Dr. Jain's Multi-speciality Dental and Polyclinic
        </motion.h1>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} style={styles.subtitle}>
          By Dr. Kapil Jain
        </motion.p>
        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} style={styles.description}>
          Experience painless, comprehensive dental care in a modern and clean environment. 
          Your smile is our priority.
        </motion.p>
        <motion.button 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={styles.cta}
        >
          Book Appointment
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
        style={styles.imageContainer}
      >
        <img src="/clinic_interior.png" alt="Modern Dental Clinic" style={styles.image} />
      </motion.div>
    </section>
  );
}

const styles = {
  heroSection: {
    background: 'var(--accent-sky-gradient)',
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
    gap: '4rem',
    flexWrap: 'wrap',
  },
  content: {
    flex: '1 1 400px',
    maxWidth: '600px',
  },
  title: {
    fontSize: '3.5rem',
    lineHeight: '1.1',
    color: 'var(--neutral-ink)',
    marginBottom: '1rem',
    fontFamily: 'var(--font-inter)',
    letterSpacing: '-0.04em',
    fontWeight: '600',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: 'var(--brand-surgical-blue)',
    marginBottom: '1.5rem',
    fontWeight: '500',
  },
  description: {
    fontSize: '1.125rem',
    color: 'var(--neutral-charcoal)',
    marginBottom: '2.5rem',
  },
  cta: {
    backgroundColor: 'var(--neutral-obsidian)',
    color: 'var(--neutral-paper-white)',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '9999px',
    fontSize: '1.125rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  },
  imageContainer: {
    flex: '1 1 400px',
    maxWidth: '600px',
    borderRadius: '18px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px var(--neutral-sky-tint)',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  }
};
