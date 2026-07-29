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
  ArrowUpRight,
  ChevronDown,
  ChevronUp
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
      'Custom-molded transparent clear aligners for virtually invisible treatment',
      'Advanced self-ligating ceramic and metallic brackets for rapid alignment',
      'Correction of overbite, underbite, crossbite, and spacing issues',
      'Digital smile simulation showing your final aligned teeth before starting'
    ],
    image: '/smile_designing.png',
    icon: Smile
  },
  {
    id: 'extraction',
    tag: 'Oral Surgery',
    title: 'Wisdom Tooth & Surgery',
    desc: 'When a wisdom tooth is impacted or infected, prompt surgical removal is essential. Our team ensures a calm, painless procedure with rapid healing protocols.',
    points: [
      '3D CBCT radiographic analysis to map nerve pathways precisely',
      'Minimally invasive surgical techniques to preserve surrounding bone',
      'Effective local anesthesia and sedation for zero-discomfort procedures',
      'Advanced PRF (Platelet Rich Fibrin) therapy to accelerate tissue healing'
    ],
    image: '/tooth_extraction.png',
    icon: Activity
  },
  {
    id: 'kids',
    tag: 'Pedodontics',
    title: 'Pediatric Dentistry',
    desc: 'We create a fun, fear-free environment for children. Early dental care sets the stage for a lifetime of healthy adult teeth and proper jaw development.',
    points: [
      'Gentle fluoride applications and protective pit-and-fissure sealants',
      'Pain-free cavity restorations using child-friendly dental materials',
      'Preventive orthodontic screening for growing jaws and developing bites',
      'Patient, friendly tell-show-do communication to eliminate dental anxiety'
    ],
    image: '/pedodontics_child.png',
    icon: Heart
  },
  {
    id: 'cosmetic',
    tag: 'Aesthetic Dentistry',
    title: 'Smile Makeover',
    desc: 'Enhance your smile’s color, shape, and symmetry with ultra-thin porcelain veneers, composite bonding, and professional laser whitening.',
    points: [
      'Custom-crafted ultra-thin porcelain laminates and dental veneers',
      'Instant composite edge-bonding to repair chips and minor gaps',
      'In-clinic LED laser teeth whitening for up to 8 shades brighter teeth',
      'Holistic facial symmetry evaluation by Dr. Richa Tiwari Vyas'
    ],
    image: '/teeth_whitening.png',
    icon: Sparkles
  },
  {
    id: 'jewellery',
    tag: 'Aesthetic Accessories',
    title: 'Dental Jewellery & Tooth Gems',
    desc: 'Express your personality with safe, non-invasive sparkling tooth gems and dental crystals. Applied without drilling or damaging your natural tooth enamel, our dental jewellery adds an elegant, eye-catching sparkle to your smile.',
    points: [
      'Zero drilling or removal of natural tooth enamel structure',
      'Premium biocompatible Swarovski-style dental crystals and gold gems',
      'Applied using professional orthodontic adhesive in just 15 minutes',
      '100% reversible and safe to remove or replace anytime'
    ],
    image: '/dental_jewellery.png',
    icon: Star
  },
  {
    id: 'filling',
    tag: 'Restorative Dentistry',
    title: 'Aesthetic Tooth Restoration & Fillings',
    desc: 'Preserve decayed or chipped teeth with invisible, mercury-free composite tooth fillings. Our layered nanohybrid composites match your tooth’s natural shade, translucency, and anatomy perfectly.',
    points: [
      'Mercury-free, tooth-colored composite resins for natural aesthetics',
      'Minimally invasive cavity preparation preserving healthy enamel',
      'Instant light-cured polymer bonding for immediate chewing strength',
      'Seamless shade-matching that blends invisibly with natural teeth'
    ],
    image: '/tooth_filling.png',
    icon: Shield
  }
];



const categories = [
  'All Procedures',
  'Endodontics',
  'Implantology',
  'Prosthodontics',
  'Periodontics',
  'Orthodontics',
  'Oral Surgery',
  'Pedodontics',
  'Aesthetic Dentistry'
];

