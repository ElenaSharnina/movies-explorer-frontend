import React from "react";
import SavedMoviesCard from "./SavedMoviesCard";

function SavedMoviesCardList(props) {
  return (
    <section className="cards page__container">
      <p className={`${props.resNotFound ? "res-not-found" : "res-not-found_hidden"}`}>По вашему запросу ничего не найдено</p>
      <p className={`${props.serverError ? "server-error" : "server-error_hidden"}`}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
      <ul className="cards__list">

        {props.moviesToRender.map((card) =>
          <SavedMoviesCard card={card}
            key={card._id}
            onMovieDelete={props.onMovieDelete}
          />)}

      </ul>
    </section>
  )
}

export default SavedMoviesCardList;