// PopupMini.js

import React from 'react';
import '../PopupWithForm/PopupWithForm.css';
import './PopupMini.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function PopupMini({
  onSubmit,
  isOpen,
  onClose,
  loggedIn,
  isMain,
  handleLogInClick,
  handleMenuOpenClick,
}){
  return (
    <section className={`popup popup__mini ${isOpen ? 'popup_opened' : ''}`}>
      <form
        name="mini"
        method="POST"
        onSubmit={onSubmit}
        action="#"
        className="popup__form popup__container popup__container_formtype_mini" noValidate>

        <Header
          loggedIn={loggedIn}
          isMain={isMain}
          handleLogInClick={handleLogInClick}
          isOpen={isOpen}
          onClose={onClose}
          handleMenuOpenClick={handleMenuOpenClick}
        />

        <Navigation
          loggedIn={loggedIn}
          isMain={isMain}
          handleLogInClick={handleLogInClick}
          isOpen={isOpen}
          isVertical={true}
        />

      </form>
    </section>
  );
}

export default PopupMini;
