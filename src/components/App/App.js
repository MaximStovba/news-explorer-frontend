// App.js

import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';

import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

  function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const [isMiniOpen, setIsMiniOpen] = React.useState(false);
  const [isRegisterPopupOpen, setIsRegisterPopupOpen] = React.useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const [isPopupMenuOpen, setIsPopupMenuOpen] = React.useState(false);
  // Validation Email
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [emailValidationMessage, setEmailValidationMessage] = React.useState('Введите данные');
  // Validation Password
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);
  const [passwordValidationMessage, setPasswordValidationMessage] = React.useState('Введите данные');
  // Validation Name
  const [isNameValid, setIsNameValid] = React.useState(false);
  const [nameValidationMessage, setNameValidationMessage] = React.useState('Введите данные');

  // SubmitButton
  const [isSbmtBtnActiv, setIsSbmtBtnActiv] = React.useState(false);
  // History
  const history = useHistory();

  // сообщение об открытии мини-попапа
  function handleMiniClick() {
    closeAllPopups();
    setIsMiniOpen(true);
  }

  // обработчик открытия попапа "аутентификации"
  function handleLogInClick() {
    // открываем попап
    setIsLoginPopupOpen(true);
    // скрываем ошибки валидации при открытии
    setIsEmailValid(true);
    setIsPasswordValid(true);
    // делаем кнопку сабмита неактивной при открытии
    setIsSbmtBtnActiv(false);
    // переадресовываем
    history.push('/sign-in');
  }

  // обработчик открытия попапа "регистрации"
  function handleSignUpLinkClick() {
    // открываем попап
    setIsRegisterPopupOpen(true);
    // скрываем ошибки валидации при открытии
    setIsEmailValid(true);
    setIsPasswordValid(true);
    setIsNameValid(true);
    // делаем кнопку сабмита неактивной при открытии
    setIsSbmtBtnActiv(false);
    // переадресовываем
    history.push('/sign-up');
  }

  // обработчик открытия попапа "вертикального меню"
  function handleMenuOpenClick() {
    // открываем попап
    setIsPopupMenuOpen(true);
  }

  function handleSignInLinkClick() {
    handleLogInClick();
  }

  // обработчик открытия попапа "информации об успешной регистрации"
  function handleInfoLinkClick() {
    setIsInfoTooltipPopupOpen(true);
    // переадресовываем
    history.push('/success');
  }

  // авторизация
  function authorizationUser() {
    setLoggedIn(true);
    // переадресовываем
    history.push('/saved-news');
  }

  // обработчик закрытия всех попапов
  function closeAllPopups() {
    // закрываем попап
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
    setIsPopupMenuOpen(false);
    setIsMiniOpen(false);
  }

  // -------- валидация полей ввода -----------------
  // ----------------------------------------------------
  // -------- форма аутентификации / регистрации -----------

  // управление состоянием кнопки сабмита
  React.useEffect(() => {
  if (isLoginPopupOpen || isMiniOpen) {
    // попап аутентификации
    if (isEmailValid === true && isPasswordValid === true) {
      setIsSbmtBtnActiv(true);
    } else {
      setIsSbmtBtnActiv(false);
    }
    // делаем кнопку сабмита при открытии неактивной
    if (isEmailValid === true &&
      (emailValidationMessage === 'Введите данные' ||
      passwordValidationMessage === 'Введите данные'))
      {
        setIsSbmtBtnActiv(false);
      }
  }
  if (isRegisterPopupOpen) {
    // попап регистрации
    if (isEmailValid === true && isPasswordValid === true && isNameValid === true ) {
      setIsSbmtBtnActiv(true);
    } else {
      setIsSbmtBtnActiv(false);
    }
    // делаем кнопку сабмита при открытии неактивной
    if (isEmailValid === true &&
      (emailValidationMessage === 'Введите данные' ||
      passwordValidationMessage === 'Введите данные' ||
      nameValidationMessage === 'Введите данные'))
      {
        setIsSbmtBtnActiv(false);
      }
  }
  }, [
    isLoginPopupOpen,
    isMiniOpen,
    isRegisterPopupOpen,
    isEmailValid,
    isPasswordValid,
    isNameValid,
    emailValidationMessage,
    passwordValidationMessage,
    nameValidationMessage]);

  // Обработчик изменения инпута "email"
  function handleChangeEmail(e) {
    if (e.target.validity.valid) {
      setIsEmailValid(true);
      setEmailValidationMessage('0');
    } else {
      setIsEmailValid(false);
      setEmailValidationMessage(e.target.validationMessage);
    }
  }
  // Обработчик изменения инпута "password"
  function handleChangePassword(e) {
    if (e.target.validity.valid) {
      setIsPasswordValid(true);
      setPasswordValidationMessage('0');
    } else {
      setIsPasswordValid(false);
      setPasswordValidationMessage(e.target.validationMessage);
    }
  }
    // Обработчик изменения инпута "name"
  function handleChangeName(e) {
    if (e.target.validity.valid) {
      setIsNameValid(true);
      setNameValidationMessage('0');
    } else {
      setIsNameValid(false);
      setNameValidationMessage(e.target.validationMessage);
    }
  }
  // -------- форма аутентификации / регистрации ----------
  // ----------------------------------------


  return (
    <div className="app">
    <Switch>
      {
      loggedIn
      ?
      <>
        <Route path="/saved-news">
          <SavedNews
            isOpen={isPopupMenuOpen}
            onClose={closeAllPopups}
            loggedIn={loggedIn}
            isMiniOpen={isMiniOpen}
            handleLogInClick={handleLogInClick}
            handleMiniClick={handleMiniClick}
            handleMenuOpenClick={handleMenuOpenClick}
          />
        </Route>
        <Route exact path="/">
          <Main
            loggedIn={loggedIn}
            handleLogInClick={handleLogInClick}
            handleMenuOpenClick={handleMenuOpenClick}
            isOpen={isPopupMenuOpen}
            isMiniOpen={isMiniOpen}
            onClose={closeAllPopups}
            handleMiniClick={handleMiniClick}
          />
        </Route>
      </>
      :
      <Route path="/">
        <Main
          loggedIn={loggedIn}
          handleLogInClick={handleLogInClick}
          handleMenuOpenClick={handleMenuOpenClick}
          isOpen={isPopupMenuOpen}
          isMiniOpen={isMiniOpen}
          onClose={closeAllPopups}
          handleMiniClick={handleMiniClick}
        />
      </Route>
      }
    </Switch>
    <Route path="/sign-in">
      <Login
        isOpen={isLoginPopupOpen}
        isMiniOpen={isMiniOpen}
        onClose={closeAllPopups}
        handleSignUpLinkClick={handleSignUpLinkClick}
        authorizationUser={authorizationUser}
        // валидация
        handleChangeEmailLogin={handleChangeEmail}
        handleChangePasswordLogin={handleChangePassword}
        isEmailValid={isEmailValid}
        isPasswordValid={isPasswordValid}
        emailValidationMessage={emailValidationMessage}
        passwordValidationMessage={passwordValidationMessage}
        isSbmtBtnActiv={isSbmtBtnActiv}
      />
    </Route>
    <Route path="/sign-up">
      <Register
        isOpen={isRegisterPopupOpen}
        isMiniOpen={isMiniOpen}
        onClose={closeAllPopups}
        handleSignInLinkClick={handleSignInLinkClick}
        handleInfoLinkClick={handleInfoLinkClick}
        // валидация
        handleChangeEmailRegister={handleChangeEmail}
        handleChangePasswordRegister={handleChangePassword}
        handleChangeNameRegister={handleChangeName}
        isEmailValid={isEmailValid}
        isPasswordValid={isPasswordValid}
        isNameValid={isNameValid}
        emailValidationMessage={emailValidationMessage}
        passwordValidationMessage={passwordValidationMessage}
        nameValidationMessage={nameValidationMessage}
        isSbmtBtnActiv={isSbmtBtnActiv}
      />
    </Route>
    <Route path="/success">
      <InfoTooltip
        isOpen={isInfoTooltipPopupOpen}
        isMiniOpen={isMiniOpen}
        onClose={closeAllPopups}
      />
    </Route>
    </div>
  );
}

export default App;
