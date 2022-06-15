// Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import fb from '../../images/fb.svg';
import gh from '../../images/github.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2022 Supersite, Powered by News API</p>
        <ul className="footer__column-links">
          <li className="footer__column footer__column_name_main"><Link className="footer__link footer__link_name_main footer__link_type_text" to="/">Главная</Link></li>
          <li className="footer__column footer__column_name_yap"><a className="footer__link footer__link_name_yap footer__link_type_text" href="https://praktikum.yandex.ru" rel="noopener noreferrer" target="_blank">Яндекс.Практикум</a></li>
          <li className="footer__column footer__column_name_fb"><a className="footer__link footer__link_name_fb" href="https://www.facebook.com/maxim.stovba.16" rel="noopener noreferrer" target="_blank"><img className="footer__social-icon" src={fb} alt="GitHub"></img></a></li>
          <li className="footer__column footer__column_name_gh"><a className="footer__link footer__link_name_gh" href="https://github.com/MaximStovba/news-explorer-frontend" rel="noopener noreferrer" target="_blank"><img className="footer__social-icon" src={gh} alt="Facebook"></img></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
