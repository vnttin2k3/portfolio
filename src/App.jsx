import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import FrontendRoadmap2025 from './pages/blog/FrontendRoadmap2025';
import MicrosoftActivationScripts from './pages/blog/MicrosoftActivationScripts';
import Contact from './pages/Contact';
import ScrollToTop from './components/common/ScrollToTop';

// ...

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/frontend-roadmap-2025" element={<FrontendRoadmap2025 />} />
          <Route path="/blog/microsoft-activation-scripts" element={<MicrosoftActivationScripts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
