import React from "react";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  isVisible,
  resNotFound,
  serverError,
  moviesToRender,
  onSaveMovieClick,
  savedMovies,
  onAnotherButtonClick,
  isAnotherButtonVisible,
}) {
  return (
    <section className="cards page__container">
      <Preloader isVisible={isVisible} />
      <p
        className={`${resNotFound ? "res-not-found" : "res-not-found_hidden"}`}
      >
        По вашему запросу ничего не найдено
      </p>
      <p className={`${serverError ? "server-error" : "server-error_hidden"}`}>
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз
      </p>
      <ul className="cards__list">
        {moviesToRender.map((card) => (
          <MoviesCard
            card={card}
            key={card.id}
            onSaveMovieClick={onSaveMovieClick}
            savedMovies={savedMovies}
          />
        ))}
      </ul>
      <button
        type="button"
        onClick={onAnotherButtonClick}
        className={`${isAnotherButtonVisible ? "cards__button" : "cards__button_hidden"
          }`}
      >
        Ещё
      </button>
    </section>
  );
}

export default MoviesCardList;
