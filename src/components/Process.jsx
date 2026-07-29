import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserCheck, 
  Eye, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Activity, 
  Clock, 
  Award, 
  ArrowUpRight 
} from 'lucide-react';

export default function Process() {
  const [selectedStep, setSelectedStep] = useState(null);

  const steps = [
    {
      num: '01',
      phase: 'Welcome',
      title: 'Clinical Onboarding',
      desc: 'Secure your visit via our portal. Your history and preferences are reviewed before you arrive.',
      highlight: 'Portal History Review',
      icon: UserCheck,
      details: 'Before your appointment, our clinical team reviews your medical history, dental records, and personal comfort preferences. When you arrive, there is zero paperwork delay—just an immediate, warm welcome into our sterile clinical environment.'
    },
    {
      num: '02',
      phase: 'Assessment',
      title: 'Diagnostic Precision',
      desc: 'Digital imaging and a visual treatment blueprint personally crafted by Dr. Richa Tiwari.',
      highlight: '3D Treatment Blueprint',
      icon: Eye,
      details: 'We utilize ultra-low radiation digital imaging and diagnostic scans to examine every structure with sub-millimeter precision. Dr. Richa Tiwari walks you through your scans visually so you understand exactly what we see.'
    },
    {
      num: '03',
      phase: 'Procedure',
      title: 'Specialized Treatment',
      desc: 'B.D.S.-led precision execution with advanced sedation — quiet, deliberate, and painless.',
      highlight: 'Whisper-Quiet Sedation',
      icon: ShieldCheck,
      details: 'Our procedures use advanced rotary instruments that are whisper-quiet and gentle. Combined with painless local anesthesia techniques, your treatment is calm, efficient, and completely free of discomfort.'
    },
    {
      num: '04',
      phase: 'Recovery',
      title: 'Aftercare & Recovery',
      desc: 'A personalized recovery plan and scheduled follow-up to confirm your results are perfect.',
      highlight: 'Personalized Care Plan',
      icon: HeartHandshake,
      details: 'Before you leave, you receive a tailored aftercare blueprint and direct contact access for any questions. We schedule follow-up check-ins to ensure your healing and aesthetic results exceed every expectation.'
    }
  ];

  return (
    <section className="process-rail-section" id="process">
      {/* Scoped CSS for Light Theme Apple / Google Linear Process Rail */}
      <style>{`
        .process-rail-section {
          padding: 7.5rem 0;
          background: linear-gradient(180deg, #ffffff 0%, #f8fbfe 100%);
          color: #0f172a;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .process-bg-glow-left {
          position: absolute;
          top: 20%;
          left: -5%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(37, 151, 208, 0.08) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        .process-bg-glow-right {
          position: absolute;
          bottom: 15%;
          right: -5%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }
        .process-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.75rem;
          position: relative;
          z-index: 2;
        }
        /* SECTION HEADER */
        .process-header {
          text-align: center;
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .process-pill-tag {
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
        .process-heading {
          font-size: clamp(2.5rem, 5vw, 3.8rem);
          color: #0f172a;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
          line-height: 1.12;
        }
        .process-heading-gradient {
          background: linear-gradient(135deg, #0f172a 0%, #0284c7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .process-subheading {
          font-size: 1.15rem;
          color: #475569;
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* CONNECTING PULSE RAIL (DESKTOP) */
        .process-rail-track {
          position: relative;
          margin-bottom: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4rem;
        }
        @media (max-width: 1024px) {
          .process-rail-track {
            display: none;
          }
        }
        .rail-line-bg {
          position: absolute;
          top: 50%;
          left: 6%;
          right: 6%;
          height: 3px;
          background: #e2e8f0;
          transform: translateY(-50%);
          z-index: 0;
          border-radius: 999px;
          overflow: hidden;
        }
        .rail-line-pulse {
          position: absolute;
          top: 0;
          left: -40%;
          width: 40%;
          height: 100%;
          background: linear-gradient(90deg, transparent 0%, #0284c7 50%, transparent 100%);
          animation: railPulse 3s infinite linear;
        }
        @keyframes railPulse {
          0% { left: -40%; }
          100% { left: 100%; }
        }
        .rail-step-marker {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 12px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          padding: 8px 18px;
          border-radius: 999px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.05);
          font-weight: 800;
          font-size: 0.82rem;
          color: #334155;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .rail-step-marker:hover {
          border-color: #0284c7;
          color: #0284c7;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(2, 132, 199, 0.15);
        }
        .rail-num-badge {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #f0f9ff;
          color: #0284c7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 800;
        }

        /* 4-COLUMN PROCESS CARDS GRID */
        .process-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
        }
        @media (max-width: 1024px) {
          .process-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.75rem;
          }
        }
        @media (max-width: 640px) {
          .process-cards-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        /* INDIVIDUAL PROCESS CARD (LIGHT THEME LUXURY) */
        .process-card {
          position: relative;
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 28px;
          padding: 2.2rem 1.8rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 15px 35px -10px rgba(15, 23, 42, 0.07);
        }
        .process-card:hover {
          border-color: #0284c7;
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -15px rgba(2, 132, 199, 0.18);
        }
        /* TOP ROW OF CARD */
        .process-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .process-step-orb {
          width: 52px;
          height: 52px;
          border-radius: 18px;
          background: #f0f9ff;
          border: 1px solid rgba(56, 189, 248, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0284c7;
          font-weight: 800;
          font-size: 1.15rem;
          transition: all 0.35s ease;
          box-shadow: 0 4px 15px rgba(2, 132, 199, 0.1);
        }
        .process-card:hover .process-step-orb {
          background: #0284c7;
          color: #ffffff;
          border-color: #0284c7;
          transform: rotate(6deg) scale(1.08);
          box-shadow: 0 8px 25px rgba(2, 132, 199, 0.35);
        }
        .process-phase-pill {
          font-size: 0.74rem;
          font-weight: 800;
          color: #0284c7;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: rgba(56, 189, 248, 0.12);
          padding: 5px 12px;
          border-radius: 999px;
        }
        /* CARD BODY */
        .process-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .process-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.25;
        }
        .process-card-desc {
          font-size: 0.96rem;
          color: #475569;
          line-height: 1.65;
        }
        /* CARD FOOTER */
        .process-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1.25rem;
          border-top: 1px solid #f1f5f9;
        }
        .process-highlight-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          color: #059669;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 5px 12px;
          border-radius: 999px;
        }
        .process-explore-hint {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.8rem;
          font-weight: 700;
          color: #0284c7;
          opacity: 0.85;
          transition: all 0.25s ease;
        }
        .process-card:hover .process-explore-hint {
          transform: translateX(4px);
          opacity: 1;
        }

        /* INTERACTIVE STEP MODAL */
        .process-modal-backdrop {
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
        .process-modal-box {
          background: #ffffff;
          border: 1px solid rgba(226, 232, 240, 0.95);
          border-radius: 36px;
          max-width: 680px;
          width: 100%;
          padding: 2.75rem;
          position: relative;
          box-shadow: 0 35px 80px rgba(15, 23, 42, 0.25);
          color: #0f172a;
        }
        @media (max-width: 640px) {
          .process-modal-box {
            padding: 1.75rem;
            border-radius: 28px;
          }
        }
        .process-modal-close-btn {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .process-modal-close-btn:hover {
          background: #ef4444;
          border-color: #ef4444;
          color: #ffffff;
          transform: scale(1.08);
        }
      `}</style>

      {/* Ambient background glows */}
      <div className="process-bg-glow-left" />
      <div className="process-bg-glow-right" />

      <div className="process-container">
        {/* Section Header */}
        <motion.div 
          className="process-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="process-pill-tag">
            <Sparkles size={14} color="#0284c7" />
            <span>HOW WE ARE DIFFERENT</span>
          </div>
          <h2 className="process-heading">
            How We <span className="process-heading-gradient">Treat You.</span>
          </h2>
          <p className="process-subheading">
            Medicine with a hospitality mindset — every step crafted for your comfort, safety, and absolute clarity.
          </p>
        </motion.div>

        {/* Desktop Connecting Pulse Rail */}
        <div className="process-rail-track">
          <div className="rail-line-bg">
            <div className="rail-line-pulse" />
          </div>

          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="rail-step-marker"
              onClick={() => setSelectedStep(step)}
            >
              <span className="rail-num-badge">{step.num}</span>
              <span>{step.phase} Phase</span>
            </div>
          ))}
        </div>

        {/* 4-Column Linear Process Cards */}
        <div className="process-cards-grid">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;

            return (
              <motion.div
                key={idx}
                className="process-card"
                onClick={() => setSelectedStep(step)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
              >
                {/* Top Orb & Phase Badge */}
                <div className="process-card-header">
                  <div className="process-step-orb">
                    <span>{step.num}</span>
                  </div>

                  <span className="process-phase-pill">{step.phase}</span>
                </div>

                {/* Card Body */}
                <div className="process-card-body">
                  <h3 className="process-card-title">{step.title}</h3>
                  <p className="process-card-desc">{step.desc}</p>
                </div>

                {/* Card Footer with Highlight & Hint */}
                <div className="process-card-footer">
                  <div className="process-highlight-chip">
                    <CheckCircle2 size={14} color="#059669" />
                    <span>{step.highlight}</span>
                  </div>

                  <div className="process-explore-hint">
                    <span>Details</span>
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* INTERACTIVE STEP DETAIL MODAL (LIGHT THEME) */}
      <AnimatePresence>
        {selectedStep && (
          <motion.div 
            className="process-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStep(null)}
          >
            <motion.div 
              className="process-modal-box"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                type="button" 
                className="process-modal-close-btn"
                onClick={() => setSelectedStep(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span style={{
                  background: '#f0f9ff',
                  border: '1px solid #bae6fd',
                  color: '#0284c7',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  letterSpacing: '0.15em',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  textTransform: 'uppercase'
                }}>
                  STEP {selectedStep.num} • {selectedStep.phase} PHASE
                </span>
                <span className="process-highlight-chip">
                  <CheckCircle2 size={14} color="#059669" />
                  {selectedStep.highlight}
                </span>
              </div>

              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', lineHeight: 1.15 }}>
                {selectedStep.title}
              </h3>

              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {selectedStep.details}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                padding: '12px 20px',
                borderRadius: '16px',
                color: '#334155',
                fontSize: '0.92rem',
                fontWeight: 700
              }}>
                <selectedStep.icon size={20} color="#0284c7" />
                <span>Dr. Richa Tiwari Clinical Reassurance Guarantee</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
