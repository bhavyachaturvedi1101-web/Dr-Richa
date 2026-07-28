import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AIChatbot from './AIChatbot';
import PageTransition from './ui/PageTransition';

export default function Layout() {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <Navbar />
      <main style={{ flex: 1, position: 'relative' }}>
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}
