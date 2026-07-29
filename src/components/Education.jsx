import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ShieldAlert } from 'lucide-react';
import { GiToothbrush, GiTooth, GiWaterDrop, GiShinyApple } from 'react-icons/gi';
import { FaStethoscope, FaMedkit } from 'react-icons/fa';

const wellnessTips = [
  {
    num: '01',
    category: 'Circadian Rhythm',
    title: 'Persistence',
    desc: 'Brush twice daily using fluoride paste. Two minutes is the gold standard for clinical oral health.',
    icon: <GiToothbrush size={24} color="#38bdf8" />,
    gradient: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)'
  },
  {
    num: '02',
    category: 'Interproximal Care',
    title: 'Depth',
    desc: 'Floss daily to reach the 35% of tooth surfaces your toothbrush bristles simply cannot touch.',
    icon: <GiTooth size={24} color="#818cf8" />,
    gradient: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)'
  },
  {
    num: '03',
    category: 'pH Neutralization',
    title: 'Balance',
    desc: 'Drink plenty of water. Adequate hydration neutralizes acidic plaque and prevents enamel erosion.',
    icon: <GiWaterDrop size={24} color="#34d399" />,
    gradient: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)'
  },
  {
    num: '04',
    category: 'Structural Integrity',
    title: 'Nutrition',
    desc: 'Focus on calcium-rich whole foods. Limiting direct sugars starves the cavity-causing bacteria.',
    icon: <GiShinyApple size={24} color="#fbbf24" />,
    gradient: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)'
  },
  {
    num: '05',
    category: 'Tissue Preservation',
    title: 'Vitality',
    desc: 'Avoid tobacco products. It is the leading cause of early gum recession and oral malignancies.',
    icon: <FaMedkit size={24} color="#f87171" />,
    gradient: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)'
  },
  {
    num: '06',
    category: 'Predictive Analytics',
    title: 'Precision',
    desc: 'Semiannual clinical check-ups catch 90% of dental concerns before they manifest as severe pain.',
    icon: <FaStethoscope size={24} color="#a78bfa" />,
    gradient: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)'
  }
];

