import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, FolderHeart, Activity, ArrowRight } from 'lucide-react';

const caseLogs = [
  {
    title: 'Painless Geriatric Tooth Extraction',
    category: 'Geriatric Safety / Surgery',
    patient: '80-Year-Old Patient with Cardiac Comorbidities',
    diagnosis: 'Severe pulpal abscess and secondary infection on lower right molar.',
    treatment: 'Coordinated extraction utilizing specialized geriatric local anesthesia and blood pressure monitoring. Finished in 15 minutes under quiet conditions.',
    result: 'Complete pain-free removal, zero bleeding issues, and rapid socket healing verified in 4 days.',
    icon: FolderHeart,
    image: '/images/case_study_geriatric.png'
  },
  {
    title: 'Preservative Microscopic RCT',
    category: 'Endodontics / Restoration',
    patient: '42-Year-Old Patient with Severe Sensitivity',
    diagnosis: 'Deep clinical decay compromise of pulpal tissue in upper central incisor.',
    treatment: 'Microscope-assisted root mapping. Cleaned and shaped canals under digital visual magnification. Sealed using thermoplastic obturation.',
    result: 'Tooth fully saved and biological root preserved, avoiding the need for artificial titanium implants.',
    icon: Activity,
    image: '/images/case_study_endodontics.png'
  },
  {
    title: 'Computer-Guided Clear Aligner Therapy',
    category: 'Orthodontics / Alignment',
    patient: '22-Year-Old Patient with Dental Crowding',
    diagnosis: 'Severe lower arch dental crowding and resulting bite imbalance.',
    treatment: '3D digital alignment mapping. Designed 24 cycles of custom bio-compatible clear aligner trays worn over 12 months.',
    result: 'Fully balanced alignment achieved, dental gaps closed, and bite load safely distributed.',
    icon: CheckCircle,
    image: '/images/case_study_orthodontics.png'
  }
];

export default function CaseStudies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: '#ffffff' }}
    >

      {/* ── HERO BANNER ── */}
      <section style={styles.heroBanner}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroOverlayGrid} />
        <div style={styles.container}>
          <motion.div
            style={styles.heroContent}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            <motion.p style={styles.heroSubtag} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
              Clinical Logs
            </motion.p>
            <motion.h1 style={styles.heroTitle} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              Clinical Case <span style={{ color: 'var(--brand-surgical-blue)' }}>Studies.</span>
            </motion.h1>
            <motion.p style={styles.heroDesc} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              Documented treatment logs and structural tooth restorations completed at Dental Speciality Centre.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CASE STUDIES LIST ── */}
      <section style={styles.section}>
        <div style={styles.container}>

          <motion.div
            style={styles.list}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {caseLogs.map((log, idx) => {
              const Icon = log.icon;
              return (
                <motion.div
                  key={idx}
                  style={styles.card}
                  variants={cardVariants}
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(37,151,208,0.05)' }}
                >
                  <div style={styles.cardImageContainer}>
                    <img src={log.image} alt={log.title} style={styles.cardImage} />
                  </div>
                  <div style={styles.cardHeader}>
                    <div style={styles.tagWrapper}>
                      <Icon size={16} color="var(--brand-surgical-blue)" />
                      <span style={styles.category}>{log.category}</span>
                    </div>
                    <span style={styles.patientBadge}>{log.patient}</span>
                  </div>

                  <h2 style={styles.caseTitle}>{log.title}</h2>

                  {/* Diagnosis, treatment and result list */}
                  <div style={styles.contentGrid}>
                    <div style={styles.contentItem}>
                      <span style={styles.sectionLabel}>Clinical Diagnosis:</span>
                      <p style={styles.sectionText}>{log.diagnosis}</p>
                    </div>

                    <div style={styles.contentItem}>
                      <span style={styles.sectionLabel}>Treatment Details:</span>
                      <p style={styles.sectionText}>{log.treatment}</p>
                    </div>

                    <div style={styles.contentItem}>
                      <span style={styles.sectionLabel}>Procedure Result:</span>
                      <p style={styles.resultText}>{log.result}</p>
                    </div>
                  </div>

                  <div style={styles.cardFooter}>
                    <div style={styles.line} />
                    <Link to="/contact" style={styles.footerLink}>
                      Consult Dr. Tiwari on similar concerns <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

    </motion.div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2,
  },
  heroBanner: {
    position: 'relative',
    backgroundColor: '#ffffff',
    padding: '10rem 0 5rem',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'transparent',
    zIndex: 1,
    display: 'none',
  },
  heroOverlayGrid: {
    position: 'absolute',
    inset: 0,
    background: 'transparent',
    zIndex: 1,
    display: 'none',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    color: 'var(--neutral-ink)',
  },
  heroSubtag: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    color: 'var(--brand-surgical-blue)',
    fontWeight: '700',
    marginBottom: '1rem',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
    fontWeight: '800',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    color: 'var(--neutral-ink)',
    marginBottom: '1.25rem',
  },
  heroDesc: {
    fontSize: '1.15rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.65',
    maxWidth: '600px',
    margin: '0 auto',
  },
  section: {
    padding: '6rem 0 7rem',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0,0,0,0.05)',
    borderRadius: '30px',
    padding: '2.5rem 3rem',
    transition: 'all 0.3s ease',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  cardImageContainer: {
    width: '100%',
    height: '280px',
    marginBottom: '2.5rem',
    borderRadius: '16px',
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  tagWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  category: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: '700',
    color: 'var(--brand-surgical-blue)',
  },
  patientBadge: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'var(--neutral-slate)',
    backgroundColor: 'var(--neutral-cloud-gray)',
    padding: '0.3rem 0.75rem',
    borderRadius: '8px',
  },
  caseTitle: {
    fontSize: '1.85rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    letterSpacing: '-0.02em',
    marginBottom: '2rem',
  },
  contentGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  contentItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  sectionLabel: {
    fontSize: '0.8rem',
    fontWeight: '800',
    color: 'var(--neutral-slate)',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  sectionText: {
    fontSize: '0.98rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.65',
  },
  resultText: {
    fontSize: '1.02rem',
    fontWeight: '700',
    color: 'var(--brand-trust-green)',
    lineHeight: '1.5',
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  line: {
    height: '1px',
    backgroundColor: 'rgba(0,0,0,0.06)',
    width: '100%',
  },
  footerLink: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: 'var(--neutral-ink)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  }
};
