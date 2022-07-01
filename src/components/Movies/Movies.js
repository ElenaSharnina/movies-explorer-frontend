import React from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import getMovies from '../../utils/MoviesApi';

function Movies() {

  const [moviesToRender, setMoviesToRender] = React.useState([]);

  //поиск фильмов
  function handleSearch(evt) {
    evt.preventDefault();
    getMovies()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // выключаем прелоадер
      });
  }
  return (
    <>
      <Header loggedIn={true} isVisited={true} />
      <SearchForm onSearch={handleSearch} />
      <MoviesCardList isInSaveMovies={false} moviesToRender={moviesToRender} />
      <Footer />
    </>
  )
}

export default Movies;