// Header.js

import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({
  loggedIn,
  onSignOut,
  isMain,
  handleLogInClick,
  handleMiniClick,
  isOpen,
  isMiniOpen,
  onClose,
  handleMenuOpenClick,
}) {
  return (
    <header className={`header header_style_${isMain || isOpen ? 'white' : 'black'} ${isMain ? '' : 'header_fixed'}`}>
      <div className="header__container">
        <a href="/news-explorer-frontend/" className={`header__logo header__logo_style_${isMain || isOpen  ? 'white' : 'black'}`}>NewsExplorer</a>
        <Navigation
          loggedIn={loggedIn}
          onSignOut={onSignOut}
          isMain={isMain}
          handleLogInClick={handleLogInClick}
          handleMiniClick={handleMiniClick}
          isOpen={isOpen}
          isMiniOpen={isMiniOpen}
          onClose={onClose}
          isVertical={false}
          handleMenuOpenClick={handleMenuOpenClick}
        />
      </div>
    </header>
  );
}

export default Header;
