import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroLoader() {
  const [showLoader, setShowLoader] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Start animation slightly after the white background is guaranteed to be painted
    const animTimer = setTimeout(() => {
      setStartAnimation(true);
    }, 100);

    // Lock scroll while loading
    document.body.style.overflow = 'hidden';
    
    // Auto-hide after animation sequence
    const timer = setTimeout(() => {
      setShowLoader(false);
      document.body.style.overflow = 'unset';
    }, 3500);

    return () => {
      clearTimeout(animTimer);
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Logo Animation - Only mounts after background is ready */}
          {startAnimation && (
            <>
              <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 200 200" 
            width="180" 
            height="180"
          >
            <g transform="translate(100, 100) scale(1.65) translate(-100, -74)">
              {/* Outer Blue Ring */}
              <motion.circle 
                cx="100" 
                cy="72" 
                r="44" 
                fill="none" 
                stroke="#2597d0" 
                strokeWidth="4.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              
              {/* Tooth Outline */}
              <motion.path 
                d="M 83,58 C 88,48 95,48 100,54 C 105,48 112,48 117,58 C 121,70 118,88 114,102 C 111,109 107,109 103,100 C 101,95 99,95 97,100 C 93,109 89,109 86,102 C 82,88 79,70 83,58 Z" 
                stroke="#121824" 
                strokeWidth="4.5" 
                strokeLinejoin="round"
                initial={{ pathLength: 0, fill: "rgba(255, 255, 255, 0)" }}
                animate={{ pathLength: 1, fill: "rgba(255, 255, 255, 1)" }}
                transition={{ 
                  pathLength: { duration: 1.5, ease: "easeInOut" },
                  fill: { duration: 0.5, delay: 1.5 }
                }}
              />
              
              {/* Inner Blue Ring */}
              <motion.circle 
                cx="100" 
                cy="74" 
                r="14" 
                fill="none" 
                stroke="#2597d0" 
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              />
              
              {/* Medical Cross */}
              <motion.path 
                d="M 95,74 L 105,74 M 100,69 L 100,79" 
                fill="none" 
                stroke="#2597d0" 
                strokeWidth="2.5" 
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
              />
            </g>
          </motion.svg>

          {/* Text Fade In */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
            style={{ 
              marginTop: '-0.5rem', 
              textAlign: 'center'
            }}
          >
            <h2 style={{ 
              margin: 0, 
              fontSize: '1.75rem', 
              fontWeight: '800', 
              color: 'var(--neutral-ink)',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-playfair)'
            }}>
              Dental Speciality Centre
            </h2>
            <p style={{ 
              margin: '0.25rem 0 0 0', 
              fontSize: '0.75rem', 
              fontWeight: '700', 
              color: 'var(--brand-surgical-blue)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em'
            }}>
              Dr. Richa Tiwari Vyas
            </p>
          </motion.div>
          </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
