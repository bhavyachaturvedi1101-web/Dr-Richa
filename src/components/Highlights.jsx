import React from 'react';
import { Activity, Zap, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  { title: 'RCT (Root Canal)', image: '/rct_image.png' },
  { title: 'Laser Dentistry', image: '/laser_image.png' },
  { title: 'Ceramic Crowns & Bridges Fixing', image: '/crowns_image.png' },
  { title: '24 Hours Dental Emergency Services', image: '/emergency_image.png' },
];

export default function Highlights() {
  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        <motion.h2 
          style={styles.subtitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Highlights from the business
        </motion.h2>
        <div style={styles.highlightsGrid}>
          {highlights.map((highlight, idx) => (
            <motion.div 
              key={idx} 
              style={styles.highlightCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}
            >
              <div style={styles.cardImageWrapper}>
                <img src={highlight.image} alt={highlight.title} style={styles.cardImage} />
              </div>
              <h3 style={styles.highlightTitle}>{highlight.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'var(--neutral-cloud-gray)',
    padding: '4rem 3rem',
    borderRadius: '24px',
    border: '1px solid var(--neutral-sky-tint)',
    marginBottom: '4rem'
  },
  contentWrapper: {
    width: '100%'
  },
  subtitle: {
    fontSize: '2.5rem',
    color: 'var(--neutral-ink)',
    marginBottom: '3rem',
    letterSpacing: '-0.02em',
    fontWeight: '700',
    textAlign: 'center'
  },
  highlightsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '2rem'
  },
  highlightCard: {
    backgroundColor: 'var(--neutral-paper-white)',
    padding: '2rem 1.5rem',
    borderRadius: '16px',
    border: '1px solid var(--neutral-sky-tint)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
    cursor: 'default'
  },
  cardImageWrapper: {
    width: '100%',
    height: '140px',
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '0.5rem'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  highlightTitle: {
    fontSize: '1.125rem',
    color: 'var(--neutral-ink)',
    fontWeight: '600',
    margin: 0,
    lineHeight: '1.4'
  }
};
