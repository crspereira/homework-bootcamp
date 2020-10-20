import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
   return (
      <header className="header-container">
            <div className="header-content">
            <Link to="/">
               <span className="header-logo-text">BootCamp DevSuperior</span>
            </Link>
            </div>
      </header>
   );
}

export default Header;