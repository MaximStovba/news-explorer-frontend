// ButtonElement.js

import React from 'react';
import './ButtonElement.css';

function ButtonElement({
  isSbmtBtnActiv,
  btnName,
  btnText,
  errorMessage,
  isError,
}) {
  return (
    <>
      <span className={`${isError ? 'popup__btn-error' : ''}`}>{errorMessage}</span>
      <button
        disabled={isSbmtBtnActiv ? false : true}
        type="submit"
        className={`popup__btn popup__btn_action_${btnName} ${isSbmtBtnActiv ? '' : 'popup__btn_disabled'}`}>{btnText}
      </button>
    </>
  );
}

export default ButtonElement;
