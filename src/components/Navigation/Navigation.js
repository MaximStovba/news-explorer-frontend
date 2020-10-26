// Navigation.js

import React from 'react';
import './Navigation.css';

const userName = "Максим";

function Navigation({
  loggedIn,
  isMain,
  handleLogInClick,
  isOpen,
  isVertical,
}) {
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
        ? <a href="/saved-news" className={
          `navigation__link
            navigation__link_style_${!isMain ? 'black' : 'white'}
            navigation__link_type_article
            ${!isMain ? 'navigation__link_status_active' : ''}`
          }>Сохранённые&nbsp;статьи</a>
        : ""
      }
      <button type="button"
        onClick={handleLogInClick}
        className={
         `navigation__btn
          navigation__btn_style_${!isMain ? 'black' : 'white'}
          ${loggedIn ? 'navigation__btn_logout' : ''}
          ${loggedIn && isMain ? 'navigation__btn_logout_main' : ''}`
        }>{`${loggedIn ? userName : 'Авторизоваться'}`}
      </button>
  {
    isVertical
    ? <nav className="nav-vertical">
      <a href="/" className="nav-vertical__link nav-vertical__link_type_main">Главная</a>
      <a href="/saved-news" className="nav-vertical__link nav-vertical__link_type_article">Сохранённые&nbsp;статьи</a>
      <button className="nav-vertical__btn" type="button">Авторизоваться</button>
    </nav>

    : <button className={`navigation__mini-btn navigation__mini-btn_type_${isOpen ? 'close' : 'open'}`}></button>
  }
    </nav>
  );
}

export default Navigation;
