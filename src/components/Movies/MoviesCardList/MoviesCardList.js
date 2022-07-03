import React from "react";
import Preloader from "../Preloader/Preloader"
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList(props) {

  return (
    <section className="cards page__container">
      <Preloader isVisible={props.isVisible} />
      <p className={`${props.resNotFound ? "res-not-found" : "res-not-found_hidden"}`}>По вашему запросу ничего не найдено</p>
      <p className={`${props.serverError ? "server-error" : "server-error_hidden"}`}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
      <ul className="cards__list">

        {props.isInSaveMovies ?
          (
            <>

            </>
          )
          :
          (
            <> {props.moviesToRender.map((card) =>
              <MoviesCard card={card}
                key={card.id}
                onSaveMovieClick={props.onSaveMovieClick}
                savedMovies={props.savedMovies}
              />)}
            </>)}
      </ul>
      <button type="button" onClick={props.onAnotherButtonClick} className={`${props.isAnotherButtonVisible ? "cards__button" : "cards__button_hidden"}`}>Ещё</button>
    </section>
  )
}

export default MoviesCardList;