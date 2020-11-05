// NewsCardList.js

import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({
  loggedIn,
  isMain,
  handleLogInClick,
  handleSaveCardBtnClick,
  handleDeleteCardBtnClick,
  handleSearchEndDeleteCard,
  cards,
  question,
  savedCards,
}) {

  // счетчик
  const [increment, setIncrement] = React.useState(3);
  // показ кнопки
  const [isBtnVisible, setIsBtnVisible] = React.useState(true);
  // массив карт для показа
  const [cardsToShow, setCardsToShow] = React.useState([]);


  React.useEffect(() => {
    if (isMain) {
      if (increment >= cards.length) {
        setIsBtnVisible(false); // скрываем кнопку
      }
      if (cards.length > 3) {
        setCardsToShow(cards.slice(0, increment));
      } else {
        setCardsToShow(cards.slice(0));
      }
    } else {
      setIsBtnVisible(false); // скрываем кнопку
      setCardsToShow(cards.slice(0)); // показываем все статьи
    }

  }, [isMain, increment, cards]);

  // обработчик нажатия кнопки "показать еще"
  function handleBtnShowMoreClick() {
    // увеличиваем счетчик
    setIncrement(increment + 3);
  }

  // находим и удаляем ранее сохраненную статью
  function handleSearchEndDeleteCardBtnClick(cardUrl) {
    // ищем нужную карточку
    const myCard = savedCards.filter(function (card) {
      return card.link === cardUrl;
    });
    // удаляем карточку
    handleSearchEndDeleteCard(myCard[0]._id);
  }

  return (
    <form
      name="cardlist"
      method="POST"
      action="/"
      className={`news-cardlist news-cardlist_status_${!isBtnVisible ? 'login' : 'logout'}`}>

      <h2 className={
       `news-cardlist__titel
        news-cardlist__titel_status_${!isBtnVisible ? 'login' : 'logout'}
       `}>Результаты поиска
      </h2>
      <div className={`news-cardlist__container news-cardlist__container_status_${!isBtnVisible ? 'login' : 'logout'}`}>
        {
          cardsToShow.map(item => <NewsCard key={Math.random().toString(36).substr(2, 9)}
            card={item}
            savedCards={savedCards}
            loggedIn={loggedIn}
            isMain={isMain}
            handleLogInClick={handleLogInClick}
            handleSaveCardBtnClick={handleSaveCardBtnClick}
            handleDeleteCardBtnClick={handleDeleteCardBtnClick}
            handleSearchEndDeleteCardBtnClick={handleSearchEndDeleteCardBtnClick}
            question={question}
            />)
        }
      </div>
      <button
          type="button"
          onClick={handleBtnShowMoreClick}
          className={
         `news-cardlist__btn
          news-cardlist__btn_status_${!isBtnVisible ? 'login' : 'logout'}
         `}>Показать еще
      </button>
    </form>
  );
}

export default NewsCardList;
