import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section style={styles.section}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={styles.container}
      >
        <h1 style={styles.title}>Contact Us</h1>
        <div style={styles.grid}>
          
          <div style={styles.card}>
            <h2 style={styles.subtitle}>Get In Touch</h2>
            <div style={styles.infoRow}>
              <Phone size={24} color="var(--brand-surgical-blue)" />
              <div>
                <p style={styles.label}>Phone</p>
                <p style={styles.text}>07947104543</p>
              </div>
            </div>
            <div style={styles.infoRow}>
              <MapPin size={24} color="var(--brand-surgical-blue)" />
              <div>
                <p style={styles.label}>Address</p>
                <p style={styles.text}>173 Dhanmandi Jankupura, Mandsaur, Front Of Dhawaj Office, 458002</p>
              </div>
            </div>
            <div style={styles.infoRow}>
              <Clock size={24} color="var(--brand-surgical-blue)" />
              <div>
                <p style={styles.label}>Hours</p>
                <p style={styles.text}>Open 24 Hrs, Monday - Sunday</p>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.subtitle}>Send a Message</h2>
            <form style={styles.form}>
              <input type="text" placeholder="Your Name" style={styles.input} />
              <input type="email" placeholder="Your Email" style={styles.input} />
              <textarea placeholder="How can we help you?" style={{...styles.input, minHeight: '120px'}}></textarea>
              <button type="button" style={styles.cta}>Submit Request</button>
            </form>
          </div>

        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    padding: '6rem 2rem',
    backgroundColor: 'var(--neutral-cloud-gray)',
    minHeight: '80vh'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '3rem',
    color: 'var(--neutral-ink)',
    marginBottom: '3rem',
    letterSpacing: '-0.04em',
    textAlign: 'center'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
  },
  card: {
    backgroundColor: 'var(--neutral-paper-white)',
    padding: '3rem',
    borderRadius: '18px',
    boxShadow: '0 20px 40px var(--neutral-sky-tint)',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: 'var(--neutral-ink)',
    marginBottom: '2rem'
  },
  infoRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '2rem'
  },
  label: {
    fontSize: '0.875rem',
    color: 'var(--neutral-slate)',
    marginBottom: '0.25rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em'
  },
  text: {
    fontSize: '1.125rem',
    color: 'var(--neutral-charcoal)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  input: {
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid var(--neutral-slate)',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    width: '100%'
  },
  cta: {
    backgroundColor: 'var(--neutral-obsidian)',
    color: 'var(--neutral-paper-white)',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '9999px',
    fontSize: '1.125rem',
    fontWeight: '500',
    cursor: 'pointer',
    marginTop: '1rem'
  }
};
