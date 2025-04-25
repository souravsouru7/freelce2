import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'featured', 'contact', 'faq'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      style={{ opacity }}
    >
      <div className="navbar-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('home')}
        >
          <span>Your</span>Logo
        </motion.div>
        
        <div className="nav-links">
          <motion.button
            className={activeSection === 'home' ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
          >
            Home
          </motion.button>
          <motion.button
            className={activeSection === 'about' ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('about')}
          >
            About
          </motion.button>
          <motion.button
            className={activeSection === 'featured' ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('featured')}
          >
            Products
          </motion.button>
          <motion.button
            className={activeSection === 'contact' ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 