const myths = [
  {
    myth: '"Wait for pain to visit a dentist."',
    fact: 'Prevention is Power',
    desc: 'Decay starts painlessly. Waiting for pain means the nerve is already infected, necessitating complex RCT.'
  },
  {
    myth: '"Root canals hurt."',
    fact: '100% Pain-Free Treatment',
    desc: 'Modern local anesthesia and quiet rotary systems ensure that Root Canals relieve pain, rather than causing it.'
  },
  {
    myth: '"Whiter teeth mean healthier teeth."',
    fact: 'Focus on Enamel Strength',
    desc: 'Natural teeth have a yellowish dentin layer showing through. Whiteness does not equal complete clinical health.'
  },
  {
    myth: '"Baby teeth do not matter."',
    fact: 'Vital Permanent Blueprint',
    desc: 'Baby teeth guide permanent teeth into place. Early tooth loss leads to major crowding and orthodontic issues.'
  }
];

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section style={styles.section} id="education">
      {/* Animated Background Elements */}
      <motion.div 
        style={styles.bgBlob1}
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        style={styles.bgBlob2}
        animate={{ 
          scale: [1, 1.5, 1],
          rotate: [0, -90, 0],
          x: [0, -50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div style={styles.container}>
        
        {/* Section Header */}
        <div style={styles.header}>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={styles.heading}>Your Dental Health.</h2>
            <p style={styles.subheading}>
              Curated clinical insights on maintaining dental structure, pH balance, and long-term oral wellness.
            </p>
          </motion.div>
        </div>

        {/* Tips Grid */}
        <motion.div 
          style={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {wellnessTips.map((tip, idx) => (
            <motion.div
              key={idx}
              style={styles.tipCard}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
            >
              {/* Animated Gradient Border Overlay */}
              <motion.div 
                style={styles.cardBorder}
                variants={{
                  rest: { opacity: 0 },
                  hover: { opacity: 1, transition: { duration: 0.3 } }
                }}
              />
              
              <div style={styles.tipCardInner}>
                <div style={styles.tipWatermark}>{tip.num}</div>
                
                {/* Faded Background Icon */}
                <div style={styles.bgIconWrapper}>
                  {tip.icon}
                </div>
                
                <div style={styles.tipHeader}>
                  <motion.div 
                    style={{...styles.iconWrapper, background: tip.gradient}}
                    variants={{
                      rest: { rotate: 0 },
                      hover: { rotate: 15, scale: 1.1 }
                    }}
                  >
                    {tip.icon}
                  </motion.div>
                  <span style={styles.tipCategory}>{tip.category}</span>
                </div>
                
                <h3 style={styles.tipTitle}>{tip.title}</h3>
                <p style={styles.tipDesc}>{tip.desc}</p>
                
                <motion.div 
                  style={styles.decorativeLine}
                  variants={{
                    rest: { width: '40px', background: 'rgba(0,0,0,0.1)' },
                    hover: { width: '100%', background: tip.gradient }
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Myths vs Facts Subsection */}
        <div style={styles.mythsSection}>
          <div style={styles.mythsHeader}>
            <h3 style={styles.mythsTitle}>Dental Myths Debunked</h3>
          </div>

          <div style={styles.mythsGrid}>
            {myths.map((item, idx) => (
              <motion.div 
                key={idx}
                style={styles.mythCard}
                className="myth-card-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              >
                <div style={styles.mythRow} className="myth-row-block">
                  <div style={styles.mythLeft} className="myth-left-badge">
                    <ShieldAlert size={16} color="#ef4444" />
                    <span style={styles.mythLabel}>Myth</span>
                  </div>
                  <p style={styles.mythText}>{item.myth}</p>
                </div>

                <div style={styles.factRow} className="fact-row-block">
                  <div style={styles.factLeft} className="fact-left-badge">
                    <motion.div
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <CheckCircle size={16} color="var(--brand-trust-green)" />
                    </motion.div>
                    <span style={styles.factLabel}>Fact</span>
                  </div>
                  <div>
                    <h4 style={styles.factTitle}>{item.fact}</h4>
                    <p style={styles.factDesc}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '8rem 0',
    backgroundColor: '#f8fbfe',
    position: 'relative',
    overflow: 'hidden',
  },
  bgBlob1: {
    position: 'absolute',
    top: '-10%',
    left: '-5%',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
    filter: 'blur(60px)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  bgBlob2: {
    position: 'absolute',
    bottom: '10%',
    right: '-10%',
    width: '600px',
    height: '600px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
    filter: 'blur(80px)',
    zIndex: 0,
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 2rem',
    position: 'relative',
    zIndex: 2,
  },
  header: {
    textAlign: 'center',
    marginBottom: '6rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  subtag: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: '#0ea5e9',
    fontWeight: '800',
    backgroundColor: 'rgba(14, 165, 233, 0.1)',
    padding: '8px 20px',
    borderRadius: '999px',
    marginBottom: '1.5rem',
  },
  heading: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    color: '#0f172a',
    fontWeight: '900',
    letterSpacing: '-0.03em',
    marginBottom: '1.25rem',
  },
  subheading: {
    fontSize: '1.15rem',
    color: '#475569',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.7',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
    gap: '2.5rem',
  },
  tipCard: {
    position: 'relative',
    backgroundColor: '#fdfbf7',
    borderRadius: '28px',
    padding: '2px', // Space for animated border
    boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
    cursor: 'pointer',
  },
  cardBorder: {
    position: 'absolute',
    inset: 0,
    borderRadius: '28px',
    background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 100%)',
    zIndex: 0,
  },
  tipCardInner: {
    position: 'relative',
    backgroundColor: '#fdfbf7',
    borderRadius: '26px',
    padding: '2.5rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    zIndex: 1,
  },
  tipWatermark: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    fontSize: '8rem',
    fontWeight: '900',
    color: 'rgba(241, 245, 249, 0.8)',
    lineHeight: 1,
    zIndex: 0,
    userSelect: 'none',
  },
  bgIconWrapper: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    opacity: 0.15,
    transform: 'scale(5)',
    transformOrigin: 'bottom right',
    zIndex: 0,
    pointerEvents: 'none',
  },
  tipHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1.5rem',
    position: 'relative',
    zIndex: 2,
  },
  iconWrapper: {
    width: '48px',
    height: '48px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 16px rgba(0,0,0,0.06)',
  },
  tipCategory: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: '800',
    color: '#64748b',
  },
  tipTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: '1rem',
    position: 'relative',
    zIndex: 2,
  },
  tipDesc: {
    fontSize: '0.95rem',
    color: '#475569',
    lineHeight: '1.7',
    position: 'relative',
    zIndex: 2,
    flexGrow: 1,
  },
  decorativeLine: {
    height: '4px',
    borderRadius: '2px',
    marginTop: '2rem',
    position: 'relative',
    zIndex: 2,
  },
  // Myths
  mythsSection: {
    marginTop: '8rem',
    paddingTop: '6rem',
    position: 'relative',
  },
  mythsHeader: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  mythsTitle: {
    fontSize: '2.2rem',
    fontWeight: '900',
    color: '#0f172a',
    letterSpacing: '-0.02em',
  },
  mythsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
    gap: '2.5rem',
    maxWidth: '1080px',
    margin: '0 auto',
  },
  mythCard: {
    backgroundColor: '#fdfbf7',
    border: '1px solid rgba(0,0,0,0.04)',
    borderRadius: '24px',
    padding: '2.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.75rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
    transition: 'all 0.3s ease',
  },
  mythRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
  },
  mythLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#fef2f2',
    padding: '6px 12px',
    borderRadius: '8px',
    flexShrink: 0,
  },
  mythLabel: {
    fontSize: '0.7rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    color: '#ef4444',
    letterSpacing: '0.05em',
  },
  mythText: {
    fontSize: '1.05rem',
    fontWeight: '700',
    fontStyle: 'italic',
    color: '#1e293b',
    lineHeight: '1.5',
    marginTop: '4px',
  },
  factRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    borderTop: '2px dashed rgba(0,0,0,0.06)',
    paddingTop: '1.75rem',
  },
  factLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#ecfdf5',
    padding: '6px 12px',
    borderRadius: '8px',
    flexShrink: 0,
  },
  factLabel: {
    fontSize: '0.7rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    color: '#10b981',
    letterSpacing: '0.05em',
  },
  factTitle: {
    fontSize: '1.1rem',
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: '0.5rem',
    marginTop: '2px',
  },
  factDesc: {
    fontSize: '0.95rem',
    color: '#475569',
    lineHeight: '1.6',
  },
};

