import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * 60 FPS Parallax Container Component
 * Moves child elements vertically relative to page scroll speed.
 */
export default function Parallax({
  children,
  speed = -0.2,
  className = '',
  style = {},
  ...props
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <div ref={ref} className={className} style={{ position: 'relative', overflow: 'hidden', ...style }} {...props}>
      <motion.div
        style={{
          y,
          willChange: 'transform',
          width: '100%',
          height: '100%'
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Parallax floating decorative badge/shape with continuous gentle floating animation
 */
export function ParallaxFloatingItem({
  children,
  speed = -0.15,
  floatDuration = 5,
  floatDistance = 12,
  className = '',
  style = {},
  ...props
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const scrollY = useTransform(scrollYProgress, [0, 1], ['0px', `${speed * 150}px`]);

  return (
    <motion.div
      ref={ref}
      style={{
        y: scrollY,
        willChange: 'transform',
        display: 'inline-block',
        ...style
      }}
      animate={{
        y: [0, -floatDistance, 0]
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
