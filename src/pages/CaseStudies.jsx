import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, FolderHeart, Activity, ArrowRight, Check } from 'lucide-react';

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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: '#fdfbf7' }}
    >
      {/* ── HERO BANNER ── */}
      <section style={styles.heroBanner} className="casestudies-hero-banner">
        {/* Background Image featuring Clinical Dental Case Study X-Ray & Reports */}
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2070&q=80"
          alt="Dental Case Study Medical X-Ray Diagnostic Report"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 35%',
            zIndex: 0,
          }}
        />

        {/* Dark Overlay to make white title pop crystal clear */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.5) 50%, rgba(15, 23, 42, 0.3) 100%)',
          zIndex: 1
        }} />

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
            <motion.p 
              style={{ ...styles.heroSubtag, color: '#38bdf8' }} 
              className="casestudies-hero-subtag"
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            >
              Clinical Logs
            </motion.p>
            <motion.h1 
              style={{ ...styles.heroTitle, color: '#ffffff', textShadow: '0 2px 15px rgba(0,0,0,0.6)' }} 
              className="casestudies-hero-title"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Case <span style={{ color: '#38bdf8' }}>Studies.</span>
            </motion.h1>
            <motion.p 
              style={{ ...styles.heroDesc, color: '#e2e8f0', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }} 
              className="casestudies-hero-desc"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Documented treatment logs and structural tooth restorations showcasing our commitment to precision and painless dentistry.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CASE STUDIES LIST ── */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.list}>
            {caseLogs.map((log, idx) => {
              const Icon = log.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div
                  key={idx}
                  style={{
                    ...styles.caseRow,
                    flexDirection: isEven ? 'row' : 'row-reverse'
                  }}
                  className="case-study-row"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  {/* Image Block */}
                  <div style={styles.imageBlock}>
                    <div style={styles.imageBackground}>
                      <motion.img 
                        src={log.image} 
                        alt={log.title} 
                        style={styles.cardImage} 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Content Block */}
                  <div style={styles.contentBlock}>
                    <div style={styles.tagWrapper}>
                      <Icon size={18} color="var(--brand-surgical-blue)" />
                      <span style={styles.category}>{log.category}</span>
                    </div>
                    
                    <h2 style={styles.caseTitle}>{log.title}</h2>
                    <span style={styles.patientBadge}>{log.patient}</span>

                    <div style={styles.contentGrid}>
                      <div style={styles.contentItem}>
                        <div style={styles.labelRow}>
                          <span style={styles.dot} />
                          <span style={styles.sectionLabel}>Clinical Diagnosis</span>
                        </div>
                        <p style={styles.sectionText}>{log.diagnosis}</p>
                      </div>

                      <div style={styles.contentItem}>
                        <div style={styles.labelRow}>
                          <span style={styles.dot} />
                          <span style={styles.sectionLabel}>Treatment Protocol</span>
                        </div>
                        <p style={styles.sectionText}>{log.treatment}</p>
                      </div>

                      <div style={styles.resultItem}>
                        <div style={styles.labelRow}>
                          <Check size={16} color="var(--brand-trust-green)" />
                          <span style={styles.resultLabel}>Procedure Result</span>
                        </div>
                        <p style={styles.resultText}>{log.result}</p>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div style={styles.actionRow}>
            <div style={styles.line} />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link to="/contact" style={styles.actionBtn}>
                Consult Dr. Tiwari on similar concerns <ArrowRight size={16} />
              </Link>
            </motion.div>
            <div style={styles.line} />
          </div>

        </div>
      </section>

      {/* Responsive Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .case-study-row {
            flex-direction: column !important;
            gap: 3rem !important;
          }
          .case-study-row > div {
            width: 100% !important;
            padding: 0 !important;
          }
        }
      `}} />
    </motion.div>
  );
}

const styles = {
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2,
  },
  heroBanner: {
    position: 'relative',
    backgroundColor: '#0f172a',
    padding: '13rem 0 8rem',
    minHeight: '520px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    color: 'var(--neutral-ink)',
  },
  heroSubtag: {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    color: 'var(--brand-surgical-blue)',
    fontWeight: '700',
    marginBottom: '1.5rem',
  },
  heroTitle: {
    fontSize: 'clamp(3rem, 6vw, 4.5rem)',
    fontWeight: '800',
    lineHeight: '1.1',
    letterSpacing: '-0.03em',
    color: 'var(--neutral-ink)',
    marginBottom: '1.5rem',
  },
  heroDesc: {
    fontSize: '1.15rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.7',
    maxWidth: '600px',
    margin: '0 auto',
  },
  section: {
    padding: '8rem 0 10rem',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10rem', // Large gap for editorial feel
  },
  caseRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '6rem',
  },
  imageBlock: {
    flex: '1 1 50%',
    width: '50%',
  },
  imageBackground: {
    backgroundColor: '#fdfbf7',
    borderRadius: '24px',
    padding: '0', // Removed padding so image fills the card
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: '4/3',
    boxShadow: '0 20px 40px rgba(0,0,0,0.08)', // Moved shadow to container
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Cover ensures it fits the card exactly
  },
  contentBlock: {
    flex: '1 1 50%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  tagWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '0.5rem',
  },
  category: {
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: 'var(--brand-surgical-blue)',
  },
  caseTitle: {
    fontSize: 'clamp(2rem, 3vw, 2.75rem)',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    lineHeight: '1.15',
    letterSpacing: '-0.02em',
  },
  patientBadge: {
    display: 'inline-block',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--neutral-slate)',
    backgroundColor: 'var(--neutral-cloud-gray)',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    alignSelf: 'flex-start',
    marginBottom: '1rem',
  },
  contentGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    marginTop: '1rem',
  },
  contentItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    paddingLeft: '1.25rem',
    borderLeft: '2px solid rgba(0,0,0,0.05)',
  },
  labelRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: 'var(--neutral-slate)',
  },
  sectionLabel: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--neutral-slate)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  sectionText: {
    fontSize: '1.05rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.6',
  },
  resultItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '1.5rem',
    backgroundColor: '#f8fafc',
    borderRadius: '16px',
    border: '1px solid rgba(16, 185, 129, 0.15)', // Light green border
  },
  resultLabel: {
    fontSize: '0.85rem',
    fontWeight: '800',
    color: 'var(--brand-trust-green)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  resultText: {
    fontSize: '1.05rem',
    fontWeight: '600',
    color: 'var(--neutral-ink)',
    lineHeight: '1.5',
  },
  actionRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    marginTop: '8rem',
  },
  line: {
    flex: 1,
    height: '1px',
    backgroundColor: 'rgba(0,0,0,0.06)',
  },
  actionBtn: {
    backgroundColor: 'var(--brand-surgical-blue)',
    color: '#ffffff',
    padding: '1.25rem 2.5rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '1rem',
    textDecoration: 'none',
    boxShadow: '0 10px 25px rgba(37, 151, 208, 0.25)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
  },
};
