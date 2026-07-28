import React from 'react';
import { motion } from 'framer-motion';

const defaultEasing = [0.16, 1, 0.3, 1];

const variantsMap = {
  'fade-up': {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 }
  },
  'fade-down': {
    hidden: { opacity: 0, y: -35 },
    visible: { opacity: 1, y: 0 }
  },
  'slide-left': {
    hidden: { opacity: 0, x: -35 },
    visible: { opacity: 1, x: 0 }
  },
  'slide-right': {
    hidden: { opacity: 0, x: 35 },
    visible: { opacity: 1, x: 0 }
  },
  'scale-up': {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 }
  },
  'fade': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

/**
 * 60 FPS Viewport Scroll Reveal Component
 */
export default function ScrollReveal({
  children,
  direction = 'fade-up',
  delay = 0,
  duration = 0.7,
  once = true,
  margin = '-60px',
  className = '',
  style = {},
  ...props
}) {
  const selectedVariant = variantsMap[direction] || variantsMap['fade-up'];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            duration,
            delay,
            ease: defaultEasing
          }
        }
      }}
      style={{
        willChange: 'transform, opacity',
        ...style
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Reusable Stagger Container for card lists & grid layouts
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.05,
  once = true,
  margin = '-60px',
  className = '',
  style = {},
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren
          }
        }
      }}
      style={{
        willChange: 'transform, opacity',
        ...style
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual item inside a StaggerContainer
 */
export function StaggerItem({
  children,
  direction = 'fade-up',
  duration = 0.75,
  className = '',
  style = {},
  ...props
}) {
  const selectedVariant = variantsMap[direction] || variantsMap['fade-up'];

  return (
    <motion.div
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            duration,
            ease: defaultEasing
          }
        }
      }}
      style={{
        willChange: 'transform, opacity',
        ...style
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
