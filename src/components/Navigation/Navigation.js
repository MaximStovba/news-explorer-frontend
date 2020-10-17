// Navigation.js

import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navigation navigation_status_signin">
      <a href="/" className="navigation__link navigation__link_type_main navigation__link_status_active">Главная</a>
      <a href="/" className="navigation__link navigation__link_type_article">Сохранённые&nbsp;статьи</a>
      <button type="button" className="navigation__btn navigation__btn_logout">Авторизоваться</button>
    </nav>
  );
}

export default Navigation;
