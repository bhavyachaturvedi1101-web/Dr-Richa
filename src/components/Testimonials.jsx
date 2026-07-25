import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Pinkesh Meena',
    text: 'My experience at Dental Speciality Centre was excellent. The doctors provided accurate diagnoses and communicated effectively.',
    rating: 5,
  },
  {
    name: 'Kasam',
    text: 'The place was clean and hygienic, which made me feel safe. They used sterilized equipment, so I knew it was safe for my treatment.',
    rating: 5,
  },
  {
    name: 'Hemant Ojha',
    text: 'The treatment I received was excellent, complemented by an accurate diagnosis from the skilled team. Highly recommend!',
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <motion.p
          style={styles.eyebrow}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          — PATIENT REVIEWS
        </motion.p>
        <motion.h2
          style={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Patients Say
        </motion.h2>

        <div style={styles.grid} className="testimonials-grid">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              style={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(37,151,208,0.12)' }}
            >
              <Quote size={32} color="var(--brand-surgical-blue)" style={{ opacity: 0.3, marginBottom: '1rem' }} />
              <div style={styles.stars}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                ))}
              </div>
              <p style={styles.text}>"{review.text}"</p>
              <p style={styles.name}>— {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '7rem 2rem',
    backgroundColor: '#ffffff',
  },
  inner: {
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
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
    fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
    color: 'var(--neutral-ink)',
    fontWeight: '700',
    marginBottom: '3.5rem',
    letterSpacing: '-0.02em',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#f8fbfe',
    padding: '2.5rem',
    borderRadius: '20px',
    border: '1px solid #dbeef9',
    textAlign: 'left',
    cursor: 'default',
    transition: 'box-shadow 0.3s ease',
  },
  stars: {
    display: 'flex',
    gap: '3px',
    marginBottom: '1.25rem',
  },
  text: {
    fontSize: '1rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.75',
    marginBottom: '1.25rem',
    fontStyle: 'italic',
  },
  name: {
    fontSize: '0.95rem',
    color: 'var(--neutral-ink)',
    fontWeight: '700',
  },
};
