// Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
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

  function onClickMini() {
    handleMiniClick();
    handleLogInClick();
  }
  function logOut() {
    // завершение сессии
    onSignOut();
  }
  return (
    <nav className={`navigation ${isVertical ? 'navigation_vertical' : ''} navigation_status_${loggedIn ? 'signin' : 'signout'}`}>
      <Link to="/" className={
       `navigation__link
        navigation__link_style_${!isMain ? 'black' : 'white'}
        navigation__link_type_main
        ${!isMain ? '' : 'navigation__link_status_active'}`
      }>Главная</Link>

      {
        loggedIn
        ? <>
          <Link to="/saved-news" className={
            `navigation__link
              navigation__link_style_${!isMain ? 'black' : 'white'}
              navigation__link_type_article
              ${!isMain ? 'navigation__link_status_active' : ''}`
          }>Сохранённые&nbsp;статьи</Link>
          <button type="button"
            onClick={logOut}
            className={
            `navigation__btn
              navigation__btn_style_${!isMain ? 'black' : 'white'}
              ${loggedIn ? 'navigation__btn_logout' : ''}
              ${loggedIn && isMain ? 'navigation__btn_logout_main' : ''}`
            }>{`${loggedIn ? currentUser.name : 'Авторизоваться'}`}
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
          }>{`${loggedIn ? currentUser.name : 'Авторизоваться'}`}
        </button>
      }

      {
        isVertical && loggedIn
        ?
        <nav className="nav-vertical">
          <Link to="/" className="nav-vertical__link nav-vertical__link_type_main">Главная</Link>
          <Link to="/saved-news" className="nav-vertical__link nav-vertical__link_type_article">Сохранённые&nbsp;статьи</Link>
          <button onClick={logOut} className="nav-vertical__btn nav-vertical__btn_logout" type="button">{currentUser.name}</button>
        </nav>
        : ""
      }
      {
        isVertical && !loggedIn
        ?
        <nav className="nav-vertical">
          <a href="/" className="nav-vertical__link nav-vertical__link_type_main">Главная</a>
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
