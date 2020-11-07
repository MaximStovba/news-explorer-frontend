// SearchForm.js

import React from 'react';
import './SearchForm.css';

function SearchForm({handleSearchBtnClick}) {

  // стейт переменная
  const [question, setQuestion] = React.useState('');
  const [placeholder, setPlaceholder] = React.useState('Введите тему новости');

  // обработчик сабмита формы
  function sbmtSearchBtn(e) {
    // запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    if (question === '') {
      // Если в поле не введён текст, выводится ошибка «Нужно ввести ключевое слово».
      setPlaceholder('Нужно ввести ключевое слово');
    } else {
      // обработчик кнопки сабмита
      handleSearchBtnClick(question);
    }
  }

  return (
    <form onSubmit={sbmtSearchBtn} name="search" method="POST" action="/" className="search-form" noValidate>
      <h1 className="search-form__title">Что творится в мире?</h1>
      <p className="search-form__text">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
      <input type="text"
        name="text"
        defaultValue={question}
        onChange={ e => setQuestion(e.target.value) }
        placeholder={placeholder}
        className={`search-form__input ${question === '' && placeholder !== 'Введите тему новости' ? 'search-form__input_err' : ''}`}
        minLength="2"
        maxLength="20"
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
