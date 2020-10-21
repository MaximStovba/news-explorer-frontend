// Navigation.js

import React from 'react';
import './Navigation.css';

const userName = "Максим";

function Navigation({ loggedIn }) {
  return (
    <nav className={`navigation navigation_status_${loggedIn ? 'signin' : 'signout'}`}>
      <a href="/" className={
       `navigation__link
        navigation__link_style_${loggedIn ? 'black' : 'white'}
        navigation__link_type_main
        ${loggedIn ? '' : 'navigation__link_status_active'}`
      }>Главная</a>
  {
    loggedIn
    ? <a href="/" className={
       `navigation__link
        navigation__link_style_${loggedIn ? 'black' : 'white'}
        navigation__link_type_article
        ${loggedIn ? 'navigation__link_status_active' : ''}`
      }>Сохранённые&nbsp;статьи</a>
    : ""
  }
      <button type="button"
        className={
         `navigation__btn
          navigation__btn_style_${loggedIn ? 'black' : 'white'}
          ${loggedIn ? 'navigation__btn_logout' : ''}`
        }>{`${loggedIn ? userName : 'Авторизоваться'}`}</button>
    </nav>
  );
}

export default Navigation;
