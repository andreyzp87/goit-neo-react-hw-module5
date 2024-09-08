import { getImagePath } from '../../api/tmdb';
import style from './MovieDetails.module.css';

const MovieDetails = ({ movie }) => {
  if (!movie) {
    return null;
  }

  const genres = movie.genres.map(genre => genre.name).join(', ');

  return (
    <div className={style.movieDetails}>
      <div>
        <img src={getImagePath(movie.poster_path)} />
      </div>
      <div>
        <h1>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h1>
        <p>User score: {Math.round(movie.vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
