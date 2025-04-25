import React, { useState } from 'react';
import wheelImage from '../../assets/images/pngwing.com.png';
import './Hero.scss';

const Hero: React.FC = () => {
  const [isWheelSpinning, setIsWheelSpinning] = useState(false);

  const handleWheelClick = () => {
    if (!isWheelSpinning) {
      setIsWheelSpinning(true);
      setTimeout(() => setIsWheelSpinning(false), 2000);
    }
  };

  return (
    <section className="hero">
      <div className="hero__background">
        <div className="gradient-overlay" />
        <div className="pattern-overlay" />
      </div>

      <div className="hero__collage">
        <div className="main-wheel collage-item">
          <div className={`wheel-container ${isWheelSpinning ? 'spinning' : ''}`} onClick={handleWheelClick}>
            <img 
              src={wheelImage}
              alt="Performance Tyre" 
              className="wheel-image"
            />
            <div className="wheel-glow" />
            <div className="model-name">APEX</div>
          </div>
        </div>

        <div className="main-title collage-item">
          <h1>
            <span className="outline-text">PERFORMANCE</span>
            <span className="solid-text">REDEFINED</span>
          </h1>
        </div>

        <div className="spec-card collage-item top-right">
          <div className="spec-content">
            <span className="spec-label">Grip Level</span>
            <div>
              <span className="spec-value">9.8</span>
              <span className="spec-unit">/10</span>
            </div>
          </div>
          <div className="card-glow" />
        </div>

        <div className="description-block collage-item">
          <span className="highlight-tag">NEXT-GEN TECHNOLOGY</span>
          <p>
            Experience unparalleled performance with our revolutionary tyre technology.
            Engineered for maximum grip, durability, and control in all conditions.
          </p>
        </div>

        <div className="cta-block collage-item">
          <button className="cta-button">
            <span>Shop Now</span>
            <div className="button-glow" />
          </button>
          <div className="tech-badge">
            <span className="badge-text">ECO FRIENDLY</span>
            <i className="badge-icon">🌱</i>
          </div>
        </div>

        <div className="spec-card collage-item bottom-left">
          <div className="spec-content">
            <span className="spec-label">Durability</span>
            <div>
              <span className="spec-value">80K</span>
              <span className="spec-unit">km</span>
            </div>
          </div>
          <div className="card-glow" />
        </div>

        <div className="floating-highlights collage-item">
          <div className="highlight-item">
            <div className="dot" />
            <span className="text">Advanced Compound Technology</span>
          </div>
          <div className="highlight-item">
            <div className="dot" />
            <span className="text">All-Weather Performance</span>
          </div>
          <div className="highlight-item">
            <div className="dot" />
            <span className="text">Reduced Rolling Resistance</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
};

export default Hero; 