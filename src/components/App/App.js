// App.js

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

const loggedIn = true;

function App() {
  return (
    <div className="app">
    {
      loggedIn
      ?
      <Switch>
        <Route path="/saved-news"><SavedNews loggedIn={loggedIn} /></Route>
        <Route path="/"><Main loggedIn={loggedIn} /></Route>
      </Switch>
      : <Route path="/"><Main loggedIn={loggedIn} /></Route>
    }
    </div>
  );
}

export default App;
