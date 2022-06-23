import React from "react";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <nav className="promo__nav">
        <a href="#aboutproject">
          <button className="button promo__button">О проекте</button>
        </a>
        <a href="#techs">
          <button className="button promo__button">Технологии</button>
        </a>
        <a href="#student">
          <button className="button promo__button">Студент</button>
        </a>
      </nav>
    </section>
  );
}

export default Promo;
