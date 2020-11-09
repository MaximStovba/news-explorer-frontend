// PopupMenu.js

import React from 'react';
import '../PopupWithForm/PopupWithForm.css';
import './PopupMenu.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

function PopupMenu({
  onSubmit,
  isOpen,
  onClose,
  loggedIn,
  onSignOut,
  isMain,
  handleLogInClick,
  handleMenuOpenClick,
  handleMiniClick,
}){
  return (
    <section className={`popup popup-menu ${isOpen ? 'popup_opened' : ''}`}>
      <form
        name="mini"
        method="POST"
        onSubmit={onSubmit}
        action="#"
        className="popup__form popup__container popup__container_formtype_menu" noValidate>

        <Header
          loggedIn={loggedIn}
          isMain={isMain}
          handleLogInClick={handleLogInClick}
          isOpen={isOpen}
          onClose={onClose}
          handleMenuOpenClick={handleMenuOpenClick}
          handleMiniClick={handleMiniClick}
          // onSignOut={onSignOut}
        />

        <Navigation
          loggedIn={loggedIn}
          onSignOut={onSignOut}
          isMain={isMain}
          handleLogInClick={handleLogInClick}
          handleMiniClick={handleMiniClick}
          isOpen={isOpen}
          isVertical={true}
        />

      </form>
    </section>
  );
}

export default PopupMenu;
