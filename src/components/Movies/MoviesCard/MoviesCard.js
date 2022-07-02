import React from "react";

function MoviesCard(props) {

  const minToHours = (min) => {
    const hours = Math.trunc(min / 60);
    const minutes = min % 60;
    if (min < 60) {
      return `${min} мин.`;
    }
    if (minutes === 0) {
      return `${hours} ч.`;
    }
    return `${hours} ч. ${minutes} мин.`;
  };

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
      <div className="moviescard__text-container">
        <h2 className="moviescard__name">{props.card.nameRU}</h2>
        <p className="moviescard__duration">{minToHours(props.card.duration)}</p></div>
      <img className="moviescard__image" src={`https://api.nomoreparties.co${props.card.image.url}`} alt={props.card.nameRU} />
    </li>
  );
}

export default MoviesCard;
