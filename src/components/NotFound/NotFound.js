// NotFound.js

import React from 'react';
import './NotFound.css';
import not_found from '../../images/not-found.svg';

function NotFound({ notFoundErrMessage }) {
  return (
    <section className="not-found">
      <img className="not-found__img" alt="not_found" src={not_found} />
      <p className="not-found__title">Ничего не найдено</p>
      <p className="not-found__text">{notFoundErrMessage}</p>
    </section>
  );
}

export default NotFound;
