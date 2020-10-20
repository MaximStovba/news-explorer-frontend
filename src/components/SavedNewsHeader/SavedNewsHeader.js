// SavedNewsHeader.js

import React from 'react';
import '../Header/Header.css'; // наследуются стили Header
import Navigation from '../Navigation/Navigation';

function SavedNewsHeader({ loggedIn }) {
  return (
    <header className="header">
      <p className="header__logo header__logo_style_black">NewsExplorer</p>
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default SavedNewsHeader;