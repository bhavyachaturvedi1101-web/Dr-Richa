import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert,
  Compass,
  Star,
  Eye,
  Sparkles,
  CheckCircle2,
  X,
  ShieldCheck,
  ArrowUpRight,
  Award,
  Zap
} from 'lucide-react';

const trustPillars = [
  {
    num: '01 / 04',
    title: 'Clinical Rigor',
    category: 'STERILIZATION & HYGIENE',
    desc: 'We follow hospital-grade sterilization protocols — every instrument, every surface, every time. Our clinical environment meets global infection control standards.',
    tagline: 'ISO-Certified Hygiene Standards',
    icon: ShieldAlert,
    image: '/clinic_interior.png',
    badge: 'Zero Contamination',
    colSpanClass: 'bento-col-wide' // Spans 7 columns on desktop
  },
  {
    num: '02 / 04',
    title: 'Painless Touch',
    category: 'COMFORT & SEDATION',
    desc: 'Using advanced whisper-quiet rotary systems and comfortable local anesthesia, we make your treatment completely pain-free. Most patients are surprised when it’s over.',
    tagline: 'Comfort Guaranteed On All Procedures',
    icon: Compass,
    image: '/laser_image.png',
    badge: 'Gentle Rotary Tech',
    colSpanClass: 'bento-col-compact' // Spans 5 columns on desktop
  },
  {
    num: '03 / 04',
    title: 'BDS Expertise',
    category: 'SURGICAL PRECISION',
    desc: 'Every procedure is personally diagnosed and led by Dr. Richa Tiwari, bringing 9+ years of clinical surgery experience to ensure absolute precision.',
    tagline: '9+ Years Of Dedicated Practice',
    icon: Star,
    image: '/about_doc.png',
    badge: 'Chief Surgeon Led',
    colSpanClass: 'bento-col-compact' // Spans 5 columns on desktop
  },
  {
    num: '04 / 04',
    title: 'Total Clarity',
    category: 'DIGITAL DIAGNOSTICS',
    desc: 'Before we begin, you see exactly what we see — digital X-rays, diagnostics, and a step-by-step visual walkthrough of your treatment plan. No jargon, just honesty.',
    tagline: 'Detailed Treatment Blueprints',
    icon: Eye,
    image: '/highlights.png',
    badge: 'Digital 3D Walkthrough',
    colSpanClass: 'bento-col-wide' // Spans 7 columns on desktop
  }
];

