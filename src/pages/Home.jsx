import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';

import Testimonials from '../components/Testimonials';
import Services from '../components/Services';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Hero />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <Highlights />
      </div>

      <Testimonials />
    </motion.div>
  );
}
