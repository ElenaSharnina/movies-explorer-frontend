import React from "react";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <div className="header page__container">
      <img src={logo} className="header__logo" alt="Логотип" />
      <Navigation />
    </div>
  )
}

export default Header;