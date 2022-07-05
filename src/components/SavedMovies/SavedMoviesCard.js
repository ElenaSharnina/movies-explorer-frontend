import React from "react";

function SavedMoviesCard(props) {

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
  const handleDeleteMovieClick = () => {
    props.onMovieDelete(props.card._id);
  };
  return (

    <li className="moviescard">
      <button type="button" className="moviescard__button_type_delete" onClick={handleDeleteMovieClick}></button>
      <div className="moviescard__text-container">
        <h2 className="moviescard__name">{props.card.nameRU}</h2>
        <p className="moviescard__duration">{minToHours(props.card.duration)}</p></div><a href={props.card.trailerLink} className="moviescard__link" target="_blank"
          rel="nooperen noreferrer">
        <img className="moviescard__image" src={props.card.image} alt={props.card.nameRU} key={props.card.id} />
      </a>
    </li >

  );
}

export default SavedMoviesCard;