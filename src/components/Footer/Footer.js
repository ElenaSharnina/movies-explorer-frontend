import React from "react";

function Footer() {
  return (
    <footer className="footer page__container">
      <h3 className="footer__desc">
        Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
      </h3>
      <div className="footer__info">
        <p className="footer__data">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__social-list">
          <li className="footer__social-item">
            <a
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="nooperen noreferrer"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__social-item">
            <a
              href="https://github.com/ElenaSharnina"
              target="_blank"
              rel="nooperen noreferrer"
            >
              Github
            </a>
          </li>
          <li className="footer__social-item">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="nooperen noreferrer"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
