// NewsCardList.js

import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './NewsCardList.css';

function NewsCardList() {
  return (
    <form name="cardlist" method="POST" action="#" className="news-cardlist">
      <h2 className="news-cardlist__titel">Результаты поиска</h2>
      <div className="news-cardlist__container">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <button
          type="submit"
          className="news-cardlist__btn">
          Показать еще
      </button>
    </form>
  );
}

export default NewsCardList;
