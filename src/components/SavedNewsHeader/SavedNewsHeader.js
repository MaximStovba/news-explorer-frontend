// SavedNewsHeader.js

import React from 'react';
// импортируем объект контекста
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as utils from '../../utils/MyUtils';
import './SavedNewsHeader.css';


function SavedNewsHeader({ numSavedArticles, cards }) {

  // Подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);
  const [sortAllKeyWords, setSortAllKeyWords] = React.useState([]);
  const [firstKeyWord, setFirstKeyWord] = React.useState('');
  const [secondKeyWord, setSecondKeyWord] = React.useState('');
  const [numOtherKeyWord, setNumOtherKeyWord] = React.useState(0);

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

      setSortAllKeyWords(sortKeyWords);
      setNumOtherKeyWord(sortKeyWords.length - 2);
    }
    if (cards.length > 0) {
      analyticsKeyWord();
    }

  }, [numSavedArticles, cards]);

  // установка ключевых слов
  React.useEffect(() => {
    function setKeyWords() {
      if (numOtherKeyWord >= -1 && numOtherKeyWord < 1) {
        // возвращаем 1 слово
        setFirstKeyWord(sortAllKeyWords[0][0]);
      }
      if (numOtherKeyWord >= 1) {
        // возвращаем 2 слова
        setFirstKeyWord(sortAllKeyWords[0][0]);
        setSecondKeyWord(sortAllKeyWords[1][0]);
      }
    }
    if (sortAllKeyWords.length > 0) {
      setKeyWords();
      console.log(numOtherKeyWord);
    }

  }, [numOtherKeyWord, sortAllKeyWords]);


  const numAllKeyWord = numOtherKeyWord + 2;

  const wordSaveAeticles = utils.sklonenie(numSavedArticles, ['сохранённая статья', 'сохранённые статьи', 'сохранённых статей']);
  const endNumOtherKeyWords = utils.sklonenie(numOtherKeyWord, ['-у', '-м', '-и']);
  const wordAnother = utils.sklonenie(numOtherKeyWord, ['другому', 'другим', 'другим']);


  return (
    <header className="saved-news-header">
      <div className="saved-news-header__container">
        <h2 className="saved-news-header__title">Сохранённые статьи</h2>
        <p className="saved-news-header__statistics">{ currentUser.name }, у вас {`${numSavedArticles === 0 ? 'нет' : numSavedArticles} ${wordSaveAeticles}`}</p>
        {
          numAllKeyWord >= 3 && numSavedArticles > 0
          ? <p className="saved-news-header__keyword">По ключевым словам:
            <span className="saved-news-header__span-accent">{` ${utils.ucFirst(firstKeyWord)},`}</span>
            <span className="saved-news-header__span-accent">{` ${utils.ucFirst(secondKeyWord)} `}</span>
            и
            <span className="saved-news-header__span-accent">{` ${numOtherKeyWord}${endNumOtherKeyWords} ${wordAnother}`}</span>
            </p>
          : ''
        }
        {
          numAllKeyWord === 2 && numSavedArticles > 0
          ? <p className="saved-news-header__keyword">По ключевым словам:
            <span className="saved-news-header__span-accent">{` ${utils.ucFirst(firstKeyWord)},`}</span>
            <span className="saved-news-header__span-accent">{` ${utils.ucFirst(secondKeyWord)} `}</span>
            </p>
          : ''
        }
        {
          numAllKeyWord === 1 && numSavedArticles > 0
          ? <p className="saved-news-header__keyword">По ключевым словам:
            <span className="saved-news-header__span-accent">{` ${utils.ucFirst(firstKeyWord)}`}</span>
            </p>
          : ''
        }
        {
          numSavedArticles === 0
          ? <p className="saved-news-header__keyword"></p>
          : ''
        }
      </div>
    </header>
  );
}

export default SavedNewsHeader;
