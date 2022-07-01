import React from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import getMovies from '../../utils/MoviesApi';

function Movies({ isInSaveMovies }) {

  const [moviesToRender, setMoviesToRender] = React.useState([]);
  const [preloaderIsVisible, setPreloaderIsVisible] = React.useState(false);
  const [checked, setChecked] = React.useState(true);


  //поиск фильмов
  function handleSearch(evt) {
    evt.preventDefault();
    setPreloaderIsVisible(true);
    getMovies()
      .then((movies) => {
        const shortMovies = movies.filter((movie) => {
          return movie.duration < 40
        });
        const longMovies = movies.filter((movie) => {
          return movie.duration > 40
        });
        console.log(movies);
        if (checked) {
          setMoviesToRender(shortMovies);
        }
        else setMoviesToRender(longMovies)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPreloaderIsVisible(false);
      });
  }
  if (checked) {
    console.log('hi');
  }
  function handleCheckClick() {
    setChecked(!checked);
  }
  return (
    <>
      <Header loggedIn={true} isVisited={true} />
      <SearchForm onSearch={handleSearch} onCheckClick={handleCheckClick} checked={checked} />
      <MoviesCardList isInSaveMovies={isInSaveMovies} moviesToRender={moviesToRender} isVisible={preloaderIsVisible} />
      <Footer />
    </>
  )
}

export default Movies;