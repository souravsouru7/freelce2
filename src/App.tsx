import React from 'react';
import { motion } from 'framer-motion';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';

function App() {
  return (
    <motion.div 
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      <main>
        <section id="home" className="hero-section">
          <Hero />
        </section>

        <section id="about" className="about-section">
          <About />
        </section>

        <section id="featured" className="featured-section">
          <FeaturedProducts />
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-content">
            <h2>Contact Us</h2>
            <Contact />
          </div>
        </section>

        <section id="faq" className="faq-section">
          <FAQ />
        </section>
      </main>
    </motion.div>
  );
}

export default App; 