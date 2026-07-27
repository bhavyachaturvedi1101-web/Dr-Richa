import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutMinimal from '../components/AboutMinimal';
import Specialist from '../components/Specialist';
import ServicesOverview from '../components/ServicesOverview';
import WhyTrustUs from '../components/WhyTrustUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Transformations from '../components/Transformations';
import Education from '../components/Education';
import DigitalJourneys from '../components/DigitalJourneys';

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
      <ServicesOverview />
      <WhyTrustUs />
      <Process />
      <Testimonials />
      <Transformations />
      <Education />
      <DigitalJourneys />
    </motion.div>
  );
}

