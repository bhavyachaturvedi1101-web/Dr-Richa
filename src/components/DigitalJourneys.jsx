import React from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, FolderHeart } from 'lucide-react';

export default function DigitalJourneys() {
  return (
    <section style={styles.section} id="digital-journeys">
      <div style={styles.container}>
        <div style={styles.grid}>
          
          {/* Left Column: Heading and metrics */}
          <div style={styles.textCol}>
            <span style={styles.subtag}>Clinical Archives</span>
            <h2 style={styles.heading}>Digital Journeys.</h2>
            <p style={styles.subheading}>
              Experience high-definition clinical storytelling. Our archives document real-world patient restorations with surgical precision.
            </p>

            <div style={styles.metricsWrapper}>
              <div style={styles.metricItem}>
                <span style={styles.metricNum}>2000+</span>
                <span style={styles.metricLabel}>Clinical Cases</span>
              </div>
              <div style={styles.metricItem}>
                <span style={styles.metricNum}>15K+</span>
                <span style={styles.metricLabel}>Patient Views</span>
              </div>
            </div>
          </div>

          {/* Right Column: Card Reels */}
          <div style={styles.visualCol}>
            
            {/* Reel 1 */}
            <motion.div 
              style={styles.reelCard}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div style={styles.reelBg} />
              <div style={styles.reelContent}>
                <div style={styles.iconRow}>
                  <FolderHeart size={16} color="#7dd3fa" />
                  <span style={styles.category}>RCT Archive</span>
                </div>
                <h3 style={styles.reelTitle}>Painless RCT Treatment</h3>
                <div style={styles.playWrapper}>
                  <div style={styles.playBtn}>
                    <Play size={16} fill="#ffffff" color="#ffffff" style={{ marginLeft: '2px' }} />
                  </div>
                  <span style={styles.watchText}>Watch clinical case log</span>
                </div>
              </div>
            </motion.div>

            {/* Reel 2 */}
            <motion.div 
              style={styles.reelCard}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <div style={styles.reelBg} />
              <div style={styles.reelContent}>
                <div style={styles.iconRow}>
                  <Eye size={16} color="#7dd3fa" />
                  <span style={styles.category}>Esthetics Archive</span>
                </div>
                <h3 style={styles.reelTitle}>Smile Makeover Journey</h3>
                <div style={styles.playWrapper}>
                  <div style={styles.playBtn}>
                    <Play size={16} fill="#ffffff" color="#ffffff" style={{ marginLeft: '2px' }} />
                  </div>
                  <span style={styles.watchText}>Watch transformation logs</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '7rem 0',
    backgroundColor: '#ffffff',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  grid: {
    display: 'flex',
    alignItems: 'center',
    gap: '5rem',
    flexWrap: 'wrap',
  },
  textCol: {
    flex: '1 1 450px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  subtag: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    color: 'var(--brand-surgical-blue)',
    fontWeight: '700',
    display: 'block',
  },
  heading: {
    fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
    color: 'var(--neutral-ink)',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    lineHeight: '1.1',
  },
  subheading: {
    fontSize: '1.05rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.7',
  },
  metricsWrapper: {
    display: 'flex',
    gap: '3rem',
    marginTop: '1.5rem',
    borderTop: '1px solid rgba(0,0,0,0.06)',
    paddingTop: '2rem',
  },
  metricItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  metricNum: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: 'var(--brand-surgical-blue)',
    lineHeight: 1,
  },
  metricLabel: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontWeight: '700',
    color: 'var(--neutral-charcoal)',
  },
  visualCol: {
    flex: '1 1 500px',
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
  },
  reelCard: {
    flex: '1 1 230px',
    height: '380px',
    borderRadius: '28px',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    backgroundColor: '#07080a',
    display: 'flex',
    alignItems: 'flex-end',
    padding: '2rem',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  },
  reelBg: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(37,151,208,0.2) 0%, rgba(7,8,10,0.85) 100%)',
    zIndex: 1,
  },
  reelContent: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
  },
  iconRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  category: {
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    fontWeight: '700',
    color: '#7dd3fa',
  },
  reelTitle: {
    fontSize: '1.3rem',
    fontWeight: '800',
    color: '#ffffff',
    lineHeight: '1.25',
    marginBottom: '1rem',
  },
  playWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  playBtn: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'var(--brand-surgical-blue)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(37,151,208,0.4)',
  },
  watchText: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: '#ffffff',
  },
};
