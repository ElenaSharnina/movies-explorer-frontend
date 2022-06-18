import React from "react";

function Promo() {
  return (
    <div className="promo page__container">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <nav className="promo__nav">
        <button className="button promo__button">О проекте</button>
        <button className="button promo__button">Технологии</button>
        <button className="button promo__button">Студент</button>
      </nav>
    </div>
  )
}

export default Promo;