// App.js

import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';



  function App() {

  const loggedIn = false;
  const [isLoginPopupOpen, setIsLoginPopupOpen] = React.useState(false);
  const history = useHistory();

  // обработчик открытия попапа "добавления новой карточки"
  function handleLogInClick() {
    // открываем попап
    setIsLoginPopupOpen(true);
    // переадресовываем на окно аутентификации
    history.push('/sign-in');
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
      </Route>
      }
    </Switch>
    <Route path="/sign-in">
      <Login
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
      />
    </Route>
    </div>
  );
}

export default App;
