import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import dentalImg from '../assets/dental_workers.png';

// 3D-styled SVG icons matching the reference design for mobile cards
// High-contrast, vibrant vector icons for step cards
const OnboardingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <rect x="7" y="7" width="18" height="21" rx="3.5" fill="#38bdf8" opacity="0.2" stroke="#0284c7" strokeWidth="2.2" />
    <path d="M12 5C12 4.45 12.45 4 13 4H19C19.55 4 20 4.45 20 5V7H12V5Z" fill="#0284c7" />
    <circle cx="21" cy="22" r="5.5" fill="#0284c7" />
    <path d="M19.2 22L20.5 23.3L23 20.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="11" y1="12" x2="21" y2="12" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
    <line x1="11" y1="16" x2="17" y2="16" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ToothIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <path d="M16 3C11 3 7.5 6.5 7.5 11.5C7.5 16.5 9 20 10.5 24C11.2 25.8 12.8 28.5 14.5 28.5C15.5 28.5 15.8 26 16 24C16.2 26 16.5 28.5 17.5 28.5C19.2 28.5 20.8 25.8 21.5 24C23 20 24.5 16.5 24.5 11.5C24.5 6.5 21 3 16 3Z" fill="#0284c7" stroke="#0284c7" strokeWidth="1" />
    <path d="M12.5 7.5C10.5 9.5 10 12.5 10 14.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
  </svg>
);

const TreatmentToolIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <path d="M6 26L18 14" stroke="#0284c7" strokeWidth="4" strokeLinecap="round" />
    <path d="M16 12L22 6" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />
    <circle cx="22" cy="6" r="3" fill="#0284c7" />
    <path d="M25 10L26 12L28 13L26 14L25 16L24 14L22 13L24 12L25 10Z" fill="#0284c7" />
    <path d="M20 18L20.6 19.4L22 20L20.6 20.6L20 22L19.4 20.6L18 20L19.4 19.4L20 18Z" fill="#38bdf8" />
  </svg>
);

const HeartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
    <path d="M16 27C16 27 5 19.5 5 12C5 8 8 5 12 5C14.3 5 15.5 6.2 16 7.2C16.5 6.2 17.7 5 20 5C24 5 27 8 27 12C27 19.5 16 27 16 27Z" fill="#0284c7" stroke="#0284c7" strokeWidth="1" />
    <path d="M9.5 9C8 10.5 7.5 12.5 7.5 14" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
  </svg>
);

