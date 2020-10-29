// InfoTooltip.js

import React from 'react';
import './InfoTooltip.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function InfoTooltip({
  isOpen,
  isMiniOpen,
  onClose,
  handleOverlayClick,
  // handleKeyPress,
}) {
  return (
    <PopupWithForm
      name="info"
      title="Пользователь успешно зарегистрирован!"
      children={
      <>
        <h3 className="info-tooltip" onClick={onClose}>Войти</h3>
      </>
      }
      isOpen={isOpen}
      isMiniOpen={isMiniOpen}
      onClose={onClose}
      handleOverlayClick={handleOverlayClick}
      // handleKeyPress={handleKeyPress}
    />
  );
}

export default InfoTooltip;
