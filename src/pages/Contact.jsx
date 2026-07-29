import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Calendar, Stethoscope, User, ChevronDown } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const infoItems = [
    { icon: Phone, label: 'Direct Line', val: '6262178282', desc: 'Call our primary reception desk' },
    { icon: Mail, label: 'Email Address', val: 'contact@dentalspeciality.com', desc: 'Send us clinical scan documents' },
    { icon: MapPin, label: 'Indore Clinic', val: 'F 9, 10, BCM CITY, Khandelwal Nagar, Janki Nagar, Indore', desc: 'Circular Road, Indore, MP 452012' },
    { icon: Clock, label: 'Clinical Hours', val: 'Open 24 Hrs', desc: 'Monday – Sunday emergency care' }
  ];

  const treatments = [
    'Routine Check-up & Cleaning',
    'Teeth Whitening',
    'Dental Implants',
    'Root Canal Treatment',
    'Orthodontics / Braces',
    'Cosmetic Dentistry',
    'Tooth Extraction',
    'Dental Crowns & Bridges',
    'Pediatric Dentistry',
    'Emergency Dental Care',
    'Other / Not Sure',
  ];

  const timeSlots = [
    'Morning (9:00 AM – 12:00 PM)',
    'Afternoon (12:00 PM – 4:00 PM)',
    'Evening (4:00 PM – 8:00 PM)',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: '#fdfbf7' }}
    >
      
      {/* ── HERO BANNER ── */}
      <section style={styles.heroBanner}>
        <div style={styles.heroOverlay} />
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
              Book Your <span style={{ color: 'var(--brand-surgical-blue)' }}>Appointment.</span>
            </motion.h1>
            <motion.p 
              style={styles.heroDesc} 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Schedule a visit with Dr. Richa Tiwari Vyas — expert dental care tailored just for you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT GRID ── */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid}>
            
            {/* Left Column: Info */}
            <motion.div 
              style={styles.infoCol}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={styles.sectionHeading}>Contact Details</h2>
              <p style={styles.sectionDesc}>
                Whether you have an emergency toothache or wish to book a routine scale & polish, we are here to support you.
              </p>

              <div style={styles.infoList}>
                {infoItems.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} style={styles.infoCard}>
                      <div style={styles.iconWrapper}>
                        <Icon size={18} color="var(--brand-surgical-blue)" />
                      </div>
                      <div>
                        <span style={styles.infoLabel}>{item.label}</span>
                        <p style={styles.infoValue}>{item.val}</p>
                        <p style={styles.infoDesc}>{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Doctor info badges */}
              <div style={styles.badgeRow}>
                <div style={styles.badge}><User size={13} /> Dr. Richa Tiwari Vyas</div>
                <div style={styles.badge}><Stethoscope size={13} /> BDS — 9+ Yrs Experience</div>
                <div style={styles.badge}><Calendar size={13} /> Same-Day Appointments Available</div>
              </div>
            </motion.div>

            {/* Right Column: Appointment Form */}
            <motion.div 
              style={styles.formCol}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div style={styles.formCard} className="contact-form-card">
                {/* Gradient Header */}
                <div style={styles.formHeader} className="contact-form-header">
                  <div style={styles.formHeaderIcon} className="contact-form-header-icon">🦷</div>
                  <div>
                    <h3 style={styles.formTitle} className="contact-form-title">Book an Appointment</h3>
                    <p style={styles.formDesc} className="contact-form-desc">Dr. Richa Tiwari Vyas · Indore Dental Speciality Centre</p>
                  </div>
                </div>

                <div style={styles.formBody} className="contact-form-body">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={styles.successBox}
                  >
                    <div style={styles.successIcon}>✓</div>
                    <h3 style={styles.successTitle}>Appointment Requested!</h3>
                    <p style={styles.successDesc}>
                      Thank you! Dr. Richa's team will confirm your slot within a few hours via call or WhatsApp.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <form style={styles.form} className="contact-form-element" onSubmit={handleSubmit}>

                      {/* Name & Phone */}
                      <div style={styles.rowTwo} className="contact-form-row-two">
                        <div style={styles.inputWrapper} className="contact-input-wrapper">
                          <label style={styles.inputLabel} className="contact-input-label">👤 Full Name *</label>
                          <input type="text" placeholder="e.g. Rahul Sharma" style={styles.inputField} className="contact-input-field" required />
                        </div>
                        <div style={styles.inputWrapper} className="contact-input-wrapper">
                          <label style={styles.inputLabel} className="contact-input-label">📞 Mobile Number *</label>
                          <input type="tel" placeholder="+91 XXXXX XXXXX" style={styles.inputField} className="contact-input-field" required />
                        </div>
                      </div>

                      {/* Email */}
                      <div style={styles.inputWrapper} className="contact-input-wrapper">
                        <label style={styles.inputLabel} className="contact-input-label">✉️ Email Address</label>
                        <input type="email" placeholder="your@email.com" style={styles.inputField} className="contact-input-field" />
                      </div>

                      {/* Treatment Type */}
                      <div style={styles.inputWrapper} className="contact-input-wrapper">
                        <label style={styles.inputLabel} className="contact-input-label">🦷 Treatment / Service Needed *</label>
                        <div style={styles.selectWrapper}>
                          <select style={styles.selectField} className="contact-select-field" required defaultValue="">
                            <option value="" disabled>— Select a treatment —</option>
                            {treatments.map((t, i) => <option key={i} value={t}>{t}</option>)}
                          </select>
                          <ChevronDown size={16} style={styles.selectIcon} />
                        </div>
                      </div>

                      {/* Date & Time */}
                      <div style={styles.rowTwo} className="contact-form-row-two">
                        <div style={styles.inputWrapper} className="contact-input-wrapper">
                          <label style={styles.inputLabel} className="contact-input-label">📅 Preferred Date *</label>
                          <input 
                            type="date" 
                            style={styles.inputField} 
                            className="contact-input-field"
                            required 
                            min={new Date().toISOString().split('T')[0]} 
                          />
                        </div>
                        <div style={styles.inputWrapper} className="contact-input-wrapper">
                          <label style={styles.inputLabel} className="contact-input-label">⏰ Preferred Time *</label>
                          <div style={styles.selectWrapper}>
                            <select style={styles.selectField} className="contact-select-field" required defaultValue="">
                              <option value="" disabled>— Pick a slot —</option>
                              {timeSlots.map((s, i) => <option key={i} value={s}>{s}</option>)}
                            </select>
                            <ChevronDown size={16} style={styles.selectIcon} />
                          </div>
                        </div>
                      </div>

                      {/* Concern */}
                      <div style={styles.inputWrapper} className="contact-input-wrapper">
                        <label style={styles.inputLabel} className="contact-input-label">💬 Describe Your Concern (Optional)</label>
                        <textarea 
                          placeholder="E.g. I have mild tooth pain in the lower left area since 3 days..." 
                          style={styles.textareaField}
                          className="contact-textarea-field"
                        ></textarea>
                      </div>
                      
                      <motion.button 
                        type="submit" 
                        style={styles.submitBtn}
                        className="contact-submit-btn"
                        whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(37,151,208,0.4)' }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Calendar size={16} /> Confirm Appointment
                      </motion.button>

                      <p style={styles.formNote}>🔒 Your information is private and only used to confirm your visit.</p>
                    </form>
                  </>
                )}
                </div>
              </div>
            </motion.div>

          </div>

          {/* ── MAP ── */}
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
    backgroundColor: '#f0f8ff',
    padding: '10rem 0 5rem',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'transparent',
    zIndex: 1,
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
    flex: '1 1 350px',
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
    fontSize: '1rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
    marginTop: '2px',
  },
  infoDesc: {
    fontSize: '0.85rem',
    color: 'var(--neutral-charcoal)',
    marginTop: '2px',
  },
  badgeRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    marginTop: '0.5rem',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.82rem',
    fontWeight: '700',
    color: 'var(--brand-surgical-blue)',
    backgroundColor: '#e8f5fd',
    borderRadius: '999px',
    padding: '0.45rem 1rem',
    width: 'fit-content',
  },
  formCol: {
    flex: '1 1 500px',
  },
  formCard: {
    backgroundColor: '#fdfbf7',
    border: '1px solid #dbeef9',
    borderRadius: '30px',
    overflow: 'hidden',
    boxShadow: '0 30px 60px rgba(37,151,208,0.10)',
  },
  formHeader: {
    background: 'linear-gradient(135deg, #1e8bc3 0%, #2597d0 50%, #0fa3b1 100%)',
    padding: '2rem 2.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
  },
  formHeaderIcon: {
    fontSize: '2.5rem',
    lineHeight: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: '16px',
    padding: '0.6rem 0.75rem',
  },
  formBody: {
    padding: '2rem 2.5rem 2.5rem',
  },
  formTitle: {
    fontSize: '1.4rem',
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: '0.25rem',
  },
  formDesc: {
    fontSize: '0.82rem',
    color: 'rgba(255,255,255,0.80)',
    lineHeight: '1.5',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.2rem',
  },
  rowTwo: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  inputLabel: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--neutral-charcoal)',
    textTransform: 'uppercase',
    letterSpacing: '0.04em',
  },
  inputField: {
    width: '100%',
    padding: '0.9rem 1.2rem',
    borderRadius: '14px',
    border: '2px solid #e8f4fd',
    backgroundColor: '#f8fbfe',
    fontSize: '0.93rem',
    color: 'var(--neutral-ink)',
    outline: 'none',
    fontFamily: 'inherit',
    transition: 'all 0.2s',
    boxSizing: 'border-box',
  },
  selectWrapper: {
    position: 'relative',
  },
  selectField: {
    width: '100%',
    padding: '0.9rem 2.5rem 0.9rem 1.2rem',
    borderRadius: '14px',
    border: '2px solid #e8f4fd',
    backgroundColor: '#f8fbfe',
    fontSize: '0.93rem',
    color: 'var(--neutral-ink)',
    outline: 'none',
    fontFamily: 'inherit',
    appearance: 'none',
    cursor: 'pointer',
    boxSizing: 'border-box',
  },
  selectIcon: {
    position: 'absolute',
    right: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
    color: 'var(--neutral-slate)',
  },
  textareaField: {
    width: '100%',
    minHeight: '100px',
    padding: '0.9rem 1.2rem',
    borderRadius: '14px',
    border: '2px solid #e8f4fd',
    backgroundColor: '#f8fbfe',
    fontSize: '0.93rem',
    color: 'var(--neutral-ink)',
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'vertical',
    transition: 'all 0.2s',
    boxSizing: 'border-box',
  },
  submitBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    width: '100%',
    background: 'linear-gradient(135deg, #1e8bc3, #0fa3b1)',
    color: '#ffffff',
    padding: '1.1rem',
    borderRadius: '14px',
    border: 'none',
    fontWeight: '800',
    fontSize: '1rem',
    cursor: 'pointer',
    boxShadow: '0 6px 20px rgba(37,151,208,0.35)',
    letterSpacing: '0.02em',
    marginTop: '0.5rem',
  },
  formNote: {
    fontSize: '0.76rem',
    color: 'var(--neutral-slate)',
    textAlign: 'center',
    marginTop: '0.5rem',
  },
  successBox: {
    textAlign: 'center',
    padding: '3rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  successIcon: {
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    backgroundColor: '#e8f5fd',
    color: 'var(--brand-surgical-blue)',
    fontSize: '2rem',
    fontWeight: '800',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: 'var(--neutral-ink)',
  },
  successDesc: {
    fontSize: '0.95rem',
    color: 'var(--neutral-charcoal)',
    lineHeight: '1.6',
    maxWidth: '320px',
  },
  mapWrapper: {
    marginTop: '6rem',
    borderRadius: '28px',
    overflow: 'hidden',
    border: '1px solid rgba(0,0,0,0.06)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.08)',
    lineHeight: 0,
  }
};
