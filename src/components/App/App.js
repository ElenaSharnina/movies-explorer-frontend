import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
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



function App() {

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
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

  // React.useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     api
  //       .getUserInfoApi(token)
  //       .then((data) => {
  //         setCurrentUser(data);
  //         console.log(data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [

  // ]);

  const handleMovieSaveOrDelete = (movie) => {
    const isSaved = savedMovies.some((i) => i.nameRU === movie.nameRU);
    if (!isSaved) {
      api.saveMovie(
        movie
      )
        .then((savedMovie) => {
          setSavedMovies([savedMovie, ...savedMovies]);
        })
        .catch((err) => {
          console.log(err)
        });
    } else {
      const cardToDelete = savedMovies.find((i) => i.nameRU === movie.nameRU);
      handleMovieDelete(cardToDelete._id);
    }
  };

  const handleMovieDelete = (movieId) => {
    api.deleteMovieFromSaved(movieId)
      .then(() => {
        setSavedMovies((state) => state.filter((m) => m._id !== movieId));
      })
      .catch((err) => {
        console.log(err)
      });
  };

  function closeInfoTooltip() {
    setIsInfoTooltipOpen(false);
    if (isSuccess) {
      navigate("/signin");
    }
  }

  return (
    <main className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies savedMovies={savedMovies}
            onSaveMovieClick={handleMovieSaveOrDelete} />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route
            path="/profile"
            element={
              <Profile username={"Виталий"} useremail={"pochta@yandex.ru"} />
            }
          />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register onRegister={handleRegister} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          onClose={closeInfoTooltip}
          isSuccess={isSuccess}
        />
      </CurrentUserContext.Provider>
    </main>
  );
}

export default App;
