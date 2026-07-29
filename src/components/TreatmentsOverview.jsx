import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, Award, Smile, Shield, X, Heart, Cpu, Sparkles, Star, ArrowRight } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ui/ScrollReveal';
import MagneticButton from './ui/MagneticButton';

const treatmentList = [
  { 
    id: 'rct', 
    name: 'Root Canal (RCT)', 
    icon: Activity, 
    desc: 'Microscope-assisted painless pulpal treatments to preserve natural teeth.',
    tag: 'Endodontics',
    image: '/rct_image.png'
  },
  { 
    id: 'implants', 
    name: 'Dental Implants', 
    icon: Cpu, 
    desc: 'Permanent titanium dental roots to restore complete bite function.',
    tag: 'Implantology',
    image: '/crowns_image.png'
  },
  { 
    id: 'crowns', 
    name: 'Crowns & Bridges', 
    icon: Award, 
    desc: 'High-strength ceramic and zirconia restorations to support compromised structures.',
    tag: 'Prosthodontics',
    image: '/crowns_image.png'
  },
  { 
    id: 'gum', 
    name: 'Laser Gum Therapy', 
    icon: Shield, 
    desc: 'Professional ultrasonic scale checks and laser bleeding gums management.',
    tag: 'Periodontics',
    image: '/laser_image.png'
  },
  { 
    id: 'ortho', 
    name: 'Orthodontics', 
    icon: Smile, 
    desc: 'Clear, comfortable aligners and traditional braces for crowding corrections.',
    tag: 'Aligners',
    image: '/highlights.png'
  },
  { 
    id: 'whitening', 
    name: 'Teeth Whitening', 
    icon: Sparkles, 
    desc: 'Cosmetic bleaching to remove tobacco, tea, and aging yellow stains.',
    tag: 'Aesthetics',
    image: '/exp-2.png'
  },
  { 
    id: 'restoration', 
    name: 'Restoration / Filling', 
    icon: Shield, 
    desc: 'Aesthetic, mercury-free composite tooth fillings for cavity closures.',
    tag: 'Restorative',
    image: '/exp-1.png'
  },
  { 
    id: 'smile', 
    name: 'Smile Designing', 
    icon: Smile, 
    desc: 'Custom aesthetic orthodontic analysis and veneers for celebrity smiles.',
    tag: 'Cosmetics',
    image: '/about_doc.png'
  },
  { 
    id: 'extraction', 
    name: 'Tooth Extraction', 
    icon: X, 
    desc: 'Completely sterile, painless surgical removals for pediatric and geriatric needs.',
    tag: 'Surgery',
    image: '/emergency_image.png'
  },
  { 
    id: 'jewellery', 
    name: 'Dental Jewellery', 
    icon: Star, 
    desc: 'Safe, non-invasive sparkling tooth gems to accessorize your smile.',
    tag: 'Accessories',
    image: '/highlights.png'
  },
  { 
    id: 'pedodontics', 
    name: 'Pediatric Care', 
    icon: Heart, 
    desc: 'Anxiety-free dental sealants and fluoride varnishes for children.',
    tag: 'Pediatrics',
    image: '/exp-2.png'
  }
];

export default function TreatmentsOverview() {
  return (
    <section style={styles.section} id="treatments-overview">
      <div style={styles.container}>

        {/* Header Block with Scroll Reveal */}
        <ScrollReveal direction="fade-up" style={styles.header}>
          <span style={styles.subtag}>Clinical Expertise</span>
          <h2 style={styles.heading}>Specialized Treatments</h2>
          <p style={styles.desc}>
            Empathetic dental solutions utilizing state-of-the-art diagnostic machinery, laser systems, and sterile operating layouts.
          </p>
        </ScrollReveal>

        {/* 11 Treatments Grid with Stagger Container */}
        <StaggerContainer style={styles.grid} staggerDelay={0.07}>
          {treatmentList.map((t, idx) => {
            const Icon = t.icon;
            return (
              <StaggerItem
                key={idx}
                direction="fade-up"
              >
                <motion.div
                  style={{ ...styles.card, willChange: 'transform, opacity' }}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 25px 45px -12px rgba(37,151,208,0.12)',
                    borderColor: 'rgba(37,151,208,0.35)',
                    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
                  }}
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
                    Explore Treatment <ArrowRight size={14} />
                  </Link>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Center Booking Action */}
        <ScrollReveal direction="fade-up" delay={0.15} style={styles.actionBlock}>
          <MagneticButton strength={0.3}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/contact" style={styles.actionBtn}>
                Book a Treatment Consultation
              </Link>
            </motion.div>
          </MagneticButton>
        </ScrollReveal>

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
    marginBottom: '5rem',
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
  desc: {
    fontSize: '1.05rem',
    color: 'var(--neutral-charcoal)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.65',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))',
    gap: '2rem 1.5rem',
  },
  card: {
    backgroundColor: '#f8fbfe',
    border: '1px solid #e0f2fe',
    borderRadius: '24px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: 'pointer',
    boxShadow: '0 8px 24px rgba(0,0,0,0.02)',
  },
  imageBox: {
    position: 'relative',
    height: '140px',
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
    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 80%)',
  },
  iconBox: {
    position: 'absolute',
    bottom: '12px',
    left: '16px',
    width: '36px',
    height: '36px',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
  },
  cardTag: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    fontSize: '0.68rem',
    fontWeight: '800',
    color: '#ffffff',
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    backdropFilter: 'blur(8px)',
    padding: '3px 10px',
    borderRadius: '999px',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    border: '1px solid rgba(255,255,255,0.2)',
  },
  cardBody: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between',
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
    marginBottom: '1.25rem',
    flexGrow: 1,
  },
  exploreLink: {
    fontSize: '0.82rem',
    fontWeight: '800',
    color: 'var(--brand-surgical-blue)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
  },
  actionBlock: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4.5rem',
  },
  actionBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'var(--neutral-ink)',
    color: '#ffffff',
    padding: '1rem 2.5rem',
    borderRadius: '999px',
    fontWeight: '800',
    fontSize: '0.95rem',
    textDecoration: 'none',
    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
  }
};

