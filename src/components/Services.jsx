import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: 'Dental & Oral X-ray', image: '/dental_service_1.jpg' },
  { title: 'Ultrasonic Teeth Cleaning', image: '/dental_service_2.jpg' },
  { title: 'Composite (Laser) Filing', image: '/dental_service_3.jpg' },
  { title: 'Advanced Preventive Care', image: '/dental_service_4.jpg' },
  { title: '24 Hours Emergency', image: '/dental_service_5.jpg' }
];

export default function Services() {
  return (
    <section style={styles.section}>
      <motion.h2 
        style={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Comprehensive Services
      </motion.h2>
      <div style={styles.grid}>
        {services.map((service, index) => (
          <motion.div 
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
          >
            <div style={styles.imageWrapper}>
              <img src={service.image} alt={service.title} style={styles.image} />
            </div>
            <div style={styles.cardBody}>
              <h3 style={styles.cardTitle}>{service.title}</h3>
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
    backgroundColor: 'var(--neutral-paper-white)',
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
    backgroundColor: 'var(--neutral-cloud-gray)',
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
