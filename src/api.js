import axios from "axios";

export const moviesApi = {
  moviePopular: () =>
    axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=ea820cee70dfd0fa10695f6e74b67981&language=ko"
    ),
  movieDetail: (id) =>
    axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=ea820cee70dfd0fa10695f6e74b67981&language=ko`
    ),
  nowPlaying: () =>
    axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=ea820cee70dfd0fa10695f6e74b67981&language=ko&page=1"
    ),
  movieUpComing: () =>
    axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=ea820cee70dfd0fa10695f6e74b67981&language=ko"
    ),
  movieSearch: (term) =>
    axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=ea820cee70dfd0fa10695f6e74b67981&language=ko&query=${term}`
    ),
};

export const tvApi = {
  TVtopRated: () =>
    axios.get(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=ea820cee70dfd0fa10695f6e74b67981&language=ko"
    ),
  TVpopular: () =>
    axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=ea820cee70dfd0fa10695f6e74b67981&language=ko"
    ),
  TVairingToday: () =>
    axios.get(
      "https://api.themoviedb.org/3/tv/airing_today?api_key=ea820cee70dfd0fa10695f6e74b67981&language=ko"
    ),
  TVshowDetail: (id) =>
    axios.get(`
    https://api.themoviedb.org/3/tv/${id}?api_key=ea820cee70dfd0fa10695f6e74b67981&language=ko&append_to_response=videos`),
  TVsearch: (term) =>
    axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=ea820cee70dfd0fa10695f6e74b67981&language=ko&query=${term}`
    ),
};
