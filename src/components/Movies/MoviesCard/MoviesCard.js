import React from "react";

function MoviesCard(props) {
  const [movieIsSaved, setMovieIsSaved] = React.useState(false);

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

  function handleSaveClick() {
    setMovieIsSaved(!movieIsSaved);
    props.onSaveClick({
      nameRU: props.card.nameRU,
      image: `https://api.nomoreparties.co${props.card.image.url}`,
      trailerLink: props.card.trailerLink,
      duration: props.card.duration,
    });
  }
  return (

    <li className="moviescard">
      <a href={props.card.trailerLink} className="moviescard__link" target="_blank"
        rel="nooperen noreferrer">
        {props.isInSaveMovies ? (
          <button type="button" className="moviescard__button_type_delete"></button>
        ) : (
          <button
            type="button"
            onClick={handleSaveClick}>
            className={`${props.isSaved
              ? "moviescard__button moviescard__button_active"
              : "moviescard__button"
              }`}
          </button>
        )}
        <div className="moviescard__text-container">
          <h2 className="moviescard__name">{props.card.nameRU}</h2>
          <p className="moviescard__duration">{minToHours(props.card.duration)}</p></div>
        <img className="moviescard__image" src={`https://api.nomoreparties.co${props.card.image.url}`} alt={props.card.nameRU} />
      </a>
    </li >

  );
}

export default MoviesCard;
