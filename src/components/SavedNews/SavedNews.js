// SavedNews.js

import React from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';
import Footer from '../Footer/Footer';
import './SavedNews.css';

function SavedNews({ loggedIn }) {
  return (
    <div className="saved-news">
      <Header loggedIn={loggedIn} />
      <SavedNewsHeader />
      <NewsCardList loggedIn={loggedIn} />
      <Footer />
    </div>
  );
}

export default SavedNews;
