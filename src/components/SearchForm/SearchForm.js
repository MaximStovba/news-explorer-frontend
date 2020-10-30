// SearchForm.js

import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form name="search" method="POST" action="/" className="search-form" noValidate>
      <h1 className="search-form__title">Что творится в мире?</h1>
      <p className="search-form__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <input type="text"
        name="text"
        placeholder="Введите тему новости"
        className="search-form__input"
        minLength="2"
        maxLength="30"
        required
      />
      <button
          type="button"
          className="search-form__btn">
          Искать
      </button>
    </form>
  );
}

export default SearchForm;
