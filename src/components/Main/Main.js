// Main.js

import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import PopupMenu from '../PopupMenu/PopupMenu';
import './Main.css';


function Main({
  loggedIn,
  onSignOut,
  handleLogInClick,
  handleMenuOpenClick,
  isOpen,
  isMiniOpen,
  onClose,
  handleMiniClick,
  handleSearchBtnClick,
  handleSaveCardBtnClick,
  handleDeleteCardBtnClick,
  isSearch,
  loaded,
  isNotFound,
  notFoundErrMessage,
  cards,
  question,
  savedCards,
  isSavedNewsFromMain,
}) {

  const isMain = true;

  // отправляем запрос на получение сохранённых пользователем статей
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    isSavedNewsFromMain(token);
  }, [isSavedNewsFromMain]);

  return (
    <div className="main">
      <Header
        loggedIn={loggedIn}
        onSignOut={onSignOut}
        isMain={isMain}
        isMiniOpen={isMiniOpen}
        handleLogInClick={handleLogInClick}
        handleMiniClick={handleMiniClick}
        handleMenuOpenClick={handleMenuOpenClick}
      />
      <SearchForm
        handleSearchBtnClick={handleSearchBtnClick}
      />
      {
        loaded
        ? <Preloader />
        : ''
      }
      {
        isNotFound
        ? <NotFound notFoundErrMessage={notFoundErrMessage} />
        : ''
      }
      {
        isSearch && !loaded && !isNotFound
        ? <NewsCardList
            loggedIn={loggedIn}
            isMain={isMain}
            handleLogInClick={handleLogInClick}
            handleMiniClick={handleMiniClick}
            handleSaveCardBtnClick={handleSaveCardBtnClick}
            handleDeleteCardBtnClick={handleDeleteCardBtnClick}
            cards={cards}
            question={question}
            savedCards={savedCards}
          />
        : ''
      }
      <About />
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

export default Main;
