import React from "react";
import { NavLink } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";

function Navigation({ loggedIn, isVisited }) {
  const isMobile = useMediaPredicate("(max-width: 768px)");
  const [isBurgerOpen, SetIsBurgerOpen] = React.useState(false);

  function handleOpenBurger() {
    SetIsBurgerOpen(true);
  }

  function handleCloseBurger() {
    SetIsBurgerOpen(false);
  }

  return (
    <>
      {loggedIn ? (
        <>
          {isMobile ? (
            <nav className="navigation navigation-burger">
              <button className="burger" onClick={handleOpenBurger}></button>
            </nav>
          ) : (
            <nav className="navigation navigation-dextop">
              <div className="navigation__left">
                <NavLink to="/movies">
                  <button
                    className={`navigation__button button ${isVisited ? "" : "button_disactive-text"
                      }`}
                  >
                    Фильмы
                  </button>
                </NavLink>
                <NavLink to="/saved-movies">
                  <button
                    className={`navigation__button button ${isVisited ? "button_disactive-text" : ""
                      }`}
                  >
                    Сохраненные фильмы
                  </button>
                </NavLink>
              </div>
              <div className="navigation__right">
                <NavLink to="/profile">
                  <button className="navigation__button button navigation__button_type_account">
                    Аккаунт
                  </button>
                </NavLink>
              </div>
            </nav>
          )}
        </>
      ) : (
        <nav className="navigation">
          <div className="navigation__left"></div>
          <div className="navigation__right">
            <NavLink to="/signup">
              <button className="navigation__button button">Регистрация</button>
            </NavLink>
            <NavLink to="/signin">
              <button className="navigation__button button button_active">
                Войти
              </button>
            </NavLink>
          </div>
        </nav>
      )}
      <div
        className={`burger-menu ${isBurgerOpen ? "burger-menu_opened" : " "}`}
      >
        <div className="burger-menu__container">
          <button
            className="burger-menu__close-btn"
            onClick={handleCloseBurger}
          />
          <div className="burger-menu__links">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "burger-menu__link burger-menu__link_active"
                  : "burger-menu__link"
              }
              to="/"
            >
              Главная
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "burger-menu__link burger-menu__link_active"
                  : "burger-menu__link"
              }
              to="/movies"
            >
              Фильмы
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "burger-menu__link burger-menu__link_active"
                  : "burger-menu__link"
              }
              to="/saved-movies"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <NavLink
            to="/profile"
            className="burger-menu__link burger-menu__link_type_account"
          >
            Аккаунт
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navigation;
