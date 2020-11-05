// SavedNewsHeader.js

import React from 'react';
// импортируем объект контекста
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './SavedNewsHeader.css';

const firstKeyWord = "Природа";
const secondKeyWord = "Тайга";
const numOtherKeyWord = "2";

function SavedNewsHeader({numSavedArticles}) {

  // Подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

  // функция подстановки правильных окончаний слов
  const sklonenie = (number, txt, cases = [2, 0, 1, 1, 1, 2]) => txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  const wordSaveAeticles = sklonenie(numSavedArticles, ['сохранённая статья', 'сохранённые статьи', 'сохранённых статей']);

  return (
    <header className="saved-news-header">
      <div className="saved-news-header__container">
        <h2 className="saved-news-header__title">Сохранённые статьи</h2>
        <p className="saved-news-header__statistics">{ currentUser.name }, у вас {`${numSavedArticles === 0 ? 'нет' : numSavedArticles} ${wordSaveAeticles}`}</p>
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
