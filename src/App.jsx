import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ScrollToTop from './components/common/ScrollToTop';

// Simple ScrollToTop component to handle scroll on navigation
const ScrollToTopHandler = () => {
  // In React Router v6 we can use specific components or hooks
  // For now, let's just make sure window scrolls to top
  // Actually react-router-dom v6 doesn't have native ScrollRestoration that works 100% implicitly without setup in data routers, 
  // but <ScrollRestoration /> component exists in v6.4+ if using data router.
  // Since we use BrowserRouter, we can create a wrapper.
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);
  return null;
};

// Or better, define it separately:
function ScrollHandler() {
  const { pathname } = React.useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
// Wait, useLocation needs to be inside Router.

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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
