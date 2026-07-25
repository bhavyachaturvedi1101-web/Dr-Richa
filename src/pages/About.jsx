import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, Heart, Shield } from 'lucide-react';

const quickInfo = [
  { label: 'Specialization', value: 'Dentist, Implantologist, Oral And Maxillofacial Surgeon' },
  { label: 'Qualification', value: 'BDS - MP Medical Science University (2022)' },
  { label: 'Experience', value: '4 Years in Healthcare' },
  { label: 'Languages', value: 'English, Hindi' },
  { label: 'Registration', value: 'A-12354-Dental Council Of India' },
  { label: 'Consultation Fee', value: '₹ 100' },
  { label: 'Video Consultation', value: 'Available (₹ 100)' },
];

const values = [
  { icon: Heart, title: 'Patient-First Care', desc: 'Every decision we make centers on your comfort, health, and long-term smile.' },
  { icon: Shield, title: 'No Hidden Charges', desc: 'Transparent pricing with honest advice. We never recommend unnecessary procedures.' },
  { icon: Award, title: 'Modern Equipment', desc: 'Fully sterilized, state-of-the-art equipment to ensure maximum safety and precision.' },
  { icon: CheckCircle2, title: 'Painless Treatments', desc: 'Advanced techniques and gentle care make every procedure as comfortable as possible.' },
];

