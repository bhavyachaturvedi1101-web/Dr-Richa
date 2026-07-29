import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import dentalImg from '../assets/dental_workers.png';

export default function Process() {
  const steps = [
    {
      num: '01',
      phase: 'Welcome',
      title: 'Clinical Onboarding',
      desc: 'Secure your visit via our portal. Your history and preferences are reviewed before you arrive.',
    },
    {
      num: '02',
      phase: 'Assessment',
      title: 'Diagnostic Precision',
      desc: 'Digital imaging and a visual treatment blueprint personally crafted by Dr. Richa Tiwari.',
    },
    {
      num: '03',
      phase: 'Procedure',
      title: 'Specialized Treatment',
      desc: 'B.D.S.-led precision execution with advanced sedation — quiet, deliberate, and painless.',
    },
    {
      num: '04',
      phase: 'Recovery',
      title: 'Aftercare & Recovery',
      desc: 'A personalized recovery plan and scheduled follow-up to confirm your results are perfect.',
    }
  ];

  return (
    <section style={styles.section} id="process">
      <div style={styles.container}>
        
        {/* Header centered at the top */}
        <motion.div 
          style={styles.headerCentered}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.heading}>
            How We <span style={styles.accentText}>Treat You.</span>
          </h2>
          <p style={styles.subheading}>
            Medicine with a hospitality mindset — every step crafted for your comfort and clarity.
          </p>
        </motion.div>

        <div style={styles.grid} className="process-grid">
          {/* Left Column: Media */}
          <div style={styles.leftCol}>
            <motion.div
              style={styles.mediaContainer}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.img
                src={dentalImg}
                alt="Dental Care Illustration"
                style={styles.dentalImage}
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>

          {/* Right Column: Curved Timeline */}
          <div style={styles.rightCol}>
            
            {/* SVG Connecting Arc */}
            <div style={styles.timelineSvgContainer} className="process-timeline-svg">
              <svg viewBox="0 0 150 100" style={styles.timelineSvg} preserveAspectRatio="none">
                <path 
                  d="M 26 0 Q 120 50 26 100" 
                  fill="none" 
                  stroke="rgba(37, 151, 208, 0.8)" 
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            <div style={styles.timeline}>
              {steps.map((step, idx) => {
                // To place the items on the curve: item 1 and 4 are at x=0, item 2 and 3 are pushed to x=42px
                const isMiddle = idx === 1 || idx === 2;
                
                return (
                  <motion.div 
                    key={idx}
                    style={{
                      ...styles.timelineItem,
                      transform: isMiddle ? 'translateX(42px)' : 'translateX(0px)'
                    }}
                    initial={{ opacity: 0, x: isMiddle ? 60 : 30 }}
                    whileInView={{ opacity: 1, x: isMiddle ? 42 : 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 * idx }}
                    className={`timeline-node-${idx}`}
                  >
                    <div style={styles.nodeCircle}>
                      <span style={styles.nodeNum}>{step.num}</span>
                    </div>
                    <div style={styles.nodeContent}>
                      <h3 style={styles.nodeTitle}>{step.title}</h3>
                      <p style={styles.nodeDesc}>{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
          </div>
        </div>
        
        {/* Action Button Centered Below */}
        <div style={styles.actionRow}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link to="/contact" style={styles.actionBtn}>
              Book Your Experience →
            </Link>
          </motion.div>
        </div>

      </div>
      
      {/* Responsive Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .process-timeline-svg {
            display: none !important;
          }
          .timeline-node-1, .timeline-node-2 {
            transform: translateX(0) !important;
          }
        }
      `}} />
    </section>
  );
}

const styles = {
  section: {
    padding: '8rem 0',
    backgroundColor: '#ffffff',
    position: 'relative',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  headerCentered: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: '5rem',
  },
  heading: {
    fontSize: 'clamp(2.5rem, 4vw, 4rem)',
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    color: 'var(--neutral-ink)',
    fontWeight: '800',
    marginBottom: '1rem',
  },
  accentText: {
    color: 'var(--brand-surgical-blue)',
  },
  subheading: {
    fontSize: '1.05rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.7',
    maxWidth: '560px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gap: '4rem',
    alignItems: 'center',
  },
  leftCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: '2rem',
  },
  mediaContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '560px',
    aspectRatio: '1/1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  dentalImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    mixBlendMode: 'multiply',
  },
  rightCol: {
    position: 'relative',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  timelineSvgContainer: {
    position: 'absolute',
    top: '36px',
    bottom: '36px', 
    left: '0px', 
    width: '150px',
    pointerEvents: 'none',
    zIndex: 0,
  },
  timelineSvg: {
    width: '100%',
    height: '100%',
    overflow: 'visible',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: '4rem',
    position: 'relative',
    zIndex: 1,
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem',
  },
  nodeCircle: {
    width: '52px',
    height: '52px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    border: '2px solid var(--brand-surgical-blue)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
    position: 'relative',
  },
  nodeNum: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--brand-surgical-blue)',
  },
  nodeContent: {
    paddingTop: '0.2rem',
  },
  nodeTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--neutral-ink)',
    marginBottom: '0.5rem',
    letterSpacing: '-0.01em',
  },
  nodeDesc: {
    fontSize: '0.9rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.6',
    maxWidth: '320px',
  },
  actionRow: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5rem',
  },
  actionBtn: {
    backgroundColor: 'var(--brand-surgical-blue)',
    color: '#ffffff',
    padding: '1rem 2.5rem',
    borderRadius: '999px',
    fontWeight: '700',
    fontSize: '0.95rem',
    textDecoration: 'none',
    boxShadow: '0 4px 14px rgba(37, 151, 208, 0.3)',
    display: 'inline-block',
  },
};

