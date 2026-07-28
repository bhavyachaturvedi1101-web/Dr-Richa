import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

export default function Contact() {
  const infoItems = [
    { icon: Phone, label: 'Direct Line', val: '6262178282', desc: 'Call our primary reception desk' },
    { icon: Mail, label: 'Email Address', val: 'contact@dentalspeciality.com', desc: 'Send us clinical scan documents' },
    { icon: MapPin, label: 'Indore Clinic', val: 'F 9, 10, BCM CITY, Khandelwal Nagar, Janki Nagar, Indore', desc: 'Circular Road, Indore, MP 452012' },
    { icon: Clock, label: 'Clinical Hours', val: 'Open 24 Hrs', desc: 'Monday – Sunday emergency care' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: '#ffffff' }}
    >
      
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
            <motion.p 
              style={styles.heroSubtag} 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            >
              Get In Touch
            </motion.p>
            <motion.h1 
              style={styles.heroTitle} 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Connect With <span style={{ color: 'var(--brand-surgical-blue)' }}>Us.</span>
            </motion.h1>
            <motion.p 
              style={styles.heroDesc} 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Ready to secure your booking? Contact our Indore team or send an online request.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid}>
            
            {/* Left Column: Direct Info Cards */}
            <motion.div 
              style={styles.infoCol}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
              }}
            >
              <motion.h2 style={styles.sectionHeading} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>Contact Details</motion.h2>
              <motion.p style={styles.sectionDesc} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                Whether you have an emergency toothache or wish to book a routine scale & polish, we are here to support you.
              </motion.p>

              <div style={styles.infoList}>
                {infoItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div 
                      key={idx} 
                      style={styles.infoCard}
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                      whileHover={{ scale: 1.02, x: 5, backgroundColor: 'rgba(37,151,208,0.03)' }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div style={styles.iconWrapper}>
                        <Icon size={18} color="var(--brand-surgical-blue)" />
                      </div>
                      <div>
                        <span style={styles.infoLabel}>{item.label}</span>
                        <p style={styles.infoValue}>{item.val}</p>
                        <p style={styles.infoDesc}>{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column: Animated Form */}
            <motion.div 
              style={styles.formCol}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
              }}
            >
              <div style={styles.formCard}>
                <motion.h3 style={styles.formTitle} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>Send a Message</motion.h3>
                <motion.p style={styles.formDesc} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>Fill in your details below and a medical representative will reach back shortly.</motion.p>
                
                <form style={styles.form}>
                  <motion.div style={styles.inputWrapper} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                    <motion.input type="text" placeholder="Full Name" style={styles.inputField} required whileFocus={{ scale: 1.01, borderColor: 'var(--brand-surgical-blue)' }} />
                  </motion.div>
                  <motion.div style={styles.inputWrapper} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                    <motion.input type="email" placeholder="Email Address" style={styles.inputField} required whileFocus={{ scale: 1.01, borderColor: 'var(--brand-surgical-blue)' }} />
                  </motion.div>
                  <motion.div style={styles.inputWrapper} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                    <motion.input type="tel" placeholder="Mobile Number" style={styles.inputField} required whileFocus={{ scale: 1.01, borderColor: 'var(--brand-surgical-blue)' }} />
                  </motion.div>
                  <motion.div style={styles.inputWrapper} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                    <motion.textarea placeholder="How can we help your smile today?" style={styles.textareaField} required whileFocus={{ scale: 1.01, borderColor: 'var(--brand-surgical-blue)' }}></motion.textarea>
                  </motion.div>
                  
                  <motion.div style={{ marginTop: '1rem' }} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}>
                    <motion.button 
                      type="button" 
                      style={styles.submitBtn}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Submit Message <Send size={14} />
                    </motion.button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

          </div>

          {/* ── MAP CONTAINER ── */}
          <motion.div 
            style={styles.mapWrapper}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <iframe 
              src="https://maps.google.com/maps?q=BCM%20CITY,%20Indore&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              title="Google Maps Location"
            ></iframe>
          </motion.div>

        </div>
      </section>

    </motion.div>
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
  section: {
    padding: '7rem 0',
  },
  grid: {
    display: 'flex',
    gap: '5rem',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  infoCol: {
    flex: '1 1 450px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  sectionHeading: {
    fontSize: '2rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    letterSpacing: '-0.02em',
  },
  sectionDesc: {
    fontSize: '1.02rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.7',
    marginBottom: '1rem',
  },
  infoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  infoCard: {
    display: 'flex',
    gap: '1.25rem',
    alignItems: 'flex-start',
    padding: '0.75rem',
    borderRadius: '16px',
    cursor: 'default',
  },
  iconWrapper: {
    width: '42px',
    height: '42px',
    borderRadius: '10px',
    backgroundColor: 'var(--neutral-sky-tint)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  infoLabel: {
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontWeight: '700',
    color: 'var(--neutral-slate)',
  },
  infoValue: {
    fontSize: '1.1rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    marginTop: '2px',
  },
  infoDesc: {
    fontSize: '0.85rem',
    color: 'var(--neutral-charcoal)',
    marginTop: '2px',
  },
  // Form Col
  formCol: {
    flex: '1 1 450px',
  },
  formCard: {
    backgroundColor: '#f8fbfe',
    border: '1px solid #dbeef9',
    borderRadius: '30px',
    padding: '2.5rem',
    boxShadow: '0 20px 40px rgba(37,151,208,0.03)',
  },
  formTitle: {
    fontSize: '1.4rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    marginBottom: '0.5rem',
  },
  formDesc: {
    fontSize: '0.88rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.5',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  inputWrapper: {
    width: '100%',
  },
  inputField: {
    width: '100%',
    padding: '0.9rem 1.25rem',
    borderRadius: '12px',
    border: '1px solid #dbeef9',
    backgroundColor: '#ffffff',
    fontSize: '0.95rem',
    color: 'var(--neutral-ink)',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  },
  textareaField: {
    width: '100%',
    minHeight: '120px',
    padding: '0.9rem 1.25rem',
    borderRadius: '12px',
    border: '1px solid #dbeef9',
    backgroundColor: '#ffffff',
    fontSize: '0.95rem',
    color: 'var(--neutral-ink)',
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'vertical',
    transition: 'border-color 0.2s',
  },
  submitBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    backgroundColor: 'var(--brand-surgical-blue)',
    color: '#ffffff',
    padding: '1rem',
    borderRadius: '12px',
    border: 'none',
    fontWeight: '700',
    fontSize: '0.95rem',
    cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(37,151,208,0.3)',
  },
  // Map
  mapWrapper: {
    marginTop: '6rem',
    borderRadius: '28px',
    overflow: 'hidden',
    border: '1px solid rgba(0,0,0,0.06)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.08)',
    lineHeight: 0,
  }
};
