// Login.js

import React from 'react';
import './Login.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login({isOpen, onClose}) {

  // обработчик сабмита формы
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // сбрасываем все поля формы
    e.target.reset();
  }

  return (
    <PopupWithForm
      name="login"
      title="Вход"
      children=""
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      />
  );
}

export default Login;
