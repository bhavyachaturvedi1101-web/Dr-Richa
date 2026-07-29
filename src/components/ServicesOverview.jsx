import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, Cpu, Shield, Award, Smile, Heart, Phone, ArrowRight } from 'lucide-react';

const servicesData = [
  {
    num: '01',
    category: 'Endodontics',
    title: 'Root Canal Treatment',
    desc: 'Save your natural teeth and eliminate pain with our advanced, microscopic-assisted endodontics.',
    icon: Activity,
    link: '/services#rct'
  },
  {
    num: '02',
    category: 'Diagnostics',
    title: 'Dental & Oral X-ray',
    desc: 'High-definition digital imaging for fast, safe, and extremely accurate clinical diagnosis.',
    icon: Cpu,
    link: '/services#xray'
  },
  {
    num: '03',
    category: 'Preventive Care',
    title: 'Cleaning & Polishing',
    desc: 'Gentle ultrasonic scaling to eliminate plaque, tartar, and maintain healthy, fresh gums.',
    icon: Shield,
    link: '/services#cleaning'
  },
  {
    num: '04',
    category: 'Orthodontics',
    title: 'Aligners & Metal Braces',
    desc: 'Correct alignment issues and achieve a beautifully aligned bite using comfortable invisible trays.',
    icon: Award,
    link: '/services#braces'
  },
  {
    num: '05',
    category: 'Specialized Care',
    title: 'Jaw Correction',
    desc: 'TMJ therapy and bite corrections to relieve joint strain and restore functional facial harmony.',
    icon: Smile,
    link: '/services#jaw'
  },
  {
    num: '06',
    category: 'Pediatric Care',
    title: 'Pediatric Dentistry',
    desc: 'Compassionate, friendly child checkups and cavity prevention to protect your child’s dental development.',
    icon: Heart,
    link: '/services#pediatric'
  },
  {
    num: '07',
    category: 'Emergency',
    title: '24 Hr Dental Emergency',
    desc: 'Immediate emergency relief for intense toothaches, swelling, or trauma. Available 24/7.',
    icon: Phone,
    link: '/contact',
    isEmergency: true
  }
];

export default function ServicesOverview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section style={styles.section} id="services">
      <div style={styles.container}>
        
        {/* Section Header */}
        <div style={styles.header}>
          <span style={styles.subtag}>Elite Care Spectrum</span>
          <h2 style={styles.heading}>Our Dental Services.</h2>
          <p style={styles.subheading}>
            World-class diagnostics and treatment blending clinical expertise with gentle, patient-first care.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          style={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {servicesData.map((svc, index) => {
            const Icon = svc.icon;
            const isEm = svc.isEmergency;

            return (
              <motion.div
                key={index}
                style={{
                  ...styles.card,
                  background: isEm ? 'linear-gradient(135deg, #07080a 0%, #151515 100%)' : '#ffffff',
                  border: isEm ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.05)',
                  boxShadow: isEm ? '0 15px 30px rgba(0,0,0,0.15)' : '0 10px 30px rgba(0,0,0,0.02)',
                }}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: isEm ? '0 20px 40px rgba(37,151,208,0.15)' : '0 20px 40px rgba(37,151,208,0.08)',
                  borderColor: 'rgba(37,151,208,0.3)'
                }}
              >
                <div style={styles.cardHeader}>
                  <span style={{ ...styles.cardNum, color: isEm ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)' }}>{svc.num}</span>
                  <div style={{
                    ...styles.iconBox,
                    backgroundColor: isEm ? 'rgba(255,255,255,0.08)' : 'var(--neutral-sky-tint)',
                  }}>
                    <Icon size={20} color={isEm ? '#7dd3fa' : 'var(--brand-surgical-blue)'} />
                  </div>
                </div>

                <div style={styles.cardContent}>
                  <span style={{ ...styles.cardCategory, color: isEm ? '#7dd3fa' : 'var(--brand-surgical-blue)' }}>
                    {svc.category}
                  </span>
                  <h3 style={{ ...styles.cardTitle, color: isEm ? '#ffffff' : 'var(--neutral-ink)' }}>
                    {svc.title}
                  </h3>
                  <p style={{ ...styles.cardDesc, color: isEm ? 'rgba(255,255,255,0.7)' : 'var(--neutral-charcoal)' }}>
                    {svc.desc}
                  </p>
                </div>

                <div style={styles.cardFooter}>
                  <Link 
                    to={svc.link} 
                    style={{ 
                      ...styles.cardLink, 
                      color: isEm ? '#7dd3fa' : 'var(--brand-surgical-blue)' 
                    }}
                  >
                    Explore Procedure <ArrowRight size={14} style={styles.arrowIcon} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Booking CTA banner */}
        <motion.div 
          style={styles.ctaBanner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div style={styles.ctaLeft}>
            <h4 style={styles.ctaTitle}>Looking for general checkups or custom treatments?</h4>
            <p style={styles.ctaDesc}>Get in touch for diagnostic checkups and treatment blueprints.</p>
          </div>
          <Link to="/contact" style={styles.ctaBtn}>
            Book a Consultation →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '7rem 0',
    backgroundColor: '#fdfbf7',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },
  card: {
    borderRadius: '24px',
    padding: '2.25rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '320px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  cardNum: {
    fontSize: '1.75rem',
    fontWeight: '300',
    letterSpacing: '-0.02em',
  },
  iconBox: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    marginBottom: '2rem',
  },
  cardCategory: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    fontWeight: '700',
    display: 'block',
    marginBottom: '0.5rem',
  },
  cardTitle: {
    fontSize: '1.35rem',
    fontWeight: '800',
    lineHeight: '1.2',
    letterSpacing: '-0.01em',
    marginBottom: '0.75rem',
  },
  cardDesc: {
    fontSize: '0.92rem',
    lineHeight: '1.6',
  },
  cardFooter: {
    display: 'flex',
    alignItems: 'center',
  },
  cardLink: {
    fontSize: '0.85rem',
    fontWeight: '700',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    transition: 'gap 0.2s',
  },
  arrowIcon: {
    transition: 'transform 0.2s',
  },
  ctaBanner: {
    marginTop: '6rem',
    backgroundColor: '#f8fbfe',
    border: '1px solid #dbeef9',
    borderRadius: '30px',
    padding: '2.5rem 3.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  ctaLeft: {
    flex: '1 1 500px',
  },
  ctaTitle: {
    fontSize: '1.2rem',
    color: 'var(--neutral-ink)',
    fontWeight: '800',
    marginBottom: '0.5rem',
  },
  ctaDesc: {
    fontSize: '0.92rem',
    color: 'var(--neutral-charcoal)',
  },
  ctaBtn: {
    backgroundColor: 'var(--brand-surgical-blue)',
    color: '#ffffff',
    padding: '0.9rem 2rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '0.95rem',
    textDecoration: 'none',
    boxShadow: '0 4px 14px rgba(37, 151, 208, 0.3)',
    whiteSpace: 'nowrap',
  },
};
