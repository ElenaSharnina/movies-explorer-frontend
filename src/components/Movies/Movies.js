import React from "react";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies() {
  return (
    <>
      <Header loggedIn={true} isVisited={true} />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  )
}

export default Movies;