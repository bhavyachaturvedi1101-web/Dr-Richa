import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Calendar, ArrowRight } from 'lucide-react';

const blogArticles = [
  {
    slug: 'clinical-rigor-painless-dentistry',
    title: 'Clinical Rigor & Our Zero-Pain Protocol',
    excerpt: 'How modern computer-controlled local anesthesia and rotary tools have completely eliminated dental anxiety for patients.',
    category: 'Patient Comfort',
    author: 'Dr. Richa Tiwari',
    date: 'July 15, 2026',
    readTime: '4 min read',
    image: '/images/patient_comfort_blog.png'
  },
  {
    slug: 'microscopic-rct-game-changer',
    title: 'Why Microscope-Assisted RCT is a Game Changer',
    excerpt: 'Detailed insights on how high-precision microscopic root canal therapies allow us to save your original biological tooth structure.',
    category: 'Endodontics',
    author: 'Dr. Richa Tiwari',
    date: 'June 28, 2026',
    readTime: '6 min read',
    image: '/images/endodontics_blog.png'
  },
  {
    slug: 'importance-of-child-dentistry-blueprints',
    title: 'The Vital Blueprint of Pediatric Dental Health',
    excerpt: 'Why baby teeth matter more than most parents realize, and how early cavity sealants guide the permanent teeth into perfect alignment.',
    category: 'Pediatric Care',
    author: 'Dr. Richa Tiwari',
    date: 'May 10, 2026',
    readTime: '5 min read',
    image: '/images/pediatric_blog.png'
  },
  {
    slug: 'myth-prevention-vs-pain',
    title: 'Debunking Myths: Why Waiting for Pain is a Risk',
    excerpt: 'Decay starts painlessly. We explain how semiannual diagnostic scans catch 90% of structural issues before they require root canals.',
    category: 'Preventive Care',
    author: 'Dr. Richa Tiwari',
    date: 'April 14, 2026',
    readTime: '3 min read',
    image: '/images/preventive_blog.png'
  }
];

export default function Blogs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
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
              Clinical Wisdom
            </motion.p>
            <motion.h1 style={styles.heroTitle} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              Our Dental <span style={{ color: 'var(--brand-surgical-blue)' }}>Blogs.</span>
            </motion.h1>
            <motion.p style={styles.heroDesc} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              Curated medical syntheses on oral integrity, biological preservation, and dental wellness.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── BLOGS GRID ── */}
      <section style={styles.section}>
        <div style={styles.container}>
          
          <motion.div 
            style={styles.grid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {blogArticles.map((article, idx) => (
              <motion.div
                key={idx}
                style={{
                  ...styles.card,
                  top: `calc(120px + ${idx * 20}px)`,
                  zIndex: idx,
                }}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
              >
                {/* Background Image & Gradient */}
                <div style={styles.cardBackground}>
                  <motion.img 
                    src={article.image} 
                    alt={article.title} 
                    style={styles.backgroundImage} 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div style={styles.overlayGradient} />
                </div>

                {/* Overlay Content */}
                <div style={styles.cardContentOverlay}>
                  <div style={styles.cardHeader}>
                    <span style={styles.category}>{article.category}</span>
                    <span style={styles.readTime}>{article.readTime}</span>
                  </div>

                  <div style={styles.cardMainText}>
                    <h3 style={styles.blogTitle}>{article.title}</h3>
                    <p style={styles.excerpt}>{article.excerpt}</p>
                  </div>

                  <div style={styles.cardFooter}>
                    <div style={styles.metaRow}>
                      <div style={styles.metaItem}>
                        <User size={14} color="rgba(255,255,255,0.7)" />
                        <span>{article.author}</span>
                      </div>
                      <div style={styles.metaItem}>
                        <Calendar size={14} color="rgba(255,255,255,0.7)" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    
                    <div style={styles.line} />
                    
                    <Link to="/contact" style={styles.readLink}>
                      Read Article <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
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
    flexDirection: 'column',
    gap: '4rem',
    maxWidth: '850px',
    margin: '0 auto',
    paddingBottom: '5rem',
  },
  card: {
    position: 'sticky',
    borderRadius: '24px',
    overflow: 'hidden',
    minHeight: '480px',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 -10px 40px rgba(0,0,0,0.05)',
  },
  cardBackground: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlayGradient: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.2) 100%)',
    zIndex: 1,
  },
  cardContentOverlay: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '3rem',
    flex: 1,
    height: '100%',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 'auto', // Pushes everything else down
  },
  category: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    fontWeight: '800',
    color: '#ffffff',
    backgroundColor: 'var(--brand-surgical-blue)',
    padding: '0.35rem 0.85rem',
    borderRadius: '6px',
  },
  readTime: {
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.9)',
    fontWeight: '600',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: '0.3rem 0.75rem',
    borderRadius: '999px',
    backdropFilter: 'blur(4px)',
  },
  cardMainText: {
    marginBottom: '2rem',
    marginTop: '4rem',
  },
  blogTitle: {
    fontSize: '2rem',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: '1.2',
    letterSpacing: '-0.01em',
    marginBottom: '1rem',
  },
  excerpt: {
    fontSize: '1.05rem',
    color: 'rgba(255,255,255,0.8)',
    lineHeight: '1.6',
    maxWidth: '650px',
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  metaRow: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.9rem',
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
  },
  line: {
    height: '1px',
    backgroundColor: 'rgba(255,255,255,0.15)',
    width: '100%',
  },
  readLink: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: '#ffffff',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    alignSelf: 'flex-start',
  }
};
