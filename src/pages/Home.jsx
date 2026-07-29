import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import AboutMinimal from '../components/AboutMinimal';
import Specialist from '../components/Specialist';
import WhyTrustUs from '../components/WhyTrustUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Education from '../components/Education';
import DigitalJourneys from '../components/DigitalJourneys';
import { StickyFeatureSection } from '../components/ui/sticky-scroll-cards-section';
import ScrollReveal from '../components/ui/ScrollReveal';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: '#ffffff' }}
    >
      <Hero />
      <ScrollReveal direction="fade-up" margin="-60px">
        <AboutMinimal />
      </ScrollReveal>
      <ScrollReveal direction="fade-up" margin="-60px">
        <Specialist />
      </ScrollReveal>
      <TreatmentsOverview />
      <WhyTrustUs />
      <ScrollReveal direction="fade-up" margin="-60px">
        <Process />
      </ScrollReveal>
      <ScrollReveal direction="fade-up" margin="-60px">
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal direction="fade-up" margin="-60px">
        <Transformations />
      </ScrollReveal>
      <ScrollReveal direction="fade-up" margin="-60px">
        <Education />
      </ScrollReveal>
      <StickyFeatureSection />
      <ScrollReveal direction="fade-up" margin="-60px">
        <DigitalJourneys />
      </ScrollReveal>
    </motion.div>
  );
}


