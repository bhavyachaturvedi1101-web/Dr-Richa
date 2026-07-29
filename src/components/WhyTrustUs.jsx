import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Compass, Star, Eye } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ui/ScrollReveal';

const trustPillars = [
  {
    num: '01 / 04',
    title: 'Clinical Rigor',
    category: 'STERILIZATION & HYGIENE',
    desc: 'We follow hospital-grade sterilization protocols — every instrument, every surface, every time. Our clinical environment meets global infection control standards.',
    tagline: 'ISO-Certified Hygiene Standards',
    icon: ShieldAlert,
    image: '/clinic_interior.png',
    badge: 'Zero Contamination'
  },
  {
    num: '02 / 04',
    title: 'Painless Touch',
    category: 'COMFORT & SEDATION',
    desc: 'Using advanced whisper-quiet rotary systems and comfortable local anesthesia, we make your treatment completely pain-free. Most patients are surprised when it’s over.',
    tagline: 'Comfort Guaranteed On All Procedures',
    icon: Compass,
    image: '/laser_image.png',
    badge: 'Gentle Rotary Tech'
  },
  {
    num: '03 / 04',
    title: 'BDS Expertise',
    category: 'SURGICAL PRECISION',
    desc: 'Every procedure is personally diagnosed and led by Dr. Richa Tiwari, bringing 9+ years of clinical surgery experience to ensure absolute precision.',
    tagline: '9+ Years Of Dedicated Practice',
    icon: Star,
    image: '/about_doc.png',
    badge: 'Chief Surgeon Led'
  },
  {
    num: '04 / 04',
    title: 'Total Clarity',
    category: 'DIGITAL DIAGNOSTICS',
    desc: 'Before we begin, you see exactly what we see — digital X-rays, diagnostics, and a step-by-step visual walkthrough of your treatment plan. No jargon, just honesty.',
    tagline: 'Detailed Treatment Blueprints',
    icon: Eye,
    image: '/highlights.png',
    badge: 'Digital 3D Walkthrough'
  }
];

export default function WhyTrustUs() {
  return (
    <section style={styles.section} id="why-us">
      {/* Background ambient lighting */}
      <div style={styles.ambientGlow} />

        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="fade-up" style={styles.header}>
          <span style={styles.subtag}>How We Are Different</span>
          <h2 style={styles.heading}>Why Patients Trust Us.</h2>
          <p style={styles.subheading}>
            Four core clinical pillars that define every single visit, ensuring absolute safety, painless comfort, and total peace of mind.
          </p>
        </ScrollReveal>

        {/* Pillars Grid with Stagger Container */}
        <StaggerContainer style={styles.grid} staggerDelay={0.12}>
          {trustPillars.map((pillar, idx) => {
            const isActive = activeIndex === idx;
            const Icon = pillar.icon;

            return (
              <StaggerItem
                key={idx}
                direction="fade-up"
              >
                <motion.div
                  style={{ ...styles.card, willChange: 'transform, opacity' }}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 25px 45px -12px rgba(37,151,208,0.12)',
                    borderColor: 'rgba(37,151,208,0.35)',
                    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
                  }}
                >
                  <div style={styles.cardTop}>
                    <div style={styles.iconBox}>
                      <Icon size={20} color="var(--brand-surgical-blue)" />
                    </div>
                    <span style={styles.numText}>{pillar.num}</span>
                  </div>

                  <div style={styles.cardMiddle}>
                    <h3 style={styles.pillarTitle}>{pillar.title}</h3>
                    <p style={styles.pillarDesc}>{pillar.desc}</p>
                  </div>

                  <div style={styles.cardBottom}>
                    <div style={styles.line} />
                    <span style={styles.tagline}>{pillar.tagline}</span>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '7.5rem 0',
    backgroundColor: '#f8fbfe',
    position: 'relative',
    overflow: 'hidden',
  },
  ambientGlow: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '700px',
    height: '700px',
    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '1240px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2,
  },
  header: {
    textAlign: 'center',
    marginBottom: '4.5rem',
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
    marginBottom: '1.25rem',
  },
  heading: {
    fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)',
    color: 'var(--neutral-ink)',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    marginBottom: '1rem',
  },
  subheading: {
    fontSize: '1.1rem',
    color: 'var(--neutral-charcoal)',
    maxWidth: '620px',
    margin: '0 auto',
    lineHeight: '1.7',
  },
  accordionContainer: {
    display: 'flex',
    gap: '1.25rem',
    minHeight: '520px',
    maxWidth: '1240px',
    margin: '0 auto',
    width: '100%',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    padding: '1rem 0',
  },
  accordionCard: {
    position: 'relative',
    borderRadius: '36px',
    overflow: 'hidden',
    height: '520px',
    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'box-shadow 0.3s ease',
  },
  accordionImg: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  accordionOverlay: {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    transition: 'background 0.4s ease',
  },
  accordionBadge: {
    position: 'absolute',
    top: '24px',
    left: '24px',
    zIndex: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(8px)',
    color: 'var(--brand-surgical-blue)',
    fontWeight: '800',
    fontSize: '0.85rem',
    padding: '6px 16px',
    borderRadius: '999px',
    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
  },
  accordionActiveContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    padding: '2.5rem',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.9rem',
    color: '#ffffff',
  },
  accordionCategoryPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(56, 189, 248, 0.2)',
    border: '1px solid rgba(56, 189, 248, 0.4)',
    color: '#38bdf8',
    fontSize: '0.75rem',
    fontWeight: '800',
    letterSpacing: '0.15em',
    padding: '4px 12px',
    borderRadius: '999px',
    textTransform: 'uppercase',
  },
  accordionActiveTitle: {
    fontSize: 'clamp(1.6rem, 3vw, 2.3rem)',
    fontWeight: '800',
    lineHeight: '1.2',
    color: '#ffffff',
    letterSpacing: '-0.02em',
  },
  accordionActiveDesc: {
    fontSize: '1rem',
    lineHeight: '1.65',
    color: 'rgba(255, 255, 255, 0.9)',
    maxWidth: '650px',
  },
  taglineBox: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(15, 23, 42, 0.75)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '6px 16px',
    borderRadius: '999px',
    fontSize: '0.82rem',
    fontWeight: '700',
    color: '#ffffff',
    marginTop: '0.5rem',
    alignSelf: 'flex-start',
  },
  accordionCollapsedContent: {
    position: 'absolute',
    bottom: '3rem',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    whiteSpace: 'nowrap',
  },
  verticalTitle: {
    writingMode: 'vertical-rl',
    transform: 'rotate(180deg)',
    fontSize: '1.15rem',
    fontWeight: '800',
    letterSpacing: '0.08em',
    color: 'rgba(255, 255, 255, 0.95)',
    textTransform: 'uppercase',
  },
};



