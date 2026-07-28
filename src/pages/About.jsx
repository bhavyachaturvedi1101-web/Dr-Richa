import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, Heart, Shield, Calendar, UserCheck, Languages, Clipboard } from 'lucide-react';

const credentials = [
  { icon: Award, label: 'Specialization', value: 'Oral and Dental Surgeon, Family and Aesthetic Dentist' },
  { icon: Clipboard, label: 'Qualification', value: 'B.D.S. from College of Dental Science and Hospital (C.D.SH.), Rau, Indore' },
  { icon: UserCheck, label: 'Experience', value: '9 Years of Dedicated Clinical Practice' },
  { icon: Languages, label: 'Languages', value: 'English, Hindi' },
  { icon: CheckCircle2, label: 'Registration', value: 'A-12354 - Dental Council of India' }
];

const values = [
  { 
    icon: Heart, 
    title: 'Patient-First Care', 
    desc: 'Every decision we make centers on your comfort, health, and long-term smile.',
    img: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: Shield, 
    title: 'No Hidden Charges', 
    desc: 'Transparent pricing with honest advice. We never recommend unnecessary procedures.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: Award, 
    title: 'Modern Equipment', 
    desc: 'Fully sterilized, state-of-the-art equipment to ensure maximum safety and precision.',
    img: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?q=80&w=600&auto=format&fit=crop'
  },
  { 
    icon: CheckCircle2, 
    title: 'Painless Treatments', 
    desc: 'Advanced techniques and gentle care make every procedure as comfortable as possible.',
    img: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=600&auto=format&fit=crop'
  },
];
const bgImages = [
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1598256989800-fea5f20eb180?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop'
];

