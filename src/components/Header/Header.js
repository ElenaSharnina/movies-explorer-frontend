import React from "react";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, isVisited }) {
  return (
    <div className="header page__container">
      <img src={logo} className="logo header__logo" alt="Логотип" />
      <Navigation loggedIn={loggedIn} isVisited={isVisited} />
    </div>
  )
}

export default Header;