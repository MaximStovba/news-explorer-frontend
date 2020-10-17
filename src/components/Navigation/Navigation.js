// Navigation.js

import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <div className="navigation navigation_status_signin">
      <h2 className="navigation__link navigation__link_type_main">Главная</h2>
      <h2 className="navigation__link navigation__link_type_article">Сохранённые&nbsp;статьи</h2>
      <h2 className="navigation__btn">Авторизоваться</h2>
    </div>
  );
}

export default Navigation;
