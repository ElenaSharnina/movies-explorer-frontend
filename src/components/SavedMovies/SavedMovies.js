import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import SavedMoviesCardList from "./SavedMoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies(props) {

  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [moviesToRender, setMoviesToRender] = React.useState([]);
  const [resNotFound, setResNotFound] = React.useState(false);
  const [somethingWasSearched, setSomethingWasSearched] = React.useState(false);
  const [serverError, setServerError] = React.useState(false);
  const [checked, setChecked] = React.useState(true);


  // Фильтр по ключевому слову
  const filterMoviesByKeyword = (keyword) => props.savedMovies.filter(
    (item) => item.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1,
  );

  // Фильтр по длительности
  const filterMoviesByDuration = (films) => films.filter(
    (item) => item.duration > 40,
  );

  // Сабмит формы поиска
  const handleSearch = ({ keyword }) => {
    localStorage.setItem('keyword', keyword);
    setSomethingWasSearched(true);
    setFilteredMovies(filterMoviesByKeyword(keyword));
    setServerError(false);
  };

  // Получение фильмов для рендера
  const getMoviesToRender = () => {
    setServerError(false);
    if (checked) {
      if (props.savedMovies.length === 0) {
        setMoviesToRender([]);
        setServerError(false);
      } else if (!somethingWasSearched) {
        setMoviesToRender(props.savedMovies);
      } else if (somethingWasSearched) {
        const keyword = localStorage.getItem('keyword');
        const filMovies = filterMoviesByKeyword(keyword);
        if (filMovies.length > 0) {
          setMoviesToRender(filMovies);
        } else {
          setMoviesToRender([]);
          setResNotFound(true);
        }
      }
    } else {
      if (props.savedMovies.length === 0) {
        setMoviesToRender([]);
        setServerError(false);
      } else if (!somethingWasSearched) {
        const long = props.savedMovies.filter(
          (item) => item.duration > 40,
        );
        setMoviesToRender(long);
      } else if (somethingWasSearched) {
        const keyword = localStorage.getItem('keyword');
        const filMovies = filterMoviesByKeyword(keyword);
        if (filMovies.length > 0) {
          const filLongMovies = filterMoviesByDuration(filMovies);
          if (filLongMovies.length > 0) {
            setMoviesToRender(filLongMovies);
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

  // Рендер фильмов
  React.useEffect(() => {
    setTimeout(() => {
      getMoviesToRender();
    }, 500);
  }, [somethingWasSearched, filteredMovies, props.savedMovies, checked]);

  // Клик по чекбоксу 'Короткометражки'
  const handleCheckClick = () => {
    setChecked(!checked);
  };

  return (
    <>
      <Header loggedIn={true} isVisited={false} />
      <SearchForm onSearch={handleSearch}
        onCheckClick={handleCheckClick}
        checked={checked} />
      <SavedMoviesCardList moviesToRender={moviesToRender}
        onMovieDelete={props.onMovieDelete} resNotFound={resNotFound}
        serverError={serverError} />
      <Footer />
    </>
  );
}

export default SavedMovies;
