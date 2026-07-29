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
      <section style={styles.heroBanner} className="blogs-hero-banner">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=2070&q=80"
          alt="Dr. Richa Tiwari - Clinical Wisdom & Dental Research"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 25%',
            zIndex: 0,
          }}
        />

        {/* Subtle Dark Overlay to ensure 100% crystal clear white text */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.5) 50%, rgba(15, 23, 42, 0.3) 100%)',
          zIndex: 1
        }} />

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
              style={{ ...styles.heroSubtag, color: '#38bdf8' }} 
              className="blogs-hero-subtag"
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            >
              Clinical Wisdom
            </motion.p>
            <motion.h1 
              style={{ ...styles.heroTitle, color: '#ffffff', textShadow: '0 2px 15px rgba(0,0,0,0.6)' }} 
              className="blogs-hero-title"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Our Dental <span style={{ color: '#38bdf8' }}>Blogs.</span>
            </motion.h1>
            <motion.p 
              style={{ ...styles.heroDesc, color: '#e2e8f0', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }} 
              className="blogs-hero-desc"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
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
            className="blogs-grid-container"
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
                className="blog-card-item"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
              >
                {/* Background Image & Gradient */}
                <div style={styles.cardBackground} className="blog-card-bg">
                  <motion.img 
                    src={article.image} 
                    alt={article.title} 
                    style={styles.backgroundImage} 
                    className="blog-card-img"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div style={styles.overlayGradient} className="blog-card-gradient" />
                </div>

                {/* Overlay Content */}
                <div style={styles.cardContentOverlay} className="blog-card-content">
                  <div style={styles.cardHeader} className="blog-card-header">
                    <span style={styles.category} className="blog-card-category">{article.category}</span>
                    <span style={styles.readTime} className="blog-card-readtime">{article.readTime}</span>
                  </div>

                  <div style={styles.cardMainText}>
                    <h3 style={styles.blogTitle} className="blog-card-title">{article.title}</h3>
                    <p style={styles.excerpt} className="blog-card-excerpt">{article.excerpt}</p>
                  </div>

                  <div style={styles.cardFooter} className="blog-card-footer">
                    <div style={styles.metaRow} className="blog-card-meta">
                      <div style={styles.metaItem} className="blog-card-meta-item">
                        <User size={14} color="currentColor" />
                        <span>{article.author}</span>
                      </div>
                      <div style={styles.metaItem} className="blog-card-meta-item">
                        <Calendar size={14} color="currentColor" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    
                    <div style={styles.line} className="blog-card-divider" />
                    
                    <Link to="/contact" style={styles.readLink} className="blog-card-read-link">
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
    backgroundColor: '#0f172a',
    padding: '13rem 0 8rem',
    minHeight: '520px',
    display: 'flex',
    alignItems: 'center',
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
    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.2) 50%, transparent 100%)',
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
