// Navigation.js

import React from 'react';
import './Navigation.css';

const userName = "Максим";

function Navigation({ loggedIn, isMain, handleLogInClick }) {
  return (
    <nav className={`navigation navigation_status_${loggedIn ? 'signin' : 'signout'}`}>
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
        }>{`${loggedIn ? userName : 'Авторизоваться'}`}</button>
    </nav>
  );
}

export default Navigation;
