import React from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import getMovies from '../../utils/MoviesApi';

function Movies({ isInSaveMovies }) {

  const [moviesToRender, setMoviesToRender] = React.useState([]);
  const [preloaderIsVisible, setPreloaderIsVisible] = React.useState(false);


  //поиск фильмов
  function handleSearch(evt) {
    evt.preventDefault();
    setPreloaderIsVisible(true);
    getMovies()
      .then((movies) => {
        console.log(movies);
        setMoviesToRender(movies);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPreloaderIsVisible(false);
      });
  }
  return (
    <>
      <Header loggedIn={true} isVisited={true} />
      <SearchForm onSearch={handleSearch} />
      <MoviesCardList isInSaveMovies={isInSaveMovies} moviesToRender={moviesToRender} isVisible={preloaderIsVisible} />
      <Footer />
    </>
  )
}

export default Movies;