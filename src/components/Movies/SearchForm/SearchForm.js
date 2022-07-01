import React from "react";
import Lupa from "../../../images/searchLupa.svg";
import { useState } from 'react';

function SearchForm({ onSearch, onCheckClick, checked }) {
  //валидация 
  const [value, setValue] = useState('');
  const [isValid, setValidity] = useState(false);
  const [error, setError] = useState('');

  const handleInput1Change = (evt) => {
    const input = evt.target;
    setValue(input.value);
    setValidity(input.validity.valid);
    if (!isValid & input.value.length < 1) {
      setError('Нужно ввести ключевое слово');
    }
    else if (!isValid) {
      setError(input.validationMessage);
    }
    else {
      setError('');
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSearch(value);
  }

  return (
    <section className="searchform page__container">
      <div className="searchform__container">
        <form className="searchform__form" onSubmit={handleSubmit}>
          <div className="searchform__form-container">
            <input
              id='keyword'
              value={value}
              onChange={handleInput1Change}
              type="search"
              placeholder="Фильм"
              className="searchform__input"
              autoComplete="off"
              required
              minLength="2"
            />
            <span className="searchform__error">{error}</span>
            <img className="searchform__lupa" src={Lupa} alt="Здесь поиск" />
            <input type="submit" value=" " className="searchform__submit" disabled={!isValid} />
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
