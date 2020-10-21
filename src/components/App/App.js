// App.js

import React from 'react';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

const loggedIn = false;

function App() {
  return (
    <div className="app">
    {
      loggedIn
      ? <SavedNews loggedIn={loggedIn} />
      : <Main loggedIn={loggedIn} />
    }
    </div>
  );
}

export default App;
