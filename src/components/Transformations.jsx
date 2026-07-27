import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UserCheck, HeartHandshake, ShieldAlert } from 'lucide-react';

const cases = [
  {
    category: 'Geriatric Care · Tooth Extraction',
    title: 'Painless Geriatric Solution',
    desc: 'A successful and painless tooth extraction performed on an 80-year-old patient. With careful geriatric dental protocols, the procedure ensured minimal discomfort and rapid healing.',
    tag: 'Geriatric Care',
    icon: ShieldAlert
  },
  {
    category: 'Pediatric Care · Cavity Filling',
    title: 'Zero-Anxiety Child Restoration',
    desc: 'Gentle cavity sealing for a 6-year-old patient. Completed using positive reinforcement techniques, saving the baby tooth to preserve the vital permanent teeth alignment blueprint.',
    tag: 'Pediatric Care',
    icon: HeartHandshake
  },
  {
    category: 'Endodontics · Microscope RCT',
    title: 'Tooth Preservation Success',
    desc: 'Advanced microscopic root canal therapy to treat deep decay. Fully saved the natural tooth structure, avoiding extraction and restoring full biting strength.',
    tag: 'Tooth Preservation',
    icon: UserCheck
  }
];

export default function Transformations() {
  return (
    <section style={styles.section} id="transformations">
      <div style={styles.container}>
        
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.subtag}>Real Cases · Real Results</span>
          <h2 style={styles.heading}>Incredible Transformations.</h2>
          <p style={styles.subheading}>
            Explore actual clinical case logs documenting successful pain-free restorations and geriatric treatments.
          </p>
        </div>

        {/* Grid Cases */}
        <div style={styles.grid}>
          {cases.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={idx}
                style={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
              >
                <div style={styles.cardHeader}>
                  <div style={styles.iconBox}>
                    <Icon size={18} color="var(--brand-surgical-blue)" />
                  </div>
                  <span style={styles.tagText}>{c.tag}</span>
                </div>

                <div style={styles.cardContent}>
                  <span style={styles.categoryText}>{c.category}</span>
                  <h3 style={styles.caseTitle}>"{c.title}"</h3>
                  <p style={styles.caseDesc}>{c.desc}</p>
                </div>

                <div style={styles.cardFooter}>
                  <div style={styles.line} />
                  <span style={styles.footerLink}>
                    View Case Study Details <ArrowRight size={12} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '7rem 0',
    backgroundColor: '#ffffff',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '5.5rem',
  },
  subtag: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    color: 'var(--brand-surgical-blue)',
    fontWeight: '700',
    display: 'block',
    marginBottom: '0.75rem',
  },
  heading: {
    fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
    color: 'var(--neutral-ink)',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    marginBottom: '1rem',
  },
  subheading: {
    fontSize: '1.1rem',
    color: 'var(--neutral-charcoal)',
    maxWidth: '560px',
    margin: '0 auto',
    lineHeight: '1.7',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#f8fbfe',
    border: '1px solid #dbeef9',
    borderRadius: '24px',
    padding: '2.25rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '340px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBox: {
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    backgroundColor: '#e0f2fe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--brand-surgical-blue)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  cardContent: {
    margin: '2rem 0 1.5rem',
  },
  categoryText: {
    fontSize: '0.8rem',
    color: 'var(--neutral-slate)',
    fontWeight: '600',
    display: 'block',
    marginBottom: '0.5rem',
  },
  caseTitle: {
    fontSize: '1.35rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    marginBottom: '0.75rem',
    letterSpacing: '-0.01em',
  },
  caseDesc: {
    fontSize: '0.92rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.65',
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  line: {
    height: '1px',
    backgroundColor: '#dbeef9',
    width: '100%',
  },
  footerLink: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--neutral-ink)',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
};
