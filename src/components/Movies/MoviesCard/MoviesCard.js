import React from "react";

function MoviesCard({ name, duration, link, isSaved, isInSaveMovies }) {
  return (
    <li className="moviescard">
      {isInSaveMovies ? (
        <button type="button" className="moviescard__button_type_delete"></button>
      ) : (
        <button
          type="button"
          className={`${isSaved
            ? "moviescard__button moviescard__button_active"
            : "moviescard__button"
            }`}
        ></button>
      )}
      <h2 className="moviescard__name">{name}</h2>
      <p className="moviescard__duration">{duration}</p>
      <img className="moviescard__image" src={link} alt={name} />
    </li>
  );
}

export default MoviesCard;