export default function About() {
  return (
    <div style={{ backgroundColor: '#f8fbfe' }}>

      {/* ── HERO BANNER ── */}
      <section style={styles.heroBanner}>
        <div style={styles.heroBannerOverlay} />
        <motion.div
          style={styles.heroBannerContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p style={styles.eyebrow}>— ABOUT US</p>
          <h1 style={styles.heroTitle}>Dr. Jain's Multi-Speciality<br />Dental & Polyclinic</h1>
          <p style={styles.heroSub}>Trusted dental care in Mandsaur — where expertise meets compassion.</p>
        </motion.div>
      </section>

      {/* ── MEET DR. JAIN ── */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.splitBlock} className="split-block">
            <motion.div
              style={styles.imageBox}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src="/about_doc.png" alt="Dr. Kapil Jain" style={styles.img} />
            </motion.div>
            <motion.div
              style={styles.textBox}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p style={styles.eyebrow2}>— THE DOCTOR</p>
              <h2 style={styles.sectionTitle}>Meet Dr. Kapil Jain</h2>
              <p style={styles.body}>
                Dr. Kapil Jain is an experienced, polite, and highly professional dentist serving the Mandsaur
                community. He holds a BDS degree from Madhya Pradesh Medical Science University (2022) and
                specializes in Dental Implantology and Oral & Maxillofacial Surgery.
              </p>
              <p style={styles.body} style={{ marginTop: '1rem' }}>
                He believes in taking the time to explain every dental problem and proposed treatment
                to patients — ensuring they feel comfortable, informed, and in control. His gentle approach
                makes every visit a reassuring experience.
              </p>
              <Link to="/contact" style={styles.cta}>Book an Appointment →</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={{ ...styles.splitBlock, flexDirection: 'row-reverse' }} className="split-block">
            <motion.div
              style={styles.imageBox}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src="/highlights.png" alt="Modern Dental Equipment" style={styles.img} />
            </motion.div>
            <motion.div
              style={styles.textBox}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p style={styles.eyebrow2}>— OUR PHILOSOPHY</p>
              <h2 style={styles.sectionTitle}>Care you can trust, every time.</h2>
              <p style={styles.body}>
                We are dedicated to providing completely painless treatments. We never recommend
                unnecessary procedures or add hidden charges. Our clinic is equipped with modern,
                sterilized equipment to maintain the highest standards of hygiene and patient safety.
              </p>
              <p style={{ ...styles.body, marginTop: '1rem' }}>
                We want your visit to be comfortable, transparent, and relieving. Your trust is
                our greatest asset, and we work every day to earn it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={styles.valuesSection}>
        <div style={styles.container}>
          <motion.p style={styles.eyebrow} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>— WHY CHOOSE US</motion.p>
          <motion.h2 style={styles.sectionTitle} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            What makes us different
          </motion.h2>
          <div style={styles.valuesGrid}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={i}
                  style={styles.valueCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(37,151,208,0.12)' }}
                >
                  <div style={styles.iconBox}><Icon size={24} color="var(--brand-surgical-blue)" /></div>
                  <h3 style={styles.valueTitle}>{v.title}</h3>
                  <p style={styles.valueDesc}>{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

const styles = {
  heroBanner: {
    position: 'relative',
    backgroundImage: 'url(/clinic_interior.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '50vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  heroBannerOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,30,60,0.7), rgba(0,30,60,0.6))',
  },
  heroBannerContent: {
    position: 'relative',
    zIndex: 2,
    padding: '0 2rem',
  },
  eyebrow: {
    color: 'var(--brand-surgical-blue)',
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: '0.75rem',
    textAlign: 'center',
  },
  eyebrow2: {
    color: 'var(--brand-surgical-blue)',
    fontSize: '0.82rem',
    fontWeight: '700',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    marginBottom: '0.75rem',
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: '800',
    lineHeight: 1.15,
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
  },
  heroSub: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '1.1rem',
  },
  section: {
    padding: '6rem 2rem',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
    color: 'var(--neutral-ink)',
    fontWeight: '700',
    marginBottom: '1.5rem',
    letterSpacing: '-0.02em',
    lineHeight: 1.2,
  },
  splitBlock: {
    display: 'flex',
    gap: '5rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  imageBox: {
    flex: '1 1 420px',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 50px rgba(37,151,208,0.12)',
  },
  img: {
    width: '100%',
    minHeight: '420px',
    objectFit: 'cover',
    display: 'block',
  },
  textBox: {
    flex: '1 1 340px',
  },
  body: {
    fontSize: '1.08rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.75',
  },
  cta: {
    display: 'inline-block',
    marginTop: '2rem',
    color: 'var(--brand-surgical-blue)',
    fontWeight: '700',
    fontSize: '1rem',
    borderBottom: '2px solid var(--brand-surgical-blue)',
    paddingBottom: '2px',
    textDecoration: 'none',
  },
  infoSection: {
    padding: '6rem 2rem',
    backgroundColor: 'var(--neutral-cloud-gray)',
    textAlign: 'center',
  },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '1.5rem',
    marginTop: '3rem',
    textAlign: 'left',
  },
  infoCard: {
    backgroundColor: '#ffffff',
    padding: '1.75rem 2rem',
    borderRadius: '16px',
    border: '1px solid #dbeef9',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    cursor: 'default',
    transition: 'box-shadow 0.3s',
  },
  infoLabel: {
    fontSize: '0.8rem',
    color: 'var(--brand-surgical-blue)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontWeight: '700',
  },
  infoValue: {
    fontSize: '1.05rem',
    color: 'var(--neutral-ink)',
    fontWeight: '600',
    lineHeight: '1.4',
  },
  valuesSection: {
    padding: '6rem 2rem',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '2rem',
    marginTop: '3rem',
    textAlign: 'left',
  },
  valueCard: {
    backgroundColor: '#f8fbfe',
    padding: '2rem',
    borderRadius: '20px',
    border: '1px solid #dbeef9',
    cursor: 'default',
    transition: 'box-shadow 0.3s',
  },
  iconBox: {
    backgroundColor: '#e0f2fe',
    width: '52px',
    height: '52px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.25rem',
  },
  valueTitle: {
    fontSize: '1.15rem',
    color: 'var(--neutral-ink)',
    fontWeight: '700',
    marginBottom: '0.6rem',
  },
  valueDesc: {
    fontSize: '0.95rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.65',
  },
};
