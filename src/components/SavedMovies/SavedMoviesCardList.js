import React from "react";
import SavedMoviesCard from "./SavedMoviesCard";

function SavedMoviesCardList({
  resNotFound,
  serverError,
  moviesToRender,
  onMovieDelete,
}) {
  return (
    <section className="cards page__container">
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
          <SavedMoviesCard
            card={card}
            key={card._id}
            onMovieDelete={onMovieDelete}
          />
        ))}
      </ul>
    </section>
  );
}

export default SavedMoviesCardList;
