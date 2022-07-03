import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import api from "../../utils/MainApi";



function App() {

  const [savedMovies, setSavedMovies] = React.useState([]);

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

  return (
    <main className="page">
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
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
}

export default App;
