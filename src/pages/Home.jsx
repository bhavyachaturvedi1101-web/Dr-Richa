import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Awards from '../components/Awards';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <Highlights />
      </div>
      <Awards />
      <Testimonials />
    </>
  );
}
