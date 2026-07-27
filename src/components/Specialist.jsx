import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ArrowRight } from 'lucide-react';

export default function Specialist() {
  const listItems = [
    { num: '01', title: 'Microscopic Root Canal Therapy (RCT)', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=600&auto=format&fit=crop' },
    { num: '02', title: 'Painless Laser & Restorative Endodontics', image: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146c1?q=80&w=600&auto=format&fit=crop' },
    { num: '03', title: 'Aesthetic Ceramic Crowns & Restoration Work', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop' },
    { num: '04', title: 'Gentle Preventive Cleaning & Hygiene', image: 'https://images.unsplash.com/photo-1522849696084-818b291c6b68?q=80&w=600&auto=format&fit=crop' },
    { num: '05', title: 'Pediatric Dentistry & Child Oral Care', image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=600&auto=format&fit=crop' },
    { num: '06', title: 'TMJ Treatment & Jaw Corrections', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <section style={styles.section} id="doctor">
      <div style={styles.container}>
        
        {/* Header Title */}
        <div style={styles.sectionHeader}>
          <span style={styles.subtag}>Meet The Specialist</span>
          <h2 style={styles.heading}>
            Dr. Richa <span style={styles.accentBlock}>Tiwari</span>
          </h2>
        </div>

        {/* Core Layout Grid */}
        <div style={styles.grid}>
          
          {/* Biography Details */}
          <motion.div 
            style={styles.bioCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div style={styles.qualificationWrapper}>
              <Award size={18} color="var(--brand-surgical-blue)" />
              <span style={styles.qualText}>B.D.S. · Chief Oral & Dental Surgeon · Estd. 9+ Yrs Practice</span>
            </div>

            <p style={styles.bioPara}>
              With over 9 years of medical excellence, Dr. Richa Tiwari is one of Indore’s most trusted family and cosmetic dental surgeons. She holds a B.D.S. degree from College of Dental Science and Hospital (C.D.SH.), Rau, Indore.
            </p>

            <p style={styles.bioPara}>
              Her approach blends state-of-the-art precision with a deeply empathetic philosophy — ensuring every patient is fully educated, comfortable, and receives honest, zero-pain care tailored to their wellness.
            </p>

            <blockquote style={styles.quoteBox}>
              <p style={styles.quoteText}>
                "My goal is simple — to explain every issue, ensure complete comfort, and deliver a healthy smile you're proud to show."
              </p>
            </blockquote>

            <div style={styles.ctaWrapper}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link to="/contact" style={styles.ctaBtn}>
                  Book a Consultation <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Card & Stats */}
          <div style={styles.visualCol}>
            <motion.div 
              style={styles.cardWrapper}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/about_doc.png" 
                alt="Dr. Richa Tiwari Vyas" 
                style={styles.profileImg} 
              />
              <div style={styles.cardGradient} />
            </motion.div>

            {/* Metrics */}
            <div style={styles.statsRow}>
              <div style={styles.statBox}>
                <span style={styles.statNum}>9+</span>
                <div style={styles.statDivider} />
                <span style={styles.statLabel}>Years Mastery</span>
              </div>

              <div style={styles.statBox}>
                <span style={styles.statNum}>4000+</span>
                <div style={styles.statDivider} />
                <span style={styles.statLabel}>Procedures</span>
              </div>

              <div style={styles.statBox}>
                <span style={styles.statNum}>99%</span>
                <div style={styles.statDivider} />
                <span style={styles.statLabel}>Satisfaction</span>
              </div>
            </div>
          </div>

        </div>

        {/* Areas of Expertise Divider */}
        <div style={styles.expertiseSection}>
          <p style={styles.expertiseHeading}>Areas of Expertise</p>
          <div style={styles.expertiseGrid}>
            {listItems.map((item, idx) => (
              <motion.div 
                key={idx} 
                style={styles.expertiseCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover="hover"
              >
                <div style={styles.expertImageWrapper}>
                  <motion.img 
                    src={item.image} 
                    alt={item.title} 
                    style={styles.expertImage} 
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                  <div style={styles.expertNumOverlay}>{item.num}</div>
                </div>
                <div style={styles.expertContent}>
                  <p style={styles.expertTitle}>{item.title}</p>
                  <motion.div 
                    style={styles.expertBar} 
                    variants={{ hover: { width: '100%', opacity: 1 } }}
                    transition={{ duration: 0.3 }}
                  />
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
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  sectionHeader: {
    borderBottom: '1px solid rgba(0,0,0,0.08)',
    paddingBottom: '2.5rem',
    marginBottom: '4rem',
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
    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
    color: 'var(--neutral-ink)',
    fontWeight: '800',
    lineHeight: '1',
    letterSpacing: '-0.03em',
  },
  accentBlock: {
    color: 'var(--brand-surgical-blue)',
  },
  grid: {
    display: 'flex',
    gap: '5rem',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  bioCol: {
    flex: '1 1 450px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  qualificationWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderLeft: '3px solid var(--brand-surgical-blue)',
    paddingLeft: '12px',
    marginVertical: '0.5rem',
  },
  qualText: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: 'var(--neutral-charcoal)',
  },
  bioPara: {
    fontSize: '1.05rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.75',
  },
  quoteBox: {
    borderLeft: '3px solid var(--brand-surgical-blue)',
    paddingLeft: '1.5rem',
    margin: '1rem 0',
  },
  quoteText: {
    fontSize: '1.15rem',
    fontWeight: '700',
    fontStyle: 'italic',
    color: 'var(--neutral-ink)',
    lineHeight: '1.5',
  },
  ctaWrapper: {
    marginTop: '1rem',
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: 'var(--neutral-ink)',
    color: '#ffffff',
    padding: '1rem 2.2rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '0.9rem',
    textDecoration: 'none',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
  },
  visualCol: {
    flex: '1 1 450px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3rem',
  },
  cardWrapper: {
    position: 'relative',
    width: '90%',
    maxWidth: '380px',
    height: '460px',
    borderRadius: '40px',
    overflow: 'hidden',
    border: '8px solid #ffffff',
    boxShadow: '0 25px 60px rgba(0,0,0,0.12)',
  },
  profileImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardGradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(37, 151, 208, 0.15), transparent 70%)',
    mixBlendMode: 'overlay',
  },
  statsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '450px',
    padding: '0 1rem',
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    flex: '1 1 33%',
  },
  statNum: {
    fontSize: '2.5rem',
    fontWeight: '300',
    color: 'var(--neutral-ink)',
    letterSpacing: '-0.03em',
  },
  statDivider: {
    width: '30px',
    height: '2px',
    backgroundColor: 'rgba(37, 151, 208, 0.3)',
    margin: '8px 0',
  },
  statLabel: {
    fontSize: '0.75rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: 'var(--neutral-charcoal)',
  },
  expertiseSection: {
    marginTop: '6rem',
    borderTop: '1px solid rgba(0,0,0,0.06)',
    paddingTop: '4rem',
  },
  expertiseHeading: {
    fontSize: '0.75rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.4em',
    color: 'var(--brand-surgical-blue)',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  expertiseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2.5rem 2rem',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  expertiseCard: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
    cursor: 'pointer',
  },
  expertImageWrapper: {
    position: 'relative',
    width: '100%',
    height: '200px',
    overflow: 'hidden',
  },
  expertImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  expertNumOverlay: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(4px)',
    color: 'var(--brand-surgical-blue)',
    fontSize: '0.85rem',
    fontWeight: '800',
    padding: '4px 10px',
    borderRadius: '999px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  expertContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '24px',
    flex: 1,
    justifyContent: 'center',
  },
  expertTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--neutral-ink)',
    lineHeight: '1.4',
  },
  expertBar: {
    width: '30%',
    height: '2px',
    backgroundColor: 'var(--brand-surgical-blue)',
    opacity: 0.6,
  },
};
