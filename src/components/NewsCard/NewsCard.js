// NewsCard.js

import React from 'react';
import * as utils from '../../utils/MyUtils';
import './NewsCard.css';
import like_marked from '../../images/btn_like_marked.svg';
import like_normal from '../../images/btn_like_normal.svg';
import like_hover from '../../images/btn_like_hover.svg';
import trash_enbl from '../../images/btn_trash_enbl.svg';
import trash_dsbl from '../../images/btn_trash_dsbl.svg';


function NewsCard({
  loggedIn,
  isMain,
  handleLogInClick,
  handleSaveCardBtnClick,
  handleDeleteCardBtnClick,
  card,
  question,
  savedCards,
}) {

  // сохранение карточки
  const [isLiked, setIsLiked] = React.useState(false);

  // переменная состояния (всплывающая подсказка)
  const [hintStyle, setHintStyle] = React.useState('');
  // задаем переменную стиля для всплывающей подсказки
  const style = { visibility: hintStyle };
  // переменная состояния (декор кнопки лайка)
  const [likeStyle, setLikeStyle] = React.useState('');
  // переменная состояния (декор кнопки треша)
  const [trashStyle, setTrashStyle] = React.useState('');

  React.useEffect(() => {
    function isSavedCard() {
      setIsLiked(savedCards.some(item => item.link === card.url));
    }
    if (isMain) {
      // проверяем сохранялась ли карточка ранее
      isSavedCard();
    }
  }, [isMain, savedCards, card.url]);

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

  // тогглим лайк
  function toggleLike() {
    setIsLiked(!isLiked);
  }

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
  function onBtnClick(e) {
    e.preventDefault();
    
    if (!loggedIn) {
      handleLogInClick();
    }
    if (loggedIn && !isLiked && isMain) {
      handleSaveCardBtnClick(card, question); // сохраняем статью
      toggleLike();
    }
    if (loggedIn && isLiked && isMain) { // ищем и удаляем статью из сохраненных
      // ищем нужную карточку
      const myCard = savedCards.filter(function (item) {
        return item.link === card.url;
      });
      handleDeleteCardBtnClick(myCard[0]._id); // удаляем статью
      toggleLike();
    }
    if (loggedIn && !isMain) {
      handleDeleteCardBtnClick(card._id); // удаляем статью
    }
  }

  return (
    <a className="card" href={`${isMain ? card.url : card.link}`} rel="noopener noreferrer" target="_blank">
      <img className="card__image" src={`${isMain ? card.urlToImage : card.image}`} alt={card.title} />
      <p className="card__date">{`${isMain ? utils.formatDate(card.publishedAt) : utils.formatDate(card.date)}`}</p>
      <h2 className="card__title card__title_overflow">{card.title}</h2>
      <p className="card__text card__text_overflow">{`${isMain ? card.description : card.text}`}</p>
      <p className="card__source">{`${isMain ? card.source.name : card.source}`}</p>
      <p className="card__keyword">{`${isMain ? utils.ucFirst(question) : utils.ucFirst(card.keyword)}`}</p>
      <p className="card__hint" style={ style }>{`${loggedIn ? likeMessage() : 'Войдите, чтобы сохранять статьи'}`}</p>
      <button
        type="button"
        className="card__btn"
        style={{ backgroundImage: `url(${ loggedIn && !isMain ? trashStyle : likeStyle })` }}
        onMouseEnter={ handleMouseEnter }
        onMouseLeave={ handleMouseLeave }
        onClick={onBtnClick}>
      </button>
    </a>
  );
}

export default NewsCard;
