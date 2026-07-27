import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Cpu, Shield, Award, Smile, Heart, Phone, ClipboardCheck } from 'lucide-react';

const deepServices = [
  {
    id: 'rct',
    tag: 'Endodontics',
    title: 'Root Canal Treatment (RCT)',
    desc: 'Deep bacterial decay can compromise the vital pulp of your tooth. Dr. Richa Tiwari walks you through every step of our microscope-assisted therapy to save your biological tooth safely and painlessly.',
    points: [
      'High-precision rotary file systems for silent, frictionless cleaning',
      'Microscopic mapping of root canals to catch complex branches',
      'Bio-compatible thermoplastic sealing to prevent reinfection',
      'Single-sitting procedures for 90% of uncomplicated cases'
    ],
    image: '/rct_image.png',
    icon: Activity
  },
  {
    id: 'xray',
    tag: 'Diagnostics',
    title: 'Dental & Oral X-ray',
    desc: 'Complete diagnostic precision is the bedrock of honest medicine. We utilize low-radiation digital oral imaging to diagnose underlying issues immediately.',
    points: [
      '90% lower radiation exposure than traditional film X-rays',
      'Instant high-resolution digital visual output on chairside screens',
      'Accurate detection of interproximal decay, jaw cysts, and bone integrity',
      'Detailed visual blueprints provided before any treatment begins'
    ],
    image: '/dental_service_1.jpg',
    icon: Cpu
  },
  {
    id: 'cleaning',
    tag: 'Preventive Care',
    title: 'Teeth Cleaning & Polishing',
    desc: 'Plaque and tartar accumulation host millions of bacteria that cause gum disease. Our professional scaling maintains clean, healthy biological foundations.',
    points: [
      'Advanced painless ultrasonic scaling to clean under the gumline',
      'Polishing with air-flow systems to restore original luster',
      'Removes surface stains from coffee, tea, and smoking instantly',
      'Comes with a complete diagnostic gum recession checkup'
    ],
    image: '/dental_service_6.jpg',
    icon: Shield
  },
  {
    id: 'braces',
    tag: 'Orthodontics',
    title: 'Clear Aligners & Metal Braces',
    desc: 'Correct crowded or crooked teeth to achieve balance and jaw harmony. We offer both invisible clear trays and durable metal braces.',
    points: [
      'Premium computer-guided clear aligners that are virtually invisible',
      'Traditional metal and ceramic braces for complex structural corrections',
      'Step-by-step digital simulation of your target orthodontic results',
      'Tailored follow-up cycles for steady, safe alignment correction'
    ],
    image: '/dental_service_4.jpg',
    icon: Award
  },
  {
    id: 'jaw',
    tag: 'Specialized Care',
    title: 'Jaw Correction (TMJ)',
    desc: 'Relieve chronic jaw pain, clicking sounds, and headache symptoms caused by temporomandibular joint disorders or bite imbalances.',
    points: [
      'Custom nocturnal splints to eliminate teeth grinding (bruxism)',
      'Orthopedic jaw alignment and occlusal equilibrations',
      'Specialized physical exercises to restore smooth joint mobility',
      'Full facial symmetry mapping for aesthetic bite adjustments'
    ],
    image: '/dental_service_2.jpg',
    icon: Smile
  },
  {
    id: 'pediatric',
    tag: 'Pediatrics',
    title: 'Pediatric Dentistry',
    desc: 'Build positive oral habits for your children. We offer cavity sealants, gentle cleanings, and anxiety-free pediatric reinforcements.',
    points: [
      'Hospitality-focused, zero-anxiety child clinical environment',
      'Fluoride varnishes and preventive cavity pit-and-fissure sealants',
      'Monitoring primary-to-permanent tooth blueprints to avoid braces',
      'Habit correction counseling for thumb sucking and mouth breathing'
    ],
    image: '/dental_service_3.jpg',
    icon: Heart
  },
  {
    id: 'emergency',
    tag: 'Emergency Care',
    title: '24 Hour Dental Emergency',
    desc: 'Intense toothaches, broken teeth, or sudden clinical swelling require immediate, empathetic care. We are accessible around the clock in Indore.',
    points: [
      'Immediate access to Dr. Richa Tiwari for trauma or severe pain',
      'Emergency nerve sedation and swelling management protocols',
      'Available 24 hours a day, 7 days a week',
      'Direct contact line: 6262178282'
    ],
    image: '/emergency_image.png',
    icon: Phone,
    isEmergency: true
  }
];

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  const scrollToAnchor = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      
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
              Our Procedures
            </motion.p>
            <motion.h1 style={styles.heroTitle} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              Dental Procedures
            </motion.h1>
            <motion.p style={styles.heroDesc} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              World-class specialized treatments blending dental technology with a quiet clinical touch.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── DETAILS WRAPPER ── */}
      <section style={styles.detailsSection}>
        <div style={styles.container}>
          <div style={styles.layoutWrapper}>
            
            {/* Left Column: Sticky Sidebar Menu */}
            <div style={styles.sidebarCol} className="desktop-nav">
              <div style={styles.sidebarCard}>
                <p style={styles.sidebarTitle}>Treatment Menu</p>
                <div style={styles.sidebarList}>
                  {deepServices.map((svc) => {
                    const Icon = svc.icon;
                    return (
                      <button
                        key={svc.id}
                        onClick={() => scrollToAnchor(svc.id)}
                        style={styles.sidebarBtn}
                      >
                        <Icon size={16} style={{ color: 'var(--brand-surgical-blue)' }} />
                        <span style={styles.sidebarBtnText}>{svc.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Deep-dive Service Cards */}
            <div style={styles.contentCol}>
              {deepServices.map((svc, idx) => {
                const Icon = svc.icon;
                const isEm = svc.isEmergency;

                return (
                  <motion.div
                    key={svc.id}
                    id={svc.id}
                    style={{
                      ...styles.detailBlock,
                      borderTop: idx > 0 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                      paddingTop: idx > 0 ? '5rem' : '0',
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div style={styles.blockGrid}>
                      {/* Image Block */}
                      <div style={styles.imageBlock}>
                        {isEm ? (
                          <div style={styles.emergencyVisual}>
                            <div style={styles.emBadge}>24/7</div>
                            <p style={styles.emLabel}>Active Emergency Desk</p>
                          </div>
                        ) : (
                          <img src={svc.image} alt={svc.title} style={styles.procedureImg} />
                        )}
                        <div style={styles.imgAccentOverlay} />
                      </div>

                      {/* Info Block */}
                      <div style={styles.infoBlock}>
                        <div style={styles.tagWrapper}>
                          <Icon size={16} color="var(--brand-surgical-blue)" />
                          <span style={styles.tagText}>{svc.tag}</span>
                        </div>
                        
                        <h3 style={styles.blockTitle}>{svc.title}</h3>
                        <p style={styles.blockDesc}>{svc.desc}</p>

                        <div style={styles.pointsList}>
                          {svc.points.map((pt, i) => (
                            <div key={i} style={styles.pointRow}>
                              <ClipboardCheck size={16} color="var(--brand-trust-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span style={styles.pointText}>{pt}</span>
                            </div>
                          ))}
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Link to="/contact" style={{
                              ...styles.bookBtn,
                              backgroundColor: isEm ? '#ef4444' : 'var(--neutral-ink)',
                              boxShadow: isEm ? '0 6px 15px rgba(239,68,68,0.3)' : '0 6px 15px rgba(0,0,0,0.1)'
                            }}>
                              Book Procedure consultation
                            </Link>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

    </div>
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
    backgroundColor: '#07080a',
    padding: '9rem 0 7rem',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(7,8,10,0.6) 0%, rgba(7,8,10,0.85) 100%)',
    zIndex: 1,
  },
  heroOverlayGrid: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 80% 20%, rgba(37,151,208,0.18) 0%, transparent 60%)',
    zIndex: 1,
  },
  heroContent: {
    maxWidth: '700px',
    color: '#ffffff',
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
    marginBottom: '1.25rem',
  },
  heroDesc: {
    fontSize: '1.15rem',
    color: 'rgba(255,255,255,0.8)',
    lineHeight: '1.65',
  },
  // Details Section Layout
  detailsSection: {
    padding: '6rem 0 7rem',
  },
  layoutWrapper: {
    display: 'flex',
    gap: '3rem',
  },
  // Sticky Sidebar Menu
  sidebarCol: {
    flex: '0 0 280px',
  },
  sidebarCard: {
    position: 'sticky',
    top: '110px',
    backgroundColor: '#f8fbfe',
    border: '1px solid #dbeef9',
    borderRadius: '24px',
    padding: '1.75rem',
  },
  sidebarTitle: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    fontWeight: '800',
    color: 'var(--neutral-slate)',
    marginBottom: '1.25rem',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
    paddingBottom: '0.75rem',
  },
  sidebarList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  sidebarBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: 'none',
    border: 'none',
    width: '100%',
    padding: '0.65rem 0.75rem',
    borderRadius: '10px',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'background-color 0.2s',
    outline: 'none',
  },
  sidebarBtnText: {
    fontSize: '0.88rem',
    fontWeight: '700',
    color: 'var(--neutral-ink)',
  },
  // Detailed Service block
  contentCol: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '5rem',
  },
  detailBlock: {
    scrollMarginTop: '110px',
  },
  blockGrid: {
    display: 'flex',
    gap: '3rem',
    flexWrap: 'wrap',
  },
  imageBlock: {
    flex: '1 1 300px',
    height: '320px',
    borderRadius: '24px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 20px 45px rgba(0,0,0,0.06)',
  },
  procedureImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imgAccentOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(37,151,208,0.08), transparent)',
    pointerEvents: 'none',
  },
  emergencyVisual: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #ef4444 0%, #991b1b 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  },
  emBadge: {
    fontSize: '4.5rem',
    fontWeight: '800',
    lineHeight: '1',
  },
  emLabel: {
    fontSize: '0.9rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginTop: '0.5rem',
  },
  infoBlock: {
    flex: '1.2 1 380px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  tagWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  tagText: {
    fontSize: '0.78rem',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    fontWeight: '700',
    color: 'var(--brand-surgical-blue)',
  },
  blockTitle: {
    fontSize: '1.75rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    letterSpacing: '-0.01em',
  },
  blockDesc: {
    fontSize: '0.98rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.7',
  },
  pointsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginVertical: '0.5rem',
  },
  pointRow: {
    display: 'flex',
    gap: '10px',
    alignItems: 'flex-start',
  },
  pointText: {
    fontSize: '0.9rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.5',
  },
  bookBtn: {
    display: 'inline-flex',
    color: '#ffffff',
    padding: '0.85rem 1.75rem',
    borderRadius: '12px',
    fontWeight: '700',
    fontSize: '0.9rem',
    textDecoration: 'none',
  }
};
