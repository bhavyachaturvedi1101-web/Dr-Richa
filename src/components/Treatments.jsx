import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  Activity,
  Award,
  Smile,
  Shield,
  X,
  Heart,
  Cpu,
  Sparkles,
  Star,
  ClipboardCheck,
  ArrowUpRight
} from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const deepTreatments = [
  {
    id: 'rct',
    tag: 'Endodontics',
    title: 'Root Canal (RCT)',
    desc: 'Bacterial decay can infect the inner nerve chambers of your tooth, causing intense pain. Dr. Richa Tiwari provides microscope-assisted endodontics to clean, sterilize, and preserve your biological tooth structure safely and painlessly.',
    points: [
      'Digital rotary systems for quick, noise-free, and precise canal shaping',
      'Microscopic mapping to thoroughly treat complex multi-rooted canals',
      'Bio-compatible thermoplastic sealing (gutta-percha) to avoid reinfection',
      'Single-visit therapies for 90% of uncomplicated cases'
    ],
    image: '/rct_image.png',
    icon: Activity
  },
  {
    id: 'implants',
    tag: 'Implantology',
    title: 'Dental Implants',
    desc: 'Replace missing teeth with biocompatible titanium implants that act as biological tooth roots. Implants prevent bone loss and offer a life-long solution for your smile.',
    points: [
      'State-of-the-art computer-guided surgical implant placement',
      'Premium biocompatible titanium implants fusing with jawbone (osseointegration)',
      'Custom ceramic or zirconia crowns that match your natural teeth perfectly',
      'Restores 100% of original chewing force and dental aesthetics'
    ],
    image: '/dental_service_1.jpg',
    icon: Cpu
  },
  {
    id: 'crowns',
    tag: 'Prosthodontics',
    title: 'Crowns & Bridges',
    desc: 'Restore broken or weakened teeth with custom-fitted prosthetic caps. We use premium zirconia and metal-free ceramics to ensure durability and a natural appearance.',
    points: [
      'Ultra-precise CAD/CAM digital scans for perfect tooth impressions',
      'Zirconia and E-Max ceramic crowns with superior fracture resistance',
      'Dental bridges to bridge gaps left by single or multiple missing teeth',
      'Metal-free bio-compatible materials to prevent dark margins near the gums'
    ],
    image: '/crowns_image.png',
    icon: Award
  },
  {
    id: 'gum',
    tag: 'Periodontics',
    title: 'Gum Therapy',
    desc: 'Healthy gums are the foundation of your teeth. We provide advanced scaling, root planing, and laser therapy to treat gingivitis, bleeding gums, and bad breath.',
    points: [
      'Painless ultrasonic scaling to remove plaque, calculus, and tartar buildup',
      'Subgingival deep cleaning and root planing to prevent gum recession',
      'Targeted antimicrobial gum washes and localized laser sanitation',
      'Regular gum health monitoring to prevent advanced periodontitis'
    ],
    image: '/laser_image.png',
    icon: Shield
  },
  {
    id: 'ortho',
    tag: 'Orthodontics',
    title: 'Orthodontics',
    desc: 'Align crooked, crowded, or protruding teeth to optimize your bite and facial symmetry. We offer invisible clear aligners alongside traditional braces.',
    points: [
      'Invisible clear aligners that are virtually undetectable and removable',
      'Traditional metal and ceramic braces for complex structural issues',
      'Interactive 3D dental mapping to simulate your final smile progression',
      'Maintains dental hygiene by correcting crowded, hard-to-clean spaces'
    ],
    image: '/images/case_study_orthodontics.png',
    icon: Smile
  },
  {
    id: 'whitening',
    tag: 'Cosmetics',
    title: 'Teeth Whitening',
    desc: 'Brighten your smile instantly. Our in-office teeth whitening system utilizes safe, professional-grade bleaching agents to lift stains and discoloration.',
    points: [
      'Safely brightens teeth by up to 8 shades in a single clinical session',
      'Removes deep extrinsic stains from tobacco, tea, coffee, and food dyes',
      'Laser-activated whitening gel for rapid, non-invasive results',
      'Clinically formulated desensitizing agents to prevent teeth sensitivity'
    ],
    image: '/teeth_whitening.png',
    icon: Sparkles
  },
  {
    id: 'restoration',
    tag: 'Restorative',
    title: 'Restoration / Filling',
    desc: 'Cure tooth cavities with aesthetic, mercury-free composite materials. These composite fillings bond directly to the enamel, maintaining tooth strength.',
    points: [
      '100% metal-free, tooth-colored composite resin fillings',
      'Inlays and onlays for teeth that have suffered moderate structural decay',
      'Restores the structural integrity of decayed teeth to prevent fractures',
      'Smooth, polished margins that blend seamlessly with natural enamel'
    ],
    image: '/tooth_filling.png',
    icon: Shield
  },
  {
    id: 'smile',
    tag: 'Aesthetics',
    title: 'Smile Designing',
    desc: 'Transform your overall look with a custom-designed smile alignment plan. We analyze your lips, facial proportions, and jaw symmetry to construct your perfect smile.',
    points: [
      'Custom ceramic veneers to mask dental alignment and shape defects',
      'Composite bonding to restore minor chipping and dental gaps',
      'Gingival contouring to correct gummy smiles and expose more enamel',
      'Coordinated cosmetic and orthodontic combinations for celebrity smiles'
    ],
    image: '/smile_designing.png',
    icon: Smile
  },
  {
    id: 'extraction',
    tag: 'Oral Surgery',
    title: 'Extraction',
    desc: 'When teeth are severely damaged or crowded, extraction is necessary. We perform safe, sterile, and painless extractions, including complex wisdom teeth removals.',
    points: [
      'Painless tooth extractions under gentle local anesthesia',
      'Specialized care for geriatric patients with cardiac comorbidities',
      'Surgical wisdom teeth extractions to prevent crowding and jaw pain',
      'Complete post-operative care guidelines for rapid socket healing'
    ],
    image: '/tooth_extraction.png',
    icon: X
  },
  {
    id: 'jewellery',
    tag: 'Cosmetics',
    title: 'Dental Jewellery',
    desc: 'Add a touch of sparkle to your smile. We offer safe, non-invasive placement of premium crystals, gems, and diamonds on your teeth.',
    points: [
      '100% safe, non-invasive placement of dental gems without drilling',
      'Medical-grade biocompatible adhesive that does not damage the enamel',
      'Easily removable at any time by Dr. Tiwari without marking the tooth',
      'Adds a temporary or long-term sparkle to accessorize your smile'
    ],
    image: '/dental_jewellery.png',
    icon: Star
  },
  {
    id: 'pedodontics',
    tag: 'Pediatrics',
    title: 'Pedodontics / Child Care',
    desc: 'Build positive oral hygiene habits for your kids in an anxiety-free environment. We focus on preventive sealants, gentle scaling, and kid-friendly dental education.',
    points: [
      'Zero-anxiety pediatric operating bays with kid-friendly protocols',
      'Preventive cavity pit-and-fissure sealants and fluoride varnishes',
      'Monitoring developmental spacing to prevent future aligner requirements',
      'Gentle scaling and clinical guidance to cure early child cavities'
    ],
    image: '/pedodontics_child.png',
    icon: Heart
  }
];

