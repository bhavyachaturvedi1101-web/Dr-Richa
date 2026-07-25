import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const highlights = [
  {
    tag: 'RESTORATIVE CARE',
    title: 'RCT (Root Canal)',
    desc: 'Precise, painless root canal treatment to save your infected tooth — Dr. Jain walks you through every step so you feel confident and calm.',
    image: '/rct_image.png',
    link: '/services',
  },
  {
    tag: 'COSMETIC CARE',
    title: 'Laser Dentistry',
    desc: 'Advanced laser technology for fillings, gum care, and more — less pain, faster healing, and a more comfortable experience every visit.',
    image: '/laser_image.png',
    link: '/services',
  },
  {
    tag: 'RESTORATIVE CARE',
    title: 'Ceramic Crowns & Bridges',
    desc: 'Natural-looking ceramic crowns and bridges that restore function and aesthetics — crafted to match your existing teeth perfectly.',
    image: '/crowns_image.png',
    link: '/services',
  },
  {
    tag: 'EMERGENCY CARE',
    title: '24 Hour Dental Emergency',
    desc: 'Dental emergencies don\'t wait. We\'re available around the clock to provide immediate, compassionate care whenever you need it most.',
    image: '/emergency_image.png',
    link: '/contact',
  },
];

export default function Highlights() {
  return (
    <section style={styles.section}>
      <div style={styles.sectionHeader}>
        <motion.p
          style={styles.eyebrow}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          — HIGHLIGHTS FROM THE BUSINESS
        </motion.p>
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Everything your smile needs,<br />under one roof.
        </motion.h2>
        <motion.p
          style={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From routine care to advanced procedures — every treatment starts with an honest conversation.
        </motion.p>
      </div>

      <div style={styles.rows}>
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            style={{
              ...styles.row,
              flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
            }}
            className="highlight-row"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div style={styles.imageBox}>
              <span style={styles.badge}>0{idx + 1}</span>
              <img src={item.image} alt={item.title} style={styles.image} />
            </div>
            <div style={styles.textBox}>
              <p style={styles.tag}>— {item.tag}</p>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.desc}>{item.desc}</p>
              <Link to={item.link} style={styles.link}>Learn more →</Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '7rem 2rem',
    backgroundColor: '#f8fbfe',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'center',
    marginBottom: '5rem',
  },
  eyebrow: {
    color: 'var(--brand-surgical-blue)',
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  heading: {
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    color: 'var(--neutral-ink)',
    fontWeight: '700',
    lineHeight: '1.2',
    marginBottom: '1.25rem',
    letterSpacing: '-0.02em',
  },
  subheading: {
    fontSize: '1.1rem',
    color: 'var(--neutral-charcoal)',
    maxWidth: '540px',
    margin: '0 auto',
    lineHeight: '1.7',
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
    fontWeight: '700',
    fontSize: '1rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '380px',
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
  title: {
    fontSize: '2rem',
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
    fontWeight: '600',
    fontSize: '1rem',
    textDecoration: 'none',
    borderBottom: '1px solid var(--brand-surgical-blue)',
    paddingBottom: '2px',
  },
};
