import React from "react";
import { NavLink } from "react-router-dom";

function Navigation({ loggedIn, isVisited }) {
  return (
    <div className="navigation" >
      {
        loggedIn ?
          (<>
            <div className="navigation__left">
              <NavLink to="/movies"><button className={`navigation__button button ${isVisited ? '' : 'button_disactive-text'}`}>Фильмы</button></NavLink>
              <NavLink to="/saved-movies"><button className={`navigation__button button ${isVisited ? 'button_disactive-text' : ''}`}>Сохраненные фильмы</button></NavLink>
            </div>
            <div className="navigation__right">
              <NavLink to="/profile"><button className="navigation__button button navigation__button_type_account">Аккаунт</button></NavLink>
            </div >
          </>
          )
          :
          (<>
            <div className="navigation__left"></div>
            <div className="navigation__right">
              <NavLink to="/signup"><button className="navigation__button button">Регистрация</button></NavLink>
              <NavLink to="/signin"><button className="navigation__button button button_active">Войти</button></NavLink>
            </div >
          </>
          )
      }
    </div >
  )
}

export default Navigation;