import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Process() {
  const steps = [
    {
      num: '01',
      phase: 'Welcome',
      title: 'Clinical Onboarding',
      desc: 'Secure your visit via our portal. Your history and preferences are reviewed before you arrive.',
      isDark: true
    },
    {
      num: '02',
      phase: 'Assessment',
      title: 'Diagnostic Precision',
      desc: 'Digital imaging and a visual treatment blueprint personally crafted by Dr. Richa Tiwari.',
      isDark: false
    },
    {
      num: '03',
      phase: 'Procedure',
      title: 'Specialized Treatment',
      desc: 'B.D.S.-led precision execution with advanced sedation — quiet, deliberate, and painless.',
      isDark: true
    },
    {
      num: '04',
      phase: 'Recovery',
      title: 'Aftercare & Recovery',
      desc: 'A personalized recovery plan and scheduled follow-up to confirm your results are perfect.',
      isDark: false
    }
  ];

  return (
    <section style={styles.section} id="process">
      {/* Grid Pattern Background */}
      <div style={styles.gridOverlay} />

      {/* Dotted Flow Lines Animation Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flowDash {
          to {
            stroke-dashoffset: -24;
          }
        }
        .flow-path-line {
          stroke: rgba(37, 151, 208, 0.45);
          stroke-width: 3.5;
          stroke-linecap: round;
          stroke-dasharray: 10 10;
          animation: flowDash 1.2s linear infinite;
        }
        
        @keyframes verticalDash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .mobile-flow-line {
          stroke: rgba(37, 151, 208, 0.4);
          stroke-width: 3;
          stroke-dasharray: 8 8;
          animation: verticalDash 1s linear infinite;
        }
        
        /* Desktop vs Mobile display utilities */
        .desktop-flowchart { display: block; }
        .mobile-flowchart { display: none; }
        @media (max-width: 768px) {
          .desktop-flowchart { display: none; }
          .mobile-flowchart { display: block; }
        }
      `}} />

      {/* Decorative radial blur filters */}
      <div style={styles.blurLeft} />
      <div style={styles.blurRight} />

      <div style={styles.container}>
        
        {/* Section Header */}
        <motion.div 
          style={styles.header}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div style={styles.tagRow}>
            <span style={styles.tagLine} />
            <span style={styles.subtag}>Our Steps</span>
            <span style={styles.tagLine} />
          </div>
          <h2 style={styles.heading}>
            How We<br /><span style={styles.accentText}>Treat You.</span>
          </h2>
          <p style={styles.subheading}>
            Medicine with a hospitality mindset — every step crafted for your comfort and clarity.
          </p>
        </motion.div>

        {/* ── DESKTOP FLOWCHART VIEW (Alternating Left/Right Grid with SVGs) ── */}
        <div className="desktop-flowchart" style={styles.desktopFlow}>
          <div style={styles.flowWrapper}>
            
            {/* Step 1: Left-aligned Node */}
            <motion.div 
              style={{ ...styles.row, justifyContent: 'flex-start', paddingLeft: '18%' }}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            >
              {/* SVG Link 1 to 2 */}
              <div style={styles.svgWrapper}>
                <svg width="100%" height="150" viewBox="0 0 1000 150" fill="none" preserveAspectRatio="none">
                  <path d="M 280 10 C 280 80, 720 20, 720 140" className="flow-path-line" />
                </svg>
              </div>
              <div style={styles.nodeWrapper}>
                <div style={{ ...styles.nodeCircle, backgroundColor: 'var(--neutral-obsidian)' }}>
                  <span style={styles.nodeNum}>01</span>
                  <span style={styles.nodeLabel}>Step</span>
                </div>
                <div style={styles.nodeText}>
                  <span style={styles.nodePhase}>Welcome</span>
                  <h3 style={styles.nodeTitle}>{steps[0].title}</h3>
                  <p style={styles.nodeDesc}>{steps[0].desc}</p>
                </div>
              </div>
            </motion.div>

            {/* Step 2: Right-aligned Node */}
            <motion.div 
              style={{ ...styles.row, justifyContent: 'flex-end', paddingRight: '18%' }}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            >
              {/* SVG Link 2 to 3 */}
              <div style={styles.svgWrapper}>
                <svg width="100%" height="150" viewBox="0 0 1000 150" fill="none" preserveAspectRatio="none">
                  <path d="M 720 10 C 720 80, 280 20, 280 140" className="flow-path-line" />
                </svg>
              </div>
              <div style={{ ...styles.nodeWrapper, flexDirection: 'row-reverse' }}>
                <div style={{ ...styles.nodeCircle, backgroundColor: 'var(--brand-surgical-blue)' }}>
                  <span style={styles.nodeNum}>02</span>
                  <span style={styles.nodeLabel}>Step</span>
                </div>
                <div style={{ ...styles.nodeText, textAlign: 'right', marginRight: '1.5rem', marginLeft: 0 }}>
                  <span style={styles.nodePhase}>Assessment</span>
                  <h3 style={styles.nodeTitle}>{steps[1].title}</h3>
                  <p style={styles.nodeDesc}>{steps[1].desc}</p>
                </div>
              </div>
            </motion.div>

            {/* Step 3: Left-aligned Node */}
            <motion.div 
              style={{ ...styles.row, justifyContent: 'flex-start', paddingLeft: '18%' }}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              {/* SVG Link 3 to 4 */}
              <div style={styles.svgWrapper}>
                <svg width="100%" height="150" viewBox="0 0 1000 150" fill="none" preserveAspectRatio="none">
                  <path d="M 280 10 C 280 80, 720 20, 720 140" className="flow-path-line" />
                </svg>
              </div>
              <div style={styles.nodeWrapper}>
                <div style={{ ...styles.nodeCircle, backgroundColor: 'var(--neutral-obsidian)' }}>
                  <span style={styles.nodeNum}>03</span>
                  <span style={styles.nodeLabel}>Step</span>
                </div>
                <div style={styles.nodeText}>
                  <span style={styles.nodePhase}>Procedure</span>
                  <h3 style={styles.nodeTitle}>{steps[2].title}</h3>
                  <p style={styles.nodeDesc}>{steps[2].desc}</p>
                </div>
              </div>
            </motion.div>

            {/* Step 4: Right-aligned Node */}
            <motion.div 
              style={{ ...styles.row, justifyContent: 'flex-end', paddingRight: '18%' }}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
            >
              <div style={{ ...styles.nodeWrapper, flexDirection: 'row-reverse' }}>
                <div style={{ ...styles.nodeCircle, backgroundColor: 'var(--brand-surgical-blue)' }}>
                  <span style={styles.nodeNum}>04</span>
                  <span style={styles.nodeLabel}>Step</span>
                </div>
                <div style={{ ...styles.nodeText, textAlign: 'right', marginRight: '1.5rem', marginLeft: 0 }}>
                  <span style={styles.nodePhase}>Recovery</span>
                  <h3 style={styles.nodeTitle}>{steps[3].title}</h3>
                  <p style={styles.nodeDesc}>{steps[3].desc}</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── MOBILE FLOWCHART VIEW (Vertical timeline setup) ── */}
        <div className="mobile-flowchart" style={styles.mobileFlow}>
          <div style={styles.mobileList}>
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                style={styles.mobileItem}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                
                {/* Connecting Line between nodes */}
                {idx < 3 && (
                  <div style={styles.mobileLineWrapper}>
                    <svg width="4" height="120" fill="none">
                      <line x1="2" y1="0" x2="2" y2="120" className="mobile-flow-line" />
                    </svg>
                  </div>
                )}

                <div style={{ 
                  ...styles.mobileCircle, 
                  backgroundColor: step.isDark ? 'var(--neutral-obsidian)' : 'var(--brand-surgical-blue)' 
                }}>
                  <span style={styles.mobileNum}>{step.num}</span>
                  <span style={styles.mobileLabel}>Step</span>
                </div>

                <div style={styles.mobileContent}>
                  <span style={styles.mobilePhase}>{step.phase}</span>
                  <h3 style={styles.mobileTitle}>{step.title}</h3>
                  <p style={styles.mobileDesc}>{step.desc}</p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div style={styles.actionRow}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link to="/contact" style={styles.actionBtn}>
              Book Your Experience →
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    padding: '7rem 0',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  gridOverlay: {
    position: 'absolute',
    inset: 0,
    opacity: 0.03,
    pointerEvents: 'none',
    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
    backgroundSize: '60px 60px',
  },
  blurLeft: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '800px',
    borderRadius: '50%',
    border: '1px solid rgba(37, 151, 208, 0.03)',
    pointerEvents: 'none',
  },
  blurRight: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    border: '1px solid rgba(37, 151, 208, 0.045)',
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '5rem',
  },
  tagRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.25rem',
  },
  tagLine: {
    width: '32px',
    height: '1px',
    backgroundColor: 'rgba(37,151,208,0.25)',
  },
  subtag: {
    fontSize: '0.75rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.4em',
    color: 'var(--brand-surgical-blue)',
  },
  heading: {
    fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
    lineHeight: '1.05',
    letterSpacing: '-0.02em',
    color: 'var(--neutral-ink)',
    fontWeight: '800',
    marginBottom: '1.5rem',
  },
  accentText: {
    color: 'var(--brand-surgical-blue)',
  },
  subheading: {
    fontSize: '1.05rem',
    color: 'var(--neutral-charcoal)',
    maxWidth: '520px',
    lineHeight: '1.7',
  },
  // Desktop Flowchart Layout
  desktopFlow: {
    position: 'relative',
    padding: '2.5rem 0',
  },
  flowWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8.5rem',
    position: 'relative',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    zIndex: 10,
  },
  svgWrapper: {
    position: 'absolute',
    top: '60%',
    left: 0,
    width: '100%',
    height: '150px',
    pointerEvents: 'none',
    zIndex: 0,
  },
  nodeWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  nodeCircle: {
    width: '110px',
    height: '110px',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 0 8px rgba(37,151,208,0.06)',
    flexShrink: 0,
    zIndex: 20,
    cursor: 'default',
  },
  nodeNum: {
    fontSize: '0.62rem',
    fontWeight: '700',
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    marginBottom: '2px',
  },
  nodeLabel: {
    fontSize: '0.68rem',
    fontWeight: '900',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
  },
  nodeText: {
    maxWidth: '280px',
    marginLeft: '1.5rem',
  },
  nodePhase: {
    fontSize: '0.62rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    color: 'var(--brand-surgical-blue)',
    display: 'block',
    marginBottom: '6px',
  },
  nodeTitle: {
    fontSize: '1.35rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    letterSpacing: '-0.01em',
    marginBottom: '8px',
  },
  nodeDesc: {
    fontSize: '0.88rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.65',
  },
  // Mobile Flowchart Layout
  mobileFlow: {
    padding: '1rem 0',
  },
  mobileList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3.5rem',
  },
  mobileItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.25rem',
    position: 'relative',
  },
  mobileLineWrapper: {
    position: 'absolute',
    left: '26px',
    top: '56px',
    height: '120px',
    pointerEvents: 'none',
    zIndex: 0,
  },
  mobileCircle: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    zIndex: 10,
    boxShadow: '0 0 0 6px rgba(37,151,208,0.04)',
  },
  mobileNum: {
    fontSize: '0.5rem',
    fontWeight: '700',
    color: 'rgba(255,255,255,0.4)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  mobileLabel: {
    fontSize: '0.55rem',
    fontWeight: '900',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  mobileContent: {
    flex: 1,
    paddingTop: '4px',
  },
  mobilePhase: {
    fontSize: '0.6rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: 'var(--brand-surgical-blue)',
    display: 'block',
    marginBottom: '4px',
  },
  mobileTitle: {
    fontSize: '1.15rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    marginBottom: '6px',
  },
  mobileDesc: {
    fontSize: '0.85rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.55',
  },
  actionRow: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '6rem',
  },
  actionBtn: {
    backgroundColor: 'var(--neutral-ink)',
    color: '#ffffff',
    padding: '0.95rem 2.5rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '0.92rem',
    textDecoration: 'none',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
  },
};
