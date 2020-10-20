// Header.js

import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ loggedIn }) {
  return (
    <header className={`header header_style_${loggedIn ? 'black' : 'white'}`}>
      <p className={`header__logo header__logo_style_${loggedIn ? 'black' : 'white'}`}>NewsExplorer</p>
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
