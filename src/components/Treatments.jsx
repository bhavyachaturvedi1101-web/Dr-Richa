import React from 'react';
import { motion } from 'framer-motion';

const treatments = [
  { title: 'RCT (Root Canal)', image: '/rct_image.png' },
  { title: 'Crowns And Bridges', image: '/crowns_image.png' },
  { title: 'Dental Implant Fixing', image: '/about_doc.png' },
  { title: 'Teeth Alignment via Braces', image: '/laser_image.png' },
  { title: 'Wisdom Tooth Extraction', image: '/highlights.png' }
];

export default function Treatments() {
  return (
    <section style={styles.section}>
      <motion.h2 
        style={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Treatments
      </motion.h2>
      <div style={styles.grid}>
        {treatments.map((treatment, index) => (
          <motion.div 
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
          >
            <div style={styles.imageWrapper}>
              <img src={treatment.image} alt={treatment.title} style={styles.image} />
            </div>
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>{treatment.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '6rem 2rem',
    backgroundColor: 'var(--neutral-cloud-gray)',
    textAlign: 'center',
    minHeight: '80vh'
  },
  heading: {
    fontSize: '3rem',
    color: 'var(--neutral-ink)',
    marginBottom: '4rem',
    letterSpacing: '-0.04em',
    fontWeight: '700'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'var(--neutral-paper-white)',
    borderRadius: '16px',
    border: '1px solid var(--neutral-sky-tint)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    textAlign: 'left'
  },
  imageWrapper: {
    width: '100%',
    height: '200px',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cardBody: {
    padding: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    color: 'var(--neutral-ink)',
    fontWeight: '600',
    margin: 0
  }
};
