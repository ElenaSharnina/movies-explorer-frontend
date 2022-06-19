import React from "react";
import LinkImage from "../../../images/link.svg"

function Portfolio() {
  return (
    <div className="portfolio page__container">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a href="ссылка на статичный сайт" className="portfoio__link">
            <p className="portfolio__item-name">Статичный сайт</p>
            <img className="porfolio__item-link" src={LinkImage} alt="ссылка" />
          </a>
        </li>
        <li className="portfolio__list-item">
          <a href="ссылка на адаптивный сайт" className="portfoio__link">
            <p className="portfolio__item-name"> Адаптивный сайт</p>
            <img className="porfolio__item-link" src={LinkImage} alt="ссылка" />
          </a>
        </li>
        <li className="portfolio__list-item" >
          <a href="ссылка на приложение" className="portfoio__link" >
            <p className="portfolio__item-name">Одностраничное приложение</p>
            <img className="porfolio__item-link" src={LinkImage} alt="ссылка" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
