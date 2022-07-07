import React from "react";
import { minToHours } from "../../utils/constans";

function SavedMoviesCard({ card, onMovieDelete }) {
  const handleDeleteMovieClick = () => {
    onMovieDelete(card._id);
  };

  return (
    <li className="moviescard">
      <button
        type="button"
        title="Удалить"
        className="moviescard__button_type_delete"
        onClick={handleDeleteMovieClick}
      ></button>
      <div className="moviescard__text-container">
        <h2 className="moviescard__name">{card.nameRU}</h2>
        <p className="moviescard__duration">{minToHours(card.duration)}</p>
      </div>
      <a
        href={card.trailerLink}
        className="moviescard__link"
        target="_blank"
        rel="nooperen noreferrer"
      >
        <img
          className="moviescard__image"
          src={card.image}
          alt={card.nameRU}
          key={card.id}
        />
      </a>
    </li>
  );
}

export default SavedMoviesCard;