export default function About() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
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
        <AnimatePresence>
          <motion.img
            key={currentBg}
            src={bgImages[currentBg]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0
            }}
            alt="Dental Clinic Background"
          />
        </AnimatePresence>

        {/* Light overlay to maintain text readability */}
        <div style={{ ...styles.heroOverlay, display: 'block', backgroundColor: 'rgba(255, 255, 255, 0.6)' }} />
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
            <motion.p
              style={styles.heroSubtag}
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            >
              Our Story
            </motion.p>
            <motion.h1
              style={styles.heroTitle}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Dental Speciality <span style={{ color: 'var(--brand-surgical-blue)' }}>Centre.</span>
            </motion.h1>
            <motion.p
              style={styles.heroDesc}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Trusted dental care in Indore — where clinical expertise meets empathetic patient hospitality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── MEET THE SPECIALIST ── */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid}>

            {/* Visual Column */}
            <motion.div
              style={styles.visualWrapper}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div style={styles.imageCapsule}>
                <img src="/about_doc.png" alt="Dr. Richa Tiwari" style={styles.aboutImg} />
              </div>
              {/* Overlapping badge */}
              <div style={styles.floatingStatsBadge}>
                <span style={styles.badgeNum}>9+</span>
                <span style={styles.badgeLabel}>Years clinical excellence</span>
              </div>
            </motion.div>

            {/* Text Column */}
            <motion.div
              style={styles.textWrapper}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span style={styles.subtag}>The Surgeon</span>
              <h2 style={styles.sectionHeading}>Meet Dr. Richa Tiwari</h2>
              <p style={styles.paragraph}>
                Dr. Richa Tiwari Vyas is an experienced, polite, and highly professional dentist serving the Indore community. She holds a B.D.S. degree from College of Dental Science and Hospital (C.D.SH.), Rau, Indore and has over 9 years of clinical experience.
              </p>
              <p style={styles.paragraph}>
                She believes in taking the time to explain every dental problem and proposed treatment options to patients — ensuring they feel comfortable, informed, and in control of their health. Her gentle approach makes every visit a reassuring experience.
              </p>

              {/* Action Button */}
              <div style={{ marginTop: '1.5rem' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link to="/contact" style={styles.ctaBtn}>
                    <Calendar size={16} /> Book Appointment
                  </Link>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL CREDENTIALS ── */}
      <section style={styles.credSection}>
        <div style={styles.container}>
          <span style={styles.subtagCenter}>Verified History</span>
          <h2 style={styles.sectionHeadingCenter}>Credentials & Certifications</h2>

          <div style={styles.credList}>
            {credentials.map((c, idx) => {
              const IconComp = c.icon;
              return (
                <motion.div
                  key={idx}
                  style={styles.credCard}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ x: 5 }}
                >
                  <div style={styles.credIconWrapper}>
                    <IconComp size={18} color="var(--brand-surgical-blue)" />
                  </div>
                  <div>
                    <span style={styles.credLabel}>{c.label}</span>
                    <p style={styles.credValue}>{c.value}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={styles.section}>
        <div style={styles.container}>
          <span style={styles.subtagCenter}>Why Choose Us</span>
          <h2 style={styles.sectionHeadingCenter}>Care you can trust, every time.</h2>
          <p style={styles.sectionDescCenter}>
            We are dedicated to providing completely painless treatments. We never recommend unnecessary procedures or add hidden charges.
          </p>

          <motion.div
            style={styles.valuesGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  style={styles.valueCard}
                  variants={cardVariants}
                  whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px rgba(37,151,208,0.15)' }}
                >
                  <div style={styles.valueImgContainer}>
                    <img src={v.img} alt={v.title} style={styles.valueImg} />
                    <div style={styles.iconBoxFloating}>
                      <Icon size={20} color="var(--brand-surgical-blue)" />
                    </div>
                  </div>
                  <div style={styles.valueContent}>
                    <h3 style={styles.valueTitle}>{v.title}</h3>
                    <p style={styles.valueDesc}>{v.desc}</p>
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
    padding: '7rem 0',
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    gap: '5rem',
    flexWrap: 'wrap',
  },
  visualWrapper: {
    flex: '1 1 480px',
    position: 'relative',
    height: '520px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageCapsule: {
    width: '75%',
    height: '95%',
    borderRadius: '140px',
    overflow: 'hidden',
    border: '8px solid #ffffff',
    boxShadow: '0 25px 60px rgba(0,0,0,0.12)',
  },
  aboutImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  floatingStatsBadge: {
    position: 'absolute',
    bottom: '8%',
    right: '5%',
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0,0,0,0.06)',
    borderRadius: '24px',
    padding: '1rem 1.5rem',
    boxShadow: '0 15px 30px rgba(0,0,0,0.08)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  badgeNum: {
    fontSize: '2rem',
    fontWeight: '800',
    color: 'var(--brand-surgical-blue)',
    lineHeight: '1',
  },
  badgeLabel: {
    fontSize: '0.65rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'var(--neutral-charcoal)',
    letterSpacing: '0.05em',
    marginTop: '4px',
  },
  textWrapper: {
    flex: '1 1 450px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  subtag: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    color: 'var(--brand-surgical-blue)',
    fontWeight: '700',
    display: 'block',
  },
  sectionHeading: {
    fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
    color: 'var(--neutral-ink)',
    fontWeight: '800',
    letterSpacing: '-0.02em',
  },
  paragraph: {
    fontSize: '1.05rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.75',
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'var(--brand-surgical-blue)',
    color: '#ffffff',
    padding: '0.85rem 1.75rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '0.9rem',
    textDecoration: 'none',
    boxShadow: '0 6px 15px rgba(37,151,208,0.3)',
  },
  // Credentials
  credSection: {
    padding: '6rem 0',
    backgroundColor: '#f8fbfe',
    borderTop: '1px solid rgba(0,0,0,0.04)',
    borderBottom: '1px solid rgba(0,0,0,0.04)',
  },
  subtagCenter: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    color: 'var(--brand-surgical-blue)',
    fontWeight: '700',
    display: 'block',
    textAlign: 'center',
    marginBottom: '0.75rem',
  },
  sectionHeadingCenter: {
    fontSize: 'clamp(2.25rem, 3.5vw, 3rem)',
    color: 'var(--neutral-ink)',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    textAlign: 'center',
    marginBottom: '4rem',
  },
  sectionDescCenter: {
    fontSize: '1.1rem',
    color: 'var(--neutral-charcoal)',
    maxWidth: '560px',
    margin: '-3rem auto 4rem',
    textAlign: 'center',
    lineHeight: '1.65',
  },
  credList: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  credCard: {
    backgroundColor: '#ffffff',
    border: '1px solid rgba(0,0,0,0.05)',
    borderRadius: '20px',
    padding: '1.25rem 2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    transition: 'all 0.25s ease',
    cursor: 'default',
  },
  credIconWrapper: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    backgroundColor: 'var(--neutral-sky-tint)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  credLabel: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontWeight: '700',
    color: 'var(--neutral-slate)',
  },
  credValue: {
    fontSize: '0.98rem',
    fontWeight: '700',
    color: 'var(--neutral-ink)',
    marginTop: '2px',
  },
  // Values Cards Choose Us
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  valueCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #dbeef9',
    borderRadius: '24px',
    cursor: 'default',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  valueImgContainer: {
    width: '100%',
    height: '180px',
    position: 'relative',
    overflow: 'hidden',
  },
  valueImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  iconBoxFloating: {
    width: '42px',
    height: '42px',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '-21px',
    left: '1.75rem',
    boxShadow: '0 8px 20px rgba(37,151,208,0.15)',
    zIndex: 2,
  },
  valueContent: {
    padding: '2.5rem 1.75rem 2rem 1.75rem',
  },
  valueTitle: {
    fontSize: '1.2rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    marginBottom: '0.6rem',
  },
  valueDesc: {
    fontSize: '0.92rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.65',
  },
};
