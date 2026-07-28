import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart } from 'lucide-react';

export default function AboutMinimal() {
  const textVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section style={styles.section} id="about">
      {/* Decorative blurred backgrounds */}
      <div style={styles.blurTop} />
      <div style={styles.blurBottom} />

      <div style={styles.container}>
        <div style={styles.grid}>

          {/* Left Column: Visual Capsules */}
          <div style={styles.visualCol}>
            <motion.div
              style={styles.capsuleWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/clinic_interior.png"
                alt="State-of-the-Art Dental Clinic"
                style={styles.mainImg}
              />
              <div style={styles.imgOverlay} />
            </motion.div>

            {/* Overlapping Reception capsule */}
            <motion.div
              style={styles.subCapsuleWrapper}
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/highlights.png"
                alt="Clinic Highlights"
                style={styles.subImg}
              />
            </motion.div>

            {/* Floating Glassmorphism Badge */}
            <motion.div
              style={styles.badge}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
              whileHover={{ y: -5 }}
            >
              <div style={styles.badgeInner}>
                <span style={styles.badgeNum}>9</span>
                <span style={styles.badgeText}>Years<br />Mastery</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Copywriting */}
          <motion.div
            style={styles.textCol}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.div style={styles.headerTag} variants={textVariants}>
              <div style={styles.tagLine} />
              <span style={styles.tagText}>Our Belief</span>
            </motion.div>

            <motion.h2 style={styles.heading} variants={textVariants}>
              Modern Tech, <br />Gentle <span style={styles.accentText}>Care.</span>
            </motion.h2>

            <motion.p style={styles.leadPara} variants={textVariants}>
              At <span style={styles.brandText}>Dental Speciality Centre</span>, we’ve stripped away the clinical coldness of traditional dentistry.
            </motion.p>

            <motion.p style={styles.bodyPara} variants={textVariants}>
              We believe medicine should feel like hospitality. Our sanctuary is designed for those who seek uncompromising specialized care and Indore's most serene, zero-anxiety atmosphere.
            </motion.p>

            {/* Features Row */}
            <motion.div style={styles.features} variants={textVariants}>
              <div style={styles.featureItem}>
                <div style={styles.featureLine} />
                <div style={styles.featureIcon}>
                  <Shield size={16} color="var(--brand-surgical-blue)" />
                </div>
                <h4 style={styles.featureTitle}>Elite Safety</h4>
                <p style={styles.featureDesc}>Hospital-grade sterilization following global clinical hygiene protocols.</p>
              </div>

              <div style={styles.featureItem}>
                <div style={styles.featureLine} />
                <div style={styles.featureIcon}>
                  <Heart size={16} color="var(--brand-surgical-blue)" />
                </div>
                <h4 style={styles.featureTitle}>Silent Tech</h4>
                <p style={styles.featureDesc}>Advanced low-noise equipment for a quiet, frictionless clinical experience.</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    padding: '7rem 0',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  blurTop: {
    position: 'absolute',
    top: '10%',
    right: '-10%',
    width: '45%',
    height: '45%',
    backgroundColor: 'rgba(37, 151, 208, 0.04)',
    borderRadius: '50%',
    filter: 'blur(120px)',
    pointerEvents: 'none',
  },
  blurBottom: {
    position: 'absolute',
    bottom: '-10%',
    left: '-10%',
    width: '35%',
    height: '35%',
    backgroundColor: 'rgba(16, 185, 129, 0.03)',
    borderRadius: '50%',
    filter: 'blur(120px)',
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2,
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    gap: '4.5rem',
    flexWrap: 'wrap',
  },
  visualCol: {
    flex: '1 1 500px',
    position: 'relative',
    height: '550px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  capsuleWrapper: {
    position: 'absolute',
    width: '70%',
    height: '90%',
    borderRadius: '160px',
    overflow: 'hidden',
    border: '1px solid rgba(0,0,0,0.04)',
    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.08)',
  },
  mainImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 60%)',
  },
  subCapsuleWrapper: {
    position: 'absolute',
    bottom: '5%',
    left: '2%',
    width: '45%',
    height: '30%',
    borderRadius: '40px',
    overflow: 'hidden',
    border: '5px solid #ffffff',
    boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
    zIndex: 10,
  },
  subImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  badge: {
    position: 'absolute',
    top: '12%',
    right: '2%',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.4)',
    borderRadius: '35px',
    padding: '1.25rem 2rem',
    boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
    zIndex: 10,
    cursor: 'default',
  },
  badgeInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  badgeNum: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--brand-surgical-blue)',
    lineHeight: 1,
  },
  badgeText: {
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: '0.2em',
    color: 'var(--neutral-charcoal)',
    marginTop: '4px',
    lineHeight: '1.2',
  },
  textCol: {
    flex: '1 1 450px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  headerTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  tagLine: {
    width: '40px',
    height: '2px',
    backgroundColor: 'var(--brand-surgical-blue)',
    opacity: 0.5,
  },
  tagText: {
    fontSize: '0.8rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    color: 'var(--brand-surgical-blue)',
  },
  heading: {
    fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
    color: 'var(--neutral-ink)',
    fontWeight: '800',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
  },
  accentText: {
    color: 'var(--brand-surgical-blue)',
  },
  leadPara: {
    fontSize: '1.25rem',
    color: 'var(--neutral-ink)',
    fontWeight: '600',
    lineHeight: '1.4',
  },
  brandText: {
    color: 'var(--brand-surgical-blue)',
    fontWeight: '700',
  },
  bodyPara: {
    fontSize: '1rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.7',
  },
  features: {
    display: 'flex',
    gap: '2rem',
    borderTop: '1px solid rgba(0,0,0,0.06)',
    paddingTop: '2rem',
    marginTop: '1rem',
    flexWrap: 'wrap',
  },
  featureItem: {
    flex: '1 1 200px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  featureLine: {
    width: '32px',
    height: '2px',
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginBottom: '0.25rem',
  },
  featureIcon: {
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    backgroundColor: 'var(--neutral-sky-tint)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.25rem',
  },
  featureTitle: {
    fontSize: '0.9rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--neutral-ink)',
  },
  featureDesc: {
    fontSize: '0.85rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.5',
  },
};