export default function WhyTrustUs() {
  const [selectedPillar, setSelectedPillar] = useState(null);

  return (
    <section className="bento-trust-section" id="why-us">
      {/* Scoped CSS for Light Theme Google / Apple Flagship Bento Architecture */}
      <style>{`
        .bento-trust-section {
          padding: 7.5rem 0;
          background: linear-gradient(180deg, #f8fbfe 0%, #edf7fc 100%);
          color: #0f172a;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .bento-bg-glow-left {
          position: absolute;
          top: 15%;
          left: -10%;
          width: 650px;
          height: 650px;
          background: radial-gradient(circle, rgba(37, 151, 208, 0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        .bento-bg-glow-right {
          position: absolute;
          bottom: 10%;
          right: -10%;
          width: 650px;
          height: 650px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        .bento-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.75rem;
          position: relative;
          z-index: 2;
        }
        /* SECTION HEADER */
        .bento-header {
          text-align: center;
          margin-bottom: 3.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .bento-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(37, 151, 208, 0.1);
          border: 1px solid rgba(37, 151, 208, 0.28);
          color: #0284c7;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.22em;
          padding: 7px 20px;
          border-radius: 999px;
          margin-bottom: 1.25rem;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(37, 151, 208, 0.08);
        }
        .bento-heading {
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          color: #0f172a;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
          line-height: 1.12;
        }
        .bento-heading-gradient {
          background: linear-gradient(135deg, #0f172a 0%, #0284c7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .bento-subheading {
          font-size: 1.15rem;
          color: #475569;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.7;
        }
        /* TRUST CREDENTIALS BANNER (LIGHT THEME) */
        .bento-credentials-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 3rem;
          padding: 1rem 1.75rem;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05);
        }
        .credential-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.86rem;
          font-weight: 700;
          color: #334155;
        }
        .credential-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #0284c7;
        }
        /* 12-COLUMN ASYMMETRIC BENTO MATRIX */
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1.75rem;
        }
        .bento-col-wide {
          grid-column: span 7;
        }
        .bento-col-compact {
          grid-column: span 5;
        }
        @media (max-width: 1024px) {
          .bento-col-wide,
          .bento-col-compact {
            grid-column: span 12;
          }
        }
        /* INDIVIDUAL BENTO CARD (LIGHT THEME) */
        .bento-card {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          min-height: 480px;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(226, 232, 240, 0.95);
          background: #fdfbf7;
          cursor: pointer;
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 15px 40px -10px rgba(15, 23, 42, 0.08);
        }
        @media (max-width: 640px) {
          .bento-card {
            min-height: 420px;
            border-radius: 24px;
          }
        }
        .bento-card:hover {
          border-color: rgba(37, 151, 208, 0.7);
          transform: translateY(-7px);
          box-shadow: 0 25px 60px -15px rgba(2, 132, 199, 0.18);
        }
        /* UPPER PHOTO SHOWCASE IN CARD */
        .bento-card-photo-box {
          position: relative;
          height: 250px;
          width: 100%;
          overflow: hidden;
          background: #fdfbf7;
        }
        .bento-card-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .bento-card:hover .bento-card-bg-img {
          transform: scale(1.08);
        }
        /* TOP FLOATING BADGES OVER PHOTO */
        .bento-card-top {
          position: absolute;
          top: 18px;
          left: 18px;
          right: 18px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .bento-num-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(226, 232, 240, 0.9);
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 800;
          color: #0284c7;
          letter-spacing: 0.08em;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }
        .bento-icon-btn {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(226, 232, 240, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0284c7;
          transition: all 0.35s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }
        .bento-card:hover .bento-icon-btn {
          background: #0284c7;
          color: #ffffff;
          border-color: #0284c7;
          transform: rotate(6deg) scale(1.08);
          box-shadow: 0 8px 25px rgba(2, 132, 199, 0.35);
        }
        /* BOTTOM LIGHT THEME CONTENT */
        .bento-card-bottom {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
          gap: 1.25rem;
          background: #fdfbf7;
        }
        @media (max-width: 640px) {
          .bento-card-bottom {
            padding: 1.6rem;
          }
        }
        .bento-category-label {
          font-size: 0.74rem;
          font-weight: 800;
          color: #0284c7;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .bento-card-title {
          font-size: clamp(1.65rem, 2.7vw, 2.3rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin-top: 4px;
        }
        .bento-card-desc {
          font-size: 1rem;
          color: #475569;
          line-height: 1.65;
        }
        /* BADGE & TAGLINE FOOTER */
        .bento-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
          padding-top: 1.25rem;
          border-top: 1px solid #f1f5f9;
        }
        .bento-tagline-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          color: #059669;
          font-size: 0.82rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 999px;
        }
        .bento-badge-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f0f9ff;
          border: 1px solid #bae6fd;
          color: #0284c7;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 999px;
        }
        .bento-explore-hint {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #0284c7;
          opacity: 0.85;
          transition: all 0.25s ease;
        }
        .bento-card:hover .bento-explore-hint {
          transform: translateX(4px);
          opacity: 1;
        }

        /* SPOTLIGHT MODAL (LIGHT THEME) */
        .bento-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(16px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .bento-modal-box {
          background: #fdfbf7;
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 36px;
          max-width: 820px;
          width: 100%;
          overflow: hidden;
          position: relative;
          box-shadow: 0 35px 80px rgba(15, 23, 42, 0.25);
        }
        .bento-modal-img-wrap {
          position: relative;
          height: 380px;
          width: 100%;
        }
        @media (max-width: 640px) {
          .bento-modal-img-wrap {
            height: 250px;
          }
        }
        .bento-modal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .bento-modal-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(226, 232, 240, 0.95);
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.25s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
        }
        .bento-modal-close-btn:hover {
          background: #ef4444;
          border-color: #ef4444;
          color: #ffffff;
          transform: scale(1.08);
        }
        .bento-modal-content {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          color: #0f172a;
        }
        @media (max-width: 640px) {
          .bento-modal-content {
            padding: 1.75rem;
          }
        }
      `}</style>

      {/* Background radial ambient lights */}
      <div className="bento-bg-glow-left" />
      <div className="bento-bg-glow-right" />

      <div className="bento-container">
        {/* Header Section */}
        <motion.div
          className="bento-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="bento-heading">
            Why Patients <span className="bento-heading-gradient">Trust Us.</span>
          </h2>
          <p className="bento-subheading">
            Four core clinical pillars that define every single visit, ensuring absolute safety, painless comfort, and total peace of mind.
          </p>
        </motion.div>

        {/* Credentials trust strip (Light Theme) */}
        <div className="bento-credentials-bar">
          <div className="credential-item">
            <ShieldCheck size={16} color="#0284c7" />
            <span>100% Hospital-Grade Sterilization</span>
          </div>
          <span className="credential-dot" />
          <div className="credential-item">
            <Zap size={16} color="#0284c7" />
            <span>Whisper-Quiet Rotary Systems</span>
          </div>
          <span className="credential-dot" />
          <div className="credential-item">
            <Award size={16} color="#0284c7" />
            <span>9+ Years Chief Surgeon Expertise</span>
          </div>
          <span className="credential-dot" />
          <div className="credential-item">
            <Eye size={16} color="#0284c7" />
            <span>Digital 3D Diagnostic Walkthrough</span>
          </div>
        </div>

        {/* 12-Column Asymmetric Bento Grid (Light Theme) */}
        <div className="bento-grid">
          {trustPillars.map((pillar, idx) => {
            const PillarIcon = pillar.icon;

            return (
              <motion.div
                key={idx}
                className={`bento-card ${pillar.colSpanClass}`}
                onClick={() => setSelectedPillar(pillar)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
              >
                {/* Upper Photo Showcase */}
                <div className="bento-card-photo-box">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="bento-card-bg-img"
                  />

                  {/* Top Floating Badges */}
                  <div className="bento-card-top">
                    <div className="bento-num-badge">
                      <span>{pillar.num}</span>
                      <span>•</span>
                      <span>{pillar.category}</span>
                    </div>

                    <div className="bento-icon-btn">
                      <PillarIcon size={20} />
                    </div>
                  </div>
                </div>

                {/* Bottom White Luxury Content Box */}
                <div className="bento-card-bottom">
                  <div>
                    <span className="bento-category-label">{pillar.category}</span>
                    <h3 className="bento-card-title">{pillar.title}</h3>
                  </div>

                  <p className="bento-card-desc">{pillar.desc}</p>

                  <div className="bento-card-footer">
                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <div className="bento-tagline-chip">
                        <CheckCircle2 size={15} color="#059669" />
                        <span>{pillar.tagline}</span>
                      </div>

                      <div className="bento-badge-chip">
                        <ShieldCheck size={14} color="#0284c7" />
                        <span>{pillar.badge}</span>
                      </div>
                    </div>

                    <div className="bento-explore-hint">
                      <span>Inspect Photo</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* INTERACTIVE SPOTLIGHT MODAL (LIGHT THEME) */}
      <AnimatePresence>
        {selectedPillar && (
          <motion.div
            className="bento-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPillar(null)}
          >
            <motion.div
              className="bento-modal-box"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="bento-modal-close-btn"
                onClick={() => setSelectedPillar(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="bento-modal-img-wrap">
                <img
                  src={selectedPillar.image}
                  alt={selectedPillar.title}
                  className="bento-modal-img"
                />
              </div>

              <div className="bento-modal-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span style={{
                    color: '#0284c7',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    letterSpacing: '0.15em',
                    background: '#f0f9ff',
                    border: '1px solid #bae6fd',
                    padding: '6px 14px',
                    borderRadius: '999px'
                  }}>
                    {selectedPillar.num} • {selectedPillar.category}
                  </span>
                  <span className="bento-badge-chip">
                    <ShieldCheck size={14} color="#0284c7" />
                    {selectedPillar.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15 }}>
                  {selectedPillar.title}
                </h3>

                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7 }}>
                  {selectedPillar.desc}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#ecfdf5',
                  border: '1px solid #a7f3d0',
                  color: '#059669',
                  padding: '10px 18px',
                  borderRadius: '16px',
                  fontWeight: 700,
                  width: 'fit-content',
                  marginTop: '0.5rem'
                }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <span>{selectedPillar.tagline}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
