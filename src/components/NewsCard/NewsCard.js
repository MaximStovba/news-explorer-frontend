// NewsCard.js

import React from 'react';
import './NewsCard.css';
import dateFormat from 'dateformat';
// import img from '../../images/card_image.png';
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

  React.useEffect(() => {
    // определяем сохранялась ли карточка ранее
    function isSavedCard() {
      if (isMain) {
        setIsLiked(savedCards.some(item => item.link === card.url));
      } else {
        setIsLiked(true);
      }
    }
    isSavedCard();
  }, [isMain, savedCards, card.url]);

  // тогглим лайк
  function toggleLike() {
    setIsLiked(!isLiked);
  }

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
    if (loggedIn && !isLiked && isMain) {
      handleSaveCardBtnClick(card, question);
      toggleLike();
    }
    if (loggedIn && isLiked && isMain) {
      toggleLike();
      console.log('Привет!'); // написать !!! ---------------------
    }
    if (loggedIn && !isMain) {
      handleDeleteCardBtnClick(card._id);
    }
  }

  // делаем первый символ строки заглавный
  function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
  }

  // форматируем дату
  function formatDate(date) {
    dateFormat.masks.hammerTime = 'd mmmm, yyyy';
    dateFormat.i18n = {
      dayNames: [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
      ],
      monthNames: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
          'января', 'февраля', 'марта', 'апреля', 'майя', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
      ],
      timeNames: [
        'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
      ]
    };

    return dateFormat(date, "hammerTime");
  }

  return (
    <div className="card">
      <img className="card__image" src={`${isMain ? card.urlToImage : card.image}`} alt="img" />
      <p className="card__date">{`${isMain ? formatDate(card.publishedAt) : formatDate(card.date)}`}</p>
      <h2 className="card__title card__title_overflow">{card.title}</h2>
      <p className="card__text card__text_overflow">{`${isMain ? card.description : card.text}`}</p>
      <p className="card__source">{`${isMain ? card.source.name : card.source}`}</p>
      <p className="card__keyword">{`${isMain ? ucFirst(question) : ucFirst(card.keyword)}`}</p>
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
