// SearchForm.js

import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <form name="search" method="POST" action="#" className="search-form" noValidate>
      <h2 className="search-form__title">Что творится в мире?</h2>
      <p className="search-form__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <input
        type="text"
        name="search"
        placeholder="Введите тему новости"
        id="search-input"
        className="search-form__input"
        minLength="2"
        maxLength="30"
        required
      />
      <button
          type="submit"
          className="search-form__btn">
          Искать
      </button>
    </form>
  );
}

export default SearchForm;
