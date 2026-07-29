import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UserCheck, HeartHandshake, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

const cases = [
  {
    category: 'Geriatric Care · Tooth Extraction',
    title: 'Painless Geriatric Solution',
    desc: 'A successful and painless tooth extraction performed on an 80-year-old patient. With careful geriatric dental protocols, the procedure ensured minimal discomfort and rapid healing.',
    tag: 'Geriatric Care',
    icon: ShieldAlert,
    image: '/exp-1.png',
    badge: 'Age 80+ Safe Care'
  },
  {
    category: 'Pediatric Care · Cavity Filling',
    title: 'Zero-Anxiety Child Restoration',
    desc: 'Gentle cavity sealing for a 6-year-old patient. Completed using positive reinforcement techniques, saving the baby tooth to preserve the vital permanent teeth alignment blueprint.',
    tag: 'Pediatric Care',
    icon: HeartHandshake,
    image: '/exp-2.png',
    badge: 'Painless Sealant'
  },
  {
    category: 'Endodontics · Microscope RCT',
    title: 'Tooth Preservation Success',
    desc: 'Advanced microscopic root canal therapy to treat deep decay. Fully saved the natural tooth structure, avoiding extraction and restoring full biting strength.',
    tag: 'Tooth Preservation',
    icon: UserCheck,
    image: '/rct_image.png',
    badge: 'Saved Natural Tooth'
  }
];

export default function Transformations() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section style={styles.section} id="transformations">
      <div style={styles.container}>
        
        {/* Header */}
        <motion.div 
          style={styles.header}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={styles.heading}>Incredible Transformations.</h2>
          <p style={styles.subheading}>
            Explore actual clinical case logs documenting successful pain-free restorations, tooth preservation, and gentle geriatric procedures.
          </p>
        </motion.div>

        {/* Grid Cases */}
        <motion.div 
          style={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {cases.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={idx}
                style={styles.card}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 25px 50px -12px rgba(37, 151, 208, 0.18)',
                  borderColor: 'rgba(56, 189, 248, 0.35)' 
                }}
              >
                {/* Case Study Image Header */}
                <div style={styles.imageBox}>
                  <motion.img 
                    src={c.image} 
                    alt={c.title}
                    style={styles.cardImg}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  />
                  <div style={styles.imgOverlay} />
                  
                  {/* Badge */}
                  <div style={styles.topBadge}>
                    <CheckCircle2 size={12} color="#10b981" />
                    <span>{c.badge}</span>
                  </div>

                  <div style={styles.glassIconBox}>
                    <Icon size={18} color="#38bdf8" />
                  </div>
                </div>

                <div style={styles.cardContent}>
                  <span style={styles.categoryText}>{c.category}</span>
                  <h3 style={styles.caseTitle}>"{c.title}"</h3>
                  <p style={styles.caseDesc}>{c.desc}</p>
                </div>

                <div style={styles.cardFooter}>
                  <div style={styles.line} />
                  <div style={styles.footerLinkRow}>
                    <span style={styles.footerLink}>View Case Details</span>
                    <ArrowRight size={14} color="var(--brand-surgical-blue)" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '7.5rem 0',
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '5.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  pillTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    border: '1px solid rgba(56, 189, 248, 0.25)',
    color: 'var(--brand-surgical-blue)',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2.25rem',
  },
  card: {
    backgroundColor: '#f8fbfe',
    border: '1px solid #dbeef9',
    borderRadius: '28px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'pointer',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
  },
  imageBox: {
    position: 'relative',
    height: '210px',
    width: '100%',
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.75) 0%, transparent 70%)',
  },
  topBadge: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    backdropFilter: 'blur(8px)',
    color: '#0f172a',
    fontSize: '0.72rem',
    fontWeight: '800',
    padding: '5px 12px',
    borderRadius: '999px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  glassIconBox: {
    position: 'absolute',
    bottom: '16px',
    right: '16px',
    width: '40px',
    height: '40px',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    padding: '1.75rem 1.75rem 1.25rem',
    flexGrow: 1,
  },
  categoryText: {
    fontSize: '0.78rem',
    color: 'var(--brand-surgical-blue)',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    display: 'block',
    marginBottom: '0.6rem',
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
    padding: '0 1.75rem 1.75rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.9rem',
  },
  line: {
    height: '1px',
    backgroundColor: '#dbeef9',
    width: '100%',
  },
  footerLinkRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerLink: {
    fontSize: '0.82rem',
    fontWeight: '700',
    color: 'var(--neutral-ink)',
  },
};

