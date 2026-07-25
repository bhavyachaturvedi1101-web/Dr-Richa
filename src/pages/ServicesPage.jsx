import React from 'react';
import { motion } from 'framer-motion';
import Services from '../components/Services';

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ minHeight: '80vh', padding: '2rem 0' }}
    >
      <Services />
    </motion.div>
  );
}
