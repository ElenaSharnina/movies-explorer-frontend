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

  saveMovie = (country,
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
    owner,
  ) =>
    fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country,
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
        owner,
      }),
    }).then(this._checkResponse);

  deleteMovieFromSaved = (movieId) =>
    fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }
  changeUserInfo(name, email) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email
      })

    }).then(this._checkResponse)
  }
}

const api = new Api(apiConfig);
export default api;
