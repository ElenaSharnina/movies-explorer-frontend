import React from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import getMovies from '../../utils/MoviesApi';

function Movies() {

  const [moviesToRender, setMoviesToRender] = React.useState([]);
  const [preloaderIsVisible, setPreloaderIsVisible] = React.useState(false);


  //поиск фильмов
  function handleSearch(evt) {
    evt.preventDefault();
    setPreloaderIsVisible(true);
    getMovies()
      .then((res) => {
        console.log(res);
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
      <MoviesCardList isInSaveMovies={false} moviesToRender={moviesToRender} isVisible={preloaderIsVisible} />
      <Footer />
    </>
  )
}

export default Movies;