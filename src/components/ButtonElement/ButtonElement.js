// ButtonElement.js

import React from 'react';
import './ButtonElement.css';

function ButtonElement({
  isSbmtBtnActiv,
  btnName,
  btnText,
}) {
  return (
    <>
      <span className="popup__btn-error">Такой пользователь уже есть!</span>
      <button
        disabled={isSbmtBtnActiv ? false : true}
        type="submit"
        className={`popup__btn popup__btn_action_${btnName} ${isSbmtBtnActiv ? '' : 'popup__btn_disabled'}`}>{btnText}
      </button>
    </>
  );
}

export default ButtonElement;
