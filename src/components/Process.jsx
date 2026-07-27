import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Sparkles, Clipboard, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    step: '01 Step',
    phase: 'Welcome',
    title: 'Clinical Onboarding',
    desc: 'Secure your appointment via our booking portal. We review your medical history and clinical preferences before you step through our door.',
    icon: Clipboard
  },
  {
    step: '02 Step',
    phase: 'Assessment',
    title: 'Diagnostic Precision',
    desc: 'High-definition digital imaging and low-radiation X-rays to establish a clear visual treatment blueprint designed by Dr. Richa Tiwari.',
    icon: Compass
  },
  {
    step: '03 Step',
    phase: 'Procedure',
    title: 'Specialized Treatment',
    desc: 'Meticulous execution under gentle local sedation. Whisper-quiet tools and deliberate surgical techniques ensure a completely painless experience.',
    icon: Sparkles
  },
  {
    step: '04 Step',
    phase: 'Recovery',
    title: 'Aftercare & Support',
    desc: 'Receive a personalized home-recovery roadmap and scheduled follow-up checks to validate that your results are structurally perfect.',
    icon: Sparkles
  }
];

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  return (
    <section style={styles.section} id="process">
      <div style={styles.container}>
        
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.subtag}>Our Steps</span>
          <h2 style={styles.heading}>How We Treat You.</h2>
          <p style={styles.subheading}>
            Modern dentistry with a hospitality mindset — every phase engineered for absolute patient comfort.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div 
          style={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                style={styles.stepCard}
                variants={stepVariants}
                whileHover={{ y: -6, borderColor: 'rgba(37,151,208,0.3)' }}
              >
                <div style={styles.stepTop}>
                  <div style={styles.iconBox}>
                    <Icon size={18} color="var(--brand-surgical-blue)" />
                  </div>
                  <div style={styles.stepBadge}>
                    <span style={styles.stepNum}>{step.step}</span>
                    <span style={styles.stepPhase}>{step.phase}</span>
                  </div>
                </div>

                <div style={styles.stepContent}>
                  <h3 style={styles.stepTitle}>{step.title}</h3>
                  <p style={styles.stepDesc}>{step.desc}</p>
                </div>

                {/* Connecting arrow for timeline feel */}
                {idx < 3 && (
                  <div style={styles.connectArrow} className="desktop-nav">
                    <ArrowRight size={18} color="rgba(37,151,208,0.2)" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Action Button */}
        <div style={styles.actionRow}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link to="/contact" style={styles.actionBtn}>
              Book Your Experience →
            </Link>
          </motion.div>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '2.5rem 2rem',
    position: 'relative',
  },
  stepCard: {
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0,0,0,0.05)',
    borderRadius: '24px',
    padding: '2rem',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    transition: 'all 0.3s ease',
  },
  stepTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBox: {
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    backgroundColor: 'var(--neutral-sky-tint)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepBadge: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  stepNum: {
    fontSize: '0.7rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    color: 'var(--neutral-slate)',
    letterSpacing: '0.05em',
  },
  stepPhase: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'var(--brand-surgical-blue)',
    marginTop: '2px',
  },
  stepContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  stepTitle: {
    fontSize: '1.15rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
  },
  stepDesc: {
    fontSize: '0.88rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.6',
  },
  connectArrow: {
    position: 'absolute',
    right: '-18px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 5,
    pointerEvents: 'none',
  },
  actionRow: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5rem',
  },
  actionBtn: {
    backgroundColor: 'var(--neutral-ink)',
    color: '#ffffff',
    padding: '1rem 2.5rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '0.95rem',
    textDecoration: 'none',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
  },
};
