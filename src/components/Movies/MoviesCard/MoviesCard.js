import React from "react";
import { minToHours } from "../../../utils/constans";

function MoviesCard({ card, onSaveMovieClick, savedMovies }) {
  const [movieIsSaved, setMovieIsSaved] = React.useState(false);

  function handleSaveMovieClick() {
    setMovieIsSaved(!movieIsSaved);
    onSaveMovieClick({
      nameRU: card.nameRU || card.nameEN,
      image: `https://api.nomoreparties.co${card.image.url}`,
      trailerLink: card.trailerLink,
      duration: card.duration,
      country: card.country || "null",
      director: card.director || "null",
      year: card.year,
      description: card.description,
      thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
      movieId: card.id.toString(),
      nameEN: card.nameEN || "null",
    });
  }
  React.useEffect(() => {
    if (savedMovies.some((i) => i.nameRU === card.nameRU)) {
      setMovieIsSaved(true);
    }
  }, []);

  return (
    <li className="moviescard">
      <button
        title={`${movieIsSaved
          ? "Сохранить"
          : "Удалить из сохраненного"}`}
        type="button"
        onClick={handleSaveMovieClick}
        className={`${movieIsSaved
          ? "moviescard__button moviescard__button_active"
          : "moviescard__button"
          }`}
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
          src={`https://api.nomoreparties.co${card.image.url}`}
          alt={card.nameRU}
        />
      </a>
    </li>
  );
}

export default MoviesCard;
