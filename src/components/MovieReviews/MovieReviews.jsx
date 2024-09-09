import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { getMovieReviews } from '../../api/tmdb';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

const MovieReviews = () => {
  const movieId = useOutletContext();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);

    getMovieReviews(movieId)
      .then(data => setMovieReviews(data.results))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}

      {!isError && !isLoading && movieReviews.length > 0 && (
        <ul>
          {movieReviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}

      {!isError && !isLoading && movieReviews.length === 0 && (
        <p>No reviews for this movie</p>
      )}
    </>
  );
};

export default MovieReviews;
