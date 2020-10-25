// Main.js

import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';
//import Preloader from '../Preloader/Preloader';
//import NotFound from '../NotFound/NotFound';
import './Main.css';

const isMain = true;

function Main( {loggedIn, handleLogInClick} ) {
  return (
    <div className="main">
      <Header loggedIn={loggedIn} isMain={isMain} handleLogInClick={handleLogInClick} />
      <SearchForm />
      <NewsCardList loggedIn={loggedIn} isMain={isMain} />
      <About />
      <Footer />
{/*
      <Preloader />
      <NotFound />
*/}
    </div>
  );
}

export default Main;
