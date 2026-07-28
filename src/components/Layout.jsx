import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useOutlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AIChatbot from './AIChatbot';
import PageTransition from './ui/PageTransition';

export default function Layout() {
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <Navbar />
      <main style={{ flex: 1, position: 'relative' }}>
        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
          {currentOutlet && (
            <PageTransition key={location.pathname}>
              {React.cloneElement(currentOutlet, { key: location.pathname })}
            </PageTransition>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}
