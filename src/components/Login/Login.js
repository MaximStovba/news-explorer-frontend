// Login.js

import React from 'react';
import './Login.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import InputElement from '../InputElement/InputElement';
import ButtonElement from '../ButtonElement/ButtonElement';

function Login({
  isOpen,
  isMiniOpen,
  onClose,
  handleSignUpLinkClick,
  authorizationUser,
  //onLogin,
}) {

  // стейт переменные
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // обработчик сабмита формы
  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // сохраняем значения полей
    // onLogin({email, password});
    console.log(email);
    console.log(password);
    // авторизуем
    authorizationUser();
    // сбрасываем все поля формы
    e.target.reset();
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
        <ButtonElement
          isSbmtBtnActiv={true}
          name="signin"
          btnText="Войти"
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
      />
  );
}

export default Login;
