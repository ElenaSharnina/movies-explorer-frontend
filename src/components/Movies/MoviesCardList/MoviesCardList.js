
import React from "react";
import { useState, useEffect } from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader"



function MoviesCardList(props) {

  // const [filteredMovies, setFilteredMovies] = useState([]);
  // useEffect(() => {
  //   setFilteredMovies();
  // }, [])

  return (
    <section className="cards page__container">
      <Preloader isVisible={props.isVisible} />
      <ul className="cards__list">

        {props.isInSaveMovies ?
          (
            <>
              {/* //<MoviesCard nameRU={"33 слова о дизайне"} duration={"1ч 47м"} link={Image1} isSaved={false} isInSaveMovies={props.isInSaveMovies} />
            //   <MoviesCard nameRU={"33 слова о дизайне"} duration={"1ч 47м"} link={Image2} isSaved={false} isInSaveMovies={props.isInSaveMovies} />
            //   <MoviesCard nameRU={"33 слова о дизайне"} duration={"1ч 47м"} link={Image3} isSaved={true} isInSaveMovies={props.isInSaveMovies} /> */}
            </>)
          :
          (
            <> {props.moviesToRender.map((card) =>
              <MoviesCard card={card}
                key={card.id}
              />)}
            </>)}
      </ul>
      <button type="button" className={`${props.isInSaveMovies ? "cards__button_hidden" : "cards__button"}`}>Ещё</button>
    </section>
  )
}

export default MoviesCardList;