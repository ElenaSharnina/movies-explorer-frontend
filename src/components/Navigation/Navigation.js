import React from "react";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation__left"></div>
      <div className="navigation__right">
        <button className="navigation__button button">Регистрация</button>
        <button className="navigation__button button button_active">Войти</button>
      </div>
    </div>
  )
}

export default Navigation;