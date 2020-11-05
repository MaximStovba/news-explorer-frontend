// SavedNews.js

import React from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import PopupMenu from '../PopupMenu/PopupMenu';
import './SavedNews.css';

function SavedNews({
  isOpen,
  onClose,
  loggedIn,
  onSignOut,
  isMiniOpen,
  handleLogInClick,
  handleMiniClick,
  handleMenuOpenClick,
  cards,
  question,
  numSavedArticles,
  handleDeleteCardBtnClick,
}) {
  const isMain = false;
  return (
    <div className="saved-news">
      <Header
        isOpen={isOpen}
        loggedIn={loggedIn}
        onSignOut={onSignOut}
        isMiniOpen={isMiniOpen}
        handleLogInClick={handleLogInClick}
        handleMiniClick={handleMiniClick}
        handleMenuOpenClick={handleMenuOpenClick}
      />
      <SavedNewsHeader
        numSavedArticles={numSavedArticles}
        cards={cards}
      />
      {
        numSavedArticles === 0
        ? ''
        : <NewsCardList
            loggedIn={loggedIn}
            cards={cards}
            question={question}
            handleDeleteCardBtnClick={handleDeleteCardBtnClick}
          />
      }
      <Footer />
      <PopupMenu
        loggedIn={loggedIn}
        onSignOut={onSignOut}
        isMain={isMain}
        isOpen={isOpen}
        onClose={onClose}
        handleLogInClick={handleLogInClick}
        handleMiniClick={handleMiniClick}
      />
    </div>
  );
}

export default SavedNews;
