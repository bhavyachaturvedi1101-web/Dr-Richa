import React from 'react';
import { Award } from 'lucide-react';
import { motion } from 'framer-motion';

const awardsData = [
  {
    type: 'AWARD',
    date: 'Jun - 2025',
    title: 'Jainatv sanskar sikshan shivir',
    org: 'SAKAL JAIN SAMAJ',
    image: '/award_jain.png',
    iconColor: '#3B82F6'
  },
  {
    type: 'AWARD',
    date: 'Jul - 2025',
    title: 'FOR EXCELLENT SERVICE',
    org: 'Innerwheel club',
    image: '/award_service.png',
    iconColor: '#F59E0B'
  },
  {
    type: 'AWARD',
    date: 'Jun - 2025',
    title: 'CLUB EXCELLENCE',
    org: "Lion's club gold",
    image: '/award_lion.png',
    iconColor: '#10B981'
  },
  {
    type: 'CERTIFICATE',
    date: '2025',
    title: 'Certificate of appreciation',
    org: 'Innerwheel club',
    image: '/award_cert.png',
    iconColor: '#8B5CF6'
  }
];

export default function Awards() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.contentWrapper}>
          <motion.div 
            style={styles.header}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={styles.heading}>Awards & Recognitions</h2>
            <p style={styles.subheading}>A testament to our commitment to excellence and community service.</p>
          </motion.div>
          
          <div style={styles.grid}>
            {awardsData.map((award, index) => (
              <motion.div 
                key={index} 
                style={styles.card}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: '0 15px 30px rgba(0,0,0,0.08)',
                  borderColor: award.iconColor
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div style={styles.cardImageWrapper}>
                  <img src={award.image} alt={award.title} style={styles.cardImage} />
                </div>
                <div style={styles.cardTop}>
                  <div style={styles.metaCol}>
                    <span style={{
                      ...styles.badge, 
                      backgroundColor: `${award.iconColor}15`, 
                      color: award.iconColor 
                    }}>
                      {award.type}
                    </span>
                  </div>
                  <span style={styles.date}>{award.date}</span>
                </div>
                
                <div style={styles.cardBottom}>
                  <h3 style={styles.title}>{award.title}</h3>
                  <p style={styles.org}>{award.org}</p>
                </div>
                
                <div style={{...styles.accentLine, backgroundColor: award.iconColor}}></div>
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
    padding: '6rem 2rem',
    backgroundColor: 'var(--neutral-paper-white)',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  container: {
    width: '100%'
  },
  contentWrapper: {
    width: '100%'
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem'
  },
  heading: {
    fontSize: '2.75rem',
    color: 'var(--neutral-ink)',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
    fontWeight: '700'
  },
  subheading: {
    fontSize: '1.125rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.6'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '2rem'
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '16px',
    border: '1px solid var(--neutral-cloud-gray)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease'
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardImageWrapper: {
    width: '100%',
    height: '140px',
    borderRadius: '12px',
    overflow: 'hidden',
    marginBottom: '0.25rem'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  metaCol: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '0.25rem'
  },
  badge: {
    padding: '0.25rem 0.5rem',
    borderRadius: '999px',
    fontSize: '0.7rem',
    fontWeight: '700',
    letterSpacing: '0.05em'
  },
  date: {
    fontSize: '0.8rem',
    color: 'var(--neutral-slate)',
    fontWeight: '500'
  },
  cardBottom: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  title: {
    fontSize: '1.05rem',
    fontWeight: '700',
    color: 'var(--neutral-ink)',
    margin: 0,
    lineHeight: '1.3'
  },
  org: {
    fontSize: '0.85rem',
    color: 'var(--neutral-charcoal)',
    margin: 0,
    lineHeight: '1.4'
  },
  accentLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '4px',
    opacity: 0.8
  }
};
