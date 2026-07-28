import React from 'react';
import { motion } from 'framer-motion';

const defaultEasing = [0.16, 1, 0.3, 1];

/**
 * 60 FPS Page Transition Wrapper Component
 * Animates page entry and exit during client-side navigation.
 */
export default function PageTransition({
  children,
  className = '',
  style = {},
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.55,
          ease: defaultEasing
        }
      }}
      exit={{
        opacity: 0,
        y: -15,
        transition: {
          duration: 0.35,
          ease: 'easeInOut'
        }
      }}
      style={{
        willChange: 'transform, opacity',
        width: '100%',
        ...style
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
