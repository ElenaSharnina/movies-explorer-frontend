import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies() {
  return (
    <>
      <Header loggedIn={true} isVisited={false} />
      <SearchForm />
      <MoviesCardList isInSaveMovies={true} />
      <Footer />
    </>
  )
}

export default SavedMovies;