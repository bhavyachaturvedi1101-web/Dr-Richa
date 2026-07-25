import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    tag: 'DIAGNOSTICS',
    title: 'Dental & Oral X-ray',
    desc: 'Advanced digital X-ray technology for accurate diagnosis — fast, safe, and low-radiation imaging to guide your treatment plan.',
    image: '/dental_service_1.jpg',
  },
  {
    tag: 'PREVENTIVE CARE',
    title: 'Teeth Cleaning & Polishing',
    desc: 'Professional ultrasonic scaling and polishing to remove plaque and tartar buildup, leaving your teeth feeling clean, fresh, and healthy.',
    image: '/dental_service_6.jpg',
  },
  {
    tag: 'RESTORATIVE CARE',
    title: 'Root Canal Treatment (RCT)',
    desc: 'Precise, painless root canal treatment to save your infected tooth — Dr. Richa Tiwari walks you through every step so you feel confident and calm.',
    image: '/rct_image.png',
  },
  {
    tag: 'ORTHODONTICS',
    title: 'Clear Aligners & Metal Braces',
    desc: 'Straighten your teeth and correct your bite with our range of orthodontic solutions, from traditional metal braces to invisible clear aligners.',
    image: '/dental_service_4.jpg',
  },
  {
    tag: 'SPECIALIZED CARE',
    title: 'Jaw Correction',
    desc: 'Advanced treatments for jaw alignment and TMJ disorders to improve function, alleviate pain, and enhance your facial profile.',
    image: '/dental_service_2.jpg',
  },
  {
    tag: 'SPECIALIZED CARE',
    title: 'Pediatric Dentistry',
    desc: 'Gentle, compassionate dental care tailored specifically for children to ensure their smiles grow healthy and strong from the very beginning.',
    image: '/dental_service_3.jpg',
  },
  {
    tag: 'EMERGENCY CARE',
    title: '24 Hours Dental Emergency',
    desc: 'We\'re available around the clock for dental emergencies. Toothache, broken tooth, swelling — immediate and compassionate care, anytime.',
    image: null,
    isEmergency: true,
  },
];

export default function Services() {
  return (
    <div style={{ backgroundColor: '#f8fbfe' }}>

      {/* ── HERO BANNER ── */}
      <section style={styles.heroBanner}>
        <div style={styles.overlay} />
        <motion.div
          style={styles.heroBannerContent}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.p style={styles.eyebrow} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>— OUR SERVICES</motion.p>
          <motion.h1 style={styles.heroTitle} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>Comprehensive Dental Services</motion.h1>
          <motion.p style={styles.heroSub} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>Everything your smile needs, backed by expertise and modern technology.</motion.p>
        </motion.div>
      </section>

      {/* ── SERVICES ROWS ── */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.rows}>
            {services.map((svc, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.row,
                  flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
                }}
                className="highlight-row"
              >
                {/* Image */}
                <motion.div 
                  style={styles.imageBox}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <span style={styles.badge}>0{idx + 1}</span>
                  {svc.isEmergency ? (
                    <div style={styles.emergencyCard}>
                      <div style={styles.emergencyInner}>
                        <span style={styles.emergencyNum} className="emergency-num">24/7</span>
                        <span style={styles.emergencyLabel}>Always Available</span>
                        <div style={styles.emergencyDots}>
                          <span style={styles.dot} />
                          <span style={styles.dot} />
                          <span style={styles.dot} />
                        </div>
                        <span style={styles.emergencyCall}>📞 Call Anytime</span>
                      </div>
                    </div>
                  ) : (
                    <img src={svc.image} alt={svc.title} style={styles.image} />
                  )}
                </motion.div>

                {/* Text */}
                <motion.div 
                  style={styles.textBox}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                  <p style={styles.tag}>— {svc.tag}</p>
                  <h2 style={styles.cardTitle}>{svc.title}</h2>
                  <p style={styles.desc}>{svc.desc}</p>
                  <Link to="/contact" style={styles.link}>Book this service →</Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <motion.section
        style={styles.ctaBanner}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={styles.ctaTitle}>Ready for a healthier smile?</h2>
        <p style={styles.ctaSub}>Book an appointment today to get started on your treatment.</p>
        <Link to="/contact" style={styles.ctaBtn}>Book Appointment →</Link>
      </motion.section>

    </div>
  );
}

const styles = {
  heroBanner: {
    position: 'relative',
    backgroundColor: '#0a2342',
    minHeight: '45vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,30,60,0.72), rgba(0,30,60,0.62))',
  },
  heroBannerContent: {
    position: 'relative',
    zIndex: 2,
    padding: '0 2rem',
  },
  eyebrow: {
    color: '#7dd3fa',
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: '0.75rem',
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
    fontWeight: '800',
    lineHeight: 1.15,
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
  },
  heroSub: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '1.1rem',
  },
  section: {
    padding: '6rem 2rem',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  rows: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6rem',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '5rem',
    flexWrap: 'wrap',
  },
  imageBox: {
    flex: '1 1 420px',
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(37,151,208,0.12)',
  },
  badge: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    zIndex: 2,
    backgroundColor: '#ffffff',
    color: 'var(--neutral-ink)',
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '800',
    fontSize: '1rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
  },
  image: {
    width: '100%',
    height: '360px',
    objectFit: 'cover',
    display: 'block',
  },
  textBox: {
    flex: '1 1 340px',
  },
  tag: {
    color: 'var(--brand-surgical-blue)',
    fontSize: '0.82rem',
    fontWeight: '700',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    marginBottom: '0.75rem',
  },
  cardTitle: {
    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
    color: 'var(--neutral-ink)',
    fontWeight: '700',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
  },
  desc: {
    fontSize: '1.05rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.75',
    marginBottom: '1.5rem',
  },
  link: {
    color: 'var(--brand-surgical-blue)',
    fontWeight: '700',
    fontSize: '1rem',
    textDecoration: 'none',
    borderBottom: '2px solid var(--brand-surgical-blue)',
    paddingBottom: '2px',
  },
  ctaBanner: {
    backgroundColor: 'var(--brand-surgical-blue)',
    padding: '5rem 2rem',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
    color: '#ffffff',
    fontWeight: '800',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
  },
  ctaSub: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '1.1rem',
    marginBottom: '2rem',
  },
  ctaBtn: {
    display: 'inline-block',
    backgroundColor: '#ffffff',
    color: 'var(--brand-surgical-blue)',
    padding: '1rem 2.5rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '1rem',
    textDecoration: 'none',
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
  },
  // 24/7 Emergency visual
  emergencyCard: {
    width: '100%',
    height: '360px',
    background: 'linear-gradient(135deg, #0c2d4e 0%, #1a5276 40%, #2597d0 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emergencyInner: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
  },
  emergencyNum: {
    fontSize: '7rem',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: 1,
    letterSpacing: '-0.04em',
    textShadow: '0 4px 30px rgba(0,0,0,0.3)',
  },
  emergencyLabel: {
    fontSize: '1.1rem',
    color: 'rgba(255,255,255,0.85)',
    fontWeight: '600',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
  },
  emergencyDots: {
    display: 'flex',
    gap: '0.5rem',
    margin: '0.5rem 0',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.5)',
    display: 'inline-block',
  },
  emergencyCall: {
    fontSize: '1rem',
    color: '#7dd3fa',
    fontWeight: '700',
    letterSpacing: '0.05em',
  },
};

