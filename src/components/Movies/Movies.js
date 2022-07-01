import React from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import getMovies from '../../utils/MoviesApi';

function Movies({ isInSaveMovies }) {

  const [moviesToRender, setMoviesToRender] = React.useState([]);
  const [preloaderIsVisible, setPreloaderIsVisible] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [resNotFound, setResNotFound] = React.useState(false);
  const [serverError, setServerError] = React.useState(false);


  //поиск фильмов
  function handleSearch(keyword) {
    setPreloaderIsVisible(true);
    getMovies()
      .then((movies) => {

        console.log(movies);
        const filterMovies = movies.filter(
          (film) => film.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1,
        );
        const shortMovies = filterMovies.filter((movie) => {
          return movie.duration < 40
        });
        const longMovies = filterMovies.filter((movie) => {
          return movie.duration > 40
        });
        if (checked) {
          setServerError(false);
          setMoviesToRender(shortMovies);
          if (shortMovies.length < 1) {
            setResNotFound(true);
          }
          else {
            setResNotFound(false);
          }
        }
        else {
          setMoviesToRender(longMovies);
          setServerError(false);
          if (longMovies.length < 1) {
            setResNotFound(true);
          }
          else {
            setResNotFound(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setServerError(true);
        setResNotFound(false);
      })
      .finally(() => {
        setPreloaderIsVisible(false);
        setServerError(false);
      });
  }
  if (checked) {
    console.log('hi');
  }
  function handleCheckClick() {
    setChecked(!checked);
    handleSearch();
  }
  return (
    <>
      <Header loggedIn={true} isVisited={true} />
      <SearchForm onSearch={handleSearch} onCheckClick={handleCheckClick} checked={checked} />
      <MoviesCardList isInSaveMovies={isInSaveMovies} moviesToRender={moviesToRender} isVisible={preloaderIsVisible} resNotFound={resNotFound} serverError={serverError} />
      <Footer />
    </>
  )
}

export default Movies;