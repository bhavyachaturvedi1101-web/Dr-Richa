import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutMinimal from '../components/AboutMinimal';
import Specialist from '../components/Specialist';
import WhyTrustUs from '../components/WhyTrustUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Education from '../components/Education';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: '#ffffff' }}
    >
      <Hero />
      <AboutMinimal />
      <Specialist />
      <WhyTrustUs />
      <Process />
      <Testimonials />
      <Education />
    </motion.div>
  );
}


