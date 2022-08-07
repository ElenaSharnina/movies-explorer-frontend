import React from "react";
import { useMediaPredicate } from "react-media-hook";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import getMovies from "../../utils/MoviesApi";
import { useNavigate } from "react-router-dom";

function Movies({ savedMovies, onSaveMovieClick }) {
  const [allMovies, setAllMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [filteredLongMovies, setFilteredLongMovies] = React.useState([]);
  const [filteredShortMovies, setFilteredShortMovies] = React.useState([]);
  const [moviesToRender, setMoviesToRender] = React.useState([]);
  const [preloaderIsVisible, setPreloaderIsVisible] = React.useState(false);
  const [checked, setChecked] = React.useState(localStorage.getItem('checked') || false);
  const [resNotFound, setResNotFound] = React.useState(false);
  const [serverError, setServerError] = React.useState(false);
  const [anotherButtonVisible, setAnotherButtonVisible] = React.useState(false);
  // const [somethingWasSearched, setSomethingWasSearched] = React.useState(false);
  // let navigate = useNavigate();
  const isMobile = useMediaPredicate("(max-width: 550px)");
  const isPad = useMediaPredicate("(min-width: 551px)");
  const isDexstop = useMediaPredicate("(min-width: 768px)");

  // счетчик фильмов при загрузки
  const setCountInitialCards = () => {
    let i;
    if (isDexstop) {
      i = 12;
    } else if (isPad) {
      i = 8;
    } else if (isMobile) {
      i = 5;
    }
    return i;
  };
  const [maxCards, setMaxCards] = React.useState(setCountInitialCards());
  // счетчик фильмов при нажатии на еще
  const setCountAnotherCards = () => {
    let i;
    if (isDexstop) {
      i = 3;
    } else if (isPad) {
      i = 2;
    } else if (isMobile) {
      i = 2;
    }
    return i;
  };

  // подчищающие стейты
  const setDefaultStates = () => {
    setAnotherButtonVisible(false);
    setResNotFound(false);
    setMaxCards(setCountInitialCards());
    setMoviesToRender([]);
    localStorage.removeItem("movies");
    localStorage.removeItem("long-movies");
    localStorage.removeItem("short-movies");
  };

  // получаем фильмы с сервера при загрузки страницы
  React.useEffect(() => {
    if (allMovies.length === 0) {
      getMovies()
        .then((movies) => {
          setAllMovies(movies);
          console.log(movies);
        })
        .catch((err) => {
          console.log(err);
          setServerError(true);
        });
    }
  }, []);

  // корректное количество фильмов для рендера
  const getMoviesToRender = (films) => {
    const movies = [];
    for (let i = 0; i < maxCards && i < films.length; i += 1) {
      movies.push(films[i]);
    }
    setMoviesToRender(movies);
    setTimeout(() => {
      if (films.length > maxCards) {
        setAnotherButtonVisible(true);
      } else {
        setAnotherButtonVisible(false);
      }
    }, 300);
  };

  //сабмит поиска фильмов
  function handleSearch(keyword) {
    localStorage.setItem("allMoviesKeyword", keyword);
    setDefaultStates();
    setPreloaderIsVisible(true);
    const filterMovies = allMovies.filter(
      (film) => film.nameRU.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );
    const shortMovies = filterMovies.filter((movie) => {
      return movie.duration < 40;
    });
    const longMovies = filterMovies.filter((movie) => {
      return movie.duration > 40;
    });

    if (filterMovies.length > 0) {
      setFilteredMovies(filterMovies);
      localStorage.setItem("movies", JSON.stringify(filterMovies));
    }
    if (longMovies.length > 0) {
      setFilteredLongMovies(longMovies);
      localStorage.setItem("long-movies", JSON.stringify(longMovies));
    } else {
      setFilteredLongMovies([]);
      setResNotFound(true);
    }
    if (shortMovies.length > 0) {
      setFilteredShortMovies(shortMovies);
      localStorage.setItem("short-movies", JSON.stringify(shortMovies));
    } else {
      setFilteredShortMovies([]);
      setResNotFound(true);
    }
    if (filterMovies.length === 0) {
      setFilteredMovies([]);
      setFilteredLongMovies([]);
      setTimeout(() => {
        setResNotFound(true);
        setPreloaderIsVisible(false);
      }, 300);
    }
  }
  // парсинг из сториджа
  function getMoviesFromStorage(itemName) {
    return JSON.parse(localStorage.getItem(itemName));
  }
  // логика рендера
  const renderMovies = () => {

    if (!checked) {
      setServerError(false);
      if (filteredMovies.length > 0) {
        getMoviesToRender(filteredMovies);
        setResNotFound(false);
      } else if (
        filteredMovies.length === 0 &&
        localStorage.getItem("movies")
      ) {
        getMoviesToRender(getMoviesFromStorage("movies"));
      } else {
        setResNotFound(false);
        setMoviesToRender([]);
      }
    } else {
      if (filteredShortMovies.length > 0) {
        getMoviesToRender(filteredShortMovies);
      } else if (
        filteredShortMovies.length === 0 &&
        localStorage.getItem("short-movies")
      ) {
        getMoviesToRender(getMoviesFromStorage("short-movies"));
      } else if (filteredShortMovies.length === 0) {
        setResNotFound(true);
        setMoviesToRender([]);
      }
    }
    setPreloaderIsVisible(false);
  };

  if (checked) {
    console.log("hi");
    localStorage.setItem('checked', checked);
  }
  // меняем рендер
  React.useEffect(() => {
    renderMovies();

    // localStorage.removeItem("keyword");
  }, [filteredMovies, filteredLongMovies, maxCards, checked,]);

  // клик по чекбоксу
  function handleCheckClick() {
    setChecked(!checked);
    // setServerError(false);
  }

  // клик по кнопке еще
  const handleAnotherButtonClick = () => {
    setMaxCards(maxCards + setCountAnotherCards());
    console.log("клик клик");
  };

  return (
    <>
      <Header loggedIn={true} isVisited={true} />
      <SearchForm
        onSearch={handleSearch}
        onCheckClick={handleCheckClick}
        checked={checked}
        savedKeyword={localStorage.getItem("allMoviesKeyword")}
      />
      <MoviesCardList
        moviesToRender={moviesToRender}
        isVisible={preloaderIsVisible}
        resNotFound={resNotFound}
        serverError={serverError}
        isAnotherButtonVisible={anotherButtonVisible}
        onAnotherButtonClick={handleAnotherButtonClick}
        savedMovies={savedMovies}
        onSaveMovieClick={onSaveMovieClick}
      />
      <Footer />
    </>
  );
}

export default Movies;
