// SavedNewsHeader.js

import React from 'react';
// импортируем объект контекста
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as utils from '../../utils/MyUtils';
import './SavedNewsHeader.css';


function SavedNewsHeader({ numSavedArticles, cards }) {

  // Подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);
  const [firstKeyWord, setFirstKeyWord] = React.useState('');
  const [secondKeyWord, setSecondKeyWord] = React.useState('');
  const [numOtherKeyWord, setNumOtherKeyWord] = React.useState('');

  // анализ ключевых слов
  React.useEffect(() => {
    function analyticsKeyWord() {
      // формируем массив из ключевых слов
      const keyWordArr = cards.map(function (item) {
        return item.keyword;
      });
      // группируем и определяем количество повторов
      const uniqKeyWords = keyWordArr.reduce(function(acc, el) {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
      }, {});
      // преобразуем объект в массив
      const myKeyWords = Object.entries(uniqKeyWords);
      // сортируем массив по убыванию
      const sortKeyWords = myKeyWords.sort(function(a, b) {
        return b[1] - a[1];
      });
      // возвращаем слова / статистику
      setFirstKeyWord(sortKeyWords[0][0]);
      setSecondKeyWord(sortKeyWords[1][0]);
      setNumOtherKeyWord(sortKeyWords.length - 2);
    }
    if (cards.length > 0) {
      analyticsKeyWord();
    }
  }, [numSavedArticles, cards]);

  const wordSaveAeticles = utils.sklonenie(numSavedArticles, ['сохранённая статья', 'сохранённые статьи', 'сохранённых статей']);


  return (
    <header className="saved-news-header">
      <div className="saved-news-header__container">
        <h2 className="saved-news-header__title">Сохранённые статьи</h2>
        <p className="saved-news-header__statistics">{ currentUser.name }, у вас {`${numSavedArticles === 0 ? 'нет' : numSavedArticles} ${wordSaveAeticles}`}</p>
        {
          numSavedArticles === 0
          ? ''
          : <p className="saved-news-header__keyword">По ключевым словам:
            <span className="saved-news-header__span-accent">{` ${utils.ucFirst(firstKeyWord)},`}</span>
            <span className="saved-news-header__span-accent">{` ${utils.ucFirst(secondKeyWord)} `}</span>
            и
            <span className="saved-news-header__span-accent">{` ${numOtherKeyWord}-м другим`}</span>
            </p>
        }
      </div>
    </header>
  );
}

export default SavedNewsHeader;
