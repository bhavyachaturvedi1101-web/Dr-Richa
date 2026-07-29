import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const galleryItems = [
  {
    id: 1,
    title: 'Modern Clinic Chair & Screen',
    category: 'Interior',
    desc: 'Ergonomic patient dental chair equipped with digital X-ray screen.',
    image: '/clinic_interior.png'
  },
  {
    id: 2,
    title: 'Painless Laser Setup',
    category: 'Equipment',
    desc: 'Whisper-quiet laser rotary machines for painless fillings.',
    image: '/highlights.png'
  },
  {
    id: 3,
    title: 'Hospital-Grade Autoclave',
    category: 'Sterilization',
    desc: 'ISO-certified sterilization autoclaves checking hygiene metrics.',
    image: '/clinic_interior.png'
  },
  {
    id: 4,
    title: 'Microscope RCT Station',
    category: 'Equipment',
    desc: 'Microscopic endodontic station for mapping complex tooth roots.',
    image: '/highlights.png'
  },
  {
    id: 5,
    title: 'Reception Sanctuary',
    category: 'Interior',
    desc: 'Serene, zero-anxiety hospitality lobby for clinic visitors.',
    image: '/clinic_interior.png'
  },
  {
    id: 6,
    title: 'Pediatric Care Zone',
    category: 'Care',
    desc: 'Friendly positive reinforcement zones dedicated to kids oral hygiene.',
    image: '/highlights.png'
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Interior', 'Equipment', 'Sterilization', 'Care'];

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: '#ffffff' }}
    >
      
      {/* ── HERO BANNER ── */}
      <section style={styles.heroBanner} className="gallery-hero-banner">
        <motion.img
          src="/clinic_gallery_hero.png"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
          alt="Dental Clinic Gallery Background"
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.45) 50%, rgba(15, 23, 42, 0.25) 100%)',
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
            <motion.h1 style={{ ...styles.heroTitle, color: '#ffffff', textShadow: '0 2px 15px rgba(0,0,0,0.6)' }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              Our Clinic <span style={{ color: '#38bdf8' }}>Gallery.</span>
            </motion.h1>
            <motion.p style={{ ...styles.heroDesc, color: '#e2e8f0', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              A visual walkthrough of our high-hygiene operating bays, diagnostic equipment, and reception lobbies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── GALLERY FILTER & LIST ── */}
      <section style={styles.section}>
        <div style={styles.container}>
          
          {/* Category Tabs */}
          <div style={styles.tabWrapper}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  ...styles.tabBtn,
                  backgroundColor: activeCategory === cat ? 'var(--brand-surgical-blue)' : 'var(--neutral-cloud-gray)',
                  color: activeCategory === cat ? '#ffffff' : 'var(--neutral-charcoal)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Items Grid */}
          <motion.div 
            style={styles.grid}
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  style={styles.card}
                  whileHover={{ y: -6 }}
                >
                  <div style={styles.imageBox}>
                    <img src={item.image} alt={item.title} style={styles.image} />
                    <div style={styles.cardOverlay}>
                      <span style={styles.overlayCategory}>{item.category}</span>
                      <h4 style={styles.overlayTitle}>{item.title}</h4>
                      <p style={styles.overlayDesc}>{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
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
    padding: '6rem 0 7rem',
  },
  tabWrapper: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap',
    marginBottom: '4rem',
  },
  tabBtn: {
    padding: '0.65rem 1.5rem',
    borderRadius: '10px',
    border: 'none',
    fontWeight: '700',
    fontSize: '0.85rem',
    cursor: 'pointer',
    transition: 'all 0.25s',
    outline: 'none',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },
  card: {
    borderRadius: '24px',
    overflow: 'hidden',
    border: '1px solid rgba(0,0,0,0.05)',
    position: 'relative',
    height: '280px',
    boxShadow: '0 15px 30px rgba(0,0,0,0.03)',
    cursor: 'pointer',
  },
  imageBox: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(7,8,10,0.85) 0%, rgba(7,8,10,0.2) 60%, transparent 100%)',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '1.75rem',
    opacity: 0.9,
    transition: 'opacity 0.2s',
  },
  overlayCategory: {
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: '800',
    color: '#7dd3fa',
    marginBottom: '4px',
  },
  overlayTitle: {
    fontSize: '1.15rem',
    fontWeight: '800',
    color: '#ffffff',
  },
  overlayDesc: {
    fontSize: '0.8rem',
    color: 'rgba(255,255,255,0.7)',
    lineHeight: '1.4',
    marginTop: '4px',
  }
};
