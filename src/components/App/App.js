// App.js

import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import validator from 'validator';
import Login from '../Login/Login';
import Register from '../Register/Register';

import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'; // импортируем HOC
import * as auth from '../../utils/MainApi'; // импортируем api
import * as newsApi from '../../utils/NewsApi'; // импортируем api
// импортируем объект контекста
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
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
  const [sbmtBtnErrMessage, setSbmtBtnErrMessage] = React.useState('Сообщение об ошибке');
  const [showSbmtError, setShowSbmtError] = React.useState(false);

  // Search
  const [isSearch, setIsSearch] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);

  // History
  const history = useHistory();

  // Loader
  const [loaded, setLoaded] = React.useState(false);

  // UserData
  const [currentUser, setCurrentUser] = React.useState({});

  // ------- авторизация и регистрация ----------- //
  // Описаны обработчики: onRegister, onLogin и onSignOut.
  // Эти обработчики переданы в соответствующие компоненты: Register.js, Login.js, Header.js.

  // const history = useHistory();
  // const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    tokenCheck();
  }, []); // loggedIn

  // если у пользователя есть токен в localStorage,
  // функция проверит валидность токена и
  // вернет данные пользователя
  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      // проверим токен
      auth.getContent(token)
        .then((data) => {
          if (data) {
          // записываем данные пользователя
          setCurrentUser(data.data);
          // console.log(data.data);
          // авторизуем пользователя
          setLoggedIn(true);
          // убираем индикатор загрузки
          // setLoaded(false);
          // переадресовываем пользователя на "главную"
          // history.push('/');
          }
        })
        // если токен не найден
        .catch(err => console.log(err));
    } else {
      // убираем индикатор загрузки
      // setLoaded(false);
    }
  }

  // onRegister
  function onRegister({email, password, name}) {
    return auth.register(email, password, name)
    .then((res) => {
      // console.log(res);
      if (res.status !== 400) {
        // разрешаем открытие попапа "результат регистрации"
        handleInfoLinkClick();
        return true;
      } else {
        throw new Error('Не корректно заполнено одно из полей!');
      }
    })
    .then((res) => {
      if (res) {
        history.push('/sign-in');
      }
    })
    .catch(err => console.log(err));
  }

  // onLogin
  function onLogin({email, password}) {
    auth.authorize(email, password)
    .then((res) => {
      if(res && res.token) {
        // логгинимся
        setLoggedIn(true);
        return true;
      } else {
        if (res.status === 400) {throw new Error('Не передано одно из полей!');}
        if (res.status === 401) {throw new Error('Пользователь с email не найден!');}
      }
    })
    .then(() => {
      // переадресовываем пользователя на "главную"
      history.push('/');
    })
    // если пользователь не найден
    .catch((err) => {
      setSbmtBtnErrMessage(err.message);
      setShowSbmtError(true);
      // console.log(err.message);
    });
  }

  // onSignOut
  function onSignOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/');
  }

  // ------- авторизация и регистрация ----------- //



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

  // обработчик закрытия всех попапов
  function closeAllPopups() {
    // закрываем попап
    setIsLoginPopupOpen(false);
    setIsRegisterPopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
    setIsPopupMenuOpen(false);
    setIsMiniOpen(false);
    // переадресовываем
    history.push('/');
  }

  // обработчик клика по оверлей модального окна
  function handleOverlayClick(e) {
    if (e.target.classList.contains('popup')) {
      closeAllPopups();
    }
  }

  // обработчик нажатия клавиши
  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      // console.log(e.keyCode);
      closeAllPopups();
    }
  }

  // обработчик нажатия кнопки поиска статей
  function handleSearchBtnClick(q) {
    const from = '2020-11-01';
    const to = '2020-11-01';

    if (q !== '') {
      setIsSearch(true);
      // включаем "лоадер"
      setLoaded(true);

      newsApi.getInitialCards(q, from, to)
        .then((data) => {
          if (data) { console.log(data.articles.length) }
          // если статьи не найдены - выводим сообщение
          if (data.articles.length === 0) { setIsNotFound(true) }
          else { setIsNotFound(false) }
        })
        // если новости не найдены
        .catch(err => console.log(err))
        .finally(() => {
          // скрываем "лоадер"
          setLoaded(false);
        });
    }
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
    setShowSbmtError(false);
    if (e.target.validity.valid && validator.isEmail(e.target.value)) {
      setIsEmailValid(true);
      setEmailValidationMessage('|');
    } else {
      setIsEmailValid(false);
      setEmailValidationMessage(e.target.validationMessage);
    }
  }
  // Обработчик изменения инпута "password"
  function handleChangePassword(e) {
    setShowSbmtError(false);
    if (e.target.validity.valid) {
      setIsPasswordValid(true);
      setPasswordValidationMessage('|');
    } else {
      setIsPasswordValid(false);
      setPasswordValidationMessage(e.target.validationMessage);
    }
  }
    // Обработчик изменения инпута "name"
  function handleChangeName(e) {
    setShowSbmtError(false);
    if (e.target.validity.valid) {
      setIsNameValid(true);
      setNameValidationMessage('|');
    } else {
      setIsNameValid(false);
      setNameValidationMessage(e.target.validationMessage);
    }
  }
  // -------- форма аутентификации / регистрации ----------
  // ------------------------------------------------


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app" onKeyDown={handleKeyDown}>
      <Switch>
        <Route path="/saved-news">
          <ProtectedRoute path="/saved-news" component={SavedNews}
            loggedIn={true}
            onSignOut={onSignOut}
            isOpen={isPopupMenuOpen}
            onClose={closeAllPopups}
            isMiniOpen={isMiniOpen}
            handleLogInClick={handleLogInClick}
            handleMiniClick={handleMiniClick}
            handleMenuOpenClick={handleMenuOpenClick}
            setIsMiniOpen={setIsMiniOpen}
          />
        </Route>
        <Route path="/">
          <Main
            loggedIn={loggedIn}
            onSignOut={onSignOut}
            handleLogInClick={handleLogInClick}
            handleMenuOpenClick={handleMenuOpenClick}
            isOpen={isPopupMenuOpen}
            isMiniOpen={isMiniOpen}
            onClose={closeAllPopups}
            handleMiniClick={handleMiniClick}
            handleSearchBtnClick={handleSearchBtnClick}
            isSearch={isSearch}
            loaded={loaded}
            isNotFound={isNotFound}
          />
        </Route>
      </Switch>
      <Route path="/sign-in">
        <Login
          onLogin={onLogin}
          isOpen={isLoginPopupOpen}
          isMiniOpen={isMiniOpen}
          onClose={closeAllPopups}
          handleSignUpLinkClick={handleSignUpLinkClick}
          // authorizationUser={authorizationUser}
          handleOverlayClick={handleOverlayClick}
          // handleKeyPress={handleKeyPress}
          // валидация
          handleChangeEmailLogin={handleChangeEmail}
          handleChangePasswordLogin={handleChangePassword}
          isEmailValid={isEmailValid}
          isPasswordValid={isPasswordValid}
          emailValidationMessage={emailValidationMessage}
          passwordValidationMessage={passwordValidationMessage}
          isSbmtBtnActiv={isSbmtBtnActiv}
          sbmtBtnErrMessage={sbmtBtnErrMessage}
          showSbmtError={showSbmtError}
        />
      </Route>
      <Route path="/sign-up">
        <Register
          onRegister={onRegister}
          isOpen={isRegisterPopupOpen}
          isMiniOpen={isMiniOpen}
          onClose={closeAllPopups}
          handleSignInLinkClick={handleSignInLinkClick}
          // handleInfoLinkClick={handleInfoLinkClick}
          handleOverlayClick={handleOverlayClick}
          // handleKeyPress={handleKeyPress}
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
          handleOverlayClick={handleOverlayClick}
          // handleKeyPress={handleKeyPress}
        />
      </Route>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
