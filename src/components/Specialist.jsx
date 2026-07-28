import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

// Count-up component — animates from 0 to `target` when scrolled into view
function CountUp({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Specialist() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const listItems = [
    {
      id: 'rct',
      num: '01',
      title: 'Microscopic Root Canal Therapy (RCT)',
      category: 'ENDODONTICS',
      desc: 'Painless, precision endodontic therapy performed under high-magnification surgical operating microscopes to preserve natural teeth.',
      tagline: 'High-Magnification Precision',
      image: '/exp-1.png',
      badge: 'Microscope Assisted',
      stat: '100%',
      statLabel: 'Tooth Saved'
    },
    {
      id: 'laser',
      num: '02',
      title: 'Painless Laser & Restorative Endodontics',
      category: 'LASER THERAPY',
      desc: 'Advanced bio-laser sterilizing technology for bloodless, silent, zero-anxiety gum and pulpal restorations.',
      tagline: 'Bloodless & Silent Procedure',
      image: '/exp-2.png',
      badge: 'Zero-Anxiety Bio-Laser',
      stat: '0%',
      statLabel: 'Bleeding & Pain'
    },
    {
      id: 'crowns',
      num: '03',
      title: 'Aesthetic Ceramic Crowns & Restoration',
      category: 'PROSTHODONTICS',
      desc: 'Custom CAD/CAM zirconia and E-max metal-free ceramic crowns engineered for natural translucent smiles and maximum bite strength.',
      tagline: 'CAD/CAM Engineered Zirconia',
      image: '/crowns_image.png',
      badge: 'Metal-Free Ceramic',
      stat: '10 Yrs+',
      statLabel: 'Durability'
    },
    {
      id: 'preventive',
      num: '04',
      title: 'Gentle Preventive Cleaning & Hygiene',
      category: 'PREVENTIVE CARE',
      desc: 'Ultrasonic scaling and polished stain removal to prevent gingivitis, periodontitis, and maintain lifelong oral wellness.',
      tagline: 'Ultrasonic Stain Removal',
      image: '/dental_service_2.jpg',
      badge: 'Deep Ultrasonic Scale',
      stat: '90%',
      statLabel: 'Issue Prevention'
    },
    {
      id: 'pediatric',
      num: '05',
      title: 'Pediatric Dentistry & Child Oral Care',
      category: 'PEDODONTICS',
      desc: 'Gentle, zero-anxiety pediatric care, fluoride sealants, and cavity management tailored for children in a warm, welcoming environment.',
      tagline: 'Child-Friendly Environment',
      image: '/exp-2.png',
      badge: 'Zero-Anxiety Kids Care',
      stat: '100%',
      statLabel: 'Child Comfort'
    },
    {
      id: 'tmj',
      num: '06',
      title: 'TMJ Treatment & Jaw Corrections',
      category: 'MAXILLOFACIAL CARE',
      desc: 'Non-invasive temporomandibular joint therapy, bite realignment splints, and muscle relaxation to eliminate chronic jaw pain.',
      tagline: 'Bite Realignment & Pain Relief',
      image: '/dental_service_4.jpg',
      badge: 'Non-Invasive Splint Therapy',
      stat: '95%',
      statLabel: 'Pain Relief'
    },
  ];

  // Auto rotate tabs like Squarespace showcase
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % listItems.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, listItems.length]);

  const activeItem = listItems[activeIndex];

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
              whileHover={{ y: -8, scale: 1.02 }}
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
              <motion.div 
                style={styles.statBox}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span style={styles.statNum}><CountUp target={9} suffix="+" duration={1200} /></span>
                <div style={styles.statDivider} />
                <span style={styles.statLabel}>Years Mastery</span>
              </motion.div>

              <motion.div 
                style={styles.statBox}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span style={styles.statNum}><CountUp target={4000} suffix="+" duration={2000} /></span>
                <div style={styles.statDivider} />
                <span style={styles.statLabel}>Procedures</span>
              </motion.div>

              <motion.div 
                style={styles.statBox}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span style={styles.statNum}><CountUp target={99} suffix="%" duration={1600} /></span>
                <div style={styles.statDivider} />
                <span style={styles.statLabel}>Satisfaction</span>
              </motion.div>
            </div>
          </div>

        </div>

        {/* Areas of Expertise - Squarespace Split Progress Showcase Animation */}
        <div 
          style={styles.expertiseSection}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div style={styles.headerWrapper}>
            <div style={styles.pillTag}>
              <Sparkles size={14} color="#38bdf8" />
              <span>CLINICAL EXCELLENCE</span>
            </div>
            <h3 style={styles.expertiseSubheading}>Areas of Expertise</h3>
            <p style={styles.expertiseDesc}>Advanced procedures utilizing state-of-the-art diagnostic machinery and micro-surgical operating tools.</p>
          </div>

          {/* Squarespace Split Showcase Viewport */}
          <div style={styles.showcaseGrid} className="responsive-grid-2">
            
            {/* Left Column: Interactive Feature Tabs */}
            <div style={styles.tabsCol}>
              {listItems.map((item, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <motion.div
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => { setActiveIndex(idx); setIsPaused(true); }}
                    onMouseLeave={() => setIsPaused(false)}
                    style={{
                      ...styles.tabCard,
                      backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                      borderColor: isActive ? 'rgba(56, 189, 248, 0.4)' : 'rgba(0,0,0,0.05)',
                      boxShadow: isActive ? '0 15px 35px rgba(37, 151, 208, 0.12)' : 'none',
                    }}
                    whileHover={{ x: 6, backgroundColor: '#ffffff' }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Active Progress Bar Animation */}
                    {isActive && (
                      <motion.div 
                        style={styles.progressBar}
                        initial={{ width: '0%' }}
                        animate={{ width: isPaused ? '100%' : '100%' }}
                        transition={{ duration: isPaused ? 0 : 5.5, ease: 'linear' }}
                      />
                    )}

                    <div style={styles.tabHeader}>
                      <div style={styles.tabNumGroup}>
                        <span style={{
                          ...styles.tabNum,
                          color: isActive ? 'var(--brand-surgical-blue)' : 'var(--neutral-slate)'
                        }}>
                          {item.num}
                        </span>
                      </div>
                      <span style={styles.tabCategory}>{item.category}</span>
                    </div>

                    <h4 style={{
                      ...styles.tabTitle,
                      color: isActive ? 'var(--brand-surgical-blue)' : 'var(--neutral-ink)'
                    }}>
                      {item.title}
                    </h4>

                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: 'easeInOut' }}
                        >
                          <p style={styles.tabDesc}>{item.desc}</p>
                          <div style={styles.tabTagline}>
                            <CheckCircle2 size={14} color="#10b981" />
                            <span>{item.tagline}</span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: Dynamic Image Showcase */}
            <div style={styles.displayCol} className="expertise-image-col">
              <div style={styles.displayFrame} className="expertise-image-frame">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 1.02, y: -15 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={styles.imageWrapper}
                  >
                    <img 
                      src={activeItem.image} 
                      alt={activeItem.title}
                      style={styles.displayImage}
                    />
                    <div style={styles.imageOverlay} />

                    {/* Top Glass Badge */}
                    <motion.div 
                      style={styles.topGlassBadge}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.4 }}
                    >
                      <ShieldCheck size={14} color="#38bdf8" />
                      <span>{activeItem.badge}</span>
                    </motion.div>

                    {/* Bottom Glass Content Card */}
                    <motion.div 
                      style={styles.bottomGlassCard}
                      className="expertise-glass-card"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <div style={styles.glassStatBox}>
                        <span style={styles.glassStatNum}>{activeItem.stat}</span>
                        <span style={styles.glassStatLabel}>{activeItem.statLabel}</span>
                      </div>

                      <div style={styles.glassInfo}>
                        <h4 style={styles.glassTitle}>{activeItem.title}</h4>
                        <p style={styles.glassTagline}>{activeItem.tagline}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

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
    maxWidth: '1240px',
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
    marginTop: '7rem',
    borderTop: '1px solid rgba(0,0,0,0.06)',
    paddingTop: '5rem',
  },
  headerWrapper: {
    textAlign: 'center',
    marginBottom: '4rem',
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
    marginBottom: '1rem',
  },
  expertiseSubheading: {
    fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    letterSpacing: '-0.02em',
    marginBottom: '0.75rem',
  },
  expertiseDesc: {
    fontSize: '1.05rem',
    color: 'var(--neutral-charcoal)',
    maxWidth: '580px',
    lineHeight: '1.65',
  },
  showcaseGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'start',
  },
  tabsCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  tabCard: {
    position: 'relative',
    borderRadius: '20px',
    border: '1px solid rgba(0,0,0,0.06)',
    padding: '1.5rem',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.35s ease',
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '3px',
    backgroundColor: 'var(--brand-surgical-blue)',
    borderRadius: '999px',
  },
  tabHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  tabNumGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  tabNum: {
    fontSize: '0.85rem',
    fontWeight: '800',
    letterSpacing: '0.08em',
  },
  tabCategory: {
    fontSize: '0.68rem',
    fontWeight: '800',
    color: 'var(--neutral-slate)',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
  },
  tabTitle: {
    fontSize: '1.25rem',
    fontWeight: '800',
    letterSpacing: '-0.01em',
    marginBottom: '0.25rem',
  },
  tabDesc: {
    fontSize: '0.9rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.6',
    marginTop: '0.5rem',
    marginBottom: '0.75rem',
  },
  tabTagline: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.78rem',
    fontWeight: '700',
    color: 'var(--brand-surgical-blue)',
  },
  displayCol: {
    position: 'sticky',
    top: '120px',
    height: 'fit-content',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  displayFrame: {
    position: 'relative',
    width: '100%',
    height: '680px',
    borderRadius: '36px',
    overflow: 'hidden',
    border: '6px solid #ffffff',
    boxShadow: '0 30px 70px rgba(0, 0, 0, 0.12)',
    backgroundColor: '#0f172a',
  },
  imageWrapper: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
  },
  displayImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)',
  },
  topGlassBadge: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: '#ffffff',
    fontSize: '0.78rem',
    fontWeight: '700',
    padding: '6px 16px',
    borderRadius: '999px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  bottomGlassCard: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    right: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '24px',
    padding: '1.25rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
  },
  glassStatBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--neutral-sky-tint)',
    padding: '0.6rem 1.2rem',
    borderRadius: '16px',
    flexShrink: 0,
  },
  glassStatNum: {
    fontSize: '1.4rem',
    fontWeight: '900',
    color: 'var(--brand-surgical-blue)',
    lineHeight: '1.1',
  },
  glassStatLabel: {
    fontSize: '0.62rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'var(--neutral-charcoal)',
    marginTop: '2px',
  },
  glassInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  glassTitle: {
    fontSize: '1.15rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
  },
  glassTagline: {
    fontSize: '0.82rem',
    color: 'var(--neutral-charcoal)',
    fontWeight: '600',
  },
};


