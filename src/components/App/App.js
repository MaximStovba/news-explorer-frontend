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
  const history = useHistory();

  // сообзение об открытии мини-попапа
  function handleMiniClick() {
    closeAllPopups();
    setIsMiniOpen(true);
  }

  // обработчик открытия попапа "аутентификации"
  function handleLogInClick() {
    // открываем попап
    setIsLoginPopupOpen(true);
    // переадресовываем
    history.push('/sign-in');
  }

  // обработчик открытия попапа "регистрации"
  function handleSignUpLinkClick() {
    // открываем попап
    setIsRegisterPopupOpen(true);
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

  return (
    <div className="app">
    <Switch>
      {
      loggedIn
      ?
      <>
        <Route path="/saved-news"><SavedNews loggedIn={loggedIn} /></Route>
        <Route exact path="/"><Main loggedIn={loggedIn} /></Route>
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
      />
    </Route>
    <Route path="/sign-up">
      <Register
        isOpen={isRegisterPopupOpen}
        isMiniOpen={isMiniOpen}
        onClose={closeAllPopups}
        handleSignInLinkClick={handleSignInLinkClick}
        handleInfoLinkClick={handleInfoLinkClick}
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
