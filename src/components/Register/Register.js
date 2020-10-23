// Register.js

import React from 'react';
import './Register.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import InputElement from '../InputElement/InputElement';
import ButtonElement from '../ButtonElement/ButtonElement';

function Register({
  isOpen,
  onClose,
  handleSignInLinkClick,
  handleInfoLinkClick,
  //onLogin,
}) {

  // стейт переменные
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  // обработчик сабмита формы регистрации
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // сохраняем значения полей
    // onLogin({email, password});
    console.log(email);
    console.log(password);
    console.log(name);
    // открываем попап информации
    handleInfoLinkClick();
    // сбрасываем все поля формы
    e.target.reset();
  }

  return (
    <PopupWithForm
      name="register"
      title="Регистрация"
      children={
      <>
        <InputElement
          // <h3> //
          inputTitle="Email"
          // <input> //
          idInput="email-input"
          type="email"
          name="email"
          value={email}
          handleChangeInput={e => setEmail(e.target.value)}
          placeholder="Введите почту"
          minLength="2"
          maxLength="30"
          // <span> //
          idSpan="email-input-error"
          isInputValid={false}
          validationMessage="Ошибка валидации!"
        />
        <InputElement
          // <h3> //
          inputTitle="Пароль"
          // <input> //
          idInput="password-input"
          type="password"
          name="password"
          value={password}
          handleChangeInput={e => setPassword(e.target.value)}
          placeholder="Введите пароль"
          minLength="8"
          maxLength="24"
          // <span> //
          idSpan="password-input-error"
          isInputValid={false}
          validationMessage="Ошибка валидации!"
        />
        <InputElement
          // <h3> //
          inputTitle="Имя"
          // <input> //
          idInput="name-input"
          type="text"
          name="name"
          value={name}
          handleChangeInput={e => setName(e.target.value)}
          placeholder="Введите свое имя"
          minLength="2"
          maxLength="20"
          // <span> //
          idSpan="name-input-error"
          isInputValid={false}
          validationMessage="Ошибка валидации!"
        />
        <ButtonElement
          isSbmtBtnActiv={true}
          name="signup"
          btnText="Зарегистрироваться"
        />
        <h3
          className="register__hint">
          или <span className="register__link" onClick={handleSignInLinkClick}>Войти</span>
        </h3>
      </>
      }
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      />
  );
}

export default Register;
