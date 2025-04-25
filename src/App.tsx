import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedProducts />
    </div>
  );
}

export default App; 