import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import wheelImage from '../../assets/images/pngwing.com.png';
import './Hero.scss';

const Hero = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [activeSpec, setActiveSpec] = useState(0);
  const controls = useAnimation();
  const titleControls = useAnimation();

  const specs = [
    { 
      label: 'PERFORMANCE', 
      value: 'ULTRA HIGH', 
      highlight: 'Racing-Grade Grip' 
    },
    { 
      label: 'DURABILITY', 
      value: '50,000 MILES', 
      highlight: 'Extended Life Span' 
    },
    { 
      label: 'TECHNOLOGY', 
      value: 'ADVANCED', 
      highlight: 'Smart Tread Design' 
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSpec((prev) => (prev + 1) % specs.length);
    }, 3000);

    // Initial animation sequence
    const animateTitle = async () => {
      await titleControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
      });
    };
    
    animateTitle();
    return () => clearInterval(interval);
  }, []);

  const handleWheelClick = async () => {
    if (!isSpinning) {
      setIsSpinning(true);
      
      await controls.start({
        rotate: [0, 360, 720, 1080],
        scale: [1, 1.1, 1.1, 1],
        filter: [
          'drop-shadow(0 0 20px rgba(220, 38, 38, 0.3))',
          'drop-shadow(0 0 40px rgba(220, 38, 38, 0.6))',
          'drop-shadow(0 0 40px rgba(220, 38, 38, 0.6))',
          'drop-shadow(0 0 20px rgba(220, 38, 38, 0.3))'
        ],
        transition: {
          duration: 2.5,
          ease: "easeInOut",
          times: [0, 0.3, 0.7, 1]
        }
      });

      setIsSpinning(false);
    }
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__left">
          <div className={`wheel-container ${isSpinning ? 'spinning' : ''}`}>
            <div className="wheel-wrapper">
              <motion.img 
                src={wheelImage}
                alt="Premium Performance Tyres"
                className="wheel-image"
                animate={controls}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 1,
                  transition: { duration: 0.8, ease: "easeOut" }
                }}
                onClick={handleWheelClick}
                whileHover={{ 
                  scale: 1.05,
                  filter: 'drop-shadow(0 0 30px rgba(220, 38, 38, 0.5))',
                  transition: { duration: 0.3 }
                }}
              />
              <motion.div 
                className="wheel-shine"
                animate={{
                  opacity: [0, 0.5, 0],
                  x: ['0%', '100%'],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
              <div className="wheel-highlights">
                <motion.span 
                  className="highlight top"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  RACING PROVEN
                </motion.span>
                <motion.span 
                  className="highlight bottom"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  TRACK READY
                </motion.span>
              </div>
            </div>
          </div>
          <motion.div 
            className="model-name"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 0.1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            GT-R
          </motion.div>
        </div>

        <div className="hero__right">
          <div className="content-wrapper">
            <div className="title-group">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={titleControls}
              >
                <motion.span 
                  className="title-main"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  ULTIMATE
                </motion.span>
                <motion.span 
                  className="title-sub"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  PERFORMANCE
                </motion.span>
              </motion.h1>
              
              <div className="specs-slider">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={specs[activeSpec].label}
                    className="spec-item active"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.span 
                      className="spec-label"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {specs[activeSpec].label}
                    </motion.span>
                    <motion.span 
                      className="spec-value"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      {specs[activeSpec].value}
                    </motion.span>
                    <motion.span 
                      className="spec-highlight"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      {specs[activeSpec].highlight}
                    </motion.span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="action-buttons">
                <motion.button 
                  className="get-quote-btn primary"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(220, 38, 38, 0.5)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  SHOP NOW
                </motion.button>
                <motion.button 
                  className="get-quote-btn secondary"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: '#DC2626',
                    color: '#DC2626'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  LEARN MORE
                </motion.button>
              </div>
            </div>

            <motion.p 
              className="description"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Experience the pinnacle of tyre technology with our GT-R series.
              Engineered for maximum performance, designed for ultimate control,
              and crafted for the most demanding driving conditions. Whether you're
              on the track or the street, our tyres deliver unmatched grip and durability.
            </motion.p>

            <motion.div 
              className="slider-nav"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="nav-dots">
                {[0, 1, 2].map((dot) => (
                  <motion.span
                    key={dot}
                    className={`dot ${dot === activeSpec ? 'active' : ''}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveSpec(dot)}
                  />
                ))}
              </div>
              <motion.div 
                className="scroll-indicator"
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <span className="line"></span>
                <span className="text">Scroll to Explore</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 