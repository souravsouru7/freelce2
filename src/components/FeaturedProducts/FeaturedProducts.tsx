import React, { useState, useEffect } from 'react';
import './FeaturedProducts.scss';

const FeaturedProducts = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'performance', name: 'Performance' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'suv', name: 'SUV/4x4' }
  ];

  const products = [
    {
      id: 1,
      name: 'GT-R Ultra Performance',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'High-performance tyres for ultimate racing experience',
      price: '$299.99',
      category: 'performance',
      specs: ['Racing Grade Grip', '300+ km/h Rated', 'Track Certified'],
      rating: 4.9
    },
    {
      id: 2,
      name: 'Executive Comfort Elite',
      image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Premium comfort with exceptional handling',
      price: '$249.99',
      category: 'luxury',
      specs: ['Ultra Quiet', 'Premium Comfort', 'All-Season'],
      rating: 4.8
    },
    {
      id: 3,
      name: 'All-Terrain Dominator',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      description: 'Conquer any terrain with confidence',
      price: '$329.99',
      category: 'suv',
      specs: ['Off-Road Ready', 'All-Weather', 'Reinforced'],
      rating: 4.7
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };

  return (
    <section className="featured-products">
      <div className="background-effects">
        <div className="glow-effect"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <div className="title-underline"></div>
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div
              className={`product-card ${hoveredCard === product.id ? 'hovered' : ''}`}
              key={product.id}
              onMouseMove={(e) => handleMouseMove(e, product.id)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setHoveredCard(product.id)}
            >
              <div className="product-card-inner">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  <div className="image-overlay"></div>
                  <div className="product-rating">
                    <span className="rating-value">{product.rating}</span>
                    <span className="rating-max">/5</span>
                  </div>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="specs-list">
                    {product.specs.map((spec, index) => (
                      <div className="spec-item" key={index}>
                        <span className="spec-dot"></span>
                        {spec}
                      </div>
                    ))}
                  </div>
                  <div className="product-price">
                    <span className="price-value">{product.price}</span>
                    <span className="price-label">Per Tyre</span>
                  </div>
                  <div className="action-buttons">
                    <button className="cta-button primary">
                      <span>Shop Now</span>
                      <div className="button-glow"></div>
                    </button>
                    <button className="cta-button secondary">Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts; 