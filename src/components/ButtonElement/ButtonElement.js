// ButtonElement.js

import React from 'react';
import './ButtonElement.css';

function ButtonElement({
  isSbmtBtnActiv,
  btnName,
  btnText,
  link,
  linkName,
}) {
  return (
    <>
      <button
        disabled={isSbmtBtnActiv ? false : true}
        type="submit"
        className={`popup__btn popup__btn_action_${btnName} ${isSbmtBtnActiv ? '' : 'popup__btn_disabled'}`}>{btnText}
      </button>
      <h3
        className="login__hint">
        или <a className="login__link" href={link}>{linkName}</a>
      </h3>
    </>
  );
}

export default ButtonElement;
