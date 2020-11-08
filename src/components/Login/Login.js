// Login.js

import React from 'react';
import './Login.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import InputElement from '../InputElement/InputElement';
import ButtonElement from '../ButtonElement/ButtonElement';

function Login({
  onLogin,
  isOpen,
  isMiniOpen,
  onClose,
  handleSignUpLinkClick,
  // authorizationUser,
  handleOverlayClick,
  // handleKeyPress,
  // валидация
  handleChangeEmailLogin,
  handleChangePasswordLogin,
  isEmailValid,
  isPasswordValid,
  emailValidationMessage,
  passwordValidationMessage,
  isSbmtBtnActiv,
  sbmtBtnErrMessage,
  showSbmtError,
}) {

  // стейт переменные
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // обработчик сабмита формы
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // сохраняем значения полей
    onLogin({email, password});
    // сбрасываем все поля формы
    e.target.reset();
  }

  // обработчик изменения поля email
  function handleChangeEmail(e) {
    setEmail(e.target.value);
    handleChangeEmailLogin(e);
  }
  // обработчик изменения поля password
  function handleChangePassword(e) {
    setPassword(e.target.value);
    handleChangePasswordLogin(e);
  }

  return (
    <PopupWithForm
      name="login"
      title="Вход"
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
        <ButtonElement
          isSbmtBtnActiv={isSbmtBtnActiv}
          name="signin"
          btnText="Войти"
          errorMessage={sbmtBtnErrMessage}
          showSbmtError={showSbmtError}
        />
        <h3
          className="login__hint">
          или <span className="login__link" onClick={handleSignUpLinkClick}>Зарегистрироваться</span>
        </h3>
      </>
      }
      isOpen={isOpen}
      isMiniOpen={isMiniOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      handleOverlayClick={handleOverlayClick}
      // handleKeyPress={handleKeyPress}
      />
  );
}

export default Login;
