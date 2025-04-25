import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.contact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div 
      className="contact-container"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div 
        className="contact-content"
        style={{ y }}
      >
        <motion.h2 
          className="contact-title"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          Get in Touch
        </motion.h2>
        
        <motion.form 
          onSubmit={handleSubmit}
          className="contact-form"
          variants={containerVariants}
        >
          <motion.div 
            className={`form-group ${activeField === 'name' ? 'active' : ''}`}
            variants={itemVariants}
            onFocus={() => setActiveField('name')}
            onBlur={() => setActiveField(null)}
          >
            <motion.label 
              className="floating-label"
              animate={{
                y: activeField === 'name' || formData.name ? -20 : 0,
                scale: activeField === 'name' || formData.name ? 0.8 : 1
              }}
            >
              Your Name
            </motion.label>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.div 
              className="input-highlight"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeField === 'name' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div 
            className={`form-group ${activeField === 'email' ? 'active' : ''}`}
            variants={itemVariants}
            onFocus={() => setActiveField('email')}
            onBlur={() => setActiveField(null)}
          >
            <motion.label 
              className="floating-label"
              animate={{
                y: activeField === 'email' || formData.email ? -20 : 0,
                scale: activeField === 'email' || formData.email ? 0.8 : 1
              }}
            >
              Your Email
            </motion.label>
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.div 
              className="input-highlight"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeField === 'email' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div 
            className={`form-group ${activeField === 'message' ? 'active' : ''}`}
            variants={itemVariants}
            onFocus={() => setActiveField('message')}
            onBlur={() => setActiveField(null)}
          >
            <motion.label 
              className="floating-label"
              animate={{
                y: activeField === 'message' || formData.message ? -20 : 0,
                scale: activeField === 'message' || formData.message ? 0.8 : 1
              }}
            >
              Your Message
            </motion.label>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
            />
            <motion.div 
              className="input-highlight"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeField === 'message' ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.button
            type="submit"
            className="submit-button"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255, 59, 48, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            <AnimatePresence mode="wait">
              {isSubmitting ? (
                <motion.span
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Sending...
                </motion.span>
              ) : (
                <motion.span
                  key="send"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Send Message
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact; 