import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, Award, Smile, Shield, X, Heart, Cpu, Sparkles, Star, ArrowRight } from 'lucide-react';

const treatmentList = [
  { 
    id: 'rct', 
    name: 'Root Canal (RCT)', 
    icon: Activity, 
    desc: 'Microscope-assisted painless pulpal treatments to preserve natural teeth.',
    tag: 'Endodontics'
  },
  { 
    id: 'implants', 
    name: 'Dental Implants', 
    icon: Cpu, 
    desc: 'Permanent titanium dental roots to restore complete bite function.',
    tag: 'Implantology'
  },
  { 
    id: 'crowns', 
    name: 'Crowns & Bridges', 
    icon: Award, 
    desc: 'High-strength ceramic and zirconia restorations to support compromised structures.',
    tag: 'Prosthodontics'
  },
  { 
    id: 'gum', 
    name: 'Gum Therapy', 
    icon: Shield, 
    desc: 'Professional ultrasonic scale checks and laser bleeding gums management.',
    tag: 'Periodontics'
  },
  { 
    id: 'ortho', 
    name: 'Orthodontics', 
    icon: Smile, 
    desc: 'Clear, comfortable aligners and traditional braces for crowding corrections.',
    tag: 'Aligners'
  },
  { 
    id: 'whitening', 
    name: 'Teeth Whitening', 
    icon: Sparkles, 
    desc: 'Cosmetic bleaching to remove tobacco, tea, and aging yellow stains.',
    tag: 'Aesthetics'
  },
  { 
    id: 'restoration', 
    name: 'Restoration / Filling', 
    icon: Shield, 
    desc: 'Aesthetic, mercury-free composite tooth fillings for cavity closures.',
    tag: 'Restorative'
  },
  { 
    id: 'smile', 
    name: 'Smile Designing', 
    icon: Smile, 
    desc: 'Custom aesthetic orthodontic analysis and veneers for celebrity smiles.',
    tag: 'Cosmetics'
  },
  { 
    id: 'extraction', 
    name: 'Extraction', 
    icon: X, 
    desc: 'Completely sterile, painless surgical removals for pediatric and geriatric needs.',
    tag: 'Surgery'
  },
  { 
    id: 'jewellery', 
    name: 'Dental Jewellery', 
    icon: Star, 
    desc: 'Safe, non-invasive sparkling tooth gems to accessorize your smile.',
    tag: 'Accessories'
  },
  { 
    id: 'pedodontics', 
    name: 'Pedodontics / Child Care', 
    icon: Heart, 
    desc: 'Anxiety-free dental sealants and fluoride varnishes for children.',
    tag: 'Pediatrics'
  }
];

export default function TreatmentsOverview() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section style={styles.section} id="treatments-overview">
      <div style={styles.container}>
        
        {/* Header Block */}
        <div style={styles.header}>
          <span style={styles.subtag}>Clinical Expertise</span>
          <h2 style={styles.heading}>Specialized Treatments</h2>
          <p style={styles.desc}>
            Empathetic dental solutions utilizing state-of-the-art diagnostic machinery and sterile operating layouts.
          </p>
        </div>

        {/* 11 Treatments Grid */}
        <motion.div 
          style={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {treatmentList.map((t, idx) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={idx}
                style={styles.card}
                variants={cardVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(37,151,208,0.06)', borderColor: 'rgba(37,151,208,0.2)' }}
              >
                <div style={styles.cardHeader}>
                  <div style={styles.iconBox}>
                    <Icon size={20} color="var(--brand-surgical-blue)" />
                  </div>
                  <span style={styles.cardTag}>{t.tag}</span>
                </div>
                
                <h3 style={styles.cardTitle}>{t.name}</h3>
                <p style={styles.cardDesc}>{t.desc}</p>
                
                <Link to={`/treatments#${t.id}`} style={styles.exploreLink}>
                  Explore Treatment <ArrowRight size={12} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Center Booking Action */}
        <div style={styles.actionBlock}>
          <Link to="/contact" style={styles.actionBtn}>
            Book a Treatment Consultation
          </Link>
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
  desc: {
    fontSize: '1.05rem',
    color: 'var(--neutral-charcoal)',
    maxWidth: '560px',
    margin: '0 auto',
    lineHeight: '1.65',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem 1.5rem',
  },
  card: {
    backgroundColor: '#f8fbfe',
    border: '1px solid #e0f2fe',
    borderRadius: '24px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '260px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.25rem',
  },
  iconBox: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: '#e0f2fe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTag: {
    fontSize: '0.7rem',
    fontWeight: '700',
    color: 'var(--brand-surgical-blue)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    marginBottom: '0.5rem',
  },
  cardDesc: {
    fontSize: '0.88rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.55',
    marginBottom: '1.5rem',
    flexGrow: 1,
  },
  exploreLink: {
    fontSize: '0.8rem',
    fontWeight: '700',
    color: 'var(--neutral-ink)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
  },
  actionBlock: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5rem',
  },
  actionBtn: {
    display: 'inline-flex',
    backgroundColor: 'var(--neutral-ink)',
    color: '#ffffff',
    padding: '0.95rem 2.25rem',
    borderRadius: '12px',
    fontWeight: '700',
    fontSize: '0.92rem',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
  }
};
