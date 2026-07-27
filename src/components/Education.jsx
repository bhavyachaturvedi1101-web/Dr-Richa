import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldAlert } from 'lucide-react';

const wellnessTips = [
  {
    num: '01',
    category: 'Circadian Rhythm',
    title: 'Persistence',
    desc: 'Brush twice daily using fluoride paste. Two minutes is the gold standard for clinical oral health.'
  },
  {
    num: '02',
    category: 'Interproximal Care',
    title: 'Depth',
    desc: 'Floss daily to reach the 35% of tooth surfaces your toothbrush bristles simply cannot touch.'
  },
  {
    num: '03',
    category: 'pH Neutralization',
    title: 'Balance',
    desc: 'Drink plenty of water. Adequate hydration neutralizes acidic plaque and prevents enamel erosion.'
  },
  {
    num: '04',
    category: 'Structural Integrity',
    title: 'Nutrition',
    desc: 'Focus on calcium-rich whole foods. Limiting direct sugars starves the cavity-causing bacteria.'
  },
  {
    num: '05',
    category: 'Tissue Preservation',
    title: 'Vitality',
    desc: 'Avoid tobacco products. It is the leading cause of early gum recession and oral malignancies.'
  },
  {
    num: '06',
    category: 'Predictive Analytics',
    title: 'Precision',
    desc: 'Semiannual clinical check-ups catch 90% of dental concerns before they manifest as severe pain.'
  }
];

const myths = [
  {
    myth: '"Wait for pain to visit a dentist."',
    fact: 'Prevention is Power',
    desc: 'Decay starts painlessly. Waiting for pain means the nerve is already infected, necessitating complex RCT.'
  },
  {
    myth: '"Root canals hurt."',
    fact: '100% Pain-Free Treatment',
    desc: 'Modern local anesthesia and quiet rotary systems ensure that Root Canals relieve pain, rather than causing it.'
  },
  {
    myth: '"Whiter teeth mean healthier teeth."',
    fact: 'Focus on Enamel Strength',
    desc: 'Natural teeth have a yellowish dentin layer showing through. Whiteness does not equal complete clinical health.'
  },
  {
    myth: '"Baby teeth do not matter."',
    fact: 'Vital Permanent Blueprint',
    desc: 'Baby teeth guide permanent teeth into place. Early tooth loss leads to major crowding and orthodontic issues.'
  }
];

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section style={styles.section} id="education">
      <div style={styles.container}>
        
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.subtag}>Learn From Us</span>
          <h2 style={styles.heading}>Your Dental Health.</h2>
          <p style={styles.subheading}>
            Curated clinical insights on maintaining dental structure, pH balance, and long-term oral wellness.
          </p>
        </div>

        {/* Tips Grid */}
        <motion.div 
          style={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {wellnessTips.map((tip, idx) => (
            <motion.div
              key={idx}
              style={styles.tipCard}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: 'rgba(37,151,208,0.2)' }}
            >
              <div style={styles.tipHeader}>
                <span style={styles.tipNum}>{tip.num}</span>
                <span style={styles.tipCategory}>{tip.category}</span>
              </div>
              <h3 style={styles.tipTitle}>{tip.title}</h3>
              <p style={styles.tipDesc}>{tip.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Myths vs Facts Subsection */}
        <div style={styles.mythsSection}>
          <div style={styles.mythsHeader}>
            <span style={styles.subtag}>Common Truths</span>
            <h3 style={styles.mythsTitle}>Dental Myths Debunked</h3>
          </div>

          <div style={styles.mythsGrid}>
            {myths.map((item, idx) => (
              <motion.div 
                key={idx}
                style={styles.mythCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <div style={styles.mythRow}>
                  <div style={styles.mythLeft}>
                    <ShieldAlert size={16} color="#ef4444" />
                    <span style={styles.mythLabel}>Myth</span>
                  </div>
                  <p style={styles.mythText}>{item.myth}</p>
                </div>

                <div style={styles.factRow}>
                  <div style={styles.factLeft}>
                    <CheckCircle size={16} color="var(--brand-trust-green)" />
                    <span style={styles.factLabel}>Fact</span>
                  </div>
                  <div>
                    <h4 style={styles.factTitle}>{item.fact}</h4>
                    <p style={styles.factDesc}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '7rem 0',
    backgroundColor: '#f8fbfe',
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
  tipCard: {
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0,0,0,0.05)',
    borderRadius: '24px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    transition: 'all 0.3s ease',
  },
  tipHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tipNum: {
    fontSize: '0.95rem',
    fontWeight: '800',
    color: 'var(--brand-surgical-blue)',
  },
  tipCategory: {
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontWeight: '700',
    color: 'var(--neutral-slate)',
  },
  tipTitle: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
  },
  tipDesc: {
    fontSize: '0.9rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.6',
  },
  // Myths
  mythsSection: {
    marginTop: '7rem',
    borderTop: '1px solid rgba(0,0,0,0.06)',
    paddingTop: '5rem',
  },
  mythsHeader: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  mythsTitle: {
    fontSize: '1.85rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    letterSpacing: '-0.01em',
    marginTop: '0.5rem',
  },
  mythsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2.5rem 2rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  mythCard: {
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0,0,0,0.05)',
    borderRadius: '24px',
    padding: '2.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  mythRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  },
  mythLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: '#fef2f2',
    padding: '0.2rem 0.5rem',
    borderRadius: '6px',
    flexShrink: 0,
  },
  mythLabel: {
    fontSize: '0.65rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    color: '#ef4444',
  },
  mythText: {
    fontSize: '0.95rem',
    fontWeight: '700',
    fontStyle: 'italic',
    color: 'var(--neutral-ink)',
  },
  factRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    borderTop: '1px solid rgba(0,0,0,0.04)',
    paddingTop: '1.25rem',
  },
  factLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: '#ecfdf5',
    padding: '0.2rem 0.5rem',
    borderRadius: '6px',
    flexShrink: 0,
  },
  factLabel: {
    fontSize: '0.65rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    color: 'var(--brand-trust-green)',
  },
  factTitle: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: 'var(--neutral-ink)',
    marginBottom: '0.25rem',
  },
  factDesc: {
    fontSize: '0.85rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.5',
  },
};
