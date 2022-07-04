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
  // const [isSuccessProfile, setIsSuccessProfile] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [userName, setUserName] = React.useState("");
  let navigate = useNavigate();

  function handleRegister({ name, email, password }) {
    auth.register(name, email, password).then((res) => {
      console.log(res);
      if (res.data) {
        setIsSuccess(true);
        setIsInfoTooltipOpen(true);
      } else {
        setIsSuccess(false);
        setIsInfoTooltipOpen(true);
      }
    });
  }

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

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
        setEmail(data.email);
        setUserName(data.name);
        console.log(data);

      })
      .catch((err) => {
        console.log(err);

      });
  }, []);

  const handleMovieSaveOrDelete = (movie) => {
    const isSaved = savedMovies.some((i) => i.nameRU === movie.nameRU);
    if (!isSaved) {
      api
        .saveMovie(movie)
        .then((savedMovie) => {
          setSavedMovies([savedMovie, ...savedMovies]);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const cardToDelete = savedMovies.find((i) => i.nameRU === movie.nameRU);
      handleMovieDelete(cardToDelete._id);
    }
  };

  const handleMovieDelete = (movieId) => {
    api
      .deleteMovieFromSaved(movieId)
      .then(() => {
        setSavedMovies((state) => state.filter((m) => m._id !== movieId));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function closeInfoTooltip() {
    setIsInfoTooltipOpen(false);
    if (isSuccess) {
      navigate("/movies");
    }
  }

  function closeError() {
    setIsErrorOpen(false);
  }
  // function handleLoggedIn() {
  //   setLoggedIn(true);
  // }
  function handleExit() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  }
  function handleChangeUserInfo({ name, email }) {
    api.changeUserInfo(name, email)
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
          <Route path="/" element={<Main />} />
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
            <Route path="/saved-movies" element={<SavedMovies />} />
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
