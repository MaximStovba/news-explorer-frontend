// InputElement.js

import React from 'react';
import './InputElement.css';

function InputElement({
  // <h3> //
  inputTitle,
  // <input> //
  idInput,
  type,
  name,
  value,
  handleChangeInput,
  placeholder,
  minLength,
  maxLength,
  // <span> //
  idSpan,
  isInputValid,
  validationMessage,
  }) {
  return (
    <>
      <h3
        className="popup__subtitle">{inputTitle}
      </h3>
      <input
        type={type}
        name={name}
        // value={value}
        defaultValue={value}
        onChange={handleChangeInput}
        placeholder={placeholder}
        id={idInput}
        className="popup__text"
        minLength={minLength}
        maxLength={maxLength}
        required
        />
      <span
        className={`popup__text-error ${isInputValid ? '' : 'popup__text-error_active'}`}
        id={idSpan}>{validationMessage}
      </span>
    </>
  );
}

export default InputElement;