export default function Treatments() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All Procedures');
  const [expandedCardId, setExpandedCardId] = useState(null);

  useEffect(() => {
    if (location.state && location.state.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location.state]);

  const toggleExpand = (id) => {
    setExpandedCardId(prev => (prev === id ? null : id));
  };

  const filteredTreatments =
    selectedCategory === 'All Procedures'
      ? deepTreatments
      : deepTreatments.filter(t => t.tag === selectedCategory);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', position: 'relative' }}>
      {/* SCOPED STYLES & MOBILE COMPACT RESPONSIVE RULES */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .desktop-treatment-card {
          display: block;
        }
        .mobile-treatment-card {
          display: none;
        }
        @media (max-width: 768px) {
          .desktop-treatment-card {
            display: none !important;
          }
          .mobile-treatment-card {
            display: block !important;
          }
          .category-tab-scroll {
            padding-bottom: 0.75rem !important;
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
        /* MOBILE COMPACT CARD STYLING */
        .mobile-compact-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          padding: 1.25rem;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.06);
          margin-bottom: 1.25rem;
          transition: all 0.3s ease;
        }
        .mobile-compact-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.85rem;
        }
        .mobile-tag-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          color: #0284c7;
          font-size: 0.75rem;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 999px;
          text-transform: uppercase;
        }
        .mobile-thumb-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.9rem;
        }
        .mobile-thumb-img {
          width: 85px;
          height: 85px;
          border-radius: 16px;
          object-fit: cover;
          border: 1px solid #e2e8f0;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
        }
        .mobile-card-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin-bottom: 4px;
        }
        .mobile-card-desc {
          font-size: 0.92rem;
          color: #475569;
          line-height: 1.55;
          margin-bottom: 1rem;
        }
        .mobile-accordion-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 10px 14px;
          border-radius: 14px;
          color: #0284c7;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          margin-bottom: 0.85rem;
          transition: all 0.25s ease;
        }
        .mobile-accordion-btn:active {
          background: #f0f9ff;
          border-color: #0284c7;
        }
        .mobile-book-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.85rem;
          border-top: 1px solid #f1f5f9;
        }
        .hero-grid-responsive {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4rem;
        }
        @media (max-width: 768px) {
          .hero-grid-responsive {
            flex-direction: column !important;
            text-align: center;
            gap: 2.5rem !important;
          }
          .hero-grid-responsive .hero-text-col {
            text-align: center !important;
          }
        }
      `}} />

      {/* ── HERO BANNER ── */}
      <section style={styles.heroBanner} className="treatments-hero-banner">
        <motion.img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=2070&q=80"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            zIndex: 0
          }}
          alt="Dental Clinic Treatments Background"
        />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.45) 50%, rgba(15, 23, 42, 0.25) 100%)',
          zIndex: 1
        }} />

        <div style={styles.container}>
          <div className="hero-grid-responsive" style={styles.heroGrid}>
            <motion.div
              className="hero-text-col"
              style={styles.heroTextCol}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }}
            >


              <motion.div
                style={{ marginBottom: '1.2rem' }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              />

              <motion.h1 style={{ ...styles.heroTitle, color: '#ffffff', textShadow: '0 2px 15px rgba(0,0,0,0.6)', marginTop: 0 }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                Our Specialized <span style={{ color: '#38bdf8' }}>Treatments.</span>
              </motion.h1>

              <motion.p style={{ ...styles.heroDesc, color: '#e2e8f0', textShadow: '0 2px 10px rgba(0,0,0,0.6)', marginTop: '1rem' }} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                Explore our full spectrum of microscopic, surgical, and cosmetic dental procedures led by Dr. Richa Tiwari Vyas. Every treatment is designed with precision and pain-free patient comfort in mind.
              </motion.p>


            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DETAILS WRAPPER (DESKTOP FULL VIEW + MOBILE COMPACT ACCORDION) ── */}
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
                const isExpanded = expandedCardId === t.id;

                return (
                  <div key={t.id} id={t.id}>
                    {/* ── 1) DESKTOP CARD VIEW (UNTOUCHED PRESERVED LUXURY LAYOUT) ── */}
                    <motion.div
                      layout
                      className="treatment-card-hover desktop-treatment-card"
                      style={styles.cardBlock}
                      initial={{ opacity: 0, y: 50, rotateX: 10, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.7, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div
                        style={{
                          ...styles.blockGrid,
                          flexDirection: isEven ? 'row' : 'row-reverse',
                        }}
                      >
                        {/* Uncropped Image Block */}
                        <div style={styles.imageBlock}>
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

                    {/* ── 2) MOBILE-ONLY COMPACT EXPANDABLE FLAGSHIP CARD ── */}
                    <div className="mobile-treatment-card mobile-compact-box">
                      {/* Top Category Badge */}
                      <div className="mobile-compact-header">
                        <div className="mobile-tag-pill">
                          <Icon size={13} color="#0284c7" />
                          <span>{t.tag}</span>
                        </div>
                        <span style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 700 }}>
                          0{idx + 1} / 0{filteredTreatments.length}
                        </span>
                      </div>

                      {/* Thumbnail + Title Row */}
                      <div className="mobile-thumb-row">
                        <img
                          src={t.image}
                          alt={t.title}
                          className="mobile-thumb-img"
                        />
                        <div>
                          <h3 className="mobile-card-title">{t.title}</h3>
                          <p style={{ fontSize: '0.8rem', color: '#0284c7', fontWeight: 700 }}>
                            Dr. Richa Tiwari Vyas • Specialty
                          </p>
                        </div>
                      </div>

                      {/* Concise Description */}
                      <p className="mobile-card-desc">{t.desc}</p>

                      {/* Interactive Accordion Button to Toggle 4 Highlights */}
                      <button
                        type="button"
                        className="mobile-accordion-btn"
                        onClick={() => toggleExpand(t.id)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Sparkles size={14} color="#0284c7" />
                          <span>
                            {isExpanded ? 'Hide 4 Clinical Highlights' : 'View 4 Clinical Highlights'}
                          </span>
                        </div>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>

                      {/* Expandable 4 Bullet Points */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div style={{
                              background: '#f8fafc',
                              border: '1px solid #e2e8f0',
                              borderRadius: '16px',
                              padding: '1rem',
                              marginBottom: '1rem',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '0.75rem'
                            }}>
                              {t.points.map((pt, i) => (
                                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                  <div style={styles.checkIconWrapper}>
                                    <ClipboardCheck size={14} color="#0284c7" />
                                  </div>
                                  <span style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5, fontWeight: 500 }}>
                                    {pt}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Mobile Card Footer Action */}
                      <div className="mobile-book-bar">
                        <span style={{ fontSize: '0.84rem', color: '#475569', fontWeight: 700 }}>
                          Ready for a consult?
                        </span>
                        <Link
                          to="/contact"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            background: '#0f172a',
                            color: '#ffffff',
                            padding: '8px 16px',
                            borderRadius: '12px',
                            fontWeight: 800,
                            fontSize: '0.84rem',
                            textDecoration: 'none'
                          }}
                        >
                          <span>Book Consult</span>
                          <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
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
    backgroundColor: '#ffffff',
    padding: '12rem 0 6rem',
    overflow: 'hidden',
  },
  heroGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTextCol: {
    maxWidth: '800px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heroHDImage: {
    width: '100%',
    maxHeight: '410px',
    objectFit: 'cover',
    borderRadius: '28px',
    boxShadow: '0 25px 60px -15px rgba(2, 132, 199, 0.22)',
    border: '4px solid #ffffff',
    display: 'block',
  },
  heroTitle: {
    fontSize: 'clamp(2.5rem, 4.2vw, 4.2rem)',
    fontWeight: '900',
    marginBottom: '1.25rem',
    lineHeight: '1.12',
    letterSpacing: '-0.03em',
    color: '#0f172a',
  },
  heroDesc: {
    fontSize: '1.12rem',
    color: '#475569',
    lineHeight: '1.75',
    marginBottom: '1.75rem',
  },
  heroBadgesRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    justifyContent: 'center',
  },
  heroBadgePill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: '#ffffff',
    border: '1px solid #bae6fd',
    color: '#0284c7',
    fontSize: '0.82rem',
    fontWeight: '800',
    padding: '7px 15px',
    borderRadius: '999px',
    boxShadow: '0 2px 8px rgba(2, 132, 199, 0.08)',
  },
  filterSection: {
    padding: '2rem 0',
    backgroundColor: '#ffffff',
    position: 'sticky',
    top: '76px',
    zIndex: 30,
    borderBottom: '1px solid #e2e8f0',
    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
  },
  categoryBtn: {
    background: 'none',
    border: 'none',
    padding: '0.65rem 1.35rem',
    fontSize: '0.92rem',
    fontWeight: '800',
    cursor: 'pointer',
    position: 'relative',
    borderRadius: '9999px',
    whiteSpace: 'nowrap',
    transition: 'color 0.25s',
    outline: 'none',
  },
  activeTabPill: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    borderRadius: '9999px',
    zIndex: 1,
    boxShadow: '0 4px 15px rgba(2, 132, 199, 0.25)',
  },
  detailsSection: {
    padding: '6rem 0 8rem',
    position: 'relative',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6rem',
  },
  cardBlock: {
    backgroundColor: '#ffffff',
    borderRadius: '32px',
    border: '1px solid #e2e8f0',
    padding: '3rem',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.04)',
    overflow: 'hidden',
  },
  blockGrid: {
    display: 'flex',
    gap: '4rem',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageBlock: {
    flex: '1 1 480px',
    minHeight: '400px',
    backgroundColor: '#f8fafc',
    borderRadius: '24px',
    border: '1px solid #e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '1.5rem',
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
    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
    color: '#ffffff',
    padding: '0.9rem 1.85rem',
    borderRadius: '14px',
    fontWeight: '800',
    fontSize: '0.92rem',
    textDecoration: 'none',
    boxShadow: '0 10px 25px rgba(2, 132, 199, 0.25)',
    transition: 'transform 0.2s',
  }
};
