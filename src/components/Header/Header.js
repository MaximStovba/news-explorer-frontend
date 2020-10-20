// Header.js

import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  return (
    <header className="header">
      <p className="header__logo header__logo_style_white">NewsExplorer</p>
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
