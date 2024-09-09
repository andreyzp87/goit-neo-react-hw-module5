import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getImagePath, getMovieCredits } from '../../api/tmdb';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import style from './MovieCast.module.css';

const MovieCast = () => {
  const movieId = useOutletContext();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    getMovieCredits(movieId)
      .then(data => setMovieCast(data.cast))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {!isError && !isLoading && movieCast.length > 0 && (
        <ul className={style.movieCast}>
          {movieCast.map(actor => (
            <li key={actor.id}>
              {actor.profile_path && (
                <img src={getImagePath(actor.profile_path)} alt={actor.name} />
              )}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}

      {!isError && !isLoading && movieCast.length === 0 && (
        <p>No cast for this movie</p>
      )}
    </>
  );
};

export default MovieCast;
