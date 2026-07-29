import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    name: 'Pinkesh Meena',
    tag: 'Verified Patient',
    text: 'My experience at Dental Speciality Centre was excellent. The doctors provided accurate diagnoses and communicated effectively throughout the painless procedure.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
  },
  {
    name: 'Kasam Khan',
    tag: 'Verified Patient',
    text: 'The place was clean and hygienic, which made me feel safe. They used 100% sterilized equipment, so I knew it was completely safe for my treatment.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
  },
  {
    name: 'Hemant Ojha',
    tag: 'Verified Patient',
    text: 'The treatment I received was excellent, complemented by an accurate diagnosis from Dr. Richa Tiwari. Highly recommend to anyone seeking root canals or cosmetic care!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
  }
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section style={styles.section} id="testimonials">
      <div style={styles.inner}>
        <motion.div 
          style={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.heading}>What Our Patients Say</h2>
          <p style={styles.subheading}>
            Real stories and heartfelt reviews from patients who experienced our zero-anxiety, pain-free dental care.
          </p>
        </motion.div>

        <motion.div 
          style={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              style={styles.card}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 25px 50px -12px rgba(37,151,208,0.18)',
                borderColor: 'rgba(56,189,248,0.35)' 
              }}
            >
              <div style={styles.cardTop}>
                <Quote size={28} color="#38bdf8" style={{ opacity: 0.5 }} />
                <div style={styles.stars}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={15} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                  ))}
                </div>
              </div>

              <p style={styles.text}>"{review.text}"</p>

              <div style={styles.userRow}>
                <img src={review.avatar} alt={review.name} style={styles.avatar} />
                <div>
                  <h4 style={styles.name}>{review.name}</h4>
                  <div style={styles.verifyTag}>
                    <CheckCircle2 size={12} color="#10b981" />
                    <span>{review.tag}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '7.5rem 2rem',
    backgroundColor: '#fdfbf7',
    position: 'relative',
    overflow: 'hidden',
  },
  inner: {
    maxWidth: '1240px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pillTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    border: '1px solid rgba(245, 158, 11, 0.25)',
    color: '#d97706',
    fontSize: '0.78rem',
    fontWeight: '800',
    letterSpacing: '0.2em',
    padding: '6px 16px',
    borderRadius: '999px',
    marginBottom: '1.25rem',
  },
  heading: {
    fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)',
    color: 'var(--neutral-ink)',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    marginBottom: '1rem',
  },
  subheading: {
    fontSize: '1.1rem',
    color: 'var(--neutral-charcoal)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.7',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2.25rem',
  },
  card: {
    backgroundColor: '#f8fbfe',
    padding: '2.25rem',
    borderRadius: '28px',
    border: '1px solid #dbeef9',
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.02)',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.25rem',
  },
  stars: {
    display: 'flex',
    gap: '3px',
  },
  text: {
    fontSize: '1.02rem',
    color: 'var(--neutral-ink)',
    lineHeight: '1.7',
    marginBottom: '2rem',
    fontStyle: 'italic',
    flexGrow: 1,
  },
  userRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    borderTop: '1px solid #dbeef9',
    paddingTop: '1.25rem',
  },
  avatar: {
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ffffff',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  },
  name: {
    fontSize: '1rem',
    color: 'var(--neutral-ink)',
    fontWeight: '800',
    marginBottom: '2px',
  },
  verifyTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '0.72rem',
    color: '#10b981',
    fontWeight: '700',
  }
};

