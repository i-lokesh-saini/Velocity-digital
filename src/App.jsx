import { Routes, Route } from 'react-router';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TrustedBy from './pages/TrustedBy';
import WorkFlow from './pages/WorkFlow';
import Field from './pages/Field';
import Team from './pages/Team';
import OurWork from './pages/OurWork';
import CaseStudy from './pages/CaseStudy';

function LandingPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      <Home />
      <TrustedBy />
      <About />
      <Services />
      <WorkFlow />
      <OurWork />
      <Field />
      <Team />
    </>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/case-study/:slug" element={<CaseStudy />} />
      </Routes>
    </>
  )
}

export default App