import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  Key, 
  Check, 
  ChevronRight
} from 'lucide-react';

const SYSTEM_PROMPT = `You are the official Clinical AI Assistant for Dr. Richa Tiwari Vyas, Chief Dental Surgeon & Endodontist at Dental Speciality Centre in Indore, Madhya Pradesh.

KEY TRAINING ON DR. RICHA TIWARI VYAS & CLINICAL PHILOSOPHY:
- Credentials: BDS, MDS in Conservative Dentistry & Endodontics, 9+ years of specialized mastery, over 4,000 successful surgical and microscopic procedures.
- Clinical Philosophy: "Medicine with Hospitality" — delivering 100% anxiety-free, painless, and biologically respectful dental care.
- Specialties & Core Features:
  1. Microscope-Assisted Root Canal Therapy (RCT): 100% painless, single-visit endodontics using digital rotary systems and thermoplastic sealing (gutta-percha) to preserve natural tooth structure.
  2. Dental Implants: Computer-guided titanium implants with osseointegration and CAD/CAM ceramic/zirconia crowns.
  3. Crowns & Bridges: Digital CAD/CAM impressions, metal-free high-strength Zirconia and E-Max ceramics.
  4. Laser Dentistry & Gum Therapy: Non-invasive laser periodontal therapy, painless ultrasonic scaling, bleeding gums treatment.
  5. Orthodontics: Invisible clear aligners & traditional braces with interactive 3D smile mapping.
  6. Teeth Whitening: Laser-activated in-office whitening (up to 8 shades brighter in one session) with desensitizing agents.
  7. Restoration / Filling: 100% metal-free, mercury-free tooth-colored composite resin restorations.
  8. Smile Designing: Custom ceramic veneers, composite bonding, gummy smile correction.
  9. Oral Surgery & Extractions: Painless extractions, wisdom teeth removal, specialized geriatric dental care.
  10. Pediatric Dentistry (Pedodontics): Anxiety-free child operating bays, pit & fissure sealants, gentle cavity treatments.
  11. Dental Jewellery: Non-invasive sparkle crystal placement without drilling.
- Booking & Contact: Direct line 6262178282 or click 'Book Appointment' in the navbar.

INSTRUCTIONS FOR RESPONSES:
- Answer user questions professionally, empathetically, and accurately based on Dr. Richa Tiwari Vyas's clinical features and philosophy.
- Highlight Dr. Richa's microscope-assisted precision, painless protocols, or computer-guided techniques whenever relevant.
- Keep responses concise, clear, and easy for patients to read (2-3 short paragraphs or bullet points).
- Whenever appropriate, invite the patient to schedule a consultation with Dr. Richa Tiwari at Dental Speciality Centre in Indore.`;

