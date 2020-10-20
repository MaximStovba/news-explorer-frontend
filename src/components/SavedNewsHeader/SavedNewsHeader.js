// SavedNewsHeader.js

import React from 'react';
import './SavedNewsHeader.css';

const userName = "Грета";
const numSavedArticles = "5";
const firstKeyWord = "Природа";
const secondKeyWord = "Тайга";
const numOtherKeyWord = "2";

function SavedNewsHeader() {
  return (
    <header className="saved-news-header">
      <h2 className="saved-news-header__title">Сохранённые статьи</h2>
      <p className="saved-news-header__statistics">{ userName }, у вас { numSavedArticles } сохранённых статей</p>
      <p className="saved-news-header__keyword">
        По ключевым словам:
        <span className="saved-news-header__span-accent">{` ${firstKeyWord},`}</span>
        <span className="saved-news-header__span-accent">{` ${secondKeyWord} `}</span>
        и
        <span className="saved-news-header__span-accent">{` ${numOtherKeyWord}-м другим`}</span>
      </p>
    </header>
  );
}

export default SavedNewsHeader;
