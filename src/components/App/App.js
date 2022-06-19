import React from "react";
import { Route, Switch } from 'react-router-dom';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";


function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main />
        </Route>
        <Route path="/movies">
          <Header />
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <Header />
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route path="/signin">
          <Header />
          <Login />
        </Route>
        <Route path="/signup">
          <Header />
          <Register />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
