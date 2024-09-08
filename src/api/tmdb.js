import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzYyZWU1YWJhOWI5NjE2NmI5ODc4NDM1OTFhNGM3NSIsIm5iZiI6MTcyNTUxOTU1My44NDc3NjcsInN1YiI6IjY2ZDk1MWEzYWFhNmY1MTgxZTkyN2YxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-RGqq5lON5RUB7G__d6SqQVOh3WYPeEiEr98PlrEZUM',
};

export function getTrendingMovies(timeWindow = 'day') {
  return axios
    .get(`trending/movie/${timeWindow}`)
    .then(response => response.data);
}

export function getMovies(query, page = 1) {
  return axios
    .get(`search/movie`, {
      params: {
        query,
        page,
      },
    })
    .then(response => response.data);
}

export function getMovieDetails(movieId) {
  return axios.get(`movie/${movieId}`).then(response => response.data);
}

export function getMovieCredits(movieId) {
  return axios.get(`movie/${movieId}/credits`).then(response => response.data);
}

export function getMovieReviews(movieId, page) {
  return axios
    .get(`movie/${movieId}/reviews`, {
      params: {
        page,
      },
    })
    .then(response => response.data);
}

export function getImagePath(path) {
  return `https://image.tmdb.org/t/p/w500${path}`;
}
