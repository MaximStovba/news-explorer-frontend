// InfoTooltip.js

import React from 'react';
import './InfoTooltip.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function InfoTooltip({
  isOpen,
  isMiniOpen,
  onClose,
  handleOverlayClick,
  handleLogInClick,
}) {
  return (
    <PopupWithForm
      name="info"
      title="Пользователь успешно зарегистрирован!"
      children={
      <>
        <h3 className="info-tooltip" onClick={handleLogInClick}>Войти</h3>
      </>
      }
      isOpen={isOpen}
      isMiniOpen={isMiniOpen}
      onClose={onClose}
      handleOverlayClick={handleOverlayClick}
    />
  );
}

export default InfoTooltip;
