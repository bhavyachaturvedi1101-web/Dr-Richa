import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import TreatmentsPage from './pages/TreatmentsPage';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Gallery from './pages/Gallery';
import CaseStudies from './pages/CaseStudies';
import IntroLoader from './components/IntroLoader';

function App() {
  return (
    <>
      <IntroLoader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="treatments" element={<TreatmentsPage />} />
            <Route path="services" element={<TreatmentsPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="case-studies" element={<CaseStudies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
