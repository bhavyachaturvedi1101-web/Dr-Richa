import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Pinkesh Meena',
    text: 'My experience at Dr. Jain\'s Multi-Speciality Dental and Polyclinic was excellent. The doctors provided accurate diagnoses and communicated effectively.',
  },
  {
    name: 'Kasam',
    text: 'The place was clean and hygienic, which made me feel safe. They used sterilized equipment, so I knew it was safe for my treatment.',
  },
  {
    name: 'Hemant Ojha',
    text: 'The treatment I received was excellent, complemented by an accurate diagnosis from the skilled team. Highly recommend!',
  }
];

export default function Testimonials() {
  return (
    <section style={styles.section}>
      <motion.h2 
        style={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What Our Patients Say
      </motion.h2>
      <div style={styles.grid}>
        {reviews.map((review, index) => (
          <motion.div 
            key={index} 
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5, boxShadow: '0 20px 40px var(--neutral-sky-tint)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <p style={styles.text}>"{review.text}"</p>
            <p style={styles.name}>- {review.name}</p>
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
  },
  heading: {
    fontSize: '2.5rem',
    color: 'var(--neutral-ink)',
    marginBottom: '3rem',
    textAlign: 'center',
    letterSpacing: '-0.04em',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: 'var(--neutral-paper-white)',
    padding: '2.5rem',
    borderRadius: '18px',
    boxShadow: '0 10px 30px var(--neutral-sky-tint)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: '1.125rem',
    color: 'var(--neutral-charcoal)',
    marginBottom: '1.5rem',
    fontStyle: 'italic',
  },
  name: {
    fontSize: '1rem',
    color: 'var(--neutral-ink)',
    fontWeight: '600',
  }
};
