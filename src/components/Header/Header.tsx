import { useState } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__left">
        <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search wheels..." />
        </div>
      </div>

      <div className="header__center">
        <img src="/logo.png" alt="Company Logo" className="logo" />
      </div>

      <div className="header__right">
        <nav>
          <ul>
            <li><a href="#wheels">WHEELS</a></li>
            <li><a href="#gallery">GALLERY</a></li>
            <li><a href="#store">STORE</a></li>
          </ul>
        </nav>
        <div className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-count">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header; 