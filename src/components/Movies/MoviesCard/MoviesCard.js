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

  function handleSaveMovieClick() {
    setMovieIsSaved(!movieIsSaved);
    props.onSaveMovieClick({
      nameRU: props.card.nameRU,
      image: `https://api.nomoreparties.co${props.card.image.url}`,
      trailerLink: props.card.trailerLink,
      duration: props.card.duration,
      country: props.card.country || 'null',
      director: props.card.director || 'null',
      year: props.card.year,
      description: props.card.description,
      thumbnail: `https://api.nomoreparties.co${props.card.image.formats.thumbnail.url}`,
      movieId: props.card.id.toString(),
      nameEN: props.card.nameEN || 'null',
    });
  }
  React.useEffect(() => {
    if (props.savedMovies.some((i) => i.nameRU === props.card.nameRU)) {
      setMovieIsSaved(true);
    }
  }, []);

  return (

    <li className="moviescard">
      <button
        type="button"
        onClick={handleSaveMovieClick}
        className={`${movieIsSaved
          ? "moviescard__button moviescard__button_active"
          : "moviescard__button"
          }`}
      ></button>
      <div className="moviescard__text-container">
        <h2 className="moviescard__name">{props.card.nameRU}</h2>
        <p className="moviescard__duration">{minToHours(props.card.duration)}</p></div><a href={props.card.trailerLink} className="moviescard__link" target="_blank"
          rel="nooperen noreferrer">
        <img className="moviescard__image" src={`https://api.nomoreparties.co${props.card.image.url}`} alt={props.card.nameRU} />
      </a>
    </li >

  );
}

export default MoviesCard;
