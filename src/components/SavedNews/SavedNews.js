// SavedNews.js

import React from 'react';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
// import Footer from '../Footer/Footer';
import './SavedNews.css';

function SavedNews({ loggedIn }) {
  return (
    <div className="saved-news">
      <Header loggedIn={loggedIn} />
      <SavedNewsHeader />
    </div>
  );
}

export default SavedNews;
