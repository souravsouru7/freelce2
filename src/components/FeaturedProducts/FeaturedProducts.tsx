import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FeaturedProducts.scss';

const products = [
  {
    id: 1,
    name: "Performance Elite",
    description: "Next-gen grip technology with advanced compound",
    price: "$299.99",
    specs: {
      grip: "9.8/10",
      durability: "80,000 km",
      features: ["All-Weather Performance", "Advanced Compound Technology", "Reduced Rolling Resistance"]
    },
    image: "https://images.unsplash.com/photo-1582563098477-0a546fe3c410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
  },
  {
    id: 2,
    name: "Sport Series X",
    description: "Ultimate control with precision handling",
    price: "$259.99",
    specs: {
      grip: "9.5/10",
      durability: "70,000 km",
      features: ["Sport Performance", "Enhanced Cornering", "High-Speed Stability"]
    },
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    name: "Eco Drive Pro",
    description: "Sustainable performance, minimal resistance",
    price: "$229.99",
    specs: {
      grip: "9.2/10",
      durability: "90,000 km",
      features: ["Eco-Friendly Compound", "Low Rolling Resistance", "Extended Lifespan"]
    },
    image: "https://images.unsplash.com/photo-1619847516182-6594671d6e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="featured-products"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2 
        className="section-title"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Featured Products
      </motion.h2>

      <div className="product-showcase">
        <motion.div className="product-viewer">
          <motion.div 
            className="product-image-container"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              animate={{
                scale: isHovered ? 1.05 : 1,
                rotateY: isHovered ? 10 : 0
              }}
              transition={{ duration: 0.4 }}
            />
            <div className="product-overlay">
              <motion.div 
                className="specs-display"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grip-level">
                  <span>Grip Level</span>
                  <motion.div 
                    className="grip-bar"
                    initial={{ width: 0 }}
                    animate={{ width: "98%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                  <span>{selectedProduct.specs.grip}</span>
                </div>
                <div className="durability">
                  <span>Durability</span>
                  <motion.h3>{selectedProduct.specs.durability}</motion.h3>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="product-info">
            <motion.h3 
              className="product-name"
              layoutId={`name-${selectedProduct.id}`}
            >
              {selectedProduct.name}
            </motion.h3>
            <motion.p className="product-description">
              {selectedProduct.description}
            </motion.p>
            <motion.div className="product-features">
              {selectedProduct.specs.features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="feature-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="feature-dot" />
                  {feature}
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="product-price">
              <span>Starting at</span>
              <motion.h4>{selectedProduct.price}</motion.h4>
            </motion.div>
            <motion.button 
              className="shop-now-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="product-selector">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className={`selector-item ${selectedProduct.id === product.id ? 'active' : ''}`}
              onClick={() => setSelectedProduct(product)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="selector-image"
                layoutId={`image-${product.id}`}
              >
                <img src={product.image} alt={product.name} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProducts; 