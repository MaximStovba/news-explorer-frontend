// NewsCard.js

import React from 'react';
import './NewsCard.css';
import img from '../../images/card_image.png';
import like_marked from '../../images/btn_like_marked.svg';
import like_normal from '../../images/btn_like_normal.svg';
import like_hover from '../../images/btn_like_hover.svg';
import trash_enbl from '../../images/btn_trash_enbl.svg';
import trash_dsbl from '../../images/btn_trash_dsbl.svg';


function NewsCard({ loggedIn, isLiked, isMain, handleLogInClick }) {
  // переменная состояния (всплывающая подсказка)
  const [hintStyle, setHintStyle] = React.useState('');
  // задаем переменную стиля для всплывающей подсказки
  const style = { visibility: hintStyle };
  // переменная состояния (декор кнопки лайка)
  const [likeStyle, setLikeStyle] = React.useState('');
  // переменная состояния (декор кнопки треша)
  const [trashStyle, setTrashStyle] = React.useState('');

  // проставляем на карточках статус выбрана / не выбрана
  React.useEffect(() => {
    function decorateCardBtn() {
      if (loggedIn) {setTrashStyle(trash_dsbl)}
      if (isLiked && loggedIn) {
        setLikeStyle(like_marked);
      } else {
        setLikeStyle(like_normal);
      }
    }
    decorateCardBtn();
  }, [isLiked, loggedIn]);

  // обрабатываем событие наведения курсора мыши
  function handleMouseEnter() {
    setHintStyle('visible');
    if (loggedIn) {setTrashStyle(trash_enbl)}
    if (!isLiked) { setLikeStyle(like_hover) }
    if (isLiked && !loggedIn) { setLikeStyle(like_hover) }
  }

  // обрабатываем событие снятия курсора мыши
  function handleMouseLeave() {
    setHintStyle('hidden');
    if (loggedIn) {setTrashStyle(trash_dsbl)}
    if (!isLiked) {setLikeStyle(like_normal)}
    if (isLiked && !loggedIn) { setLikeStyle(like_normal) }
  }

  // выбор надписи подсказки для кнопки лайка
  function likeMessage() {
    if (isMain && !isLiked) {
      return 'Сохранить'
    }
    return 'Убрать из сохранённых'
  }

  // обрабатываем нажатие кнопки лайка
  function onBtnClick() {
    if (!loggedIn) {
      handleLogInClick();
    }
  }

  return (
    <div className="card">
      <img className="card__image" src={img} alt="img" />
      <p className="card__date">2 августа, 2019</p>
      <h2 className="card__title card__title_overflow">Лесные огоньки: история одной фотографии</h2>
      <p className="card__text card__text_overflow">Фотограф отвлеклась от освещения суровой политической реальности Мексики чтобы запечатлеть ускользающую красоту. Чтобы запечатлеть ускользающую красоту.</p>
      <p className="card__source">Медуза</p>
      <p className="card__keyword">Природа</p>
      <p className="card__hint" style={ style }>{`${loggedIn ? likeMessage() : 'Войдите, чтобы сохранять статьи'}`}</p>
      <button
        type="button"
        className="card__btn"
        style={{ backgroundImage: `url(${ loggedIn && !isMain ? trashStyle : likeStyle })` }}
        onMouseEnter={ handleMouseEnter }
        onMouseLeave={ handleMouseLeave }
        onClick={onBtnClick}>
      </button>
    </div>
  );
}

export default NewsCard;
