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
  handleLogInClick,
  handleMenuOpenClick,
  isOpen,
  isMiniOpen,
  onClose,
  handleMiniClick,
}) {
  const isMain = true;
  return (
    <div className="main">
      <Header
        loggedIn={loggedIn}
        isMain={isMain}
        isMiniOpen={isMiniOpen}
        handleLogInClick={handleLogInClick}
        handleMiniClick={handleMiniClick}
        handleMenuOpenClick={handleMenuOpenClick}
      />
      <SearchForm />
      <Preloader />
      <NotFound />
      <NewsCardList loggedIn={loggedIn} isMain={isMain} />
      <About />
      <Footer />
      <PopupMenu
        loggedIn={loggedIn}
        isMain={isMain}
        isOpen={isOpen}
        onClose={onClose}
        handleLogInClick={handleLogInClick}
        handleMiniClick={handleMiniClick}
      />
      {/**/}
    </div>
  );
}

export default Main;