const QUICK_PROMPTS = [
  { label: 'Painless Root Canal', prompt: 'How does Dr. Richa Tiwari perform painless Root Canal Treatments?' },
  { label: 'Dental Implants', prompt: 'Tell me about computer-guided Dental Implants and their benefits.' },
  { label: 'About Dr. Richa', prompt: 'Who is Dr. Richa Tiwari Vyas and what are her qualifications?' },
  { label: 'Teeth Whitening', prompt: 'How effective is your in-office laser teeth whitening procedure?' },
  { label: 'Book Appointment', prompt: 'How can I book a consultation with Dr. Richa Tiwari?' }
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am the official Clinical AI Assistant trained on **Dr. Richa Tiwari Vyas** (BDS, MDS Endodontics). How can I assist your smile today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showKeySettings, setShowKeySettings] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [keySaved, setKeySaved] = useState(false);

  const messagesEndRef = useRef(null);

  // Load saved API key from localStorage or env
  useEffect(() => {
    const saved = localStorage.getItem('GROQ_API_KEY');
    const envKey = import.meta.env.VITE_GROQ_API_KEY || '';
    if (saved) {
      setApiKey(saved);
    } else if (envKey) {
      setApiKey(envKey);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const saveApiKey = (e) => {
    e.preventDefault();
    localStorage.setItem('GROQ_API_KEY', apiKey.trim());
    setKeySaved(true);
    setTimeout(() => setKeySaved(false), 2500);
  };

  // Clinical Rule-Based Fallback Engine trained on Dr. Richa Tiwari Vyas
  const getClinicalFallbackResponse = (queryText) => {
    const q = queryText.toLowerCase();

    if (q.includes('root canal') || q.includes('rct') || q.includes('nerve') || q.includes('microscope')) {
      return "Dr. Richa Tiwari Vyas specializes in **Microscope-Assisted Root Canal Therapy (RCT)**. Using high-magnification surgical microscopes and digital rotary systems, she removes pulpal infection with sub-millimeter precision. Most RCTs are completed in a **single sitting and are 100% painless**.\n\nWould you like to schedule an endodontic consultation with Dr. Richa?";
    }
    if (q.includes('implant') || q.includes('missing') || q.includes('titanium') || q.includes('replace')) {
      return "At Dental Speciality Centre, we provide **Computer-Guided Titanium Dental Implants**. These biocompatible implants fuse directly with your jawbone (osseointegration) to act as permanent tooth roots, topped with CAD/CAM zirconia or ceramic crowns that match your natural teeth 100%.\n\nThey restore full chewing force and lifelong dental aesthetics.";
    }
    if (q.includes('who') || q.includes('richa') || q.includes('tiwari') || q.includes('vyas') || q.includes('qualification') || q.includes('experience') || q.includes('doctor')) {
      return "**Dr. Richa Tiwari Vyas** is our Chief Dental Surgeon & Specialist Endodontist holding a **BDS and MDS in Conservative Dentistry & Endodontics**.\n\nWith **9+ years of clinical mastery** and over **4,000 successful surgical & microscopic procedures**, she combines advanced dental technology with warm hospitality to provide truly painless care in Indore.";
    }
    if (q.includes('whiten') || q.includes('bleach') || q.includes('yellow') || q.includes('stain') || q.includes('bright')) {
      return "Our **In-Office Laser Teeth Whitening** procedure lifts deep extrinsic stains from coffee, tea, and tobacco safely in just one clinical session.\n\nYou can achieve a smile up to **8 shades brighter** without damaging your enamel, using our specialized desensitizing whitening gel.";
    }
    if (q.includes('ortho') || q.includes('aligner') || q.includes('braces') || q.includes('crooked') || q.includes('straight')) {
      return "Dr. Richa offers both **Invisible Clear Aligners** and traditional braces. Using interactive 3D dental mapping, we simulate your smile progression before treatment begins so you can see your final alignment in advance.\n\nClear aligners are virtually undetectable, removable, and extremely comfortable.";
    }
    if (q.includes('crown') || q.includes('bridge') || q.includes('cap') || q.includes('zirconia')) {
      return "We restore broken or weakened teeth using **Ultra-Precise CAD/CAM Digital Scans** to craft custom **Zirconia and E-Max Ceramic Crowns**. They are 100% metal-free, biocompatible, and fracture-resistant with a natural translucency that blends seamlessly with your smile.";
    }
    if (q.includes('gum') || q.includes('laser') || q.includes('bleed') || q.includes('scaling') || q.includes('bad breath')) {
      return "Healthy gums are the foundation of your teeth. We perform **Painless Ultrasonic Scaling** and **Localized Laser Therapy** to treat gingivitis, bleeding gums, and plaque buildup without surgery or discomfort.";
    }
    if (q.includes('child') || q.includes('kid') || q.includes('pediatric') || q.includes('baby')) {
      return "In our **Zero-Anxiety Pediatric Operating Bays**, Dr. Richa focuses on gentle preventive care for children, including pit-and-fissure sealants, fluoride treatments, and anxiety-free cavity filling in a friendly environment.";
    }
    if (q.includes('pain') || q.includes('hurts') || q.includes('ache') || q.includes('decay') || q.includes('emergency')) {
      return "Tooth pain is usually a sign of deep enamel or pulpal infection. **Dr. Richa Tiwari Vyas's signature approach is 100% painless care** under gentle local anesthesia.\n\nWe recommend an immediate diagnostic digital scan. You can call us directly at **6262178282** for priority assistance.";
    }
    if (q.includes('book') || q.includes('appointment') || q.includes('contact') || q.includes('phone') || q.includes('call') || q.includes('address') || q.includes('where')) {
      return "You can book an appointment with **Dr. Richa Tiwari Vyas** in two easy ways:\n\n1. **Call us directly**: 6262178282\n2. **Online**: Click the **'Book Appointment'** button in the top navigation bar.\n\nWe are located in Indore, Madhya Pradesh, delivering *Medicine with Hospitality*.";
    }

    return "Thank you for asking! **Dr. Richa Tiwari Vyas** (BDS, MDS Endodontics) combines **9+ years of clinical mastery** and microscope-assisted precision to deliver painless dental care.\n\nWould you like details on Root Canal Therapy, Dental Implants, Cosmetic Smile Designing, or assistance booking a consultation?";
  };

  const handleSendMessage = async (textToSend) => {
    const text = typeof textToSend === 'string' ? textToSend : input;
    if (!text || !text.trim() || isLoading) return;

    const userMessage = { sender: 'user', text: text.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput(''); // Automatically clear the text bar
    setIsLoading(true);

    const activeKey = apiKey.trim() || localStorage.getItem('GROQ_API_KEY') || import.meta.env.VITE_GROQ_API_KEY || '';

    // If Groq API Key is available, use Llama 3 on Groq
    if (activeKey) {
      try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${activeKey}`
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              { role: 'system', content: SYSTEM_PROMPT },
              ...updatedMessages.map((m) => ({
                role: m.sender === 'user' ? 'user' : 'assistant',
                content: m.text
              }))
            ],
            temperature: 0.7,
            max_tokens: 600
          })
        });

        if (!response.ok) {
          throw new Error(`Groq API returned status ${response.status}`);
        }

        const data = await response.json();
        const aiResponseText = data.choices?.[0]?.message?.content || getClinicalFallbackResponse(text);
        setMessages((prev) => [...prev, { sender: 'bot', text: aiResponseText }]);
      } catch (err) {
        console.warn('Groq API fallback triggered:', err.message);
        // Fallback to our clinical engine if API fails or key is invalid
        const fallbackText = getClinicalFallbackResponse(text);
        setMessages((prev) => [
          ...prev, 
          { 
            sender: 'bot', 
            text: `${fallbackText}\n\n*(Note: Displaying clinical database response. Groq API check: ${err.message})*` 
          }
        ]);
      }
    } else {
      // Simulate natural thinking delay for Rule-Based clinical AI
      setTimeout(() => {
        const fallbackText = getClinicalFallbackResponse(text);
        setMessages((prev) => [...prev, { sender: 'bot', text: fallbackText }]);
        setIsLoading(false);
      }, 650);
      return;
    }

    setIsLoading(false);
  };

  const renderFormattedText = (text) => {
    return text.split('\n').map((line, idx) => {
      // Bold formatting helper for markdown **text**
      const boldParts = line.split(/(\*\*.*?\*\*)/g);
      const renderedLine = boldParts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pIdx}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      return (
        <React.Fragment key={idx}>
          {renderedLine}
          {idx < text.split('\n').length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      {/* Floating Chat Launcher Button */}
      <motion.div
        style={styles.floatingContainer}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      >
        {/* WhatsApp Button - Sits compactly above AI Chat button with only 10px gap */}
        {!isOpen && (
          <motion.a
            href="https://wa.me/916262178282"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.whatsappFloatBtn}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Chat with Dr. Richa on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="26" height="26" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.571-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </motion.a>
        )}

        <motion.button
          style={styles.launcherBtn}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Open AI Clinical Chat Support"
        >
          {isOpen ? (
            <X size={24} color="#ffffff" />
          ) : (
            <>
              <div style={styles.launcherIconWrap}>
                <Sparkles size={20} color="#ffffff" />
              </div>
              <span style={styles.launcherText}>Dr. Richa AI</span>
              <span style={styles.onlinePulse} />
            </>
          )}
        </motion.button>
      </motion.div>

      {/* Glassmorphic Chat Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            style={styles.chatWindow}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Header */}
            <div style={styles.header}>
              <div style={styles.headerLeft}>
                <div style={styles.avatarBadge}>
                  <Bot size={20} color="#ffffff" />
                  <span style={styles.statusDot} />
                </div>
                <div>
                  <h3 style={styles.headerTitle}>Dr. Richa Clinical AI</h3>
                  <p style={styles.headerSubtitle}>Trained on Dr. Richa Tiwari Vyas • MDS</p>
                </div>
              </div>

              <div style={styles.headerActions}>
                <button
                  style={{
                    ...styles.iconBtn,
                    backgroundColor: showKeySettings ? 'rgba(37, 151, 208, 0.25)' : 'transparent'
                  }}
                  onClick={() => setShowKeySettings(!showKeySettings)}
                  title="Configure Groq API Key"
                >
                  <Key size={16} color="var(--brand-surgical-blue)" />
                </button>
                <button
                  style={styles.iconBtn}
                  onClick={() => setIsOpen(false)}
                  title="Close Chat"
                >
                  <X size={18} color="var(--neutral-slate)" />
                </button>
              </div>
            </div>

            {/* API Key Settings Drawer (Optional for User to Add Groq Key in UI) */}
            <AnimatePresence>
              {showKeySettings && (
                <motion.form
                  style={styles.keyDrawer}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  onSubmit={saveApiKey}
                >
                  <div style={styles.keyDrawerInner}>
                    <p style={styles.keyInfo}>
                      Add your <strong>Groq API Key</strong> (<code>gsk_...</code>) for live Llama-3 AI. If empty, the chat uses our trained clinical knowledge engine.
                    </p>
                    <div style={styles.keyInputRow}>
                      <input
                        type="password"
                        placeholder="Paste Groq API Key (gsk_...)"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        style={styles.keyInput}
                      />
                      <button type="submit" style={styles.keySaveBtn}>
                        {keySaved ? <Check size={16} color="#ffffff" /> : 'Save'}
                      </button>
                    </div>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

            {/* Quick Prompt Chips */}
            <div style={styles.quickPromptsRow}>
              {QUICK_PROMPTS.map((qp, idx) => (
                <button
                  key={idx}
                  style={styles.promptChip}
                  onClick={() => handleSendMessage(qp.prompt)}
                  disabled={isLoading}
                >
                  <span>{qp.label}</span>
                  <ChevronRight size={12} />
                </button>
              ))}
            </div>

            {/* Messages Scroll Area */}
            <div style={styles.messagesContainer}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.msgRow,
                    justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                  }}
                >
                  {msg.sender === 'bot' && (
                    <div style={styles.botAvatar}>
                      <Bot size={14} color="#ffffff" />
                    </div>
                  )}
                  <div
                    style={{
                      ...styles.bubble,
                      backgroundColor:
                        msg.sender === 'user'
                          ? 'var(--brand-surgical-blue)'
                          : '#ffffff',
                      color:
                        msg.sender === 'user'
                          ? '#ffffff'
                          : 'var(--neutral-ink)',
                      border:
                        msg.sender === 'bot'
                          ? '1px solid rgba(0,0,0,0.08)'
                          : 'none',
                      borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
                      borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '16px'
                    }}
                  >
                    {renderFormattedText(msg.text)}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div style={{ ...styles.msgRow, justifyContent: 'flex-start' }}>
                  <div style={styles.botAvatar}>
                    <Bot size={14} color="#ffffff" />
                  </div>
                  <div style={styles.typingBubble}>
                    <span style={styles.typingDot} />
                    <span style={{ ...styles.typingDot, animationDelay: '0.2s' }} />
                    <span style={{ ...styles.typingDot, animationDelay: '0.4s' }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <form
              style={styles.inputArea}
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
            >
              <input
                type="text"
                placeholder="Ask about treatments, pain, Dr. Richa..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={styles.textInput}
                disabled={isLoading}
              />
              <motion.button
                type="submit"
                style={{
                  ...styles.sendBtn,
                  opacity: !input.trim() || isLoading ? 0.5 : 1
                }}
                disabled={!input.trim() || isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={16} color="#ffffff" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const styles = {
  floatingContainer: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '10px',
    zIndex: 9999
  },
  whatsappFloatBtn: {
    width: '46px',
    height: '46px',
    borderRadius: '50%',
    backgroundColor: '#25d366',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 8px 24px rgba(37, 211, 102, 0.45)',
    textDecoration: 'none',
    border: '2px solid #ffffff',
    cursor: 'pointer'
  },
  launcherBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.6rem',
    backgroundColor: 'var(--brand-surgical-blue)',
    color: '#ffffff',
    border: 'none',
    padding: '0.75rem 1.4rem',
    borderRadius: '999px',
    boxShadow: '0 8px 24px rgba(37, 151, 208, 0.45)',
    cursor: 'pointer',
    fontWeight: '700',
    fontSize: '0.92rem',
    position: 'relative'
  },
  launcherIconWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  launcherText: {
    letterSpacing: '-0.01em',
    whiteSpace: 'nowrap'
  },
  onlinePulse: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#10b981',
    boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.3)',
    marginLeft: '0.15rem'
  },
  chatWindow: {
    position: 'fixed',
    bottom: '90px',
    right: '24px',
    width: '380px',
    maxWidth: 'calc(100vw - 32px)',
    height: '560px',
    maxHeight: 'calc(100vh - 120px)',
    backgroundColor: '#fdfbf7',
    borderRadius: '20px',
    boxShadow: '0 16px 48px rgba(15, 23, 42, 0.22)',
    border: '1px solid rgba(0, 0, 0, 0.08)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    zIndex: 9999
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.9rem 1.1rem',
    backgroundColor: '#0b1324',
    color: '#ffffff',
    borderBottom: '1px solid rgba(255,255,255,0.08)'
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem'
  },
  avatarBadge: {
    width: '38px',
    height: '38px',
    borderRadius: '10px',
    backgroundColor: 'var(--brand-surgical-blue)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  statusDot: {
    position: 'absolute',
    bottom: '-2px',
    right: '-2px',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#10b981',
    border: '2px solid #0b1324'
  },
  headerTitle: {
    margin: 0,
    fontSize: '0.95rem',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '-0.01em'
  },
  headerSubtitle: {
    margin: 0,
    fontSize: '0.72rem',
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500'
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem'
  },
  iconBtn: {
    border: 'none',
    backgroundColor: 'transparent',
    padding: '0.4rem',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  keyDrawer: {
    overflow: 'hidden',
    backgroundColor: '#f8fafc',
    borderBottom: '1px solid rgba(0,0,0,0.06)'
  },
  keyDrawerInner: {
    padding: '0.75rem 1rem'
  },
  keyInfo: {
    margin: '0 0 0.5rem 0',
    fontSize: '0.75rem',
    color: 'var(--neutral-slate)',
    lineHeight: '1.4'
  },
  keyInputRow: {
    display: 'flex',
    gap: '0.4rem'
  },
  keyInput: {
    flex: 1,
    padding: '0.4rem 0.6rem',
    fontSize: '0.8rem',
    borderRadius: '6px',
    border: '1px solid rgba(0,0,0,0.15)',
    outline: 'none'
  },
  keySaveBtn: {
    backgroundColor: 'var(--brand-surgical-blue)',
    color: '#ffffff',
    border: 'none',
    padding: '0 0.8rem',
    borderRadius: '6px',
    fontSize: '0.8rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quickPromptsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    padding: '0.65rem 1rem',
    overflowX: 'auto',
    backgroundColor: '#f8fafc',
    borderBottom: '1px solid rgba(0,0,0,0.06)',
    scrollbarWidth: 'none'
  },
  promptChip: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.3rem',
    padding: '0.35rem 0.7rem',
    backgroundColor: '#fdfbf7',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '999px',
    fontSize: '0.75rem',
    fontWeight: '600',
    color: 'var(--neutral-ink)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease',
    flexShrink: 0
  },
  messagesContainer: {
    flex: 1,
    padding: '1rem',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    backgroundColor: '#fcfcfd'
  },
  msgRow: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '0.5rem',
    maxWidth: '100%'
  },
  botAvatar: {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    backgroundColor: 'var(--brand-surgical-blue)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginBottom: '2px'
  },
  bubble: {
    maxWidth: '80%',
    padding: '0.75rem 0.95rem',
    borderRadius: '16px',
    fontSize: '0.85rem',
    lineHeight: '1.45',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
  },
  typingBubble: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.35rem',
    padding: '0.7rem 1rem',
    backgroundColor: '#fdfbf7',
    borderRadius: '16px',
    border: '1px solid rgba(0,0,0,0.08)',
    borderBottomLeftRadius: '4px'
  },
  typingDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: 'var(--brand-surgical-blue)',
    animation: 'chatPulse 1.2s infinite ease-in-out'
  },
  inputArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1rem',
    backgroundColor: '#fdfbf7',
    borderTop: '1px solid rgba(0,0,0,0.08)'
  },
  textInput: {
    flex: 1,
    padding: '0.6rem 0.9rem',
    fontSize: '0.85rem',
    borderRadius: '999px',
    border: '1px solid rgba(0,0,0,0.15)',
    outline: 'none',
    backgroundColor: '#f8fafc',
    color: 'var(--neutral-ink)'
  },
  sendBtn: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    backgroundColor: 'var(--brand-surgical-blue)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flexShrink: 0,
    boxShadow: '0 2px 8px rgba(37, 151, 208, 0.3)'
  }
};
