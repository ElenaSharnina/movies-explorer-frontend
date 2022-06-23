import React from "react";
import Photo from "../../../images/myphoto.jpg";

function AboutMe() {
  return (
    <section className="aboutme page__container" id="student">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__two-columns">
        <div className="aborder-radius: 10px;">
          <h3 className="aboutme__name">Елена</h3>
          <p className="aboutme__job">Фронтенд-разработчик, 30 лет</p>
          <p className="aboutme__desc">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="aboutme__social-links">
            <li className="aboutme__social-link">
              <a href="https://facebook.com" target="_blank" rel="nooperen noreferrer">Facebook</a>
            </li>
            <li className="aboutme__social-link">
              <a href="https://github.com/ElenaSharnina" target="_blank" rel="nooperen noreferrer">Github</a>
            </li>
          </ul>
        </div>
        <img className="aboutme__photo" alt="моя фотография" src={Photo} />
      </div>
    </section>
  );
}

export default AboutMe;
