import React from "react";
import Lupa from "../../../images/searchLupa.svg"

function SearchForm() {
  return (
    <section className="searchform page__container">
      <div className="searchform__container">
        <form className="searchform__form" >
          <input type="search" placeholder="Фильм" className="searchform__input" autoComplete="off" required />
          <img className="searchform__lupa" src={Lupa} alt="Здесь поиск" />
          <input type="submit" value=" " className="searchform__submit" />
          <div className="checkbox__container">
            <label className="checkbox__label">
              <input type="checkbox" className="checkbox" />
              <div className="checkbox__knobs"></div>
              <div className="checkbox__layer"></div>
            </label>
            <span className="checkbox__option">Короткометражки</span>
          </div>
        </form>
      </div>
    </section >
  )
}

export default SearchForm;