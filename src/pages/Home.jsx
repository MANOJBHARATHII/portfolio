import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import ProfileSection from '../components/ProfileSection';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import AILab from '../components/AILab';
import Services from '../components/Services';
import CareerJourney from '../components/CareerJourney';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    // If URL has a hash, smooth scroll to it
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FFFBF0] text-[#1A1A1A] selection:bg-[#FFE135] selection:text-[#1A1A1A]">
      {/* Subtle Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* 1. Navigation */}
      <Navigation />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Section */}
      <About />

      {/* 3.5 Profile & Portrait Section */}
      <ProfileSection />

      {/* 4. Skills Section */}
      <Skills />

      {/* 5. Experience Section */}
      <Experience />

      {/* 6. Featured Projects Section */}
      <Projects />

      {/* 7. AI / LLM Lab */}
      <AILab />

      {/* 8. Services Section */}
      <Services />

      {/* 9. Career Journey */}
      <CareerJourney />

      {/* 10. Contact Section */}
      <Contact />

      {/* 11. Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;

