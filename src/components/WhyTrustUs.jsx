import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Compass, Star, Eye } from 'lucide-react';

const trustPillars = [
  {
    num: '01 / 04',
    title: 'Clinical Rigor',
    desc: 'We follow hospital-grade sterilization protocols — every instrument, every surface, every time. Our clinical environment meets global infection control standards.',
    tagline: 'ISO-certified hygiene standards',
    icon: ShieldAlert
  },
  {
    num: '02 / 04',
    title: 'Painless Touch',
    desc: 'Using advanced whisper-quiet rotary systems and comfortable local anesthesia, we make your treatment completely pain-free. Most patients are surprised when it’s over.',
    tagline: 'Comfort guaranteed on all procedures',
    icon: Compass
  },
  {
    num: '03 / 04',
    title: 'BDS Expertise',
    desc: 'Every procedure is personally diagnosed and led by Dr. Richa Tiwari, bringing 9+ years of clinical surgery experience to ensure absolute precision.',
    tagline: '9+ years of dedicated practice',
    icon: Star
  },
  {
    num: '04 / 04',
    title: 'Total Clarity',
    desc: 'Before we begin, you see exactly what we see — digital X-rays, diagnostics, and a step-by-step visual walkthrough of your treatment plan. No jargon, just honesty.',
    tagline: 'Detailed treatment blueprints',
    icon: Eye
  }
];

export default function WhyTrustUs() {
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
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section style={styles.section} id="why-us">
      <div style={styles.container}>
        
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.subtag}>How We Are Different</span>
          <h2 style={styles.heading}>Why Patients Trust Us.</h2>
          <p style={styles.subheading}>
            Four core clinical pillars that define every single visit, ensuring absolute safety and peace of mind.
          </p>
        </div>

        {/* Pillars Grid */}
        <motion.div 
          style={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                style={styles.card}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(37,151,208,0.06)' }}
              >
                <div style={styles.cardTop}>
                  <div style={styles.iconBox}>
                    <Icon size={20} color="var(--brand-surgical-blue)" />
                  </div>
                  <span style={styles.numText}>{pillar.num}</span>
                </div>

                <div style={styles.cardMiddle}>
                  <h3 style={styles.pillarTitle}>{pillar.title}</h3>
                  <p style={styles.pillarDesc}>{pillar.desc}</p>
                </div>

                <div style={styles.cardBottom}>
                  <div style={styles.line} />
                  <span style={styles.tagline}>{pillar.tagline}</span>
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
    marginBottom: '5rem',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0,0,0,0.05)',
    borderRadius: '24px',
    padding: '2.25rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '340px',
    transition: 'all 0.3s ease',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconBox: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    backgroundColor: 'var(--neutral-sky-tint)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numText: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--neutral-slate)',
    letterSpacing: '0.05em',
  },
  cardMiddle: {
    margin: '2rem 0',
  },
  pillarTitle: {
    fontSize: '1.3rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    marginBottom: '0.75rem',
  },
  pillarDesc: {
    fontSize: '0.92rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.65',
  },
  cardBottom: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  line: {
    height: '1px',
    backgroundColor: 'rgba(37, 151, 208, 0.15)',
    width: '100%',
  },
  tagline: {
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: 'var(--brand-surgical-blue)',
  },
};
