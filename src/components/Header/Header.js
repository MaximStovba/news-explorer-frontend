// Header.js

import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <p className="header__logo">NewsExplorer</p>
      <Navigation />
    </header>
  );
}

export default Header;
