import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import api from "../../utils/MainApi";
import * as auth from "../../utils/auth";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import ErrorPopup from "../ErrorPopup/ErrorPopup";

function App() {
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isErrorOpen, setIsErrorOpen] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  let navigate = useNavigate();

  // регистрация
  function handleRegister({ name, email, password }) {
    auth.register(name, email, password).then((res) => {
      console.log(res);
      if (res.data) {
        setIsSuccess(true);
        setIsInfoTooltipOpen(true);
        auth.authorize(email, password).then((res) => {
          console.log(res);
          if (res) {
            setLoggedIn(true);
          } else {
            setIsSuccess(false);
            setIsInfoTooltipOpen(true);
          }
        })
      } else {
        setIsSuccess(false);
        setIsInfoTooltipOpen(true);
      }
    });
  }

  // авторизация
  function handleLogin({ email, password }) {
    auth.authorize(email, password).then((res) => {
      console.log(res);
      if (res) {
        setLoggedIn(true);
        navigate("/movies");
      } else {
        setIsSuccess(false);
        setIsInfoTooltipOpen(true);
      }
    });
  }

  // проверка токена для быстрого входа длля авторизованных пользователей
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      auth.checkToken(token).then((data) => {
        if (data) {
          setLoggedIn(true);
          navigate("/movies");
        } else {
          console.log("error");
        }
      });
    }
  }, [loggedIn]);

  // получаем данные о пользователе
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api
        .getUserInfo(token)
        .then((data) => {
          setCurrentUser(data);
          setEmail(data.email);
          setUserName(data.name);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  // Получаем сохраненные фильмы
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.getMovies(token)
        .then((movies) => {
          setSavedMovies(movies.movies);
          console.log(movies);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn])

  // сохранение-удаление фильма
  const handleMovieSaveOrDelete = ({ country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  }) => {
    const isSaved = savedMovies.some((i) => i.nameRU === nameRU);
    if (!isSaved) {
      const token = localStorage.getItem("token");
      api
        .saveMovie(country,
          director,
          duration,
          year,
          description,
          image,
          trailerLink,
          thumbnail,
          movieId,
          nameRU,
          nameEN,
          token
        )
        .then((savedMovie) => {
          setSavedMovies([savedMovie, ...savedMovies]);
          console.log(savedMovie);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const cardToDelete = savedMovies.find((i) => i.nameRU === nameRU);
      handleMovieDelete(cardToDelete._id);
    }
  };

  // удаление фильма
  const handleMovieDelete = (movieId) => {
    const token = localStorage.getItem("token");
    api
      .deleteMovieFromSaved(movieId, token)
      .then(() => {
        setSavedMovies((state) => state.filter((m) => m._id !== movieId));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // закрытия информационного окошка после успешного логина или регистрации
  function closeInfoTooltip() {
    setIsInfoTooltipOpen(false);
    if (isSuccess) {
      navigate("/movies");
    }
  }

  // закрытие информационного окошка редвктирования профиля
  function closeError() {
    setIsErrorOpen(false);
  }
  // function handleLoggedIn() {
  //   setLoggedIn(true);
  // }

  // выход из аккаунта
  function handleExit() {
    localStorage.removeItem("token");
    localStorage.removeItem("movies");
    localStorage.removeItem("long-movies");
    localStorage.removeItem("short-movies");
    localStorage.removeItem("keyword");
    localStorage.removeItem("allMoviesKeyword");
    localStorage.removeItem("checked");
    setLoggedIn(false);
    navigate("/");
  }
  // изменение данных профиля
  function handleChangeUserInfo({ name, email }) {
    const token = localStorage.getItem("token");
    api.changeUserInfo(name, email, token)
      .then((data) => {
        setCurrentUser(data);
        setEmail(data.email);
        setUserName(data.name);
        console.log(data);
        setIsSuccess(true);
        setIsErrorOpen(true);
      })
      .catch((err) => {
        console.log(err);
        setIsSuccess(false);
        setIsErrorOpen(true);
      });
  }

  return (
    <main className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          {/* {handleLoggedIn ? navigate("/movies") : navigate("/")} */}
          <Route
            path="/movies"
            element={<ProtectedRoute loggedIn={loggedIn} />}
          >
            <Route
              path="/movies"
              element={
                <Movies
                  savedMovies={savedMovies}
                  onSaveMovieClick={handleMovieSaveOrDelete}
                />
              }
            />
          </Route>
          <Route
            path="/saved-movies"
            element={<ProtectedRoute loggedIn={loggedIn} />}
          >
            <Route path="/saved-movies" element={<SavedMovies
              setSavedMovies={setSavedMovies}
              onMovieDelete={handleMovieDelete}
              savedMovies={savedMovies} />} />
          </Route>
          <Route
            path="/profile"
            element={<ProtectedRoute loggedIn={loggedIn} />}
          >
            <Route
              path="/profile"
              element={
                <Profile
                  username={userName}
                  useremail={email}
                  onExit={handleExit}
                  onSubmit={handleChangeUserInfo}
                />
              }
            />
          </Route>
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegister} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeInfoTooltip}
          isSuccess={isSuccess}
        />
        <ErrorPopup isOpen={isErrorOpen}
          onClose={closeError}
          isSuccess={isSuccess} />
      </CurrentUserContext.Provider>
    </main>
  );
}

export default App;
