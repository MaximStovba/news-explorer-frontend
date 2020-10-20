// SavedNews.js

import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
// import Footer from '../Footer/Footer';
import './SavedNews.css';

function SavedNews({ loggedIn }) {
  return (
    <div className="saved-news">
      <SavedNewsHeader loggedIn={loggedIn} />
    </div>
  );
}

export default SavedNews;