export default function Process() {
  const steps = [
    {
      num: '01',
      phase: 'Welcome',
      title: 'Clinical Onboarding',
      desc: 'Secure your visit via our portal. Your history and preferences are reviewed before you arrive.',
      Icon: OnboardingIcon,
    },
    {
      num: '02',
      phase: 'Assessment',
      title: 'Diagnostic Precision',
      desc: 'Digital imaging and a visual treatment blueprint personally crafted by Dr. Richa Tiwari.',
      Icon: ToothIcon,
    },
    {
      num: '03',
      phase: 'Procedure',
      title: 'Specialized Treatment',
      desc: 'B.D.S.-led precision execution with advanced sedation — quiet, deliberate, and painless.',
      Icon: TreatmentToolIcon,
    },
    {
      num: '04',
      phase: 'Recovery',
      title: 'Aftercare & Recovery',
      desc: 'A personalized recovery plan and scheduled follow-up to confirm your results are perfect.',
      Icon: HeartIcon,
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

        {/* Desktop View */}
        <div style={styles.grid} className="process-grid process-desktop-view">
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
                  d="M 0 0 Q 80 50 0 100"
                  fill="none"
                  stroke="rgba(37, 151, 208, 0.8)"
                  strokeWidth="2.5"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            <div style={styles.timeline}>
              {steps.map((step, idx) => {
                const isMiddle = idx === 1 || idx === 2;
                const StepIcon = step.Icon;

                return (
                  <motion.div
                    key={idx}
                    style={{
                      ...styles.timelineItem,
                    }}
                    initial={{ opacity: 0, y: 35, x: isMiddle ? 36 : 0 }}
                    whileInView={{ opacity: 1, y: 0, x: isMiddle ? 36 : 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, delay: 0.14 * idx, ease: [0.16, 1, 0.3, 1] }}
                    className={`process-step-item timeline-node-${idx}`}
                  >
                    {/* Circle Node on Timeline */}
                    <motion.div
                      style={styles.nodeCircle}
                      className="process-step-circle"
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.14 * idx + 0.1 }}
                    >
                      <span style={styles.nodeNum}>{step.num}</span>
                    </motion.div>

                    {/* Connector line between circle and card */}
                    <div className="process-desktop-connector">
                      <div className="process-desktop-connector-dot" />
                    </div>

                    {/* White Card */}
                    <Link to="/contact" style={{ textDecoration: 'none', width: '100%', maxWidth: '440px' }}>
                      <motion.div
                        className="process-desktop-card"
                        whileHover={{ y: -3, boxShadow: '0 12px 30px rgba(37, 151, 208, 0.12)' }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Icon Box */}
                        <div className="process-desktop-card-icon-wrapper">
                          <StepIcon />
                        </div>

                        {/* Card Info */}
                        <div className="process-desktop-card-info">
                          <h3 className="process-desktop-card-title">{step.title}</h3>
                          <p className="process-desktop-card-desc">{step.desc}</p>
                        </div>

                        {/* Action Circle Arrow */}
                        <div className="process-desktop-card-arrow">
                          <ArrowRight size={15} />
                        </div>
                      </motion.div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Mobile View - Styled to match attached reference design with once-only appearing animations */}
        <div className="process-mobile-view">
          <div className="process-mobile-container">
            {/* Vertical Blue Line */}
            <motion.div
              className="process-mobile-line"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            <div className="process-mobile-steps">
              {steps.map((step, idx) => {
                const StepIcon = step.Icon;
                return (
                  <motion.div
                    key={idx}
                    className="process-mobile-step-row"
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.14, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Circle Node on Timeline */}
                    <motion.div
                      className="process-mobile-circle-node"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.14 + 0.05 }}
                    >
                      <span>{step.num}</span>
                    </motion.div>

                    {/* Connector line between circle and card */}
                    <div className="process-mobile-connector">
                      <div className="process-mobile-connector-dot" />
                    </div>

                    {/* White Card */}
                    <Link to="/contact" style={{ textDecoration: 'none', width: '100%' }}>
                      <motion.div
                        className="process-mobile-card"
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.14 + 0.1 }}
                      >
                        {/* Icon Box */}
                        <div className="process-mobile-card-icon-wrapper">
                          <StepIcon />
                        </div>

                        {/* Card Info */}
                        <div className="process-mobile-card-info">
                          <h3 className="process-mobile-card-title">{step.title}</h3>
                          <p className="process-mobile-card-desc">{step.desc}</p>
                        </div>

                        {/* Action Circle Arrow */}
                        <div className="process-mobile-card-arrow">
                          <ArrowRight size={15} />
                        </div>
                      </motion.div>
                    </Link>
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

      {/* Responsive & Desktop Card Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .process-desktop-view {
          display: grid !important;
        }
        .process-mobile-view {
          display: none !important;
        }

        .process-desktop-connector {
          width: 16px;
          min-width: 16px;
          height: 1.5px;
          background-color: #7dd3fc;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-shrink: 0;
        }

        .process-desktop-connector-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #0284c7;
          margin-right: -2px;
        }

        .process-desktop-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 1rem 1.15rem;
          border: 1px solid #eef2f6;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
          display: flex;
          align-items: center;
          gap: 0.9rem;
          width: 100%;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .process-desktop-card-icon-wrapper {
          width: 52px;
          height: 52px;
          min-width: 52px;
          border-radius: 16px;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          border: 1px solid rgba(186, 230, 253, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .process-desktop-card-info {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
        }

        .process-desktop-card-title {
          font-size: 0.98rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 0.2rem 0;
          line-height: 1.25;
          letter-spacing: -0.01em;
        }

        .process-desktop-card-desc {
          font-size: 0.8rem;
          font-weight: 400;
          color: #64748b;
          margin: 0;
          line-height: 1.42;
        }

        .process-desktop-card-arrow {
          width: 32px;
          height: 32px;
          min-width: 32px;
          border-radius: 50%;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          color: #0284c7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.25s ease;
          margin-left: auto;
        }

        .process-desktop-card:hover .process-desktop-card-arrow {
          background: #0284c7;
          color: #ffffff;
          border-color: #0284c7;
          transform: translateX(3px);
        }

        @media (max-width: 768px) {
          .process-desktop-view {
            display: none !important;
          }
          .process-mobile-view {
            display: block !important;
            margin-top: 1rem;
            margin-bottom: 2rem;
          }
          .process-mobile-container {
            position: relative;
            padding-left: 0px;
          }
          .process-mobile-line {
            position: absolute;
            top: 22px;
            bottom: 22px;
            left: 21px;
            width: 2px;
            background: linear-gradient(to bottom, #38bdf8 0%, #0284c7 100%);
            transform-origin: top;
            z-index: 1;
          }
          .process-mobile-steps {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            position: relative;
            z-index: 2;
          }
          .process-mobile-step-row {
            display: flex;
            align-items: center;
            gap: 0;
            width: 100%;
          }
          .process-mobile-circle-node {
            width: 44px;
            height: 44px;
            min-width: 44px;
            border-radius: 50%;
            background-color: #ffffff;
            border: 2px solid #38bdf8;
            box-shadow: 0 4px 14px rgba(56, 189, 248, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.92rem;
            color: #0284c7;
            z-index: 3;
            flex-shrink: 0;
          }
          .process-mobile-connector {
            width: 16px;
            min-width: 16px;
            height: 1.5px;
            background-color: #7dd3fc;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-shrink: 0;
          }
          .process-mobile-connector-dot {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: #0284c7;
            margin-right: -2px;
          }
          .process-mobile-card {
            background: #ffffff;
            border-radius: 20px;
            padding: 1rem 1.1rem;
            border: 1px solid #eef2f6;
            box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
            display: flex;
            align-items: center;
            gap: 0.85rem;
            width: 100%;
            transition: all 0.3s ease;
          }
          .process-mobile-card:active {
            transform: scale(0.98);
            box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08);
          }
          .process-mobile-card-icon-wrapper {
            width: 50px;
            height: 50px;
            min-width: 50px;
            border-radius: 16px;
            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
            border: 1px solid rgba(186, 230, 253, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .process-mobile-card-info {
            flex: 1;
            min-width: 0;
          }
          .process-mobile-card-title {
            font-size: 0.96rem;
            font-weight: 700;
            color: #0f172a;
            margin: 0 0 0.2rem 0;
            line-height: 1.25;
            letter-spacing: -0.01em;
          }
          .process-mobile-card-desc {
            font-size: 0.78rem;
            font-weight: 400;
            color: #64748b;
            margin: 0;
            line-height: 1.42;
          }
          .process-mobile-card-arrow {
            width: 32px;
            height: 32px;
            min-width: 32px;
            border-radius: 50%;
            background: #f8fafc;
            border: 1px solid #f1f5f9;
            color: #334155;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
        }
      `}} />
    </section>
  );
}

const styles = {
  section: {
    padding: '8rem 0',
    backgroundColor: '#fdfbf7',
    background: 'linear-gradient(180deg, #edf7fc 0%, #fdfbf7 100%)',
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
    top: '24px',
    bottom: '24px',
    left: '24px',
    width: '100px',
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
    gap: '3.5rem',
    position: 'relative',
    zIndex: 1,
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0',
  },
  nodeCircle: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    border: '2px solid var(--brand-surgical-blue)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 4px 14px rgba(37, 151, 208, 0.2)',
    position: 'relative',
    zIndex: 10,
  },
  nodeNum: {
    fontSize: '0.95rem',
    fontWeight: '700',
    color: 'var(--brand-surgical-blue)',
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

