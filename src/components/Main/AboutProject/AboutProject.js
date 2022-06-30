import React from "react";

function AboutProject() {
  return (
    <section className="aboutproject page__container" id="aboutproject">
      <h2 className="aboutproject__title">О проeкте</h2>
      <ul className="aboutproject__two-columns">
        <li className="aboutproject__column">
          <h3 className="aboutproject__column-title">
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className="aboutproject__description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
        </li>
        <li className="aboutproject__column">
          <h3 className="aboutproject__column-title">
            На&nbsp;выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className="aboutproject__description">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className="aboutproject__timing">
        <li className="aboutproject__timing-item">
          <h4 className="aboutproject__timing-title aboutproject__timing-title_color_green">
            1 неделя
          </h4>
          <p className="aboutproject__timing-desc">Back-end</p>
        </li>
        <li className="aboutproject__timing-item">
          <h4 className="aboutproject__timing-title">4 недели</h4>
          <p className="aboutproject__timing-desc">Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
