import React from "react";

function Navigation({ loggedIn, isVisited }) {
  return (
    <div className="navigation" >
      {
        loggedIn ?
          (<>
            <div className="navigation__left">
              <button className={`navigation__button button ${isVisited ? '' : 'button_disactive-text'}`}>Фильмы</button>
              <button className={`navigation__button button ${isVisited ? 'button_disactive-text' : ''}`}>Сохраненные фильмы</button>
            </div>
            <div className="navigation__right">
              <button className="navigation__button button navigation__button_type_account">Аккаунт</button>
            </div >
          </>
          )
          :
          (<>
            <div className="navigation__left"></div>
            <div className="navigation__right">
              <button className="navigation__button button">Регистрация</button>
              <button className="navigation__button button button_active">Войти</button>
            </div >
          </>
          )
      }
    </div >
  )
}

export default Navigation;