import React from "react";

function MoviesCard({ name, duration, link, isSaved }) {
  return (
    <li className="moviescard">
      <button
        type="button"
        className={`${isSaved ? "moviescard__button moviescard__button_active" : "moviescard__button"
          }`}
      ></button>
      <h2 className="moviescard__name">{name}</h2>
      <p className="moviescard__duration">{duration}</p>
      <img className="moviescard__image" src={link} alt={name} />
    </li>
  );
}

export default MoviesCard;
