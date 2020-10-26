// SavedNews.js

import React from 'react';
import Header from '../Header/Header';
// import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import PopupMenu from '../PopupMenu/PopupMenu';
import './SavedNews.css';

function SavedNews({
  isOpen,
  onClose,
  loggedIn,
  isMiniOpen,
  handleLogInClick,
  handleMiniClick,
  handleMenuOpenClick,
}) {
  const isMain = false;
  return (
    <div className="saved-news">
      <Header
        isOpen={isOpen}
        loggedIn={loggedIn}
        isMiniOpen={isMiniOpen}
        handleLogInClick={handleLogInClick}
        handleMiniClick={handleMiniClick}
        handleMenuOpenClick={handleMenuOpenClick}
      />

      <NewsCardList loggedIn={loggedIn} />
      <Footer />
      <PopupMenu
        loggedIn={loggedIn}
        isMain={isMain}
        isOpen={isOpen}
        onClose={onClose}
        handleLogInClick={handleLogInClick}
        handleMiniClick={handleMiniClick}
      />
      {/* <SavedNewsHeader /> */}
    </div>
  );
}

export default SavedNews;
