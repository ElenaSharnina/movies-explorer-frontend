import React from "react";
import Lupa from "../../../images/searchLupa.svg";
import { useState } from 'react';

function SearchForm({ onSearch, onCheckClick, checked }) {
  //валидация 
  const [value1, setValue1] = useState('');
  const [isValid1, setValidity1] = useState(false);
  const [error1, setError1] = useState('');

  const handleInput1Change = (evt) => {
    const input = evt.target;
    setValue1(input.value);
    setValidity1(input.validity.valid);
    if (!isValid1) {
      setError1(input.validationMessage);
    } else {
      setError1('');
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSearch(value1);
  }

  return (
    <section className="searchform page__container">
      <div className="searchform__container">
        <form className="searchform__form" onSubmit={handleSubmit}>
          <div className="searchform__form-container">
            <input
              id='keyword'
              value={value1}
              onChange={handleInput1Change}
              type="search"
              placeholder="Фильм"
              className="searchform__input"
              autoComplete="off"
              required
              minLength="2"
            />
            <span className="searchform__error">{error1}</span>
            <img className="searchform__lupa" src={Lupa} alt="Здесь поиск" />
            <input type="submit" value=" " className="searchform__submit" disabled={!isValid1} />
          </div>
          <div className="checkbox__container">
            <label className="checkbox__label">
              <input type="checkbox" className="checkbox" onChange={onCheckClick} defaultChecked={checked} />
              <div className="checkbox__knobs"></div>
              <div className="checkbox__layer"></div>
            </label>
            <span className="checkbox__option">Короткометражки</span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
