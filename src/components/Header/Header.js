import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, isVisited }) {
  return (
    <header className="header page__container">
      <NavLink to="/"><img src={logo} className="logo header__logo" alt="Логотип" /></NavLink>
      <Navigation loggedIn={loggedIn} isVisited={isVisited} />
    </header>
  )
}

export default Header;