// SavedNewsHeader.js

import React from 'react';
// импортируем объект контекста
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';

// const userName = "Максим";
// const numSavedArticles = "5";
const firstKeyWord = "Природа";
const secondKeyWord = "Тайга";
const numOtherKeyWord = "2";

function SavedNewsHeader({numSavedArticles}) {

  // Подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <header className="saved-news-header">
      <div className="saved-news-header__container">
        <h2 className="saved-news-header__title">Сохранённые статьи</h2>
        <p className="saved-news-header__statistics">{ currentUser.name }, у вас {`${numSavedArticles === 0 ? 'нет' : numSavedArticles}`} сохранённых статей</p>
        {
          numSavedArticles === 0
          ? ''
          : <p className="saved-news-header__keyword">По ключевым словам:
            <span className="saved-news-header__span-accent">{` ${firstKeyWord},`}</span>
            <span className="saved-news-header__span-accent">{` ${secondKeyWord} `}</span>
            и
            <span className="saved-news-header__span-accent">{` ${numOtherKeyWord}-м другим`}</span>
            </p>
        }
      </div>
    </header>
  );
}

export default SavedNewsHeader;
