// Register.js

import React from 'react';
import './Register.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import InputElement from '../InputElement/InputElement';
import ButtonElement from '../ButtonElement/ButtonElement';

function Register({
  isOpen,
  isMiniOpen,
  onClose,
  handleSignInLinkClick,
  handleInfoLinkClick,
  //валидация
  handleChangeEmailRegister,
  handleChangePasswordRegister,
  handleChangeNameRegister,
  isEmailValid,
  isPasswordValid,
  isNameValid,
  emailValidationMessage,
  passwordValidationMessage,
  nameValidationMessage,
  isSbmtBtnActiv,
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

  // обработчик изменения поля email
  function handleChangeEmail(e) {
    setEmail(e.target.value);
    handleChangeEmailRegister(e);
  }
  // обработчик изменения поля password
  function handleChangePassword(e) {
    setPassword(e.target.value);
    handleChangePasswordRegister(e);
  }
  // обработчик изменения поля name
  function handleChangeName(e) {
    setName(e.target.value);
    handleChangeNameRegister(e);
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
          handleChangeInput={handleChangeEmail}
          placeholder="Введите почту"
          minLength="2"
          maxLength="30"
          // <span> //
          idSpan="email-input-error"
          isInputValid={isEmailValid}
          validationMessage={emailValidationMessage}
        />
        <InputElement
          // <h3> //
          inputTitle="Пароль"
          // <input> //
          idInput="password-input"
          type="password"
          name="password"
          value={password}
          handleChangeInput={handleChangePassword}
          placeholder="Введите пароль"
          minLength="8"
          maxLength="24"
          // <span> //
          idSpan="password-input-error"
          isInputValid={isPasswordValid}
          validationMessage={passwordValidationMessage}
        />
        <InputElement
          // <h3> //
          inputTitle="Имя"
          // <input> //
          idInput="name-input"
          type="text"
          name="name"
          value={name}
          handleChangeInput={handleChangeName}
          placeholder="Введите свое имя"
          minLength="2"
          maxLength="20"
          // <span> //
          idSpan="name-input-error"
          isInputValid={isNameValid}
          validationMessage={nameValidationMessage}
        />
        <ButtonElement
          isSbmtBtnActiv={isSbmtBtnActiv}
          name="signup"
          btnText="Зарегистрироваться"
          errorMessage="Такой пользователь уже есть!"
          isError={isSbmtBtnActiv}
        />
        <h3
          className="register__hint">
          или <span className="register__link" onClick={handleSignInLinkClick}>Войти</span>
        </h3>
      </>
      }
      isOpen={isOpen}
      isMiniOpen={isMiniOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      />
  );
}

export default Register;
