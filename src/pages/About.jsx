import React from 'react';
import { motion } from 'framer-motion';

const quickInfo = [
  { label: 'Specialization', value: 'Dentist, Implantologist, Oral And Maxillofacial Surgeon' },
  { label: 'Qualification', value: 'BDS - Madhya Pradesh Medical Science University (2022)' },
  { label: 'Experience', value: '4 Years in Healthcare' },
  { label: 'Languages Spoken', value: 'English, Hindi' },
  { label: 'Registration', value: 'A-12354-Dental Council Of India' },
  { label: 'Consultation Fee', value: '₹ 100' },
  { label: 'Video Consultation', value: 'Available (₹ 100)' },
];

export default function About() {
  return (
    <section style={styles.section}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={styles.container}
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.title}
        >
          About Our Clinic
        </motion.h1>
        
        <div style={styles.content}>
          
          {/* Section 1: Meet Dr. Jain */}
          <div style={styles.splitBlock}>
            <motion.div 
              style={styles.imageWrapper}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/about_doc.png" alt="Dr. Kapil Jain Consulting" style={styles.image} />
            </motion.div>
            <motion.div 
              style={styles.textContent}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={styles.subtitle}>Meet Dr. Kapil Jain</h2>
              <p style={styles.text}>
                Dr. Kapil Jain is an experienced, polite, and highly professional dentist serving the Mandsaur community. 
                He believes in taking the time to explain every dental problem and the proposed treatment to patients, 
                ensuring they feel comfortable and informed. His gentle approach and dedication to patient care 
                make every visit a reassuring experience.
              </p>
            </motion.div>
          </div>

          {/* Section 2: Quick Information Banner */}
          <motion.div 
            style={styles.bannerBlock}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{...styles.subtitle, color: '#ffffff', textAlign: 'center'}}>Quick Information</h2>
            <div style={styles.quickInfoGrid}>
              {quickInfo.map((info, idx) => (
                <motion.div 
                  key={idx} 
                  style={styles.infoItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <span style={styles.infoLabel}>{info.label}</span>
                  <span style={styles.infoValue}>{info.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Section 3: Our Philosophy */}
          <div style={styles.splitBlockReverse}>
            <motion.div 
              style={styles.imageWrapper}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Reusing the highlights image since it was removed from the home page! */}
              <img src="/highlights.png" alt="Modern Dental Equipment" style={styles.image} />
            </motion.div>
            <motion.div 
              style={styles.textContent}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={styles.subtitle}>Our Philosophy</h2>
              <p style={styles.text}>
                We are dedicated to providing completely painless treatments. We never recommend unnecessary procedures or hidden charges. 
                Our clinic is equipped with modern, sterilized equipment to maintain the highest standards of hygiene and patient safety. 
                We want your visit to be comfortable, transparent, and relieving. Your trust is our greatest asset.
              </p>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    padding: '6rem 2rem',
    backgroundColor: 'var(--neutral-paper-white)',
    minHeight: '80vh'
  },
  container: {
    maxWidth: '1200px', // Widened to fit images
    margin: '0 auto',
  },
  title: {
    fontSize: '3.5rem',
    color: 'var(--neutral-ink)',
    marginBottom: '4rem',
    letterSpacing: '-0.04em',
    textAlign: 'center',
    fontWeight: '700'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6rem'
  },
  splitBlock: {
    display: 'flex',
    gap: '4rem',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  splitBlockReverse: {
    display: 'flex',
    gap: '4rem',
    alignItems: 'center',
    flexWrap: 'wrap-reverse' // Text on left on desktop, stacks correctly on mobile
  },
  imageWrapper: {
    flex: '1 1 400px',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: '100%',
    minHeight: '400px',
    objectFit: 'cover',
    display: 'block'
  },
  textContent: {
    flex: '1 1 400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  bannerBlock: {
    backgroundColor: 'var(--brand-surgical-blue)',
    padding: '4rem 3rem',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)'
  },
  subtitle: {
    fontSize: '2rem',
    color: 'var(--brand-surgical-blue)',
    marginBottom: '1.5rem',
    fontWeight: '700',
    letterSpacing: '-0.02em'
  },
  text: {
    fontSize: '1.15rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.7'
  },
  quickInfoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2.5rem',
    marginTop: '3rem'
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '1.5rem',
    borderRadius: '16px',
    backdropFilter: 'blur(10px)'
  },
  infoLabel: {
    fontSize: '0.85rem',
    color: 'rgba(255, 255, 255, 0.8)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  infoValue: {
    fontSize: '1.125rem',
    color: '#ffffff',
    fontWeight: '600'
  }
};
