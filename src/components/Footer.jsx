import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone, BotMessageSquare, X, Send, Award, Clock, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Dental Speciality Centre support. How can we help your smile today?", isBot: true }
  ]);

  const botResponses = {
    pain: "Tooth pain is often a sign of deep decay. Dr. Tiwari recommends a quick diagnostic scan. Would you like to schedule an urgent appointment?",
    rct: "We specialize in microscope-assisted, pain-free Root Canal Treatments. Most sessions are single-sitting and 100% painless.",
    book: "Sure! You can click 'Book Appointment' in the navigation bar, or call us directly at 6262178282.",
    default: "Thank you for reaching out! One of our clinical team members will contact you shortly."
  };

  const handleOptionClick = (key, text) => {
    // User message
    const userMsg = { text, isBot: false };
    // Bot response
    const botText = botResponses[key] || botResponses.default;
    const botMsg = { text: botText, isBot: true };
    
    setMessages(prev => [...prev, userMsg]);
    setTimeout(() => {
      setMessages(prev => [...prev, botMsg]);
    }, 600);
  };

  return (
    <footer style={styles.footer}>
      {/* Wave transition from white page content */}
      <div style={styles.wave}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={styles.waveSvg}>
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" fill="#07080a" />
        </svg>
      </div>

      <div style={styles.inner}>
        <div style={styles.grid} className="footer-container">
          
          {/* Brand Info */}
          <div style={styles.brand}>
            <div style={styles.logoRow}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img src="/logo.svg" alt="Dental Speciality Centre Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span style={styles.logoText}>Dental Speciality Centre</span>
            </div>
            <p style={styles.tagline}>
              Providing high-end dental care, painless laser therapies, and microscopic treatments in Indore. Experience medicine with hospitality.
            </p>
            <div style={styles.certBlock}>
              <Award size={14} color="var(--brand-surgical-blue)" />
              <span style={styles.certText}>Licensed Aesthetic Clinic & Dental Surgery</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 style={styles.colTitle}>Resources</h4>
            {[
              { label: 'Home', to: '/' },
              { label: 'About Us', to: '/about' },
              { label: 'Treatments', to: '/treatments' },
              { label: 'Contact', to: '/contact' },
            ].map((l) => (
              <div key={l.label} style={{ marginBottom: '0.75rem' }}>
                <Link to={l.to} style={styles.navLink}>{l.label}</Link>
              </div>
            ))}
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={styles.colTitle}>Get In Touch</h4>
            <div style={styles.infoRow}>
              <Phone size={16} color="var(--brand-surgical-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={styles.infoText}>6262178282</span>
            </div>
            <div style={styles.infoRow}>
              <MapPin size={16} color="var(--brand-surgical-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={styles.infoText}>F 9, 10, BCM CITY, Khandelwal Nagar, Janki Nagar, Indore</span>
            </div>
            <div style={styles.infoRow}>
              <Clock size={16} color="var(--brand-surgical-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={styles.infoText}>Open 24 Hrs, Monday – Sunday</span>
            </div>
          </div>

        </div>

        {/* Local SEO keywords */}
        <div style={styles.seoFooter}>
          <p style={styles.seoTitle}>Popular Treatments in Indore</p>
          <p style={styles.seoText}>
            Root Canal Treatment in Indore | Microscopic RCT Indore | Laser Dentistry Indore | Clear Aligners in Indore | Braces Indore | Kids Dentist in Indore | Dental Crowns & Bridges Indore | Tooth Extraction Indore | Emergency Dentist Indore | Painless Dental Clinic Indore | Cosmetic smile makeover Indore
          </p>
        </div>

        {/* Bottom Credits */}
        <div style={styles.bottom}>
          <p style={styles.bottomText}>© 2026 Dental Speciality Centre Indore. All rights reserved.</p>
          <p style={styles.creditsText}>Designed and Developed with Advanced AI Support.</p>
        </div>
      </div>

      {/* Floating Action widgets */}
      <div style={styles.widgetsWrapper}>
        
        {/* Floating WhatsApp Support Button */}
        <motion.a 
          href="https://wa.me/916262178282" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.whatsappFloat}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title="Chat with us on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="24" height="24" fill="#ffffff">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </motion.a>

        {/* Floating Chat Support Trigger */}
        <motion.button 
          onClick={() => setChatOpen(!chatOpen)}
          style={styles.chatTrigger}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {chatOpen ? <X size={20} color="#ffffff" /> : <BotMessageSquare size={22} color="#ffffff" />}
          {!chatOpen && <span style={styles.chatPulse}>Ask Me</span>}
        </motion.button>
      </div>

      {/* Expanded Chat Box */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div 
            style={styles.chatBox}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {/* Chat Header */}
            <div style={styles.chatHeader}>
              <div style={styles.chatHeaderLeft}>
                <div style={styles.chatDot} />
                <span style={styles.chatTitle}>Dental Support Chat</span>
              </div>
              <button onClick={() => setChatOpen(false)} style={styles.chatClose}>
                <X size={16} color="rgba(255,255,255,0.7)" />
              </button>
            </div>

            {/* Chat Logs */}
            <div style={styles.chatLogs}>
              {messages.map((m, i) => (
                <div 
                  key={i} 
                  style={{
                    ...styles.chatMsgRow,
                    justifyContent: m.isBot ? 'flex-start' : 'flex-end'
                  }}
                >
                  <div style={{
                    ...styles.chatBubble,
                    backgroundColor: m.isBot ? 'var(--neutral-cloud-gray)' : 'var(--brand-surgical-blue)',
                    color: m.isBot ? 'var(--neutral-ink)' : '#ffffff',
                    borderRadius: m.isBot ? '16px 16px 16px 4px' : '16px 16px 4px 16px'
                  }}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Tap options */}
            <div style={styles.chatOptions}>
              <span style={styles.optionsLabel}>Tap to select concern:</span>
              <div style={styles.optionsList}>
                <button 
                  onClick={() => handleOptionClick('pain', "I'm having tooth pain")} 
                  style={styles.optionBtn}
                >
                  💥 Tooth Pain
                </button>
                <button 
                  onClick={() => handleOptionClick('rct', "Tell me about Root Canals")} 
                  style={styles.optionBtn}
                >
                  🦷 Microscope RCT
                </button>
                <button 
                  onClick={() => handleOptionClick('book', "How to book appointment")} 
                  style={styles.optionBtn}
                >
                  📅 Book consultation
                </button>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#07080a',
    position: 'relative',
    zIndex: 10,
  },
  wave: {
    lineHeight: 0,
    backgroundColor: '#ffffff',
  },
  waveSvg: {
    display: 'block',
    width: '100%',
    height: '40px',
  },
  inner: {
    padding: '5rem 6% 3rem',
    maxWidth: '1440px',
    margin: '0 auto',
  },
  grid: {
    display: 'flex',
    gap: '4rem',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '4rem',
  },
  brand: {
    flex: '1 1 320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  logoRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logoIcon: {
    backgroundColor: 'var(--brand-surgical-blue)',
    borderRadius: '10px',
    padding: '0.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '-0.02em',
  },
  tagline: {
    color: '#8b8b9a',
    fontSize: '0.92rem',
    lineHeight: '1.6',
  },
  certBlock: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '0.5rem',
  },
  certText: {
    fontSize: '0.75rem',
    color: '#a0a0b0',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  colTitle: {
    color: '#ffffff',
    fontSize: '1rem',
    fontWeight: '700',
    marginBottom: '1.5rem',
    letterSpacing: '0.02em',
  },
  navLink: {
    color: '#8b8b9a',
    fontSize: '0.95rem',
    textDecoration: 'none',
    transition: 'color 0.25s',
  },
  infoRow: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    marginBottom: '1.25rem',
  },
  infoText: {
    color: '#8b8b9a',
    fontSize: '0.9rem',
    lineHeight: '1.55',
  },
  // SEO Links
  seoFooter: {
    borderTop: '1px solid rgba(255,255,255,0.06)',
    paddingTop: '2.5rem',
    marginBottom: '2.5rem',
  },
  seoTitle: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    color: '#ffffff',
    fontWeight: '700',
    marginBottom: '0.75rem',
  },
  seoText: {
    fontSize: '0.82rem',
    color: '#555565',
    lineHeight: '1.75',
  },
  bottom: {
    borderTop: '1px solid rgba(255,255,255,0.06)',
    paddingTop: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  bottomText: {
    color: '#555565',
    fontSize: '0.85rem',
  },
  creditsText: {
    color: '#444454',
    fontSize: '0.8rem',
    fontWeight: '600',
  },
  // Floating Actions
  widgetsWrapper: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    zIndex: 1020,
  },
  whatsappFloat: {
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    backgroundColor: '#25d366',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 24px rgba(37,211,102,0.3)',
    textDecoration: 'none',
  },
  chatTrigger: {
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    backgroundColor: 'var(--brand-surgical-blue)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 24px rgba(37,151,208,0.4)',
    cursor: 'pointer',
    position: 'relative',
  },
  chatPulse: {
    position: 'absolute',
    right: '58px',
    whiteSpace: 'nowrap',
    backgroundColor: '#ffffff',
    color: 'var(--brand-surgical-blue)',
    fontSize: '0.85rem',
    fontWeight: '800',
    padding: '0.45rem 1rem',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
    letterSpacing: '0.02em',
  },
  // Chatbox panel
  chatBox: {
    position: 'fixed',
    bottom: '84px',
    right: '24px',
    width: '340px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
    border: '1px solid rgba(0,0,0,0.06)',
    zIndex: 1030,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  chatHeader: {
    backgroundColor: 'var(--neutral-ink)',
    padding: '1rem 1.25rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  chatHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  chatDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'var(--brand-trust-green)',
  },
  chatTitle: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#ffffff',
  },
  chatClose: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatLogs: {
    height: '240px',
    overflowY: 'auto',
    padding: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  chatMsgRow: {
    display: 'flex',
    width: '100%',
  },
  chatBubble: {
    maxWidth: '85%',
    padding: '0.75rem 1rem',
    fontSize: '0.85rem',
    lineHeight: '1.4',
  },
  chatOptions: {
    padding: '1rem 1.25rem 1.5rem',
    borderTop: '1px solid rgba(0,0,0,0.05)',
    backgroundColor: '#f8fbfe',
  },
  optionsLabel: {
    fontSize: '0.72rem',
    color: 'var(--neutral-slate)',
    fontWeight: '700',
    display: 'block',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.02em',
  },
  optionsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  optionBtn: {
    backgroundColor: '#ffffff',
    border: '1px solid rgba(37,151,208,0.15)',
    padding: '0.6rem 0.85rem',
    borderRadius: '10px',
    fontSize: '0.8rem',
    textAlign: 'left',
    color: 'var(--neutral-ink)',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
  }
};

