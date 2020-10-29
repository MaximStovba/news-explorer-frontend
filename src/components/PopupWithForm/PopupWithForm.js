// PopupWithForm.js

import React from 'react';
import './PopupWithForm.css';

function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  onClose,
  onSubmit,
  isMiniOpen,
  handleOverlayClick,
  }) {
  return (
    <section className={`popup ${isMiniOpen ? 'popup-mini' : ''} popup_type_${name} ${isOpen || isMiniOpen ? 'popup_opened' : ''}`} onClick={handleOverlayClick}>
      <form
        name={name}
        method="POST"
        onSubmit={onSubmit}
        action="#"
        className={`popup__form popup__container ${isMiniOpen ? 'popup-mini__container' : ''} popup__container_formtype_${name}`} noValidate>

        <h2 className="popup__title">{title}</h2>

        {children}

        <button
          type="reset"
          className={`popup__btn-close ${isMiniOpen ? 'popup-mini__btn-close' : ''} popup__btn-close_formtype_${name}`} aria-label="Закрыть" onClick={onClose}></button>
      </form>
    </section>
  );
}

export default PopupWithForm;



