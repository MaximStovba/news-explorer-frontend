// NewsCardList.js

import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList({ loggedIn, isMain, handleLogInClick, cards, question }) {

  const isLiked = false;

  return (
    <form
      name="cardlist"
      method="POST"
      action="/"
      className={`news-cardlist news-cardlist_status_${loggedIn ? 'login' : 'logout'}`}>

      <h2 className={
       `news-cardlist__titel
        news-cardlist__titel_status_${loggedIn ? 'login' : 'logout'}
       `}>Результаты поиска
      </h2>
      <div className={`news-cardlist__container news-cardlist__container_status_${loggedIn ? 'login' : 'logout'}`}>
        {
          cards.map(item => <NewsCard key={Math.random().toString(36).substr(2, 9)}
            card={item}
            loggedIn={loggedIn}
            isLiked={isLiked}
            isMain={isMain}
            handleLogInClick={handleLogInClick}
            question={question} />)
        }
      </div>
      <button
          type="button"
          className={
         `news-cardlist__btn
          news-cardlist__btn_status_${loggedIn ? 'login' : 'logout'}
         `}>Показать еще
      </button>
    </form>
  );
}

export default NewsCardList;
