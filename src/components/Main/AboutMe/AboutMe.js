import React from "react";
import Photo from "../../../images/myphoto.jpg";

function AboutMe() {
  return (
    <section className="aboutme page__container" id="student">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__two-columns">
        <div className="aborder-radius: 10px;">
          <h3 className="aboutme__name">Елена</h3>
          <p className="aboutme__job">Фронтенд-разработчик, 31 год</p>
          <p className="aboutme__desc">
            Я&nbsp;родилась в&nbsp;городе Йошкар-Ола, 10&nbsp;лет проживаю
            в&nbsp;Московской области. Закончила факультет международных
            отношений в&nbsp;МарГУ по&nbsp;специальности
            &laquo;Менеджмент&raquo;. Последние годы работала менеджером
            по&nbsp;продажам, а&nbsp;последние пару лет&nbsp;&mdash; менеджером
            по&nbsp;логистике и&nbsp;закупкам. Год назад пошла учиться
            в&nbsp;Яндекс.Практикум и&nbsp;полюбила кодить больше всего
            на&nbsp;свете. В&nbsp;свободное время занимаюсь английским, люблю
            экстримальные виды спорта: эндуро, сноуборд.
          </p>
          <ul className="aboutme__social-links">
            <li className="aboutme__social-link">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="nooperen noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="aboutme__social-link">
              <a
                href="https://github.com/ElenaSharnina"
                target="_blank"
                rel="nooperen noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="aboutme__photo" alt="моя фотография" src={Photo} />
      </div>
    </section>
  );
}

export default AboutMe;
