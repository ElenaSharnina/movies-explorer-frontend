import React from "react";

function MoviesCard(props) {
  return (
    <li className="moviescard">
      {props.isInSaveMovies ? (
        <button type="button" className="moviescard__button_type_delete"></button>
      ) : (
        <button
          type="button"
          className={`${props.isSaved
            ? "moviescard__button moviescard__button_active"
            : "moviescard__button"
            }`}
        ></button>
      )}
      <h2 className="moviescard__name">{props.card.nameRU}</h2>
      <p className="moviescard__duration">{props.card.duration}</p>
      <img className="moviescard__image" src={`https://api.nomoreparties.co${props.card.image.url}`} alt={props.card.nameRU} />
    </li>
  );
}

export default MoviesCard;
