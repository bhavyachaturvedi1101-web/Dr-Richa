import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Award, Smile, Shield, X, Heart, Cpu, Sparkles, Star, ClipboardCheck } from 'lucide-react';

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
    image: '/dental_service_4.jpg',
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
    image: '/dental_service_2.jpg',
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

export default function Treatments() {
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
              Clinical <span style={{ color: 'var(--brand-surgical-blue)' }}>Treatments.</span>
            </motion.h1>
            <motion.p style={styles.heroDesc} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              Empathy-first specialized dental care utilizing state-of-the-art diagnostic machinery.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── DETAILS WRAPPER ── */}
      <section style={styles.detailsSection}>
        <div style={styles.container}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', width: '100%' }}>
              {deepTreatments.map((t, idx) => {
                const Icon = t.icon;

                return (
                  <motion.div
                    key={t.id}
                    id={t.id}
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
                        <img src={t.image} alt={t.title} style={styles.procedureImg} />
                        <div style={styles.imgAccentOverlay} />
                      </div>

                      {/* Info Block */}
                      <div style={styles.infoBlock}>
                        <div style={styles.tagWrapper}>
                          <Icon size={16} color="var(--brand-surgical-blue)" />
                          <span style={styles.tagText}>{t.tag}</span>
                        </div>
                        
                        <h3 style={styles.blockTitle}>{t.title}</h3>
                        <p style={styles.blockDesc}>{t.desc}</p>

                        <div style={styles.pointsList}>
                          {t.points.map((pt, i) => (
                            <div key={i} style={styles.pointRow}>
                              <ClipboardCheck size={16} color="var(--brand-trust-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                              <span style={styles.pointText}>{pt}</span>
                            </div>
                          ))}
                        </div>

                        <div style={{ marginTop: '2rem' }}>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                            <Link to="/contact" style={styles.bookBtn}>
                              Book Treatment Consultation
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
    padding: '1.5rem',
  },
  sidebarTitle: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    fontWeight: '800',
    color: 'var(--neutral-slate)',
    marginBottom: '1rem',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
    paddingBottom: '0.5rem',
  },
  sidebarList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  sidebarBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: 'none',
    border: 'none',
    width: '100%',
    padding: '0.55rem 0.65rem',
    borderRadius: '10px',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'background-color 0.2s',
    outline: 'none',
  },
  sidebarBtnText: {
    fontSize: '0.82rem',
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
    lineHeight: '1.55',
  },
  bookBtn: {
    display: 'inline-flex',
    backgroundColor: 'var(--neutral-ink)',
    color: '#ffffff',
    padding: '0.85rem 1.75rem',
    borderRadius: '12px',
    fontWeight: '700',
    fontSize: '0.9rem',
    textDecoration: 'none',
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)'
  }
};
