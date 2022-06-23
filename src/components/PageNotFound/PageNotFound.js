import React from 'react';
import { NavLink } from 'react-router-dom';
import NotFound from '../../images/notfound.svg'
import './PageNotFound.css';


function PageNotFound() {
  return (
    <section className="not-found">
      <img className="not-found__image" src={NotFound} alt="Страница не найдена" />
      <p className="not-found__text">
        Страница не найдена
      </p>
      <NavLink className="button button_type_to-main" to="/">Назад</NavLink>
    </section>
  )
}

export default PageNotFound; 