const categories = [
  'All',
  'Endodontics',
  'Implantology',
  'Prosthodontics',
  'Periodontics',
  'Orthodontics',
  'Cosmetics',
  'Restorative',
  'Aesthetics',
  'Oral Surgery',
  'Pediatrics'
];

export default function Treatments() {
  const { hash } = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const matched = deepTreatments.find((t) => t.id === targetId);
      if (matched) {
        setSelectedCategory('All');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      }
    }
  }, [hash]);

  const filteredTreatments = selectedCategory === 'All'
    ? deepTreatments
    : deepTreatments.filter((t) => t.tag === selectedCategory);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .treatment-card-grid {
            flex-direction: column !important;
            gap: 2rem !important;
          }
          .treatment-img-box {
            width: 100% !important;
            min-height: 260px !important;
            max-height: 320px !important;
          }
          .treatment-hero-grid {
            flex-direction: column !important;
            text-align: center !important;
            gap: 2.5rem !important;
          }
          .treatment-hero-img-col {
            width: 100% !important;
            max-width: 400px !important;
            margin: 0 auto !important;
          }
        }
        .treatment-card-hover {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .treatment-card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 60px -12px rgba(37, 151, 208, 0.18);
          border-color: rgba(56, 189, 248, 0.5) !important;
        }
        .treatment-img {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .treatment-card-hover:hover .treatment-img {
          transform: scale(1.05);
        }
        .category-tab-scroll {
          display: flex;
          gap: 0.6rem;
          overflow-x: auto;
          padding: 0.5rem 0.25rem 1rem;
          scrollbar-width: none;
        }
        .category-tab-scroll::-webkit-scrollbar {
          display: none;
        }
      `}} />

      {/* ── HERO BANNER WITH CLINIC BACKGROUND IMAGE ── */}
      <section style={styles.heroBanner}>
        {/* Background Image & Gradient Overlay */}
        <div style={styles.heroBgWrapper}>
          <img
            src="/clinic_interior.png"
            alt="Dental Surgery Clinic Interior"
            style={styles.heroBgImg}
          />
          <div style={styles.heroBgOverlay} />
        </div>

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
            <motion.h1 style={styles.heroTitle} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              Our Specialized <span style={{ color: '#38bdf8' }}>Treatments.</span>
            </motion.h1>
            <motion.p style={styles.heroDesc} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              Explore our full spectrum of microscopic, surgical, and cosmetic dental procedures led by Dr. Richa Tiwari Vyas. Every treatment is designed with precision and pain-free patient comfort in mind.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── INTERACTIVE CATEGORY FILTER BAR ── */}
      <section style={styles.filterSection}>
        <div style={styles.container}>
          <div className="category-tab-scroll">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    ...styles.categoryBtn,
                    color: isSelected ? '#ffffff' : 'var(--neutral-charcoal)',
                  }}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeTreatmentTab"
                      style={styles.activeTabPill}
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 2 }}>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DETAILS WRAPPER (UNIQUE 3D PERSPECTIVE ANIMATED CARDS) ── */}
      <section style={styles.detailsSection}>
        <div style={styles.container}>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={selectedCategory}
              style={styles.cardsContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredTreatments.map((t, idx) => {
                const Icon = t.icon;
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={t.id}
                    id={t.id}
                    layout
                    className="treatment-card-hover"
                    style={styles.cardBlock}
                    initial={{ opacity: 0, y: 50, rotateX: 10, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div
                      className="treatment-card-grid"
                      style={{
                        ...styles.blockGrid,
                        flexDirection: isEven ? 'row' : 'row-reverse',
                      }}
                    >
                      {/* Uncropped Image Block (Full Image Visible with objectFit: contain) */}
                      <div className="treatment-img-box" style={styles.imageBlock}>
                        <div style={styles.imgBadge}>
                          <Icon size={14} color="#0284c7" />
                          <span>{t.tag}</span>
                        </div>
                        <img
                          src={t.image}
                          alt={t.title}
                          className="treatment-img"
                          style={styles.procedureImg}
                        />
                      </div>

                      {/* Info Block */}
                      <div style={styles.infoBlock}>
                        <div style={styles.tagWrapper}>
                          <div style={styles.iconCircle}>
                            <Icon size={18} color="var(--brand-surgical-blue)" />
                          </div>
                          <span style={styles.tagText}>{t.tag}</span>
                        </div>

                        <h3 style={styles.blockTitle}>{t.title}</h3>
                        <p style={styles.blockDesc}>{t.desc}</p>

                        {/* Interactive Bullet Points with Hover Translate */}
                        <div style={styles.pointsList}>
                          {t.points.map((pt, i) => (
                            <motion.div
                              key={i}
                              style={styles.pointRow}
                              whileHover={{ x: 8 }}
                              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                            >
                              <div style={styles.checkIconWrapper}>
                                <ClipboardCheck size={15} color="var(--brand-surgical-blue)" />
                              </div>
                              <span style={styles.pointText}>{pt}</span>
                            </motion.div>
                          ))}
                        </div>

                        <div style={{ marginTop: '1.75rem' }}>
                          <MagneticButton>
                            <Link to="/contact" style={styles.bookBtn}>
                              <span>Book Treatment Consultation</span>
                              <ArrowUpRight size={17} />
                            </Link>
                          </MagneticButton>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2,
  },
  heroBanner: {
    position: 'relative',
    backgroundColor: '#07080a',
    padding: '10rem 0 5.5rem',
    overflow: 'hidden',
    color: '#ffffff',
  },
  heroBgWrapper: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
  },
  heroBgImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
  heroBgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(7, 8, 10, 0.88) 0%, rgba(15, 23, 42, 0.82) 55%, rgba(37, 151, 208, 0.52) 100%)',
    backdropFilter: 'blur(2px)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '820px',
    margin: '0 auto',
    textAlign: 'center',
    color: '#ffffff',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
    fontWeight: '900',
    lineHeight: '1.12',
    letterSpacing: '-0.025em',
    color: '#ffffff',
    marginBottom: '1.25rem',
  },
  heroDesc: {
    fontSize: '1.15rem',
    color: '#e2e8f0',
    lineHeight: '1.7',
    maxWidth: '680px',
    margin: '0 auto',
  },
  // Filter Bar
  filterSection: {
    padding: '0 0 2rem',
    borderBottom: '1px solid #f1f5f9',
  },
  categoryBtn: {
    position: 'relative',
    border: 'none',
    background: 'none',
    padding: '0.65rem 1.35rem',
    borderRadius: '9999px',
    fontSize: '0.9rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'color 0.2s',
    whiteSpace: 'nowrap',
    outline: 'none',
  },
  activeTabPill: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, var(--brand-surgical-blue), #0284c7)',
    borderRadius: '9999px',
    boxShadow: '0 6px 15px rgba(2, 132, 199, 0.3)',
    zIndex: 1,
  },
  // Cards Container
  detailsSection: {
    padding: '4rem 0 8rem',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  },
  cardBlock: {
    scrollMarginTop: '120px',
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '32px',
    padding: '2.5rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
    position: 'relative',
    overflow: 'hidden',
  },
  blockGrid: {
    display: 'flex',
    gap: '3rem',
    alignItems: 'center',
  },
  // Uncropped Image Block (objectFit: contain ensures 100% visibility)
  imageBlock: {
    flex: '1 1 420px',
    minHeight: '340px',
    maxHeight: '400px',
    borderRadius: '24px',
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#f8fafc',
    border: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1.5rem',
    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.02)',
  },
  procedureImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block',
    maxHeight: '100%',
  },
  imgBadge: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(8px)',
    border: '1px solid #e2e8f0',
    padding: '0.4rem 0.85rem',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.75rem',
    fontWeight: '800',
    color: '#0f172a',
    zIndex: 3,
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
  },
  infoBlock: {
    flex: '1.2 1 460px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.15rem',
  },
  tagWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  iconCircle: {
    width: '38px',
    height: '38px',
    borderRadius: '12px',
    backgroundColor: 'rgba(56, 189, 248, 0.12)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagText: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    fontWeight: '800',
    color: 'var(--brand-surgical-blue)',
  },
  blockTitle: {
    fontSize: '2rem',
    fontWeight: '900',
    color: 'var(--neutral-ink)',
    letterSpacing: '-0.02em',
    lineHeight: '1.2',
  },
  blockDesc: {
    fontSize: '1rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.75',
  },
  pointsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    marginTop: '0.5rem',
  },
  pointRow: {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
    cursor: 'default',
  },
  checkIconWrapper: {
    width: '24px',
    height: '24px',
    borderRadius: '8px',
    backgroundColor: 'rgba(56, 189, 248, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '2px',
  },
  pointText: {
    fontSize: '0.92rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.6',
    fontWeight: '500',
  },
  bookBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'linear-gradient(135deg, var(--neutral-ink), #1e293b)',
    color: '#ffffff',
    padding: '0.9rem 1.85rem',
    borderRadius: '14px',
    fontWeight: '800',
    fontSize: '0.92rem',
    textDecoration: 'none',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.2s',
  }
};

