// App.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';



  function App() {

  const loggedIn = false;
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);

  // обработчик открытия попапа "добавления новой карточки"
  function handleLogInClick() {
    console.log('open');
    // открываем попап
    setIsLoginPopupOpen(true);
  }

  // обработчик закрытия всех попапов
  function closeAllPopups() {
    // закрываем попап
    setIsLoginPopupOpen(false);
  }


  return (
    <div className="app">
    <Switch>
      {
      loggedIn
      ?
      <>
        <Route path="/saved-news"><SavedNews loggedIn={loggedIn} /></Route>
        <Route path="/"><Main loggedIn={loggedIn} /></Route>
      </>
      :
      <Route path="/">
        <Main
          loggedIn={loggedIn}
          handleLogInClick={handleLogInClick}
        />
        <Login
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
        />
      </Route>
      }
    </Switch>
    </div>
  );
}

export default App;
