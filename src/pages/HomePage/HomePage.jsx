import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api/tmdb';
import MovieList from '../../components/MovieList/MovieList';
import { ErrorMessage } from 'formik';
import Loader from '../../components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getTrendingMovies()
      .then(data => setMovies(data.results))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <MovieList movies={movies} state={{ from: '/' }} />
    </div>
  );
};

export default HomePage;
