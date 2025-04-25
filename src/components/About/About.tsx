import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import './About.scss';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  const calculateRotation = (x: number, y: number) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    return {
      rotateX: (y - centerY) / 20,
      rotateY: (x - centerX) / 20
    };
  };

  const rotation = calculateRotation(mousePosition.x, mousePosition.y);

  return (
    <motion.section 
      className="about-section"
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 1, type: "spring" }}
          style={{
            transform: `perspective(1000px) rotateX(${rotation.rotateX}deg) rotateY(${rotation.rotateY}deg)`,
            x: useTransform(mouseX, [-200, 200], [-20, 20]),
            y: useTransform(mouseY, [-200, 200], [-20, 20])
          }}
        >
          <motion.div 
            className="content-wrapper"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              We are a passionate team dedicated to creating innovative solutions
              that transform the way people interact with technology. Our mission
              is to deliver exceptional products that make a difference in people's
              lives. With cutting-edge technology and creative expertise, we bring
              your vision to life.
            </motion.p>
            <div className="stats">
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="number">10+</div>
                <div className="label">Years Experience</div>
              </motion.div>
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="number">500+</div>
                <div className="label">Projects Completed</div>
              </motion.div>
              <motion.div 
                className="stat-item"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="number">50+</div>
                <div className="label">Team Members</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="about-image"
          initial={{ x: 100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 1, type: "spring" }}
          style={{
            transform: `perspective(1000px) rotateX(${-rotation.rotateX}deg) rotateY(${-rotation.rotateY}deg)`,
            x: useTransform(mouseX, [-200, 200], [20, -20]),
            y: useTransform(mouseY, [-200, 200], [20, -20])
          }}
        >
          <div className="image-container">
            <div className="image-glow"></div>
            <div 
              className="image-content" 
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
            <div className="image-overlay"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About; 