// NewsCard.js

import React from 'react';
import './NewsCard.css';
import img from '../../images/card_image.png';
import btn_icon from '../../images/btn_like_marked.svg';

function NewsCard() {
  return (
    <div className="card">
      <img className="card__image" src={img} alt="img" />
      <p className="card__date">2 августа, 2019</p>
      <h2 className="card__title card__title_overflow">Лесные огоньки: история одной красивой фотографии</h2>
      <p className="card__text card__text_overflow">Фотограф отвлеклась от освещения суровой политической реальности Мексики , чтобы запечатлеть ускользающую красоту.</p>
      <p className="card__source">Медуза</p>
      <p className="card__keyword">Природа</p>
      <p className="card__hint">Войдите, чтобы сохранять статьи</p>
      <button className="card__btn"><img className="card__btn-icon" src={btn_icon} alt="btn_icon" /></button>
    </div>
  );
}

export default NewsCard;
