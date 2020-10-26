// Header.js

import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({
  loggedIn,
  isMain,
  handleLogInClick,
  isOpen,
}) {
  return (
    <header className={`header header_style_${!isMain ? 'black' : 'white'}`}>
      <div className="header__container">
        <a href="/" className={`header__logo header__logo_style_${!isMain ? 'black' : 'white'}`}>NewsExplorer</a>
        <Navigation
          loggedIn={loggedIn}
          isMain={isMain}
          handleLogInClick={handleLogInClick}
          isOpen={isOpen}
          isVertical={false}
        />
      </div>
    </header>
  );
}

export default Header;
