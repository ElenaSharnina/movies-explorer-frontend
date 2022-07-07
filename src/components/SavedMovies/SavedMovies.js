import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SavedMoviesCardList from "./SavedMoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies({ savedMovies, onMovieDelete }) {
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [moviesToRender, setMoviesToRender] = React.useState([]);
  const [resNotFound, setResNotFound] = React.useState(false);
  const [somethingWasSearched, setSomethingWasSearched] = React.useState(false);
  const [serverError, setServerError] = React.useState(false);
  const [checked, setChecked] = React.useState(false);


  // Фильтр по ключевому слову и длительности
  const filterMoviesByKeyword = (keyword) =>
    savedMovies.filter(
      (item) => item.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );
  const filterMoviesByDuration = (films) =>
    films.filter((item) => item.duration < 40);

  // Сабмит формы поиска
  const handleSearch = (keyword) => {
    localStorage.setItem("keyword", keyword);
    setSomethingWasSearched(true);
    setFilteredMovies(filterMoviesByKeyword(keyword));
    setServerError(false);
  };

  // Получение фильмов
  const getMoviesToRender = () => {
    setServerError(false);
    if (!checked) {
      if (savedMovies.length === 0) {
        setMoviesToRender([]);
        setServerError(false);
        setResNotFound(true);
      } else if (!somethingWasSearched) {
        setMoviesToRender(savedMovies);
        setResNotFound(false);
      } else if (somethingWasSearched) {
        const keyword = localStorage.getItem("keyword");
        const filterMovies = filterMoviesByKeyword(keyword);
        if (filterMovies.length > 0) {
          setMoviesToRender(filterMovies);
          setResNotFound(false);
        } else {
          setMoviesToRender([]);
          setResNotFound(true);
        }
      }
    } else {
      if (savedMovies.length === 0) {
        setMoviesToRender([]);
        setServerError(false);
        setResNotFound(true);
      } else if (!somethingWasSearched) {
        const longMovies = savedMovies.filter((item) => item.duration < 40);
        setMoviesToRender(longMovies);
      } else if (somethingWasSearched) {
        const keyword = localStorage.getItem("keyword");
        const filterMovies = filterMoviesByKeyword(keyword);
        if (filterMovies.length > 0) {
          const filterShortMovies = filterMoviesByDuration(filterMovies);
          if (filterShortMovies.length > 0) {
            setMoviesToRender(filterShortMovies);
          } else {
            setMoviesToRender([]);
            setResNotFound(true);
          }
        } else {
          setMoviesToRender([]);
          setResNotFound(true);
        }
      }
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      getMoviesToRender();
      // localStorage.removeItem("keyword");
    }, 500);
  }, [somethingWasSearched, filteredMovies, savedMovies, checked]);


  const handleCheckClick = () => {
    setChecked(!checked);
    console.log("чек чекбокс");
  };

  return (
    <>
      <Header loggedIn={true} isVisited={false} />
      <SearchForm
        onSearch={handleSearch}
        onCheckClick={handleCheckClick}
        checked={checked}
      // savedKeyword={localStorage.getItem("keyword")}
      />
      <SavedMoviesCardList
        moviesToRender={moviesToRender}
        onMovieDelete={onMovieDelete}
        resNotFound={resNotFound}
        serverError={serverError}
      />
      <Footer />
    </>
  );
}

export default SavedMovies;
