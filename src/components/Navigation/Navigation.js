// Navigation.js

import React from 'react';
// импортируем объект контекста
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Navigation.css';

function Navigation({
  loggedIn,
  onSignOut,
  isMain,
  handleLogInClick,
  isOpen,
  isMiniOpen,
  onClose,
  isVertical,
  handleMenuOpenClick,
  handleMiniClick,
}) {

  // Подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);
  const userName = currentUser.name;

  function onClickMini() {
    handleLogInClick();
    handleMiniClick();
  }
  function logOut() {
    // завершение сессии
    onSignOut();
  }
  return (
    <nav className={`navigation ${isVertical ? 'navigation_vertical' : ''} navigation_status_${loggedIn ? 'signin' : 'signout'}`}>
      <a href="/" className={
       `navigation__link
        navigation__link_style_${!isMain ? 'black' : 'white'}
        navigation__link_type_main
        ${!isMain ? '' : 'navigation__link_status_active'}`
      }>Главная</a>

      {
        loggedIn
        ? <>
          <a href="/saved-news" className={
            `navigation__link
              navigation__link_style_${!isMain ? 'black' : 'white'}
              navigation__link_type_article
              ${!isMain ? 'navigation__link_status_active' : ''}`
          }>Сохранённые&nbsp;статьи</a>
          <button type="button"
            onClick={logOut}
            className={
            `navigation__btn
              navigation__btn_style_${!isMain ? 'black' : 'white'}
              ${loggedIn ? 'navigation__btn_logout' : ''}
              ${loggedIn && isMain ? 'navigation__btn_logout_main' : ''}`
            }>{`${loggedIn ? userName : 'Авторизоваться'}`}
          </button>
          </>
        :
        <button type="button"
          onClick={handleLogInClick}
          className={
          `navigation__btn
            navigation__btn_style_${!isMain ? 'black' : 'white'}
            ${loggedIn ? 'navigation__btn_logout' : ''}
            ${loggedIn && isMain ? 'navigation__btn_logout_main' : ''}`
          }>{`${loggedIn ? userName : 'Авторизоваться'}`}
        </button>
      }

      {
        isVertical && loggedIn
        ?
        <nav className="nav-vertical">
          <a href="/" className="nav-vertical__link nav-vertical__link_type_main">Главная</a>
          <a href="/saved-news" className="nav-vertical__link nav-vertical__link_type_article">Сохранённые&nbsp;статьи</a>
          <button onClick={logOut} className="nav-vertical__btn" type="button">{userName}</button>
        </nav>
        : ""
      }
      {
        isVertical && !loggedIn
        ?
        <nav className="nav-vertical">
          <a href="/" className="nav-vertical__link nav-vertical__link_type_main">Главная</a>
          <a href="/" className="nav-vertical__link nav-vertical__link_type_article">Сохранённые&nbsp;статьи</a>
          <button onClick={onClickMini} className="nav-vertical__btn" type="button">Авторизоваться</button>
        </nav>
        : ""
      }
      {
        !isVertical && !isOpen
        ? <button onClick={handleMenuOpenClick} className={`navigation__mini-btn ${isMiniOpen ? 'navigation__mini-btn_hidden' : ''} navigation__mini-btn_type_open-${isMain ? 'white' : 'black'}`}></button>
        : ""
      }
      {
        !isVertical && isOpen
        ? <button onClick={onClose} className="navigation__mini-btn navigation__mini-btn_type_close-white"></button>
        : ""
      }
    </nav>
  );
}

export default Navigation;
