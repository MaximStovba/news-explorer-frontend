// SavedNewsHeader.js

import React from 'react';
import './SavedNewsHeader.css';

const userName = "Максим";
const numSavedArticles = "5";
const firstKeyWord = "Природа";
const secondKeyWord = "Тайга";
const numOtherKeyWord = "2";

function SavedNewsHeader() {
  return (
    <header className="saved-news-header">
      <div className="saved-news-header__container">
        <h2 className="saved-news-header__title">Сохранённые статьи</h2>
        <p className="saved-news-header__statistics">{ userName }, у вас { numSavedArticles } сохранённых статей</p>
        <p className="saved-news-header__keyword">
          По ключевым словам:
          <span className="saved-news-header__span-accent">{` ${firstKeyWord},`}</span>
          <span className="saved-news-header__span-accent">{` ${secondKeyWord} `}</span>
          и
          <span className="saved-news-header__span-accent">{` ${numOtherKeyWord}-м другим`}</span>
        </p>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
