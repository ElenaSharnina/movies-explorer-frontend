import { apiConfig } from "./constans";

export class Api {
  constructor(apiConfig) {
    this._url = apiConfig.url;
    this._headers = apiConfig.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  saveMovie = (movie
  ) =>
    fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailer: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then(this._checkResponse);

  deleteMovieFromSaved = (movieId) =>
    fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
}

const api = new Api(apiConfig);
export default api;
