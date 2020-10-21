// Header.js

import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  return (
    <header className={`header header_style_${loggedIn ? 'black' : 'white'}`}>
      <a href="/" className={`header__logo header__logo_style_${loggedIn ? 'black' : 'white'}`}>NewsExplorer</a>
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
