// Main.js

import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import './Main.css';

function Main() {
  return (
    <div className="main">
      <SearchForm />
      <Header />
      <Preloader />
      <NewsCardList />
      <NotFound />
      <About />
      <Footer />
    </div>
  );
}

export default Main;
